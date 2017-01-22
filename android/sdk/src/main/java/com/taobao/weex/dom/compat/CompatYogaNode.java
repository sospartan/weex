
package com.taobao.weex.dom.compat;


import com.facebook.yoga.YogaNode;

/**
 * Created by sospartan on 29/09/2016.
 */
public class CompatYogaNode<T> extends YogaNode implements CompatNode<T,CompatYogaNode> {
  private boolean mShow = true;
  private T mDOM;

  public void setDOM(T dom){
    mDOM = dom;
  }

  public T getDOM(){
    return mDOM;
  }

  @Deprecated
  public final void copyTo(CompatYogaNode dest) {
    this.copyStyle(dest);//TODO: make sure all style is copied, include width,height,position,direction
  }

  public boolean isShow() {
    return mShow;
  }

  public void setVisible(boolean isShow) {
    if (!mShow && isShow) {
      markLayoutSeen();
    }
    mShow = isShow;
//    dirty();
  }
}
