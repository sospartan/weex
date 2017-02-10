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
	    components: {
	      panel: __webpack_require__(377),
	      styleBox: __webpack_require__(403),
	      styleFlex: __webpack_require__(405),
	      styleItem: __webpack_require__(404)
	    }
	  }

	module.exports.style = {
	  "bg-item": {
	    "width": 690,
	    "marginBottom": 10
	  }
	}
	module.exports.render = function() {with(this){return _h('scroller',[_h('style-box'),_h('style-flex'),_h('panel',{attrs:{"title":"opacity","type":"primary"}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{opacity:"1"},attrs:{"value":"1"}}),_h('style-item',{staticStyle:{opacity:"0.9"},attrs:{"value":"0.9"}}),_h('style-item',{staticStyle:{opacity:"0.5"},attrs:{"value":"0.5"}}),_h('style-item',{staticStyle:{opacity:"0.2"},attrs:{"value":"0.2"}})])]),_h('panel',{attrs:{"title":"background-color","type":"primary"}},[_h('div',[_h('style-item',{staticClass:["bg-item"],staticStyle:{backgroundColor:"#333"},attrs:{"value":"#333"}}),_h('style-item',{staticClass:["bg-item"],staticStyle:{backgroundColor:"#333333"},attrs:{"value":"#333333"}}),_h('style-item',{staticClass:["bg-item"],staticStyle:{backgroundColor:"rgb(238, 162, 54)"},attrs:{"value":"rgb()"}}),_h('style-item',{staticClass:["bg-item"],staticStyle:{backgroundColor:"rgba(238, 162, 54, 0.5)"},attrs:{"value":"rgba()"}}),_h('style-item',{staticClass:["bg-item"],staticStyle:{backgroundColor:"red"},attrs:{"value":"red"}})])])])}}
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

/***/ 379:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'success' },
	      value: { default: '' }
	    }
	  }

	module.exports.style = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',{class:['tip', 'tip-' + type]},[_h('text',{class:['tip-txt', 'tip-txt-' + type]},[_s(value)])])}}
	delete module.exports.el


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    components: {
	      panel: __webpack_require__(377),
	      tip: __webpack_require__(379),
	      styleItem: __webpack_require__(404)
	    }
	  }

	module.exports.style = {
	  "box": {
	    "backgroundColor": "#f5f5f5",
	    "width": 260,
	    "height": 260,
	    "paddingLeft": 40,
	    "paddingTop": 40,
	    "paddingRight": 40,
	    "paddingBottom": 40,
	    "marginLeft": 40,
	    "marginTop": 40,
	    "marginRight": 40,
	    "marginBottom": 40,
	    "borderWidth": 40,
	    "borderColor": "#333333",
	    "borderStyle": "solid"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',[_h('panel',{attrs:{"title":"Box Model","padding-body":"0","type":"primary"}},[_m(0)]),_h('panel',{attrs:{"title":"border","type":"primary"}},[_h('panel',{attrs:{"title":"border-width","type":""}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"2px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"10px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderLeftWidth:"4px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderBottomWidth:"4px",borderColor:"#333"},attrs:{"value":""}})])]),_h('panel',{attrs:{"title":"border-color","type":""}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"#ddd"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"red"},attrs:{"value":""}})])]),_h('panel',{attrs:{"title":"border-style","type":""}},[_h('tip',{staticStyle:{marginBottom:"10px"},attrs:{"type":"warning","value":"just support four edges"}}),_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{borderStyle:"solid",borderWidth:"4px",borderColor:"#333"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderStyle:"dashed",borderWidth:"4px",borderColor:"#333"},attrs:{"value":"","type":""}}),_h('style-item',{staticStyle:{borderStyle:"dotted",borderWidth:"4px",borderColor:"#333"},attrs:{"value":""}})])]),_h('panel',{attrs:{"title":"border-radius","type":""}},[_h('div',{staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{width:"75px",borderRadius:"38px"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderRadius:"20px"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"},attrs:{"value":""}}),_h('style-item',{staticStyle:{borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"},attrs:{"value":""}})])])])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["box"]},["Box"])}}]
	delete module.exports.el


/***/ },

/***/ 404:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      value: { default: '' },
	      type: { default: '0' } // 0, 1
	    },
	    computed: {
	      bgColor: function () {
	        return this.type == '1' ? '#7BA3A8' : '#BEAD92';
	      }
	    }
	  }

	module.exports.style = {
	  "item": {
	    "marginRight": 10,
	    "width": 160,
	    "height": 75,
	    "paddingLeft": 8,
	    "paddingRight": 8,
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "txt": {
	    "color": "#eeeeee"
	  }
	}
	module.exports.render = function() {with(this){return _h('text',{staticClass:["item","txt"],style:{ backgroundColor: bgColor },attrs:{"value":value}})}}
	delete module.exports.el


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    components: {
	      panel: __webpack_require__(377),
	      styleItem: __webpack_require__(404)
	    }
	  }

	module.exports.style = {
	  "row": {
	    "flexDirection": "row",
	    "marginBottom": 10
	  },
	  "row-align": {
	    "height": 160,
	    "borderWidth": 3,
	    "borderColor": "#dddddd",
	    "borderStyle": "solid"
	  }
	}
	module.exports.render = function() {with(this){return _h('div',[_h('panel',{attrs:{"title":"flex-direction","type":"primary"}},[_h('div',{staticClass:["row"],staticStyle:{flexDirection:"row"}},[_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"value":"row"}}),_h('style-item',{attrs:{"type":"1"}})]),_h('div',{staticClass:["row"],staticStyle:{flexDirection:"column"}},[_h('style-item',{attrs:{"value":"column"}}),_h('style-item',{attrs:{"type":"1"}})])]),_h('panel',{attrs:{"title":"justify-content","type":"primary"}},[_h('div',{staticClass:["row"],staticStyle:{justifyContent:"flex-start"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})]),_h('div',{staticClass:["row"],staticStyle:{justifyContent:"flex-end"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})]),_h('div',{staticClass:["row"],staticStyle:{justifyContent:"center"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})]),_h('div',{staticClass:["row"],staticStyle:{justifyContent:"space-between"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})])]),_h('panel',{attrs:{"title":"align-items","type":"primary"}},[_h('div',{staticClass:["row","row-align"],staticStyle:{alignItems:"flex-start"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})]),_h('div',{staticClass:["row","row-align"],staticStyle:{alignItems:"flex-end"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})]),_h('div',{staticClass:["row","row-align"],staticStyle:{alignItems:"center"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})]),_h('div',{staticClass:["row","row-align"],staticStyle:{alignItems:"stretch"}},[_h('style-item',{staticStyle:{marginRight:"0"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"}})])]),_h('panel',{attrs:{"title":"flex","type":"primary"}},[_h('div',{staticClass:["row"],staticStyle:{alignItems:"flex-start"}},[_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"value":"no flex"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"value":"no flex","type":"1"}}),_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"value":"no flex"}})]),_h('div',{staticClass:["row"],staticStyle:{alignItems:"flex-start"}},[_h('style-item',{staticStyle:{marginRight:"0"},attrs:{"value":"no flex"}}),_h('style-item',{staticStyle:{marginRight:"0",flex:"1"},attrs:{"type":"1","value":"flex:1"}}),_h('style-item',{staticStyle:{marginRight:"0",flex:"2"},attrs:{"value":"flex:2"}})]),_h('div',{staticClass:["row"],staticStyle:{alignItems:"flex-start"}},[_h('style-item',{staticStyle:{marginRight:"0",flex:"1"},attrs:{"value":"flex:1"}}),_h('style-item',{staticStyle:{marginRight:"0",flex:"1"},attrs:{"type":"1","value":"flex:1"}}),_h('style-item',{staticStyle:{marginRight:"0",flex:"1"},attrs:{"value":"flex:1"}})]),_h('div',{staticClass:["row"],staticStyle:{alignItems:"flex-start"}},[_h('style-item',{staticStyle:{marginRight:"0",flex:"1"},attrs:{"value":"flex:1"}}),_h('style-item',{staticStyle:{marginRight:"0",flex:"2"},attrs:{"type":"1","value":"flex:2"}}),_h('style-item',{staticStyle:{marginRight:"0",flex:"3"},attrs:{"value":"flex:3"}})])]),_h('panel',{attrs:{"title":"flex-wrap","type":"primary"}},[_h('div',{staticClass:["row"],staticStyle:{flexWrap:"wrap",backgroundColor:"grey",padding:"10"}},[_h('style-item',{attrs:{"value":"1:wrap"}}),_h('style-item',{attrs:{"value":"2:wrap"}}),_h('style-item',{attrs:{"value":"3:wrap"}}),_h('style-item',{attrs:{"value":"4:wrap"}}),_h('style-item',{attrs:{"value":"5:wrap"}}),_h('style-item',{attrs:{"value":"6:wrap"}})]),_h('div',{staticClass:["row"],staticStyle:{flexWrap:"nowrap",backgroundColor:"grey",padding:"10"}},[_h('style-item',{attrs:{"value":"1:nowrap"}}),_h('style-item',{attrs:{"value":"2:nowrap"}}),_h('style-item',{attrs:{"value":"3:nowrap"}}),_h('style-item',{attrs:{"value":"4:nowrap"}}),_h('style-item',{attrs:{"value":"5:nowrap"}}),_h('style-item',{attrs:{"value":"6:nowrap"}})])])])}}
	delete module.exports.el


/***/ }

/******/ });