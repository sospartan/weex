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
	        countdown1: {
	          remain: 5000,
	          time: {
	            D: '0',
	            hh: '00',
	            mm: '00',
	            ss: '00'
	          }
	        },
	        countdown2: {
	          remain: 5000,
	          time: {
	            MM: '0',
	            ss: '0'
	          }
	        }
	      }
	    },
	    components: {
	      panel: __webpack_require__(377),
	      countdown: __webpack_require__(380)
	    },
	    methods: {
	      tick: function (e, k) {
	        this[k].time = JSON.parse(JSON.stringify(e))
	      }
	    }
	  }

	module.exports.style = {
	  "ctno1": {
	    "borderRadius": 8,
	    "paddingTop": 6,
	    "paddingBottom": 6,
	    "paddingRight": 4,
	    "paddingLeft": 4,
	    "marginLeft": 2,
	    "marginRight": 2,
	    "backgroundColor": "rgb(242,222,222)",
	    "color": "rgb(169,68,66)"
	  },
	  "ctno2": {
	    "borderRadius": 8,
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "paddingLeft": 16,
	    "paddingRight": 16,
	    "backgroundColor": "rgb(217,237,247)",
	    "color": "rgb(49,112,143)",
	    "textAlign": "center",
	    "fontSize": 40
	  }
	}
	module.exports.render = function() {with(this){return _h('scroller',[_h('panel',{attrs:{"title":"Countdown","type":"primary"}},[_h('countdown',{staticStyle:{width:"750",marginTop:"20",marginBottom:"20"},attrs:{"remain":countdown1.remain},on:{"tick":function($event){tick($event, 'countdown1')}}},[_h('text',{staticClass:["ctno1"]},[_s(countdown1.time.D)]),_m(0),_h('text',{staticClass:["ctno1"]},[_s(countdown1.time.hh)]),_m(1),_h('text',{staticClass:["ctno1"]},[_s(countdown1.time.mm)]),_m(2),_h('text',{staticClass:["ctno1"]},[_s(countdown1.time.ss)]),_m(3)]),_h('countdown',{staticStyle:{width:"600"},attrs:{"remain":countdown2.remain},on:{"tick":function($event){tick($event, 'countdown2')}}},[_h('text',{staticClass:["ctno2"]},[_s(countdown2.time.MM)]),_m(4),_h('text',{staticClass:["ctno2"]},[_s(countdown2.time.ss)])])])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["ctno1"],staticStyle:{backgroundColor:"#FFFFFF",color:"#AAAAAA"}},["day(s)"])}},
	function() {with(this){return _h('text',{staticClass:["ctno1"],staticStyle:{backgroundColor:"#FFFFFF",color:"#AAAAAA"}},["hour(s)"])}},
	function() {with(this){return _h('text',{staticClass:["ctno1"],staticStyle:{backgroundColor:"#FFFFFF",color:"#AAAAAA"}},["minute(s)"])}},
	function() {with(this){return _h('text',{staticClass:["ctno1"],staticStyle:{backgroundColor:"#FFFFFF",color:"#AAAAAA"}},["second(s)"])}},
	function() {with(this){return _h('text',{staticClass:["ctno2"],staticStyle:{backgroundColor:"#FFFFFF",color:"#AAAAAA"}},[":"])}}]
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

/***/ 380:
/***/ function(module, exports) {

	
	function format (str) {
	  if (str.length >= 2) {
	    return str;
	  } else {
	    return '0' + str;
	  }
	}

	function getTime(target, now) {
	  var remain = parseInt((target - now) / 1000)
	  var D = String(parseInt(remain / 86400))
	  var DD = format(D)
	  var h = String(parseInt((remain - parseInt(D) * 86400) / 3600))
	  var hh = format(h)
	  var H = String(parseInt(remain / 3600))
	  var HH = format(H)
	  var m = String(parseInt((remain - parseInt(H) * 3600) / 60))
	  var mm = format(m)
	  var M = String(parseInt(remain / 60))
	  var MM = format(M)
	  var s = String(remain - parseInt(M) * 60)
	  var ss = format(s)
	  var S = String(remain)
	  var SS = format(S)
	  return {
	    D: D, DD: DD,
	    h: h, hh: hh,
	    H: H, HH: HH,
	    m: m, mm: mm,
	    M: M, MM: MM,
	    s: s, ss: ss,
	    S: S, SS: SS
	  }
	}

	module.exports = {
	  props: {
	    remain: {
	      default: 0
	    }
	  },
	  data: function () {
	    return {
	      now: 0,
	      target: 0,
	      outofview: false
	    }
	  },
	  created: function() {
	    this.now = Date.now();
	    this.target = this.now + this.remain * 1000
	    if (this.remain > 0) {
	      this.run();
	    }
	  },
	  methods: {
	    run: function() {
	      if (!this.outofview) {
	        this.now = Date.now()
	      }
	      var time = getTime(this.target, this.now)
	      if (this.target >= this.now) {
	        this.$emit('tick', time)
	      } else {
	        this.$emit('alarm', time)
	        return
	      }
	      setTimeout(this.run.bind(this), 1000)
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
	    "overflow": "hidden"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{staticStyle:{overflow:"hidden",flexDirection:"row"},on:{"appear":appeared,"disappear":disappeared}},[_t("default")])}}
	delete module.exports.el


/***/ }

/******/ });