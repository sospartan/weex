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

	var App = __webpack_require__(118)
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

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(119)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(121),
	  /* template */
	  __webpack_require__(122),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/lixinke/git/weex/weex/examples/vue/components/waterfall.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] waterfall.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-660150c8", Component.options)
	  } else {
	    hotAPI.reload("data-v-660150c8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("178ab4d6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-660150c8!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./waterfall.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-660150c8!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./waterfall.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.page {\n  background-color: #EFEFEF;\n}\n.refresh {\n  height: 128;\n  width: 750;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.refreshText {\n  color: #888888;\n  font-weight: bold;\n}\n.indicator {\n  color: #888888;\n  height: 40;\n  width: 40;\n  margin-right: 30;\n}\n.header {\n}\n.banner {\n  height: 377;\n  flex-direction: row;\n}\n.bannerInfo {\n  width:270;\n  align-items: center;\n  justify-content: center;\n}\n.avatar {\n  width: 148;\n  height: 108;\n  border-radius: 54;\n  border-width: 4;\n  border-color: #FFFFFF;\n  margin-bottom: 14;\n}\n.name {\n  font-weight: bold;\n  font-size:32;\n  color:#ffffff;\n  line-height:32;\n  text-align:center;\n  margin-bottom: 16;\n}\n.titleWrap {\n  width: 100;\n  height: 24;\n  margin-bottom: 10;\n  background-color: rgba(255,255,255,0.80);\n  border-radius: 12;\n  justify-content: center;\n  align-items: center;\n}\n.title {\n  font-size: 20;\n  color: #000000;\n}\n.bannerPhotoWrap {\n  width: 449;\n  height: 305;\n  background-color: #FFFFFF;\n  border-radius: 12;\n  margin-top: 35;\n  padding: 12;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap:wrap;\n}\n.bannerPhoto {\n  width: 137;\n  height: 137;\n  margin-bottom: 6;\n}\n.stickyHeader {\n  position: sticky;\n  height: 94;\n  flex-direction: row;\n  padding-bottom:6;\n}\n.stickyWrapper {\n  flex-direction: row;\n  background-color:#00cc99;\n  justify-content: center;\n  align-items: center;\n  flex:1;\n}\n.stickyTextImageWrapper {\n  flex:1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n.stickyText {\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size:32;\n  margin-right: 12;\n}\n.stickyImage {\n  width: 64;\n  height: 64;\n  border-radius: 32;\n}\n.cell {\n  padding-top: 6;\n  padding-bottom: 6;\n}\n.item {\n  background-color: #FFFFFF;\n  align-items: center;\n}\n.itemName {\n  font-size:28;\n  color:#333333;\n  line-height:42;\n  text-align:left;\n  margin-top: 24;\n}\n.itemPhoto {\n  margin-top: 18;\n  width: 220;\n  height: 220;\n  margin-bottom: 18;\n}\n.itemDesc {\n  font-size:24;\n  margin:12;\n  color:#999999;\n  line-height:36;\n  text-align:left;\n}\n.itemClickBehaviour {\n  font-size:36;\n  color:#00cc99;\n  line-height:36;\n  text-align:center;\n  margin-top: 6;\n  margin-left: 24;\n  margin-right: 24;\n  margin-bottom: 30;\n}\n.footer {\n  height: 94;\n  justify-content: center;\n  align-items: center;\n  background-color: #00cc99;\n}\n.fixedItem {\n  position: fixed;\n  width:78;\n  height:78;\n  background-color:#00cc99;\n  right: 32;\n  bottom: 32;\n  border-radius: 39;\n  align-items: center;\n  justify-content: center;\n}\n.fixedText {\n  font-size: 36;\n  color: white;\n  line-height: 36;\n}\n\n", ""]);

	// exports


/***/ },

/***/ 121:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	exports.default = {
	  data: function data() {
	    var items = [{
	      src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
	      name: 'Thomas Carlyle',
	      desc: 'Genius only means hard-working all one\'s life',
	      behaviourName: 'Change count',
	      behaviour: 'changeColumnCount'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
	      desc: 'The man who has made up his mind to win will never say "impossible "',
	      behaviourName: 'Change gap',
	      behaviour: 'changeColumnGap'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg',
	      desc: 'There is no such thing as a great talent without great will - power',
	      behaviourName: 'Show scrollbar',
	      behaviour: 'showScrollbar'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1DCh8PFXXXXX7aXXXXXXXXXXX-370-370.jpg',
	      name: 'Addison',
	      desc: 'Cease to struggle and you cease to live',
	      behaviourName: 'Change width',
	      behaviour: 'changeColumnWidth'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1ACygPFXXXXXwXVXXXXXXXXXX-370-370.jpg',
	      desc: 'A strong man will struggle with the storms of fate',
	      behaviourName: 'Listen appear',
	      behaviour: 'listenAppear'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1IGShPFXXXXaqXVXXXXXXXXXX-370-370.jpg',
	      name: 'Ruskin',
	      desc: 'Living without an aim is like sailing without a compass',
	      behaviourName: 'Set scrollable',
	      behaviour: 'setScrollable'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1xU93PFXXXXXHaXXXXXXXXXXX-240-240.jpg',
	      behaviourName: 'waterfall padding',
	      behaviour: 'setPadding'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB19hu0PFXXXXaXaXXXXXXXXXXX-240-240.jpg',
	      name: 'Balzac',
	      desc: 'There is no such thing as a great talent without great will - power',
	      behaviourName: 'listen scroll',
	      behaviour: 'listenScroll'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1ux2vPFXXXXbkXXXXXXXXXXXX-240-240.jpg',
	      behaviourName: 'Remove cell',
	      behaviour: 'removeCell'
	    }, {
	      src: 'https://gw.alicdn.com/tps/TB1tCCWPFXXXXa7aXXXXXXXXXXX-240-240.jpg',
	      behaviourName: 'Move cell',
	      behaviour: 'moveCell'
	    }];

	    var repeatItems = [];
	    for (var i = 0; i < 3; i++) {
	      repeatItems.push.apply(repeatItems, items);
	    }

	    return {
	      padding: 0,
	      refreshing: false,
	      refreshText: '↓   pull to refresh...',
	      columnCount: 2,
	      columnGap: 12,
	      columnWidth: 'auto',
	      contentOffset: '0',
	      showHeader: true,
	      showScrollbar: false,
	      scrollable: true,
	      showStickyHeader: false,
	      appearImage: null,
	      disappearImage: null,
	      stickyHeaderType: 'none',
	      banner: {
	        photos: [{ src: 'https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1MwSFPFXXXXbdXXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1U8avPFXXXXaDXpXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB17Xh8PFXXXXbkaXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg' }]
	      },
	      items: repeatItems
	    };
	  },

	  methods: {
	    recylerScroll: function recylerScroll(e) {
	      this.contentOffset = e.contentOffset.y;
	    },
	    loadmore: function loadmore(e) {
	      console.log('receive loadmore event');
	      // this.$refs.waterfall.resetLoadmore()
	    },
	    showOrRemoveHeader: function showOrRemoveHeader() {
	      this.showHeader = !this.showHeader;
	    },
	    onItemclick: function onItemclick(behaviour, index) {
	      console.log('click...' + behaviour + ' at index ' + index);
	      switch (behaviour) {
	        case 'changeColumnCount':
	          this.changeColumnCount();
	          break;
	        case 'changeColumnGap':
	          this.changeColumnGap();
	          break;
	        case 'changeColumnWidth':
	          this.changeColumnWidth();
	          break;
	        case 'showScrollbar':
	          this.showOrHideScrollbar();
	          break;
	        case 'listenAppear':
	          this.listenAppearAndDisappear();
	          break;
	        case 'setScrollable':
	          this.setScrollable();
	          break;
	        case 'setPadding':
	          this.setRecyclerPadding();
	          break;
	        case 'listenScroll':
	          this.listenScrollEvent();
	          break;
	        case 'removeCell':
	          this.removeCell(index);
	          break;
	        case 'moveCell':
	          this.moveCell(index);
	          break;
	      }
	    },

	    itemAppear: function itemAppear(src) {
	      this.appearImage = src;
	    },

	    itemDisappear: function itemDisappear(src) {
	      this.disappearImage = src;
	    },

	    changeColumnCount: function changeColumnCount() {
	      if (this.columnCount === 2) {
	        this.columnCount = 3;
	      } else {
	        this.columnCount = 2;
	      }
	    },

	    changeColumnGap: function changeColumnGap() {
	      if (this.columnGap === 12) {
	        this.columnGap = 'normal';
	      } else {
	        this.columnGap = 12;
	      }
	    },

	    changeColumnWidth: function changeColumnWidth() {
	      if (this.columnWidth === 'auto') {
	        this.columnWidth = 600;
	      } else {
	        this.columnWidth = 'auto';
	      }
	    },

	    showOrHideScrollbar: function showOrHideScrollbar() {
	      this.showScrollbar = !this.showScrollbar;
	    },

	    setScrollable: function setScrollable() {
	      this.scrollable = !this.scrollable;
	    },

	    listenAppearAndDisappear: function listenAppearAndDisappear() {
	      this.stickyHeaderType = this.stickyHeaderType === 'appear' ? 'none' : 'appear';
	    },

	    listenScrollEvent: function listenScrollEvent() {
	      this.stickyHeaderType = this.stickyHeaderType === 'scroll' ? 'none' : 'scroll';
	    },

	    scrollToTop: function scrollToTop() {
	      weex.requireModule('dom').scrollToElement(this.$refs.header);
	    },

	    setRecyclerPadding: function setRecyclerPadding() {
	      this.padding = this.padding == 0 ? 12 : 0;
	    },

	    removeCell: function removeCell(index) {
	      this.items.splice(index, 1);
	    },

	    moveCell: function moveCell(index) {
	      if (index == 0) {
	        this.items.splice(this.items.length - 1, 0, this.items.splice(index, 1)[0]);
	      } else {
	        this.items.splice(0, 0, this.items.splice(index, 1)[0]);
	      }
	    },

	    onrefresh: function onrefresh(event) {
	      var _this = this;

	      this.refreshing = true;
	      this.refreshText = "loading...";
	      setTimeout(function () {
	        _this.refreshing = false;
	        _this.refreshText = '↓   pull to refresh...';
	      }, 2000);
	    },
	    onpullingdown: function onpullingdown(event) {
	      // console.log(`${event.pullingDistance}`)
	      if (event.pullingDistance < -64) {
	        this.refreshText = '↑   release to refresh...';
	      } else {
	        this.refreshText = '↓   pull to refresh...';
	      }
	    }
	  }
	};

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('waterfall', {
	    ref: "waterfall",
	    staticClass: "page",
	    style: ({
	      padding: _vm.padding
	    }),
	    attrs: {
	      "column-width": _vm.columnWidth,
	      "column-count": _vm.columnCount,
	      "column-gap": _vm.columnGap,
	      "show-scrollbar": _vm.showScrollbar,
	      "scrollable": _vm.scrollable,
	      "loadmoreoffset": "3000"
	    },
	    on: {
	      "scroll": _vm.recylerScroll,
	      "loadmore": _vm.loadmore
	    }
	  }, [_c('refresh', {
	    staticClass: "refresh",
	    attrs: {
	      "display": _vm.refreshing ? 'show' : 'hide'
	    },
	    on: {
	      "refresh": _vm.onrefresh,
	      "pullingdown": _vm.onpullingdown
	    }
	  }, [_c('loading-indicator', {
	    staticClass: "indicator"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "refreshText"
	  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._v(" "), (_vm.showHeader) ? _c('header', {
	    ref: "header",
	    staticClass: "header"
	  }, [_c('image', {
	    staticClass: "banner",
	    attrs: {
	      "src": "https://gw.alicdn.com/tps/TB1ESN1PFXXXXX1apXXXXXXXXXX-1000-600.jpg",
	      "resize": "cover"
	    }
	  }, [_c('div', {
	    staticClass: "bannerInfo"
	  }, [_c('image', {
	    staticClass: "avatar",
	    attrs: {
	      "src": "https://gw.alicdn.com/tps/TB1EP9bPFXXXXbpXVXXXXXXXXXX-150-110.jpg",
	      "resize": "cover"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "name"
	  }, [_vm._v("Adam Cat")]), _vm._v(" "), _c('div', {
	    staticClass: "titleWrap"
	  }, [_c('text', {
	    staticClass: "title"
	  }, [_vm._v("Genius")])])]), _vm._v(" "), _c('div', {
	    staticClass: "bannerPhotoWrap"
	  }, _vm._l((_vm.banner.photos), function(photo) {
	    return _c('image', {
	      staticClass: "bannerPhoto",
	      attrs: {
	        "src": photo.src
	      }
	    })
	  }))])]) : _vm._e(), _vm._v(" "), _c('header', {
	    staticClass: "stickyHeader",
	    on: {
	      "click": _vm.showOrRemoveHeader
	    }
	  }, [(_vm.stickyHeaderType === 'none') ? _c('div', {
	    staticClass: "stickyWrapper"
	  }, [_c('text', {
	    staticClass: "stickyText"
	  }, [_vm._v("Sticky Header")])]) : _vm._e(), _vm._v(" "), (_vm.stickyHeaderType === 'appear') ? _c('div', {
	    staticClass: "stickyWrapper"
	  }, [_c('div', {
	    staticClass: "stickyTextImageWrapper"
	  }, [_c('text', {
	    staticClass: "stickyText"
	  }, [_vm._v("Last Appear:")]), _vm._v(" "), _c('image', {
	    staticClass: "stickyImage",
	    attrs: {
	      "src": _vm.appearImage
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "stickyTextImageWrapper"
	  }, [_c('text', {
	    staticClass: "stickyText"
	  }, [_vm._v("Last Disappear:")]), _vm._v(" "), _c('image', {
	    staticClass: "stickyImage",
	    attrs: {
	      "src": _vm.disappearImage
	    }
	  })])]) : _vm._e(), _vm._v(" "), (_vm.stickyHeaderType === 'scroll') ? _c('div', {
	    staticClass: "stickyWrapper"
	  }, [_c('text', {
	    staticClass: "stickyText"
	  }, [_vm._v("Content Offset:" + _vm._s(_vm.contentOffset))])]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
	    return _c('cell', {
	      key: item.src,
	      staticClass: "cell"
	    }, [_c('div', {
	      staticClass: "item",
	      on: {
	        "click": function($event) {
	          _vm.onItemclick(item.behaviour, index)
	        },
	        "appear": function($event) {
	          _vm.itemAppear(item.src)
	        },
	        "disappear": function($event) {
	          _vm.itemDisappear(item.src)
	        }
	      }
	    }, [(item.name) ? _c('text', {
	      staticClass: "itemName"
	    }, [_vm._v(_vm._s(item.name))]) : _vm._e(), _vm._v(" "), _c('image', {
	      staticClass: "itemPhoto",
	      attrs: {
	        "src": item.src
	      }
	    }), _vm._v(" "), (item.desc) ? _c('text', {
	      staticClass: "itemDesc"
	    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), _vm._v(" "), (item.behaviourName) ? _c('text', {
	      staticClass: "itemClickBehaviour"
	    }, [_vm._v(" " + _vm._s(item.behaviourName))]) : _vm._e()])])
	  }), _vm._v(" "), _c('header', {
	    staticClass: "footer"
	  }, [_c('text', {
	    staticClass: "stickyText"
	  }, [_vm._v("Footer")])]), _vm._v(" "), _c('div', {
	    staticClass: "fixedItem",
	    on: {
	      "click": _vm.scrollToTop
	    }
	  }, [_c('text', {
	    staticClass: "fixedText"
	  }, [_vm._v("Top")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-660150c8", module.exports)
	  }
	}

/***/ }

/******/ });