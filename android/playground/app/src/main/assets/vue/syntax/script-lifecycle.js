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

	
	  var initMessage
	  module.exports = {
	    data: function () {
	      return {
	        list: ['Lifecycle List']
	      }
	    },
	    init: function () {
	      initMessage = 'component init: nothing more happen even the data initialization'
	      console.log('init:', this.list)
	    },
	    created: function () {
	      this.list.push(initMessage)
	      this.list.push('component created: data observed')
	      console.log('created:', this.list)
	    },
	    mounted: function () {
	      this.list.push('component mounted: virtual dom generated')
	      console.log('mounted:', this.list)
	    }
	  }

	module.exports.style = {
	  "title": {
	    "fontSize": 48
	  }
	}
	module.exports.render = function() {with(this){return _h('div',[_l((list),function(value){return _h('text',{staticClass:["title"]},[_s(value)])})])}}
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);