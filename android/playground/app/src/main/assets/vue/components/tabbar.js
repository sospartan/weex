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

	
	  var getBaseURL = __webpack_require__(382).getBaseURL
	  module.exports = {
	    data: function () {
	      return {
	        dir: 'examples',
	        tabItems: [
	          {
	            index: 0,
	            title: 'tab1',
	            titleColor: '#000000',
	            icon: '',
	            image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
	            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
	            src: 'component/tabbar/tabbar-item.js?itemId=tab1',
	            visibility: 'visible',
	          },
	          {
	            index: 1,
	            title: 'tab2',
	            titleColor: '#000000',
	            icon: '',
	            image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
	            selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
	            src: 'component/tabbar/tabbar-item.js?itemId=tab2',
	            visibility: 'hidden',
	          },
	          {
	            index: 2,
	            title: 'tab3',
	            titleColor: '#000000',
	            icon: '',
	            image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
	            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
	            src: 'component/tabbar/tabbar-item.js?itemId=tab3',
	            visibility: 'hidden',
	          }
	        ],
	      }
	    },
	    components: {
	      tabbar: __webpack_require__(387)
	    },
	    created: function() {
	      var baseURL = getBaseURL(this)
	      for(var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        tabItem.src = baseURL + tabItem.src;
	      }
	    },
	    methods: {
	      tabBarOnClick: function (e) {
	        console.log('tabBarOnClick', e.index)
	      }
	    }
	  }

	module.exports.render = function() {with(this){return _h('div',{staticStyle:{flexDirection:"column"}},[_h('tabbar',{attrs:{"tabItems":tabItems},on:{"tabBarOnClick":tabBarOnClick}})])}}
	module.exports.el = "body"
	new Vue(module.exports)


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

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    props: {
	      tabItems: { default: [] },
	      selectedColor: { default: '#ff0000' },
	      unselectedColor: { default: '#000000' }
	    },
	    data: function () {
	      return {
	        selectedIndex: 0
	      }
	    },
	    components: {
	      tabitem: __webpack_require__(388)
	    },
	    created: function () {
	      this.select(this.selectedIndex);
	    },
	    methods: {
	      tabItemOnClick: function (e) {
	        this.selectedIndex = e.index;
	        this.select(e.index);
	        this.$emit('tabBarOnClick', e);
	      },
	      select: function(index) {
	        for(var i = 0; i < this.tabItems.length; i++) {
	          var tabItem = this.tabItems[i];
	          if(i == index){
	            tabItem.icon = tabItem.selectedImage;
	            tabItem.titleColor = this.selectedColor;
	            tabItem.visibility = 'visible';
	          }
	          else {
	            tabItem.icon = tabItem.image;
	            tabItem.titleColor = this.unselectedColor;
	            tabItem.visibility = 'hidden';
	          }
	        }
	      },
	    }
	  }

	module.exports.style = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["wrapper"]},[_l((tabItems),function(item){return _h('embed',{staticClass:["content"],style:{ visibility: item.visibility },attrs:{"src":item.src,"type":"weex"}})}),_h('div',{staticClass:["tabbar"],attrs:{"append":"tree"}},[_l((tabItems),function(item){return _h('tabitem',{attrs:{"index":item.index,"icon":item.icon,"title":item.title,"titleColor":item.titleColor},on:{"tabItemOnClick":tabItemOnClick}})})])])}}
	delete module.exports.el


/***/ },

/***/ 388:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      index: { default: 0 },
	      title: { default: '' },
	      titleColor: { default: '#000000' },
	      icon: { default: '' },
	      backgroundColor: { default: '#ffffff' }
	    },
	    methods: {
	      onclickitem: function (e) {
	        var params = {
	          index: this.index
	        };
	        this.$emit('tabItemOnClick', params);
	      }
	    }
	  }

	module.exports.style = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["container"],style:{ backgroundColor: backgroundColor },on:{"click":onclickitem}},[_m(0),_h('image',{staticClass:["tab-icon"],attrs:{"src":icon}}),_h('text',{staticClass:["tab-text"],style:{ color: titleColor }},[_s(title)])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('image',{staticClass:["top-line"],attrs:{"src":"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}})}}]
	delete module.exports.el


/***/ }

/******/ });