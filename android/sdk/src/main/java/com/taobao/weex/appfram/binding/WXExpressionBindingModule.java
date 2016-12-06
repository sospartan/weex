package com.taobao.weex.appfram.binding;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.view.MotionEvent;
import android.view.View;

import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.common.WXModuleAnno;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.utils.WXLogUtils;

/**
 * Description:
 *
 * Created by rowandjj(chuyi)<br/>
 */

public class WXExpressionBindingModule extends WXSDKEngine.DestroyableModule {

    private static final String TAG = "WXExpressionBindingModule";

    private View mSourceView;
    private View mTargetView;

    /**
     * create an expression binding for sourceComponent.
     *
     * @param sourceRef          the anchor view that will receive all touch event.
     * @param targetRef          the target view that will response to the touch event triggered by
     *                           sourceRef.
     * @param targetPropertyName the property name that you want to change.
     * @param targetExpression   the specific expression that you want to execute.
     */
    @WXModuleAnno
    public void createBinding(@Nullable String sourceRef, @Nullable String targetRef, @Nullable String targetPropertyName, @Nullable String targetExpression) {
        if (TextUtils.isEmpty(sourceRef) || TextUtils.isEmpty(targetRef) || TextUtils.isEmpty(targetPropertyName) || TextUtils.isEmpty(targetExpression)) {
            WXLogUtils.e(TAG, "illegal argument");
            return;
        }

        WXComponent sourceComponent = getComponentByRef(mWXSDKInstance.getInstanceId(), sourceRef);
        WXComponent targetComponent = getComponentByRef(mWXSDKInstance.getInstanceId(), targetRef);
        if (sourceComponent == null || targetComponent == null) {
            WXLogUtils.e(TAG, "ref not found");
            return;
        }

        mSourceView = sourceComponent.getHostView();
        mTargetView = targetComponent.getHostView();

        if (mSourceView == null || mTargetView == null) {
            WXLogUtils.e(TAG, "view not found");
            return;
        }

        mSourceView.setOnTouchListener(new TouchHandler(mTargetView,targetExpression,targetPropertyName));

    }




    @Nullable
    private WXComponent getComponentByRef(@Nullable String instanceId, @Nullable String ref) {
        return WXSDKManager.getInstance().getWXRenderManager().getWXComponent(instanceId, ref);
    }

    @Override
    public void destroy() {
        if (mSourceView != null) {
            mSourceView.setOnTouchListener(null);
        }
    }

    private void resolveAndExecuteExpression(@NonNull View view, @NonNull String propertyName, @NonNull String expression) {
        //todo 检查表达式合法性
        //todo 遍历表达式，依次转化为属性动画，执行之
        //todo 缓存表达式

    }

    private class TouchHandler implements View.OnTouchListener {

        private float mCurrentX;
        private float mCurrentY;

        private float mDx;
        private float mDy;

        private View mView;
        private String mProp;
        private String mExpression;

        TouchHandler(View view, String prop, String expression){
            this.mView = view;
            this.mProp = prop;
            this.mExpression = expression;
        }

        @Override
        public boolean onTouch(View v, MotionEvent event) {


            /**
             *
             *  event.createBinding(element, "opacity", " (abs(x) + abs(y)) / 100 ")
             *
             * */

//            //todo test only
//            targetPropertyName = "opacity";
//            targetExpression = "((abs(x) + abs(y)) / 100)";


            switch (event.getAction()) {
                case MotionEvent.ACTION_DOWN:
                    mCurrentX = event.getX();
                    mCurrentY = event.getY();
                    break;
                case MotionEvent.ACTION_MOVE:
                    mDx = event.getX() - mCurrentX;
                    mDy = event.getY() - mCurrentY;
                    mCurrentX = event.getX();
                    mCurrentY = event.getY();

                    //test
                    //todo 检查表达式合法性
                    //todo 遍历表达式，执行之
                    //todo 缓存表达式
                    int opacity = (int) ((Math.abs(mDx)+Math.abs(mDy))/100);
                    mTargetView.setAlpha(opacity);

                    break;
                case MotionEvent.ACTION_UP:
                    break;
                case MotionEvent.ACTION_CANCEL:
                    break;
            }
            return false;
        }
    }
}
