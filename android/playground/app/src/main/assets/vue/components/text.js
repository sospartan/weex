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
	    components: {
	      panel: __webpack_require__(377)
	    }
	  }

	module.exports.style = {
	  "txt": {
	    "marginBottom": 12,
	    "fontSize": 40
	  }
	}
	module.exports.render = function() {with(this){return _h('scroller',[_h('panel',{attrs:{"title":"color","type":"primary"}},[_m(0),_m(1),_m(2),_m(3),_m(4),_m(5)]),_h('panel',{attrs:{"title":"font-size","type":"primary"}},[_m(6),_m(7),_m(8)]),_h('panel',{attrs:{"title":"font-style","type":"primary"}},[_m(9),_m(10)]),_h('panel',{attrs:{"title":"font-weight","type":"primary"}},[_m(11),_m(12)]),_h('panel',{attrs:{"title":"text-decoration","type":"primary"}},[_m(13),_m(14),_m(15)]),_h('panel',{attrs:{"title":"text-align","type":"primary"}},[_m(16),_m(17),_m(18)]),_h('panel',{attrs:{"title":"text-overflow","type":"primary"}},[_m(19),_m(20),_m(21)]),_h('panel',{attrs:{"title":"line-height","type":"primary"}},[_m(22),_m(23),_m(24)])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["txt"]},["default is black"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{color:"#286090"}},["#286090"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{color:"#0f0"}},["#0f0"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{color:"red"}},["keyword"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{color:"rgb(238, 162, 54)"}},["rgb(238, 162, 54)"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{color:"rgba(238, 162, 54, 0.5)"}},["rgba(238, 162, 54, 0.5)"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontSize:"32px"}},["32"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontSize:"64px"}},["64"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontSize:"100px"}},["100"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontStyle:"normal"}},["normal"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontStyle:"italic"}},["italic"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontWeight:"normal"}},["normal"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{fontWeight:"bold"}},["bold"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textDecoration:"none"}},["none"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textDecoration:"underline"}},["underline"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textDecoration:"line-through"}},["line-through"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textAlign:"left"}},["left"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textAlign:"center"}},["center"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textAlign:"right"}},["right"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{lines:"1"}},["no text-overflow, no text-overflow"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textOverflow:"clip",width:"450px",lines:"1"}},["text-overflow: clip, text-overflow: clip"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{textOverflow:"ellipsis",width:"450px",lines:"1"}},["text-overflow: ellipsis, text-overflow: ellipsis"])}},
	function() {with(this){return _h('text',{staticClass:["txt"]},["no lineheight setting"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{lineHeight:"50"}},["lineheight 50"])}},
	function() {with(this){return _h('text',{staticClass:["txt"],staticStyle:{lineHeight:"80"}},[" lineheight 80"])}}]
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


/***/ }

/******/ });