;
define('zebraSections', function (require, exports, module) {
    module.exports = {
        name: "/act/autumn2016-native",
        id: 175897,
        schemaVersion: "eec48c94-0c2f-4c5c-837b-4667c53e819d",
        data: {
            "page": {
                "5761972660": {
                    "bottomMenu": {
                        "bgColor": "#ffffff",
                        "borderColor": "#ffffff",
                        "disappearList": "",
                        "isNative": true,
                        "isTaobao": true,
                        "isTmall": true,
                        "menuItems": [{
                            "color": "#000000",
                            "icon": "//img.alicdn.com/tps/i4/TB1WfC5MVXXXXaNaXXXwu0bFXXX.png",
                            "iconSelect": "//img.alicdn.com/tps/i4/TB1WfC5MVXXXXaNaXXXwu0bFXXX.png",
                            "link": "//pages.tmall.com/wow/act/16383/huanxin?acm=lb-zebra-175897-1297250.1003.4.1046957&wh_weex=true&scm=1003.4.lb-zebra-175897-1297250.OTHER_14701873778281_1046957",
                            "title": "主会场"
                        }, {
                            "color": "#000000",
                            "icon": "//img.alicdn.com/tps/i4/TB1JhHfMVXXXXcVXFXXwu0bFXXX.png",
                            "iconSelect": "//img.alicdn.com/tps/i4/TB1JhHfMVXXXXcVXFXXwu0bFXXX.png",
                            "link": "//pages.tmall.com/wow/act/16383/fenhuichang?acm=lb-zebra-175897-1297250.1003.4.1046957&wh_weex=true&scm=1003.4.lb-zebra-175897-1297250.OTHER_14704548999623_1046957",
                            "title": "分会场"
                        }, {
                            "color": "#000000",
                            "icon": "//img.alicdn.com/tps/i4/TB1YEi2MVXXXXb6aXXXwu0bFXXX.png",
                            "iconSelect": "//img.alicdn.com/tps/i4/TB1YEi2MVXXXXb6aXXXwu0bFXXX.png",
                            "link": "//pages.tmall.com/wow/huanxin/act/mustbuy?wh_tmall=2&acm=lb-zebra-175897-1297250.1003.4.1046957&scm=1003.4.lb-zebra-175897-1297250.OTHER_14701869930792_1046957",
                            "title": "必抢"
                        }, {
                            "color": "#000000",
                            "icon": "//img.alicdn.com/tps/i4/TB1cNuUMVXXXXc3apXXwu0bFXXX.png",
                            "iconSelect": "//img.alicdn.com/tps/i4/TB1cNuUMVXXXXc3apXXwu0bFXXX.png",
                            "link": "//pages.tmall.com/wow/act/16383/mytrend?acm=lb-zebra-175897-1297250.1003.4.1046957&scm=1003.4.lb-zebra-175897-1297250.OTHER_14701881473253_1046957",
                            "title": "我的新风尚"
                        }]
                    },
                    "popupMenu": {
                        "arrowIconActive": "",
                        "arrowIconNormal": "",
                        "bgColor": "#eeeeee",
                        "closeIcon": "//img.alicdn.com/tps/i4/TB1BkMsJFXXXXcSXVXXwu0bFXXX.png",
                        "closeTitle": "关闭",
                        "colseBgColor": "#000000",
                        "hotIconImgUrl": "",
                        "isArrowIcon": false,
                        "isHotIcon": false,
                        "key": "换会场"
                    },
                    "popupMenuItems": [{
                        "bannerImg": "//img.alicdn.com/tps/i4/TB1g3LeLpXXXXXJXFXXSutbFXXX.jpg",
                        "contentBgColor": "",
                        "keywordBgColor": "",
                        "keywordTitleColor": "",
                        "keywordTitleHighlightColor": "",
                        "keywords": [{
                            "isHighlight": true,
                            "link": "//www.tmall.com/wow/promotion/act/16383/1470755554467?acm=lb-zebra-175897-1304029.1003.4.1047947&wh_weex=true&scm=1003.4.lb-zebra-175897-1304029.OTHER_14702506180971_1047947",
                            "title": "女装会场"
                        }, {
                            "isHighlight": false,
                            "link": "//www.tmall.com/wow/promotion/act/16383/1470755563158?acm=lb-zebra-175897-1304029.1003.4.1047947&wh_weex=true&scm=1003.4.lb-zebra-175897-1304029.OTHER_14702502333482_1047947",
                            "title": "男装会场"
                        }],
                        "link": "",
                        "title": "女装",
                        "titleBgColor": ""
                    }]
                }
            }
        },
        modules: [{
            "name": "zebra-act-sticky-bottom-menu",
            "id": 71258,
            "zebraId": "5761972660",
            "rmcId": "5761972660",
            "meta": {}
        }]
    };
    try {
        weex.$add('zebraSections', module.exports)
    } catch (e) {
    }
});


;
define("@weex-component/zebra-act-sticky-bottom-menu/tabitem", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                style: "",
                href: "",
                spmc: "",
                spmd: "",
                fontSize: 24,
                iconSize: 68,
                isNative: false,
                direction: "row",
                paddingTop: 0,
                borderRightColor: "#dddddd"
            }
        },
        created: function () {
            var t = this._app.zebraUtils;
            var e = this.$getConfig().bundleUrl || "";
            var i = new t.url.parseUrl(e);
            var o = "//" + i.host + i.pathname;
            var r = this.href.indexOf(o) < 0;
            if (!r) {
                this.href = ""
            }
            if (this.href) {
                this.href = t.url.getSpmUrl(this, this.href, this.spmc, this.spmd)
            }
            if (this.total > 4) {
                this.fontSize = 20
            }
            if (this.isNative) {
                this.paddingTop = 5;
                this.fontSize = 23;
                this.direction = "column"
            }
        },
        methods: {
            openUrl: function (t) {
                var e = t.target,
                    i, o;
                if (!e) {
                    throw new Error("Cant find currentTarget")
                } else {
                    i = e.attr.href;
                    if (i === "") {
                        this.$dispatch(this.name + "-click-menu", this)
                    } else {
                        o = this._app.zebraUtils;
                        o.env.isAndroid(this) && o.url.openUrl(this, i)
                    }
                }
            }
        }
    };
    i.exports.style = {
        bottomItem: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRightWidth: 2
        },
        bottomIcon: {
            marginRight: 5
        }
    };
    i.exports.template = {
        type: "a",
        classList: ["bottomItem"],
        attr: {
            href: function () {
                return this.href
            }
        },
        events: {
            click: "openUrl"
        },
        style: {
            flexDirection: function () {
                return this.direction
            },
            paddingTop: function () {
                return this.paddingTop
            },
            borderRightColor: function () {
                return this.borderRightColor
            }
        },
        children: [{
            type: "image",
            classList: ["bottomIcon"],
            attr: {
                src: function () {
                    return this.icon
                }
            },
            style: {
                width: function () {
                    return this.iconSize
                },
                height: function () {
                    return this.iconSize
                }
            }
        }, {
            type: "text",
            style: {
                fontSize: function () {
                    return this.fontSize
                },
                paddingTop: function () {
                    return this.paddingTop / 2
                }
            },
            attr: {
                value: function () {
                    return this.title
                }
            }
        }]
    }
});
define("@weex-component/zebra-act-sticky-bottom-menu/weex", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                spm: "",
                defaultTheme: {
                    bottomMenuBgColor: "#FBFBFB"
                },
                config: {},
                defaultConfig: {},
                bottomMenu: [],
                popupMenuItems: [],
                isShow: false,
                isShowPopupMenu: false,
                popupMenuCloseTitle: "\u5173\u95ed",
                isHotIcon: false,
                isArrowIcon: false,
                isPopupMenuColseIcon: false,
                popupMenuCloseIcon: "",
                hotIconImgUrl: "//gw.alicdn.com/tps/TB1qAddMXXXXXaaaXXXXXXXXXXX-60-60.png",
                arrowIconNormal: "//gw.alicdn.com/tps/TB1fql1LpXXXXbKXFXXXXXXXXXX-60-60.png",
                arrowIconActive: "//gw.alicdn.com/tps/TB1IhpRLpXXXXc_XVXXXXXXXXXX-60-60.png",
                keywordGridRowCount: 3,
                wrapperHeight: 100
            }
        },
        created: function () {
            if (!this.data || !this.data.bottomMenu) {
                return
            }
            var t = this._app.zebraUtils;
            var e = this.data.bottomMenu || {};
            var i = this.data.popupMenu;
            var o = this._app.zebraConfig["page-group-id"] || "";
            var r = e.disappearList || "";
            var n = this.$getConfig().bundleUrl || "";
            if (n.indexOf("wh_act_hidebar=1") >= 0) {
                return
            }
            this.theme.bottomMenuBgColor = e.bgColor;
            if (i) {
                this.theme.popupMenuBgColor = i.bgColor;
                this.theme.popupMenuColseBgColor = i.colseBgColor;
                this.poopupMenuCloseTitle = i.closeTitle;
                this.isHotIcon = !!i.isHotIcon;
                this.isArrowIcon = !!i.isArrowIcon;
                this.hotIconImgUrl = i.hotIconImgUrl;
                this.arrowIconNormal = i.arrowIconNormal;
                this.arrowIconActive = i.arrowIconActive;
                this.popupMenuCloseIcon = i.closeIcon;
                this.isPopupMenuColseIcon = i.closeIcon.length > 0 ? true : false;
                this.initPopupMenuItems()
            }
            this.theme = t.theme.checkTheme(this.defaultTheme, this.theme);
            this.config = t.theme.checkConfig(this.defaultConfig, this.config);
            this.initEvents();
            this.initMenuButtons();
            this.setupRootPadding();
            if (t.env.isTaobao(this) && e.isTaobao) {
                this.isShow = true
            } else if (t.env.isTmall(this) && e.isTmall) {
                this.isShow = true
            } else if (r.indexOf(o) < 0) {
                this.isShow = true
            } else if (t.env.isWeb(this)) {
                this.isShow = true
            }
            if (this.isShow) {
                this.$dispatch("updatePaddingBottom", this.wrapperHeight)
            }
        },
        methods: {
            initEvents: function () {
                this.$on(this.name + "-click-menu", function (t) {
                    t = t.detail ? t.detail : t;
                    var e = t.title || "";
                    if (e === this.data.popupMenu.key) {
                        this.togglePopupMenu()
                    } else if (e === this.data.shareConfig.key) {
                        this.toggleShare()
                    }
                }.bind(this))
            },
            initMenuButtons: function () {
                var t = [];
                var e = "";
                var i = this.data.shareConfig || {};
                var o = i && i.key ? i.key : "unknow";
                var r = i.disappearShareGroupIds || "";
                var n = this._app.zebraConfig["page-group-id"] || "";
                var s = this.data.tmallShareConfig || {};
                if (s && s.isEnableTmallShare && s.menuName) {
                    e = s.menuName
                }
                var a = this.$getConfig().bundleUrl || "";
                var h = a.match(/wh\_act\_nativebar\=\d/i);
                var l = -1;
                if (h) {
                    try {
                        l = parseInt(h[0].substring(17, 18), 10) || 0;
                        l -= 1;
                        if (l > this.data.bottomMenu.menuItems.length || l < 0) {
                            l = 0
                        }
                    } catch (t) {
                    }
                }
                try {
                    for (var u = 0; u < this.data.bottomMenu.menuItems.length; u++) {
                        var p = this.data.bottomMenu.menuItems[u];
                        p.spmc = this.spm;
                        p.spmd = u + 1;
                        p.isNative = !!this.data.bottomMenu.isNative;
                        p.borderRightColor = this.data.bottomMenu.borderColor || "#dddddd";
                        if (l === u && p.iconSelect) {
                            p.icon = p.iconSelect
                        }
                        if (p.title === o) {
                            if (e) {
                                p.title = e
                            }
                            if (n && r.indexOf(n) >= 0) {
                                continue
                            }
                        }
                        t.push(p)
                    }
                } catch (t) {
                }
                this.bottomMenu = t
            },
            initPopupMenuItems: function () {
                var t = [];
                var e = 1;
                try {
                    for (var i = 0; i < this.data.popupMenuItems.length; i++) {
                        var o = this.data.popupMenuItems[i];
                        var r = [];
                        var n = [];
                        if (o.keywords.length < 1 || !o.bannerImg || !o.title) {
                            continue
                        }
                        o.spmc = this.spm;
                        o.spmd = e;
                        for (var s = 0; s < o.keywords.length; s++) {
                            var a = o.keywords[s];
                            var h = this.isHotIcon || this.isArrowIcon ? 4 : 5;
                            if (!a.title || !a.link) {
                                continue
                            }
                            a.title = a.title.slice(0, h);
                            a.arrowIcon = a.isHighlight ? this.arrowIconActive : this.arrowIconNormal;
                            a.hotIconImgUrl = this.hotIconImgUrl;
                            a.isHotIcon = this.isHotIcon;
                            a.isArrowIcon = this.isArrowIcon;
                            a.bgColor = o.keywordBgColor;
                            a.titleColor = a.isHighlight ? o.keywordTitleHighlightColor : o.keywordTitleColor;
                            a.spmc = o.spmc;
                            a.spmd = e;
                            r.push(a);
                            e++
                        }
                        o.keywords = r;
                        for (var a = 0; a < o.keywords.length; a++) {
                            if (a % this.keywordGridRowCount === 0) {
                                n.push({
                                    grid: []
                                })
                            }
                            n[n.length - 1].grid.push(o.keywords[a])
                        }
                        while (n[n.length - 1].grid.length % this.keywordGridRowCount > 0) {
                            n[n.length - 1].grid.push({
                                title: ""
                            })
                        }
                        o.keywordsGrid = n;
                        t.push(o);
                        e++
                    }
                } catch (t) {
                }
                this.popupMenuItems = t
            },
            togglePopupMenu: function () {
            },
            toggleShare: function () {
                var t = this._app.zebraUtils;
                var e = this.data.shareConfig;
                if (!e) {
                    throw new Error("Data empty!");
                    return
                }
                var i = {};
                if (t.env.isTmall(this)) {
                    var o = e.shareUrl ? e.shareUrl : this.$getConfig().bundleUrl || "";
                    var r = e.shareImg ? e.shareImg : "";
                    i["share-bizid"] = e.shareId ? e.shareId : "";
                    i["share-title"] = e.shareTitle ? e.shareTitle : "";
                    i["share-intro"] = e.shareComment ? e.shareComment : "";
                    i["iphone-link"] = o;
                    i["android-link"] = o;
                    i["ipad-link"] = o;
                    i["apad-link"] = o;
                    i["aliapp-link"] = o;
                    i["tmallapp-link"] = o;
                    i["mobile-link"] = o;
                    i["pc-link"] = o;
                    i["all-link"] = o;
                    i["pc-image"] = r;
                    i["mobile-image"] = r;
                    i["mobile-image"] = r;
                    i["share-bizlogo"] = r;
                    i["iphone-version"] = "";
                    i["android-version"] = "";
                    i["ipad-version"] = "";
                    i["apad-version"] = "";
                    i["share-source"] = "other";
                    i["require-tmall"] = "false";
                    var n = this.data.tmallShareConfig;
                    if (n && n.isEnableTmallShare) {
                        i["share-scene"] = n.bizName || "";
                        i["share-bizid"] = n.bizId || ""
                    }
                    t.share.tmall(this, i)
                } else if (t.env.isTaobao(this)) {
                    var s = this.data.taobaoShareConfig;
                    if (s && s.tbShareBusinessId) {
                        i.businessId = s.tbShareBusinessId
                    }
                    i.shareId = e.shareId ? e.shareId : "shuangshiyihuichang";
                    i.title = e.shareTitle ? e.shareTitle : "";
                    i.text = e.shareComment ? e.shareComment : "";
                    i.url = e.shareUrl ? e.shareUrl : this.$getConfig().bundleUrl || "";
                    i.image = e.shareImg ? e.shareImg : "";
                    i.scene = "other";
                    i.targets = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
                    t.share.taobao(this, i)
                }
            },
            setupRootPadding: function () {
                this.$broadcast("updatePaddingBottom", this.wrapperHeight)
            }
        }
    };
    i.exports.style = {
        floor: {
            flexDirection: "row",
            backgroundColor: "#dddddd",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0
        },
        popupMenu: {
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        popupMenuColse: {
            position: "fixed",
            right: 0,
            left: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        },
        popupMenuColseIcon: {
            width: 32,
            height: 32,
            marginRight: 10
        },
        popupMenuColseTitle: {
            color: "#FFFFFF",
            fontSize: 32
        }
    };
    i.exports.template = {
        type: "div",
        shown: function () {
            return this.isShow
        },
        children: [{
            type: "div",
            classList: ["floor"],
            style: {
                backgroundColor: function () {
                    return this.theme.bottomMenuBgColor
                },
                height: function () {
                    return this.wrapperHeight
                }
            },
            append: "tree",
            children: [{
                type: "zebra-act-sticky-bottom-menu/tabitem",
                attr: {
                    name: function () {
                        return this.name
                    },
                    total: function () {
                        return this.bottomMenu.length
                    },
                    href: function () {
                        return this.link
                    },
                    spmc: function () {
                        return this.spmc
                    },
                    spmd: function () {
                        return this.spmd
                    },
                    isNative: function () {
                        return this.isNative
                    },
                    borderRightColor: function () {
                        return this.borderRightColor
                    }
                },
                repeat: function () {
                    return this.bottomMenu
                }
            }]
        }]
    }
});
;


;
define('systemConfig', function (require, exports, module) {
    module.exports = {
        "isAliIntranet": true,
        "serverTimeString": "2016-08-23T10:00:00"
    };
    module.exports.serverTime = new Date(module.exports.serverTimeString).getTime();
    module.exports.clientTime = new Date().getTime();
});


;
define('zebraConfig', function (require, exports, module) {
    module.exports = {
        "spma": "a222r",
        "spmb": "8143109",
        "id": 175612,
        "url": "https://pages.tmall.com/wow/act/16383/huanxin?wh_weex=true",
        "name": "秋冬新风尚主会场",
        "title": "秋冬新风尚主会场",
        "siteId": 41,
        "channelId": 321,
        "activityId": 16383,
        "page-group-id": "33430",
        "page-offline-time": "2016-09-30 00:00:00",
        "page-offline-url": "https://www.tmall.com",
        "page-solution": "autumn2016",
        "backgroundData": {
            "backgroundColor": "#000000",
            "backgroundImage": "none",
            "backgroundImageUrl": "https://img.alicdn.com/tps/TB1w2KGLpXXXXamapXXXXXXXXXX-415-1467.jpg",
            "backgroundPosition": "scroll",
            "backgroundRepeat": "y",
            "backgroundLeft": "0",
            "backgroundTop": "0",
            "enableBaseColor": false
        },
        "modules": [{
            "name": "zebra-act-search",
            "rmcId": "9150798115",
            "zebraId": "9150798115",
            "version": "4.0.7",
            "meta": {
                "bgColor": "#896341",
                "bgImage": "",
                "size": ""
            },
            "config": {}
        }, {
            "name": "zebra-com-share",
            "rmcId": "9392915141",
            "zebraId": "9392915141",
            "version": "4.0.30",
            "meta": {
                "size": ""
            },
            "config": {
                "isForceHidden": {
                    "type": "checkbox",
                    "title": "是否不显示背景图片"
                }
            }
        }, {
            "name": "zebra-act-headbanner4",
            "rmcId": "8896106936",
            "zebraId": "8896106936",
            "version": "4.1.17",
            "meta": {
                "size": "",
                "timeBgColor": "",
                "timeColor": ""
            },
            "config": {
                "ruleTop": {
                    "type": "text",
                    "title": "规则图片距离页头顶部位置",
                    "placeholder": "如:10px,默认18px",
                    "format": "unit-px"
                },
                "ruleRight": {
                    "type": "text",
                    "title": "规则图片距离页头右边位置",
                    "placeholder": "如:10px,默认18px",
                    "format": "unit-px"
                },
                "showSvip": {
                    "type": "checkbox",
                    "title": "是否显示超级粉丝卡"
                }
            }
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "1518660876",
            "zebraId": "1518660876",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "-15px",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "120"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-macro",
            "rmcId": "5320753696",
            "zebraId": "5320753696",
            "version": "4.2.12",
            "meta": {
                "setMargin": "",
                "backgroundColor": ""
            },
            "config": {}
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "1840740743",
            "zebraId": "1840740743",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "120"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-macro",
            "rmcId": "5974729665",
            "zebraId": "5974729665",
            "version": "4.2.12",
            "meta": {
                "setMargin": "",
                "backgroundColor": ""
            },
            "config": {}
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "1742547934",
            "zebraId": "1742547934",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "180"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "2522832389",
            "zebraId": "2522832389",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "120"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-floor-recomm-entracne-a",
            "rmcId": "1746305573",
            "zebraId": "1746305573",
            "version": "4.1.16",
            "meta": {
                "size": ""
            },
            "config": {}
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "3216395524",
            "zebraId": "3216395524",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "210"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "7273698115",
            "zebraId": "7273698115",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "120"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-floor-recomm-entracne-c",
            "rmcId": "7475349099",
            "zebraId": "7475349099",
            "version": "4.0.21",
            "meta": {
                "size": ""
            },
            "config": {
                "showBg": {
                    "type": "checkbox",
                    "title": "是否显示背景颜色"
                }
            }
        }, {
            "name": "zebra-tmall-coupon",
            "rmcId": "7560883247",
            "zebraId": "7560883247",
            "version": "4.0.15",
            "meta": {
                "size": ""
            },
            "config": {}
        }, {
            "name": "zebra-floor-recomm-entracne-d",
            "rmcId": "8817407017",
            "zebraId": "8817407017",
            "version": "4.0.9",
            "meta": {
                "size": ""
            },
            "config": {}
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "4795483191",
            "zebraId": "4795483191",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "210"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "5081689640",
            "zebraId": "5081689640",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "180"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x1"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }, {
            "name": "zebra-rightnav",
            "rmcId": "1238208768",
            "zebraId": "1238208768",
            "version": "4.0.70",
            "meta": {
                "linkColor": "#383838",
                "backgroundColor": "",
                "curColor": "",
                "moreBorder": ""
            },
            "config": {}
        }, {
            "name": "shop-dynamic-190x233",
            "rmcId": "4693395835",
            "zebraId": "4693395835",
            "version": "4.0.27",
            "meta": {
                "size": "",
                "bgColor": "",
                "themeColor": "#cfb074",
                "bannercolor": "",
                "bannersize": "",
                "bannerpaddingBottom": "",
                "bannermbColor": "",
                "bannermbImg": ""
            },
            "config": {
                "mImgHeight": {
                    "type": "text",
                    "title": "无线标题:高度(如50px,默认高50px)",
                    "value": "120"
                }
            }
        }, {
            "name": "zebra-act-newbanner-v4",
            "rmcId": "6978909660",
            "zebraId": "6978909660",
            "version": "4.1.23",
            "meta": {
                "bgColor": "",
                "size": "",
                "hasMargin": ""
            },
            "config": {
                "bannerHeight": {
                    "type": "text",
                    "title": "图片高度(默认210)",
                    "placeholder": "1xN宽 / 原图宽 * 原图高",
                    "format": "number",
                    "value": "210"
                },
                "layout": {
                    "type": "droplist",
                    "title": "无线排版方式(默认一排2)",
                    "items": [{
                        "title": "无线一排1(无线宽750)",
                        "value": "1x1"
                    }, {
                        "title": "无线一排2(无线宽372)",
                        "value": "1x2"
                    }, {
                        "title": "无线一排3(无线宽246)",
                        "value": "1x3"
                    }, {
                        "title": "无线一排4(无线宽183)",
                        "value": "1x4"
                    }],
                    "value": "1x2"
                },
                "sharpen": {
                    "type": "text",
                    "title": "图片锐化(暂不支持weex)",
                    "placeholder": "默认30,范围1-150",
                    "format": "number"
                },
                "isHideInTb": {
                    "type": "checkbox",
                    "title": "无线banner是否在手淘中不显示"
                },
                "isHideInTm": {
                    "type": "checkbox",
                    "title": "无线banner是否在猫客中不显示"
                }
            }
        }],
        "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
        "pageStatus": "pre",
        "closeCustom": true
    };
});

;
define('zebraDoms', function (require, exports, module) {
    var els = [
    //    {
    //    "isZebraModule": true,
    //    "zebraId": "9150798115",
    //    "name": "zebra-act-search",
    //    "data": {
    //        "conf": {
    //            "placeholder": "万千秋冬新装潮你来"
    //        }
    //    },
    //    "theme": {
    //        "bgColor": "#896341",
    //        "bgImage": "",
    //        "size": ""
    //    },
    //    "config": {},
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "9150798115",
    //    "spm": "9150798115",
    //    "rmcId": "9150798115"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "9392915141",
    //    "name": "zebra-com-share",
    //    "data": {
    //        "shareOptions": {
    //            "bizName": "",
    //            "image": "//img.alicdn.com/tps/TB1BdztMVXXXXXWXXXXXXXXXXXX-750-750.jpg",
    //            "text": "",
    //            "title": "万千新品亮相 秋冬必败",
    //            "url": ""
    //        },
    //        "shareObj": []
    //    },
    //    "theme": {
    //        "size": ""
    //    },
    //    "config": {
    //        "isForceHidden": {
    //            "type": "checkbox",
    //            "title": "是否不显示背景图片"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "9392915141",
    //    "spm": "9392915141",
    //    "rmcId": "9392915141"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "8896106936",
    //    "name": "zebra-act-headbanner4",
    //    "data": {
    //        "mobile": {
    //            "imgHeight": "460",
    //            "imgTitle": "",
    //            "imgUrl": "//img.alicdn.com/tps/i4/TB1pkCQLpXXXXcZaXXXwu0bFXXX.png",
    //            "ruleImg": "//img.alicdn.com/tps/i4/TB1NSOJMVXXXXcDXpXXwu0bFXXX.png",
    //            "ruleLInk": "//pages.tmall.com/wow/fushi/16383/xinfengshang?acm=lb-zebra-175612-1288145.1003.4.1042546&scm=1003.4.lb-zebra-175612-1288145.OTHER_14701636050701_1042546"
    //        }
    //    },
    //    "theme": {
    //        "size": "",
    //        "timeBgColor": "",
    //        "timeColor": ""
    //    },
    //    "config": {
    //        "ruleTop": {
    //            "type": "text",
    //            "title": "规则图片距离页头顶部位置",
    //            "placeholder": "如:10px,默认18px",
    //            "format": "unit-px"
    //        },
    //        "ruleRight": {
    //            "type": "text",
    //            "title": "规则图片距离页头右边位置",
    //            "placeholder": "如:10px,默认18px",
    //            "format": "unit-px"
    //        },
    //        "showSvip": {
    //            "type": "checkbox",
    //            "title": "是否显示超级粉丝卡"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "8896106936",
    //    "spm": "8896106936",
    //    "rmcId": "8896106936"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "1518660876",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB1Zs93LpXXXXaZXFXXwu0bFXXX.png",
    //            "mbannerUrl": ""
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "-15px",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "120"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "1518660876",
    //    "spm": "1518660876",
    //    "rmcId": "1518660876"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "5320753696",
    //    "name": "zebra-macro",
    //    "data": {
    //        "items-mobile": [{
    //            "areaHeight": "",
    //            "areaLeft": "",
    //            "areaLink": "",
    //            "areaTarget": "",
    //            "areaTitle": "",
    //            "areaTop": "",
    //            "areaType": "banner",
    //            "areaWidth": "",
    //            "imgHeight": 445,
    //            "imgTitle": "",
    //            "imgUrl": "//img.alicdn.com/tps/i4/TB114OZMVXXXXaEaXXXSutbFXXX.jpg",
    //            "imgWidth": 750
    //        }, {
    //            "areaHeight": "93.181818",
    //            "areaLeft": "11.960205078125",
    //            "areaLink": "//pages.tmall.com/wow/act/16383/shishang?acm=lb-zebra-175612-1294138.1003.4.1043263&spm=a312d.7832034.0.0.VsWNH2&scm=1003.4.lb-zebra-175612-1294138.OTHER_14702711963411_1043263",
    //            "areaTarget": "_blank",
    //            "areaTitle": "热区-0",
    //            "areaTop": "3.977294921875",
    //            "areaType": "link",
    //            "areaWidth": "292.181818",
    //            "imgHeight": "",
    //            "imgTitle": "",
    //            "imgUrl": "",
    //            "imgWidth": ""
    //        }, {
    //            "areaHeight": "83.181818",
    //            "areaLeft": "7.4573974609375",
    //            "areaLink": "//pages.tmall.com/wow/act/16383/xindian?acm=lb-zebra-175612-1294138.1003.4.1043263&scm=1003.4.lb-zebra-175612-1294138.OTHER_14702723505882_1043263",
    //            "areaTarget": "_blank",
    //            "areaTitle": "热区-1",
    //            "areaTop": "105.9801025390625",
    //            "areaType": "link",
    //            "areaWidth": "151.181818",
    //            "imgHeight": "",
    //            "imgTitle": "",
    //            "imgUrl": "",
    //            "imgWidth": ""
    //        }, {
    //            "areaHeight": "83.181818",
    //            "areaLeft": "162.44317626953125",
    //            "areaLink": "//pages.tmall.com/wow/act/16383/dingzhi?acm=lb-zebra-175612-1294138.1003.4.1043263&scm=1003.4.lb-zebra-175612-1294138.OTHER_14702719658403_1043263",
    //            "areaTarget": "_blank",
    //            "areaTitle": "热区-2",
    //            "areaTop": "104.97158813476562",
    //            "areaType": "link",
    //            "areaWidth": "140.181818",
    //            "imgHeight": "",
    //            "imgTitle": "",
    //            "imgUrl": "",
    //            "imgWidth": ""
    //        }]
    //    },
    //    "theme": {
    //        "setMargin": "",
    //        "backgroundColor": ""
    //    },
    //    "config": {},
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "5320753696",
    //    "spm": "5320753696",
    //    "rmcId": "5320753696"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "1840740743",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB19IGGLpXXXXcZapXXwu0bFXXX.png",
    //            "mbannerUrl": ""
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "120"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "1840740743",
    //    "spm": "1840740743",
    //    "rmcId": "1840740743"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "5974729665",
    //    "name": "zebra-macro",
    //    "data": {
    //        "items-mobile": [{
    //            "areaHeight": "",
    //            "areaLeft": "",
    //            "areaLink": "",
    //            "areaTarget": "",
    //            "areaTitle": "",
    //            "areaTop": "",
    //            "areaType": "banner",
    //            "areaWidth": "",
    //            "imgHeight": 541,
    //            "imgTitle": "",
    //            "imgUrl": "//img.alicdn.com/tps/i4/TB1n.qnMVXXXXcsXVXXSutbFXXX.jpg",
    //            "imgWidth": 750
    //        }, {
    //            "areaHeight": 108,
    //            "areaLeft": 13,
    //            "areaLink": "//content.tmall.com/wow/pegasus/subject/65/480723745/4169863?id=4169863&acm=lb-zebra-175612-1294135.1003.4.1043070&wh_ttid=@phone&gccpm=6063778.600.11.subject-2209&scm=1003.4.lb-zebra-175612-1294135.OTHER_14702710098211_1043070",
    //            "areaTarget": "_blank",
    //            "areaTitle": "热区-0",
    //            "areaTop": 0,
    //            "areaType": "link",
    //            "areaWidth": 141,
    //            "imgHeight": "",
    //            "imgTitle": "",
    //            "imgUrl": "",
    //            "imgWidth": ""
    //        }, {
    //            "areaHeight": 229,
    //            "areaLeft": "166.5",
    //            "areaLink": "//content.tmall.com/wow/pegasus/subject/65/25491231/4204531?id=4204531&acm=lb-zebra-175612-1294135.1003.4.1043070&wh_ttid=@phone&gccpm=6115117.600.11.subject-2199&scm=1003.4.lb-zebra-175612-1294135.OTHER_14702721640682_1043070",
    //            "areaTarget": "_blank",
    //            "areaTitle": "热区-1",
    //            "areaTop": 0,
    //            "areaType": "link",
    //            "areaWidth": 141,
    //            "imgHeight": "",
    //            "imgTitle": "",
    //            "imgUrl": "",
    //            "imgWidth": ""
    //        }, {
    //            "areaHeight": 109,
    //            "areaLeft": 8,
    //            "areaLink": "//content.tmall.com/wow/pegasus/subject/65/2873715864/4205914?id=4205914&acm=lb-zebra-175612-1294135.1003.4.1043070&wh_ttid=@phone&gccpm=6119470.600.11.subject-2199&scm=1003.4.lb-zebra-175612-1294135.OTHER_14702717793203_1043070",
    //            "areaTarget": "_blank",
    //            "areaTitle": "热区-2",
    //            "areaTop": 118,
    //            "areaType": "link",
    //            "areaWidth": 149,
    //            "imgHeight": "",
    //            "imgTitle": "",
    //            "imgUrl": "",
    //            "imgWidth": ""
    //        }]
    //    },
    //    "theme": {
    //        "setMargin": "",
    //        "backgroundColor": ""
    //    },
    //    "config": {},
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "5974729665",
    //    "spm": "5974729665",
    //    "rmcId": "5974729665"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "1742547934",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB1B.DwMVXXXXXtXXXXwu0bFXXX.png",
    //            "mbannerUrl": "//pages.tmall.com/wow/trade/act/regretforqueen?acm=lb-zebra-175612-1324810.1003.4.1061531&scm=1003.4.lb-zebra-175612-1324810.OTHER_1_1061531"
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "180"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "1742547934",
    //    "spm": "1742547934",
    //    "rmcId": "1742547934"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "2522832389",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB1rMyULpXXXXbOXVXXwu0bFXXX.png",
    //            "mbannerUrl": ""
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "120"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "2522832389",
    //    "spm": "2522832389",
    //    "rmcId": "2522832389"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "1746305573",
    //    "name": "zebra-floor-recomm-entracne-a",
    //    "data": {
    //        "floorCfg": [{
    //            "floorBgColor": "#5b2f08",
    //            "floorBgImg": "//img.alicdn.com/tps/i4/TB1cPiMMVXXXXagXpXXSutbFXXX.jpg",
    //            "floorId": "100039",
    //            "floorName": "",
    //            "href": ""
    //        }, {
    //            "floorBgColor": "#3f494b",
    //            "floorBgImg": "//img.alicdn.com/tps/i4/TB1gpWoMVXXXXceXVXXSutbFXXX.jpg",
    //            "floorId": "100038",
    //            "floorName": "",
    //            "href": ""
    //        }, {
    //            "floorBgColor": "#26406c",
    //            "floorBgImg": "//img.alicdn.com/tps/i4/TB1uxSDMVXXXXbYXFXXSutbFXXX.jpg",
    //            "floorId": "100040",
    //            "floorName": "",
    //            "href": ""
    //        }, {
    //            "floorBgColor": "#424b3f",
    //            "floorBgImg": "//img.alicdn.com/tps/i4/TB1o8mFMVXXXXagXFXXSutbFXXX.jpg",
    //            "floorId": "100041",
    //            "floorName": "",
    //            "href": ""
    //        }],
    //        "baseCfg": {
    //            "goldlog": "",
    //            "showNum": 4,
    //            "tppId": "3764"
    //        }
    //    },
    //    "theme": {
    //        "size": ""
    //    },
    //    "config": {},
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "1746305573",
    //    "spm": "1746305573",
    //    "rmcId": "1746305573"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "3216395524",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB190LtMVXXXXbyXXXXSutbFXXX.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/shiyi?acm=lb-zebra-175612-1323072.1003.4.1059842&scm=1003.4.lb-zebra-175612-1323072.OTHER_1_1059842"
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "210"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "3216395524",
    //    "spm": "3216395524",
    //    "rmcId": "3216395524"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "7273698115",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB1cP9ILpXXXXaOapXXwu0bFXXX.png",
    //            "mbannerUrl": ""
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "120"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "7273698115",
    //    "spm": "7273698115",
    //    "rmcId": "7273698115"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "7475349099",
    //    "name": "zebra-floor-recomm-entracne-c",
    //    "data": {
    //        "baseConfig": {
    //            "bgColor": "#764122",
    //            "dataType": "品类会场",
    //            "goldlog": "/dacu.1.1.1,H46747592",
    //            "showNum": 4,
    //            "tppId": "3765"
    //        }
    //    },
    //    "theme": {
    //        "size": ""
    //    },
    //    "config": {
    //        "showBg": {
    //            "type": "checkbox",
    //            "title": "是否显示背景颜色"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "7475349099",
    //    "spm": "7475349099",
    //    "rmcId": "7475349099"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "7560883247",
    //    "name": "zebra-tmall-coupon",
    //    "data": {},
    //    "theme": {
    //        "size": ""
    //    },
    //    "config": {},
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "7560883247",
    //    "spm": "7560883247",
    //    "rmcId": "7560883247"
    //},
    {
        "isZebraModule": true,
        "zebraId": "8817407017",
        "name": "zebra-floor-recomm-entracne-d",
        "data": {
            "baseCfg": {
                "bottomTitle": "//img.alicdn.com/tps/i4/TB1G65RLpXXXXcfXVXXwu0bFXXX.png",
                "goldlog": "/dacu.1.1.1,H46747592",
                "theme": "#764122",
                "topTitle": "//img.alicdn.com/tps/TB1AvpTLpXXXXc0aXXXXXXXXXXX-750-120.png"
            },
            "floorImage": [{
                "bgImage": "//img.alicdn.com/tps/i4/TB1Ud16LpXXXXbAXpXXSutbFXXX.jpg"
            }, {
                "bgImage": "//img.alicdn.com/tps/i4/TB1vp1ULpXXXXcVXFXXSutbFXXX.jpg"
            }, {
                "bgImage": "//img.alicdn.com/tps/i4/TB1HecDJXXXXXX6aFXXSutbFXXX.jpg"
            }, {
                "bgImage": "//img.alicdn.com/tps/i4/TB1fk6XLpXXXXXgaXXXSutbFXXX.jpg"
            }]
        },
        "theme": {
            "size": ""
        },
        "config": {},
        "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
        "moduleId": "8817407017",
        "spm": "8817407017",
        "rmcId": "8817407017"
    },
    //{
    //    "isZebraModule": true,
    //    "zebraId": "4795483191",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1imSFMVXXXXc9XVXXXXXXXXXX-716-210.jpg",
    //            "mbannerUrl": "//subject.tmall.com/subject/subject.htm?id=4228829&f_ua=mobile&acm=lb-zebra-175612-1323716.1003.4.1060547&scm=1003.4.lb-zebra-175612-1323716.OTHER_1_1060547"
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "210"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "4795483191",
    //    "spm": "4795483191",
    //    "rmcId": "4795483191"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "5081689640",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "",
    //            "bannerTitle": "",
    //            "bannerUrl": "",
    //            "mBannerImg": "//img.alicdn.com/tps/i4/TB1mlfwMVXXXXXGXXXXwu0bFXXX.png",
    //            "mbannerUrl": "//detail.tmall.com/item.htm?id=531659442511&acm=lb-zebra-175612-1324819.1003.4.1061536&scene=taobao_shop&spm=a1z10.1-b.w5003-14882965676.2.gWP0EB&sku_properties=5919063:6536025&scm=1003.4.lb-zebra-175612-1324819.OTHER_1_1061536"
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "180"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x1"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "5081689640",
    //    "spm": "5081689640",
    //    "rmcId": "5081689640"
    //},
    //{
    //    "isZebraModule": true,
    //    "zebraId": "1238208768",
    //    "name": "zebra-rightnav",
    //    "data": {},
    //    "theme": {
    //        "linkColor": "#383838",
    //        "backgroundColor": "",
    //        "curColor": "",
    //        "moreBorder": ""
    //    },
    //    "config": {},
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "1238208768",
    //    "spm": "1238208768",
    //    "rmcId": "1238208768",
    //    "id": "zebra-rightnav"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "4693395835",
    //    "name": "shop-dynamic-190x233",
    //    "data": {
    //        "floors": [{
    //            "__data_default": {
    //                "length": 10,
    //                "url": "//tmall-rmc.oss-cn-hangzhou.aliyuncs.com/ALADDINBOTTOM/lb-zebra-175612-1288147/WIRELESS/data.jsonp"
    //            },
    //            "__data_param": {
    //                "appId": "lb-zebra-175612-1288147",
    //                "terminalType": "2"
    //            },
    //            "__data_source": "ald",
    //            "__data_type": "jsonp",
    //            "__data_url": "//ald.taobao.com/recommend2.htm"
    //        }]
    //    },
    //    "theme": {
    //        "size": "",
    //        "bgColor": "",
    //        "themeColor": "#cfb074",
    //        "bannercolor": "",
    //        "bannersize": "",
    //        "bannerpaddingBottom": "",
    //        "bannermbColor": "",
    //        "bannermbImg": ""
    //    },
    //    "config": {
    //        "mImgHeight": {
    //            "type": "text",
    //            "title": "无线标题:高度(如50px,默认高50px)",
    //            "value": "120"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "4693395835",
    //    "spm": "4693395835",
    //    "rmcId": "4693395835"
    //}, {
    //    "isZebraModule": true,
    //    "zebraId": "6978909660",
    //    "name": "zebra-act-newbanner-v4",
    //    "data": {
    //        "banner": [{
    //            "bannerImg": "//img.alicdn.com/tps/TB17kW0LpXXXXb3XFXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "女装",
    //            "bannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755554467?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_1_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1WWOOLpXXXXcIaXXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755554467?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_1_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1Pa6dLpXXXXboXXXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "男装",
    //            "bannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755563158?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_2_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1gBO1LpXXXXc1XFXXXXXXXXXX-240-160.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755563158?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_2_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB19IPcLpXXXXacXXXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "运动户外",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/ydhw?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_3_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1ubyMLpXXXXXfapXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/ydhw?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_3_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1zmSZLpXXXXXIXVXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "男鞋",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/nanxie?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_4_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1g6C7LpXXXXXjXFXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/nanxie?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_4_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1G2OKLpXXXXXSapXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "女鞋",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/nvxie?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_5_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1G2OKLpXXXXXSapXXXXXXXXXX-240-160.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/nvxie?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_5_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1_GHfLpXXXXapXXXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "箱包服配",
    //            "bannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755583993?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_6_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB12buQLpXXXXX.aXXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755583993?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_6_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1Uam7LpXXXXadXFXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "内衣",
    //            "bannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755548121?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_7_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1ifDXLpXXXXXAXpXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/promotion/act/16383/1470755548121?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_7_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1Y.1LLpXXXXalapXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "珠宝手表",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/zbps?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_8_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1EBKJLpXXXXavapXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/zbps?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_8_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1Q0PaLpXXXXXkXpXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "美妆",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/xfsmz?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_9_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1D4q1LpXXXXb3XFXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/xfsmz?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_9_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1kbq8LpXXXXc.XpXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "童装童鞋",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/lmtz?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_10_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB17kyQLpXXXXbcaXXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/lmtz?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_10_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1FlraLpXXXXc9XXXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "天猫国际",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/fsxb?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_11_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1CdiMLpXXXXXHapXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/fsxb?acm=lb-zebra-175612-1323271.1003.4.1059996&wh_weex=true&scm=1003.4.lb-zebra-175612-1323271.OTHER_11_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/imgextra/i4/2670830951/TB2j69TX8_xQeBjy0FhXXbAoFXa_!!2670830951.jpg",
    //            "bannerTitle": "魅力惠主会场",
    //            "bannerUrl": "//www.tmall.com/wow/mlh/act/xfszhuhuichang?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_12_1059996",
    //            "mBannerImg": "//img.alicdn.com/imgextra/i1/2670830951/TB2ajqTX6nyQeBjSszbXXbCxVXa_!!2670830951.jpg",
    //            "mbannerUrl": "//www.tmall.com/wow/mlh/act/xfszhuhuichang?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_12_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1ro5MMVXXXXXtXpXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "海外直营主会场",
    //            "bannerUrl": "//pages.tmall.com/wow/act/16383/hwzy?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_13_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1FbKEMVXXXXa1XFXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//pages.tmall.com/wow/act/16383/hwzy?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_13_1059996"
    //        }, {
    //            "bannerImg": "//img.alicdn.com/tps/TB1xkqwMVXXXXXPXFXXXXXXXXXX-240-160.jpg",
    //            "bannerTitle": "聚划算",
    //            "bannerUrl": "//ju.taobao.com/jusp/nv/27zhuhuichang/tp.htm?acm=lb-zebra-175612-1323271.1003.4.1059996&spm=0.0.0.0.TkCOtT&scm=1003.4.lb-zebra-175612-1323271.OTHER_14_1059996",
    //            "mBannerImg": "//img.alicdn.com/tps/TB1GSejMVXXXXbAXVXXXXXXXXXX-372-210.jpg",
    //            "mbannerUrl": "//ju.taobao.com/m/jusp/nv/ssly327/mtp.htm?acm=lb-zebra-175612-1323271.1003.4.1059996&scm=1003.4.lb-zebra-175612-1323271.OTHER_14_1059996"
    //        }]
    //    },
    //    "theme": {
    //        "bgColor": "",
    //        "size": "",
    //        "hasMargin": ""
    //    },
    //    "config": {
    //        "bannerHeight": {
    //            "type": "text",
    //            "title": "图片高度(默认210)",
    //            "placeholder": "1xN宽 / 原图宽 * 原图高",
    //            "format": "number",
    //            "value": "210"
    //        },
    //        "layout": {
    //            "type": "droplist",
    //            "title": "无线排版方式(默认一排2)",
    //            "items": [{
    //                "title": "无线一排1(无线宽750)",
    //                "value": "1x1"
    //            }, {
    //                "title": "无线一排2(无线宽372)",
    //                "value": "1x2"
    //            }, {
    //                "title": "无线一排3(无线宽246)",
    //                "value": "1x3"
    //            }, {
    //                "title": "无线一排4(无线宽183)",
    //                "value": "1x4"
    //            }],
    //            "value": "1x2"
    //        },
    //        "sharpen": {
    //            "type": "text",
    //            "title": "图片锐化(暂不支持weex)",
    //            "placeholder": "默认30,范围1-150",
    //            "format": "number"
    //        },
    //        "isHideInTb": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在手淘中不显示"
    //        },
    //        "isHideInTm": {
    //            "type": "checkbox",
    //            "title": "无线banner是否在猫客中不显示"
    //        }
    //    },
    //    "schemaVersion": "3fb05f32-8fe6-4bb8-9264-b52b71adaa78",
    //    "moduleId": "6978909660",
    //    "spm": "6978909660",
    //    "rmcId": "6978909660"
    //}
];
    var zebraSections = require('zebraSections');
    var sectionModules = []
    if (zebraSections) {
        var __data = zebraSections.data || {}
        var __pageData = __data.page || {}
        for (var i = 0; i < zebraSections.modules.length; i++) {
            var __obj = zebraSections.modules[i];
            var __result = {
                isZebraModule: true,
                name: __obj.name,
                data: __pageData[__obj.rmcId] || {},
                theme: __obj.meta || {},
                config: __obj.config || {},
                schemaVersion: '',
                moduleId: __obj.zebraId,
                spm: __obj.zebraId,
                zebraId: __obj.zebraId
            }

            // fixed bug: https://aone.alibaba-inc.com/issue/8670032
            if (__obj.name === 'zebra-act-sticky-bottom-menu') {
                __bottom_menu__ = {
                    "type": __result.name + '/weex',
                    "attr": __result
                }
            } else {
                sectionModules.push(__result)
            }
        }
    }

    module.exports = sectionModules.concat(els)
});


/*define("zebraUtils",function(t,e,r){e.name="@ali/WeexUtils",e.version="0.1.36",r.exports=function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=e.parseUrl=e.openUrl=e.getSpm=e.checkTheme=e.zebra=e.floorDynamic=e.user=e.url=e.ui=e.tracker=e.tool=e.theme=e.share=e.network=e.navigator=e.env=e.dom=e.data=void 0;var a=r(1),o=n(a),i=r(16),u=n(i),c=r(6),l=n(c),s=r(9),f=n(s),p=r(3),_=n(p),d=r(17),h=n(d),m=r(18),v=n(m),y=r(2),g=n(y),R=r(5),O=n(R),b=r(11),S=n(b),E=r(4),w=n(E),P=r(12),M=n(P),T=r(19),k=n(T),C=r(20),N=n(C);e.data=o,e.dom=u,e.env=l,e.navigator=f,e.network=_,e.share=h,e.theme=v,e.tool=g,e.tracker=O,e.ui=S,e.url=w,e.user=M,e.floorDynamic=k["default"],e.zebra=N,e.checkTheme=v.checkTheme,e.getSpm=O.getSpm,e.openUrl=w.openUrl,e.parseUrl=w.parseUrl,e.extend=g.extend;try{window.weex.zebraUtils=e}catch(j){}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function o(t){var e={isDynamic:!1,dataCount:0,data:[]},r=function(t){if(!l.isPlainObject(t))return!1;var e="jsonp"===t.__data_type,r="ald"===t.__data_source,n=l.isString(t.__data_url),a=l.isPlainObject(t.__data_param),o=l.isObject(t.__data_default);return!!(e&&r&&n&&a&&o)},n=function a(t){return l.isObject(t)&&(r(t)?(e.isDynamic=!0,e.dataCount=t.__data_default.length,e.data=t.__data_default):l.each(t,function(t){return l.isPlainObject(t)?r(t)?(e.isDynamic=!0,e.data=l.isArray(t.__data_default)?t.__data_default:[t.__data_default],e.dataCount=e.data.length):e=a(t):l.isArray(t)&&(t[0]&&r(t[0])?(e.isDynamic=!0,e.data=l.isArray(t[0].__data_default)?t[0].__data_default:[t[0].__data_default],e.dataCount=e.data.length):(e.dataCount=t.length,e.data=t)),e})),e};return n(t)}function i(t,e,r){if(!l.isObject(e))return null;if(!t||!t.$sendHttp||!t.$sendMtop)throw new Error(g.ERROR_MISSING_PARAM_CONTEXT);return r=r||{},new O["default"]({data:e,ctx:t,config:{mtop:r.mtop||!0,timeout:r.timeout,duplication:r.duplication,params:r.params||{},mtopApiName:r.mtopApiName}})}function u(t,e){function r(t,e){var r=n;try{r=e.indexOf("SUCCESS")>=0?a:e.split("::")[1]||n}catch(o){}h.toast(t,r)}if(!t||!t.$call)throw new Error(g.ERROR_MISSING_PARAM_CONTEXT);var n="抱歉，好多人在排队领券，请稍候再试试吧！",a="恭喜您，领券成功！";return v.getUserInfo(t).then(function(r){if(r.isLogin===!0||"true"===r.isLogin){e=l.isString(e)?e:"";var n=new _.parseUrl(e),a=n.params.activity_id||n.params.activityId||"",o=n.params.seller_id||n.params.sellerId||"",i={api:"mtop.taobao.buyerResourceMtopWriteService.applyCoupon",v:"3.0",ecode:0,sessionOption:"AutoLoginOnly",param:{uuid:a,supplierId:o}};return f.mtop(t,i)}throw new Error(g.ERROR_NEEDS_LOGIN)}).then(function(e){var n=l.isArray(e.ret)?e.ret[0]:e.ret;if(n.indexOf("FAIL_SYS_SESSION_EXPIRED")>=0)throw new Error(g.ERROR_NEEDS_LOGIN);return e.data.error&&"false"!==e.data.error?(r(t,n),!0):(r(t,n),!1)})["catch"](function(e){throw e.message===g.ERROR_NEEDS_LOGIN?v.login(t):h.toast(t,n),e})}Object.defineProperty(e,"__esModule",{value:!0}),e.checkDynamicData=o,e.dynamicData=i,e.getCoupon=u;var c=r(2),l=a(c),s=r(3),f=a(s),p=r(4),_=a(p),d=r(11),h=a(d),m=r(12),v=a(m),y=r(7),g=a(y),R=r(13),O=n(R)},function(t,e){"use strict";function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];if(l(Object.assign))Object.assign.apply(Object,[t].concat(n));else{var o=n.shift();for(var i in o)t[i]=o[i];n.length&&r.apply(void 0,[t].concat(n))}return t}function n(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function a(t){return"array"===n(t)}function o(t){return"string"==typeof t}function i(t){return"number"==typeof t}function u(t){var e=n(t);return!("object"!==e&&!a(t))}function c(t){return"object"===n(t)}function l(t){return"function"==typeof t}function s(t,e){if(e="function"===n(e)?e:function(){},a(t))for(var r=0;r<t.length;r++)e(t[r],r);else if(c(t))for(var o in t)e(t[o],o)}function f(t){if(!u(t))return t;var e=a(t)?[]:{},r=void 0,n=void 0;for(n in t)r=t[n],e[n]=u(r)?f(r):r;return e}function p(t){if(!a(t))return[];for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=r.shift();return a(o)&&(o.map(function(e,r){t.indexOf(e)<0&&t.push(e)}),r.length&&p.apply(void 0,[t].concat(r))),t}function _(t){var e=[];if(c(t))for(var r in t)e.push(r);return e}function d(t){if(a(t)){t=f(t);for(var e=0;e<t.length;e++)if(o(t[e]))try{t[e]=JSON.parse(t[e])}catch(r){throw r}}else if(o(t))try{t=JSON.parse(t)}catch(r){throw r}return t}function h(t){var e=void 0;for(e in t)return!1;return!0}function m(t){return!(!c(t)||!l(t.$getConfig))}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=r,e._typeof=n,e.isArray=a,e.isString=o,e.isNumber=i,e.isObject=u,e.isPlainObject=c,e.isFunction=l,e.each=s,e.clone=f,e.union=p,e.keys=_,e.parseArgs=d,e.isEmptyObject=h,e.isContext=m},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r){function n(){for(var t=0;t<arguments.length;t++)try{arguments[t]=c.isString(arguments[t])?JSON.parse(arguments[t]):arguments[t]}catch(e){console.error(e)}return arguments}return t&&t.$sendMtop?c.isFunction(r)?t.$sendMtop(e,function(){var e=n.apply(this,arguments);r.apply(t,e)}):new Promise(function(r,a){t.$sendMtop(e,function(){var e=n.apply(this,arguments);r.apply(t,e)})}):c.isFunction(r)?r(null):null}function o(t,e,r,n){function a(t){try{c.isString(t)&&(t=JSON.parse(t))}catch(e){}try{t=t.data?t.data:t,t=t.replace(/.*?[a-zA-Z0-9_]*\(/,"").replace(/\)(\;)?(\ *)?$/,""),t=JSON.parse(t)}catch(e){}return t}function o(){return"jsonp_"+Date.now()%1e5+Math.ceil(1e3*Math.random())}function u(t){t.url=c.isString(t.url)?t.url:"",t.body=c.isPlainObject(t.body)?t.body:{};var r=new s.parseUrl(t.url);return r.params=c.clone(c.extend(r.params,t.body)),"JSONP"!==e.method||r.params.callback||(r.params.callback=o()),r.toString()}function l(t,e){if("JSONP"===t.method&&(e=a(e)),c.isString(e))try{e=JSON.parse(e)}catch(r){}return e}e=c.isString(e)?{url:e}:e,e=c.isPlainObject(e)?e:{},e.method=e.method||"GET",e.method=e.method.toUpperCase();var f=(0,m.requireModule)("stream"),_=f?f.fetch:t.$sendHttp;if(!c.isContext(t))throw new Error(d.ERROR_MISSING_PARAM_CONTEXT);if(!e.url)throw new Error(d.ERROR_MISSING_PARAM_URL);if(e.url=s.fixSchema(e.url),p.isWeb(t)&&"JSONP"===e.method)return(0,h.jsonp)(e,r);var v=function(){var a=function(){c.isFunction(n)&&n.apply(t,arguments)},o=c.clone(e);if(o.method.match(/GET|JSONP/i)){o.method="GET",o.url=u(o);try{delete o.body}catch(i){}}if(!c.isFunction(r))return{v:new Promise(function(r,n){function i(n){n=l(e,n),r.call(t,n)}_.apply(t,[o,i,a])})};var s=function(t){t=l(e,t),r(t)};_.apply(t,[o,s,a])}();return"object"===("undefined"==typeof v?"undefined":i(v))?v.v:void 0}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.mtop=a,e.fetch=o;var u=r(2),c=n(u),l=r(4),s=n(l),f=r(6),p=n(f),_=r(7),d=n(_),h=r(10),m=r(8)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r,n){var a=o(t,e,r,n),i=(0,R.requireModule)("event");if(i&&i.openURL)i.openURL(a);else{if(!d.isContext(t)||!t.$openURL)throw new Error(v.ERROR_MISSING_CTX_OR_EVENT_MODULE);t.$openURL(a)}return a}function o(t,e,r,n){if(!d.isContext(t))throw new Error(v.ERROR_MISSING_PARAM_CONTEXT);if(!e)throw new Error(v.ERROR_MISSING_PARAM_URL2);e=u(e),r=r||0,n=n||0;var a=void 0;try{a=new i(e)}catch(o){return e}var c=p.getSpm(t,r,n);return c&&(a.params.spm=c),a.params._from=g.isWeb(t)?"h5":"weex",t._app.zebraConfig&&(a.params.utpagename=t._app.zebraConfig.pageName||""),a.toString()}function i(t){var e=this,r={};Object.defineProperty(this,"params",{set:function(t){if("object"===("undefined"==typeof t?"undefined":s(t))){for(var e in r)delete r[e];for(var n in t)r[n]=t[n]}},get:function(){return r},enumerable:!0}),Object.defineProperty(this,"search",{set:function(t){if("string"==typeof t){0===t.indexOf("?")&&(t=t.substr(1));var e=t.split("&");for(var n in r)delete r[n];for(var a=0;a<e.length;a++){var o=e[a].split("=");if(o[0])try{r[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")}catch(i){r[o[0]]=o[1]||""}}}},get:function(){var t=[];for(var e in r)if(r[e])try{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r[e]))}catch(n){}else try{t.push(encodeURIComponent(e))}catch(n){}return t.length?"?"+t.join("&"):""},enumerable:!0});var n=void 0;Object.defineProperty(this,"hash",{set:function(t){"string"==typeof t&&(t&&t.indexOf("#")<0&&(t="#"+t),n=t||"")},get:function(){return n},enumerable:!0}),this.set=function(t){var r=void 0;
 t="https://pages.tmall.com/wow/act/16383/nvzhuang?wh_weex=true&wh_weex=true&spm=a1z60.7906371.CameraScanner.1";
 if(!(r=t.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#]*)?(?:[?]([^?#]*))?(#[^#]*)?$","i"))))throw new Error(v.ERROR_WRONG_URL_SCHEME);e.protocol=r[1]||"",e.username=r[2]||"",e.password=r[3]||"",e.hostname=e.host=r[4],e.port=r[5]||"",e.pathname=r[6]||"/",e.search=r[7]||"",e.hash=r[8]||"",e.origin=e.protocol+"//"+e.hostname},this.toString=function(){var t=e.protocol+"//";return e.username&&(t+=e.username,e.password&&(t+=":"+e.password),t+="@"),t+=e.host,e.port&&"80"!==e.port&&(t+=":"+e.port),e.pathname&&(t+=e.pathname),e.search&&(t+=e.search),e.hash&&(t+=e.hash),t},this.set(t.toString())}function u(t,e){return t=t||"",e=e||"https","string"==typeof t&&t.match(/^\/\//)?e+":"+t:t}function c(t){t=d.isString(t)?t:"";for(var e={},r=t.split("&"),n=0;n<r.length;n++){var a=r[n],o=a.split("="),i=o[0],u=o[1];i&&(e[i]=u)}return e}function l(t){var e=[];for(var r in t){var n=r,a=t[r];e.push(n+"="+a)}return e.join("&")}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.openUrl=a,e.getSpmUrl=o,e.parseUrl=i,e.fixSchema=u,e.paramsToObj=c,e.objToParams=l;var f=r(5),p=n(f),_=r(2),d=n(_),h=r(9),m=(n(h),r(7)),v=n(m),y=r(6),g=n(y),R=r(8)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r,n,a){if(!(0,g.isContext)(t))throw new Error(S.ERROR_MISSING_PARAM_CONTEXT);return t&&t._app&&t._app.zebraConfig?(n=e+""||"0",a=r+""||"0",e=t._app.zebraConfig.spma||"0",r=t._app.zebraConfig.spmb||"0"):(e=e?e:"0",r=r?r:"0",n=n?n:"0",a=a?a:"0"),[e,r,n,a].join(".")}function o(t,e,r){if(!(0,g.isContext)(t))return new Error(S.ERROR_MISSING_PARAM_CONTEXT);if((0,g.isPlainObject)(e)){r=(0,g.clone)(e);var n=y(!0);e=n.origin+n.pathname}if(!(0,g.isString)(e)||!(0,g.isPlainObject)(r))return!1;if((0,R.isTaobaoNative)(t))u(t,"enter",e,"",r);else{if(!(0,R.isTmallNative)(t))return!1;(0,E.$call)(t,"userTrack","enterEvent",e,r)}return!0}function i(t,e){return(0,g.isContext)(t)?!!(0,g.isString)(e)&&((0,E.$call)(t,"userTrack","leaveEvent",e),!0):new Error(S.ERROR_MISSING_PARAM_CONTEXT)}function u(t,e,r,n,a){return(0,g.isContext)(t)?!!((0,g.isString)(e)&&(0,g.isString)(r)&&(0,g.isString)(n)&&(0,g.isPlainObject)(a))&&((0,E.$call)(t,"userTrack","commit",e,r,n,a),!0):new Error(S.ERROR_MISSING_PARAM_CONTEXT)}
 function c(t,e,r,n,a,o,i,u){
 nativeLog("laiyi ut commit event", t);
 return(0,g.isContext)(t)?(!u&&console&&(0,g.isFunction)(console.error)&&console.error("此接口未经 UT 团队、数据团队验证，若因为此接口造成问题请自行负责。"),!!((0,g.isString)(e)&&(0,g.isNumber)(r)&&(0,g.isString)(n)&&(0,g.isString)(a)&&(0,g.isString)(o)&&(0,g.isPlainObject)(i))&&((0,E.$call)(t,"userTrack","commitEvent",e,r,n,a,o,i),!0)):new Error(S.ERROR_MISSING_PARAM_CONTEXT)}
 function l(t,e,r){var n=m(e,r);
 nativeLog("laiyi exposure2");
 return c.call(t,t,y(),2201,e,"","",n,!0)}function s(t,e,r){var n=m(e,r);return c.call(t,t,y(),19999,e,"","",n,!0)}function f(t,e,r){return(0,g.isContext)(t)?!(!(0,g.isString)(e)||!(0,g.isPlainObject)(r))&&((0,E.$call)(t,"userTrack","click",e,r),!0):new Error(S.ERROR_MISSING_PARAM_CONTEXT)}function p(t,e,r,n,a){if(!(0,g.isContext)(t))return new Error(S.ERROR_MISSING_PARAM_CONTEXT);a=(0,g.isString)(a)?a:"";var o=a.split(";")||[],i=o[0]||"",u=o[1]||"",c=void 0;return i=i.replace(/^gostr\=/,""),u=u.replace(/^locaid\=/,""),o=o.slice(2),c=o.join(""),_(t,[i,e,r,n,u].join("."),"CLK",c,"")}function _(t,e,r,n,a,o){
 nativeLog("laiyi exposure1");
 return(0,g.isContext)(t)?(e=(0,g.isString)(e)?e:"",r=(0,g.isString)(r)?r:"",n=(0,g.isString)(n)?n:"",a=(0,g.isString)(a)?a:"",o=(0,g.isString)(o)?o:"",nativeLog("laiyi exposure3"),(0,R.isWeb)(t)?d(e,r,n,a):""!==r&&("CLK"===r?h(t,e,r,n,a,o):"EXP"===r?(l(t,e,n)):s(t,e,n))):new Error(S.ERROR_MISSING_PARAM_CONTEXT)}
 function d(t,e,r,n){return window.goldlog&&window.goldlog.record?(window.goldlog.record(t,e,r,n),!0):(console.error(S.ERROR_MISSING_GOLDLOG),!1)}function h(t,e,r,n,a,o){var i=m(e,n);o&&(i.spm=o);var c=y(!0),l=(c.origin||"")+(c.pathname||"")+"";return u.call(t,t,"click",l,"",i)}function m(t,e){return{logkey:t,logkeyargs:v(e),url:y(),cna:"",extendargs:JSON.stringify({}),isonepage:0}}function v(t){var e=(0,g.isPlainObject)(t)?t:(0,O.paramsToObj)(t);return e.weex=e.weex?e.weex:"1",e.autosend="1",(0,O.objToParams)(e)}function y(t){try{var e=ctx.$getConfig().bundleUrl||"";return t?new O.parseUrl(e):e}catch(r){console.error(r)}return t?{}:""}Object.defineProperty(e,"__esModule",{value:!0}),e.getSpm=a,e.pageEnter=o,e.pageLeave=i,e.commit=u,e.commitEvent=c,e.exposure=l,e.other=s,e.click=f,e.goldlogClick=p,e.goldlog=_;var g=r(2),R=r(6),O=r(4),b=r(7),S=n(b),E=r(8)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);var e=t.$getConfig().env.appName||"",r=["TM","tm","tmall","Tmall","天猫"];return r.indexOf(e)>=0}function o(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);return a(t)&&s(t)}function i(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);return a(t)&&!s(t)}function u(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);var e=t.$getConfig().appName||t.$getConfig().env.appName||"",r=["TB","tb","taobao","Taobao","淘宝"];return r.indexOf(e)>=0}function c(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);return u(t)&&s(t)}function l(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);return u(t)&&!s(t)}function s(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);var e=t.$getConfig().env.platform||"";return"object"===("undefined"==typeof window?"undefined":_(window))&&null===e.match(/ios|android/i)}function f(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);return"iOS"===t.$getConfig().env.platform}function p(t){if(!t||!t.$getConfig)throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);return"android"===t.$getConfig().env.platform}Object.defineProperty(e,"__esModule",{value:!0});var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.isTmall=a,e.isTmallWeb=o,e.isTmallNative=i,e.isTaobao=u,e.isTaobaoWeb=c,e.isTaobaoNative=l,e.isWeb=s,e.isIOS=f,e.isAndroid=p;var d=r(7),h=n(d)},function(t,e){"use strict";function r(){for(var t=arguments[0]+"",e=1;e<arguments.length;e++)t=t.replace(/\%s/i,arguments[e]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.msg=r;var n=e.ERROR_PARAM_IS_REQUIRED="Param [%s] is required!",a=e.ERROR_SHOULD_BE="%s should be %s.";e.ERROR_MISSING_PARAM_CONTEXT=r(a,"First param","context(ctx)"),e.ERROR_MISSING_PARAM_URL=r(n,"params.url"),e.ERROR_MISSING_PARAM_URL2=r(n,"url"),e.ERROR_MISSING_PARAM_ALL_LINK=r(n,"all-link"),e.ERROR_MISSING_GOLDLOG=r(n,"window.goldlog.record"),e.ERROR_MESSAGE_SHOULD_BE_STRING=r(a,"message","string"),e.ERROR_PARAM_SHOULE_BE_OBJECT="params is not object!",e.ERROR_JSONP_TIMEOUT="JSONP request to %s timed out",e.ERROR_SHARE_UNSUPPORT="Currently env doesn`t support Share",e.ERROR_WRONG_URL_SCHEME="Wrong uri scheme.",e.ERROR_MTOP_REQUEST="Mtop接口调用失败",e.ERROR_NEEDS_LOGIN="Please login first",e.ERROR_MISSING_CTX_OR_EVENT_MODULE="missing ctx or can not find event module"},function(e,r){"use strict";function n(e){try{var r=void 0,n=null;try{n=process.env.NODE_ENV}catch(a){}if("_require"===t.name||"weex"===n?r=t:__weex_require__?r=__weex_require__:t&&"test"!==n&&(r=t),r)return r(e)}catch(a){}return null}function a(t){return t="string"==typeof t?t:"",n("@weex-module/"+t)}
 function o(t,e,r){
 nativeLog("laiyi expose $call")
 var n=void 0,o=void 0,u="object"===("undefined"==typeof t?"undefined":i(t))&&"function"==typeof t.$getConfig;u?(n="string"==typeof e?e:"",o="string"==typeof r?r:""):(n="string"==typeof t?t:"",o="string"==typeof e?e:"");var c=a(n);if(u&&!c){var l=[n,o];return Array.prototype.push.apply(l,Array.prototype.slice.call(arguments,3)),t.$call.apply(t,l)}
 var s=c[o],f=u?3:2;return"function"==typeof s?(nativeLog("laiyi m", s, n, f),s.apply({},Array.prototype.slice.call(arguments,f))):null}
 Object.defineProperty(r,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};r._require=n,r.requireModule=a,r.$call=o},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r){if(!t||!t.$call)throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);return e=c.isPlainObject(e)?e:{},c.isFunction(r)?(0,f.$call)(t,"navigator","setNavBarTitle",e,r):new Promise(function(r,n){(0,f.$call)(t,"navigator","setNavBarTitle",e,r)})}function o(t,e,r){if(!t||!t.$call)throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);return e=c.isPlainObject(e)?e:{},c.isFunction(r)?((0,f.$call)(t,"navigator","push",e,r),null):new Promise(function(r,n){(0,f.$call)(t,"navigator","push",e,r)})}function i(t,e,r){if(!t||!t.$call)throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);return e=c.isPlainObject(e)?e:{},c.isFunction(r)?((0,f.$call)(t,"navigator","pop",e,r),null):new Promise(function(r,n){(0,f.$call)(t,"navigator","pop",e,r)})}Object.defineProperty(e,"__esModule",{value:!0}),e.setTitle=a,e.push=o,e.pop=i;var u=r(2),c=n(u),l=r(7),s=n(l),f=r(8)},function(t,e){"use strict";function r(t,e){function r(){return"jsonp_"+Date.now()%1e5+Math.ceil(1e3*Math.random())}function n(t,e){var r=f.querySelectorAll("head script[id="+e+"]");if(r.length<2)try{delete window[t]}catch(n){}}function a(t){var e=f.getElementById(t);e&&f.getElementsByTagName("head")[0].removeChild(e)}function o(t){var e=f.createElement("a");return e.setAttribute("href",t),e}function i(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function u(t){var e=[];for(var r in t){var n=r,a=t[r];e.push(n+"="+a)}return e.join("&")}function c(t){t=t||{};var c,p=t.timeout?t.timeout:l.timeout,_=t.jsonpCallback?t.jsonpCallback:l.jsonpCallback;if(s.indexOf(_)!==-1){var d=o(s),h=new RegExp("("+_+"(=([^&#]*)|&|#|$))"),m=h.exec(d.search.substring(1));m&&(d.search=d.search.replace(m[0],""),s=d.toString(),t.callback=m[3])}return new Promise(function(o,l){var d=t.callback||r(),h=_+"_"+d;window[d]&&(c&&clearTimeout(c),a(h),n(d)),window[d]=function(t){"function"==typeof e&&e(t),o(t),c&&clearTimeout(c),a(h),n(d)},s+=s.indexOf("?")===-1?"?":"&",t.body&&(s+="object"===i(t.body)?u(t.body):encodeURI(String(t.body)),s+="&");var m=f.createElement("script");m.setAttribute("src",s+_+"="+d),m.id=h,f.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){l("JSONP error on "+s),n(d),a(h)},p),m.onreadystatechange=m.onerror=function(){return(!this.readyState||!("loaded"!==this.readyState&&"complete"!==this.readyState||window[d]))&&(l(new Error("JSONP request to "+s+" error")),c&&clearTimeout(c),n(d),a(h),!0)}})}t="string"==typeof t?{url:t}:t,t="object"===i(t)?t:{};var l={timeout:2e3,jsonpCallback:"callback",callback:null,body:""},s=t.url||"",f=window.document;return s?c.call(this,t):Promise.reject(new Error("Param [params.url] is required!"))}Object.defineProperty(e,"__esModule",{value:!0}),e.jsonp=r},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r){if(!t||!t.$call)throw new Error(i.ERROR_MISSING_PARAM_CONTEXT);return r=c.isNumber(r)?r:2,e=c.isString(e)?e:i.ERROR_MESSAGE_SHOULD_BE_STRING,(0,l.$call)(t,"modal","toast",{message:e,duration:r})}Object.defineProperty(e,"__esModule",{value:!0}),e.toast=a;var o=r(7),i=n(o),u=r(2),c=n(u),l=r(8)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!t||!t.$call)throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);return c.isFunction(e)?(0,f.$call)(t,"user","getUserInfo",e):new Promise(function(e,r){(0,f.$call)(t,"user","getUserInfo",function(r){if(c.isString(r))try{r=JSON.parse(r)}catch(n){throw n}e.call(t,r)})})}function o(t,e){if(!t||!t.$call)throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);return c.isFunction(e)?(0,f.$call)(t,"user","login",e):new Promise(function(e,r){(0,f.$call)(t,"user","login",function(r){if(c.isString(r))try{r=JSON.parse(r)}catch(n){throw n}e.call(t,r)})})}function i(t,e){if(!t||!t.$call)throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);return c.isFunction(e)?void(0,f.$call)(t,"user","logout",e):new Promise(function(e,r){(0,f.$call)(t,"user","logout",function(r){if(c.isString(r))try{r=JSON.parse(r)}catch(n){throw n}e.call(t,r)})})}Object.defineProperty(e,"__esModule",{value:!0}),e.getUserInfo=a,e.login=o,e.logout=i;var u=r(2),c=n(u),l=r(7),s=n(l),f=r(8)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(2),i=r(14),u=function(t){return"[object Object]"===Object.prototype.toString.call(t)},c=function(){function t(e){if(n(this,t),this.cfg=e,this.config=e.config||{},!this.cfg.data)throw new Error("conf参数必须为json");return this}return a(t,[{key:"_stringfiyToResult",value:function(t){var e=t.data;return this._getData(e,t)}},{key:"_getData",value:function(t,e){var r=this;this._parse(t),o.isEmptyObject(r.request.requestStack)?e.callback&&e.callback(t):r.request.run(function(n){o.each(n,function(e,n){o.each(r.xPathList,function(r,a){n===r&&!function(){var r=a.split("."),n=r.pop(),o=t;r.forEach(function(t){t&&(o=o[t])}),o[n]=e}()})}),r.xPathList={},e.callback&&e.callback(t)})}},{key:"_parse",value:function(t,e){var r=this;e=e||"";var n=this._checkTagIsDynamic(t);return n?void this._push(t,n,e):void o.each(t,function(t,n){r._isTag(t)&&r._parse(t,e+"."+n)})}},{key:"_isTag",value:function(t){return Array.isArray(t)||u(t)}},{key:"_push",value:function(t,e,r){this.xPathList[r]=e,this.request.push(t[0])}},{key:"_checkTagIsDynamic",value:function(t){var e=Array.isArray(t);return!!e&&(!(t.length>1)&&this._checkDataConfig(t[0]))}},{key:"then",value:function(t,e){var r=this,n=parseInt(this.config.timeout,10);return n=n?n>100?n:1e3*n:8e3,this.request=new i({timeout:n,ctx:r.cfg.ctx,duplication:!!this.config.duplication,mtop:this.config.mtop,params:u(this.config.params)?this.config.params:{},mtopApiName:this.config.mtopApiName,callback:t,errCallback:e}),this.cfg.callback=t,this.cfg.errCallback=e,this.xPathList={},this._stringfiyToResult(this.cfg),this}},{key:"catch",value:function(){return this}},{key:"_checkDataConfig",value:function(t){if(!t||!u(t))return!1;var e=t.__data_type&&t.__data_source&&t.__data_url&&t.__data_param&&u(t.__data_param)&&t.__data_default;return!!e&&t.__data_param.appId}}]),t}();t.exports=c},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(15),i=r(2),u={timeout:8e3,duplication:!1,mtop:!1,params:{}},c=(new Date).getTime(),l=/^(https?:|)\/\/(.*)data\.jsonp$/i,s=function(t){return"[object Object]"===Object.prototype.toString.call(t)},f=function(t){return"[object String]"===Object.prototype.toString.call(t)},p=function(t){return t&&f(t)&&l.test(t)},_=function(t){var e=[];return t.forEach(function(t){e.indexOf(t)===-1&&e.push(t)}),e},d=function(){function t(e){n(this,t),this.cfg=Object.assign(u,e),this.requestStack={},this.backUpDataList={},this.resultDataList={};var r=e.ctx;r._app.__pvuuid?c=r._app.__pvuuid:r._app.__pvuuid=c}return a(t,[{key:"push",value:function(t){var e=t.__data_url,r=t.__data_param&&t.__data_param.appId;if(r)switch(this.checkBottomConfigVersion(t.__data_default)){case"v2":this.backUpDataList[r]={url:t.__data_default.url,length:t.__data_default.length};break;case"v1":default:this.backUpDataList[r]=t.__data_default}this.requestStack[e]?(this.requestStack[e].dataParam=this._mergeParams(this.requestStack[e].dataParam,t.__data_param),console&&console.error("dataDetection 即将废弃，由调用者自己传入经纬度信息"),this.cfg.ctx.nativeLog&&this.cfg.ctx.nativeLog("dataDetection 即将废弃，由调用者自己传入经纬度信息"),this.requestStack[e].dataDetection=this._mergeArray(this.requestStack[e].dataDetection,t.__data_detection)):this.requestStack[e]={dataParam:t.__data_param,dataType:this._getDataType(t.__data_type),dataDetection:t.__data_detection||[]},this.cfg.duplication||(this.requestStack[e].dataParam._pvuuid=c)}},{key:"checkBottomConfigVersion",value:function(t){return s(t)&&t.url&&p(t.url)?"v2":s(t)&&!t.url&&t.length?"v3":"v1"}},{key:"_mergeParams",value:function(t,e){for(var r in t)t[r]&&e[r]&&(""+t[r]).indexOf(e[r])<0&&(t[r]+=","+e[r]);return Object.assign(e,t)}},{key:"_mergeArray",value:function(t,e){return e&&e.forEach(function(e){t.indexOf(e)||t.push(e)}),t}},{key:"_getDataType",value:function(t){var e=void 0;switch(t){case"jsonp":e="jsonp";break;default:e="jsonp"}return e}},{key:"_mergeData",value:function(t,e,r){var n=this,a="string"==typeof t?_(t.split(",")):[t],o={},i=function(t){Object.keys(t).forEach(function(e){n.resultDataList[e]=t[e]}),r&&r(n.resultDataList)};a.forEach(function(t){o[t]=!1}),a.forEach(function(t){var r=e&&e[t],a=r&&r.data,u=r&&r.exposureParam,c=r&&r.success;n._connectTagData(t,a,n.backUpDataList[t],e&&u,c,function(e){o[t]=e;var r=!0;Object.keys(o).forEach(function(t){o[t]||(r=!1)}),r===!0&&i(o)})})}},{key:"_connectTagData",value:function(t,e,r,n,a,o){var i=this,u=(i.cfg.ctx._app.Dynamic_NotEmptyData||a===!1)&&e&&e.length<1;e&&!u?o&&o(e):i._dataBack(r,t,o)}},{key:"_isCDNBack",value:function(t){return s(t)&&t.url&&t.length}},{key:"_dataBack",value:function(t,e,r){if(this._isCDNBack(t))try{o("http",{ctx:this.cfg.ctx,url:t.url,dataType:"jsonp",params:{},timeout:2e3,callback:"callback_"+e.replace(/-/g,"_"),realCallback:function(t){r&&r(t.data)},errCallback:function(){r&&r(t)}})}catch(n){r&&r(t)}else r&&r(t)}},{key:"reset",value:function(){this.requestStack={},this.backUpDataList={},this.resultDataList={}}},{key:"run",value:function(t){var e=this,r=this.requestStack,n=Object.assign({},e.cfg),a={};i.each(r,function(r,u){a[u]=!1;var c=Object.assign(e.cfg.params,r.dataParam),l=r.dataParam.appId;o(n.mtop?"mtop":"http",{ctx:n.ctx,url:u,api:e.cfg.mtopApiName||void 0,dataType:r.dataType,params:c,timeout:n.timeout,realCallback:function(r){e._mergeData(l,r,function(r){delete e.requestStack[u],i.isEmptyObject(e.requestStack)&&(t&&t(r),e.reset())})},errCallback:function(){e._mergeData(l,void 0,function(r){delete e.requestStack[u],i.isEmptyObject(e.requestStack)&&(t&&t(r),e.reset())})}})})}}]),t}();t.exports=d},function(t,e,r){"use strict";var n=r(3),a={api:"mtop.taobao.aladdin.service.AldRecommendService.tmall.recommend2",dataType:"jsonp",v:"1.0",ecode:0};t.exports=function(t,r){switch(t){case"mtop":return e.mtop(r);case"http":default:return e.http(r)}},e.http=function(t){var e={url:t.url,method:t.dataType,body:t.params,timeout:t.timeout,realCallback:t.realCallback};return t.callback&&(e.callback=t.callback),n.fetch(t.ctx,e,function(t){e.realCallback&&e.realCallback(t)})},e.mtop=function(t){var e=Object.assign({},a,{param:t.params,api:t.api||a.api});return n.mtop(t.ctx,e,function(e){e&&e.ret&&e.ret[0]&&e.ret[0].indexOf("SUCCESS")>=0?t.realCallback&&t.realCallback(e.data.resultValue):t.errCallback&&t.errCallback(e.ret&&e.ret[0]||"Mtop接口调用失败")})}},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){function r(t){if(!(e&&a>e)&&t&&t.pureChildren){t.pureChildren=i.isArray(t.pureChildren)?t.pureChildren:[];for(var o=0,u=t.pureChildren.length;o<u;){var c=i.extend({},t.pureChildren[o]);r(c),delete c.pureChildren,delete c.children,n.push(c),o++}a++}}var n=[];if(!i.isPlainObject(t))return n;var a=1;return r(t),n}Object.defineProperty(e,"__esModule",{value:!0}),e.flattenDom=a;var o=r(2),i=n(o)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r){return e=c.isPlainObject(e)?e:{},s.isTaobao(t)?this.taobao.call(t,t,e,r):s.isTmall(t)?(e["pc-image"]=e["pc-image"]||e.image,e["mobile-image"]=e["mobile-image"]||e.image,e["iphone-link"]=e["iphone-link"]||e.url,e["ipad-link"]=e["ipad-link"]||e.url,e["tmallapp-link"]=e["tmallapp-link"]||e.url,e["aliapp-link"]=e["aliapp-link"]||e.url,e["mobile-link"]=e["mobile-link"]||e.url,e["pc-link"]=e["pc-link"]||e.url,e["all-link"]=e["all-link"]||e.url,e["share-title"]=e["share-title"]||e.title,e["share-intro"]=e["share-intro"]||e.text,this.tmall.call(t,t,e,r)):new Error(p.ERROR_SHARE_UNSUPPORT)}function o(t,e,r){if(!c.isPlainObject(e))throw new Error(p.ERROR_PARAM_SHOULE_BE_OBJECT);if(!t||!t.$call)throw new Error(p.ERROR_MISSING_PARAM_CONTEXT);if(!e["all-link"])throw new Error(p.ERROR_MISSING_PARAM_ALL_LINK);return(0,_.$call)(t,"share","doShare",e,r)}function i(t,e,r){if(!c.isPlainObject(e))throw new Error(p.ERROR_PARAM_SHOULE_BE_OBJECT);if(!t||!t.$call)throw new Error(p.ERROR_MISSING_PARAM_CONTEXT);return(0,_.$call)(t,"share","doShare",e,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.toggle=a,e.tmall=o,e.taobao=i;var u=r(2),c=n(u),l=r(6),s=n(l),f=r(7),p=n(f),_=r(8)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e,r){if(2===arguments.length)e=arguments[0],r=arguments[1],t=c.isContext(this)?this:null;else if(3===arguments.length&&!c.isContext(t))throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);e=c.isPlainObject(e)?e:{},r=c.isPlainObject(r)?r:{};var n=c.clone(e);for(var a in r){var o=r[a];o&&(c.isString(o)&&o.match(/px$/i)&&(o=t?i(t,o):parseInt(o,10)||0),n[a]=o)}return n}function o(t,e){t=c.isPlainObject(t)?t:{},e=c.isPlainObject(e)?e:{};
 var r=c.clone(t);for(var n in e){var a=c.isPlainObject(e[n])&&e[n].title?e[n].value:e[n];"undefined"!==c._typeof(a)&&(r[n]=a)}return r}function i(t,e){if(!c.isContext(t))throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);c.isString(e)?e=parseInt(e,10)||0:c.isNumber(e)||(e=0);var r=750,n=t.$getConfig().env||{},a=p.isWeb(t)?1:2,o=n.scale||a,i=n.deviceWidth||window.screen.width||750;return i/=o,r*e/i}Object.defineProperty(e,"__esModule",{value:!0}),e.checkTheme=a,e.checkConfig=o,e.toPixel=i;var u=r(2),c=n(u),l=r(7),s=n(l),f=r(6),p=n(f)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(2),u=n(i),c=r(3),l=n(c),s=r(7),f=n(s),p=l.fetch,_=l.mtop,d=void 0,h=void 0,m=function(){function t(e,r){if(a(this,t),!r.ossData||0===r.ossData.length)return nativeLog&&nativeLog("传入ossData不能为undefine或空数组"),Promise.reject(new Error("传入ossData不能为undefine或空数组"));d=e._app,h=d.__pvuuid,d.__pvuuid||(h=d.__pvuuid=(new Date).getTime());var n=this;return n.ctx=e,n.ossData=r.ossData,n.dynamicData=null,n.exposures=[],n.useMtop=!0,n.loadFloorDynamicData().then(function(t){return d.g_openSendExposure&&n.sendExposure(),t})}return o(t,[{key:"loadFloorDynamicData",value:function(){var t=this,e=t.ossData,r=e[0].__data_default,n=e[0].__data_url,a=e[0].__data_param;return a._pvuuid=h,this.dynamicIO(t.ctx,t.useMtop?"mtop":"http",{url:n,params:a}).then(function(e){return t.parseResult(e)}).then(function(e){return e.length!==r.length?t.getDefaultData():e})["catch"](function(e){return t.getDefaultData()})}},{key:"getDefaultData",value:function(){var t=this,e=t.ossData,r=e[0].__data_default;if(u.isArray(r))return r=t.formatDefaultData(r),Promise.resolve(r);var n=e[0].__data_param.appId;return p(t.ctx,{url:r.url,method:"jsonp",callback:"callback_"+n.replace(/-/g,"_"),timeout:1e4}).then(function(e){return t.parseResult(e)})}},{key:"parseResult",value:function(t){var e=this,r=e.ossData,n=r[0].__data_param.appId;return new Promise(function(r,a){t=t[n]||t;var o=t.data;u.isArray(o)&&o.length||r([]),e.exposures.push(t.exposureParam),o.forEach(function(t){e.formatFloorData(t)}),r(o)})}},{key:"formatFloorData",value:function(t){var e=this;for(var r in t){var n=t[r];t.hasOwnProperty(r)&&u.isObject(n)&&n.hasOwnProperty("data")&&(e.exposures.push(n.exposureParam),n=n.data),t[r]=n}}},{key:"formatDefaultData",value:function(t){for(var e=0;e<t.length;e++){var r=t[e];for(var n in r){var a=r[n];u.isArray(a)&&a.length&&(a=a[0].__data_default),r[n]=a}}return t}},{key:"sendExposure",value:function(){var t=this,e=parseInt(d.sendDelayTime)||0;setTimeout(function(){t.exposures.forEach(function(e){e&&p(t.ctx,e)})},e)}},{key:"dynamicIO",value:function(t,e,r){return this.mtopRequst(t,r)}},{key:"httpRequst",value:function(t,e){return p(t,{url:e.url,method:"jsonp",body:e.params})}},{key:"mtopRequst",value:function(t,e){var r=u.extend({},v,{param:e.params});return _(t,r).then(function(t){if(t&&t.ret&&t.ret[0]&&t.ret[0].indexOf("SUCCESS")>=0)return t.data.resultValue;throw new Error(f.ERROR_MTOP_REQUEST)})}}]),t}(),v={api:"mtop.taobao.aladdin.service.AldRecommendService.tmall.recommend2",dataType:"jsonp",v:"1.0",ecode:0};t.exports=m},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isModuleExist=void 0;var n=r(21);e.isModuleExist=n._isModuleExist},function(e,r){"use strict";function n(t){for(var e=!1,r=(0,a._require)("zebraDoms")||[],n=0;n<r.length;n++){var o=r[n];if(o.name===t){e=!0;break}}return e}Object.defineProperty(r,"__esModule",{value:!0}),r._isModuleExist=n;var a=t("../Weex")}])}),define("@ali/WeexUtils",function(t,e,r){r.exports=t("zebraUtils")});*/

define("zebraUtils", function (t, e, r) {
    e.name = "@ali/WeexUtils", e.version = "0.1.37", r.exports = function (t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var a = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
        }

        var r = {};
        return e.m = t, e.c = r, e.p = "", e(0)
    }([function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.extend = e.parseUrl = e.openUrl = e.getSpm = e.checkTheme = e.zebra = e.floorDynamic = e.user = e.url = e.ui = e.tracker = e.tool = e.theme = e.share = e.network = e.navigator = e.env = e.dom = e.data = void 0;
        var a = r(1),
            o = n(a),
            i = r(16),
            u = n(i),
            c = r(6),
            l = n(c),
            s = r(9),
            f = n(s),
            p = r(3),
            _ = n(p),
            d = r(17),
            h = n(d),
            m = r(18),
            v = n(m),
            y = r(2),
            g = n(y),
            R = r(5),
            O = n(R),
            b = r(11),
            S = n(b),
            E = r(4),
            w = n(E),
            P = r(12),
            M = n(P),
            T = r(19),
            k = n(T),
            C = r(20),
            N = n(C);
        e.data = o, e.dom = u, e.env = l, e.navigator = f, e.network = _, e.share = h, e.theme = v, e.tool = g, e.tracker = O, e.ui = S, e.url = w, e.user = M, e.floorDynamic = k["default"], e.zebra = N, e.checkTheme = v.checkTheme, e.getSpm = O.getSpm, e.openUrl = w.openUrl, e.parseUrl = w.parseUrl, e.extend = g.extend;
        try {
            window.weex.zebraUtils = e
        } catch (j) {
        }
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function o(t) {
            var e = {
                    isDynamic: !1,
                    dataCount: 0,
                    data: []
                },
                r = function (t) {
                    if (!l.isPlainObject(t)) return !1;
                    var e = "jsonp" === t.__data_type,
                        r = "ald" === t.__data_source,
                        n = l.isString(t.__data_url),
                        a = l.isPlainObject(t.__data_param),
                        o = l.isObject(t.__data_default);
                    return !!(e && r && n && a && o)
                },
                n = function a(t) {
                    return l.isObject(t) && (r(t) ? (e.isDynamic = !0, e.dataCount = t.__data_default.length, e.data = t.__data_default) : l.each(t, function (t) {
                        return l.isPlainObject(t) ? r(t) ? (e.isDynamic = !0, e.data = l.isArray(t.__data_default) ? t.__data_default : [t.__data_default], e.dataCount = e.data.length) : e = a(t) : l.isArray(t) && (t[0] && r(t[0]) ? (e.isDynamic = !0, e.data = l.isArray(t[0].__data_default) ? t[0].__data_default : [t[0].__data_default], e.dataCount = e.data.length) : (e.dataCount = t.length, e.data = t)), e
                    })), e
                };
            return n(t)
        }

        function i(t, e, r) {
            if (!l.isObject(e)) return null;
            if (!t || !t.$sendHttp || !t.$sendMtop) throw new Error(g.ERROR_MISSING_PARAM_CONTEXT);
            return r = r || {}, new O["default"]({
                data: e,
                ctx: t,
                config: {
                    mtop: r.mtop || !0,
                    timeout: r.timeout,
                    duplication: r.duplication,
                    params: r.params || {},
                    mtopApiName: r.mtopApiName
                }
            })
        }

        function u(t, e) {
            function r(t, e) {
                var r = n;
                try {
                    r = e.indexOf("SUCCESS") >= 0 ? a : e.split("::")[1] || n
                } catch (o) {
                }
                h.toast(t, r)
            }

            if (!t || !t.$call) throw new Error(g.ERROR_MISSING_PARAM_CONTEXT);
            var n = "抱歉，好多人在排队领券，请稍候再试试吧！",
                a = "恭喜您，领券成功！";
            return v.getUserInfo(t).then(function (r) {
                if (r.isLogin === !0 || "true" === r.isLogin) {
                    e = l.isString(e) ? e : "";
                    var n = new _.parseUrl(e),
                        a = n.params.activity_id || n.params.activityId || "",
                        o = n.params.seller_id || n.params.sellerId || "",
                        i = {
                            api: "mtop.taobao.buyerResourceMtopWriteService.applyCoupon",
                            v: "3.0",
                            ecode: 0,
                            sessionOption: "AutoLoginOnly",
                            param: {
                                uuid: a,
                                supplierId: o
                            }
                        };
                    return f.mtop(t, i)
                }
                throw new Error(g.ERROR_NEEDS_LOGIN)
            }).then(function (e) {
                var n = l.isArray(e.ret) ? e.ret[0] : e.ret;
                if (n.indexOf("FAIL_SYS_SESSION_EXPIRED") >= 0) throw new Error(g.ERROR_NEEDS_LOGIN);
                return e.data.error && "false" !== e.data.error ? (r(t, n), !0) : (r(t, n), !1)
            })["catch"](function (e) {
                throw e.message === g.ERROR_NEEDS_LOGIN ? v.login(t) : h.toast(t, n), e
            })
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.checkDynamicData = o, e.dynamicData = i, e.getCoupon = u;
        var c = r(2),
            l = a(c),
            s = r(3),
            f = a(s),
            p = r(4),
            _ = a(p),
            d = r(11),
            h = a(d),
            m = r(12),
            v = a(m),
            y = r(7),
            g = a(y),
            R = r(13),
            O = n(R)
    }, function (t, e) {
        "use strict";

        function r(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) n[a - 1] = arguments[a];
            if (l(Object.assign)) Object.assign.apply(Object, [t].concat(n));
            else {
                var o = n.shift();
                for (var i in o) t[i] = o[i];
                n.length && r.apply(void 0, [t].concat(n))
            }
            return t
        }

        function n(t) {
            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
        }

        function a(t) {
            return "array" === n(t)
        }

        function o(t) {
            return "string" == typeof t
        }

        function i(t) {
            return "number" == typeof t
        }

        function u(t) {
            var e = n(t);
            return !("object" !== e && !a(t))
        }

        function c(t) {
            return "object" === n(t)
        }

        function l(t) {
            return "function" == typeof t
        }

        function s(t, e) {
            if (e = "function" === n(e) ? e : function () {
                }, a(t))
                for (var r = 0; r < t.length; r++) e(t[r], r);
            else if (c(t))
                for (var o in t) e(t[o], o)
        }

        function f(t) {
            if (!u(t)) return t;
            var e = a(t) ? [] : {},
                r = void 0,
                n = void 0;
            for (n in t) r = t[n], e[n] = u(r) ? f(r) : r;
            return e
        }

        function p(t) {
            if (!a(t)) return [];
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
            var o = r.shift();
            return a(o) && (o.map(function (e, r) {
                t.indexOf(e) < 0 && t.push(e)
            }), r.length && p.apply(void 0, [t].concat(r))), t
        }

        function _(t) {
            var e = [];
            if (c(t))
                for (var r in t) e.push(r);
            return e
        }

        function d(t) {
            if (a(t)) {
                t = f(t);
                for (var e = 0; e < t.length; e++)
                    if (o(t[e])) try {
                        t[e] = JSON.parse(t[e])
                    } catch (r) {
                        throw r
                    }
            } else if (o(t)) try {
                t = JSON.parse(t)
            } catch (r) {
                throw r
            }
            return t
        }

        function h(t) {
            var e = void 0;
            for (e in t) return !1;
            return !0
        }

        function m(t) {
            return !(!c(t) || !l(t.$getConfig))
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.extend = r, e._typeof = n, e.isArray = a, e.isString = o, e.isNumber = i, e.isObject = u, e.isPlainObject = c, e.isFunction = l, e.each = s, e.clone = f, e.union = p, e.keys = _, e.parseArgs = d, e.isEmptyObject = h, e.isContext = m
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r) {
            function n() {
                for (var t = 0; t < arguments.length; t++) try {
                    arguments[t] = c.isString(arguments[t]) ? JSON.parse(arguments[t]) : arguments[t]
                } catch (e) {
                    console.error(e)
                }
                return arguments
            }

            return t && t.$sendMtop ? c.isFunction(r) ? t.$sendMtop(e, function () {
                var e = n.apply(this, arguments);
                r.apply(t, e)
            }) : new Promise(function (r, a) {
                t.$sendMtop(e, function () {
                    var e = n.apply(this, arguments);
                    r.apply(t, e)
                })
            }) : c.isFunction(r) ? r(null) : null
        }

        function o(t, e, r, n) {
            function a(t) {
                try {
                    c.isString(t) && (t = JSON.parse(t))
                } catch (e) {
                }
                try {
                    t = t.data ? t.data : t, t = t.replace(/.*?[a-zA-Z0-9_]*\(/, "").replace(/\)(\;)?(\ *)?$/, ""), t = JSON.parse(t)
                } catch (e) {
                }
                return t
            }

            function o() {
                return "jsonp_" + Date.now() % 1e5 + Math.ceil(1e3 * Math.random())
            }

            function u(t) {
                t.url = c.isString(t.url) ? t.url : "", t.body = c.isPlainObject(t.body) ? t.body : {};
                var r = new s.parseUrl(t.url);
                return r.params = c.clone(c.extend(r.params, t.body)), "JSONP" !== e.method || r.params.callback || (r.params.callback = o()), r.toString()
            }

            function l(t, e) {
                if ("JSONP" === t.method && (e = a(e)), c.isString(e)) try {
                    e = JSON.parse(e)
                } catch (r) {
                }
                return e
            }

            e = c.isString(e) ? {
                url: e
            } : e, e = c.isPlainObject(e) ? e : {}, e.method = e.method || "GET", e.method = e.method.toUpperCase();
            var f = (0, m.requireModule)("stream"),
                _ = f ? f.fetch : t.$sendHttp;
            if (!c.isContext(t)) throw new Error(d.ERROR_MISSING_PARAM_CONTEXT);
            if (!e.url) throw new Error(d.ERROR_MISSING_PARAM_URL);
            if (e.url = s.fixSchema(e.url), p.isWeb(t) && "JSONP" === e.method) return (0, h.jsonp)(e, r);
            var v = function () {
                var a = function () {
                        c.isFunction(n) && n.apply(t, arguments)
                    },
                    o = c.clone(e);
                if (o.method.match(/GET|JSONP/i)) {
                    o.method = "GET", o.url = u(o);
                    try {
                        delete o.body
                    } catch (i) {
                    }
                }
                if (!c.isFunction(r)) return {
                    v: new Promise(function (r, n) {
                        function i(n) {
                            n = l(e, n), r.call(t, n)
                        }

                        _.apply(t, [o, i, a])
                    })
                };
                var s = function (t) {
                    t = l(e, t), r(t)
                };
                _.apply(t, [o, s, a])
            }();
            return "object" === ("undefined" == typeof v ? "undefined" : i(v)) ? v.v : void 0
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        e.mtop = a, e.fetch = o;
        var u = r(2),
            c = n(u),
            l = r(4),
            s = n(l),
            f = r(6),
            p = n(f),
            _ = r(7),
            d = n(_),
            h = r(10),
            m = r(8)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r, n) {
            var a = o(t, e, r, n),
                i = (0, R.requireModule)("event");
            if (i && i.openURL) i.openURL(a);
            else {
                if (!d.isContext(t) || !t.$openURL) throw new Error(v.ERROR_MISSING_CTX_OR_EVENT_MODULE);
                t.$openURL(a)
            }
            return a
        }

        function o(t, e, r, n) {
            if (!d.isContext(t)) throw new Error(v.ERROR_MISSING_PARAM_CONTEXT);
            if (!e) throw new Error(v.ERROR_MISSING_PARAM_URL2);
            e = u(e), r = r || 0, n = n || 0;
            var a = void 0;
            try {
                a = new i(e)
            } catch (o) {
                return e
            }
            var c = p.getSpm(t, r, n);
            return c && (a.params.spm = c), a.params._from = g.isWeb(t) ? "h5" : "weex", t._app.zebraConfig && (a.params.utpagename = t._app.zebraConfig.pageName || ""), a.toString()
        }

        function i(t) {
            var e = this,
                r = {};
            Object.defineProperty(this, "params", {
                set: function (t) {
                    if ("object" === ("undefined" == typeof t ? "undefined" : s(t))) {
                        for (var e in r) delete r[e];
                        for (var n in t) r[n] = t[n]
                    }
                },
                get: function () {
                    return r
                },
                enumerable: !0
            }), Object.defineProperty(this, "search", {
                set: function (t) {
                    if ("string" == typeof t) {
                        0 === t.indexOf("?") && (t = t.substr(1));
                        var e = t.split("&");
                        for (var n in r) delete r[n];
                        for (var a = 0; a < e.length; a++) {
                            var o = e[a].split("=");
                            if (o[0]) try {
                                r[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "")
                            } catch (i) {
                                r[o[0]] = o[1] || ""
                            }
                        }
                    }
                },
                get: function () {
                    var t = [];
                    for (var e in r)
                        if (r[e]) try {
                            t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r[e]))
                        } catch (n) {
                        } else try {
                            t.push(encodeURIComponent(e))
                        } catch (n) {
                        }
                    return t.length ? "?" + t.join("&") : ""
                },
                enumerable: !0
            });
            var n = void 0;
            Object.defineProperty(this, "hash", {
                set: function (t) {
                    "string" == typeof t && (t && t.indexOf("#") < 0 && (t = "#" + t), n = t || "")
                },
                get: function () {
                    return n
                },
                enumerable: !0
            }), this.set = function (t) {
                var r = void 0;
                t = "https://pages.tmall.com/wow/act/16383/nvzhuang?wh_weex=true&wh_weex=true&spm=a1z60.7906371.CameraScanner.1";
                if (!(r = t.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#]*)?(?:[?]([^?#]*))?(#[^#]*)?$", "i")))) throw new Error(v.ERROR_WRONG_URL_SCHEME);
                e.protocol = r[1] || "", e.username = r[2] || "", e.password = r[3] || "", e.hostname = e.host = r[4], e.port = r[5] || "", e.pathname = r[6] || "/", e.search = r[7] || "", e.hash = r[8] || "", e.origin = e.protocol + "//" + e.hostname
            }, this.toString = function () {
                var t = e.protocol + "//";
                return e.username && (t += e.username, e.password && (t += ":" + e.password), t += "@"), t += e.host, e.port && "80" !== e.port && (t += ":" + e.port), e.pathname && (t += e.pathname), e.search && (t += e.search), e.hash && (t += e.hash), t
            }, this.set(t.toString())
        }

        function u(t, e) {
            return t = t || "", e = e || "https", "string" == typeof t && t.match(/^\/\//) ? e + ":" + t : t
        }

        function c(t) {
            t = d.isString(t) ? t : "";
            for (var e = {}, r = t.split("&"), n = 0; n < r.length; n++) {
                var a = r[n],
                    o = a.split("="),
                    i = o[0],
                    u = o[1];
                i && (e[i] = u)
            }
            return e
        }

        function l(t) {
            var e = [];
            for (var r in t) {
                var n = r,
                    a = t[r];
                e.push(n + "=" + a)
            }
            return e.join("&")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        e.openUrl = a, e.getSpmUrl = o, e.parseUrl = i, e.fixSchema = u, e.paramsToObj = c, e.objToParams = l;
        var f = r(5),
            p = n(f),
            _ = r(2),
            d = n(_),
            h = r(9),
            m = (n(h), r(7)),
            v = n(m),
            y = r(6),
            g = n(y),
            R = r(8)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r, n, a) {
            if (!(0, R.isContext)(t)) throw new Error(E.ERROR_MISSING_PARAM_CONTEXT);
            return t && t._app && t._app.zebraConfig ? (n = e + "" || "0", a = r + "" || "0", e = t._app.zebraConfig.spma || "0", r = t._app.zebraConfig.spmb || "0") : (e = e ? e : "0", r = r ? r : "0", n = n ? n : "0", a = a ? a : "0"), [e, r, n, a].join(".")
        }

        function o(t, e, r) {
            if (!(0, R.isContext)(t)) return new Error(E.ERROR_MISSING_PARAM_CONTEXT);
            if ((0, R.isPlainObject)(e) && (r = (0, R.clone)(e), e = g(t)), !e || !(0, R.isString)(e) || !(0, R.isPlainObject)(r)) return !1;
            if ((0, O.isTaobaoNative)(t)) u(t, "enter", e, "", r);
            else {
                if (!(0, O.isTmallNative)(t)) return !1;
                (0, w.$call)(t, "userTrack", "enterEvent", e, r)
            }
            return !0
        }

        function i(t, e) {
            return (0, R.isContext)(t) ? !!(0, R.isString)(e) && ((0, w.$call)(t, "userTrack", "leaveEvent", e), !0) : new Error(E.ERROR_MISSING_PARAM_CONTEXT)
        }

        function u(t, e, r, n, a) {
            return (0, R.isContext)(t) ? !!((0, R.isString)(e) && (0, R.isString)(r) && (0, R.isString)(n) && (0, R.isPlainObject)(a)) && ((0, w.$call)(t, "userTrack", "commit", e, r, n, a), !0) : new Error(E.ERROR_MISSING_PARAM_CONTEXT)
        }

        function c(t, e, r, n, a, o, i, u) {
            return (0, R.isContext)(t) ? (!u && console && (0, R.isFunction)(console.error) && console.error("此接口未经 UT 团队、数据团队验证，若因为此接口造成问题请自行负责。"), !!((0, R.isString)(e) && (0, R.isNumber)(r) && (0, R.isString)(n) && (0, R.isString)(a) && (0, R.isString)(o) && (0, R.isPlainObject)(i)) && ((0, w.$call)(t, "userTrack", "commitEvent", e, r, n, a, o, i), !0)) : new Error(E.ERROR_MISSING_PARAM_CONTEXT)
        }

        function l(t, e, r) {
            var n = m(t, e, r);
            return u(t, "expose", g(t), "", n)
        }

        function s(t, e, r) {
            var n = m(t, e, r);
            return c.call(t, t, g(t), 19999, e, "", "", n, !0)
        }

        function f(t, e, r) {
            return (0, R.isContext)(t) ? !(!(0, R.isString)(e) || !(0, R.isPlainObject)(r)) && ((0, w.$call)(t, "userTrack", "click", e, r), !0) : new Error(E.ERROR_MISSING_PARAM_CONTEXT)
        }

        function p(t, e, r, n, a) {
            if (!(0, R.isContext)(t)) return new Error(E.ERROR_MISSING_PARAM_CONTEXT);
            a = (0, R.isString)(a) ? a : "";
            var o = a.split(";") || [],
                i = o[0] || "",
                u = o[1] || "",
                c = void 0;
            return i = i.replace(/^gostr\=/, ""), u = u.replace(/^locaid\=/, ""), o = o.slice(2), c = o.join(""), _(t, [i, e, r, n, u].join("."), "CLK", c, "")
        }

        function _(t, e, r, n, a, o) {
            return (0, R.isContext)(t) ? (e = (0, R.isString)(e) ? e : "", r = (0, R.isString)(r) ? r : "", n = (0, R.isString)(n) ? n : "", a = (0, R.isString)(a) ? a : "", o = (0, R.isString)(o) ? o : "", (0, O.isWeb)(t) ? d(e, r, n, a) : "" !== r && ("CLK" === r ? h(t, e, r, n, a, o) : "EXP" === r ? l(t, e, n) : s(t, e, n))) : new Error(E.ERROR_MISSING_PARAM_CONTEXT)
        }

        function d(t, e, r, n) {
            return window.goldlog && window.goldlog.record ? (window.goldlog.record(t, e, r, n), !0) : (console.error(E.ERROR_MISSING_GOLDLOG), !1)
        }

        function h(t, e, r, n, a, o) {
            var i = m(t, e, n);
            o && (i.spm = o);
            var c = g(t);
            return u.call(t, t, "click", c, "", i)
        }

        function m(t, e, r) {
            return {
                logkey: e,
                logkeyargs: v(r),
                url: y(t),
                cna: "",
                extendargs: JSON.stringify({}),
                isonepage: 0
            }
        }

        function v(t) {
            var e = (0, R.isPlainObject)(t) ? t : (0, b.paramsToObj)(t);
            return e.weex = e.weex ? e.weex : "1", e.autosend = "1", (0, b.objToParams)(e)
        }

        function y(t, e) {
            try {
                var r = t.$getConfig().bundleUrl || "";
                return e ? new b.parseUrl(r) : r
            } catch (n) {
                console.error(n)
            }
            return e ? {} : ""
        }

        function g(t) {
            var e = y(t, !0),
                r = e.origin || "",
                n = e.pathname || "";
            return r + n
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getSpm = a, e.pageEnter = o, e.pageLeave = i, e.commit = u, e.commitEvent = c, e.exposure = l, e.other = s, e.click = f, e.goldlogClick = p, e.goldlog = _;
        var R = r(2),
            O = r(6),
            b = r(4),
            S = r(7),
            E = n(S),
            w = r(8)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            var e = t.$getConfig().env.appName || "",
                r = ["TM", "tm", "tmall", "Tmall", "天猫"];
            return r.indexOf(e) >= 0
        }

        function o(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            return a(t) && s(t)
        }

        function i(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            return a(t) && !s(t)
        }

        function u(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            var e = t.$getConfig().appName || t.$getConfig().env.appName || "",
                r = ["TB", "tb", "taobao", "Taobao", "淘宝"];
            return r.indexOf(e) >= 0
        }

        function c(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            return u(t) && s(t)
        }

        function l(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            return u(t) && !s(t)
        }

        function s(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            var e = t.$getConfig().env.platform || "";
            return "object" === ("undefined" == typeof window ? "undefined" : _(window)) && null === e.match(/ios|android/i)
        }

        function f(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            return "iOS" === t.$getConfig().env.platform
        }

        function p(t) {
            if (!t || !t.$getConfig) throw new Error(h.ERROR_MISSING_PARAM_CONTEXT);
            return "android" === t.$getConfig().env.platform
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        e.isTmall = a, e.isTmallWeb = o, e.isTmallNative = i, e.isTaobao = u, e.isTaobaoWeb = c, e.isTaobaoNative = l, e.isWeb = s, e.isIOS = f, e.isAndroid = p;
        var d = r(7),
            h = n(d)
    }, function (t, e) {
        "use strict";

        function r() {
            for (var t = arguments[0] + "", e = 1; e < arguments.length; e++) t = t.replace(/\%s/i, arguments[e]);
            return t
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.msg = r;
        var n = e.ERROR_PARAM_IS_REQUIRED = "Param [%s] is required!",
            a = e.ERROR_SHOULD_BE = "%s should be %s.";
        e.ERROR_MISSING_PARAM_CONTEXT = r(a, "First param", "context(ctx)"), e.ERROR_MISSING_PARAM_URL = r(n, "params.url"), e.ERROR_MISSING_PARAM_URL2 = r(n, "url"), e.ERROR_MISSING_PARAM_ALL_LINK = r(n, "all-link"), e.ERROR_MISSING_GOLDLOG = r(n, "window.goldlog.record"), e.ERROR_MESSAGE_SHOULD_BE_STRING = r(a, "message", "string"), e.ERROR_PARAM_SHOULE_BE_OBJECT = "params is not object!", e.ERROR_JSONP_TIMEOUT = "JSONP request to %s timed out", e.ERROR_SHARE_UNSUPPORT = "Currently env doesn`t support Share", e.ERROR_WRONG_URL_SCHEME = "Wrong uri scheme.", e.ERROR_MTOP_REQUEST = "Mtop接口调用失败", e.ERROR_NEEDS_LOGIN = "Please login first", e.ERROR_MISSING_CTX_OR_EVENT_MODULE = "missing ctx or can not find event module"
    }, function (e, r) {
        "use strict";

        function n(e) {
            try {
                var r = void 0,
                    n = null;
                try {
                    n = process.env.NODE_ENV
                } catch (a) {
                }
                if ("_require" === t.name || "weex" === n ? r = t : __weex_require__ ? r = __weex_require__ : t && "test" !== n && (r = t), r) return r(e)
            } catch (a) {
            }
            return null
        }

        function a(t) {
            return t = "string" == typeof t ? t : "", n("@weex-module/" + t)
        }

        function o(t, e, r) {
            var n = void 0,
                o = void 0,
                u = "object" === ("undefined" == typeof t ? "undefined" : i(t)) && "function" == typeof t.$getConfig;
            u ? (n = "string" == typeof e ? e : "", o = "string" == typeof r ? r : "") : (n = "string" == typeof t ? t : "", o = "string" == typeof e ? e : "");
            var c = a(n);
            if (u && !c) {
                var l = [n, o];
                return Array.prototype.push.apply(l, Array.prototype.slice.call(arguments, 3)), t.$call.apply(t, l)
            }
            var s = c[o],
                f = u ? 3 : 2;
            return "function" == typeof s ? s.apply({}, Array.prototype.slice.call(arguments, f)) : null
        }

        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        r._require = n, r.requireModule = a, r.$call = o
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r) {
            if (!t || !t.$call) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            return e = c.isPlainObject(e) ? e : {}, c.isFunction(r) ? (0, f.$call)(t, "navigator", "setNavBarTitle", e, r) : new Promise(function (r, n) {
                (0, f.$call)(t, "navigator", "setNavBarTitle", e, r)
            })
        }

        function o(t, e, r) {
            if (!t || !t.$call) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            return e = c.isPlainObject(e) ? e : {}, c.isFunction(r) ? ((0, f.$call)(t, "navigator", "push", e, r), null) : new Promise(function (r, n) {
                (0, f.$call)(t, "navigator", "push", e, r)
            })
        }

        function i(t, e, r) {
            if (!t || !t.$call) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            return e = c.isPlainObject(e) ? e : {}, c.isFunction(r) ? ((0, f.$call)(t, "navigator", "pop", e, r), null) : new Promise(function (r, n) {
                (0, f.$call)(t, "navigator", "pop", e, r)
            })
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.setTitle = a, e.push = o, e.pop = i;
        var u = r(2),
            c = n(u),
            l = r(7),
            s = n(l),
            f = r(8)
    }, function (t, e) {
        "use strict";

        function r(t, e) {
            function r() {
                return "jsonp_" + Date.now() % 1e5 + Math.ceil(1e3 * Math.random())
            }

            function n(t, e) {
                var r = f.querySelectorAll("head script[id=" + e + "]");
                if (r.length < 2) try {
                    delete window[t]
                } catch (n) {
                }
            }

            function a(t) {
                var e = f.getElementById(t);
                e && f.getElementsByTagName("head")[0].removeChild(e)
            }

            function o(t) {
                var e = f.createElement("a");
                return e.setAttribute("href", t), e
            }

            function i(t) {
                return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
            }

            function u(t) {
                var e = [];
                for (var r in t) {
                    var n = r,
                        a = t[r];
                    e.push(n + "=" + a)
                }
                return e.join("&")
            }

            function c(t) {
                t = t || {};
                var c, p = t.timeout ? t.timeout : l.timeout,
                    _ = t.jsonpCallback ? t.jsonpCallback : l.jsonpCallback;
                if (s.indexOf(_) !== -1) {
                    var d = o(s),
                        h = new RegExp("(" + _ + "(=([^&#]*)|&|#|$))"),
                        m = h.exec(d.search.substring(1));
                    m && (d.search = d.search.replace(m[0], ""), s = d.toString(), t.callback = m[3])
                }
                return new Promise(function (o, l) {
                    var d = t.callback || r(),
                        h = _ + "_" + d;
                    window[d] && (c && clearTimeout(c), a(h), n(d)), window[d] = function (t) {
                        "function" == typeof e && e(t), o(t), c && clearTimeout(c), a(h), n(d)
                    }, s += s.indexOf("?") === -1 ? "?" : "&", t.body && (s += "object" === i(t.body) ? u(t.body) : encodeURI(String(t.body)), s += "&");
                    var m = f.createElement("script");
                    m.setAttribute("src", s + _ + "=" + d), m.id = h, f.getElementsByTagName("head")[0].appendChild(m), c = setTimeout(function () {
                        l("JSONP error on " + s), n(d), a(h)
                    }, p), m.onreadystatechange = m.onerror = function () {
                        return (!this.readyState || !("loaded" !== this.readyState && "complete" !== this.readyState || window[d])) && (l(new Error("JSONP request to " + s + " error")), c && clearTimeout(c), n(d), a(h), !0)
                    }
                })
            }

            t = "string" == typeof t ? {
                url: t
            } : t, t = "object" === i(t) ? t : {};
            var l = {
                    timeout: 2e3,
                    jsonpCallback: "callback",
                    callback: null,
                    body: ""
                },
                s = t.url || "",
                f = window.document;
            return s ? c.call(this, t) : Promise.reject(new Error("Param [params.url] is required!"))
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.jsonp = r
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r) {
            if (!t || !t.$call) throw new Error(i.ERROR_MISSING_PARAM_CONTEXT);
            return r = c.isNumber(r) ? r : 2, e = c.isString(e) ? e : i.ERROR_MESSAGE_SHOULD_BE_STRING, (0, l.$call)(t, "modal", "toast", {
                message: e,
                duration: r
            })
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.toast = a;
        var o = r(7),
            i = n(o),
            u = r(2),
            c = n(u),
            l = r(8)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e) {
            if (!t || !t.$call) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            return c.isFunction(e) ? (0, f.$call)(t, "user", "getUserInfo", e) : new Promise(function (e, r) {
                (0, f.$call)(t, "user", "getUserInfo", function (r) {
                    if (c.isString(r)) try {
                        r = JSON.parse(r)
                    } catch (n) {
                        throw n
                    }
                    e.call(t, r)
                })
            })
        }

        function o(t, e) {
            if (!t || !t.$call) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            return c.isFunction(e) ? (0, f.$call)(t, "user", "login", e) : new Promise(function (e, r) {
                (0, f.$call)(t, "user", "login", function (r) {
                    if (c.isString(r)) try {
                        r = JSON.parse(r)
                    } catch (n) {
                        throw n
                    }
                    e.call(t, r)
                })
            })
        }

        function i(t, e) {
            if (!t || !t.$call) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            return c.isFunction(e) ? void(0, f.$call)(t, "user", "logout", e) : new Promise(function (e, r) {
                (0, f.$call)(t, "user", "logout", function (r) {
                    if (c.isString(r)) try {
                        r = JSON.parse(r)
                    } catch (n) {
                        throw n
                    }
                    e.call(t, r)
                })
            })
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getUserInfo = a, e.login = o, e.logout = i;
        var u = r(2),
            c = n(u),
            l = r(7),
            s = n(l),
            f = r(8)
    }, function (t, e, r) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var a = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            o = r(2),
            i = r(14),
            u = function (t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            },
            c = function () {
                function t(e) {
                    if (n(this, t), this.cfg = e, this.config = e.config || {}, !this.cfg.data) throw new Error("conf参数必须为json");
                    return this
                }

                return a(t, [{
                    key: "_stringfiyToResult",
                    value: function (t) {
                        var e = t.data;
                        return this._getData(e, t)
                    }
                }, {
                    key: "_getData",
                    value: function (t, e) {
                        var r = this;
                        this._parse(t), o.isEmptyObject(r.request.requestStack) ? e.callback && e.callback(t) : r.request.run(function (n) {
                            o.each(n, function (e, n) {
                                o.each(r.xPathList, function (r, a) {
                                    n === r && !function () {
                                        var r = a.split("."),
                                            n = r.pop(),
                                            o = t;
                                        r.forEach(function (t) {
                                            t && (o = o[t])
                                        }), o[n] = e
                                    }()
                                })
                            }), r.xPathList = {}, e.callback && e.callback(t)
                        })
                    }
                }, {
                    key: "_parse",
                    value: function (t, e) {
                        var r = this;
                        e = e || "";
                        var n = this._checkTagIsDynamic(t);
                        return n ? void this._push(t, n, e) : void o.each(t, function (t, n) {
                            r._isTag(t) && r._parse(t, e + "." + n)
                        })
                    }
                }, {
                    key: "_isTag",
                    value: function (t) {
                        return Array.isArray(t) || u(t)
                    }
                }, {
                    key: "_push",
                    value: function (t, e, r) {
                        this.xPathList[r] = e, this.request.push(t[0])
                    }
                }, {
                    key: "_checkTagIsDynamic",
                    value: function (t) {
                        var e = Array.isArray(t);
                        return !!e && (!(t.length > 1) && this._checkDataConfig(t[0]))
                    }
                }, {
                    key: "then",
                    value: function (t, e) {
                        var r = this,
                            n = parseInt(this.config.timeout, 10);
                        return n = n ? n > 100 ? n : 1e3 * n : 8e3, this.request = new i({
                            timeout: n,
                            ctx: r.cfg.ctx,
                            duplication: !!this.config.duplication,
                            mtop: this.config.mtop,
                            params: u(this.config.params) ? this.config.params : {},
                            mtopApiName: this.config.mtopApiName,
                            callback: t,
                            errCallback: e
                        }), this.cfg.callback = t, this.cfg.errCallback = e, this.xPathList = {}, this._stringfiyToResult(this.cfg), this
                    }
                }, {
                    key: "catch",
                    value: function () {
                        return this
                    }
                }, {
                    key: "_checkDataConfig",
                    value: function (t) {
                        if (!t || !u(t)) return !1;
                        var e = t.__data_type && t.__data_source && t.__data_url && t.__data_param && u(t.__data_param) && t.__data_default;
                        return !!e && t.__data_param.appId
                    }
                }]), t
            }();
        t.exports = c
    }, function (t, e, r) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var a = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            o = r(15),
            i = r(2),
            u = {
                timeout: 8e3,
                duplication: !1,
                mtop: !1,
                params: {}
            },
            c = (new Date).getTime(),
            l = /^(https?:|)\/\/(.*)data\.jsonp$/i,
            s = function (t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            },
            f = function (t) {
                return "[object String]" === Object.prototype.toString.call(t)
            },
            p = function (t) {
                return t && f(t) && l.test(t)
            },
            _ = function (t) {
                var e = [];
                return t.forEach(function (t) {
                    e.indexOf(t) === -1 && e.push(t)
                }), e
            },
            d = function () {
                function t(e) {
                    n(this, t), this.cfg = Object.assign(u, e), this.requestStack = {}, this.backUpDataList = {}, this.resultDataList = {};
                    var r = e.ctx;
                    r._app.__pvuuid ? c = r._app.__pvuuid : r._app.__pvuuid = c
                }

                return a(t, [{
                    key: "push",
                    value: function (t) {
                        var e = t.__data_url,
                            r = t.__data_param && t.__data_param.appId;
                        if (r) switch (this.checkBottomConfigVersion(t.__data_default)) {
                            case "v2":
                                this.backUpDataList[r] = {
                                    url: t.__data_default.url,
                                    length: t.__data_default.length
                                };
                                break;
                            case "v1":
                            default:
                                this.backUpDataList[r] = t.__data_default
                        }
                        this.requestStack[e] ? (this.requestStack[e].dataParam = this._mergeParams(this.requestStack[e].dataParam, t.__data_param), console && console.error("dataDetection 即将废弃，由调用者自己传入经纬度信息"), this.cfg.ctx.nativeLog && this.cfg.ctx.nativeLog("dataDetection 即将废弃，由调用者自己传入经纬度信息"), this.requestStack[e].dataDetection = this._mergeArray(this.requestStack[e].dataDetection, t.__data_detection)) : this.requestStack[e] = {
                            dataParam: t.__data_param,
                            dataType: this._getDataType(t.__data_type),
                            dataDetection: t.__data_detection || []
                        }, this.cfg.duplication || (this.requestStack[e].dataParam._pvuuid = c)
                    }
                }, {
                    key: "checkBottomConfigVersion",
                    value: function (t) {
                        return s(t) && t.url && p(t.url) ? "v2" : s(t) && !t.url && t.length ? "v3" : "v1"
                    }
                }, {
                    key: "_mergeParams",
                    value: function (t, e) {
                        for (var r in t) t[r] && e[r] && ("" + t[r]).indexOf(e[r]) < 0 && (t[r] += "," + e[r]);
                        return Object.assign(e, t)
                    }
                }, {
                    key: "_mergeArray",
                    value: function (t, e) {
                        return e && e.forEach(function (e) {
                            t.indexOf(e) || t.push(e)
                        }), t
                    }
                }, {
                    key: "_getDataType",
                    value: function (t) {
                        var e = void 0;
                        switch (t) {
                            case "jsonp":
                                e = "jsonp";
                                break;
                            default:
                                e = "jsonp"
                        }
                        return e
                    }
                }, {
                    key: "_mergeData",
                    value: function (t, e, r) {
                        var n = this,
                            a = "string" == typeof t ? _(t.split(",")) : [t],
                            o = {},
                            i = function (t) {
                                Object.keys(t).forEach(function (e) {
                                    n.resultDataList[e] = t[e]
                                }), r && r(n.resultDataList)
                            };
                        a.forEach(function (t) {
                            o[t] = !1
                        }), a.forEach(function (t) {
                            var r = e && e[t],
                                a = r && r.data,
                                u = r && r.exposureParam,
                                c = r && r.success;
                            n._connectTagData(t, a, n.backUpDataList[t], e && u, c, function (e) {
                                o[t] = e;
                                var r = !0;
                                Object.keys(o).forEach(function (t) {
                                    o[t] || (r = !1)
                                }), r === !0 && i(o)
                            })
                        })
                    }
                }, {
                    key: "_connectTagData",
                    value: function (t, e, r, n, a, o) {
                        var i = this,
                            u = (i.cfg.ctx._app.Dynamic_NotEmptyData || a === !1) && e && e.length < 1;
                        e && !u ? o && o(e) : i._dataBack(r, t, o)
                    }
                }, {
                    key: "_isCDNBack",
                    value: function (t) {
                        return s(t) && t.url && t.length
                    }
                }, {
                    key: "_dataBack",
                    value: function (t, e, r) {
                        if (this._isCDNBack(t)) try {
                            o("http", {
                                ctx: this.cfg.ctx,
                                url: t.url,
                                dataType: "jsonp",
                                params: {},
                                timeout: 2e3,
                                callback: "callback_" + e.replace(/-/g, "_"),
                                realCallback: function (t) {
                                    r && r(t.data)
                                },
                                errCallback: function () {
                                    r && r(t)
                                }
                            })
                        } catch (n) {
                            r && r(t)
                        } else r && r(t)
                    }
                }, {
                    key: "reset",
                    value: function () {
                        this.requestStack = {}, this.backUpDataList = {}, this.resultDataList = {}
                    }
                }, {
                    key: "run",
                    value: function (t) {
                        var e = this,
                            r = this.requestStack,
                            n = Object.assign({}, e.cfg),
                            a = {};
                        i.each(r, function (r, u) {
                            a[u] = !1;
                            var c = Object.assign(e.cfg.params, r.dataParam),
                                l = r.dataParam.appId;
                            o(n.mtop ? "mtop" : "http", {
                                ctx: n.ctx,
                                url: u,
                                api: e.cfg.mtopApiName || void 0,
                                dataType: r.dataType,
                                params: c,
                                timeout: n.timeout,
                                realCallback: function (r) {
                                    e._mergeData(l, r, function (r) {
                                        delete e.requestStack[u], i.isEmptyObject(e.requestStack) && (t && t(r), e.reset())
                                    })
                                },
                                errCallback: function () {
                                    e._mergeData(l, void 0, function (r) {
                                        delete e.requestStack[u], i.isEmptyObject(e.requestStack) && (t && t(r), e.reset())
                                    })
                                }
                            })
                        })
                    }
                }]), t
            }();
        t.exports = d
    }, function (t, e, r) {
        "use strict";
        var n = r(3),
            a = {
                api: "mtop.taobao.aladdin.service.AldRecommendService.tmall.recommend2",
                dataType: "jsonp",
                v: "1.0",
                ecode: 0
            };
        t.exports = function (t, r) {
            switch (t) {
                case "mtop":
                    return e.mtop(r);
                case "http":
                default:
                    return e.http(r)
            }
        }, e.http = function (t) {
            var e = {
                url: t.url,
                method: t.dataType,
                body: t.params,
                timeout: t.timeout,
                realCallback: t.realCallback
            };
            return t.callback && (e.callback = t.callback), n.fetch(t.ctx, e, function (t) {
                e.realCallback && e.realCallback(t)
            })
        }, e.mtop = function (t) {
            var e = Object.assign({}, a, {
                param: t.params,
                api: t.api || a.api
            });
            return n.mtop(t.ctx, e, function (e) {
                e && e.ret && e.ret[0] && e.ret[0].indexOf("SUCCESS") >= 0 ? t.realCallback && t.realCallback(e.data.resultValue) : t.errCallback && t.errCallback(e.ret && e.ret[0] || "Mtop接口调用失败")
            })
        }
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e) {
            function r(t) {
                if (!(e && a > e) && t && t.pureChildren) {
                    t.pureChildren = i.isArray(t.pureChildren) ? t.pureChildren : [];
                    for (var o = 0, u = t.pureChildren.length; o < u;) {
                        var c = i.extend({}, t.pureChildren[o]);
                        r(c), delete c.pureChildren, delete c.children, n.push(c), o++
                    }
                    a++
                }
            }

            var n = [];
            if (!i.isPlainObject(t)) return n;
            var a = 1;
            return r(t), n
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.flattenDom = a;
        var o = r(2),
            i = n(o)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r) {
            return e = c.isPlainObject(e) ? e : {}, s.isTaobao(t) ? this.taobao.call(t, t, e, r) : s.isTmall(t) ? (e["pc-image"] = e["pc-image"] || e.image, e["mobile-image"] = e["mobile-image"] || e.image, e["iphone-link"] = e["iphone-link"] || e.url, e["ipad-link"] = e["ipad-link"] || e.url, e["tmallapp-link"] = e["tmallapp-link"] || e.url, e["aliapp-link"] = e["aliapp-link"] || e.url, e["mobile-link"] = e["mobile-link"] || e.url, e["pc-link"] = e["pc-link"] || e.url, e["all-link"] = e["all-link"] || e.url, e["share-title"] = e["share-title"] || e.title, e["share-intro"] = e["share-intro"] || e.text, this.tmall.call(t, t, e, r)) : new Error(p.ERROR_SHARE_UNSUPPORT)
        }

        function o(t, e, r) {
            if (!c.isPlainObject(e)) throw new Error(p.ERROR_PARAM_SHOULE_BE_OBJECT);
            if (!t || !t.$call) throw new Error(p.ERROR_MISSING_PARAM_CONTEXT);
            if (!e["all-link"]) throw new Error(p.ERROR_MISSING_PARAM_ALL_LINK);
            return (0, _.$call)(t, "share", "doShare", e, r)
        }

        function i(t, e, r) {
            if (!c.isPlainObject(e)) throw new Error(p.ERROR_PARAM_SHOULE_BE_OBJECT);
            if (!t || !t.$call) throw new Error(p.ERROR_MISSING_PARAM_CONTEXT);
            return (0, _.$call)(t, "share", "doShare", e, r)
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.toggle = a, e.tmall = o, e.taobao = i;
        var u = r(2),
            c = n(u),
            l = r(6),
            s = n(l),
            f = r(7),
            p = n(f),
            _ = r(8)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e, r) {
            if (2 === arguments.length) e = arguments[0], r = arguments[1], t = c.isContext(this) ? this : null;
            else if (3 === arguments.length && !c.isContext(t)) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            e = c.isPlainObject(e) ? e : {}, r = c.isPlainObject(r) ? r : {};
            var n = c.clone(e);
            for (var a in r) {
                var o = r[a];
                o && (c.isString(o) && o.match(/px$/i) && (o = t ? i(t, o) : parseInt(o, 10) || 0), n[a] = o)
            }
            return n
        }

        function o(t, e) {
            t = c.isPlainObject(t) ? t : {},
                e = c.isPlainObject(e) ? e : {};
            var r = c.clone(t);
            for (var n in e) {
                var a = c.isPlainObject(e[n]) && e[n].title ? e[n].value : e[n];
                "undefined" !== c._typeof(a) && (r[n] = a)
            }
            return r
        }

        function i(t, e) {
            if (!c.isContext(t)) throw new Error(s.ERROR_MISSING_PARAM_CONTEXT);
            c.isString(e) ? e = parseInt(e, 10) || 0 : c.isNumber(e) || (e = 0);
            var r = 750,
                n = t.$getConfig().env || {},
                a = p.isWeb(t) ? 1 : 2,
                o = n.scale || a,
                i = n.deviceWidth || window.screen.width || 750;
            return i /= o, r * e / i
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.checkTheme = a, e.checkConfig = o, e.toPixel = i;
        var u = r(2),
            c = n(u),
            l = r(7),
            s = n(l),
            f = r(6),
            p = n(f)
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t, e
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var o = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            i = r(2),
            u = n(i),
            c = r(3),
            l = n(c),
            s = r(7),
            f = n(s),
            p = l.fetch,
            _ = l.mtop,
            d = void 0,
            h = void 0,
            m = function () {
                function t(e, r) {
                    if (a(this, t), !r.ossData || 0 === r.ossData.length) return nativeLog && nativeLog("传入ossData不能为undefine或空数组"), Promise.reject(new Error("传入ossData不能为undefine或空数组"));
                    d = e._app, h = d.__pvuuid, d.__pvuuid || (h = d.__pvuuid = (new Date).getTime());
                    var n = this;
                    return n.ctx = e, n.ossData = r.ossData, n.dynamicData = null, n.exposures = [], n.useMtop = !0, n.loadFloorDynamicData().then(function (t) {
                        return d.g_openSendExposure && n.sendExposure(), t
                    })
                }

                return o(t, [{
                    key: "loadFloorDynamicData",
                    value: function () {
                        var t = this,
                            e = t.ossData,
                            r = e[0].__data_default,
                            n = e[0].__data_url,
                            a = e[0].__data_param;
                        return a._pvuuid = h, this.dynamicIO(t.ctx, t.useMtop ? "mtop" : "http", {
                            url: n,
                            params: a
                        }).then(function (e) {
                            return t.parseResult(e)
                        }).then(function (e) {
                            return e.length !== r.length ? t.getDefaultData() : e
                        })["catch"](function (e) {
                            return t.getDefaultData()
                        })
                    }
                }, {
                    key: "getDefaultData",
                    value: function () {
                        var t = this,
                            e = t.ossData,
                            r = e[0].__data_default;
                        if (u.isArray(r)) return r = t.formatDefaultData(r), Promise.resolve(r);
                        var n = e[0].__data_param.appId;
                        return p(t.ctx, {
                            url: r.url,
                            method: "jsonp",
                            callback: "callback_" + n.replace(/-/g, "_"),
                            timeout: 1e4
                        }).then(function (e) {
                            return t.parseResult(e)
                        })
                    }
                }, {
                    key: "parseResult",
                    value: function (t) {
                        var e = this,
                            r = e.ossData,
                            n = r[0].__data_param.appId;
                        return new Promise(function (r, a) {
                            t = t[n] || t;
                            var o = t.data;
                            u.isArray(o) && o.length || r([]), e.exposures.push(t.exposureParam), o.forEach(function (t) {
                                e.formatFloorData(t)
                            }), r(o)
                        })
                    }
                }, {
                    key: "formatFloorData",
                    value: function (t) {
                        var e = this;
                        for (var r in t) {
                            var n = t[r];
                            t.hasOwnProperty(r) && u.isObject(n) && n.hasOwnProperty("data") && (e.exposures.push(n.exposureParam), n = n.data), t[r] = n
                        }
                    }
                }, {
                    key: "formatDefaultData",
                    value: function (t) {
                        for (var e = 0; e < t.length; e++) {
                            var r = t[e];
                            for (var n in r) {
                                var a = r[n];
                                u.isArray(a) && a.length && (a = a[0].__data_default), r[n] = a
                            }
                        }
                        return t
                    }
                }, {
                    key: "sendExposure",
                    value: function () {
                        var t = this,
                            e = parseInt(d.sendDelayTime) || 0;
                        setTimeout(function () {
                            t.exposures.forEach(function (e) {
                                e && p(t.ctx, e)
                            })
                        }, e)
                    }
                }, {
                    key: "dynamicIO",
                    value: function (t, e, r) {
                        return this.mtopRequst(t, r)
                    }
                }, {
                    key: "httpRequst",
                    value: function (t, e) {
                        return p(t, {
                            url: e.url,
                            method: "jsonp",
                            body: e.params
                        })
                    }
                }, {
                    key: "mtopRequst",
                    value: function (t, e) {
                        var r = u.extend({}, v, {
                            param: e.params
                        });
                        return _(t, r).then(function (t) {
                            if (t && t.ret && t.ret[0] && t.ret[0].indexOf("SUCCESS") >= 0) return t.data.resultValue;
                            throw new Error(f.ERROR_MTOP_REQUEST)
                        })
                    }
                }]), t
            }(),
            v = {
                api: "mtop.taobao.aladdin.service.AldRecommendService.tmall.recommend2",
                dataType: "jsonp",
                v: "1.0",
                ecode: 0
            };
        t.exports = m
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.isModuleExist = void 0;
        var n = r(21);
        e.isModuleExist = n._isModuleExist
    }, function (e, r) {
        "use strict";

        function n(t) {
            for (var e = !1, r = (0, a._require)("zebraDoms") || [], n = 0; n < r.length; n++) {
                var o = r[n];
                if (o.name === t) {
                    e = !0;
                    break
                }
            }
            return e
        }

        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r._isModuleExist = n;
        var a = t("../Weex")
    }])
}), define("@ali/WeexUtils", function (t, e, r) {
    r.exports = t("zebraUtils")
});


;
define("@weex-component/zebra-act-search/weex", function (e, t, i) {
    i.exports = {
        data: function () {
            return {
                data: {
                    conf: {
                        placeholder: ""
                    }
                },
                theme: {},
                defaultTheme: {
                    size: 0,
                    bgColor: "transparent"
                },
                config: {},
                defaultConfig: {},
                spm: "",
                name: "",
                imgSrc: "//gw.alicdn.com/tps/TB1vQb.KpXXXXcIXVXXXXXXXXXX-28-27.png",
                searchUrlSet: {
                    android: "//s.m.tmall.com/m/searchbar.htm",
                    iOS: "//s.m.tmall.com/m/searchbar.htm"
                },
                searchType: "dacu"
            }
        },
        created: function () {
            var e = this._app.zebraUtils;
            this.theme = e.theme.checkTheme(this.defaultTheme, this.theme), this.config = e.theme.checkConfig(this.defaultConfig, this.config), this.searchUrl = "android" === this._app.PLATFORM ? this.searchUrlSet.android : this.searchUrlSet.iOS, this.searchUrl += "?searchType=" + this.searchType
        },
        methods: {
            openSearch: function () {
                var e = "d01",
                    t = this._app.zebraUtils;
                t.url.openUrl(this, this.searchUrl, this.spm, e)
            }
        }
    }, i.exports.style = {
        "wrapper": {
            "position": "relative",
            "width": 750,
            "height": 84
        },
        "fake-input": {
            "opacity": .15,
            "backgroundColor": "#000000",
            "marginTop": 10,
            "width": 634,
            "height": 64,
            "marginLeft": 58,
            "borderRadius": 4
        },
        "search-placeholder": {
            "position": "absolute",
            "top": 10,
            "textAlign": "center",
            "flexDirection": "row",
            "alignItems": "center",
            "justifyContent": "center",
            "width": 634,
            "height": 64,
            "marginLeft": 58,
            "borderRadius": 4
        },
        "search-icon": {
            "width": 32,
            "height": 32,
            "marginRight": 10
        },
        "placeholder-text": {
            "color": "#ffffff",
            "opacity": .9
        }
    }, i.exports.template = {
        "type": "div",
        "classList": ["wrapper"],
        "style": {
            "backgroundColor": function () {
                return this.theme.bgColor
            },
            "marginTop": function () {
                return this.theme.size
            }
        },
        "children": [{
            "type": "div",
            "classList": ["fake-input"]
        }, {
            "type": "div",
            "classList": ["search-placeholder"],
            "events": {
                "click": "openSearch"
            },
            "children": [{
                "type": "image",
                "classList": ["search-icon"],
                "attr": {
                    "src": function () {
                        return this.imgSrc
                    }
                }
            }, {
                "type": "text",
                "classList": ["placeholder-text"],
                "attr": {
                    "value": function () {
                        return this.data.conf.placeholder
                    }
                }
            }]
        }]
    }
});
;;
define("@weex-component/zebra-com-share/weex", function (e, a, i) {
    var t = function () {
        var e = function (e) {
            var a = typeof e;
            return /^(?:object|function|array)$/.test(a) && e !== null
        };
        var a = function (e) {
            return e === null || e === undefined
        };
        return function (i, t, r, n) {
            t = t.split(".");
            var s = i || Ali;
            var o = typeof r === "undefined";
            var l;
            while (t.length > 1) {
                l = t.shift();
                if (a(s[l]) && o) {
                    return s[l]
                } else if (!e(s[l]) && !o) {
                    s[l] = {}
                }
                s = s[l]
            }
            l = t[0];
            if (!o && (a(s[l]) || !n)) {
                s[l] = r
            }
            return s[l]
        }
    }();
    i.exports = {
        data: function () {
            return {
                defaultImage: "",
                isShow: false,
                height: "120px",
                data: {},
                theme: {},
                defaultTheme: {},
                config: {},
                defaultConfig: {},
                spm: "",
                name: ""
            }
        },
        created: function () {
            var e = this;
            var a = e._app.zebraUtils;
            this.theme = a.theme.checkTheme(this.defaultTheme, this.theme);
            this.config = a.theme.checkConfig(this.defaultConfig, this.config);
            var i = e.isModuleExist("zebra-aoyun-comshare-data");
            if (i) {
                this.$dispatch("rootBroadcast", {
                    moduleName: "zebra-aoyun-comshare-data",
                    methodName: "pullShareData",
                    data: function (a) {
                        e.loadDefaultData(a);
                        e.renderUI()
                    }
                })
            } else {
                e.renderUI()
            }
        },
        methods: {
            renderUI: function () {
                var e = this;
                var a = e._app.zebraUtils;
                var i = t(e.data, "shareObj.backgroundImg");
                if (!e.config.isForceHidden && !e.data.isForceHidden && i) {
                    e.defaultImage = i;
                    var r = t(e.data, "shareObj.height");
                    if (r) {
                        e.height = r;
                        e._app.refreshData({})
                    }
                    if (a.env.isTmall(e)) {
                        e.isShow = true;
                        e._app.refreshData({})
                    } else if (a.env.isTaobao(e)) {
                        var n = t(e.data, "shareOptions.bizName");
                        if (n) {
                            var s = {
                                api: "mtop.tmall.share.queryBenefitInviteUv",
                                v: "1.0",
                                ecode: 0,
                                param: {
                                    bizName: n
                                }
                            };
                            e.myMtop(s, function (a) {
                                if (a) {
                                    var i = t(a, "data.hasBenefit");
                                    if (!i || i.toString() === "false") {
                                        e.isShow = true;
                                        e._app.refreshData({})
                                    }
                                }
                            }, true)
                        } else {
                            e.isShow = true;
                            e._app.refreshData({})
                        }
                    }
                }
            },
            loadDefaultData: function (e) {
                var a = this;
                if (e) {
                    a.data.isForceHidden = e.isForceHidden;
                    if (e.shareOptions) {
                        var i = e.shareOptions;
                        if (!a.data.shareOptions) {
                            a.data.shareOptions = i
                        } else {
                            for (k in i) {
                                if (i[k] && !a.data.shareOptions[k]) {
                                    a.data.shareOptions[k] = i[k]
                                }
                            }
                        }
                    }
                }
            },
            isModuleExist: function (a) {
                var i = false;
                var t = this._app.zebraUtils;
                if (!t.env.isWeb(this)) {
                    var r = e("zebraDoms") || [];
                    for (var n = 0; n < r.length; n++) {
                        var s = r[n];
                        if (s.name === a) {
                            i = true;
                            break
                        }
                    }
                }
                return i
            },
            share: function (e) {
                var a = this;
                var i = e.target;
                if (!i) {
                    throw new Error("Cant find currentTarget")
                } else {
                    var t = a._app.zebraUtils;
                    if (!a.data || !a.data.shareOptions) {
                        return
                    }
                    var r = a.data.shareOptions;
                    if (!r.url) {
                        r.url = a.$getConfig().bundleUrl
                    }
                    if (t.env.isTmall(a)) {
                        var n = {
                            "pc-image": r.image,
                            "mobile-image": r.image,
                            "iphone-link": r.url,
                            "iphone-version": "",
                            "android-link": r.url,
                            "android-version": "",
                            "ipad-link": r.url,
                            "ipad-version": "",
                            "apad-link": r.url,
                            "apad-version": "",
                            "tmallapp-link": r.url,
                            "aliapp-link": r.url,
                            "mobile-link": r.url,
                            "pc-link": r.url,
                            "all-link": r.url,
                            "share-title": r.title,
                            "share-intro": r.text,
                            "share-bizid": r.bizName,
                            "share-bizlogo": "",
                            "require-tmall": "true",
                            "share-scene": r.bizName,
                            "share-source": r.bizName
                        };
                        for (k in n) {
                            if (!n[k]) {
                                delete n[k]
                            }
                        }
                        t.share.tmall(a, n, function () {
                        })
                    } else if (t.env.isTaobao(a)) {
                        var n = {
                            title: r.title,
                            text: r.text,
                            url: r.url,
                            image: r.image
                        };
                        $.each(n, function (e, a) {
                            if (!a) {
                                delete n[e]
                            }
                        });
                        t.share.taobao(a, n, function () {
                        })
                    }
                }
            },
            myMtop: function (e, a, i) {
                var t = this;
                var r = function (r) {
                    if (typeof r === "string") {
                        try {
                            r = JSON.parse(r)
                        } catch (e) {
                        }
                    }
                    if (r.ret && /session|sid_invalid/i.test(r.ret)) {
                        if (i) {
                            t.login(function () {
                                t.mtop(e, a)
                            })
                        }
                    } else {
                        a(r)
                    }
                };
                this.$sendMtop(e, r)
            }
        }
    };
    i.exports.style = {
        "zebra-com-share-backgroundImg": {
            width: 750
        }
    };
    i.exports.template = {
        type: "div",
        classList: ["wrapper"],
        shown: function () {
            return this.isShow
        },
        children: [{
            type: "container",
            children: [{
                type: "image",
                classList: ["zebra-com-share-backgroundImg"],
                attr: {
                    src: function () {
                        return this.defaultImage
                    }
                },
                events: {
                    click: "share"
                },
                style: {
                    height: function () {
                        return this.height
                    }
                }
            }]
        }]
    }
});
;;
define("@weex-component/zebra-act-headbanner4/timer", function (t, e, i) {
    function n(t) {
        var e, i, n, r;
        return r = Math.floor(t / 1e3), n = Math.floor(r / 60), r %= 60, i = Math.floor(n / 60), n %= 60, e = Math.floor(i / 24), i %= 24, {
            days: e,
            hours: i,
            minutes: n,
            seconds: r
        }
    }

    var r = t("@weex-module/timer"),
        s = !!r && !!r.setTimeout && !!r.clearTimeout;
    i.exports = {
        data: function () {
            return {
                CD: {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                },
                interval: 1e3
            }
        },
        created: function () {
            var t = this._app.systemConfig.serverTime;
            this.now = t <= this.expire ? this.expire - t : 0;
            var e = this,
                i = function () {
                    var t = s && r.setTimeout ? r.setTimeout : setTimeout;
                    !!e._timerId && (r.clearTimeout || clearTimeout)(e._timerId), e._timerId = t(function () {
                        e._updateTime(), i()
                    }, e.interval)
                };
            this.now && (this._updateTime(), s || this.start(), i())
        },
        methods: {
            start: function () {
                this.isVisible = !0
            },
            end: function () {
                this.isVisible = !1
            },
            getDiff: function () {
                var t = +new Date - this.time,
                    e = this.time - t;
                this.now = e <= this.expire ? this.expire - e : 0
            },
            _updateTime: function () {
                var t = this.now <= 1e3;
                return t ? this.end() : (this.now -= this.interval, this.CD = n(this.now), void(this.isVisible && this._app.updateActions()))
            },
            _fill: function (t) {
                return t <= 9 ? "0" + t : t
            }
        }
    }, i.exports.style = {
        "countdown": {
            "flexDirection": "row"
        },
        "text": {
            "fontSize": 28,
            "fontWeight": "bold"
        },
        "prefix": {
            "paddingRight": 6
        }
    }, i.exports.template = {
        "type": "div",
        "classList": ["countdown"],
        "events": {
            "appear": "start",
            "disappear": "end"
        },
        "children": [{
            "type": "text",
            "style": {
                "color": function () {
                    return this.color
                }
            },
            "classList": ["prefix", "text"],
            "shown": function () {
                return this.prefix
            },
            "attr": {
                "value": function () {
                    return this.prefix
                }
            }
        }, {
            "type": "text",
            "style": {
                "color": function () {
                    return this.color
                }
            },
            "classList": ["text"],
            "shown": function () {
                return this.CD.days
            },
            "attr": {
                "value": function () {
                    return this._fill(this.CD.days) + "\u5929"
                }
            }
        }, {
            "type": "text",
            "style": {
                "color": function () {
                    return this.color
                }
            },
            "classList": ["text"],
            "attr": {
                "value": function () {
                    return this._fill(this.CD.hours) + "\u65f6"
                }
            }
        }, {
            "type": "text",
            "style": {
                "color": function () {
                    return this.color
                }
            },
            "classList": ["text"],
            "attr": {
                "value": function () {
                    return this._fill(this.CD.minutes) + "\u5206"
                }
            }
        }, {
            "type": "text",
            "style": {
                "color": function () {
                    return this.color
                }
            },
            "classList": ["text"],
            "attr": {
                "value": function () {
                    return this._fill(this.CD.seconds) + "\u79d2"
                }
            }
        }]
    }
}), define("@weex-component/zebra-act-headbanner4/fanscard", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {},
                config: {},
                defaultConfig: {},
                spm: "",
                name: "",
                isShow: !1
            }
        },
        created: function () {
            var t = this._app.zebraUtils;
            this.theme = t.theme.checkTheme(this.defaultTheme, this.theme), this.config = t.theme.checkConfig(this.defaultConfig, this.config)
        },
        init: function () {
            var t = this,
                e = this._app.zebraUtils;
            e.user.getUserInfo(t).then(function (i) {
                i.isLogin !== !0 && "true" !== i.isLogin || !e.env.isTmall(t) || e.network.mtop(t, {
                    api: "mtop.tmall.svip.user.status",
                    v: "1.0",
                    ecode: 0
                }).then(function (e) {
                    if (e.data) {
                        var i = e.data.data || {};
                        !i.extra && (i.extra = {}), ("yes" == i.extra.canJoin && 0 == i.status || 1 == i.status) && (t.isShow = !0, t._app.updateActions())
                    }
                })
            })
        },
        methods: {
            openUrl: function (t) {
                var e = t.target;
                if (!e) throw new Error("Cant find currentTarget");
                var i = e.attr.href,
                    n = e.attr.spmc,
                    r = e.attr.spmd;
                if (i && n && r) {
                    var s = this._app.zebraUtils;
                    s.url.openUrl(this, i, n, r)
                }
            }
        }
    }, i.exports.style = {
        "zebra-fans-card": {
            "backgroundColor": "rgba(0,0,0,0)",
            "position": "absolute",
            "top": 8,
            "left": 10,
            "zIndex": 999999
        },
        "img": {
            "width": 200,
            "height": 76
        }
    }, i.exports.template = {
        "type": "div",
        "classList": ["zebra-fans-card"],
        "shown": function () {
            return this.isShow
        },
        "children": [{
            "type": "image",
            "classList": ["img"],
            "attr": {
                "spmc": "card",
                "spmd": "card",
                "href": "//vip.tmall.com/tm-member/superfans/index?c=618",
                "src": "//img.alicdn.com/tps/TB14pdxKpXXXXbJXVXXXXXXXXXX-200-76.png"
            },
            "events": {
                "click": "openUrl"
            }
        }]
    }
}), define("@weex-component/zebra-act-headbanner4/weex", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                config: {},
                defaultConfig: {
                    "ruleTop": 18,
                    "ruleRight": 18
                },
                theme: {},
                defaultTheme: {
                    size: 0,
                    timeBgColor: "#fff",
                    timeColor: "#000"
                },
                spm: "0",
                spmc: 0,
                countdown: {
                    text: "",
                    expire: ""
                },
                imgHeight: 390
            }
        },
        created: function () {
            var e, i = t("zebraUtils") || weex.zebraUtils || this._app.zebraUtils || {};
            this.theme = i.theme.checkTheme(this.defaultTheme, this.theme), this.theme.size = 2 * parseFloat(this.theme.size), this.config = i.theme.checkConfig(this.defaultConfig, this.config), this.config.ruleTop = parseFloat(this.config.ruleTop), this.config.ruleRight = parseFloat(this.config.ruleRight);
            try {
                e = this.data.countdown.expire.replace(/-/gi, "/"), this.expire = Date.parse(e)
            } catch (t) {
            }
            this.data && this.data.mobile && this.data.mobile.imgHeight && (i.tool.isString(this.data.mobile.imgHeight) && (this.data.mobile.imgHeight = parseInt(this.data.mobile.imgHeight)), this.imgHeight = this.data.mobile.imgHeight)
        },
        methods: {
            openUrl: function (t) {
                var e = t.target;
                if (!e) throw new Error("Cant find currentTarget");
                var i = e.attr.href,
                    n = e.attr.spmc,
                    r = e.attr.spmd;
                if (i && n && r) {
                    var s = this._app.zebraUtils;
                    s.url.openUrl(this, i, n, r)
                }
            }
        }
    }, i.exports.style = {
        "rule-area": {
            "position": "absolute",
            "zIndex": 20,
            "top": 18,
            "right": 18
        },
        "countdownBox": {
            "position": "absolute",
            "bottom": 10,
            "textAlign": "center"
        },
        "inner": {
            "borderRadius": 18,
            "flexDirection": "row",
            "position": "relative",
            "top": -10,
            "marginTop": -52,
            "paddingTop": 10,
            "paddingBottom": 10,
            "paddingLeft": 20,
            "paddingRight": 20
        },
        "wrapper": {
            "justifyContent": "center",
            "alignItems": "center",
            "position": "relative"
        }
    }, i.exports.template = {
        "type": "container",
        "classList": ["wrapper"],
        "style": {
            "marginBottom": function () {
                return this.theme.size
            }
        },
        "children": [{
            "type": "image",
            "attr": {
                "src": function () {
                    return this.data.mobile.imgUrl
                },
                "alt": function () {
                    return this.data.mobile.imgTitle
                }
            },
            "style": {
                "width": 750,
                "height": function () {
                    return this.imgHeight
                }
            },
            "shown": function () {
                return this.data.mobile && this.data.mobile.imgUrl
            }
        }, {
            "type": "zebra-act-headbanner4/fanscard",
            "shown": function () {
                return this.config.showSvip
            }
        }, {
            "type": "container",
            "classList": ["rule-area"],
            "shown": function () {
                return this.data.mobile && this.data.mobile.ruleImg && this.data.mobile.ruleLInk
            },
            "style": {
                "top": function () {
                    return this.config.ruleTop
                },
                "right": function () {
                    return this.config.ruleRight
                }
            },
            "children": [{
                "type": "image",
                "attr": {
                    "src": function () {
                        return this.data.mobile.ruleImg
                    },
                    "href": function () {
                        return this.data.mobile.ruleLInk
                    },
                    "spmc": function () {
                        return this.spm || this.data.spm
                    },
                    "spmd": "d1"
                },
                "style": {
                    "width": 88,
                    "height": 38
                },
                "events": {
                    "click": "openUrl"
                }
            }]
        }, {
            "type": "container",
            "classList": ["inner"],
            "shown": function () {
                return this.data.countdown && this.expire
            },
            "style": {
                "backgroundColor": function () {
                    return this.theme.timeBgColor
                }
            },
            "children": [{
                "type": "zebra-act-headbanner4/timer",
                "attr": {
                    "color": function () {
                        return this.theme.timeColor
                    },
                    "prefix": function () {
                        return this.data.countdown.text
                    },
                    "expire": function () {
                        return this.expire
                    }
                }
            }]
        }]
    }
});
;;
define("@weex-component/zebra-act-newbanner-v4/weex", function (t, i, n) {
    var a = [{
        "1x1": 714,
        "1x2": 354,
        "1x3": 234,
        "1x4": 174
    }, {
        "1x1": 750,
        "1x2": 372,
        "1x3": 246,
        "1x4": 183
    }];
    n.exports = {
        data: function () {
            return {
                data: {},
                config: {},
                defaultConfig: {
                    $dynamic: true,
                    layout: "1x2",
                    isHideInTb: false,
                    isHideInTm: false,
                    bannerHeight: 210
                },
                spm: "0",
                theme: {},
                defaultTheme: {
                    bgColor: "transparent",
                    size: 18,
                    hasMargin: false
                }
            }
        },
        created: function () {
            var t = this._app.zebraUtils;
            if (!this.data.banner || !this.data.banner.length) {
                return this.$show = false
            }
            this.theme = t.theme.checkTheme(this, this.defaultTheme, this.theme);
            this.config = t.theme.checkConfig(this.defaultConfig, this.config);
            var i = this.config.isHideInTm && this._app.zebraUtils.env.isTmall(this);
            var n = this.config.isHideInTb && this._app.zebraUtils.env.isTaobao(this);
            this.$show = !(i || n);
            if (!this.$show) {
                return
            }
            this.dynamic()
        },
        methods: {
            ready: function () {
                var t = +!!this.theme.hasMargin;
                this.listMargin = "list-margin-" + t;
                var i = a[t];
                this.bgW = parseFloat(i[this.config.layout]);
                var n = !!t ? 750 : 714;
                this.bgH = n * this.config.bannerHeight / 750
            },
            dynamic: function () {
                if (!this._app.zebraUtils.data) {
                    return
                }
                var t = this._app.zebraUtils;
                var i = this;
                var n = this.data.banner;
                var a = this._app.zebraUtils.data.checkDynamicData(n);
                if (a.isDynamic) {
                    this._app.zebraUtils.data.dynamicData(this, this.data).then(function (t) {
                        i.data.banner = t.banner;
                        i.bannerPaddingRightFix.call(i)
                    })
                } else {
                    i.bannerPaddingRightFix.call(i)
                }
            },
            bannerPaddingRightFix: function () {
                var t = !!this.theme.hasMargin;
                if (!t) return;
                try {
                    for (var i = 0; i < this.data.banner.length; i++) {
                        var n = this.data.banner[i];
                        if (i === this.data.banner.length - 1) {
                            n.paddingRight = 0
                        } else {
                            n.paddingRight = 5.5
                        }
                    }
                } catch (a) {
                }
            },
            openUrl: function (t) {
                var i = t.target;
                if (!i) {
                    throw new Error("Cant find currentTarget")
                } else {
                    var n = i.attr.href,
                        a = i.attr.spmc,
                        e = i.attr.spmd;
                    if (n && a && e) {
                        var r = this._app.zebraUtils;
                        r.url.openUrl(this, n, this.spm, e)
                    }
                }
            }
        }
    };
    n.exports.style = {
        list: {
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "rgba(0,0,0,0)",
            marginBottom: -6
        },
        "list-margin-0": {
            paddingRight: 0,
            paddingLeft: 18
        },
        "list-margin-1": {
            padding: 0,
            marginRight: -6
        },
        item: {
            paddingRight: 6,
            paddingBottom: 6
        }
    };
    n.exports.template = {
        type: "div",
        classList: function () {
            return ["list", this.listMargin]
        },
        style: {
            marginTop: function () {
                return this.theme.size
            },
            backgroundColor: function () {
                return this.theme.bgColor
            }
        },
        shown: function () {
            return this.$show
        },
        children: [{
            type: "div",
            classList: ["item"],
            style: {
                paddingRight: function () {
                    return this.paddingRight
                }
            },
            repeat: function () {
                return this.data.banner
            },
            shown: function () {
                return this.mBannerImg || this.bannerImg
            },
            attr: {
                href: function () {
                    return this.mbannerUrl || this.bannerUrl
                },
                spmc: function () {
                    return this.spm
                },
                spmd: function () {
                    return "d" + this.$index
                }
            },
            events: {
                click: "openUrl"
            },
            children: [{
                type: "image",
                attr: {
                    alt: function () {
                        return this.bannerTitle
                    },
                    src: function () {
                        return this.mBannerImg || this.bannerImg
                    }
                },
                style: {
                    width: function () {
                        return this.bgW
                    },
                    height: function () {
                        return this.bgH
                    }
                }
            }]
        }]
    }
});
;;
define('@weex-component/zebra-macro/weex', function (require, exports, module) {

    ;

    module.exports = {
        data: function () {
            return {
                data: {},
                banner: {},
                areas: [],
                theme: {},
                defaultTheme: {},
                defaultConfig: {},
                spm: '',
                schemaVersion: '',
                display: false
            }
        },
        created: function () {
            var zebraUtils = this._app.zebraUtils;

            // should be make sure data is exist
            var items = this.data['items-mobile'] || [];

            if (!zebraUtils.tool.isArray(items) || items.length < 1) {
                return;
            }

            // setup config
            this.config = zebraUtils.theme.checkConfig(this.defaultConfig, this.config);

            // setup theme
            this.theme = zebraUtils.theme.checkTheme(this, this.defaultTheme, this.theme);

            //拆分数据
            this.banner = items[0];

            this.banner.imgHeight = this.banner.imgHeight / (this.banner.imgWidth / 750);


            //热区定位
            var scaleVal = 750 / 320;
            for (var i = 1; i < items.length; i++) {
                var obj = items[i]

                obj.areaTop = obj.areaTop * scaleVal;
                obj.areaLeft = obj.areaLeft * scaleVal;
                obj.areaWidth = obj.areaWidth * scaleVal;
                obj.areaHeight = obj.areaHeight * scaleVal;

                obj.spmd = 'd' + i + '1';
                obj.spmc = this.spm;
                this.areas.push(obj)
            }

            // if have image
            if (items.length > 0) {
                this.display = true
            }
        },
        methods: {
            openUrl: function (e) {
                var target = e.target;
                if (!target) {
                    throw new Error('Cant find currentTarget')
                } else {
                    var href = target.attr.href,
                        spmc = target.attr.spmc,
                        spmd = target.attr.spmd;

                    if (href && spmc && spmd) {
                        var zebraUtils = this._app.zebraUtils
                        zebraUtils.url.openUrl(this, href, spmc, spmd)
                    }
                }
            }
        }
    };


    ;
    module.exports.style = {
        "wrapper": {
            "color": "#353535"
        },
        "point": {
            "position": "absolute"
        },
        "banner": {
            "width": 750
        }
    }

    ;
    module.exports.template = {
        "type": "div",
        "style": {
            "backgroundColor": function () {
                return this.theme.backgroundColor
            }
        },
        "shown": function () {
            return this.display
        },
        "children": [{
            "type": "div",
            "classList": [
                "wrapper"
            ],
            "style": {
                "marginTop": function () {
                    return this.theme.setMargin
                },
                "marginBottom": function () {
                    return this.theme.setMargin
                }
            },
            "children": [{
                "type": "image",
                "id": "imgBanner",
                "classList": [
                    "banner"
                ],
                "attr": {
                    "src": function () {
                        return this.banner.imgUrl
                    },
                    "alt": function () {
                        return this.banner.imgTitle
                    }
                },
                "style": {
                    "height": function () {
                        return this.banner.imgHeight
                    }
                }
            }, {
                "type": "div",
                "classList": [
                    "point"
                ],
                "attr": {
                    "spmc": function () {
                        return this.spmc
                    },
                    "spmd": function () {
                        return this.spmd
                    },
                    "href": function () {
                        return this.areaLink
                    },
                    "title": function () {
                        return this.areaTitle
                    }
                },
                "events": {
                    "click": "openUrl"
                },
                "repeat": function () {
                    return this.areas
                },
                "style": {
                    "top": function () {
                        return this.areaTop
                    },
                    "left": function () {
                        return this.areaLeft
                    },
                    "width": function () {
                        return this.areaWidth
                    },
                    "height": function () {
                        return this.areaHeight
                    }
                }
            }]
        }]
    }

    ;
});
;
define("@weex-component/zebra-floor-recomm-entracne-a/weex", function (t, i, e) {
    e.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {},
                config: {},
                defaultConfig: {},
                spm: "",
                schemaVersion: "",
                name: "",
                finallArr: []
            }
        },
        created: function () {
            var t = this._app.zebraUtils;
            var i = this;
            if (!!this.isZebraModule) {
                this.theme = t.theme.checkTheme(this.defaultTheme, this.theme);
                this.config = t.theme.checkConfig(this.defaultConfig, this.config);
                this.data.floorCfg = this.data.floorCfg || [];
                if (!this.data.baseCfg) {
                    this.data.baseCfg = {}
                }
                var e = {
                    tppId: "3145",
                    showNum: 6,
                    goldlog: "/dacu.1.1.1,H46747592"
                };
                this.data.baseCfg = Object.assign(e, this.data.baseCfg);
                if (!this.data.baseCfg.goldlog) {
                    this.data.baseCfg.goldlog = "/dacu.1.1.1,H46747592"
                }
                var n = "03711";
                var o = {
                    api: "mtop.taobao.aladdin.service.AldRecommendService.act.recommend",
                    v: "1.0",
                    ecode: 0,
                    param: {
                        appId: n,
                        tppId: this.data.baseCfg.tppId || "3145"
                    }
                };
                t.network.mtop(this, o).then(function (t) {
                    i.handleData(t.data.resultValue[n].data)
                }).catch(function (t) {
                    i.handleData([])
                })
            } else {
                this.pureRender()
            }
        },
        methods: {
            pureRender: function () {
                this.finallArr = [this.data]
            },
            handleData: function (t) {
                var i = this._app.zebraUtils;
                var e = this.data.floorCfg;
                var n = this;
                var o = this.data.baseCfg.tppId || "3145";
                if (!t.length) {
                    i.network.fetch(this, {
                        url: "//tmall-rmc.oss-cn-hangzhou.aliyuncs.com/ALADDINBOTTOM/03711/" + o + "/data.jsonp",
                        method: "jsonp",
                        callback: "callback_03711_" + o
                    }).then(function (t) {
                        n.editData(t.data, e)
                    })
                } else {
                    this.editData(t, e)
                }
            },
            editData: function (t, i) {
                var e = this._app.zebraUtils;
                var n = this;
                t.map(function (t, o) {
                    var r;
                    i.forEach(function (i, e) {
                        if (i.floorId === t.id) {
                            r = i;
                            return false
                        }
                    });
                    if (!r) {
                        if (i.length) {
                            if (i[o]) {
                                r = i[o]
                            } else {
                                r = i[i.length - 1]
                            }
                        } else {
                            r = {}
                        }
                        r.goldlog = n.data.baseCfg.goldlog
                    }
                    Object.assign(t, r);
                    t.contents.forEach(function (t, i) {
                        t.liIndex = "d" + o + "b" + i;
                        t.clickUrl = t.clickUrl ? e.url.getSpmUrl(n, t.clickUrl, n.spm, t.liIndex) : t.clickUrl;
                        t.goldlog = n.data.baseCfg.goldlog
                    });
                    var l = t.renderArr = [];
                    l[0] = {
                        list: [{
                            clickUrl: r.href ? e.url.getSpmUrl(n, r.href, n.spm, "d" + o + "b0000") : r.href,
                            picUrl: "//g.alicdn.com/s.gif",
                            liIndex: "d" + o + "b0000",
                            noImgSubFix: true
                        }, t.contents.shift()]
                    };
                    l[1] = {
                        list: [t.contents.shift(), t.contents.shift()]
                    };
                    t.xindex = o;
                    if (t.contents.length) {
                        t.bgContentClass = ""
                    } else {
                        t.bgContentClass = "content-bg-short"
                    }
                    return t
                });
                var o = [];
                for (var r = 0; r < t.length; r++) {
                    var l = t[r];
                    l.lastBgColor = "rgba(0,0,0,0)";
                    if (r !== 0) {
                        l.lastBgColor = t[r - 1].floorBgColor
                    }
                    o.push({
                        data: l,
                        name: this.name,
                        zebraId: this.moduleId,
                        theme: this.theme,
                        config: this.config,
                        moduleId: this.moduleId,
                        spm: this.spm
                    })
                }
                this.$dispatch("appendCells", {
                    index: this.index,
                    data: o.slice(0)
                });
                this._app.updateActions()
            },
            openUrl: function (t) {
                var i = this._app.zebraUtils;
                var e = t.target;
                if (!e) {
                    throw new Error("Cant find currentTarget")
                } else {
                    var n = e.attr.href,
                        o = e.attr.trackinfo,
                        r = e.attr.goldlog;
                    if (n && i.env.isAndroid(this)) {
                        i.url.openUrl(this, n)
                    }
                    r = r.split(",");
                    if (r.length === 2) {
                        i.tracker.goldlog(this, r[0], "click", o, r[1])
                    }
                }
            },
            scrollappear: function (t) {
                var i = this._app.zebraUtils;
                var e = t.target.attr.goldlog;
                var n = t.target.attr.trackinfo;
                if (e) {
                    this.finallArr[0].goldlog = "";
                    this._app.updateActions();
                    e = e.split(",");
                    if (e.length === 2) {
                        i.tracker.goldlog(this, e[0], "pv", n, e[1])
                    }
                }
            }
        }
    };
    e.exports.style = {
        "floor-wrapper": {
            width: 750,
            paddingBottom: 10
        },
        "bg-img": {
            width: 750,
            height: 240,
            position: "absolute",
            left: 0,
            top: 0
        },
        "content-bg": {
            width: 750,
            height: 358,
            position: "absolute",
            left: 0,
            top: 240
        },
        "content-bg-short": {
            height: 128
        },
        "content-warpper": {
            width: 750,
            marginTop: 26
        },
        "row-container": {
            flexDirection: "row",
            marginBottom: 6,
            marginLeft: 15,
            marginRight: 15
        },
        "row-container-2": {
            height: 160
        },
        "row-container-4": {
            height: 224
        },
        "column-container": {
            flex: 1,
            textAlign: "center"
        },
        "column-2-img": {
            width: 354,
            height: 160,
            marginLeft: 3
        },
        "column-4-img": {
            width: 174,
            height: 224,
            marginLeft: 3
        },
        "column-content": {
            backgroundColor: "#ffffff"
        },
        "column-2-imgage": {
            position: "absolute",
            width: 140,
            height: 140,
            left: 10,
            top: 10
        },
        "column-2-text": {
            position: "absolute",
            top: 45,
            left: 170
        },
        "column-2-title": {
            fontWeight: "bold",
            color: "#292929",
            fontSize: 28,
            width: 180,
            lines: 1
        },
        "column-2-subtitle": {
            marginTop: 8,
            fontSize: 22,
            width: 180,
            lines: 1
        },
        "column-4-imgage": {
            position: "absolute",
            width: 140,
            height: 140,
            left: 17,
            bottom: 30
        },
        "column-4-title": {
            position: "absolute",
            textAlign: "center",
            lines: 1,
            top: 15,
            width: 150,
            fontSize: 24,
            height: 32,
            left: 12,
            zIndex: 5
        },
        "column-4-subtitle": {
            position: "absolute",
            textAlign: "center",
            width: 150,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 22,
            left: 12,
            borderRadius: 14,
            bottom: 12,
            color: "#ffffff",
            zIndex: 5,
            lines: 1
        },
        "column-4-logo": {
            position: "absolute",
            width: 84,
            height: 42,
            top: 10,
            left: 45,
            zIndex: 5
        }
    };
    e.exports.template = {
        type: "container",
        classList: ["mod-wrapper"],
        events: {
            appear: "scrollappear",
        },
        children: [{
            type: "container",
            repeat: function () {
                return this.finallArr
            },
            attr: {
                index: function () {
                    return this.xindex
                },
                trackinfo: function () {
                    return this.trackInfo
                },
                goldlog: function () {
                    return this.goldlog
                }
            },
            classList: ["floor-wrapper"],
            events: {
                appear: "scrollappear",
                //disappear: "scrollappear"
            },
            style: {
                backgroundColor: function () {
                    return this.lastBgColor
                }
            },
            children: [{
                type: "image",
                classList: ["bg-img"],
                attr: {
                    src: function () {
                        return this.floorBgImg
                    }
                }
            }, {
                type: "container",
                classList: function () {
                    return ["content-bg", this.bgContentClass]
                },
                style: {
                    backgroundColor: function () {
                        return this.floorBgColor
                    }
                }
            }, {
                type: "container",
                classList: ["content-warpper"],
                children: [{
                    type: "container",
                    classList: ["row-container", "row-container-2"],
                    repeat: function () {
                        return this.renderArr
                    },
                    children: [{
                        type: "a",
                        classList: ["column-container"],
                        repeat: function () {
                            return this.list
                        },
                        attr: {
                            href: function () {
                                return this.clickUrl
                            },
                            trackinfo: function () {
                                return this.trackInfo
                            },
                            goldlog: function () {
                                return this.goldlog
                            },
                            spmd: function () {
                                return this.liIndex
                            }
                        },
                        events: {
                            click: "openUrl"
                        },
                        children: [{
                            type: "image",
                            shown: function () {
                                return !this.title || !this.subtitle
                            },
                            classList: ["column-2-img"],
                            attr: {
                                imageQuality: "original",
                                src: function () {
                                    return this.picUrl + (this.noImgSubFix ? "" : "_480x480q90.jpg")
                                }
                            }
                        }, {
                            type: "container",
                            shown: function () {
                                return this.title && this.subtitle
                            },
                            classList: ["column-content", "column-2-img"],
                            children: [{
                                type: "image",
                                classList: ["column-2-imgage"],
                                attr: {
                                    imageQuality: "original",
                                    src: function () {
                                        return this.picUrl + "_200x200xzq90.jpg"
                                    }
                                }
                            }, {
                                type: "container",
                                classList: ["column-2-text"],
                                children: [{
                                    type: "text",
                                    classList: ["column-2-title"],
                                    attr: {
                                        value: function () {
                                            return this.title
                                        }
                                    }
                                }, {
                                    type: "text",
                                    classList: ["column-2-subtitle"],
                                    style: {
                                        color: function () {
                                            return this.floorBgColor
                                        }
                                    },
                                    attr: {
                                        value: function () {
                                            return this.subtitle
                                        }
                                    }
                                }]
                            }]
                        }]
                    }]
                }, {
                    type: "container",
                    classList: ["row-container", "row-container-4"],
                    shown: function () {
                        return this.contents.length
                    },
                    children: [{
                        type: "a",
                        classList: ["column-container"],
                        repeat: function () {
                            return this.contents
                        },
                        attr: {
                            href: function () {
                                return this.clickUrl
                            },
                            trackinfo: function () {
                                return this.trackInfo
                            },
                            goldlog: function () {
                                return this.goldlog
                            },
                            spmd: function () {
                                return this.liIndex
                            }
                        },
                        events: {
                            click: "openUrl"
                        },
                        children: [{
                            type: "image",
                            shown: function () {
                                return !this.title && !this.logoUrl || !this.subtitle
                            },
                            classList: ["column-4-img"],
                            attr: {
                                src: function () {
                                    return this.picUrl + "_360x360q90.jpg"
                                },
                                imageQuality: "original"
                            }
                        }, {
                            type: "container",
                            shown: function () {
                                return (this.title || this.logoUrl) && this.subtitle
                            },
                            classList: ["column-content", "column-4-img"],
                            children: [{
                                type: "image",
                                classList: ["column-4-imgage"],
                                attr: {
                                    imageQuality: "original",
                                    src: function () {
                                        return this.picUrl + "_200x200xzq90.jpg"
                                    }
                                }
                            }, {
                                type: "image",
                                shown: function () {
                                    return this.logoUrl
                                },
                                classList: ["column-4-logo"],
                                attr: {
                                    src: function () {
                                        return this.logoUrl
                                    }
                                }
                            }, {
                                type: "text",
                                shown: function () {
                                    return !this.logoUrl
                                },
                                classList: ["column-4-title"],
                                style: {
                                    color: function () {
                                        return this.floorBgColor
                                    }
                                },
                                attr: {
                                    value: function () {
                                        return this.title
                                    }
                                }
                            }, {
                                type: "text",
                                classList: ["column-4-subtitle"],
                                style: {
                                    backgroundColor: function () {
                                        return this.floorBgColor
                                    }
                                },
                                attr: {
                                    value: function () {
                                        return this.subtitle
                                    }
                                }
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }
});
;;
define("@weex-component/zebra-floor-recomm-entracne-c/weex", function (t, n, o) {
    o.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {},
                config: {},
                defaultConfig: {},
                spm: "",
                schemaVersion: "",
                name: "",
                finallArr: [],
                trackInfo: "",
                goldlog: ""
            }
        },
        created: function () {
            var t = this._app.zebraUtils,
                n = this;
            this.theme = t.theme.checkTheme(this.defaultTheme, this.theme), this.config = t.tool.extend(this.defaultConfig, this.config), this.data.baseConfig || (this.data.baseConfig = {});
            var o = {
                showNum: 8,
                dataType: "\u884c\u4e1a\u4f1a\u573a",
                goldlog: "/dacu.1.1.2,H46747614",
                tppId: "3142",
                bgColor: "#02be91"
            };
            this.data.baseConfig = Object.assign(o, this.data.baseConfig), this.data.baseConfig.goldlog || (this.data.baseConfig.goldlog = "/dacu.1.1.2,H46747614"), this.config.bgColor = this.config.showBg ? this.data.baseConfig.bgColor : "tranparent";
            var e = "03711",
                i = {
                    api: "mtop.taobao.aladdin.service.AldRecommendService.act.recommend",
                    v: "1.0",
                    ecode: 0,
                    param: {
                        appId: e,
                        tppId: this.data.baseConfig.tppId || "3142"
                    }
                };
            this.goldlog = this.data.baseConfig.goldlog, t.network.mtop(this, i).then(function (t) {
                n.handleData(t.data.resultValue[e].data)
            })["catch"](function () {
                n.handleData([])
            })
        },
        methods: {
            handleData: function (t) {
                var n = (this._app.zebraUtils, this);
                if (t.length) n.editData(t);
                else {
                    var o = this.data.baseConfig.tppId || "3142";
                    this._app.zebraUtils.network.fetch(this, {
                        url: "//tmall-rmc.oss-cn-hangzhou.aliyuncs.com/ALADDINBOTTOM/03711/" + o + "/data.jsonp",
                        method: "jsonp",
                        callback: "callback_03711_" + o
                    }).then(function (t) {
                        n.editData(t.data)
                    })
                }
            },
            editData: function (t) {
                var n = this._app.zebraUtils,
                    o = this.goldlog,
                    e = {},
                    i = this;
                "\u884c\u4e1a\u4f1a\u573a" === this.data.baseConfig.dataType ? t.forEach(function (t) {
                    if ("\u4e3b\u4f1a\u573a\u884c\u4e1a\u4f1a\u573a" === t.name) return e = t, !1
                }) : "\u54c1\u7c7b\u4f1a\u573a" === this.data.baseConfig.dataType ? t.forEach(function (t) {
                    if ("\u4e3b\u4f1a\u573a\u54c1\u7c7b\u4f1a\u573a" === t.name) return e = t, !1
                }) : t.forEach(function (t) {
                    if ("\u4e3b\u4f1a\u573a\u573a\u666f\u4f1a\u573a" === t.name) return e = t, !1
                });
                var a = [],
                    r = 0;
                for (e.contents.forEach(function (t, e) {
                    t.goldlog = o, t.spmd = "d" + e, t.clickUrl = n.url.getSpmUrl(i, t.clickUrl, i.spm, t.spmd)
                }); e.contents.length >= 4;) a.push({
                    xindex: r++,
                    list: e.contents.splice(0, 4)
                });
                this.trackInfo = e.trackInfo, this.finallArr = a, this._app.updateActions()
            },
            openUrl: function (t) {
                var n = this._app.zebraUtils,
                    o = t.target;
                if (!o) throw new Error("Cant find currentTarget");
                var e = o.attr.href,
                    i = o.attr.goldlog;
                o.attr.trackinfo;
                e && n.env.isAndroid(this) && n.url.openUrl(this, e), i = i.split(","), 2 === i.length && n.tracker.goldlog(this, i[0], "click", trackInfo, i[1])
            },
            scrollappear: function (t) {
                var n = this._app.zebraUtils,
                    o = t.target.attr.goldlog,
                    e = t.target.attr.trackinfo;
                o && (this.data.baseConfig.goldlog = "", this._app.updateActions(), o = o.split(","), 2 === o.length && n.tracker.goldlog(this, o[0], "pv", e, o[1]))
            }
        }
    }, o.exports.style = {
        "content-warpper": {
            paddingTop: 12,
            paddingBottom: 12
        },
        "row-container": {
            flexDirection: "row",
            marginBottom: 6,
            marginLeft: 15,
            marginRight: 15,
            height: 224
        },
        "column-container": {
            flex: 1,
            textAlign: "center"
        },
        "column-4-img": {
            width: 174,
            height: 224,
            marginLeft: 3
        },
        "column-content": {
            backgroundColor: "#ffffff"
        },
        "column-4-imgage": {
            position: "absolute",
            width: 140,
            height: 140,
            left: 17,
            bottom: 30
        },
        "column-4-title": {
            position: "absolute",
            textAlign: "center",
            lines: 1,
            top: 15,
            width: 150,
            fontSize: 24,
            height: 32,
            fontWeight: "bold",
            left: 12,
            zIndex: 5
        },
        "column-4-subtitle": {
            position: "absolute",
            textAlign: "center",
            width: 150,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 22,
            left: 12,
            lines: 1,
            borderRadius: 14,
            bottom: 12,
            color: "#ffffff",
            zIndex: 5
        },
        "column-4-logo": {
            position: "absolute",
            width: 84,
            height: 42,
            top: 10,
            left: 45,
            zIndex: 5
        }
    }, o.exports.template = {
        type: "container",
        classList: ["content-warpper"],
        attr: {
            goldlog: function () {
                return this.data.baseConfig.goldlog
            },
            trackinfo: function () {
                return this.trackInfo
            }
        },
        style: {
            backgroundColor: function () {
                return this.config.bgColor
            }
        },
        events: {
            appear: "scrollappear"
        },
        children: [{
            type: "container",
            repeat: function () {
                return this.finallArr
            },
            attr: {
                index: function () {
                    return this.xindex
                }
            },
            classList: ["row-container"],
            children: [{
                type: "a",
                classList: ["column-container"],
                repeat: function () {
                    return this.list
                },
                attr: {
                    href: function () {
                        return this.clickUrl
                    },
                    trackinfo: function () {
                        return this.clickTrackInfo
                    },
                    goldlog: function () {
                        return this.goldlog
                    },
                    spmd: function () {
                        return this.spmd
                    }
                },
                events: {
                    click: "openUrl"
                },
                children: [{
                    type: "image",
                    shown: function () {
                        return !this.title && !this.logoUrl || !this.subtitle
                    },
                    classList: ["column-4-img"],
                    attr: {
                        src: function () {
                            return this.picUrl
                        }
                    }
                }, {
                    type: "container",
                    shown: function () {
                        return (this.title || this.logoUrl) && this.subtitle
                    },
                    classList: ["column-content", "column-4-img"],
                    children: [{
                        type: "image",
                        classList: ["column-4-imgage"],
                        attr: {
                            imageQuality: "original",
                            src: function () {
                                return this.picUrl + "_200x200xzq90.jpg"
                            }
                        }
                    }, {
                        type: "image",
                        shown: function () {
                            return this.logoUrl
                        },
                        classList: ["column-4-logo"],
                        attr: {
                            src: function () {
                                return this.logoUrl
                            }
                        }
                    }, {
                        type: "text",
                        shown: function () {
                            return !this.logoUrl
                        },
                        classList: ["column-4-title"],
                        style: {
                            color: function () {
                                return this.data.baseConfig.bgColor
                            }
                        },
                        attr: {
                            value: function () {
                                return this.title
                            }
                        }
                    }, {
                        type: "text",
                        classList: ["column-4-subtitle"],
                        style: {
                            backgroundColor: function () {
                                return this.data.baseConfig.bgColor
                            }
                        },
                        attr: {
                            value: function () {
                                return this.subtitle
                            }
                        }
                    }]
                }]
            }]
        }]
    }
});
;;
define("@weex-component/zebra-tmall-coupon/weex", function (t, n, e) {
    function i(t, n) {
        if (n && n instanceof Array) return n.length ? n : t;
        if (n && "object" == typeof n) {
            var e = {};
            for (var i in t) "" !== n[i] && null != n[i] ? e[i] = n[i] : e[i] = t[i];
            return e
        }
        return t
    }

    function o(t, n) {
        var e = {};
        for (var o in t) e[o] = i(t[o], n[o]);
        return e
    }

    function r(t) {
        t = t.replace(/-/g, "/");
        var n = /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/,
            e = n.exec(t),
            i = e.slice(1).map(function (t) {
                return parseInt(t, 10)
            }),
            o = i[0],
            r = i[1],
            a = i[2],
            s = i[3],
            c = i[4],
            u = i[5];
        return new Date(o, r - 1, a, s, c, u).getTime()
    }

    function a(t, n) {
        var e;
        return t.forEach(function (t) {
            var i = r(t.startTime);
            n >= i && (e = t)
        }), e
    }

    function s(t) {
        var n = {};
        try {
            t = t.replace(/.*?[a-zA-Z0-9_]*\(/, "").replace(/;(\ *)$/, "").replace(/\)(\ *)$/, ""), n = JSON.parse(t)
        } catch (e) {
            n = t
        }
        return n
    }

    function c(t) {
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(t.trim())
        } catch (t) {
            return {}
        }
    }

    function u(t) {
        return "https:" + t
    }

    function l(t, n) {
        var e = {
            url: u("//pages.tmall.com")
        };
        try {
            this.$callWindvane({
                class: "WVCookie",
                method: "read",
                data: e
            }, function (e) {
                var i;
                try {
                    i = JSON.parse(e).value[t]
                } catch (t) {
                    i = ""
                }
                n(i)
            })
        } catch (t) {
            n("")
        }
    }

    function h(t, n, e, i) {
        var o = u("//log.mmstat.com"),
            r = Math.floor(268435456 * Math.random()).toString(16);
        l.call(this, "cna", function (i) {
            var a = o + t + "?logtype=2&cache=" + r + "&gmkey=" + encodeURIComponent(n) + "&gokey=" + encodeURIComponent(e) + "&cna=" + i;
            p.network.fetch(this, {
                url: a
            }).then(function (t) {
            })
        }.bind(this))
    }

    var p = (t("@weex-module/modal"), t("zebraUtils")),
        f = "DBPV04CED5GBQEAPSMDX",
        m = function () {
            var t = function (t) {
                    var n = typeof t;
                    return /^(?:object|function|array)$/.test(n) && null !== t
                },
                n = function (t) {
                    return null === t || void 0 === t
                };
            return function (e, i, o, r) {
                i = i.split(".");
                for (var a, s = e || Ali, c = "undefined" == typeof o; i.length > 1;) {
                    if (a = i.shift(), n(s[a]) && c) return s[a];
                    t(s[a]) || c || (s[a] = {}), s = s[a]
                }
                return a = i[0], c || !n(s[a]) && r || (s[a] = o), s[a]
            }
        }(),
        g = {
            NORMAL: {
                type: "normal",
                tip: "\u60a8\u6709$all\u79ef\u5206\uff0c\u6d3b\u52a8\u671f\u95f4\u9650\u91cf\u62bd\u5238",
                text: "$points\u79ef\u5206\u62bd\u5238",
                action: "normal"
            },
            WIN: {
                type: "win",
                tip: "\u606d\u559c\uff0c\u83b7\u5f975\u5143\u5929\u732b\u8d2d\u7269\u5238",
                text: "\u7ee7\u7eed$points\u79ef\u5206\u62bd\u5238",
                action: "continue"
            },
            NO_WIN: {
                type: "noWin",
                tip: "\u6ca1\u62bd\u4e2d\uff0c\u672c\u5b9d\u5b9d\u597d\u4e0d\u5f00\u5fc3\u5450\uff5e",
                text: "\u7ee7\u7eed$points\u79ef\u5206\u62bd\u5238",
                action: "continue"
            },
            CHANCE_NOT_ENOUGH: {
                type: "noWin",
                tip: "\u4eca\u5929\u7684\u79ef\u5206\u62bd\u5238\u6b21\u6570\u5df2\u7528\u5b8c",
                text: "\u660e\u5929\u518d\u6765\u54e6\uff5e",
                btnStatus: "disabled"
            },
            POINT_NOT_ENOUGH: {
                type: "noWin",
                tip: "\u55ef\u54fc\uff0c\u79ef\u5206\u4e0d\u8db3",
                text: "\u5feb\u53bb\u5929\u732b\u4e0b\u5355\u8d5a\u79ef\u5206\u54e6",
                btnStatus: "disabled"
            },
            COUPON_NOT_ENOUGH: {
                type: "noWin",
                tip: "\u4eca\u65e5\u5df2\u62a2\u5b8c\uff0c\u8bf7\u660e\u65e5\u518d\u6765",
                text: "\u660e\u5929\u7ee7\u7eed",
                btnStatus: "disabled"
            },
            NETWORK_ERROR: {
                type: "noWin",
                tip: "\u54ce\u5440\uff0c\u7f51\u7edc\u597d\u50cf\u6709\u70b9\u95ee\u9898",
                text: "\u518d\u8bd5\u4e00\u4e0b",
                action: "continue",
                btnStatus: "disabled"
            }
        };
    e.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {},
                config: {},
                defaultConfig: {},
                spm: "",
                name: "",
                currentState: g.NORMAL,
                allPoints: 0,
                couponBg: "",
                lotteryId: "",
                points: "",
                stateReady: !1
            }
        },
        computed: {
            couponBgStyle: {
                get: function () {
                    if (0 !== this.couponBg.indexOf("//")) return this.couponBg
                }
            },
            couponBgImage: {
                get: function () {
                    return 0 === this.couponBg.indexOf("//") && this.couponBg
                }
            },
            stateImage: {
                get: function () {
                    return this.currentState === g.NORMAL ? this.data.mobileThemeConfig.normalImg : this.currentState === g.WIN ? this.data.mobileThemeConfig.winImg : this.data.mobileThemeConfig.failImg
                }
            },
            btnTips: {
                get: function () {
                    return this.currentState === g.NORMAL ? this.allPoints ? this.currentState.tip.replace(/\$all/g, this.allPoints) : "\u6d3b\u52a8\u671f\u95f4\u9650\u91cf\u62bd\u5238" : this.currentState.tip
                }
            },
            btnTipColor: {
                get: function () {
                    return this.currentState === g.NORMAL || this.currentState === g.WIN ? this.data.commonConfig.btnTipColorHighlight || this.data.commonConfig.btnTipColor || this.data.commonConfig.btnColorNormal : "disabled" === this.currentState.btnStatus ? this.data.commonConfig.btnColorDark : this.data.commonConfig.btnTipColor || this.data.commonConfig.btnColorNormal
                }
            },
            btnText: {
                get: function () {
                    return this.currentState.text.replace(/\$points/g, this.points)
                }
            },
            btnBgColor: {
                get: function () {
                    return this.currentState === g.NORMAL || this.currentState === g.WIN || this.currentState === g.NO_WIN ? this.data.mobileThemeConfig.btnBgPrimary : this.data.mobileThemeConfig.btnBgSecondary
                }
            },
            btnColor: {
                get: function () {
                    return "disabled" === this.currentState.btnStatus ? this.data.commonConfig.btnColorDark : this.data.commonConfig.btnColorNormal
                }
            },
            btnArrowIcon: {
                get: function () {
                    if (this.currentState.action) return "disabled" === this.currentState.btnStatus ? this.data.mobileThemeConfig.arrowContinueDark : this.data.mobileThemeConfig.arrowContinueNormal
                }
            }
        },
        created: function () {
            this.theme = p.theme.checkTheme(this.defaultTheme, this.theme), this.config = p.theme.checkConfig(this.defaultConfig, this.config);
            var t = {
                    "commonConfig": {
                        "btnColorDark": "#666666",
                        "btnColorNormal": "#ffffff",
                        "btnTipColor": "#ffe2c7",
                        "btnTipColorHighlight": "",
                        "couponTip": "购物券可翻倍抵用，5元最高抵40元",
                        "couponTipColor": "#7d513a",
                        "couponTipColorHighlight": "",
                        "ruleLink": "//pages.tmall.com/wow/jifen/act/aoyungonglueye?acm=lb-zebra-166305-1019922.1003.8.951223&scm=1003.8.lb-zebra-166305-1019922.ITEM_14666435798191_951223",
                        "sourceId": "jf02"
                    },
                    "lotteryConfig": [{
                        "lotteryId": "BBA58D2FB54C703AD55428A0A65DCB2B",
                        "name": "新风尚预热",
                        "points": 20,
                        "startTime": "2016-08-19 00:00:00"
                    }, {
                        "lotteryId": "BC2458F55466989B44DCF23E8038AEC5",
                        "name": "新风尚售卖",
                        "points": 50,
                        "startTime": "2016-08-25 00:00:00"
                    }],
                    "pcThemeConfig": {
                        "arrowContinueDark": "//img.alicdn.com/tps/i4/TB1WY0GLXXXXXbMaXXXwu0bFXXX.png",
                        "arrowContinueNormal": "//img.alicdn.com/tps/i4/TB1COVMLXXXXXcXXVXXwu0bFXXX.png",
                        "btnBgPrimary": "//gw.alicdn.com/tps/TB1wEgDLXXXXXc7apXXXXXXXXXX-506-121.png",
                        "btnBgSecondary": "//gw.alicdn.com/tps/TB15aJDLXXXXXaTapXXXXXXXXXX-506-121.png",
                        "couponBg": "//gw.alicdn.com/tps/TB1Oh_XLpXXXXc3aXXXXXXXXXXX-990-200.png",
                        "failImg": "//gw.alicdn.com/tps/TB1hiL4KFXXXXb7XVXXXXXXXXXX-351-200.png",
                        "marginBottom": 0,
                        "marginLeft": 0,
                        "marginRight": 0,
                        "marginTop": 10,
                        "myCouponImg": "//img.alicdn.com/tps/i4/TB1RQyhMVXXXXb3XpXXwu0bFXXX.png",
                        "normalImg": "//gw.alicdn.com/tps/TB1KJD7KFXXXXc4XFXXXXXXXXXX-351-200.png",
                        "ruleImg": "//img.alicdn.com/tps/i4/TB1TBaCKVXXXXcAapXXwu0bFXXX.png",
                        "winImg": "//gw.alicdn.com/tps/TB1as_4KFXXXXcXXVXXXXXXXXXX-351-200.png"
                    },
                    "mobileThemeConfig": {
                        "arrowContinueDark": "//img.alicdn.com/tps/i4/TB105pFLXXXXXbPaXXXwu0bFXXX.png",
                        "arrowContinueNormal": "//img.alicdn.com/tps/i4/TB1kYxDLXXXXXcIaXXXwu0bFXXX.png",
                        "btnBgPrimary": "#f97643",
                        "btnBgSecondary": "#e2e2e2",
                        "couponBg": "//gw.alicdn.com/tps/TB1aJDnLpXXXXcUXFXXXXXXXXXX-750-230.png",
                        "failImg": "//gw.alicdn.com/tps/TB1AM_9KFXXXXX9XVXXXXXXXXXX-290-228.png",
                        "marginBottom": 0,
                        "marginLeft": 9,
                        "marginRight": 9,
                        "marginTop": 10,
                        "myCouponImg": "//img.alicdn.com/tps/i4/TB1XPZnKVXXXXb8apXXwu0bFXXX.png",
                        "normalImg": "//gw.alicdn.com/tps/TB1paz_KFXXXXbdXFXXXXXXXXXX-290-228.png",
                        "ruleImg": "//img.alicdn.com/tps/i4/TB19z2lLpXXXXagXVXXwu0bFXXX.png",
                        "winImg": "//gw.alicdn.com/tps/TB1pTgcKFXXXXXRXFXXXXXXXXXX-290-228.png"
                    }
                },
                n = o(t, this.data);
            for (var e in n) this.data[e] = n[e];
            ["Top", "Right", "Bottom", "Left"].forEach(function (t) {
                var n = "margin" + t;
                this[n] = 2 * (this.data.mobileThemeConfig[n] || 0)
            }, this), this.couponBg = this.data.mobileThemeConfig.couponBg, this.getServerTime(function (t) {
                t <= 0 && (t = (new Date).getTime(), this.goldlog("time_error")), this.updateLotteryConfig(t), this.initStatus(), this.goldlog("init")
            }.bind(this))
        },
        methods: {
            getServerTime: function (t) {
                var n = u("//t.alicdn.com/t/gettime");
                p.env.isWeb(this) ? p.network.fetch(this, {
                    url: n,
                    method: "jsonp"
                }).then(function (n) {
                    var e = 1e3 * Number(n.time) || 0;
                    t(e)
                }.bind(this), function () {
                    t(0)
                }) : this.$sendHttp({
                    url: n,
                    method: "GET"
                }, function (n) {
                    var e = 1e3 * Number(s(n).time) || 0;
                    t(e)
                }.bind(this))
            },
            initStatus: function () {
                this.queryPoints(this.lotteryId, function (t) {
                    this.allPoints = t, this.stateReady = !0
                }.bind(this))
            },
            queryPoints: function (t, n) {
                var e = {
                    api: "mtop.tmw.ygcoupon.point.init",
                    v: "1.0",
                    ecode: 0,
                    param: {
                        lotteryId: t
                    },
                    sessionOption: "AutoLoginOnly"
                };
                this.mtop(e, function (t) {
                    var e = m(t, "data.data.point") || 0;
                    n(Number(e))
                })
            },
            doLottery: function (t) {
                this.pending = !0;
                var n = {
                        lotteryId: this.lotteryId,
                        sourceId: this.getSourceId(),
                        asac: f
                    },
                    e = {
                        api: "mtop.tmw.ygcoupon.point.draw",
                        v: "1.0",
                        post: "0",
                        ecode: 1,
                        isSec: 1,
                        param: n,
                        sessionOption: "AutoLoginOnly"
                    };
                this.mtop(e, function (n) {
                    this.pending = !1;
                    var e = m(n, "data.data") || {};
                    t(e)
                }.bind(this)), this.goldlog("lottery")
            },
            mtop: function (t, n) {
                function e(t) {
                    var e;
                    if ("string" == typeof t) try {
                        e = JSON.parse(t)
                    } catch (t) {
                        e = {}
                    } else e = t;
                    n(e.ret && /session|sid_invalid/i.test(e.ret) ? {} : e)
                }

                this.$sendMtop(t, e)
            },
            openUrl: function (t) {
                var n = t.target;
                if (!n) throw new Error("Cant find currentTarget");
                var e = n.attr.href,
                    i = n.attr.spmc,
                    o = n.attr.spmd;
                e && i && o && p.url.openUrl(this, e, i, o)
            },
            updateLotteryConfig: function (t) {
                var n = a(this.data.lotteryConfig, t);
                n || (n = {}), this.data.lotteryConfig = n, this.lotteryId = n.lotteryId, this.points = n.points
            },
            handleClick: function (t) {
                if (this.stateReady && "undefined" != typeof this.currentState.action) return "continue" === this.currentState.action ? (this.currentState = g.NORMAL, this.initStatus(), void this.goldlog("continue")) : void(this.pending || this.checkLogin(function (t) {
                    t && this.doLottery(this.handleLotteryResult.bind(this))
                }))
            },
            handleLotteryResult: function (t) {
                var n = String(t.isWin),
                    e = t.reason;
                "true" === n ? (this.currentState = g.WIN, this.goldlog("win")) : e ? "YGC201" === e ? this.currentState = g.CHANCE_NOT_ENOUGH : "YGC202" === e ? this.currentState = g.POINT_NOT_ENOUGH : "YGC204" === e || ("YGC206" === e ? this.currentState = g.COUPON_NOT_ENOUGH : this.currentState = g.NETWORK_ERROR) : this.currentState = g.NO_WIN
            },
            checkLogin: function (t) {
                var n = this;
                p.user.getUserInfo(n, function (e) {
                    var i = c(e);
                    "true" === String(i.isLogin) ? t.call(n, !0) : p.user.login(n, function (e) {
                        var i = c(e);
                        "success" === i.status ? t.call(n, !0) : t.call(n, !1)
                    })
                })
            },
            getSourceId: function () {
                var t, n, e;
                try {
                    n = new p.url.parseUrl(this.$getConfig().bundleUrl), e = n.params
                } catch (t) {
                    e = {}
                }
                return t = e.sourceid || e.sourceId || this.data.commonConfig.sourceId || "jf02", p.env.isTaobao(this) ? t + "st" : p.env.isTmall(this) ? t + "sm" : t + "m"
            },
            goldlog: function (t) {
                var n = {
                    device: "weex_native",
                    lotteryid: this.lotteryId,
                    sourceid: this.getSourceId(),
                    status: t
                };
                h.call(this, "/tmwap.20160712.1", "", p.url.objToParams(n), "H46926338")
            }
        }
    }, e.exports.style = {
        wrapper: {
            height: 228
        },
        "coupon-bg": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        "coupon-rule": {
            position: "absolute",
            left: 0,
            top: 0
        },
        "rule-img": {
            height: 43,
            width: 103
        },
        "my-coupon": {
            position: "absolute",
            left: 75,
            bottom: 11
        },
        "my-coupon-image": {
            width: 170,
            height: 40
        },
        "coupon-main": {
            position: "absolute",
            right: 16,
            bottom: 34,
            width: 430,
            textAlign: "center"
        },
        "tips-text": {
            lines: 1,
            color: "#ffffff",
            fontSize: 24,
            textAlign: "center",
            justifyContent: "center"
        },
        "coupon-btn": {
            height: 120,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
            marginTop: 8,
            color: "#000000"
        },
        "coupon-btn-top": {
            lines: 1,
            fontSize: 24,
            textAlign: "center",
            color: "#000000"
        },
        "coupon-btn-top-disabled": {
            color: "#666666"
        },
        "coupon-btn-bottom": {
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        "coupon-btn-text": {
            fontSize: 32,
            fontWeight: "bold",
            marginTop: 5,
            textAlign: "center",
            color: "#000000"
        },
        "coupon-btn-text-disabled": {
            color: "#666666"
        },
        "coupon-btn-icon": {
            width: 15,
            height: 25,
            marginLeft: 5,
            marginTop: 5
        },
        "state-img": {
            position: "absolute",
            top: 0,
            left: 0,
            width: 290,
            height: 228
        }
    }, e.exports.template = {
        type: "div",
        classList: ["container"],
        children: [{
            type: "div",
            classList: ["wrapper"],
            style: {
                marginTop: function () {
                    return this.marginTop
                },
                marginRight: function () {
                    return this.marginRight
                },
                marginBottom: function () {
                    return this.marginBottom
                },
                marginLeft: function () {
                    return this.marginLeft
                },
                backgroundColor: function () {
                    return this.couponBgStyle
                }
            },
            children: [{
                type: "image",
                shown: function () {
                    return this.couponBgImage
                },
                attr: {
                    src: function () {
                        return this.couponBgImage
                    }
                },
                classList: ["coupon-bg"]
            }, {
                type: "image",
                classList: ["state-img"],
                attr: {
                    src: function () {
                        return this.stateImage
                    }
                }
            }, {
                type: "div",
                classList: ["coupon-rule"],
                events: {
                    click: "openUrl"
                },
                attr: {
                    href: function () {
                        return this.data.commonConfig.ruleLink
                    },
                    spmc: function () {
                        return this.spm
                    },
                    spmd: "rule"
                },
                children: [{
                    type: "image",
                    classList: ["rule-img"],
                    attr: {
                        src: function () {
                            return this.data.mobileThemeConfig.ruleImg
                        }
                    }
                }]
            }, {
                type: "div",
                classList: ["my-coupon"],
                events: {
                    click: "openUrl"
                },
                attr: {
                    href: "//pages.tmall.com/wow/marketing-tools/act/coupon-list",
                    spmc: function () {
                        return this.spm
                    },
                    spmd: "mine"
                },
                children: [{
                    type: "image",
                    classList: ["my-coupon-image"],
                    attr: {
                        src: function () {
                            return this.data.mobileThemeConfig.myCouponImg
                        }
                    }
                }]
            }, {
                type: "div",
                classList: ["coupon-main"],
                children: [{
                    type: "text",
                    classList: ["tips-text"],
                    style: {
                        color: function () {
                            return this.data.commonConfig.couponTipColor
                        }
                    },
                    attr: {
                        value: function () {
                            return this.data.commonConfig.couponTip
                        }
                    }
                }, {
                    type: "div",
                    classList: function () {
                        return ["coupon-btn", this.currentState.btnStatus]
                    },
                    style: {
                        backgroundColor: function () {
                            return this.btnBgColor
                        }
                    },
                    events: {
                        click: "handleClick"
                    },
                    children: [{
                        type: "text",
                        classList: function () {
                            return ["coupon-btn-top", "coupon-btn-top-" + this.currentState.btnStatus]
                        },
                        style: {
                            color: function () {
                                return this.btnTipColor
                            }
                        },
                        attr: {
                            value: function () {
                                return this.btnTips
                            }
                        }
                    }, {
                        type: "div",
                        classList: ["coupon-btn-bottom"],
                        children: [{
                            type: "text",
                            classList: function () {
                                return ["coupon-btn-text", "coupon-btn-text-" + this.currentState.btnStatus]
                            },
                            style: {
                                color: function () {
                                    return this.btnColor
                                }
                            },
                            attr: {
                                value: function () {
                                    return this.btnText
                                }
                            }
                        }, {
                            type: "image",
                            classList: ["coupon-btn-icon"],
                            shown: function () {
                                return this.btnArrowIcon
                            },
                            attr: {
                                src: function () {
                                    return this.btnArrowIcon
                                }
                            }
                        }]
                    }]
                }]
            }]
        }]
    }
});
;;
define("@weex-component/zebra-floor-recomm-entracne-d/weex", function (t, e, o) {
    o.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {},
                config: {},
                defaultConfig: {},
                spm: "",
                name: "",
                topFloorData: [],
                bottomFloorData: [],
                goldlog: ""
            }
        },
        created: function () {
            var t = this._app.zebraUtils;
            this.theme = t.theme.checkTheme(this.defaultTheme, this.theme), this.config = t.theme.checkConfig(this.defaultConfig, this.config), this.data.baseCfg = Object.assign({
                goldlog: "/dacu.1.1.1,H46747592"
            }, this.data.baseCfg), this.goldlog = this.data.baseCfg.goldlog;
            var e = this;
            this.getRecmmedData(function (t) {
                t.data && t.data.length > 0 ? e.renderTopFloor(t.data) : e.getBackupData("3766", function (t) {
                    t && e.renderTopFloor(t)
                }), t.moredata && t.moredata[0] && t.moredata[0].contents && t.moredata[0].contents.length > 0 ? e.renderBottomFloor(t.moredata[0]) : e.getBackupData("3767", function (t) {
                    t[0] && e.renderBottomFloor(t[0])
                })
            })
        },
        methods: {
            getRecmmedData: function (t) {
                var e = "068251",
                    o = {
                        api: "mtop.taobao.aladdin.service.AldRecommendService.act.recommend",
                        v: "1.0",
                        ecode: 0,
                        param: {
                            appId: e
                        }
                    };
                this._app.zebraUtils.network.mtop(this, o).then(function (o) {
                    t(o.data.resultValue[e])
                })["catch"](function (e) {
                    t({})
                })
            },
            getBackupData: function (t, e) {
                this._app.zebraUtils.network.fetch(this, {
                    url: "//tmall-rmc.oss-cn-hangzhou.aliyuncs.com/ALADDINBOTTOM/03711/" + t + "/data.jsonp",
                    method: "jsonp",
                    callback: "callback_03711_" + t
                }).then(function (t) {
                    e(t.data)
                })
            },
            renderTopFloor: function (t) {
                var e = (this._app.zebraUtils, this),
                    o = [],
                    i = 0;
                t.forEach(function (t, n) {
                    t.contents.forEach(function (t, e) {
                        t.spmd = "d" + i++
                    }), o.push({
                        bgImage: e.data.floorImage && e.data.floorImage[n] && e.data.floorImage[n].bgImage || "//img.alicdn.com/tps/TB17xxmLpXXXXXuapXXXXXXXXXX-350-468.jpg",
                        chanel: t.contents[0],
                        shop: t.contents.slice(1, 5)
                    })
                }), this.topFloorData = o, e._app.updateActions()
            },
            renderBottomFloor: function (t) {
                var e = (this._app.zebraUtils, this),
                    o = [],
                    i = 10;
                for (t.contents.forEach(function (t, e) {
                    t.spmd = "d" + i++
                }); t.contents.length >= 4;) o.push({
                    list: t.contents.splice(0, 4)
                });
                e.bottomFloorData = o, e._app.updateActions()
            },
            openUrl: function (t) {
                nativeLog("laiyi goldlog openUrl");
                var e = t.target;
                if (!e) throw new Error("Cant find currentTarget");
                var o = e.attr.href,
                    i = e.attr.spmc,
                    n = e.attr.spmd,
                    r = e.attr.trackinfo,
                    a = this.goldlog,
                    s = this._app.zebraUtils;
                o && i && n && s.url.openUrl(this, o, i, n),
                    a = a.split(","),
                    nativeLog("laiyi goldlog clk"),
                2 === a.length && s.tracker.goldlog(this, a[0], "CLK", r, a[1])
            },
            scrollappear: function (t) {
                var e = this._app.zebraUtils,
                    o = this.goldlog,
                    i = t.target.attr.trackinfo;
                o = o.split(","),
                    nativeLog("laiyi goldlog exp"),
                2 === o.length && e.tracker.goldlog(this, o[0], "EXP", i, o[1])
            }
        }
    }, o.exports.style = {
        "content-warpper": {
            paddingTop: 12,
            paddingBottom: 12
        },
        "floor-title": {
            height: 120
        },
        "top-content-wrapper": {
            height: 1920
        },
        floor: {
            marginLeft: 18,
            marginRight: 18,
            marginBottom: 12,
            height: 468
        },
        left: {
            position: "absolute",
            top: 0,
            left: 0,
            width: 350,
            height: 468,
            alignItems: "center"
        },
        "left-border": {
            width: 270,
            height: 340,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#ffffff",
            paddingTop: 10,
            paddingLeft: 10,
            marginTop: 68
        },
        "chanel-content": {
            width: 250,
            height: 320,
            backgroundColor: "#ffffff",
            alignItems: "center"
        },
        "chanel-title": {
            fontSize: 38,
            height: 40,
            lines: 1,
            fontWeight: "bold",
            marginTop: 30
        },
        "chanel-subtitle": {
            fontSize: 22,
            height: 24,
            lines: 1,
            marginTop: 15,
            marginBottom: 15
        },
        "chanel-image": {
            width: 180,
            height: 180
        },
        right: {
            marginLeft: 350,
            height: 468,
            backgroundColor: "#ffffff",
            flexDirection: "row",
            flexWrap: "wrap"
        },
        "shop-item": {
            width: 182,
            height: 234,
            alignItems: "center"
        },
        "shop-logo": {
            width: 84,
            height: 42,
            marginTop: 8
        },
        "shop-brand": {
            height: 42,
            marginTop: 8,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 28,
            lines: 1
        },
        "shop-title": {
            fontSize: 22,
            height: 24,
            lines: 1,
            marginTop: 10,
            marginBottom: 5
        },
        "shop-image": {
            width: 135,
            height: 135
        },
        "row-line": {
            width: 364,
            position: "absolute",
            top: 233,
            left: 0,
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderColor: "#000000"
        },
        "column-line": {
            height: 468,
            position: "absolute",
            top: 0,
            left: 181,
            borderStyle: "solid",
            borderRightWidth: 2,
            borderColor: "#000000"
        },
        "chanel-bg-image": {
            position: "absolute",
            width: 350,
            height: 468
        },
        "bottom-content-wrapper": {
            height: 460
        },
        "column-4-row": {
            marginBottom: 6,
            marginLeft: 15,
            marginRight: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        "column-4-item": {
            width: 174,
            height: 224,
            backgroundColor: "#ffffff",
            marginLeft: 3,
            marginRight: 3,
            flex: 1
        },
        "column-4-image": {
            position: "absolute",
            width: 140,
            height: 140,
            left: 17,
            bottom: 30
        },
        "column-4-title": {
            position: "absolute",
            textAlign: "center",
            lines: 1,
            top: 15,
            width: 150,
            fontSize: 24,
            height: 32,
            fontWeight: "bold",
            left: 12,
            zIndex: 5
        },
        "column-4-subtitle": {
            position: "absolute",
            textAlign: "center",
            width: 150,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 20,
            left: 12,
            lines: 1,
            borderRadius: 14,
            bottom: 12,
            color: "#ffffff",
            zIndex: 5
        },
        "column-4-logo": {
            position: "absolute",
            width: 84,
            height: 42,
            top: 10,
            left: 45,
            zIndex: 5
        }
    }, o.exports.template = {
        type: "div",
        classList: ["wrapper"],
        children: [{
            type: "div",
            classList: ["top-floor"],
            children: [{
                type: "image",
                classList: ["floor-title"],
                repeat: {
                    expression: function() { return [1,2,3] },
                    value: "testtest"
                },
                events: {
                    //appear: "scrollappear"
                },
                attr: {
                    src: function () {
                        return this.data.baseCfg.topTitle
                    }
                }
            }, {
                type: "div",
                classList: ["top-content-wrapper"],
                children: [{
                    type: "div",
                    classList: ["floor"],
                    repeat: {
                        expression: function () {
                            nativeLog('this.topFloorData = ', JSON.stringify(this.topFloorData))
                            //return [1]
                            return this.topFloorData
                        },
                        value: "floor"
                    },
                    events: {
                        appear: "scrollappear"
                    }
                }]
            }]
        }, {
            type: "div",
            classList: ["bottom-floor"],
            children: [{
                type: "image",
                classList: ["floor-title"],
                attr: {
                    src: function () {
                        return this.data.baseCfg.bottomTitle
                    }
                }
            }, {
                type: "div",
                classList: ["bottom-content-wrapper"],
                children: [{
                    type: "div",
                    classList: ["column-4-row"],
                    repeat: {
                        expression: function () {
                            return this.bottomFloorData
                        },
                        value: "row"
                    },
                    children: [{
                        type: "a",
                        classList: ["column-4-item"],
                        repeat: {
                            expression: function () {
                                return this.row.list
                            },
                            value: "item"
                        },
                        attr: {
                            href: function () {
                                return this.item.clickUrl
                            },
                            trackinfo: function () {
                                return this.item.clickTrackInfo
                            },
                            spmc: function () {
                                return this.spm
                            },
                            spmd: function () {
                                return this.item.spmd
                            }
                        },
                        events: {
                            click: "openUrl"
                        },
                        children: [{
                            type: "image",
                            classList: ["column-4-image"],
                            attr: {
                                imageQuality: "original",
                                src: function () {
                                    return this.item.picUrl
                                }
                            }
                        }, {
                            type: "image",
                            shown: function () {
                                return this.item.logoUrl
                            },
                            classList: ["column-4-logo"],
                            attr: {
                                src: function () {
                                    return this.item.logoUrl
                                }
                            }
                        }, {
                            type: "text",
                            shown: function () {
                                return !this.item.logoUrl
                            },
                            classList: ["column-4-title"],
                            style: {
                                color: function () {
                                    return this.data.baseCfg.theme
                                }
                            },
                            attr: {
                                value: function () {
                                    return this.item.title
                                }
                            }
                        }, {
                            type: "text",
                            classList: ["column-4-subtitle"],
                            style: {
                                backgroundColor: function () {
                                    return this.data.baseCfg.theme
                                }
                            },
                            attr: {
                                value: function () {
                                    return this.item.subtitle
                                }
                            }
                        }]
                    }]
                }]
            }]
        }]
    }
});
;;
define("@weex-component/zebra-rightnav/weex", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {
                    linkColor: "#353535",
                    curColor: "#cc0000",
                    backgroundColor: "#fafafa",
                    moreBorder: "#dddddd"
                },
                spm: "",
                titleList: [],
                selectedIndex: 0,
                isShow: !0,
                height: 84,
                isElevatorReady: !1
            }
        },
        created: function () {
            var t = this._app.zebraUtils;
            this.theme = t.checkTheme(this.defaultTheme, this.theme), t.env.isAndroid(this) && (this.isElevatorReady = !0), this.$on("appendCellsFinished", function () {
                this.isElevatorReady || setTimeout(function () {
                    this.isElevatorReady = !0
                }.bind(this), 500)
            }.bind(this)), this.$on("updateFloor", this.updateFloor), this.$on("updateSelectedIndex", this.updateSelectedIndex), this.initFloors()
        },
        methods: {
            initFloors: function () {
                function e() {
                    for (var t = o.dom.flattenDom(this._app.doc.body), i = [], n = !0, s = 0; s < t.length; s++) {
                        if (void 0 !== t[s].attr.elevatorready && t[s].attr.elevatorready === !1) {
                            n = !1;
                            break
                        }
                        t[s].attr.elevator && i.push({
                            title: t[s].attr.elevator,
                            id: t[s].attr.elevatorid,
                            index: s
                        })
                    }
                    n ? this.updateFloor(i) : a(e.bind(this), 200)
                }

                var i = t("@weex-module/timer"),
                    o = this._app.zebraUtils,
                    a = o.env.isTaobao(this) && i && i.setTimeout ? i.setTimeout : setTimeout,
                    n = o.env.isIOS(this) ? 200 : 500;
                a(e.bind(this), n)
            },
            getItems: function () {
                return this.logger("getItems = ", JSON.stringify(this.titleList)), this.titleList.map(function (t, e) {
                    return t.title.slice(0, 5)
                })
            },
            itemSelect: function (t) {
                this.logger("itemSelect = ", JSON.stringify(t)), this.selectedIndex = t.index, this.$dispatch("elevatorSelectedIndex", t.index)
            },
            updateSelectedIndex: function (t) {
                this.logger("updateSelectedIndex = ", JSON.stringify(t)), this.titleList.length > 0 && this.isElevatorReady && (this.selectedIndex = "undefined" != typeof t.index ? t.index : t.detail.index)
            },
            updateFloor: function (t) {
                this.logger("updateFloor = ", JSON.stringify(t)), t = t.detail ? t.detail : t, floors = this._app.zebraUtils.tool.isArray(t) ? t : [], this.titleList = floors, this.selectedIndex = 0, this.titleList.length <= 1 && (this.isShow = !1)
            },
            logger: function () {
            }
        }
    }, i.exports.style = {
        "tabheader": {
            "position": "sticky",
            "width": 750
        }
    }, i.exports.template = {
        "type": "tabheader",
        "shown": function () {
            return this.isShow
        },
        "classList": ["tabheader"],
        "attr": {
            "data": function () {
                return this.getItems()
            },
            "selectedIndex": function () {
                return this.selectedIndex
            }
        },
        "events": {
            "select": "itemSelect"
        },
        "style": {
            "color": function () {
                return this.theme.linkColor
            },
            "textColor": function () {
                return this.theme.linkColor
            },
            "textHighlightColor": function () {
                return this.theme.curColor
            },
            "backgroundColor": function () {
                return this.theme.backgroundColor
            },
            "height": function () {
                return this.height
            }
        }
    }
});
;;
define("@weex-component/shop-dynamic-190x233/item", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                theme: {},
                defaultTheme: {},
                spm: "",
                dataItem: {},
                dataTheme: {},
                descClass: "",
                schemaVersion: ""
            }
        },
        methods: {
            ready: function () {
                var t = this._app.zebraUtils;
                this.theme = t.theme.checkTheme(this.defaultTheme, this.theme), this._processData()
            },
            _processData: function () {
                var t = this._app.zebraConfig || {};
                "pre" === t.pageStatus ? this.dataItem.btnText = this.dataItem.btnText || "\u52a0\u5165\u8d2d\u7269\u8f66" : t.closeCustom ? this.dataItem.btnText = "\u7acb\u5373\u8d2d\u4e70" : this.dataItem.btnText = this.dataItem.btnText || "\u7acb\u5373\u8d2d\u4e70"
            },
            getCouponClass: function (t) {
                if (!t) return "has-not-coupon"
            },
            _getCoupon: function (t) {
                this._app.zebraUtils.data.getCoupon(this, t.target.attr.href)
            }
        }
    }, i.exports.style = {
        "item-bx": {
            width: 348,
            height: 620,
            marginLeft: 18,
            marginBottom: 18,
            backgroundColor: "#ffffff",
            position: "relative"
        },
        "thumb-link": {
            position: "relative"
        },
        pic: {
            width: 348,
            height: 428
        },
        "txt-size": {
            fontSize: 24,
            textAlign: "center",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            lines: 1
        },
        "widget-area": {
            position: "absolute",
            right: 0,
            top: 0
        },
        mark: {
            width: 60,
            height: 60,
            marginTop: 18
        },
        "shop-name": {
            position: "absolute",
            left: 0,
            bottom: 0,
            height: 32,
            width: 348,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
        "item-title-bg": {
            position: "absolute",
            left: 0,
            top: 0,
            width: 348,
            height: 32,
            backgroundColor: "#000000",
            opacity: .5
        },
        "title-bx": {
            width: 308,
            height: 32,
            overflow: "hidden"
        },
        "item-title": {
            color: "#ffffff",
            textAlign: "center",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        },
        "item-info-box": {
            paddingTop: 12,
            paddingRight: 18,
            paddingBottom: 72,
            paddingLeft: 18,
            height: 192
        },
        "item-info": {
            display: "flex",
            flexFlow: "column",
            alignItems: "center"
        },
        "item-logo": {
            width: 120,
            height: 60
        },
        "item-desc-box": {
            paddingLeft: 16,
            paddingRight: 16
        },
        "item-desc": {
            height: 32,
            width: 280,
            whiteSpace: "nowrap",
            overflow: "hidden",
            marginTop: 8,
            marginBottom: 8
        },
        "item-coupon": {
            display: "flex",
            flexDirection: "row",
            flexFlow: "row wrap",
            height: 58,
            flex: 1,
            borderWidth: 1,
            borderStyle: "dashed",
            alignItems: "center",
            textAlign: "center",
            marginRight: 18,
            overflow: "hidden"
        },
        "coupon-bg": {
            opacity: .1,
            position: "absolute",
            left: 0,
            top: 0,
            height: 58,
            flex: 1,
            width: 145
        },
        "coupon-txt": {
            width: 50,
            height: 58,
            borderRightWidth: 1,
            borderRightStyle: "dashed",
            justifyContent: "center"
        },
        pir: {
            width: 84
        },
        "item-btn-box": {
            display: "flex",
            flexDirection: "row",
            flexFlow: "row wrap",
            alignItems: "stretch",
            position: "absolute",
            left: 18,
            bottom: 12,
            width: 312,
            marginRight: 12
        },
        "item-btn": {
            color: "#ffffff"
        },
        "btn-bx": {
            flex: 1,
            color: "#ffffff",
            height: 60,
            textAlign: "center",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center"
        },
        "has-not-coupon": {
            width: 312
        }
    }, i.exports.template = {
        type: "div",
        classList: ["item-bx"],
        shown: function () {
            return this.dataItem.shopImgM || this.dataItem.shopImg
        },
        children: [{
            type: "div",
            classList: ["thumb-link"],
            children: [{
                type: "image",
                classList: ["pic"],
                attr: {
                    src: function () {
                        return this.dataItem.shopImgM || this.dataItem.shopImg
                    },
                    quality: "normal"
                }
            }, {
                type: "div",
                classList: ["shop-name"],
                shown: function () {
                    return this.dataItem.shopName
                },
                children: [{
                    type: "div",
                    classList: ["item-title-bg"]
                }, {
                    type: "div",
                    classList: ["title-bx"],
                    children: [{
                        type: "text",
                        classList: ["txt-size", "item-title"],
                        attr: {
                            value: function () {
                                return this.dataItem.shopName
                            }
                        }
                    }]
                }]
            }]
        }, {
            type: "div",
            classList: ["widget-area"],
            shown: function () {
                return this.dataItem.iconImg
            },
            children: [{
                type: "image",
                classList: ["mark"],
                attr: {
                    src: function () {
                        return this.dataItem.iconImg
                    },
                    quality: "normal"
                }
            }]
        }, {
            type: "div",
            classList: ["item-info-box"],
            children: [{
                type: "div",
                classList: ["item-info"],
                children: [{
                    type: "image",
                    classList: ["item-logo"],
                    shown: function () {
                        return this.dataItem.brandLogo
                    },
                    attr: {
                        src: function () {
                            return this.dataItem.brandLogo
                        },
                        quality: "normal"
                    }
                }, {
                    type: "div",
                    classList: ["item-desc-box"],
                    children: [{
                        type: "text",
                        classList: ["txt-size", "item-desc"],
                        style: {
                            color: function () {
                                return this.dataTheme.themeColor
                            }
                        },
                        attr: {
                            value: function () {
                                return this.dataItem.shopDesc
                            }
                        }
                    }]
                }]
            }, {
                type: "div",
                classList: ["item-btn-box"],
                children: [{
                    type: "div",
                    events: {
                        click: "_getCoupon"
                    },
                    shown: function () {
                        return this.dataItem.couponValue && this.dataItem.couponUrl
                    },
                    style: {
                        borderColor: function () {
                            return this.dataTheme.themeColor
                        },
                        color: function () {
                            return this.dataTheme.themeColor
                        }
                    },
                    classList: ["item-coupon"],
                    attr: {
                        href: function () {
                            return this.dataItem.couponUrl
                        }
                    },
                    children: [{
                        type: "div",
                        classList: ["coupon-txt"],
                        style: {
                            borderColor: function () {
                                return this.dataTheme.themeColor
                            }
                        },
                        children: [{
                            type: "text",
                            style: {
                                color: function () {
                                    return this.dataTheme.themeColor
                                }
                            },
                            classList: ["txt-size"],
                            attr: {
                                value: "\u5238"
                            }
                        }]
                    }, {
                        type: "text",
                        style: {
                            color: function () {
                                return this.dataTheme.themeColor
                            }
                        },
                        classList: ["txt-size", "pir"],
                        attr: {
                            value: function () {
                                return "\xa5 " + this.dataItem.couponValue
                            }
                        }
                    }, {
                        type: "div",
                        classList: ["coupon-bg"],
                        style: {
                            backgroundColor: function () {
                                return this.dataTheme.themeColor
                            }
                        }
                    }]
                }, {
                    type: "div",
                    classList: function () {
                        return ["btn-bx", this.getCouponClass(this.dataItem.couponValue)]
                    },
                    style: {
                        backgroundColor: function () {
                            return this.dataTheme.themeColor
                        }
                    },
                    children: [{
                        type: "text",
                        shown: function () {
                            return this.dataItem.btnText
                        },
                        classList: ["txt-size", "item-btn"],
                        attr: {
                            value: function () {
                                return this.dataItem.btnText
                            }
                        }
                    }]
                }]
            }]
        }]
    }
}), define("@weex-component/shop-dynamic-190x233/banner", function (t, e, i) {
    i.exports.style = {
        "item-banner": {
            width: 348,
            height: 620,
            marginLeft: 18,
            marginBottom: 18,
            overflow: "hidden"
        },
        "item-banner-img": {
            width: 610,
            height: 620,
            marginLeft: -131
        }
    }, i.exports.template = {
        type: "div",
        classList: ["item-banner"],
        children: [{
            type: "image",
            classList: ["item-banner-img"],
            attr: {
                src: function () {
                    return this.dataItem
                },
                quality: "normal"
            }
        }]
    }
}), define("@weex-component/shop-dynamic-190x233/title", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                dataTitle: {},
                theme: {},
                defaultTheme: {},
                spm: "",
                moduleId: "",
                title: ""
            }
        },
        methods: {
            ready: function () {
                var t = this._app.zebraUtils;
                this.theme = t.checkTheme(this.defaultTheme, this.theme)
            }
        }
    }, i.exports.style = {
        wrapper: {
            width: 750,
            position: "relative",
            color: "#353535",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        },
        title: {
            paddingLeft: 20,
            paddingRight: 20,
            fontSize: 36
        },
        line: {
            width: 50,
            height: 3
        },
        "bg-bx": {
            position: "absolute",
            left: 0,
            top: 0
        },
        "title-img": {
            width: 750
        }
    }, i.exports.template = {
        type: "div",
        style: {
            backgroundColor: function () {
                return this.dataTheme.bannermbColor
            },
            marginTop: function () {
                return this.dataTheme.bannersize
            }
        },
        children: [{
            type: "div",
            shown: function () {
                return !this.dataTitle.img
            },
            classList: ["wrapper"],
            style: {
                height: function () {
                    return this.dataConfig.mImgHeight
                }
            },
            children: [{
                type: "div",
                classList: ["bg-bx"],
                shown: function () {
                    return this.dataTheme.bannermbImg
                },
                children: [{
                    type: "image",
                    classList: ["title-img"],
                    style: {
                        height: function () {
                            return this.dataConfig.mImgHeight
                        }
                    },
                    attr: {
                        src: function () {
                            return this.dataTheme.bannermbImg
                        },
                        quality: "normal"
                    }
                }]
            }, {
                type: "div",
                classList: ["line"],
                style: {
                    backgroundColor: function () {
                        return this.dataTheme.bannercolor
                    }
                }
            }, {
                type: "text",
                classList: ["title"],
                style: {
                    color: function () {
                        return this.dataTheme.bannercolor
                    }
                },
                attr: {
                    value: function () {
                        return this.dataTitle.name
                    }
                }
            }, {
                type: "div",
                classList: ["line"],
                style: {
                    backgroundColor: function () {
                        return this.dataTheme.bannercolor
                    }
                }
            }]
        }, {
            type: "div",
            shown: function () {
                return this.dataTitle.img
            },
            children: [{
                type: "image",
                classList: ["title-img"],
                style: {
                    height: function () {
                        return this.dataConfig.mImgHeight
                    }
                },
                attr: {
                    src: function () {
                        return this.dataTitle.img
                    },
                    quality: "normal"
                }
            }]
        }]
    }
}), define("@weex-component/shop-dynamic-190x233/weex", function (t, e, i) {
    i.exports = {
        data: function () {
            return {
                data: {},
                shop: [],
                dispatchedFloorNum: 0,
                floorStatusList: [],
                dynamicData: [],
                elevatorready: !1,
                theme: {},
                defaultTheme: {
                    bannercolor: "#333",
                    bannersize: 18,
                    bannermbColor: "transparent",
                    bannerpaddingBottom: 0,
                    bannermbImg: "",
                    themeColor: "#ff1b50",
                    bgColor: "transparent",
                    size: 18
                },
                config: {},
                defaultConfig: {
                    mImgHeight: 50
                },
                cacheData: [],
                spm: "",
                descClass: "",
                schemaVersion: ""
            }
        },
        created: function () {
            var t = this._app.zebraUtils,
                e = this._app.zebraConfig;
            this.isZebraModule ? (this.theme = t.theme.checkTheme(this, this.defaultTheme, this.theme), this.config = t.theme.checkConfig(this.defaultConfig, this.config), e && e.backgroundData && e.backgroundData.enableBaseColor && (this.theme.themeColor = e.backgroundData.backgroundColor), this.getFloorDynamicData(this.data)) : this.pureRender()
        },
        methods: {
            pureRender: function () {
                var t = this;
                if (t.data instanceof Array) {
                    var e = t.data;
                    nativeLog(e);
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        t.shop.$set(i, Object.assign({}, n, {
                            data: n,
                            spm: t.spm,
                            theme: t.theme,
                            config: t.config
                        }))
                    }
                } else t.floorTitle = t.data.floorTitle
            },
            getFloorDynamicData: function (t) {
                var e = this,
                    i = e._app.zebraUtils.floorDynamic;
                t && t.floors && new i(e, {
                    useMtop: !0,
                    ossData: t.floors
                }).then(function (t) {
                    e.data.floors = t, e.$on("appendCellsFinished", function () {
                        e.data.floors && e.dispatchedFloorNum >= e.data.floors.length && (e.elevatorready = !0)
                    }.bind(e)), e._processData(t)
                })["catch"](function (t) {
                })
            },
            _processData: function (t) {
                if (t && t.length)
                    for (var e = 0; e < t.length; e++) this._processFloor(t[e], e)
            },
            _processFloor: function (t, e) {
                var i = this._app.zebraUtils.data.checkDynamicData(t),
                    n = this;
                i.isDynamic ? n._app.zebraUtils.data.dynamicData(n, t).then(function (i) {
                    t = i, n._processItem(t, e)
                }, function () {
                    n._processItem(t, e)
                }) : n._processItem(t, e)
            },
            _processItem: function (t, e) {
                this.createTitle(t, e), this.resetData(t, e), this.dispatchCell(e)
            },
            resetData: function (t, e) {
                t.shop && t.shop.splice || (t.shop = []), this.mergeBanner(t), this.setSpmd(t.shop)
            },
            createTitle: function (t, e) {
                if (t) return t.floorTitle = {
                    elevatorready: !0,
                    moduleId: this.moduleId + e,
                    name: t.name,
                    img: t.bannerImgUrlM,
                    spmd: "dtitle1",
                    spmc: this.spm + "-" + (e + 1),
                    bannerImgUrl: t.bannerImgUrl,
                    bannerImgUrlM: t.bannerImgUrlM,
                    bannerUrl: t.bannerUrl
                }, t
            },
            mergeBanner: function (t) {
                var e, i, n = t.randomItem;
                if (t && t.shop && !(t.shop <= 0)) {
                    t.customBannerMA && (e = t.customBannerMA[0] ? t.customBannerMA[0] : t.customBannerMA, t.shop.unshift(e)), t.customBannerMB && (i = t.customBannerMB[0] ? t.customBannerMB[0] : t.customBannerMB, t.shop.push(i));
                    for (var o = 0; o < t.shop.length; o++) {
                        var r = Math.floor(o % 15),
                            a = t.shop[o].shopImgM || t.shop[o].shopImg;
                        a || t.shop[o].bannerImg || t.shop.splice(o, 1), n && 0 !== o && o % 15 === 0 && n[r] && t.shop.splice(o - 1, 0, n[r])
                    }
                }
            },
            setSpmd: function (t) {
                for (var e = 0; e < t.length; e++) t[e].index = e, t[e].bannerImg ? 0 === e ? t[e].spmd = "dbanner0" : e === t.length - 1 ? t[e].spmd = "dbanner1" : t[e].spmd = "dbanner" + e : t[e].spmd = "d" + e + "1", t[e].data = t[e]
            },
            createCell: function (t) {
                var e = this,
                    i = 6,
                    n = [{
                        floorTitle: t.floorTitle
                    }];
                t.shop = t.shop || [], t.shop.forEach(function (t, e) {
                    e % i === 0 ? n.push([t]) : n[n.length - 1].push(t)
                });
                for (var o = 0; o < n.length; o++) n[o] = Object.assign({}, {
                    data: n[o],
                    name: e.name,
                    id: e.moduleId,
                    theme: e.theme,
                    config: e.config,
                    moduleId: e.moduleId,
                    spm: e.spm
                });
                return n
            },
            dispatchCell: function (t) {
                var e = this;
                e.floorStatusList[t] = {
                    ready: !0,
                    dispatched: !1
                };
                for (var i = e.data.floors, n = 0; n < e.floorStatusList.length; n++) {
                    var o = e.floorStatusList[n];
                    if (!o || !o.ready) break;
                    o.dispatched || (e.dispatchedFloorNum++, e.$dispatch("appendCells", {
                        index: e.index,
                        data: e.createCell(i[n])
                    }), o.dispatched = !0)
                }
            },
            openUrl: function (t) {
                var e = t.target;
                if (!e) throw new Error("Cant find currentTarget");
                var i = e.attr.href,
                    n = e.attr.spmc,
                    o = e.attr.spmd;
                if (i && n && o) {
                    var r = this._app.zebraUtils;
                    r.url.openUrl(this, i, n, o)
                }
            },
            elevatorTitleAppear: function (t) {
                var e = t.target,
                    i = this._app.elevatorLastScrollTime;
                (!i || Date.now() - i > 1500) && this.$dispatch("elevatorTitleAppear", e.attr)
            }
        }
    }, i.exports.style = {
        "floor-content": {
            width: 750,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "stretch"
        }
    }, i.exports.template = {
        type: "div",
        style: {
            backgroundColor: function () {
                return this.theme.bgColor
            }
        },
        children: [{
            type: "div",
            attr: {
                elevatorid: function () {
                    return this.moduleId
                },
                elevator: function () {
                    return this.name
                },
                elevatorready: function () {
                    return this.elevatorready
                }
            },
            shown: function () {
                return this.isZebraModule && !this.elevatorready
            }
        }, {
            type: "div",
            shown: function () {
                return this.floorTitle && this.floorTitle.name
            },
            attr: {
                elevator: function () {
                    return this.floorTitle.name
                },
                elevatorready: function () {
                    return this.floorTitle.elevatorready
                },
                elevatorid: function () {
                    return this.floorTitle.moduleId
                }
            },
            id: function () {
                return this.floorTitle.moduleId
            },
            children: [{
                type: "div",
                classList: ["floor-title"],
                events: {
                    click: "openUrl",
                    appear: "elevatorTitleAppear"
                },
                attr: {
                    href: function () {
                        return this.floorTitle.bannerUrl
                    },
                    spmc: function () {
                        return this.floorTitle.spmc
                    },
                    spmd: function () {
                        return this.floorTitle.spmd
                    },
                    moduleId: function () {
                        return this.floorTitle.moduleId
                    }
                },
                children: [{
                    type: "shop-dynamic-190x233/title",
                    attr: {
                        dataTitle: function () {
                            return this.floorTitle
                        },
                        dataTheme: function () {
                            return this.theme
                        },
                        dataConfig: function () {
                            return this.config
                        }
                    }
                }]
            }]
        }, {
            type: "div",
            classList: ["floor-content"],
            children: [{
                type: "div",
                repeat: {
                    expression: function () {
                        return this.shop
                    },
                    key: "k",
                    value: "v"
                },
                children: [{
                    type: "div",
                    shown: function () {
                        return this.v.bannerImg
                    },
                    events: {
                        click: "openUrl"
                    },
                    attr: {
                        href: function () {
                            return this.v.bannerUrl
                        },
                        spmc: function () {
                            return this.spm
                        },
                        spmd: function () {
                            return this.v.spmd
                        }
                    },
                    children: [{
                        type: "shop-dynamic-190x233/banner",
                        attr: {
                            dataItem: function () {
                                return this.v.bannerImg
                            }
                        }
                    }]
                }, {
                    type: "div",
                    events: {
                        click: "openUrl"
                    },
                    attr: {
                        href: function () {
                            return this.v.shopActUrl
                        },
                        spmc: function () {
                            return this.spm
                        },
                        spmd: function () {
                            return this.v.spmd
                        }
                    },
                    shown: function () {
                        return this.v.shopImgM || this.v.shopImg
                    },
                    children: [{
                        type: "shop-dynamic-190x233/item",
                        attr: {
                            dataItem: function () {
                                return this.v
                            },
                            dataTheme: function () {
                                return this.theme
                            },
                            dataConfig: function () {
                                return this.config
                            }
                        }
                    }]
                }]
            }]
        }]
    }
});
;

// scrollTo hack
var domModule = require('@weex-module/dom')
var keys = Object.keys(domModule)
registerModules({
    'dom': keys.concat('scrollToElement')
})

;
define('__space__/weex', function (require, exports, module) {
    module.exports = {
        data: function () {
            return {
                data: {
                    width: 750,
                    height: 0
                }
            }
        },
        template: {
            type: "div",
            style: {
                width: function () {
                    return this.data.width
                },
                height: function () {
                    return this.data.height
                }
            }
        }
    };
});

define('huanxin', function (require, exports, module) {
    ;
    module.exports = {
        data: function () {
            return {
                bgColor: 'transparent',
                paddingBottom: 0,
                currentCount: 0,
                renderCells: [],
                fakeTop: 0
            }
        },
        created: function () {
            this._app.zebraUtils = require('zebraUtils') || {}
            this._app.zebraConfig = require('zebraConfig') || {}
            this._app.zebraDoms = require('zebraDoms') || []
            this._app.systemConfig = require('systemConfig') || {}
            this._app.config = this.$getConfig()
            var zebraUtils = this._app.zebraUtils
            this._app.isH5 = zebraUtils.env.isWeb(this)
            this._app.isTmall = zebraUtils.env.isTmall(this)
            this._app.isTaobao = zebraUtils.env.isTaobao(this)
            this._app.Dynamic_NotEmptyData = true;
            this._app.config.pageSpm = [this._app.zebraConfig.spma, this._app.zebraConfig.spmb, '0', '0'].join('.')

            // setBackgroundColor
            if (this._app.zebraConfig.backgroundData && this._app.zebraConfig.backgroundData.backgroundColor) {
                this.bgColor = this._app.zebraConfig.backgroundData.backgroundColor;
            }

            // set title
            this._app.zebraUtils.navigator.setTitle(this, {
                title: this._app.zebraConfig.title
            });

            // set spm
            this.initSpm()

            // append floors
            var __doms = this._app.zebraDoms
            var elevatorIndex
            for (var i = 0; i < __doms.length; i++) {
                if (__doms[i].name === 'zebra-rightnav') {
                    var ii = i - 1
                    if (ii > 0) elevatorIndex = ii
                    break
                }
            }
            this.appendCells(elevatorIndex)

            // listen append cell
            var appendCount = 0
            var currentAppendCount = 0
            this.$on('appendCells', function (e) {
                e = e.detail ? e.detail : e
                var originData = e.data.slice(0) || []
                var onceCount = parseInt(e.onceCount, 10) || 5
                onceCount = onceCount < 1 ? originData.length : onceCount
                appendCount++
                if (elevatorIndex > e.index && zebraUtils.env.isIOS(this)) {
                    setTimeout(feed.bind(this), 100)
                } else {
                    feed.call(this)
                }

                function feed() {
                    var _d = originData.splice(0, onceCount)
                    var ary = this.renderCells.slice(0)
                    Array.prototype.push.apply(ary[e.index], _d)
                    this.renderCells = ary
                    if (originData.length > 0) {
                        setTimeout(feed.bind(this), 0)
                    } else {
                        currentAppendCount++
                    }

                    if (appendCount === currentAppendCount) {
                        this.fakeTop = (this.fakeTop === 0) ? 1 : 0
                        this.$broadcast('appendCellsFinished', {})
                    }
                }
            }.bind(this))

            // init elevator
            this.initElevatorMethods()

            // update bottom padding
            this.$on('updatePaddingBottom', function (e) {
                e = e.detail ? e.detail : e
                this.paddingBottom = parseInt(e, 10) || 0
            }.bind(this))

            // module communication
            this.$on('rootBroadcast', function (e) {
                e = e.detail ? e.detail : e
                var moduleName = typeof(e.moduleName) === 'string' ? e.moduleName : null
                var methodName = typeof(e.methodName) === 'string' ? e.methodName : null
                var data = e.data

                if (!moduleName || !methodName) {
                    nativeLog('floorBroadcast params error! moduleName, methodName is required!');
                    return
                }

                var doms = require('zebraDoms') || []
                var splitDoms = methodName.split(',')
                for (var i = 0; i < doms.length; i++) {
                    var dom = doms[i]

                    if (dom.name === moduleName || moduleName === '*') {
                        var el = this.$vm(dom.zebraId)
                        el && typeof(el[methodName]) === 'function' && el[methodName].call(this, data)
                    }
                }
            }.bind(this))
        },
        methods: {
            initSpm: function () {
                var zebraUtils = this._app.zebraUtils
                // set spm
                if (this._app.isH5) {
                    if (window.lib && lib.mtop && lib.mtop.config) {
                        window.lib.mtop.config.prefix = 'api'
                        window.lib.mtop.config.subDomain = 'm'
                    }
                } else {
                    this.sendSpm()
                }
            },
            sendSpm: function (isBack) {
                var zebraUtils = this._app.zebraUtils
                var isBack = !!isBack
                var params = {
                    'spm-cnt': this._app.config.pageSpm,
                    weex: 1
                }
                var bundleUrl = this._app.config.bundleUrl || ''
                var pageName = bundleUrl + ''
                if (bundleUrl) {
                    var parseBundleUrl = new zebraUtils.url.parseUrl(this._app.config.bundleUrl)
                    var spmUrl = parseBundleUrl.params.spm || ''
                    if (spmUrl) {
                        params['spm-url'] = spmUrl
                    }

                    pageName = parseBundleUrl.origin + parseBundleUrl.pathname
                }

                if (isBack) {
                    params['isbk'] = 1
                }

                if (zebraUtils.env.isTmall(this)) {
                    zebraUtils.tracker.pageEnter(this, pageName, params)
                } else if (zebraUtils.env.isTaobao(this)) {
                    zebraUtils.tracker.commit(this, 'enter', pageName, '', params)
                }
            },
            initElevatorMethods: function () {
                var zebraUtils = this._app.zebraUtils
                this._app.elevatorLastScrollTime = 0
                this.$on('elevatorSelectedIndex', function (e) {
                    e = e.detail ? e.detail : e

                    // special hack. tabheader bug on ios
                    if (this._app.zebraUtils.tool.isPlainObject(e)) {
                        e = 0
                    }
                    e = String(e)

                    var doms = this._app.zebraUtils.dom.flattenDom(this._app.doc.body)
                    var index = 0
                    var floorIndex = 0

                    while (index < doms.length) {
                        var dom = doms[index]
                        if (dom.attr.elevatorid && e === String(floorIndex)) {
                            domEl = dom;
                            break
                        }
                        dom.attr.elevatorid && floorIndex++
                        index++
                    }

                    if (domEl) {
                        this.$call('dom', 'scrollToElement', domEl.ref, {
                            offset: -85
                        })
                    }

                    // 保存最后一次滚动的时间
                    this._app.elevatorLastScrollTime = Date.now();
                }.bind(this))
                this.$on('elevatorTitleAppear', function (e) {
                    e = e.detail ? e.detail : e
                    var doms = this._app.zebraUtils.dom.flattenDom(this._app.doc.body)
                    var index = 0
                    var floorIndex = 0
                    while (index < doms.length) {
                        var dom = doms[index]
                        if (dom.attr.elevatorid === e.moduleId) break
                        dom.attr.elevatorid && floorIndex++
                        index++
                    }

                    this.$broadcast('updateSelectedIndex', {
                        index: floorIndex
                    })
                }.bind(this));
                this.$on('elevatorUpdateFloor', function (floors) {
                    this.$broadcast('updateFloor', floors)
                }.bind(this))
            },
            appendCells: function (limit) {
                // append cells from client
                var originCells = this._app.zebraDoms
                limit = parseInt(limit, 10) || originCells.length
                if (this.currentCount < originCells.length) {
                    var onceCount = parseInt(limit, 10) || 3
                    var from = this.currentCount
                    var to = this.currentCount + onceCount
                    to = to < originCells.length ? to : originCells.length
                    for (var i = from; i < to; i++) {
                        this.renderCells.$set(i, [originCells[i]])
                    }
                    this.currentCount = to

                    if (to < originCells.length) {
                        setTimeout(this.appendCells.bind(this), 300)
                    }
                }
            },
            viewappear: function () {
                if (this.isBack === true) {
                    this.sendSpm(true)
                    this.isBack = false
                }
            },
            viewdisappear: function () {
                this.isBack = true
            }
        }
    }

    ;
    module.exports.style = {
        "floor": {
            "backgroundColor": "transparent"
        }
    }

        // fixed bug: https://aone.alibaba-inc.com/issue/8670032
    ;
    module.exports.template = {
        "type": "div",
        "style": {
            "backgroundColor": function () {
                return this.bgColor
            }
        },
        "events": {
            "viewappear": "viewappear",
            "viewdisappear": "viewdisappear"
        },
        "children": [
            __bottom_menu__, {
                "type": "list",
                "children": [{
                    "type": (function () {
                        var headerList = ['zebra-rightnav']
                        var _name = this.name || ''
                        if (_name && headerList.indexOf(_name) >= 0) {
                            return 'header'
                        } else {
                            return 'cell'
                        }
                    }),
                    "repeat": function () {
                        // make section in js and flatten section
                        var rows = []
                        for (var i = 0; i < this.renderCells.length; i++) {
                            rows.push.apply(rows, this.renderCells[i])
                        }

                        rows.push({
                            name: '__space__',
                            data: {
                                height: this.paddingBottom
                            },
                            isZebraModule: true
                        })

                        return rows
                    },
                    "append": "tree",
                    "children": [{
                        "id": (function () {
                            return this.zebraId
                        }),
                        "type": (function () {
                            return this.name + '/weex'
                        }),
                        "attr": {
                            "id": function () {
                                return this.zebraId
                            },
                            "index": function () {
                                return this.$index
                            },
                            "name": function () {
                                return this.name || ''
                            },
                            "data": function () {
                                return this.data || {}
                            },
                            "theme": function () {
                                return this.theme || {}
                            },
                            "config": function () {
                                return this.config || {}
                            },
                            "moduleId": function () {
                                return this.moduleId || ''
                            },
                            "spm": function () {
                                return this.spm || ''
                            },
                            "isZebraModule": function () {
                                return !!this.isZebraModule
                            }
                        }
                    }],
                    "style": {
                        "top": function () {
                            if (this.name === 'zebra-rightnav') {
                                return 0
                            } else {
                                return parseInt(this.fakeTop, 10) || 0
                            }
                        }
                    }
                }]
            }
        ]
    };
})

WXEnvironment = WXEnvironment || {
        weexVersion: ''
    }
var _isTmall = WXEnvironment.appName === 'tmall'
var _isTaobao = WXEnvironment.appName === 'TB'
var _isLegacyWeex = WXEnvironment.weexVersion.indexOf('1.') === 0


// require module
bootstrap('huanxin', {
    "downgrade": {
        "ios": {
            "osVersion": (function () {
                // ios10 mtop issues
                if (WXEnvironment.osVersion.indexOf('10.') === 0) return ">1.0.0"
                return "<9.0.0"
            })(),
            "appVersion": (function () {
                //                    if(_isTaobao) return "<=5.10.0"
                //var _isTmallWeex = WXEnvironment.appVersion.indexOf('5.21.1') !== 0
                //if(_isTmall && _isTmallWeex) return ">1.0"
                //                    if(_isTmall && WXEnvironment.appVersion !== '5.21.1') return ">1"
                return ""
            })(),
            "weexVersion": (function () {
                if (_isLegacyWeex) return ">=1.0.0"
                return "<0.6.1"
            })(),
            "deviceModel": []
        },
        "android": {
            "osVersion": "",
            "appVersion": (function () {
                if (_isTaobao) return "<5.10.0"
                if (_isTmall) return ">1.0.0"
                return ""
            })(),
            "weexVersion": (function () {
                if (_isLegacyWeex) return ">=1.0.0"
                return "<0.6.1"
            })(),
            "deviceModel": []
        }
    }
})