package com.taobao.weex.dom.compat;

import android.annotation.TargetApi;
import android.os.Build;
import android.util.ArrayMap;

import com.facebook.yoga.YogaAlign;
import com.facebook.yoga.YogaBaselineFunction;
import com.facebook.yoga.YogaDirection;
import com.facebook.yoga.YogaEdge;
import com.facebook.yoga.YogaFlexDirection;
import com.facebook.yoga.YogaJustify;
import com.facebook.yoga.YogaMeasureFunction;
import com.facebook.yoga.YogaNodeAPI;
import com.facebook.yoga.YogaOverflow;
import com.facebook.yoga.YogaPositionType;
import com.facebook.yoga.YogaUnit;
import com.facebook.yoga.YogaValue;
import com.facebook.yoga.YogaWrap;

import java.util.ArrayList;
import java.util.List;

/**
 * Placeholder for unit test.
 * Created by sospartan on 20/01/2017.
 */

@TargetApi(Build.VERSION_CODES.KITKAT)
public class NonYogaNode<T> implements YogaNodeAPI<NonYogaNode>,CompatNode<T,NonYogaNode> {
  private boolean mShow = true;
  private T mDOM;

  public void setDOM(T dom){
    mDOM = dom;
  }

  public T getDOM(){
    return mDOM;
  }

  @Deprecated
  public final void copyTo(NonYogaNode dest) {
    this.copyStyle(dest);
  }

  public boolean isShow() {
    return mShow;
  }

  public void setVisible(boolean isShow) {
    if (!mShow && isShow) {
      markLayoutSeen();
    }
    mShow = isShow;
  }


  //////////////////////////


  protected NonYogaNode mParent;
  private List<NonYogaNode> mChildren;
  private ArrayMap<YogaEdge,YogaValue> mPadding = new ArrayMap<>();
  private ArrayMap<YogaEdge,YogaValue> mMargin = new ArrayMap<>();
  private final YogaValue ZERO = new YogaValue(0,YogaUnit.PIXEL);

  @Override
  public void reset() {
//    super.reset();
  }

  @Override
  public int getChildCount() {
    return mChildren == null ? 0 : mChildren.size();
  }

  @Override
  public NonYogaNode getChildAt(int i) {
    return mChildren.get(i);
  }

  @Override
  public void addChildAt(NonYogaNode child, int i) {
    if (child.mParent != null) {
      throw new IllegalStateException("Child already has a parent, it must be removed first.");
    }

    if (mChildren == null) {
      mChildren = new ArrayList<>(4);
    }
    mChildren.add(i, child);
    child.mParent = this;
  }

  @Override
  public NonYogaNode removeChildAt(int i) {
    final NonYogaNode child = mChildren.remove(i);
    child.mParent = null;
      return child;
  }

  @Override
  public NonYogaNode getParent() {
    return mParent;
  }

  @Override
  public int indexOf(NonYogaNode child) {
    return mChildren == null ? -1 : mChildren.indexOf(child);
  }

  @Override
  public void calculateLayout() {
//    super.calculateLayout();
  }

  @Override
  public boolean hasNewLayout() {
/*    return false;*/return false;
  }

  @Override
  public void dirty() {
//    super.dirty();
  }

  @Override
  public boolean isDirty() {
/*    return false;*/return false;
  }

  @Override
  public void markLayoutSeen() {
//    super.markLayoutSeen();
  }

  @Override
  public void copyStyle(NonYogaNode srcNode) {
//    super.copyStyle(srcNode);
  }

  @Override
  public YogaDirection getStyleDirection() {
//    return super.getStyleDirection();
/*    return null;*/return null;
  }

  @Override
  public void setDirection(YogaDirection direction) {
//    super.setDirection(direction);
  }

  @Override
  public YogaFlexDirection getFlexDirection() {
//    return super.getFlexDirection();
/*    return null;*/return null;
  }

  @Override
  public void setFlexDirection(YogaFlexDirection flexDirection) {
//    super.setFlexDirection(flexDirection);
  }

  @Override
  public YogaJustify getJustifyContent() {
//    return super.getJustifyContent();
/*    return null;*/return null;
  }

  @Override
  public void setJustifyContent(YogaJustify justifyContent) {
//    super.setJustifyContent(justifyContent);
  }

  @Override
  public YogaAlign getAlignItems() {
//    return super.getAlignItems();
/*    return null;*/return null;
  }

  @Override
  public void setAlignItems(YogaAlign alignItems) {
//    super.setAlignItems(alignItems);
  }

  @Override
  public YogaAlign getAlignSelf() {
//    return super.getAlignSelf();
/*    return null;*/return null;
  }

  @Override
  public void setAlignSelf(YogaAlign alignSelf) {
//    super.setAlignSelf(alignSelf);
  }

  @Override
  public YogaAlign getAlignContent() {
/*    return super.getAlignContent();*/return null;
  }

  @Override
  public void setAlignContent(YogaAlign alignContent) {
/*    super.setAlignContent(alignContent);*/
  }

  @Override
  public YogaPositionType getPositionType() {
/*    return super.getPositionType();*/return null;
  }

  @Override
  public void setPositionType(YogaPositionType positionType) {
/*    super.setPositionType(positionType);*/
  }

  @Override
  public void setWrap(YogaWrap flexWrap) {
/*    super.setWrap(flexWrap);*/
  }

  @Override
  public YogaOverflow getOverflow() {
/*    return super.getOverflow();*/return null;
  }

  @Override
  public void setOverflow(YogaOverflow overflow) {
/*    super.setOverflow(overflow);*/
  }

  @Override
  public void setFlex(float flex) {
/*    super.setFlex(flex);*/
  }

  @Override
  public float getFlexGrow() {
/*    return super.getFlexGrow();*/return 0;
  }

  @Override
  public void setFlexGrow(float flexGrow) {
/*    super.setFlexGrow(flexGrow);*/
  }

  @Override
  public float getFlexShrink() {
/*    return super.getFlexShrink();*/return 0;
  }

  @Override
  public void setFlexShrink(float flexShrink) {
/*    super.setFlexShrink(flexShrink);*/
  }

  @Override
  public YogaValue getFlexBasis() {
/*    return super.getFlexBasis();*/return null;
  }

  @Override
  public void setFlexBasis(float flexBasis) {
/*    super.setFlexBasis(flexBasis);*/
  }

  @Override
  public void setFlexBasisPercent(float percent) {
/*    super.setFlexBasisPercent(percent);*/
  }

  @Override
  public YogaValue getMargin(YogaEdge edge) {
/*    return super.getMargin(edge);*/
    return mMargin.get(edge)==null?ZERO:mMargin.get(edge);
  }

  @Override
  public void setMargin(YogaEdge edge, float margin) {
    mMargin.put(edge,new YogaValue(margin,YogaUnit.PIXEL));
/*    super.setMargin(edge, margin);*/
  }

  @Override
  public void setMarginPercent(YogaEdge edge, float percent) {
/*    super.setMarginPercent(edge, percent);*/
  }

  @Override
  public YogaValue getPadding(YogaEdge edge) {
/*    return super.getPadding(edge);*/return mPadding.get(edge)==null?ZERO:mPadding.get(edge);
  }


  @Override
  public void setPadding(YogaEdge edge, float padding) {
    mPadding.put(edge,new YogaValue(padding, YogaUnit.PIXEL));
/*    super.setPadding(edge, padding);*/
  }

  @Override
  public void setPaddingPercent(YogaEdge edge, float percent) {
/*    super.setPaddingPercent(edge, percent);*/
  }

  @Override
  public float getBorder(YogaEdge edge) {
/*    return super.getBorder(edge);*/return 0;
  }

  @Override
  public void setBorder(YogaEdge edge, float border) {
/*    super.setBorder(edge, border);*/
  }

  @Override
  public YogaValue getPosition(YogaEdge edge) {
/*    return super.getPosition(edge);*/return null;
  }

  @Override
  public void setPosition(YogaEdge edge, float position) {
/*    super.setPosition(edge, position);*/
  }

  @Override
  public void setPositionPercent(YogaEdge edge, float percent) {
/*    super.setPositionPercent(edge, percent);*/
  }

  @Override
  public YogaValue getWidth() {
/*    return super.getWidth();*/return null;
  }

  @Override
  public void setWidth(float width) {
/*    super.setWidth(width);*/
  }

  @Override
  public void setWidthPercent(float percent) {
/*    super.setWidthPercent(percent);*/
  }

  @Override
  public YogaValue getHeight() {
/*    return super.getHeight();*/return null;
  }

  @Override
  public void setHeight(float height) {
/*    super.setHeight(height);*/
  }

  @Override
  public void setHeightPercent(float percent) {
/*    super.setHeightPercent(percent);*/
  }

  @Override
  public YogaValue getMinWidth() {
/*    return super.getMinWidth();*/return null;
  }

  @Override
  public void setMinWidth(float minWidth) {
/*    super.setMinWidth(minWidth);*/
  }

  @Override
  public void setMinWidthPercent(float percent) {
/*    super.setMinWidthPercent(percent);*/
  }

  @Override
  public YogaValue getMinHeight() {
/*    return super.getMinHeight();*/return null;
  }

  @Override
  public void setMinHeight(float minHeight) {
/*    super.setMinHeight(minHeight);*/
  }

  @Override
  public void setMinHeightPercent(float percent) {
/*    super.setMinHeightPercent(percent);*/
  }

  @Override
  public YogaValue getMaxWidth() {
/*    return super.getMaxWidth();*/return null;
  }

  @Override
  public void setMaxWidth(float maxWidth) {
/*    super.setMaxWidth(maxWidth);*/
  }

  @Override
  public void setMaxWidthPercent(float percent) {
/*    super.setMaxWidthPercent(percent);*/
  }

  @Override
  public YogaValue getMaxHeight() {
/*    return super.getMaxHeight();*/return null;
  }

  @Override
  public void setMaxHeight(float maxheight) {
/*    super.setMaxHeight(maxheight);*/
  }

  @Override
  public void setMaxHeightPercent(float percent) {
/*    super.setMaxHeightPercent(percent);*/
  }


  @Override
  public float getLayoutX() {
/*    return super.getLayoutX();*/return 0;
  }

  @Override
  public float getLayoutY() {
/*    return super.getLayoutY();*/return 0;
  }

  @Override
  public float getLayoutWidth() {
/*    return super.getLayoutWidth();*/return 0;
  }

  @Override
  public float getLayoutHeight() {
/*    return super.getLayoutHeight();*/return 0;
  }

  @Override
  public float getLayoutMargin(YogaEdge edge) {
/*    return super.getLayoutMargin(edge);*/return 0;
  }

  @Override
  public float getLayoutPadding(YogaEdge edge) {
/*    return super.getLayoutPadding(edge);*/return 0f;
  }

  @Override
  public YogaDirection getLayoutDirection() {
/*    return super.getLayoutDirection();*/return null;
  }

  @Override
  public void setMeasureFunction(YogaMeasureFunction measureFunction) {
/*    super.setMeasureFunction(measureFunction);*/
  }

  @Override
  public void setBaselineFunction(YogaBaselineFunction baselineFunction) {
/*    super.setBaselineFunction(baselineFunction);*/
  }

  @Override
  public boolean isMeasureDefined() {
/*    return super.isMeasureDefined();*/return false;
  }

  @Override
  public void setData(Object data) {
/*    super.setData(data);*/
  }

  @Override
  public Object getData() {
/*    return super.getData();*/return null;
  }
}
