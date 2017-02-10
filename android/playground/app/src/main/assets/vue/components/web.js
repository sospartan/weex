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

	
	  var webview = __weex_require_module__('webview');
	  module.exports = {
	    components: {
	      button: __webpack_require__(378)
	    },
	    methods: {
	      goback: function() {
	        var el = this.$refs.webview
	        webview.goBack(el)
	      },
	      goforward: function() {
	        var el = this.$refs.webview
	        webview.goForward(el)
	      },
	      refresh: function() {
	        var el = this.$refs.webview
	        webview.reload(el)
	      },
	      startload: function(e) {
	      },
	      finishload: function(e) {
	      },
	      failload: function(e) {
	      }
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
	    "marginBottom": 70
	  },
	  "toolbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 70
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["wrapper"]},[_h('div',{staticClass:["toolbar"],attrs:{"append":"tree"}},[_h('button',{staticStyle:{marginLeft:"30px",width:"210px",marginTop:"5px",marginBottom:"5px"},attrs:{"type":"primary","size":"small","value":"back"},nativeOn:{"click":function($event){goback($event)}}}),_h('button',{staticStyle:{marginLeft:"30px",width:"210px",marginTop:"5px",marginBottom:"5px"},attrs:{"type":"primary","size":"small","value":"forward"},nativeOn:{"click":function($event){goforward($event)}}}),_h('button',{staticStyle:{marginLeft:"30px",width:"210px",marginTop:"5px",marginBottom:"5px"},attrs:{"type":"primary","size":"small","value":"refresh"},nativeOn:{"click":function($event){refresh($event)}}})]),_h('web',{ref:"webview",staticClass:["content"],attrs:{"src":"http://alibaba.github.io/weex/index.html"},on:{"pagestart":startload,"pagefinish":finishload,"error":failload}})])}}
	module.exports.el = "body"
	new Vue(module.exports)


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


/***/ }

/******/ });