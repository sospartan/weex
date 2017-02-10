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

	
	  module.exports = {
	    data: function () {
	      return {
	        marquee: {
	          height: 30,
	          duration: 1500,
	          interval: 2000,
	          list: [
	            {text: 'Introducing Bots on Messenger'},
	            {text: 'Capturing 3D 360-Stereo VR Video'},
	            {text: 'The Future of Video on Facebook'},
	            {text: 'Announcing Vue.js 2.0'},
	            {text: 'Not Your Average Virtual-DOM'},
	            {text: 'Templates, JSX, or Hyperscript?'}
	          ]
	        }
	      }
	    },
	    components: {
	      panel: __webpack_require__(377),
	      marquee: __webpack_require__(381)
	    },
	    methods: {
	      marqueeChange: function (e) {
	        console.log(e)
	      }
	    }
	  }

	module.exports.render = function() {with(this){return _h('scroller',[_h('panel',{attrs:{"title":"Marquee","type":"primary"}},[_h('marquee',{style:{
	          width: 700,
	          height: marquee.height * 2,
	          backgroundColor: 'rgb(223, 240, 216)',
	          borderRadius: 8,
	          paddingLeft: 10,
	          paddingRight: 10
	        },attrs:{"step":marquee.height * 2,"count":marquee.list.length,"interval":marquee.interval,"duration":marquee.duration},on:{"change":marqueeChange}},[_l((marquee.list),function(item){return _h('div',{style:{
	            height: marquee.height * marquee.length,
	            paddingTop: marquee.height * 0.5,
	            paddingBottom: marquee.height * 0.5,
	            overflow: 'hidden'
	          }},[_h('text',{style:{
	              height: marquee.height,
	              color: 'rgb(60, 118, 61)',
	              fontSize: 28
	            }},[_s(item.text)])])})])])])}}
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

/***/ 381:
/***/ function(module, exports) {

	
	  var animation = __weex_require_module__('animation')

	  module.exports = {
	    props: {
	      step: { default: 0 },
	      count: { default: 0 },
	      index: { default: 1 },
	      duration: { default: 0 },
	      interval: { default: 0 },
	      outofview: { default: false }
	    },
	    created: function () {
	      if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	        this.run()
	      }
	    },
	    methods: {
	      run: function () {
	        if (this.outofview) {
	          setTimeout(this.run.bind(this), this.interval)
	        } else {
	          setTimeout(function () {
	            this.animation(this.run.bind(this))
	          }.bind(this), this.interval)
	        }
	      },
	      animation: function (cb) {
	        var offset = -this.step * this.index;
	        animation.transition(this.$refs.anim.ref, {
	          styles: {
	            transform: 'translateY(' + offset + 'px) translateZ(0)'
	          },
	          timingFunction: 'ease',
	          duration: this.duration
	        }, function () {
	          this.index = (this.index + 1) % (this.count);
	          this.$emit('change', {
	            index: this.index,
	            count: this.count
	          });
	          cb && cb();
	        }.bind(this));
	      },
	      appeared: function() {
	        this.outofview = false
	      },
	      disappeared: function() {
	        this.outofview = true
	      }
	    }
	  }

	module.exports.style = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticClass:["wrap"],on:{"appear":appeared,"disappear":disappeared}},[_h('div',{ref:"anim",staticClass:["anim"]},[_t("default")])])}}
	delete module.exports.el


/***/ }

/******/ });