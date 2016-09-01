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

	;__weex_define__("@weex-component/93fde76197eef0bbd809c2475a0a8514", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        methods: {
	            onrefresh: function (e) {
	                var self = this;
	                self.refresh_display = 'show';
	                self.$call('modal', 'toast', {
	                    'message': 'onrefresh'
	                });

	                // this.isrequest = 'yes'

	                // if (this.isrequest === 'yes') {
	                //           self = this;
	                // this.$call('timer', 'setTimeout', function () {
	                //   self.refresh_display = 'hide'

	                //   self.$call('modal', 'toast', {
	                //   'message': 'tttt'
	                // });

	                // this.isrequest = 'no'
	                // }, 3000);
	                // };

	                // this.isrequest = 'no'
	                self.refresh_display = 'hide';
	            },

	            onloading: function () {
	                var self = this;
	                self.loading_display = 'show';
	                self.$call('modal', 'toast', {
	                    'message': 'onloading'
	                });

	                // if (this.loading_display !== 'hide') {
	                // self = this;
	                //   this.$call('timer', 'setTimeout', function () {
	                //     self.loading_display = 'hide';
	                //   }, 3000);
	                // }

	                self.loading_display = 'hide';
	            },
	            addData: function () {
	                this.items.push({name: "jack"})
	            }
	        },
	        data: function () {return {
	            isrequest: 'yes',
	            items: [{name: "jyi"}, {name: "jgy"}, {name: "jyi"}, {name: "jgy"}, {name: "jyi"}, {name: "jgy"}, {name: "jyi"}, {name: "jgy"}, {name: "jyi"}, {name: "jgy"}, {name: "jyi"}, {name: "jgy"}],
	            refresh_display: 'hide',
	            loading_display: 'hide'
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "tc_support_maintitle",
	          "attr": {
	            "title": "TC_List_RefreshAndLoading"
	          }
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refresh_display}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "refresh-arrow"
	              ],
	              "shown": function () {return (this.refresh_display==='hide')},
	              "attr": {
	                "value": "↓ 下拉刷新"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "attr": {
	                "color": "red"
	              },
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "list refresh & loading"
	                  }
	                },
	                {
	                  "type": "text",
	                  "events": {
	                    "click": "addData"
	                  },
	                  "style": {
	                    "fontSize": 40,
	                    "color": "#FF0000",
	                    "textAlign": "center"
	                  },
	                  "attr": {
	                    "value": "test data [click add node]"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": function () {return this.items},
	          "style": {
	            "height": 100
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "fontSize": 50
	              },
	              "attr": {
	                "value": function () {return this.name}
	              }
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "loading"
	          ],
	          "attr": {
	            "display": function () {return this.loading_display}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "refresh-arrow"
	              ],
	              "shown": function () {return (this.loading_display==='hide')},
	              "attr": {
	                "value": "↑ 上拉刷新"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "attr": {
	                "color": "green"
	              },
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "list": {
	    "height": 810,
	    "borderWidth": 2,
	    "borderColor": "#FFFF00"
	  },
	  "font": {
	    "fontFamily": "Times New Roman",
	    "fontSize": 30
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": 140,
	    "backgroundColor": "#33b5e5",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow": {
	    "fontSize": 30,
	    "color": "#FFFF00",
	    "textAlign": "center"
	  },
	  "loading": {
	    "width": 750,
	    "height": 100,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "backgroundColor": "#33b5e5"
	  },
	  "indicator": {
	    "height": 100,
	    "width": 100,
	    "color": "#889967"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/93fde76197eef0bbd809c2475a0a8514", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);