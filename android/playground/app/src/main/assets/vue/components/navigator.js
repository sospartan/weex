// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	
	  var navigator = __weex_require_module__('navigator')
	  var getBaseURL = __webpack_require__(382).getBaseURL
	  module.exports = {
	    data: function () {
	      return {
	        navBarHeight: 88,
	        title: 'Navigator',
	        dir: 'examples',
	        baseURL: ''
	      }
	    },
	    components: {
	      panel: __webpack_require__(377),
	      navpage: __webpack_require__(383),
	      button: __webpack_require__(378)
	    },
	    created: function() {
	      this.$getConfig(function (config) {
	        var env = config.env;
	        if(env.platform == 'iOS'){
	          var scale = env.scale;
	          var deviceWidth = env.deviceWidth / scale;
	          this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	        }
	      }.bind(this));
	      this.baseURL = getBaseURL(this)
	    },
	    methods: {
	      naviBarLeftItemClick: function (e) {
	        modal.toast({ message: 'naviBarLeftItemClick', duration: 2 })
	      },
	      naviBarRightItemClick: function (e) {
	        modal.toast({ message: 'naviBarRightItemClick', duration: 2 })
	      },
	      push: function () {
	        var params = {
	          'url':  this.baseURL + 'vue/components/navigator.js?test=1',
	          'animated' : 'true',
	        }
	        navigator.push(params, function () {});
	      },
	      pop: function () {
	        var params = {
	          'url':  this.baseURL + 'vue/components/navigator.js?test=1',
	          'animated' : 'true',
	        }
	        navigator.pop(params, function () {});
	      },
	    }
	  }

	module.exports.render = function() {with(this){return _h('navpage',{attrs:{"dataRole":"none","height":navBarHeight,"title":title,"backgroundColor":"#ff5898","titleColor":"white","leftItemTitle":"More","leftItemColor":"white","rightItemSrc":"http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"},on:{"naviBarLeftItemClick":naviBarLeftItemClick,"naviBarRightItemClick":naviBarRightItemClick}},[_h('panel',{attrs:{"title":"push a new page"}},[_h('button',{attrs:{"type":"primary","size":"small","value":"push"},nativeOn:{"click":function($event){push($event)}}})]),_h('panel',{attrs:{"title":"pop to the last page"}},[_h('button',{attrs:{"type":"success","size":"small","value":"pop"},nativeOn:{"click":function($event){pop($event)}}})])])}}
	module.exports.el = "body"
	new Vue(module.exports)


/***/ },

/***/ 377:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'default' },
	      title: { default: '' },
	      paddingBody: { default: 20 },
	      paddingHead: { default: 20 },
	      dataClass: { default: '' }, // FIXME transfer class
	      border:{ default: 0 }
	    }
	  }

	module.exports.style = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}
	module.exports.render = function() {with(this){return _h('div',{class:['panel', 'panel-' + type],style:{ borderWidth: border }},[_h('text',{class:['panel-header', 'panel-header-' + type],style:{
	        paddingTop: paddingHead,
	        paddingBottom: paddingHead,
	        paddingLeft: paddingHead*1.5,
	        paddingRight: paddingHead*1.5
	      }},[_s(title)]),_h('div',{class:['panel-body', 'panel-body-' + type],style:{
	        paddingTop: paddingBody,
	        paddingBottom: paddingBody,
	        paddingLeft: paddingBody*1.5,
	        paddingRight: paddingBody*1.5
	      }},[_t("default")])])}}
	delete module.exports.el


/***/ },

/***/ 378:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'default' },
	      size: { default: 'large' },
	      value: { default: '' }
	    }
	  }

	module.exports.style = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{class:['btn', 'btn-' + type, 'btn-sz-' + size]},[_h('text',{class:['btn-txt', 'btn-txt-' + type, 'btn-txt-sz-' + size]},[_s(value)])])}}
	delete module.exports.el


/***/ },

/***/ 382:
/***/ function(module, exports) {

	exports.getBaseURL = function (vm) {
	  var bundleUrl = vm.$getConfig().bundleUrl;
	  var nativeBase;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/';
	  }
	  else if (isiOSAssets) {
	    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  }
	  else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(vm.$getConfig().bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/' + vm.dir + '/build/';
	  }
	  var h5Base = './index.html?page=./' + vm.dir + '/build/';
	  // in Native
	  var base = nativeBase;
	  if (typeof window === 'object') {
	    // in Browser or WebView
	    base = h5Base;
	  }
	  return base
	}


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    components: {
	      navbar: __webpack_require__(384)
	    },
	    props: {
	      dataRole: { default: 'navbar' },
	      backgroundColor: { default: 'black' },
	      height: { default: 88 },
	      title: { default: "" },
	      titleColor: { default: 'black' },
	      rightItemSrc: { default: '' },
	      rightItemTitle: { default: '' },
	      rightItemColor: { default: 'black' },
	      leftItemSrc: { default: '' },
	      leftItemTitle: { default: '' },
	      leftItemColor: { default: 'black' }
	    },
	    methods: {
	      naviBarRightItemClick: function (e) {
	        this.$emit('naviBarRightItemClick', e)
	      },
	      naviBarLeftItemClick: function (e) {
	        this.$emit('naviBarLeftItemClick', e)
	      }
	    }
	  }

	module.exports.style = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["wrapper"]},[_h('navbar',{attrs:{"dataRole":dataRole,"height":height,"backgroundColor":backgroundColor,"title":title,"titleColor":titleColor,"leftItemSrc":leftItemSrc,"leftItemTitle":leftItemTitle,"leftItemColor":leftItemColor,"rightItemSrc":rightItemSrc,"rightItemTitle":rightItemTitle,"rightItemColor":rightItemColor},on:{"naviBarRightItemClick":naviBarRightItemClick,"naviBarLeftItemClick":naviBarLeftItemClick}}),_h('div',{staticClass:["wrapper"],style:{ marginTop: height }},[_t("default")])])}}
	delete module.exports.el


/***/ },

/***/ 384:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      dataRole: { default: 'navbar' },
	      //导航条背景色
	      backgroundColor: { default: 'black' },
	      //导航条高度
	      height: { default: 88 },
	      //导航条标题 
	      title: { default: '' },
	      //导航条标题颜色
	      titleColor: { default: 'black' },
	      //右侧按钮图片
	      rightItemSrc: { default: '' },
	      //右侧按钮标题
	      rightItemTitle: { default: '' },
	      //右侧按钮标题颜色
	      rightItemColor: { default: 'black' },
	      //左侧按钮图片
	      leftItemSrc: { default: '' },
	      //左侧按钮标题
	      leftItemTitle: { default: '' },
	      //左侧按钮颜色
	      leftItemColor: { default: 'black' }
	    },
	    methods: {
	      onclickrightitem: function (e) {
	        this.$emit('naviBarRightItemClick');
	      },
	      onclickleftitem: function (e) {
	        this.$emit('naviBarLeftItemClick');
	      }
	    }
	  }

	module.exports.style = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["container"],style:{ height: height, backgroundColor: backgroundColor },attrs:{"dataRole":dataRole}},[(!rightItemSrc)?_h('text',{staticClass:["right-text"],style:{ color: rightItemColor },attrs:{"naviItemPosition":"right"},on:{"click":onclickrightitem}},[_s(rightItemTitle)]):_e(),(rightItemSrc)?_h('image',{staticClass:["right-image"],attrs:{"naviItemPosition":"right","src":rightItemSrc},on:{"click":onclickrightitem}}):_e(),(!leftItemSrc)?_h('text',{staticClass:["left-text"],style:{ color: leftItemColor },attrs:{"naviItemPosition":"left"},on:{"click":onclickleftitem}},[_s(leftItemTitle)]):_e(),(leftItemSrc)?_h('image',{staticClass:["left-image"],attrs:{"naviItemPosition":"left","src":leftItemSrc},on:{"click":onclickleftitem}}):_e(),_h('text',{staticClass:["center-text"],style:{ color: titleColor },attrs:{"naviItemPosition":"center"}},[_s(title)])])}}
	delete module.exports.el


/***/ }

/******/ });