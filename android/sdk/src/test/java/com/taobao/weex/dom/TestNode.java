package com.taobao.weex.dom;

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
 * Created by sospartan on 20/01/2017.
 */

public class TestNode implements YogaNodeAPI<TestNode>
{
  @Override
  public int getChildCount() {
    return 0;
  }

  @Override
  public TestNode getChildAt(int i) {
    return null;
  }

  @Override
  public void addChildAt(TestNode child, int i) {

  }

  @Override
  public TestNode removeChildAt(int i) {
    return null;
  }

  @Override
  public TestNode getParent() {
    return null;
  }

  @Override
  public int indexOf(TestNode child) {
    return 0;
  }

  @Override
  public void setMeasureFunction(YogaMeasureFunction measureFunction) {

  }

  @Override
  public void setBaselineFunction(YogaBaselineFunction measureFunction) {

  }

  @Override
  public boolean isMeasureDefined() {
    return false;
  }

  @Override
  public void calculateLayout() {

  }

  @Override
  public boolean isDirty() {
    return false;
  }

  @Override
  public boolean hasNewLayout() {
    return false;
  }

  @Override
  public void dirty() {

  }

  @Override
  public void markLayoutSeen() {

  }

  @Override
  public void copyStyle(TestNode srcNode) {

  }

  @Override
  public YogaDirection getStyleDirection() {
    return null;
  }

  @Override
  public void setDirection(YogaDirection direction) {

  }

  @Override
  public YogaFlexDirection getFlexDirection() {
    return null;
  }

  @Override
  public void setFlexDirection(YogaFlexDirection flexDirection) {

  }

  @Override
  public YogaJustify getJustifyContent() {
    return null;
  }

  @Override
  public void setJustifyContent(YogaJustify justifyContent) {

  }

  @Override
  public YogaAlign getAlignItems() {
    return null;
  }

  @Override
  public void setAlignItems(YogaAlign alignItems) {

  }

  @Override
  public YogaAlign getAlignSelf() {
    return null;
  }

  @Override
  public void setAlignSelf(YogaAlign alignSelf) {

  }

  @Override
  public YogaAlign getAlignContent() {
    return null;
  }

  @Override
  public void setAlignContent(YogaAlign alignContent) {

  }

  @Override
  public YogaPositionType getPositionType() {
    return null;
  }

  @Override
  public void setPositionType(YogaPositionType positionType) {

  }

  @Override
  public void setWrap(YogaWrap flexWrap) {

  }

  @Override
  public void setFlex(float flex) {

  }

  @Override
  public float getFlexGrow() {
    return 0;
  }

  @Override
  public void setFlexGrow(float flexGrow) {

  }

  @Override
  public float getFlexShrink() {
    return 0;
  }

  @Override
  public void setFlexShrink(float flexShrink) {

  }

  @Override
  public YogaValue getFlexBasis() {
    return null;
  }

  @Override
  public void setFlexBasis(float flexBasis) {

  }

  @Override
  public void setFlexBasisPercent(float percent) {

  }

  @Override
  public YogaValue getMargin(YogaEdge edge) {
    return null;
  }

  @Override
  public void setMargin(YogaEdge edge, float margin) {

  }

  @Override
  public void setMarginPercent(YogaEdge edge, float percent) {

  }

  @Override
  public YogaValue getPadding(YogaEdge edge) {
    return null;
  }

  @Override
  public void setPadding(YogaEdge edge, float padding) {

  }

  @Override
  public void setPaddingPercent(YogaEdge edge, float percent) {

  }

  @Override
  public float getBorder(YogaEdge edge) {
    return 0;
  }

  @Override
  public void setBorder(YogaEdge edge, float border) {

  }

  @Override
  public YogaValue getPosition(YogaEdge edge) {
    return null;
  }

  @Override
  public void setPosition(YogaEdge edge, float position) {

  }

  @Override
  public void setPositionPercent(YogaEdge edge, float percent) {

  }

  @Override
  public YogaValue getWidth() {
    return null;
  }

  @Override
  public void setWidth(float width) {

  }

  @Override
  public void setWidthPercent(float percent) {

  }

  @Override
  public YogaValue getHeight() {
    return null;
  }

  @Override
  public void setHeight(float height) {

  }

  @Override
  public void setHeightPercent(float percent) {

  }

  @Override
  public YogaValue getMaxWidth() {
    return null;
  }

  @Override
  public void setMaxWidth(float maxWidth) {

  }

  @Override
  public void setMaxWidthPercent(float percent) {

  }

  @Override
  public YogaValue getMinWidth() {
    return null;
  }

  @Override
  public void setMinWidth(float minWidth) {

  }

  @Override
  public void setMinWidthPercent(float percent) {

  }

  @Override
  public YogaValue getMaxHeight() {
    return null;
  }

  @Override
  public void setMaxHeight(float maxHeight) {

  }

  @Override
  public void setMaxHeightPercent(float percent) {

  }

  @Override
  public YogaValue getMinHeight() {
    return null;
  }

  @Override
  public void setMinHeight(float minHeight) {

  }

  @Override
  public void setMinHeightPercent(float percent) {

  }

  @Override
  public float getLayoutX() {
    return 0;
  }

  @Override
  public float getLayoutY() {
    return 0;
  }

  @Override
  public float getLayoutWidth() {
    return 0;
  }

  @Override
  public float getLayoutHeight() {
    return 0;
  }

  @Override
  public float getLayoutMargin(YogaEdge edge) {
    return 0;
  }

  @Override
  public float getLayoutPadding(YogaEdge edge) {
    return 0;
  }

  @Override
  public YogaDirection getLayoutDirection() {
    return null;
  }

  @Override
  public YogaOverflow getOverflow() {
    return null;
  }

  @Override
  public void setOverflow(YogaOverflow overflow) {

  }

  @Override
  public void setData(Object data) {

  }

  @Override
  public Object getData() {
    return null;
  }

  @Override
  public void reset() {

  }
}
