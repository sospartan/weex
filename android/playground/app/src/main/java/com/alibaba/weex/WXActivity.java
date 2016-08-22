package com.alibaba.weex;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.content.LocalBroadcastManager;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.alibaba.weex.constants.Constants;
import com.alibaba.weex.https.WXHttpManager;
import com.alibaba.weex.https.WXHttpTask;
import com.alibaba.weex.https.WXRequestListener;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.IWXDebugProxy;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXLogUtils;

import java.util.HashMap;
import java.util.Map;

public class WXActivity extends WXBaseActivity implements IWXRenderListener,
                                                          WXRequestListener {

  private static final String TAG = "WXActivity";

  private ViewGroup mContainer;
  private ProgressBar mProgressBar;
  private TextView mTipView;

  private Uri mUri;
  private WXSDKInstance mWXSDKInstance;

  private BroadcastReceiver mReceiver;


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_wx);

    mUri = checkAndAssembleUri(getIntent().getData());
    if (mUri == null) {
      Toast.makeText(this, R.string.illegal_url_tip, Toast.LENGTH_SHORT).show();
      finish();
      return;
    }

    mContainer = (ViewGroup) findViewById(R.id.wx_container);
    mProgressBar = (ProgressBar) findViewById(R.id.wx_progressbar);
    mTipView = (TextView) findViewById(R.id.wx_tip_view);

    String scheme = mUri.getScheme();
    if (TextUtils.equals(scheme, "file")) {
      mProgressBar.setVisibility(View.GONE);
      mTipView.setVisibility(View.GONE);
      createInstance(WXFileUtils.loadAsset(getAssetsFilePath(mUri), this));
    } else {
      sendRequestByNetwork(mUri);
    }

    mReceiver = new RefreshReceive();
    registerRefreshBroadcastReceiver();
  }

  private void registerRefreshBroadcastReceiver() {
    IntentFilter filter = new IntentFilter();
    filter.addAction(IWXDebugProxy.ACTION_DEBUG_INSTANCE_REFRESH);
    registerReceiver(mReceiver, filter);

    filter = new IntentFilter();
    filter.addAction(mUri.toString());
    LocalBroadcastManager.getInstance(this).registerReceiver(mReceiver, filter);
  }

  private void unRegisterRefreshBroadcastReceiver() {
    LocalBroadcastManager.getInstance(this).unregisterReceiver(mReceiver);
    unregisterReceiver(mReceiver);
  }


  private void createInstance(String template) {
    if (mWXSDKInstance != null) {
      mWXSDKInstance.destroy();
      mWXSDKInstance.registerRenderListener(null);
      mWXSDKInstance = null;
    }
    mWXSDKInstance = new WXSDKInstance(this);
    mWXSDKInstance.registerRenderListener(this);
    mWXSDKInstance.onActivityCreate();
    Map<String, Object> options = new HashMap<>();
    options.put(WXSDKInstance.BUNDLE_URL, mUri.toString());
    mWXSDKInstance.render(template, options, null);
  }

  private void sendRequestByNetwork(Uri uri) {
    WXHttpTask httpTask = new WXHttpTask();
    httpTask.requestListener = this;
    httpTask.url = uri.toString();
    WXHttpManager.getInstance().sendRequest(httpTask);
    mProgressBar.setVisibility(View.VISIBLE);
    mTipView.setVisibility(View.GONE);
  }

  private String getAssetsFilePath(Uri uri) {
    if (uri != null && uri.getPath() != null) {
      return uri.getPath().replaceFirst("/", "");
    }
    return "";
  }

  private Uri checkAndAssembleUri(Uri uri) {
    if (uri != null) {
      String scheme = uri.getScheme();
      if (TextUtils.isEmpty(scheme)) {
        uri = uri.buildUpon().scheme("http").build();
      }
      String tplUrl = uri.getQueryParameter(Constants.WEEX_TPL_KEY);
      if (!TextUtils.isEmpty(tplUrl)) {
        uri = Uri.parse(tplUrl);
      }
    }
    return uri;
  }

  @Override
  public void onSuccess(WXHttpTask task) {
    if (task != null && task.response != null && task.response.code == 200) {
      String template = new String(task.response.data);
      createInstance(template);
    } else {
      mProgressBar.setVisibility(View.GONE);
      mTipView.setVisibility(View.VISIBLE);
      mTipView.setText("network error!");
    }
  }

  @Override
  public void onError(WXHttpTask task) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.VISIBLE);
    mTipView.setText("network error!");
  }

  @Override
  public void onViewCreated(WXSDKInstance instance, View view) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.GONE);
    if (mContainer != null) {
      mContainer.removeAllViews();
    }
    mContainer.addView(view);
    instance.setSize(mContainer.getWidth(), mContainer.getHeight());
  }

  @Override
  public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
    WXLogUtils.d("into--[onRenderSuccess] instance id:" +
                 instance.getInstanceId() + " width:" +
                 width + " height:" + height);
  }

  @Override
  public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
    WXLogUtils.d("into--[onRefreshSuccess] instance id:" +
                 instance.getInstanceId() + " width:" +
                 width + " height:" + height);
  }

  @Override
  public void onException(WXSDKInstance instance, String errCode, String msg) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.GONE);
    if (!TextUtils.isEmpty(errCode) && errCode.contains("|")) {
      String codeType = errCode.substring(0, errCode.indexOf("|"));
      if (TextUtils.equals("1", codeType)) {
        degradeToWebView(getIntent().getData());
        finish();
        return;
      }
    } else {
      mTipView.setVisibility(View.VISIBLE);
      mTipView.setText(msg);
    }
  }

  private void degradeToWebView(Uri uri) {

  }

  @Override
  protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityResult(requestCode, resultCode, data);
    }
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
  }

  @Override
  protected void onStart() {
    super.onStart();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityStart();
    }
  }

  @Override
  protected void onResume() {
    super.onResume();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityResume();
    }
  }

  @Override
  protected void onPause() {
    super.onPause();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityResume();
    }
  }

  @Override
  protected void onStop() {
    super.onStop();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityStop();
    }
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityDestroy();
    }
    unRegisterRefreshBroadcastReceiver();
  }

  class RefreshReceive extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
      if (IWXDebugProxy.ACTION_DEBUG_INSTANCE_REFRESH.equals(intent.getAction()) ||
          mUri.toString().equals(intent.getAction())) {
        String scheme = mUri.getScheme();
        if (TextUtils.equals(scheme, "file")) {
          createInstance(WXFileUtils.loadAsset(getAssetsFilePath(mUri), context));
        } else {
          sendRequestByNetwork(mUri);
        }
      }
    }
  }
}
