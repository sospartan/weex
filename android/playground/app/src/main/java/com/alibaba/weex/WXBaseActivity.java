package com.alibaba.weex;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.v7.app.AppCompatActivity;

import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.appfram.navigator.IActivityNavBarSetter;

public abstract class WXBaseActivity extends AppCompatActivity implements IActivityNavBarSetter {

  @Override
  public void onCreate(Bundle savedInstanceState, PersistableBundle persistentState) {
    super.onCreate(savedInstanceState, persistentState);
    WXSDKEngine.setActivityNavBarSetter(this);
  }

  @Override
  public boolean push(String param) {
    return false;
  }

  @Override
  public boolean pop(String param) {
    return false;
  }

  @Override
  public boolean setNavBarRightItem(String param) {
    return false;
  }

  @Override
  public boolean clearNavBarRightItem(String param) {
    return false;
  }

  @Override
  public boolean setNavBarLeftItem(String param) {
    return false;
  }

  @Override
  public boolean clearNavBarLeftItem(String param) {
    return false;
  }

  @Override
  public boolean setNavBarMoreItem(String param) {
    return false;
  }

  @Override
  public boolean clearNavBarMoreItem(String param) {
    return false;
  }

  @Override
  public boolean setNavBarTitle(String param) {
    return false;
  }
}
