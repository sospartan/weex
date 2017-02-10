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
	        list: [
	          'a',
	          'b',
	          'c',
	          'd',
	          'e'
	        ],
	        list2: [
	          {text: 'a'},
	          {text: 'b'},
	          {text: 'c'},
	          {text: 'd'},
	          {text: 'e'}
	        ]
	      }
	    }
	  }

	module.exports.style = {
	  "title": {
	    "fontSize": 48
	  },
	  "subtitle": {
	    "fontSize": 36
	  }
	}
	module.exports.render = function() {with(this){return _h('div',[_m(0),_l((list),function(item){return _h('text',{staticClass:["subtitle"]},[_s(item)])}),_m(1),_l((list),function(i,v){return _h('text',{staticClass:["subtitle"]},[_s(i)+"-"+_s(v)])}),_m(2),_l((list2),function(item,k,index){return _h('text',{staticClass:["subtitle"]},["> "+_s(index)+"-"+_s(item.text)])})])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["title"]},["Custom item"])}},
	function() {with(this){return _h('text',{staticClass:["title"]},["Custom key and item"])}},
	function() {with(this){return _h('text',{staticClass:["title"]},["Array of Object"])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);