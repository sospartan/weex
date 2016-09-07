package com.alibaba.weex.extend.component;

import android.view.View;
import android.view.ViewGroup;

import com.taobao.weex.WXEnvironment;
import com.taobao.weex.utils.WXLogUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by dell on 2016/9/1.
 */
public class TabPagerAdapter extends RecyclingPagerAdapter {

    /**
     * Subviews
     */
    private List<View> views;
    private List<String> pagerTitles;

    public TabPagerAdapter() {
        super();
        this.views = new ArrayList<>();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup container) {
        return views.get(position);
    }

    public TabPagerAdapter(List<View> views) {
        super();
        this.views = views;
    }

    public void addPageView(View view) {
        if (WXEnvironment.isApkDebugable()) {
            WXLogUtils.d("onPageSelected >>>> addPageView");
        }
        if (views == null) {
            views = new ArrayList<>();
        }
        views.add(view);
    }

    public void removePageView(View view) {
        if (WXEnvironment.isApkDebugable()) {
            WXLogUtils.d("onPageSelected >>>> removePageView");
        }
        if (views == null) {
            views = new ArrayList<>();
        }
        views.remove(view);
    }

    public void replacePageView(View oldView, View newView) {
        if (WXEnvironment.isApkDebugable()) {
            WXLogUtils.d("onPageSelected >>>> replacePageView");
        }
        if (views == null) {
            views = new ArrayList<>();
        }

        int index = views.indexOf(oldView);
        views.remove(index);
        views.add(index, newView);
    }

    @Override
    public CharSequence getPageTitle(int position) {
        if(pagerTitles.size() == 0){
            return "";
        }
        if(position >= pagerTitles.size()){
            throw new IllegalArgumentException("the count of tab-indicator is not match the count of tab-content");
        }
        return  pagerTitles.get(position);
    }

    @Override
    public int getCount() {
        return views.size();
    }


    public void setPagerTitles(List<String> pagerTitles) {
        this.pagerTitles = pagerTitles;
    }
}
