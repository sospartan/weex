package com.taobao.weex.bridge;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.utils.WXReflectionUtils;

import java.lang.reflect.Type;

/**
 * Created by sospartan on 10/11/2016.
 */

public final class NativeInvokeHelper {
  private String mInstanceId;

  public NativeInvokeHelper(String instanceId){
      mInstanceId = instanceId;
  }

  public void invoke(final Object target,final Invoker invoker,JSONArray args) throws Exception {
    final Object[] params = prepareArguments(
        invoker.getParameterTypes(),
        args);
    if (invoker.isRunOnUIThread()) {
      WXSDKManager.getInstance().postOnUiThread(new Runnable() {
        @Override
        public void run() {
          try {
            invoker.invoke(target, params);
          } catch (Exception e) {
            throw new RuntimeException(e);
          }
        }
      }, 0);
    } else {
      invoker.invoke(target, params);
    }
  }

  private Object[] prepareArguments(Type[] paramClazzs, JSONArray args) throws Exception {
    Object[] params = new Object[paramClazzs.length];
    Object value;
    Type paramClazz;
    for (int i = 0; i < paramClazzs.length; i++) {
      paramClazz = paramClazzs[i];
      if(i>=args.size()){
        if(!paramClazz.getClass().isPrimitive()) {
          params[i] = null;
          continue;
        }else {
          throw new Exception("[prepareArguments] method argument list not match.");
        }
      }
      value = args.get(i);

      if (paramClazz == JSONObject.class) {
        params[i] = value;
      } else if(JSCallback.class == paramClazz){
        if(value instanceof String){
          params[i] = new SimpleJSCallback(mInstanceId,(String)value);
        }else{
          throw new Exception("Parameter type not match.");
        }
      } else {
        params[i] = WXReflectionUtils.parseArgument(paramClazz,value);
      }
    }
    return params;
  }
}
