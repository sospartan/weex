package com.alibaba.weex.extend.module;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.support.v4.content.LocalBroadcastManager;
import android.text.TextUtils;

import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;
import com.taobao.weex.utils.WXLogUtils;


public class WXEventModule extends WXModule {

  private static final String WEEX_CATEGORY = "com.taobao.android.intent.category.WEEX";
  private static final String WEEX_ACTION = "com.taobao.android.intent.action.WEEX";


  @WXModuleAnno(moduleMethod = true,runOnUIThread = true)
  public void openURL(String url) {
    if (TextUtils.isEmpty(url)) {
      return;
    }
    String scheme = Uri.parse(url).getScheme();
    StringBuilder builder = new StringBuilder();
    if (TextUtils.equals("http",scheme) || TextUtils.equals("https",scheme) || TextUtils.equals("file",scheme)) {
      builder.append(url);
    } else {
      builder.append("http:");
      builder.append(url);
    }

    Uri uri = Uri.parse(builder.toString());
    Intent intent = new Intent(WEEX_ACTION, uri);
    intent.addCategory(WEEX_CATEGORY);
    mWXSDKInstance.getContext().startActivity(intent);
  }

  @WXModuleAnno
  public void refresh(String url) {
    WXLogUtils.e("event",url);
    LocalBroadcastManager.getInstance(mWXSDKInstance.getContext()).sendBroadcast(new Intent(url));
  }

  @WXModuleAnno
  public void back(){
    ((Activity)mWXSDKInstance.getContext()).finish();
  }

  @WXModuleAnno
  public void openBrowser(String url) {
    Intent intent= new Intent();
    intent.setAction("android.intent.action.VIEW");
    Uri content_url = Uri.parse(url);
    intent.setData(content_url);
    mWXSDKInstance.getContext().startActivity(intent);
  }
}
