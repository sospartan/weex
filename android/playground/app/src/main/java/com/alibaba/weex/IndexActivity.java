package com.alibaba.weex;

import com.google.zxing.client.android.CaptureActivity;

import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v4.content.LocalBroadcastManager;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.weex.commons.AbstractWeexActivity;
import com.alibaba.weex.https.WXHttpManager;
import com.alibaba.weex.https.WXHttpTask;
import com.alibaba.weex.https.WXRequestListener;
import com.taobao.weex.WXRenderErrorCode;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXLogUtils;
import com.taobao.weex.utils.WXSoInstallMgrSdk;

public class IndexActivity extends AbstractWeexActivity {

  private static final int CAMERA_PERMISSION_REQUEST_CODE = 0x1;
  private static final String TAG = "IndexActivity";
  private static final String APP_INFO_URL = "http://h5.m.taobao.com/js/weex/playground/app/info.js";
  private static final String DEFAULT_IP = "your_current_IP";
  private static String CURRENT_IP= DEFAULT_IP; // your_current_IP
  private static final String WEEX_INDEX_URL = "http://"+CURRENT_IP+":12580/examples/build/index.js";

  private ProgressBar mProgressBar;
  private TextView mTipView;

  private BroadcastReceiver mReloadReceiver;


  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_index);
    setContainer((ViewGroup) findViewById(R.id.index_container));
    Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
    toolbar.setTitle("WEEX");
    setSupportActionBar(toolbar);

    mProgressBar = (ProgressBar) findViewById(R.id.index_progressBar);
    mTipView = (TextView) findViewById(R.id.index_tip);
    mProgressBar.setVisibility(View.VISIBLE);
    mTipView.setVisibility(View.VISIBLE);


    if(!WXSoInstallMgrSdk.isCPUSupport()){
      mProgressBar.setVisibility(View.INVISIBLE);
      mTipView.setText(R.string.cpu_not_support_tip);
      return;
    }

    if(TextUtils.equals(CURRENT_IP,DEFAULT_IP)){
      renderPage(WXFileUtils.loadAsset("index.js", this),WEEX_INDEX_URL);
    }else{
      renderPageByURL(WEEX_INDEX_URL);
    }


    mReloadReceiver=new BroadcastReceiver() {
      @Override
      public void onReceive(Context context, Intent intent) {
        createWeexInstance();
        if(TextUtils.equals(CURRENT_IP,DEFAULT_IP)){
          renderPage(WXFileUtils.loadAsset("index.js", IndexActivity.this),WEEX_INDEX_URL);
        }else{
          renderPageByURL(WEEX_INDEX_URL);
        }
        mProgressBar.setVisibility(View.VISIBLE);
      }
    };

    LocalBroadcastManager.getInstance(this).registerReceiver(mReloadReceiver, new IntentFilter(WXSDKEngine.JS_FRAMEWORK_RELOAD));
    checkUpdateVersion();
  }

  private void checkUpdateVersion() {
    WXHttpTask task = new WXHttpTask();
    task.url = APP_INFO_URL;
    task.requestListener = new AppInfoRequestListener(this);
    WXHttpManager.getInstance().sendRequest(task);
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    if(TextUtils.equals(CURRENT_IP,DEFAULT_IP)){
      getMenuInflater().inflate(R.menu.main_scan,menu);
    }else{
      getMenuInflater().inflate(R.menu.main, menu);
    }
    return true;
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    int id = item.getItemId();
    if (id == R.id.action_refresh) {
      if(!TextUtils.equals(CURRENT_IP,DEFAULT_IP)){
        createWeexInstance();
        if(TextUtils.equals(CURRENT_IP,DEFAULT_IP)){
          renderPage(WXFileUtils.loadAsset("index.js", this),WEEX_INDEX_URL);
        }else{
          renderPageByURL(WEEX_INDEX_URL);
        }
        mProgressBar.setVisibility(View.VISIBLE);
        return true;
      }
    } else if (id == R.id.action_scan) {
      if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
        if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.CAMERA)) {
          Toast.makeText(this, "please give me the permission", Toast.LENGTH_SHORT).show();
        } else {
          ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
        }
      } else {
        startActivity(new Intent(this, CaptureActivity.class));
      }
      return true;
    }
    return super.onOptionsItemSelected(item);
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    if (requestCode == CAMERA_PERMISSION_REQUEST_CODE && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
      startActivity(new Intent(this, CaptureActivity.class));
    } else {
      Toast.makeText(this, "request camara permission fail!", Toast.LENGTH_SHORT).show();
    }
  }

  @Override
  public void onRenderSuccess(WXSDKInstance wxsdkInstance, int i, int i1) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.GONE);
  }

  @Override
  public void onException(WXSDKInstance wxsdkInstance, String s, String s1) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.VISIBLE);
    if (TextUtils.equals(s, WXRenderErrorCode.WX_NETWORK_ERROR)) {
      mTipView.setText(R.string.index_tip);
    } else {
      mTipView.setText("render error:" + s1);
    }
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    LocalBroadcastManager.getInstance(this).unregisterReceiver(mReloadReceiver);
  }

  static class AppInfoRequestListener implements WXRequestListener {

    private Context mContext;

    AppInfoRequestListener(Context context) {
      mContext = context;
    }

    @Override
    public void onSuccess(WXHttpTask task) {
      if (task != null) {
        String info = new String(task.response.data);
        int version = parseInfo(info);
        if (version > getAppVersionCode()) {
          showUpdateTipDialog();
        }
      }
    }

    private void showUpdateTipDialog() {
      new AlertDialog.Builder(mContext)
          .setTitle("Tip:Upgrade version")
          .setMessage("There is a new version of playground, please upgrade!")
          .setPositiveButton("Download", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
              Intent intent = new Intent(Intent.ACTION_VIEW);
              intent.setData(Uri.parse("https://alibaba.github.io/weex/download.html"));
              mContext.startActivity(intent);
              dialog.dismiss();
            }
          })
          .setNegativeButton("Close", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
              dialog.dismiss();
            }
          })
          .show();
    }

    private int parseInfo(String info) {
      if (!TextUtils.isEmpty(info)) {
        int s = info.indexOf("(");
        int e = info.lastIndexOf(")");
        if (s > 0 && s < e) {
          String temp = info.substring(s+1, e);
          if (!TextUtils.isEmpty(temp)) {
            JSONObject infoObject = JSON.parseObject(temp);
            if (infoObject.containsKey("androidCode")) {
              return infoObject.getInteger("androidCode");
            }
          }
        }
      }
      return Integer.MAX_VALUE;
    }

    @Override
    public void onError(WXHttpTask task) {
      WXLogUtils.e("into--[onError]");
    }

    private int getAppVersionCode() {
      int version = 0;
      try {
        PackageManager packageManager = mContext.getPackageManager();
        PackageInfo packInfo = packageManager.getPackageInfo(mContext.getPackageName(), 0);
        version = packInfo.versionCode;
      } catch (Exception e) {
      }
      return version;
    }
  }
}

