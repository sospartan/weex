package com.taobao.weex.dom;

/**
 * Created by sospartan on 20/01/2017.
 */

final class ImmutableDomImpl implements ImmutableDomObject {
  private final String mRef;
  private final String mType;
  private final float[] mMargin;
  private final float mWidth;
  private final float mHeight;
  private final float mPosX;
  private final float mPosY;
  private final float[] mBorder;
  private final float[] mPadding;
  private final boolean mIsFixed;
  private final Object mExtra;
  private final WXStyle mStyle;
  private final WXAttr mAttr;
  private final WXEvent mEvent;

  ImmutableDomImpl(WXDomObject dom){
    mRef = dom.getRef();
    mMargin = dom.getMargin();
    mWidth = dom.getLayoutWidth();
    mHeight = dom.getLayoutHeight();
    mPosX = dom.getLayoutX();
    mPosY = dom.getLayoutY();
    mBorder = dom.getBorder();
    mPadding = dom.getPadding();
    mIsFixed = dom.isFixed();
    mType = dom.getType();
    mExtra = dom.getExtra();
    mStyle = dom.getStyles().clone();
    mAttr = dom.getAttrs().clone();
    mEvent = dom.getEvents().clone();
  }

  @Override
  public String getRef() {
    return mRef;
  }

  @Override
  public float[] getMargin() {
    return mMargin;
  }

  @Override
  public float getLayoutWidth() {
    return mWidth;
  }

  @Override
  public float getLayoutHeight() {
    return mHeight;
  }

  @Override
  public float getLayoutX() {
    return mPosX;
  }

  @Override
  public float getLayoutY() {
    return mPosY;
  }

  @Override
  public boolean isFixed() {
    return mIsFixed;
  }

  @Override
  public WXStyle getStyles() {
    return mStyle;
  }

  @Override
  public WXEvent getEvents() {
    return mEvent;
  }

  @Override
  public WXAttr getAttrs() {
    return mAttr;
  }

  @Override
  public float[] getPadding() {
    return mPadding;
  }

  @Override
  public float[] getBorder() {
    return mBorder;
  }

  @Override
  public Object getExtra() {
    return mExtra;
  }

  @Override
  public String getType() {
    return mType;
  }
}
