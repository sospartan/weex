package com.taobao.weex.dom;

import android.text.TextUtils;

import com.facebook.csslayout.CSSAlign;
import com.taobao.weex.common.Constants;

final class CSSAlignConvert {

  public static CSSAlign convert2AlignItems(String s) {
    CSSAlign align = CSSAlign.STRETCH;
    if (TextUtils.isEmpty(s)) {
      align = CSSAlign.STRETCH;
    } else if (s.equals(Constants.Value.STRETCH)) {
      align = CSSAlign.STRETCH;
    } else if (s.equals(Constants.Value.FLEX_END)) {
      align = CSSAlign.FLEX_END;
    } else if (s.equals(Constants.Value.CENTER)) {
      align = CSSAlign.CENTER;
    } else if (s.equals(Constants.Value.FLEX_START)){
      align = CSSAlign.FLEX_START;
    }

    return align;
  }

  public static CSSAlign convert2AlignSelf(String s) {
    CSSAlign align = CSSAlign.AUTO;
    if (TextUtils.isEmpty(s)) {
      align = CSSAlign.AUTO;
    } else if (s.equals(Constants.Value.FLEX_START)) {
      align = CSSAlign.FLEX_START;
    } else if (s.equals(Constants.Value.FLEX_END)) {
      align = CSSAlign.FLEX_END;
    } else if (s.equals(Constants.Value.STRETCH)) {
      align = CSSAlign.STRETCH;
    } else if (s.equals(Constants.Value.CENTER)) {
      align = CSSAlign.CENTER;
    }

    return align;
  }
}
