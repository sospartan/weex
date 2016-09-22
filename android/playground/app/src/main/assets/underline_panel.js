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

	;__weex_define__("@weex-component/744b10ba7bbb8fdb0f00c5c074e136ff", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            left: "",
	            right: "",
	            src: "",
	            rightColor:"black"
	        }},
	        methods: {}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "panel"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.left}
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "alignItems": "center",
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "marginRight": 10,
	            "color": function () {return this.rightColor}
	          },
	          "attr": {
	            "value": function () {return this.right}
	          }
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.src}
	          },
	          "style": {
	            "height": 40,
	            "width": 40
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "flexDirection": "row",
	    "padding": 10,
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#D3D3D3"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/744b10ba7bbb8fdb0f00c5c074e136ff", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);