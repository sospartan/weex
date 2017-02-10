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
	          {title: 'A', url: 'a'},
	          {title: 'B', url: 'b'},
	          {title: 'C', url: 'c'}
	        ]
	      }
	    },
	    components: {
	      item: __webpack_require__(406)
	    }
	  }

	module.exports.render = function() {with(this){return _h('list',[_l((items),function(item){return _h('cell',[_h('text',[_s(item.title)]),_h('item',{attrs:{"title":'a'}})])})])}}
	module.exports.el = "body"
	new Vue(module.exports)


/***/ },

/***/ 406:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: ['url', 'title']
	  }

	module.exports.style = {
	  "item-txt": {
	    "fontSize": 48,
	    "color": "#555555"
	  }
	}
	module.exports.render = function() {with(this){return _h('text',{staticClass:["item-txt"]},[_s(title)])}}
	delete module.exports.el


/***/ }

/******/ });