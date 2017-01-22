package com.taobao.weex.dom;

import com.taobao.weex.dom.compat.NonYogaNode;

/**
 * Created by sospartan on 21/01/2017.
 */
public class WXListDomObjectTest {
  public static WXListDomObject newDomObject(){
    return new WXListDomObject(new NonYogaNode());
  }
}