package com.taobao.weex.dom.compat;

/**
 * Created by sospartan on 21/01/2017.
 */

public interface CompatNode<T,D extends CompatNode> {
  void setDOM(T dom);

  T getDOM();

  void copyTo(D dest);

  boolean isShow();

  void setVisible(boolean isShow);
}
