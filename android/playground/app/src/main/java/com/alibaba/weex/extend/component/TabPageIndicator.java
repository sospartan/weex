package com.alibaba.weex.extend.component;

import android.content.Context;
import android.support.design.widget.TabLayout;

/**
 * Created by dell on 2016/8/30.
 */
public class TabPageIndicator extends TabLayout {
    private TabViewPager tabViewPager;
    private static final int DEFAULT_HEIGHT = 48; // dps
    public TabPageIndicator(Context context) {
        super(context);
    }

    public void bindViewPager(TabViewPager tabViewPager) {
        this.tabViewPager = tabViewPager;
        setupWithViewPager(tabViewPager);
    }

    public int getDefaultHeight() {
        return DEFAULT_HEIGHT; // dps;
    }
}
