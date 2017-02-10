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
	        x: 1,
	        y: 2
	      }
	    },
	    methods: {
	      foo: function () {
	        console.log('foo')
	      },
	      test: function () {

	        // access data/props
	        console.log(this.x)

	        // access computed
	        console.log(this.z)

	        // call methods
	        this.foo()

	        // get config
	        console.log(this.$getConfig())

	        // listen and fire component events
	        this.$emit('custom')
	        this.$on('custom', this.foo)
	        this.$off('custom', this.foo)

	        // // parent component and sub components
	        // this.$parent.$emit('custom')
	        // this.$refs['sub'].$emit('custom')

	        // // find element
	        // var dom = __weex_require_module__('dom')
	        // dom.scrollToElement(this.$el('title'), {offset: 0})
	      }
	    },
	    computed: {
	      z: function () {
	        return this.x + this.y
	      }
	    },
	    mounted: function () {
	      this.test()
	    }
	  }

	module.exports.style = {
	  "title": {
	    "fontSize": 48
	  }
	}
	module.exports.render = function() {with(this){return _m(0)}}
	module.exports.staticRenderFns = [function(){with(this){return _h('div',[_h('text',{staticClass:["title"],attrs:{"id":"title"}},["Please check out the source code."])])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ }
/******/ ]);