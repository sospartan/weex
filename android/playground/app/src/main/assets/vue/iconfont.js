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
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	  var domModule = __weex_require_module__('dom');
	  module.exports = {
	    created: function() {
	      //目前支持ttf、woff文件，不支持svg、eot类型
	      domModule.addRule('font-face', {
	        'font-family': "iconfont1",
	        'src' : "url('iconfont.ttf')"
	      });
	      domModule.addRule('font-face', {
	        'font-family': "iconfont2",
	        'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
	      });
	      domModule.addRule('font-face', {
	        'font-family': "iconfont3",
	        'src': "url('http://at.alicdn.com/t/font_1469606522_9417143.woff')"
	      });
	      domModule.addRule('font-face', {
	        'font-family': "iconfont4",
	        'src': "url('file:///storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')"
	      });
	    }
	  }

	module.exports.style = {
	  "title1": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont1"
	  },
	  "title2": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont2"
	  },
	  "title3": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont3"
	  },
	  "title4": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont4"
	  }
	}
	module.exports.render = function() {with(this){return _m(0)}}
	module.exports.staticRenderFns = [function(){with(this){return _h('div',[_h('text',{staticClass:["title1"]},["Assets: "]),_h('text',{staticClass:["title2"]},["http ttf: "]),_h('text',{staticClass:["title3"]},["http woff: "]),_h('text',{staticClass:["title4"]},["file: "])])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);