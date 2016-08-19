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

	;__weex_define__("@weex-component/a5c90372c0585acda7cc1e2bb509d37e", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            leftTitle: "WEEX",
	            rightTitle: "",
	            src: "http://gw.alicdn.com/mt/TB17Re.LpXXXXajXpXXXXXXXXXX-46-46.png"
	        }},
	        methods: {
	            refresh: function (event) {
	                __weex_require__("@weex-module/event").refresh();
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "acontent"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": function () {return this.leftTitle}
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "row",
	        "alignItems": "center",
	        "justifyContent": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.rightTitle}
	          }
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.src}
	          },
	          "style": {
	            "width": 50,
	            "height": 50
	          },
	          "events": {
	            "click": "refresh"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "acontent": {
	    "backgroundColor": "#3F51B5",
	    "padding": 20,
	    "height": 90,
	    "width": 750,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "title": {
	    "fontSize": 40,
	    "color": "#FFFFFF"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/a5c90372c0585acda7cc1e2bb509d37e", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);