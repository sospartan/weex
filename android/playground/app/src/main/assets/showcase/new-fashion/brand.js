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

	__webpack_require__(265)
	var __weex_template__ = __webpack_require__(266)
	var __weex_style__ = __webpack_require__(267)
	var __weex_script__ = __webpack_require__(268)

	__weex_define__('@weex-component/81fdd9b8b8bce1b304791aba10e15462', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/81fdd9b8b8bce1b304791aba10e15462',undefined,undefined)

/***/ },

/***/ 260:
/***/ function(module, exports) {

	module.exports = {
	  "type": "image",
	  "style": {
	    "width": function () {return this.width},
	    "height": function () {return this.height}
	  },
	  "attr": {
	    "src": function () {return this.src},
	    "imageQuality": function () {return this.quality}
	  },
	  "events": {
	    "click": "_clickHandler"
	  }
	}

/***/ },

/***/ 261:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    quality: 'normal',
	    width: 0,
	    height: 0,
	    src: '',
	    href: '',
	    spmc: 0,
	    spmd: 0
	  }},
	  methods: {
	    ready: function ready() {},
	    _clickHandler: function _clickHandler() {
	      this.$call('modal', 'toast', {
	        message: 'click',
	        duration: 1
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(260)
	var __weex_script__ = __webpack_require__(261)

	__weex_define__('@weex-component/banner', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },

/***/ 263:
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "container",
	      "shown": function () {return this.direction==='row'},
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.ds},
	          "style": {
	            "width": function () {return this.width},
	            "height": function () {return this.height},
	            "marginLeft": function () {return this.space}
	          },
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "width": function () {return this.width},
	                "height": function () {return this.height},
	                "src": function () {return this.img},
	                "href": function () {return this.url}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "container",
	      "shown": function () {return this.direction==='column'},
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.ds},
	          "style": {
	            "width": function () {return this.width},
	            "height": function () {return this.height},
	            "marginTop": function () {return this.space}
	          },
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "width": function () {return this.width},
	                "height": function () {return this.height},
	                "src": function () {return this.img},
	                "href": function () {return this.url}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 264:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    space: 0,
	    width: 0,
	    height: 0,
	    spmc: 0,
	    spmdprefix: '',
	    ds: []
	  }},
	  methods: {
	    ready: function ready() {
	      var self = this;
	      var ds = self.ds;
	      var length = ds.length;
	      for (var i = 0; i < length; i++) {
	        var item = ds[i];
	        item.index = i;
	        item.space = i % length === 0 ? 0 : self.space;
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(262)
	var __weex_template__ = __webpack_require__(263)
	var __weex_script__ = __webpack_require__(264)

	__weex_define__('@weex-component/banners', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },

/***/ 266:
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "shown": function () {return this.ds.floorTitle},
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "src": function () {return this.ds.floorTitle}
	      }
	    },
	    {
	      "type": "container",
	      "style": {
	        "marginLeft": 4,
	        "marginRight": 4
	      },
	      "children": [
	        {
	          "type": "banners",
	          "attr": {
	            "ds": function () {return this.bannerItems},
	            "direction": "column",
	            "width": function () {return this.NUMBER_742},
	            "height": function () {return this.NUMBER_230},
	            "space": function () {return this.NUMBER_4}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 267:
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "width": 750,
	    "height": 100
	  },
	  "container": {
	    "marginBottom": 4,
	    "backgroundColor": "#C0BABC"
	  }
	}

/***/ },

/***/ 268:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    NUMBER_742: 742,
	    NUMBER_230: 230,
	    NUMBER_4: 4
	  }},
	  methods: {
	    ready: function ready() {
	      var self = this;
	      self._randomBrand();
	    },
	    _randomBrand: function _randomBrand() {
	      var self = this;
	      var bannerItems = self.ds.bannerItems;
	      bannerItems = bannerItems.sort(function () {
	        return Math.random() - 0.5;
	      });
	      self.bannerItems = bannerItems.slice(0, 8);
	      for (var i = 0; i < bannerItems.length; i++) {
	        var item = bannerItems[i];
	        if (i % 2 === 0) {
	          item.img = item.leftImg;
	          item.url = item.rightUrl;
	        } else {
	          item.img = item.rightImg;
	          item.url = item.rightUrl;
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });