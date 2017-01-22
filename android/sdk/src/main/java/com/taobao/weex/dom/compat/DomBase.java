package com.taobao.weex.dom.compat;

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
import com.facebook.yoga.YogaValue;
import com.facebook.yoga.YogaWrap;

/**
 * Compatible with {@link YogaNodeAPI}.
 * Created by sospartan on 20/01/2017.
 */

public abstract class DomBase<T extends DomBase>{

  protected YogaNodeAPI mNode;
  protected CompatNode mCompatNode;

  public YogaNodeAPI getNode(){
    return mNode;
  }

  @Deprecated
  public final void copyTo(DomBase dom){
    if(mNode != null)
      mCompatNode.copyTo(dom.mCompatNode);
  }

  public void setVisible(boolean isShow) {
    if(mNode !=null)
      mCompatNode.setVisible(isShow);
  }

  public boolean isShow(){
    return mCompatNode==null?null:mCompatNode.isShow();
  }

  public int getChildCount() {
    return mNode == null?0:mNode.getChildCount();
  }

  public T getChildAt(int i) {
    if(mNode ==null){
      return null;
    }
    YogaNodeAPI child = mNode.getChildAt(i);
    return child != null? (T) ((CompatNode) child).getDOM() :null;
  }

  public void addChildAt(DomBase child, int i) {
    if(mNode!=null) {
      mNode.addChildAt(child.mNode, i);
    }
  }

  public T removeChildAt(int i) {
    if(mNode ==null){
      return null;
    }
    YogaNodeAPI child = mNode.removeChildAt(i);
    return child != null? (T) ((CompatNode) child).getDOM() :null;
  }

  public T getParent() {
    if(mNode ==null){
      return null;
    }
    YogaNodeAPI parent = mNode.getParent();
    return parent != null? (T) ((CompatNode) parent).getDOM() :null;
  }

  public int indexOf(DomBase child) {
    return mNode==null?-1:mNode.indexOf(child.mNode);
  }

  public void setMeasureFunction(YogaMeasureFunction measureFunction) {
    if(mNode != null)
    mNode.setMeasureFunction(measureFunction);
  }

  public void setBaselineFunction(YogaBaselineFunction measureFunction) {
    if(mNode != null)
    mNode.setBaselineFunction(measureFunction);
  }


  public void calculateLayout() {
    if(mNode != null)
    mNode.calculateLayout();
  }

  public boolean isDirty() {
    return mNode==null?false:mNode.isDirty();
  }

  public boolean hasNewLayout() {
    return mNode == null?false:mNode.hasNewLayout();
  }

  public void dirty() {
    if(mNode != null)
    mNode.dirty();
  }

  public void markLayoutSeen() {
    if(mNode != null)
    mNode.markLayoutSeen();
  }

  public void copyStyle(DomBase srcNode) {
    if(mNode != null)
    mNode.copyStyle(srcNode.mNode);
  }

  public YogaDirection getStyleDirection() {
    return mNode==null?null:mNode.getStyleDirection();
  }

  public void setDirection(YogaDirection direction) {
    if(mNode!=null)
    mNode.getStyleDirection();
  }

  public YogaFlexDirection getFlexDirection() {
    return mNode==null?null:mNode.getFlexDirection();
  }

  public void setFlexDirection(YogaFlexDirection flexDirection) {
    if(mNode!=null)
    mNode.setFlexDirection(flexDirection);
  }

  public YogaJustify getJustifyContent() {
    return mNode==null?null:mNode.getJustifyContent();
  }

  public void setJustifyContent(YogaJustify justifyContent) {
    if(mNode!=null)
    mNode.setJustifyContent(justifyContent);
  }

  public YogaAlign getAlignItems() {
    return mNode==null?null:mNode.getAlignItems();
  }

  public void setAlignItems(YogaAlign alignItems) {
    if(mNode!=null)
    mNode.setAlignItems(alignItems);
  }

  public YogaAlign getAlignSelf() {
    return mNode.getAlignSelf();
  }

  public void setAlignSelf(YogaAlign alignSelf) {
    if(mNode!=null)
    mNode.setAlignSelf(alignSelf);
  }

  public YogaAlign getAlignContent() {
    return mNode.getAlignContent();
  }

  public void setAlignContent(YogaAlign alignContent) {
    if(mNode!=null)
    mNode.setAlignContent(alignContent);
  }

  public YogaPositionType getPositionType() {
    return mNode.getPositionType();
  }

  public void setPositionType(YogaPositionType positionType) {
    if(mNode!=null)
    mNode.setPositionType(positionType);
  }

  public void setWrap(YogaWrap flexWrap) {
    if(mNode!=null)
    mNode.setWrap(flexWrap);
  }

  public void setFlex(float flex) {
    mNode.setFlex(flex);
  }

  public float getFlexGrow() {
    return mNode.getFlexGrow();
  }

  public void setFlexGrow(float flexGrow) {
    mNode.setFlexGrow(flexGrow);
  }

  public float getFlexShrink() {
    return mNode.getFlexShrink();
  }

  public void setFlexShrink(float flexShrink) {
    mNode.setFlexShrink(flexShrink);
  }

  public YogaValue getFlexBasis() {
    return mNode.getFlexBasis();
  }

  public void setFlexBasis(float flexBasis) {
    mNode.setFlexBasis(flexBasis);
  }

  public void setFlexBasisPercent(float percent) {
    mNode.setFlexBasisPercent(percent);
  }

  public YogaValue getMargin(YogaEdge edge) {
    return mNode.getMargin(edge);
  }

  public void setMargin(YogaEdge edge, float margin) {
    mNode.setMargin(edge,margin);
  }

  public void setMarginPercent(YogaEdge edge, float percent) {
    mNode.setMarginPercent(edge,percent);
  }

  public YogaValue getPadding(YogaEdge edge) {
    return mNode.getPadding(edge);
  }

  public void setPadding(YogaEdge edge, float padding) {
    mNode.setPadding(edge,padding);
  }

  public void setPaddingPercent(YogaEdge edge, float percent) {
    mNode.setPaddingPercent(edge,percent);
  }

  public float getBorder(YogaEdge edge) {
    return mNode.getBorder(edge);
  }

  public void setBorder(YogaEdge edge, float border) {
    mNode.setBorder(edge,border);
  }

  public YogaValue getPosition(YogaEdge edge) {
    return mNode.getPosition(edge);
  }

  public void setPosition(YogaEdge edge, float position) {
    if(mNode == null){
      return;
    }
    mNode.setPosition(edge,position);
  }

  public void setPositionPercent(YogaEdge edge, float percent) {
    mNode.setPositionPercent(edge,percent);
  }

  public YogaValue getWidth() {
    return mNode.getWidth();
  }

  public void setWidth(float width) {
    if(mNode == null){
      return;
    }
    mNode.setWidth(width);
  }

  public void setWidthPercent(float percent) {
    mNode.setWidthPercent(percent);
  }

  public YogaValue getHeight() {
    return mNode.getHeight();
  }

  public void setHeight(float height) {
    if(mNode == null){
      return;
    }
    mNode.getHeight();
  }

  public void setHeightPercent(float percent) {
    mNode.setHeightPercent(percent);
  }

  public YogaValue getMaxWidth() {
    return mNode.getMaxWidth();
  }

  public void setMaxWidth(float maxWidth) {
    mNode.setMaxWidth(maxWidth);
  }

  public void setMaxWidthPercent(float percent) {
    mNode.setMaxWidthPercent(percent);
  }

  public YogaValue getMinWidth() {
    return mNode.getMinWidth();
  }

  public void setMinWidth(float minWidth) {
    mNode.setMinWidth(minWidth);
  }

  public void setMinWidthPercent(float percent) {
      mNode.setMinWidthPercent(percent);
  }

  public YogaValue getMaxHeight() {
    return mNode.getMaxHeight();
  }

  public void setMaxHeight(float maxHeight) {
    mNode.setMaxHeight(maxHeight);
  }

  public void setMaxHeightPercent(float percent) {
    mNode.setMaxHeightPercent(percent);
  }

  public YogaValue getMinHeight() {
    return mNode.getMinHeight();
  }

  public void setMinHeight(float minHeight) {
    mNode.setMinHeight(minHeight);
  }

  public void setMinHeightPercent(float percent) {
    mNode.setMinHeightPercent(percent);
  }

  public float getLayoutX() {
    return mNode.getLayoutX();
  }

  public float getLayoutY() {
    return mNode.getLayoutY();
  }

  public float getLayoutWidth() {
    return mNode.getLayoutWidth();
  }

  public float getLayoutHeight() {
    return mNode.getLayoutHeight();
  }

  public float getLayoutMargin(YogaEdge edge) {
    return mNode.getLayoutMargin(edge);
  }

  public float getLayoutPadding(YogaEdge edge) {
    return mNode.getLayoutPadding(edge);
  }

  public YogaDirection getLayoutDirection() {
    return mNode.getLayoutDirection();
  }

  public YogaOverflow getOverflow() {
    return mNode.getOverflow();
  }

  public void setOverflow(YogaOverflow overflow) {
    mNode.setOverflow(overflow);
  }

  public void setData(Object data) {
    mNode.setData(data);
  }

  public Object getData() {
    return mNode.getData();
  }

  public void reset() {
    mNode.reset();
  }


  public void remove(T domObject) {
    int i = indexOf(domObject);
    if (i != -1){
      removeChildAt(i);
    }
  }
}
