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

	
	  var storage = __weex_require_module__('storage')
	  module.exports = {
	    data: function () {
	      return {
	        setItemResult:'loading',
	        getItemResult:'loading',
	        removeItemResult:'loading',
	        lengthResult:'loading',
	        getAllKeysResult:'loading'
	      }
	    },
	    components: {
	      panel: __webpack_require__(377)
	    },
	    created: function() {
	      var me = this

	      //setItem
	      storage.setItem('foo','foo-value',function(e){
	        console.log('set [foo<->foo-value]:'+JSON.stringify(e))
	        me.setItemResult = 'foo:'+JSON.stringify(e)+'\n'
	      })
	      storage.setItem('bar','bar-value',function(e){
	        console.log('set [bar<->bar-value]:'+JSON.stringify(e))
	        me.setItemResult = me.setItemResult + 'bar:'+JSON.stringify(e)
	      })

	      //getItem
	      storage.getItem('foo',function(e){
	        console.log('get foo result:'+JSON.stringify(e))
	        me.getItemResult = 'get foo,value is '+e.data+'\n'
	      })
	      storage.getItem('bar',function(e){
	        console.log('get bar result:'+JSON.stringify(e))
	        me.getItemResult += 'get bar,value is '+e.data
	      })

	      //length
	      storage.length(function(e){
	        console.log('length:'+JSON.stringify(e))
	        me.lengthResult = 'current length is ' + e.data
	      })

	      //getAllKeys
	      storage.getAllKeys(function(e){
	        console.log('getAllKeys:'+JSON.stringify(e))
	        me.getAllKeysResult = '' + e.data
	        //me.getAllKeysResult +=' '+ typeof e.data
	      })

	      //removeItem
	      storage.removeItem('foo',function(e){
	        console.log('remove foo:'+JSON.stringify(e))
	        me.removeItemResult = 'remove item foo '+e.result
	      })
	    }
	  }

	module.exports.render = function() {with(this){return _h('scroller',[_h('panel',{attrs:{"title":"storage API","type":"primary"}},[_h('panel',{attrs:{"title":"setItem"}},[_h('text',[_s(setItemResult)])]),_h('panel',{attrs:{"title":"getItem"}},[_h('text',[_s(getItemResult)])]),_h('panel',{attrs:{"title":"length"}},[_h('text',[_s(lengthResult)])]),_h('panel',{attrs:{"title":"getAllKeys"}},[_h('text',[_s(getAllKeysResult)])]),_h('panel',{attrs:{"title":"removeItem"}},[_h('text',[_s(removeItemResult)])])])])}}
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


/***/ }

/******/ });