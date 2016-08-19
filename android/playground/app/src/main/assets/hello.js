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
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/f4dfeb5b510b6c25fe06c65979d46b7e", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "navigator",
	      "attr": {
	        "leftImageVisible": "visible",
	        "leftTitle": "Hello world!"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 100
	      },
	      "attr": {
	        "value": "Hello World."
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/f4dfeb5b510b6c25fe06c65979d46b7e", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/navigator", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            leftTitle: "WEEX",
	            rightTitle: "",
	            rightImageSrc: "http://gw.alicdn.com/mt/TB17Re.LpXXXXajXpXXXXXXXXXX-46-46.png",
	            rightImageVisible: 'visible',
	            leftImageVisible: 'hidden',
	            leftImageSrc: 'http://gw.alicdn.com/mt/TB1z6ilMVXXXXciXVXXXXXXXXXX-46-46.png',
	            leftImageWidth:'0px',
	            leftImageVisible:'0px',
	            leftImageHeight:'0px'
	        }},
	        created: function () {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            if (bundleUrl.indexOf('file') >= 0) {
	                this.rightImageVisible = 'hidden';
	            }

	            if(this.leftImageVisible=='visible'){
	                this.leftImageWidth='50px';
	                this.leftImageHeight='50px';
	            }
	        },
	        methods: {
	            refresh: function (event) {
	                __weex_require__("@weex-module/event").refresh(this.$getConfig().bundleUrl);
	            },
	            back: function (event) {
	                __weex_require__("@weex-module/event").back();
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
	      "type": "div",
	      "style": {
	        "flexDirection": "row",
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.leftImageSrc}
	          },
	          "style": {
	            "width": function () {return this.leftImageWidth},
	            "height": function () {return this.leftImageHeight},
	            "visibility": function () {return this.leftImageVisible}
	          },
	          "events": {
	            "click": "back"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "titleText"
	          ],
	          "style": {
	            "marginLeft": 20
	          },
	          "attr": {
	            "value": function () {return this.leftTitle}
	          }
	        }
	      ]
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
	            "src": function () {return this.rightImageSrc}
	          },
	          "style": {
	            "width": 50,
	            "height": 50,
	            "visibility": function () {return this.rightImageVisible}
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

/***/ }
/******/ ]);