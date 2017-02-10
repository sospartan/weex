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
	    // // import sub components
	    // components: {
	    //   item: require('./components/sub.vue')
	    // },

	    // // for sub component only
	    // props: ['a', 'b'],

	    // for root component only
	    data: {
	      x: 1,
	      y: 2
	    },
	    // // for sub component only
	    // data: function () {
	    //   return {
	    //     x: 1,
	    //     y: 2
	    //   }
	    // }

	    methods: {
	      foo: function () {
	        console.log('foo')
	      }
	    },

	    computed: {
	      z: function () {
	        return this.x + this.y
	      }
	    },

	    init: function () {},
	    created: function () {},
	    mounted: function () {}
	  }

	module.exports.style = {
	  "title": {
	    "fontSize": 48
	  }
	}
	module.exports.render = function() {with(this){return _m(0)}}
	module.exports.staticRenderFns = [function(){with(this){return _h('div',[_h('text',{staticClass:["title"]},["Please check out the source code."])])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);