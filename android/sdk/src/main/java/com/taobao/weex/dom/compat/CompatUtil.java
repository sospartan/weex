package com.taobao.weex.dom.compat;

/**
 * Created by sospartan on 19/01/2017.
 */

public class CompatUtil {

  private static final float EPSILON = .00001f;
  public static final float UNDEFINED = Float.NaN;

  public static boolean floatsEqual(float f1, float f2) {
    if (Float.isNaN(f1) || Float.isNaN(f2)) {
      return Float.isNaN(f1) && Float.isNaN(f2);
    }
    return Math.abs(f2 - f1) < EPSILON;
  }

  public static boolean isUndefined(float value) {
    return Float.compare(value, UNDEFINED) == 0;
  }
}
