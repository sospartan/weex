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
	          {key: 1, text: 'a'},
	          {key: 2, text: 'a'},
	          {key: 3, text: 'b'},
	          {key: 4, text: 'c'},
	          {key: 5, text: 'a'}
	        ],
	        flag: true
	      }
	    },
	    methods: {
	      update: function (e) {
	        // equals to `this.list.text = 'foo'`
	        // DO NOT USE: `this.list[2] = {key: 3, text: 'foo'}}`
	        Vue.set(this.list, 2, {key: 3, text: 'foo'})
	        console.log('this.list', this.list)
	      },
	      mutate: function (e) {
	        if (this.list.length % 2) {
	          this.list.push({key: 'x', text: 'bar'})
	        }
	        else {
	          this.list.pop()
	        }
	        console.log('this.list', this.list)
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
	module.exports.render = function() {with(this){return _h('div',[_m(0),_l((list),function(item,k,$index){return _h('text',{staticClass:["subtitle"],attrs:{"track-by":"item.key"}},[_s($index)+"-"+_s(item.text)])}),_h('text',{staticClass:["btn"],on:{"click":update}},["Update"]),_h('text',{staticClass:["btn"],on:{"click":mutate}},["Mutate"])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["title"]},["Track by"])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);