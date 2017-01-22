package com.taobao.weex.dom;

import com.taobao.weex.dom.compat.NonYogaNode;

/**
 * Created by sospartan on 22/01/2017.
 */
public class WXScrollerDomObjectTest {

  public static WXScrollerDomObject create(){
    return new WXScrollerDomObject(new NonYogaNode<>());
  }
}