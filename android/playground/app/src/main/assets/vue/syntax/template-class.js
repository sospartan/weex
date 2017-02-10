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
	    data: {
	      x: ''
	    },
	    methods: {
	      update: function (e) {
	        this.x = 'b'
	        console.log('x', this.x)
	      }
	    }
	  }

	module.exports.style = {
	  "a": {
	    "fontSize": 48
	  },
	  "b": {
	    "color": "#ff0000"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{on:{"click":update}},[_m(0),_m(1),_h('text',{class:['a', x]},["Hello"])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["a"]},["Hello"])}},
	function() {with(this){return _h('text',{staticClass:["b"]},["Hello"])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);