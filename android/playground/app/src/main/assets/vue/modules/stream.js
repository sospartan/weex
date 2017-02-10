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

	
	  var stream = __weex_require_module__('stream');
	  module.exports = {
	    data: function () {
	      return {
	        getJsonpResult: 'loading...',
	        getResult: 'loading...',
	        postResult: 'loading...',
	        putResult: 'loading...',
	        deleteResult: 'loading...',
	        headResult: 'loading...',
	        patchResult: 'loading...'
	      }
	    },
	    components: {
	      panel: __webpack_require__(377)
	    },
	    created: function() {
	      var me = this;
	      var GET_URL_JSONP = 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response';
	      var GET_URL = 'http://httpbin.org/get';
	      var POST_URL = 'http://httpbin.org/post';
	      var PUT_URL = 'http://httpbin.org/put';
	      var DELETE_URL = 'http://httpbin.org/delete';
	      var HEAD_URL = 'http://httpbin.org/status/418';
	      var PATCH_URL = 'http://httpbin.org/patch';

	      stream.fetch({
	        method: 'GET',
	        url: GET_URL_JSONP,
	        type:'jsonp'
	      }, function(ret) {
	        if(!ret.ok){
	          me.getJsonpResult = "request failed";
	        }else{
	          console.log('get:'+ret);
	          me.getJsonpResult =  JSON.stringify(ret.data);
	        }
	      },function(response){
	        console.log('get jsonp in progress:'+response.length);
	        me.getJsonpResult = "bytes received:"+response.length;
	      });

	      stream.fetch({
	        method: 'GET',
	        url: GET_URL,
	        type:'json'
	      }, function(ret) {
	        if(!ret.ok){
	          me.getResult = "request failed";
	        }else{
	          console.log('get:'+ret);
	          me.getResult = JSON.stringify(ret.data);
	        }
	      },function(response){
	        console.log('get in progress:'+response.length);
	        me.getResult = "bytes received:"+response.length;
	      });

	      stream.fetch({
	        method: 'POST',
	        url: POST_URL,
	        type:'json'
	      }, function(ret) {
	        if(!ret.ok){
	          me.postResult = "request failed";
	        }else{
	          console.log('get:'+JSON.stringify(ret));
	          me.postResult = JSON.stringify(ret.data);
	        }
	      },function(response){
	        console.log('get in progress:'+response.length);
	        me.postResult = "bytes received:"+response.length;
	      });

	      stream.fetch({
	        method: 'PUT',
	        url: PUT_URL,
	        type:'json'
	      }, function(ret) {
	        if(!ret.ok){
	          me.putResult = "request failed";
	        }else{
	          console.log('get:'+JSON.stringify(ret));
	          me.putResult = JSON.stringify(ret.data);
	        }
	      },function(response){
	        console.log('get in progress:'+response.length);
	        me.putResult = "bytes received:"+response.length;
	      });

	      stream.fetch({
	        method: 'DELETE',
	        url: DELETE_URL,
	        type:'json'
	      }, function(ret) {

	        if(!ret.ok){
	          me.deleteResult = "request failed";
	        }else{
	          console.log('get:'+JSON.stringify(ret));
	          me.deleteResult = JSON.stringify(ret.data);
	        }
	      },function(response){
	        console.log('get in progress:'+response.length);
	        me.deleteResult = "bytes received:"+response.length;
	      });

	      stream.fetch({
	        method: 'HEAD',
	        url: HEAD_URL,
	        type:'json'
	      }, function(ret) {
	        if(ret.statusText !== 'I\'m a teapot'){
	          me.headResult = "request failed";
	        }else{
	          console.log('get:'+JSON.stringify(ret));
	          me.headResult = ret.statusText;
	        }
	      },function(response){
	        console.log('get in progress:'+response.length);
	        me.headResult = "bytes received:"+response.length;
	      });

	      stream.fetch({
	        method: 'PATCH',
	        url: PATCH_URL,
	        type:'json'
	      }, function(ret) {
	        if(!ret.ok){
	          me.patchResult = "request failed";
	        }else{
	          console.log('get:'+JSON.stringify(ret));
	          me.patchResult = JSON.stringify(ret.data);
	        }
	      },function(response){
	        console.log('get in progress:'+response.length);
	        me.patchResult = "bytes received:"+response.length;
	      });
	    }
	  };

	module.exports.render = function() {with(this){return _h('scroller',[_h('panel',{attrs:{"title":"stream.fetch","type":"primary"}},[_h('panel',{attrs:{"title":"method = GET"}},[_h('text',[_s(getResult)])]),_h('panel',{attrs:{"title":"method = GET / type = jsonp"}},[_h('text',[_s(getJsonpResult)])]),_h('panel',{attrs:{"title":"method = POST"}},[_h('text',[_s(postResult)])]),_h('panel',{attrs:{"title":"method = PUT"}},[_h('text',[_s(putResult)])]),_h('panel',{attrs:{"title":"method = DELETE"}},[_h('text',[_s(deleteResult)])]),_h('panel',{attrs:{"title":"method = HEAD"}},[_h('text',[_s(headResult)])]),_h('panel',{attrs:{"title":"method = PATCH"}},[_h('text',[_s(patchResult)])])])])}}
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