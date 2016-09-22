package com.alibaba.weex.extend.module;

import com.google.zxing.client.android.CaptureActivity;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.widget.Toast;

import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

/**
 * Created by lixinke on 16/8/19.
 */
public class CamaraModule extends WXModule {

  private static final int CAMARA_PERMISSION_REQUEST_CODE = 0x1;


  @WXModuleAnno
  public void openScan() {
    if (mWXSDKInstance.getContext() != null && mWXSDKInstance.getContext() instanceof Activity) {
      Activity activity = (Activity) mWXSDKInstance.getContext();
      if (ContextCompat.checkSelfPermission(activity, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
        if (ActivityCompat.shouldShowRequestPermissionRationale(activity, Manifest.permission.CAMERA)) {
          Toast.makeText(activity, "please give me the permission", Toast.LENGTH_SHORT).show();
        } else {
          ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.CAMERA}, CAMARA_PERMISSION_REQUEST_CODE);
        }
      } else {
        activity.startActivity(new Intent(activity, CaptureActivity.class));
      }
    }
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    if (mWXSDKInstance.getContext() != null && mWXSDKInstance.getContext() instanceof Activity) {
      Activity activity = (Activity) mWXSDKInstance.getContext();
      if (requestCode == CAMARA_PERMISSION_REQUEST_CODE && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
        activity.startActivity(new Intent(activity, CaptureActivity.class));
      } else {
        Toast.makeText(activity, "request camara permission fail!", Toast.LENGTH_SHORT).show();
      }
    }
  }
}
