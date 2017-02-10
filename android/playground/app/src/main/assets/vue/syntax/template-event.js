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
	        name: 'Steve',
	        temp: 'Mike'
	      }
	    },
	    methods: {
	      update: function (e) {
	        this.setName('David')
	        console.log('setName', this.name)
	      },
	      setName: function (value) {
	        this.name = value
	        console.log('name', this.name)
	      }
	    }
	  }

	module.exports.style = {
	  "title": {
	    "fontSize": 48
	  },
	  "subtitle": {
	    "fontSize": 36
	  },
	  "btn": {
	    "fontSize": 36,
	    "textAlign": "center",
	    "color": "#FFFFFF",
	    "backgroundColor": "#808080",
	    "padding": 20,
	    "borderRadius": 5
	  }
	}
	module.exports.render = function() {with(this){return _h('div',[_h('text',{staticClass:["title"]},["Hello "+_s(name)]),_h('text',{staticClass:["btn"],on:{"click":update}},["Update 1"]),_h('text',{staticClass:["btn"],on:{"click":function($event){update($event)}}},["Update 1"]),_h('text',{staticClass:["btn"],on:{"click":function($event){setName(temp, $event)}}},["Update 2"]),_h('text',{staticClass:["btn"],on:{"click":function($event){setName('John')}}},["Update 3"])])}}
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);