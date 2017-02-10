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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	
	  var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
	  var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
	  module.exports = {
	    data: function () {
	      return {
	        eventCnt: 0,
	        togglePlayMsg: 'pause',
	        sliders: [
	          {
	            interval: 1000,
	            autoPlay: true,
	            sliderPages: [
	              {
	                items: [
	                  {
	                    image: img0,
	                    link: '//h5.m.taobao.com/1'
	                  },
	                  {
	                    image: img0,
	                    link: '//h5.m.taobao.com/1'
	                  }
	                ]
	              },
	              {
	                items: [
	                  {
	                    image: img1,
	                    link: '//h5.m.taobao.com/1'
	                  },
	                  {
	                    image: img1,
	                    link: '//h5.m.taobao.com/1'
	                  }
	                ]
	              },
	              {
	                items: [
	                  {
	                    image: img0,
	                    link: '//h5.m.taobao.com/1'
	                  },
	                  {
	                    image: img1,
	                    link: '//h5.m.taobao.com/1'
	                  }
	                ]
	              }
	            ]
	          },
	          {
	            interval: 3000,
	            autoPlay: true,
	            sliderPages: [
	              {
	                items: [
	                {
	                  image: img0,
	                  link: '//h5.m.taobao.com/1'
	                },
	                {
	                  image: img0,
	                  link: '//h5.m.taobao.com/1'
	                }
	                ]
	              },
	              {
	                items: [
	                {
	                  image: img1,
	                  link: '//h5.m.taobao.com/1'
	                },
	                {
	                  image: img1,
	                  link: '//h5.m.taobao.com/1'
	                }
	                ]
	              },
	              {
	                items: [
	                {
	                  image: img0,
	                  link: '//h5.m.taobao.com/1'
	                },
	                {
	                  image: img1,
	                  link: '//h5.m.taobao.com/1'
	                }
	                ]
	              }
	              ]
	            },
	            {
	              interval: 5000,
	              autoPlay: true,
	              sliderPages: [
	              {
	                items: [
	                {
	                  image: img0,
	                  link: '//h5.m.taobao.com/1'
	                },
	                {
	                  image: img0,
	                  link: '//h5.m.taobao.com/1'
	                }
	                ]
	              },
	              {
	                items: [
	                {
	                  image: img1,
	                  link: '//h5.m.taobao.com/1'
	                },
	                {
	                  image: img1,
	                  link: '//h5.m.taobao.com/1'
	                }
	                ]
	              },
	              {
	                items: [
	                {
	                  image: img0,
	                  link: '//h5.m.taobao.com/1'
	                },
	                {
	                  image: img1,
	                  link: '//h5.m.taobao.com/1'
	                }
	                ]
	              }
	              ]
	            }
	            ]
	      }
	    },
	    components: {
	      panel: __webpack_require__(377),
	      sliderPage: __webpack_require__(385)
	    },
	    methods: {
	      togglePlay: function() {
	        var autoPlay = this.sliders[0].autoPlay
	        autoPlay = !autoPlay
	        this.sliders[0].autoPlay = autoPlay
	        this.togglePlayMsg = autoPlay ? 'pause' : 'play'
	      },
	      handleSliderChange: function() {
	        var nowCnt = this.eventCnt + 1
	        this.eventCnt = nowCnt
	      },
	      setInterval1: function() {
	        this.sliders[0].interval = 1000;
	      },
	      setInterval3: function() {
	        this.sliders[0].interval = 3000;
	      },
	      setInterval5: function() {
	        this.sliders[0].interval = 5000;
	      }
	    }
	  };

	module.exports.style = {
	  "body": {
	    "backgroundColor": "#ffffff"
	  },
	  "slider": {
	    "flexDirection": "row",
	    "width": 690,
	    "height": 360
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 690,
	    "height": 420,
	    "top": 140,
	    "left": 240,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "rgb(40, 96, 144)"
	  }
	}
	module.exports.render = function() {with(this){return _h('scroller',{staticClass:["body"]},[_h('panel',{attrs:{"title":"auto-play","type":"primary"}},[_h('panel',{attrs:{"title":"auto-play = false","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[1].interval,"autoPlay":"false"}},[_m(0),_l((sliders[1].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])]),_h('panel',{attrs:{"title":"auto-play = true","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[0].interval,"autoPlay":sliders[0].autoPlay}},[_m(1),_l((sliders[0].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])])]),_h('panel',{attrs:{"title":'Event, ' + eventCnt + ' change',"type":"primary"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[0].interval,"autoPlay":sliders[0].autoPlay},on:{"change":handleSliderChange}},[_m(2),_l((sliders[0].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])]),_h('panel',{attrs:{"title":"Indicator","type":"primary"}},[_h('panel',{attrs:{"title":"default style","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[0].interval,"autoPlay":sliders[0].autoPlay},on:{"change":handleSliderChange}},[_m(3),_l((sliders[0].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])]),_h('panel',{attrs:{"title":"width & height","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[0].interval,"autoPlay":sliders[0].autoPlay}},[_m(4),_l((sliders[0].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])]),_h('panel',{attrs:{"title":"left & top","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[1].interval,"autoPlay":sliders[1].autoPlay}},[_m(5),_l((sliders[1].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])]),_h('panel',{attrs:{"title":"itemColor & itemSelectedColor","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[2].interval,"autoPlay":sliders[2].autoPlay}},[_m(6),_l((sliders[2].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])]),_h('panel',{attrs:{"title":"itemSize","padding-body":"0"}},[_h('slider',{staticClass:["slider"],attrs:{"append":"tree","interval":sliders[1].interval,"autoPlay":sliders[1].autoPlay}},[_m(7),_l((sliders[1].sliderPages),function(v){return _h('slider-page',{attrs:{"items":v.items}})})])])])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('indicator',{staticClass:["indicator"]})}},
	function() {with(this){return _h('indicator',{staticClass:["indicator"]})}},
	function() {with(this){return _h('indicator',{staticClass:["indicator"]})}},
	function() {with(this){return _h('indicator',{staticClass:["indicator"]})}},
	function() {with(this){return _h('indicator',{staticStyle:{itemColor:"#dddddd",width:"714",height:"460"}})}},
	function() {with(this){return _h('indicator',{staticClass:["indicator"],staticStyle:{top:"-140",left:"-240"}})}},
	function() {with(this){return _h('indicator',{staticClass:["indicator"],staticStyle:{itemSelectedColor:"rgb(217, 83, 79)"}})}},
	function() {with(this){return _h('indicator',{staticStyle:{itemColor:"#dddddd",itemSize:"40",top:"140",left:"180",width:"700",height:"380"}})}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ },

/***/ 377:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'default' },
	      title: { default: '' },
	      paddingBody: { default: 20 },
	      paddingHead: { default: 20 },
	      dataClass: { default: '' }, // FIXME transfer class
	      border:{ default: 0 }
	    }
	  }

	module.exports.style = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}
	module.exports.render = function() {with(this){return _h('div',{class:['panel', 'panel-' + type],style:{ borderWidth: border }},[_h('text',{class:['panel-header', 'panel-header-' + type],style:{
	        paddingTop: paddingHead,
	        paddingBottom: paddingHead,
	        paddingLeft: paddingHead*1.5,
	        paddingRight: paddingHead*1.5
	      }},[_s(title)]),_h('div',{class:['panel-body', 'panel-body-' + type],style:{
	        paddingTop: paddingBody,
	        paddingBottom: paddingBody,
	        paddingLeft: paddingBody*1.5,
	        paddingRight: paddingBody*1.5
	      }},[_t("default")])])}}
	delete module.exports.el


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    props: {
	      items: { default: [] }
	    },
	    components: {
	      sliderItem: __webpack_require__(386)
	    }
	  }

	module.exports.style = {
	  "slider-page": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 714,
	    "height": 420
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["slider-page"]},[_l((items),function(v){return _h('slider-item',{attrs:{"image":v.image,"link":v.link}})})])}}
	delete module.exports.el


/***/ },

/***/ 386:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      image: { default: '' },
	      link: { default: '' },
	    }
	  };

	module.exports.style = {
	  "slider-item": {
	    "width": 348,
	    "height": 400
	  }
	}
	module.exports.render = function() {with(this){return _h('image',{staticClass:["slider-item"],attrs:{"src":image}})}}
	delete module.exports.el


/***/ }

/******/ });