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

	;__weex_define__("@weex-component/dc1fd25131d107a8221d14fe02b6d873", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            leftTitle: "WEEX",
	            rightTitle: "",
	            src: "http://gw.alicdn.com/mt/TB17Re.LpXXXXajXpXXXXXXXXXX-46-46.png",
	            imageVisible: 'visible'
	        }},
	        created: function () {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            console.log("navigator:" + bundleUrl);
	            if (bundleUrl.indexOf('file') >= 0) {
	                this.imageVisible = 'hidden';
	                console.log("into--[indexof]")
	            }else{
	                this.imageVisible='visible';
	                console.log("into--[else]")
	            }
	            console.log("navigator:" + this.imageVisible);
	            console.log("navigator file:" + bundleUrl.indexOf('file'));
	            console.log("navigator ip:" + bundleUrl.indexOf('your_current_IP'));


	        },
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
	    "navigator"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "titleText"
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
	            "titleText"
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
	            "height": 50,
	            "visibility": function () {return this.imageVisible}
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
	  "navigator": {
	    "backgroundColor": "#3F51B5",
	    "padding": 20,
	    "height": 90,
	    "width": 750,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "titleText": {
	    "fontSize": 40,
	    "color": "#FFFFFF"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/dc1fd25131d107a8221d14fe02b6d873", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);