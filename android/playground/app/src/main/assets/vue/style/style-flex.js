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


/***/ }

/******/ });