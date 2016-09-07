package com.alibaba.weex.extend.component;

import android.content.Context;
import android.support.v4.view.ViewPager;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.widget.LinearLayout;

import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.common.Constants;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.dom.WXEvent;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.utils.WXLogUtils;
import com.taobao.weex.utils.WXViewUtils;

import java.util.HashMap;
import java.util.Map;

public class WXTabPager extends WXVContainer<LinearLayout> implements ViewPager.OnPageChangeListener {

    Map<String, Object> params = new HashMap<>();
    private TabViewPager mViewPager;
    private TabPagerAdapter mAdapter;
    private WXTabIndicator mIndicator;

    @Deprecated
    public WXTabPager(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, String instanceId, boolean isLazy) {
        this(instance, dom, parent, isLazy);
    }

    public WXTabPager(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) {
        super(instance, node, parent, lazy);
    }

    @Override
    protected LinearLayout initComponentHostView(Context context) {
        LinearLayout view = new LinearLayout(context);
        view.setOrientation(LinearLayout.VERTICAL);
        // init view pager
        LinearLayout.LayoutParams pagerParams = new LinearLayout.LayoutParams(
                LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT);

        mViewPager = new TabViewPager(context);
        mViewPager.setLayoutParams(pagerParams);

        // init adapter
        mAdapter = new TabPagerAdapter();
        mViewPager.setAdapter(mAdapter);
        registerActivityStateListener();

        mViewPager.setOnPageChangeListener(this);
        return view;
    }

    @Override
    public void addEvent(String type) {
        super.addEvent(type);
        if (getRealView() != null) {
            getRealView().setOnTouchListener(null);
        }
        mGestureType.clear();
    }

    @Override
    public ViewGroup getRealView() {
        return mViewPager;
    }

    @Override
    protected void addSubView(View view, int index) {
        if (view == null || mAdapter == null) {
            return;
        }
        if (view instanceof TabPageIndicator) {
            return;
        }
        mAdapter.addPageView(view);
        mAdapter.notifyDataSetChanged();
    }

    @Override
    public void remove(WXComponent child) {
        remove(child, true);
    }

    @Override
    public void remove(WXComponent child, boolean destroy) {
        if (child == null || child.getHostView() == null || mAdapter == null) {
            return;
        }

        mAdapter.removePageView(child.getHostView());
        mAdapter.notifyDataSetChanged();
    }

    @Override
    public void destroy() {
        super.destroy();
        if (mViewPager != null) {
            mViewPager.removeAllViews();
        }
    }

    @Override
    public void onActivityResume() {
    }

    @Override
    public void onActivityStop() {
    }

    public void addIndicator(WXTabIndicator indicator) {
        LinearLayout root = getHostView();
        if (root == null) {
            return;
        }
        mIndicator = indicator;
        TabPageIndicator indicatorView = indicator.getHostView();

        if (indicatorView != null) {
            mIndicator.setViewPager(mViewPager);
            root.addView(indicatorView);
            root.addView(getRealView());
        }
    }

    @Override
    public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

    }

    @Override
    public void onPageSelected(int pos) {
        if (WXEnvironment.isApkDebugable()) {
            WXLogUtils.d("onPageSelected >>>>" + pos);
        }
        if (mAdapter == null || mAdapter.getCount() == 0) {
            return;
        }
        if (mChildren == null || pos >= mChildren.size()) {
            return;
        }
        if (getDomObject().event == null || getDomObject().event.size() == 0) {
            return;
        }
        WXEvent event = getDomObject().event;
        String ref = getDomObject().ref;
        if (event.contains(Constants.Event.CHANGE) && WXViewUtils.onScreenArea(mHost)) {
            params.put("index", pos);

            Map<String, Object> domChanges = new HashMap<>();
            Map<String, Object> attrsChanges = new HashMap<>();
            attrsChanges.put("value", pos);
            domChanges.put("attrs", attrsChanges);
            WXSDKManager.getInstance().fireEvent(mInstanceId, ref,
                    Constants.Event.CHANGE, params, domChanges);
        }
    }

    @Override
    public void onPageScrollStateChanged(int state) {

    }
}
