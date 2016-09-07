package com.alibaba.weex.extend.component;

import android.content.Context;
import android.support.v4.view.ViewPager;



/**
 * Created by dell on 2016/9/1.
 */
public class TabViewPager extends ViewPager{
    public TabViewPager(Context context) {
        super(context);
    }

    public TabPagerAdapter getTabPageAdapter() {
        return (TabPagerAdapter) getAdapter();
    }

}
