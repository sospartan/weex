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

	
	  // // if this is a sub component and the parent component could set `firstName` and `lastName` by:
	  // // `<subcomponent first-name="John" last-name="Smith"></subcomponent>`
	  // // but the `date` won't be changed from parent component
	  // module.exports = {
	  //   props: ['firstName', 'lastName'],
	  //   data: function () {
	  //     return {
	  //       date: Date.now()
	  //     }
	  //   }
	  // }

	  // // more `props` formats like
	  // module.exports = {
	  //   props: {
	  //     firstName: {
	  //       default: 'John'
	  //     },
	  //     lastName: {
	  //       type: String,
	  //       default: 'Smith'
	  //     }
	  //   },
	  //   data: function () {
	  //     return {
	  //       date: Date.now()
	  //     }
	  //   }
	  // }

	  module.exports = {
	    data: function () {
	      return {
	        firstName: 'John',
	        lastName: 'Smith',
	        date: Date.now()
	      }
	    },
	    methods: {
	      update: function () {
	        this.today = '2016-01-01'
	        console.log('today:', this.today)
	      }
	    },
	    computed: {
	      fullName: function () {
	        return this.firstName + ' ' + this.lastName
	      },
	      today: {
	        get: function () {
	          return new Date(this.date).toDateString()
	        },
	        set: function (v) {
	          this.date = Date.parse(v)
	        }
	      }
	    }
	  }

	module.exports.style = {
	  "title": {
	    "fontSize": 48
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{on:{"click":update}},[_h('text',{staticClass:["title"]},[_s(firstName)]),_h('text',{staticClass:["title"]},[_s(lastName)]),_h('text',{staticClass:["title"]},[_s(fullName)]),_h('text',{staticClass:["title"]},[_s(today)])])}}
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);