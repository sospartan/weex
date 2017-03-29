// NOTE: for vue2.0 and platform:web only.

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

	var App = __webpack_require__(176)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 4:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },

/***/ 6:
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },

/***/ 7:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(177)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(179),
	  /* template */
	  __webpack_require__(180),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/lixinke/git/weex/weex/examples/vue/showcase/itemlist.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] itemlist.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-33ffe174", Component.options)
	  } else {
	    hotAPI.reload("data-v-33ffe174", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("28329b38", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33ffe174!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./itemlist.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33ffe174!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./itemlist.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.flexRow {\n  flex-direction: row;\n}\n.flexColumn {\n  flex-direction: column;\n}\n.text {\n}\n.div {\n}\n.fixed {\n  position: fixed;\n  bottom: 50px;\n  left: 50px;\n  width: 300px;\n  height: 50px;\n  align-items: center;\n  justify-content: center\n}\n.shopImg {\n  width: 220;\n  height: 220;\n}\n.list {\n  flex-direction: column;\n  overflow: hidden;\n  width: 750;\n  height: 1200;\n  background-color: #dddddd;\n}\n.cell {\n  background-color: #dddddd;\n  flex-direction: column;\n  width: 750;\n}\n.shopDiv {\n  flex-direction: column;\n  background-color: #ffffff;\n  margin: 5;\n  padding: 10;\n  border-width: 1;\n  border-color: #cccccc;\n  overflow: visible;\n}\n.shopRowList {\n  flex-direction: column;\n  border-width: 1;\n  border-color: #cccccc;\n  overflow: visible;\n  margin: 5;\n  padding: 10;\n  background-color: #ffffff;\n}\n.shopHeader {\n  flex-direction: row;\n  width: 720;\n}\n.shopFooter {\n  flex-direction: row;\n  width: 720;\n}\n.smallImg {\n  width: 20;\n  height: 20;\n}\n", ""]);

	// exports


/***/ },

/***/ 179:
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	module.exports = {
	  data: function data() {
	    return {
	      shopList: [{
	        id: 1,
	        scopeValue: 1,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Mendeleyev',
	        PersonVisitTime: 'today',
	        shopDesc: 'Genius only means hard-working all one\'s life',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1rtOnHpXXXXXLaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB15KrfFVXXXXXJXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1t5YBGVXXXXXcaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 2,
	        scopeValue: 2,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Napoleon',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'The man who has made up his mind to win will never say "impossible "',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/2655929383/TB2.qITjpXXXXcIXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/imgextra/i3/2655929383/TB2eWwZjpXXXXbHXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2655929383/TB2tgQWjpXXXXbZXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 3,
	        scopeValue: 3,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Balzac',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'There is no such thing as a great talent without great will - power',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/TB1AFz9LXXXXXbrXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2is2njXXXXXatXpXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2PNYGjXXXXXbXXXXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 4,
	        scopeValue: 4,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Thomas Carlyle',
	        PersonVisitTime: '3 day ago',
	        shopDesc: 'Cease to struggle and you cease to live',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2zbwdfXXXXXa4XpXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2L7ZAfXXXXXXOXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2p9wufXXXXXbiXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 5,
	        scopeValue: 5,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Addison',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'A strong man will struggle with the storms of fate',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1MQ8_KVXXXXaLXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/53218032/TB2bGSqiXXXXXXyXpXXXXXXXXXX_!!53218032.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1kP2zKFXXXXbIXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 6,
	        scopeValue: 1,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Ruskin',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'Living without an aim is like sailing without a compass',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB11yFnHXXXXXakaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/32720628/TB2CRJUcXXXXXXwXpXXXXXXXXXX_!!32720628.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB17LUzHXXXXXcEaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 7,
	        scopeValue: 2,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Yiming',
	        PersonVisitTime: 'today',
	        shopDesc: 'Live a noble and honest life. Reviving past times in your old age will help you to enjoy your life again',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1hvNoJXXXXXaMaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/2058567235/TB2V8iygFXXXXaRXpXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2058567235/TB2im1QgFXXXXX8XXXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 8,
	        scopeValue: 3,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'Brown',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'Behind every successful man there\'s a lot u unsuccessful years',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB18BZ2KFXXXXb8XFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/2775383848/TB2r012jVXXXXXHXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/imgextra/i3/2775383848/TB2iI9VjVXXXXaoXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 9,
	        scopeValue: 4,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'YIMING',
	        PersonVisitTime: 'today',
	        shopDesc: 'Enrich your life today,. yesterday is history.tomorrow is mystery',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1JB.rLpXXXXXLXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd4.alicdn.com/imgextra/i4/2702739128/TB2JdvmjVXXXXXjXXXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd2.alicdn.com/imgextra/i2/2702739128/TB2A.e6jVXXXXXGXpXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"

	      }, {
	        id: 10,
	        scopeValue: 5,
	        PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	        PersonName: 'YIMING',
	        PersonVisitTime: 'yesterday',
	        shopDesc: 'The secret of success is constancy to purpose',
	        shopImgList: [{
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB17zXOGXXXXXbEXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd1.alicdn.com/imgextra/i1/2265445951/TB22ACTbFXXXXXBXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	        }, {
	          shopImgWidth: 220,
	          shopImgHeight: 220,
	          shopImg: 'https://gd3.alicdn.com/imgextra/i3/2265445951/TB2oXqUbFXXXXXIXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	        }],
	        shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopLikeText: '6',
	        shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	        shopCommentText: '97',
	        shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	        shopLookText: '1003',
	        shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	        shareText: "10"
	      }]
	    };
	  },
	  methods: {
	    loadmore: function loadmore(e) {
	      modal.toast({
	        'message': 'loadmore',
	        'duration': 2.0
	      });
	    },
	    oncellclick: function oncellclick(id) {
	      modal.toast({
	        'message': 'row ' + id + ' clicked',
	        'duration': 2.0
	      });
	    }
	  }

	};

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: "list",
	    attrs: {
	      "loadmoreoffset": "2000"
	    },
	    on: {
	      "loadmore": _vm.loadmore
	    }
	  }, _vm._l((_vm.shopList), function(item) {
	    return _c('cell', {
	      staticClass: "cell",
	      attrs: {
	        "scope": item.scopeValue
	      },
	      on: {
	        "click": function($event) {
	          _vm.oncellclick(item.id)
	        }
	      }
	    }, [_c('div', {
	      staticClass: "shopDiv"
	    }, [_c('div', {
	      staticClass: "shopHeader",
	      staticStyle: {
	        "flex-direction": "row"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "flex": "2",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "60",
	        "height": "60"
	      },
	      attrs: {
	        "src": item.PersonPhoto
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "flex-direction": "column",
	        "margin-left": "5"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "margin-top": "5"
	      }
	    }, [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.PersonName))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-top": "5"
	      }
	    }, [_c('text', {
	      staticStyle: {
	        "font-size": "20",
	        "color": "#cccccc"
	      }
	    }, [_vm._v(_vm._s(item.PersonVisitTime))])])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "flex": "5",
	        "flex-direction": "row"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "flex-direction": "row",
	        "margin-left": "10",
	        "margin-top": "10"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i4/TB1zkDeIFXXXXXrXVXX07tlTXXX-200-200.png_88x88xz.jpg"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("Hope")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "90",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i2/TB1hRb1IXXXXXX3XVXXXQaP.pXX-87-87.jpeg"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("Mem")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "170",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("auth")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "250",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("Friend")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "330",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("issue")])])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "410",
	        "top": "10",
	        "flex-direction": "row"
	      }
	    }, [_c('div', [_c('image', {
	      staticStyle: {
	        "width": "20",
	        "height": "20"
	      },
	      attrs: {
	        "src": "https://gtms02.alicdn.com/tps/i2/TB11ZZfIVXXXXbMXFXXEDhGGXXX-32-32.png"
	      }
	    })]), _vm._v(" "), _c('div', [_c('text', {
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v("super")])])])])]), _vm._v(" "), _c('div', {
	      staticClass: "shopBody",
	      staticStyle: {
	        "flex-direction": "column"
	      }
	    }, [_c('div', {
	      staticClass: "descDiv",
	      staticStyle: {
	        "margin-top": "10",
	        "margin-left": "10"
	      }
	    }, [_c('text', {
	      staticClass: "shopDesc",
	      staticStyle: {
	        "font-size": "25"
	      }
	    }, [_vm._v(_vm._s(item.shopDesc))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "flex-direction": "row"
	      }
	    }, _vm._l((item.shopImgList), function(img) {
	      return _c('div', {
	        staticClass: "imgDiv",
	        staticStyle: {
	          "flex": "1",
	          "flex-direction": "column",
	          "margin": "10"
	        }
	      }, [_c('div', [_c('image', {
	        staticClass: "shopImg",
	        style: ({
	          width: img.shopImgWidth,
	          height: img.shopImgHeight
	        }),
	        attrs: {
	          "src": img.shopImg
	        }
	      })]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "flex": "1",
	          "margin-top": "10",
	          "flex-direction": "row"
	        }
	      }, [_c('div', {
	        staticStyle: {
	          "flex": "1",
	          "justify-content": "center",
	          "flex-direction": "row"
	        }
	      }, [_c('div', [_c('image', {
	        staticStyle: {
	          "width": "20",
	          "height": "20"
	        },
	        attrs: {
	          "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	        }
	      })]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "margin-left": "5"
	        }
	      }, [_c('text', {
	        staticStyle: {
	          "font-size": "20",
	          "text-align": "center"
	        }
	      }, [_vm._v("Up")])])]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "flex": "1",
	          "justify-content": "center",
	          "flex-direction": "row"
	        }
	      }, [_c('div', [_c('image', {
	        staticStyle: {
	          "width": "20",
	          "height": "20"
	        },
	        attrs: {
	          "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	        }
	      })]), _vm._v(" "), _c('div', {
	        staticStyle: {
	          "margin-left": "5"
	        }
	      }, [_c('text', {
	        staticStyle: {
	          "font-size": "20",
	          "text-align": "center"
	        }
	      }, [_vm._v("down")])])])])])
	    }))]), _vm._v(" "), _c('div', {
	      staticClass: "shopFooter",
	      staticStyle: {
	        "flex-direction": "row",
	        "margin-top": "10",
	        "margin-left": "10",
	        "justify-content": "flex-end"
	      }
	    }, [_c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shopLikeImg smallImg",
	      attrs: {
	        "src": item.shopLikeImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "15"
	      }
	    }, [_c('text', {
	      staticClass: "shopLikeText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shopLikeText))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shopCommentImg smallImg",
	      attrs: {
	        "src": item.shopCommentImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "15"
	      }
	    }, [_c('text', {
	      staticClass: "shopCommentText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shopCommentText))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shopLookImg smallImg",
	      attrs: {
	        "src": item.shopLookImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "15"
	      }
	    }, [_c('text', {
	      staticClass: "shopLookText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shopLookText))])]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "5"
	      }
	    }, [_c('image', {
	      staticClass: "shareImg smallImg",
	      attrs: {
	        "src": item.shareImg
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticStyle: {
	        "margin-right": "20"
	      }
	    }, [_c('text', {
	      staticClass: "shareText",
	      staticStyle: {
	        "font-size": "20"
	      }
	    }, [_vm._v(_vm._s(item.shareText))])])])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-33ffe174", module.exports)
	  }
	}

/***/ }

/******/ });