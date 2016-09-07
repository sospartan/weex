package com.alibaba.weex.extend.component;

import android.content.Context;
import android.support.design.widget.TabLayout;
import android.text.TextUtils;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRuntimeException;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.utils.WXJsonUtils;
import com.taobao.weex.utils.WXUtils;
import com.taobao.weex.utils.WXViewUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by dell on 2016/8/31.
 */
public class WXTabIndicator extends WXComponent<TabPageIndicator> {
    public static final String PAGER_TITLE = "pagerTitle";
    private TabViewPager mViewPager;
    int height;

    public WXTabIndicator(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);
    }

    @Override
    protected TabPageIndicator initComponentHostView(Context context) {
        TabPageIndicator view = new TabPageIndicator(context);
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        height = WXViewUtils.dip2px(view.getDefaultHeight());
        layoutParams.height = height;
        view.setLayoutParams(layoutParams);
        if (mParent instanceof WXTabPager) {
            return view;
        } else {
            if (WXEnvironment.isApkDebugable()) {
                throw new WXRuntimeException("WXTabIndicator initView error.");
            }
        }
        return null;
    }


    @Override
    protected void onHostViewInitialized(TabPageIndicator host) {
        super.onHostViewInitialized(host);
        host.setTabMode(TabLayout.MODE_SCROLLABLE);
        if (mParent instanceof WXTabPager) {
            ((WXTabPager) mParent).addIndicator(this);
        }
    }

    @WXComponentProp(name = PAGER_TITLE)
    public void setPagerTitle(String pagerTitle) {
        if (!TextUtils.isEmpty(pagerTitle)) {
            List<String> list = WXJsonUtils.getList(pagerTitle, String.class);
            if(mViewPager!=null){
                TabPagerAdapter adapter = mViewPager.getTabPageAdapter();
                adapter.setPagerTitles(list);
                adapter.notifyDataSetChanged();
            }
        }
    }


    @Override
    protected boolean setProperty(String key, Object param) {
        switch (key) {
            case PAGER_TITLE:
                String page_title = WXUtils.getString(param,null);
                if(page_title != null){
                    setPagerTitle(page_title);
                }
                return true;
        }
        return super.setProperty(key, param);
    }

    public void setViewPager(TabViewPager viewPager) {
        mViewPager = viewPager;
        getHostView().bindViewPager(mViewPager);
    }

    public static class IndicatorDomNode extends WXDomObject{
        public IndicatorDomNode(){
            super();
        }

        @Override
        protected Map<String, String> getDefaultStyle() {
            Map<String,String> map = new HashMap<>();
            map.put("left","0");
            map.put("top","0");
            return map;
        }
    }
}
