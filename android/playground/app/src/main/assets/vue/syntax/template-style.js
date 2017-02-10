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

	
	  module.exports = {
	    data: function () {
	      return {
	        size: 32,
	        color: '#ff0000'
	      }
	    },
	    methods: {
	      update: function (e) {
	        this.size = 48
	        console.log('this.size', this.size)
	      }
	    }
	  }

	module.exports.render = function() {with(this){return _h('div',{on:{"click":update}},[_m(0),_h('text',{style:{ fontSize: size, color: color }},["Hello"])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticStyle:{fontSize:"48px",color:"#0000ff"}},["Hello"])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);