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

	
	  module.exports = {
	    data: function () {
	      return {
	        items: [
	          // common
	          {name: 'vue/syntax/hello-world', title: 'Hello World'},
	          {name: 'vue/style/index', title: 'Common Style'},
	          {name: 'vue/animation', title: 'Animation'},

	          // component
	          {name: 'vue/components/text', title: 'Text'},
	          {name: 'vue/components/image', title: 'Image'},
	          {name: 'vue/components/input', title: 'Input'},
	          {name: 'vue/components/scroller', title: 'Scroller'},
	          {name: 'vue/components/list', title: 'List'},
	          {name: 'vue/components/slider', title: 'Slider'},
	          {name: 'vue/components/a', title: 'A'},
	          {name: 'vue/components/video', title: 'Video'},
	          {name: 'vue/components/countdown', title: 'Countdown'},
	          {name: 'vue/components/marquee', title: 'Marquee'},
	          {name: 'vue/components/web', title: 'Web'},
	          {name: 'vue/components/navigator', title: 'Navigator'},
	          {name: 'vue/components/tabbar', title: 'Tabbar'},

	          // module
	          {name: 'vue/modules/instance-api', title: 'Instance API'},
	          {name: 'vue/modules/modal', title: 'Modal'},
	          {name: 'vue/modules/stream', title: 'Stream'},
	          {name: 'vue/modules/storage',title:'Storage'},
	          // {name: 'module/clipboard', title: 'Clipboard'}, // 0.8 , developing

	          // showcase
	          {name: 'vue/showcase/progress', title: 'Progress Bar'},
	          {name: 'vue/showcase/itemlist', title: 'List (Advanced)'},
	          {name: 'vue/showcase/calculator', title: 'Calculator'},
	          // {name: 'vue/showcase/minesweeper', title: 'Minesweeper'},
	          // {name: 'vue/showcase/ui', title: 'UI Gallery'},
	          // {name: 'vue/showcase/dropdown/dropdown-demo', title: 'Dropdown'}
	        ]
	      }
	    },
	    components: {
	      exampleList: __webpack_require__(389)
	    }
	  }

	module.exports.render = function() {with(this){return _h('example-list',{attrs:{"items":items,"dir":"examples"}})}}
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

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	
	  var getBaseURL = __webpack_require__(382).getBaseURL
	  module.exports = {
	    props: {
	      dir: {
	        default: 'examples'
	      }, // examples, test ...
	      items: {
	        default: [
	          {name: 'hello', title: 'Hello World', url: ''}
	        ]
	      }
	    },
	    components: {
	      exampleListItem: __webpack_require__(390)
	    },
	    created: function() {
	      var base = getBaseURL(this)
	      for (var i in this.items) {
	        var item = this.items[i];
	        if (!item.url) {
	          item.url = base + item.name + '.js';
	        }
	      }
	    }
	  }

	module.exports.render = function() {with(this){return _h('list',[_l((items),function(item){return _h('cell',{attrs:{"append":"tree"}},[_h('example-list-item',{attrs:{"title":item.title,"url":item.url}})])})])}}
	delete module.exports.el


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	
	  var event = __weex_require_module__('event')
	  module.exports = {
	    props: {
	      title: { default: '456' },
	      url: { default: '' }
	    },
	    components: {
	      listItem: __webpack_require__(391)
	    },
	    methods: {
	      redirect: function() {
	        event.openURL(this.url)
	      }
	    }
	  }

	module.exports.style = {
	  "item-txt": {
	    "fontSize": 48,
	    "color": "#555555"
	  }
	}
	module.exports.render = function() {with(this){return _h('list-item',{on:{"click":redirect}},[_h('text',{staticClass:["item-txt"]},[_s(title)])])}}
	delete module.exports.el


/***/ },

/***/ 391:
/***/ function(module, exports) {

	
	  module.exports = {
	    props:  {
	      bgColor: { default: '#ffffff' }
	    },
	    methods: {
	      click: function () {
	        this.$emit('click')
	      },
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	        // this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	        // this.bgColor = '#ffffff';
	      }
	    }
	  }

	module.exports.style = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["item"],style:{ backgroundColor: bgColor },on:{"click":click,"touchstart":touchstart,"touchend":touchend}},[_t("default")])}}
	delete module.exports.el


/***/ }

/******/ });