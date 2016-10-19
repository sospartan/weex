(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.16.17 Build 20161019');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(1);
	
	var _runtime = __webpack_require__(77);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(115);
	
	var _methods = __webpack_require__(116);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var native = _package.subversion.native;
	var transformer = _package.subversion.transformer;
	
	// register instance management APIs
	
	var _loop = function _loop(methodName) {
	  global[methodName] = function () {
	    var ret = _runtime2.default[methodName].apply(_runtime2.default, arguments);
	    if (ret instanceof Error) {
	      console.error(ret.toString());
	    }
	    return ret;
	  };
	};
	
	for (var methodName in _runtime2.default) {
	  _loop(methodName);
	}
	
	// register framework meta info
	global.frameworkVersion = native;
	global.transformerVersion = transformer;
	
	// register special methods for Weex framework
	global.registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPlainObject = exports.isObject = exports.toArray = exports.bind = exports.hasOwn = exports.remove = exports.def = exports.extend = undefined;
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(68);
	
	__webpack_require__(69);
	
	__webpack_require__(75);
	
	__webpack_require__(76);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(target) {
	  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    src[_key - 1] = arguments[_key];
	  }
	
	  if (typeof Object.assign === 'function') {
	    Object.assign.apply(Object, [target].concat(src));
	  } else {
	    var first = src.shift();
	    for (var key in first) {
	      target[key] = first[key];
	    }
	    if (src.length) {
	      extend.apply(undefined, [target].concat(src));
	    }
	  }
	  return target;
	}
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Remove an item from an array
	 *
	 * @param {Array} arr
	 * @param {*} item
	 */
	
	function remove(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * @fileOverview
	 * Polyfill `setTimeout` on Android V8 using native method
	 * `setTimeoutNative(callbackId, time)` and JS method
	 * `setTimeoutCallback(callbackId)`.
	 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
	 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
	 * `html5/default/app/ctrl.js`).
	 */
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
	/* istanbul ignore if */
	
	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;
	
	    global.setTimeout = function (cb, time) {
	      timeoutMap[++timeoutId] = cb;
	      setTimeoutNative(timeoutId.toString(), time);
	    };
	
	    global.setTimeoutCallback = function (id) {
	      if (typeof timeoutMap[id] === 'function') {
	        timeoutMap[id]();
	        delete timeoutMap[id];
	      }
	    };
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	var _global = global;
	var WXEnvironment = _global.WXEnvironment;
	
	if (WXEnvironment && WXEnvironment.platform === 'iOS') {
	  global.Promise = null;
	}
	__webpack_require__(5);
	__webpack_require__(25);
	__webpack_require__(51);
	__webpack_require__(55);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(6),
	    test = {};
	test[__webpack_require__(8)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(12)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(7),
	    TAG = __webpack_require__(8)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(9)('wks'),
	    uid = __webpack_require__(11),
	    _Symbol = __webpack_require__(10).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    hide = __webpack_require__(13),
	    has = __webpack_require__(23),
	    SRC = __webpack_require__(11)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(24).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14),
	    createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(15),
	    IE8_DOM_DEFINE = __webpack_require__(17),
	    toPrimitive = __webpack_require__(21),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(16);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function () {
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(16),
	    document = __webpack_require__(10).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(26)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(27),
	    defined = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(30),
	    $export = __webpack_require__(31),
	    redefine = __webpack_require__(12),
	    hide = __webpack_require__(13),
	    has = __webpack_require__(23),
	    Iterators = __webpack_require__(34),
	    $iterCreate = __webpack_require__(35),
	    setToStringTag = __webpack_require__(48),
	    getPrototypeOf = __webpack_require__(49),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    core = __webpack_require__(24),
	    hide = __webpack_require__(13),
	    redefine = __webpack_require__(12),
	    ctx = __webpack_require__(32),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(36),
	    descriptor = __webpack_require__(22),
	    setToStringTag = __webpack_require__(48),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(8)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(15),
	    dPs = __webpack_require__(37),
	    enumBugKeys = __webpack_require__(46),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14),
	    anObject = __webpack_require__(15),
	    getKeys = __webpack_require__(38);
	
	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(39),
	    enumBugKeys = __webpack_require__(46);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(23),
	    toIObject = __webpack_require__(40),
	    arrayIndexOf = __webpack_require__(42)(false),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41),
	    defined = __webpack_require__(28);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(7);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(40),
	    toLength = __webpack_require__(43),
	    toIndex = __webpack_require__(44);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(27),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(9)('keys'),
	    uid = __webpack_require__(11);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(14).f,
	    has = __webpack_require__(23),
	    TAG = __webpack_require__(8)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(23),
	    toObject = __webpack_require__(50),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(52),
	    redefine = __webpack_require__(12),
	    global = __webpack_require__(10),
	    hide = __webpack_require__(13),
	    Iterators = __webpack_require__(34),
	    wks = __webpack_require__(8),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(53),
	    step = __webpack_require__(54),
	    Iterators = __webpack_require__(34),
	    toIObject = __webpack_require__(40);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(8)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(30),
	    global = __webpack_require__(10),
	    ctx = __webpack_require__(32),
	    classof = __webpack_require__(6),
	    $export = __webpack_require__(31),
	    isObject = __webpack_require__(16),
	    aFunction = __webpack_require__(33),
	    anInstance = __webpack_require__(56),
	    forOf = __webpack_require__(57),
	    speciesConstructor = __webpack_require__(61),
	    task = __webpack_require__(62).set,
	    microtask = __webpack_require__(64)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(65)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(66)(PROMISE);
	Wrapper = __webpack_require__(24)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    call = __webpack_require__(58),
	    isArrayIter = __webpack_require__(59),
	    anObject = __webpack_require__(15),
	    toLength = __webpack_require__(43),
	    getIterFn = __webpack_require__(60),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(15);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(34),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(6),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    Iterators = __webpack_require__(34);
	module.exports = __webpack_require__(24).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(15),
	    aFunction = __webpack_require__(33),
	    SPECIES = __webpack_require__(8)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    invoke = __webpack_require__(63),
	    html = __webpack_require__(47),
	    cel = __webpack_require__(20),
	    global = __webpack_require__(10),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(7)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    macrotask = __webpack_require__(62).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(7)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(12);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    dP = __webpack_require__(14),
	    DESCRIPTORS = __webpack_require__(18),
	    SPECIES = __webpack_require__(8)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(8)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @fileOverview
	 * This file will hack `console` methods by `WXEnvironment.logLevel`.
	 * So we can control how many and which messages will be sent by change the log level.
	 * Additionally in native platform the message content must be primitive values and
	 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
	 * global add a format process for its methods.
	 */
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
	var levelMap = {};
	
	generateLevelMap();
	
	/* istanbul ignore if */
	if (typeof console === 'undefined' || // Android
	global.WXEnvironment && global.WXEnvironment.platform === 'iOS' // iOS
	) {
	    global.console = {
	      debug: function debug() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        if (checkLevel('debug')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__DEBUG']));
	        }
	      },
	      log: function log() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        if (checkLevel('log')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__LOG']));
	        }
	      },
	      info: function info() {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }
	
	        if (checkLevel('info')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__INFO']));
	        }
	      },
	      warn: function warn() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }
	
	        if (checkLevel('warn')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__WARN']));
	        }
	      },
	      error: function error() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }
	
	        if (checkLevel('error')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__ERROR']));
	        }
	      }
	    };
	  } else {
	  // HTML5
	  var debug = console.debug;
	  var log = console.log;
	  var info = console.info;
	  var warn = console.warn;
	  var error = console.error;
	
	  console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
	  console.debug = function () {
	    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      args[_key6] = arguments[_key6];
	    }
	
	    if (checkLevel('debug')) {
	      console.__ori__.debug.apply(console, args);
	    }
	  };
	  console.log = function () {
	    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	      args[_key7] = arguments[_key7];
	    }
	
	    if (checkLevel('log')) {
	      console.__ori__.log.apply(console, args);
	    }
	  };
	  console.info = function () {
	    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	      args[_key8] = arguments[_key8];
	    }
	
	    if (checkLevel('info')) {
	      console.__ori__.info.apply(console, args);
	    }
	  };
	  console.warn = function () {
	    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	      args[_key9] = arguments[_key9];
	    }
	
	    if (checkLevel('warn')) {
	      console.__ori__.warn.apply(console, args);
	    }
	  };
	  console.error = function () {
	    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	      args[_key10] = arguments[_key10];
	    }
	
	    if (checkLevel('error')) {
	      console.__ori__.error.apply(console, args);
	    }
	  };
	}
	
	/**
	 * Generate map for which types of message will be sent in a certain message level
	 * as the order of LEVELS.
	 */
	function generateLevelMap() {
	  LEVELS.forEach(function (level) {
	    var levelIndex = LEVELS.indexOf(level);
	    levelMap[level] = {};
	    LEVELS.forEach(function (type) {
	      var typeIndex = LEVELS.indexOf(type);
	      if (typeIndex <= levelIndex) {
	        levelMap[level][type] = true;
	      }
	    });
	  });
	}
	
	/**
	 * Check if a certain type of message will be sent in current log level of env.
	 * @param  {string} type
	 * @return {boolean}
	 */
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
	/**
	 * Convert all log arguments into primitive values.
	 * @param  {array} args
	 * @return {array}
	 */
	function format(args) {
	  return args.map(function (v) {
	    var type = Object.prototype.toString.call(v);
	    if (type.toLowerCase() === '[object object]') {
	      v = JSON.stringify(v);
	    } else {
	      v = String(v);
	    }
	    return v;
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(70);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(71);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(31);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(72) });

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(38),
	    gOPS = __webpack_require__(73),
	    pIE = __webpack_require__(74),
	    toObject = __webpack_require__(50),
	    IObject = __webpack_require__(41),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(19)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable */
	
	// https://gist.github.com/WebReflection/5593554
	if (!Object.setPrototypeOf) {
	  Object.setPrototypeOf = function (Object, magic) {
	    var set;
	    function setPrototypeOf(O, proto) {
	      set.call(O, proto);
	      return O;
	    }
	    try {
	      // this works already in Firefox and Safari
	      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	      set.call({}, null);
	    } catch (e) {
	      if (
	      // IE < 11 cannot be shimmed
	      Object.prototype !== {}[magic] ||
	      // neither can any browser that actually
	      // implemented __proto__ correctly
	      // (all but old V8 will return here)
	      { __proto__: null }.__proto__ === void 0
	      // this case means null objects cannot be passed
	      // through setPrototypeOf in a reliable way
	      // which means here a **Sham** is needed instead
	      ) {
	          return;
	        }
	      // nodejs 0.8 and 0.10 are (buggy and..) fine here
	      // probably Chrome or some old Mobile stock browser
	      set = function set(proto) {
	        this[magic] = proto;
	      };
	      // please note that this will **not** work
	      // in those browsers that do not inherit
	      // __proto__ by mistake from Object.prototype
	      // in these cases we should probably throw an error
	      // or at least be informed about the issue
	      setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
	      // setPrototypeOf.polyfill === true means it works as meant
	      // setPrototypeOf.polyfill === false means it's not 100% reliable
	      // setPrototypeOf.polyfill === undefined
	      // or
	      // setPrototypeOf.polyfill ==  null means it's not a polyfill
	      // which means it works as expected
	      // we can even delete Object.prototype.__proto__;
	    }
	    return setPrototypeOf;
	  }(Object, '__proto__');
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable */
	
	// Production steps of ECMA-262, Edition 6, 22.1.2.1
	// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
	if (!Array.from) {
	  console.log('make polyfill');
	  Array.from = function () {
	    var toStr = Object.prototype.toString;
	    var isCallable = function isCallable(fn) {
	      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
	    };
	    var toInteger = function toInteger(value) {
	      var number = Number(value);
	      if (isNaN(number)) {
	        return 0;
	      }
	      if (number === 0 || !isFinite(number)) {
	        return number;
	      }
	      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	    };
	    var maxSafeInteger = Math.pow(2, 53) - 1;
	    var toLength = function toLength(value) {
	      var len = toInteger(value);
	      return Math.min(Math.max(len, 0), maxSafeInteger);
	    };
	
	    // The length property of the from method is 1.
	    return function from(arrayLike /*, mapFn, thisArg */) {
	      // 1. Let C be the this value.
	      var C = this;
	
	      // 2. Let items be ToObject(arrayLike).
	      var items = Object(arrayLike);
	
	      // 3. ReturnIfAbrupt(items).
	      if (arrayLike == null) {
	        throw new TypeError('Array.from requires an array-like object - not null or undefined');
	      }
	
	      // 4. If mapfn is undefined, then let mapping be false.
	      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
	      var T;
	      if (typeof mapFn !== 'undefined') {
	        // 5. else
	        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	        if (!isCallable(mapFn)) {
	          throw new TypeError('Array.from: when provided, the second argument must be a function');
	        }
	
	        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
	        if (arguments.length > 2) {
	          T = arguments[2];
	        }
	      }
	
	      // 10. Let lenValue be Get(items, "length").
	      // 11. Let len be ToLength(lenValue).
	      var len = toLength(items.length);
	
	      // 13. If IsConstructor(C) is true, then
	      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
	      // 14. a. Else, Let A be ArrayCreate(len).
	      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
	
	      // 16. Let k be 0.
	      var k = 0;
	      // 17. Repeat, while k < len… (also steps a - h)
	      var kValue;
	      while (k < len) {
	        kValue = items[k];
	        if (mapFn) {
	          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
	        } else {
	          A[k] = kValue;
	        }
	        k += 1;
	      }
	      // 18. Let putStatus be Put(A, "length", len, true).
	      A.length = len;
	      // 20. Return A.
	      return A;
	    };
	  }();
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vdom = __webpack_require__(78);
	
	var _listener = __webpack_require__(79);
	
	var _listener2 = _interopRequireDefault(_listener);
	
	var _config = __webpack_require__(80);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _init = __webpack_require__(114);
	
	var _init2 = _interopRequireDefault(_init);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview
	 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
	 * framework(s): one is the instance management layer, another is the
	 * virtual-DOM layer.
	 */
	
	// This config is generated by `npm run build:config`.
	// It will collect all `runtime/framework-*.js` files and import each of them.
	// The filename is also the framework name.
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment, Listener: _listener2.default, frameworks: _config2.default,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	var methods = (0, _init2.default)(config);
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @fileOverview
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * A simple virtual dom implementation
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
	// import { extend } from '../shared'
	
	
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _utils = __webpack_require__(2);
	
	var DEFAULT_TAG_NAME = 'div';
	
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler, Listener) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  Listener && (this.listener = new Listener(id, handler || genCallTasks(id)));
	  this.createDocumentElement();
	}
	
	function genCallTasks(id) {
	  // @todo: The `callAddElement` API should be re-design immediately
	  // because its public and global and without config opportunity.
	  var hasAddElementHandler = typeof callAddElement === 'function';
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    for (var i = 0; i < tasks.length; i++) {
	      var task = tasks[i];
	      var returnValue = void 0;
	      if (hasAddElementHandler && task.module === 'dom' && task.method === 'addElement') {
	        var _task$args = _slicedToArray(task.args, 3);
	
	        var ref = _task$args[0];
	        var json = _task$args[1];
	        var index = _task$args[2];
	
	        returnValue = callAddElement(id, ref, json, index, '-1');
	      } else {
	        returnValue = callNative(id, [task], '-1');
	      }
	      if (returnValue === -1) {
	        return returnValue;
	      }
	    }
	  };
	}
	
	Document.prototype.destroy = function () {
	  delete this.listener;
	  delete this.nodeMap;
	  delete instanceMap[this.id];
	};
	
	Document.prototype.open = function () {
	  this.listener.batched = false;
	};
	
	Document.prototype.close = function () {
	  this.listener.batched = true;
	};
	
	Document.prototype.createDocumentElement = function () {
	  var _this = this;
	
	  if (!this.documentElement) {
	    var el = new Element('document');
	    el.docId = this.id;
	    el.ownerDocument = this;
	    el.role = 'documentElement';
	    el.depth = 0;
	    el.ref = '_documentElement';
	    this.nodeMap._documentElement = el;
	    this.documentElement = el;
	    el.appendChild = function (node) {
	      appendBody(_this, node);
	    };
	    el.insertBefore = function (node, before) {
	      appendBody(_this, node, before);
	    };
	  }
	
	  return this.documentElement;
	};
	
	function appendBody(doc, node, before) {
	  var documentElement = doc.documentElement;
	
	
	  if (documentElement.pureChildren.length > 0 || node.parentNode) {
	    return;
	  }
	  var children = documentElement.children;
	  var beforeIndex = children.indexOf(before);
	  if (beforeIndex < 0) {
	    children.push(node);
	  } else {
	    children.splice(beforeIndex, 0, node);
	  }
	
	  if (node.nodeType === 1) {
	    if (node.role === 'body') {
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      node.parentNode = documentElement;
	      linkParent(node, documentElement);
	    } else {
	      node.children.forEach(function (child) {
	        child.parentNode = node;
	      });
	      setBody(doc, node);
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      linkParent(node, documentElement);
	      delete doc.nodeMap[node.nodeId];
	    }
	    documentElement.pureChildren.push(node);
	    doc.listener.createBody(node);
	  } else {
	    node.parentNode = documentElement;
	    doc.nodeMap[node.ref] = node;
	  }
	}
	
	function setBody(doc, el) {
	  el.role = 'body';
	  el.depth = 1;
	  delete doc.nodeMap[el.nodeId];
	  el.ref = '_root';
	  doc.nodeMap._root = el;
	  doc.body = el;
	}
	
	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    var el = new Element(type, props);
	    setBody(this, el);
	  }
	
	  return this.body;
	};
	
	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props);
	};
	
	Document.prototype.createComment = function (text) {
	  return new Comment(text);
	};
	
	Document.prototype.fireEvent = function (el, type, e, domChanges) {
	  if (!el) {
	    return;
	  }
	  e = e || {};
	  e.type = type;
	  e.target = el;
	  e.timestamp = Date.now();
	  if (domChanges) {
	    updateElement(el, domChanges);
	  }
	  return el.fireEvent(type, e);
	};
	
	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};
	
	function updateElement(el, changes) {
	  var attrs = changes.attrs || {};
	  for (var name in attrs) {
	    el.setAttr(name, attrs[name], true);
	  }
	  var style = changes.style || {};
	  for (var _name in style) {
	    el.setStyle(_name, style[_name], true);
	  }
	}
	
	function Node() {
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.children = [];
	  this.pureChildren = [];
	  this.parentNode = null;
	  this.nextSibling = null;
	  this.previousSibling = null;
	}
	
	Node.prototype.destroy = function () {
	  var doc = instanceMap[this.docId];
	  if (doc) {
	    delete this.docId;
	    delete doc.nodeMap[this.nodeId];
	  }
	  this.children.forEach(function (child) {
	    child.destroy();
	  });
	};
	
	function Element() {
	  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TAG_NAME;
	  var props = arguments[1];
	
	  props = props || {};
	  this.nodeType = 1;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = {};
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Element.prototype = new Node();
	
	Element.prototype.appendChild = function (node) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.length, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      insertIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, -1);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.length, true);
	    if (node.nodeType === 1) {
	      var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId && index >= 0) {
	        var _listener = instanceMap[this.docId].listener;
	        return _listener.moveElement(node.ref, this.ref, index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertBefore = function (node, before) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === before || node.nextSibling === before) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(before), true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var pureBefore = nextElement(before);
	      var index = insertIndex(node, this.pureChildren, pureBefore ? this.pureChildren.indexOf(pureBefore) : this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(before), true);
	    if (node.nodeType === 1) {
	      var _pureBefore = nextElement(before);
	      var _index = moveIndex(node, this.pureChildren, _pureBefore ? this.pureChildren.indexOf(_pureBefore) : this.pureChildren.length);
	      if (this.docId && _index >= 0) {
	        var _listener2 = instanceMap[this.docId].listener;
	        return _listener2.moveElement(node.ref, this.ref, _index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertAfter = function (node, after) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === after || node.previousSibling === after) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var index = insertIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (node.nodeType === 1) {
	      var _index2 = moveIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId && _index2 >= 0) {
	        var _listener3 = instanceMap[this.docId].listener;
	        return _listener3.moveElement(node.ref, this.ref, _index2);
	      }
	    }
	  }
	};
	
	Element.prototype.removeChild = function (node, preserved) {
	  if (node.parentNode) {
	    removeIndex(node, this.children, true);
	    if (node.nodeType === 1) {
	      removeIndex(node, this.pureChildren);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        listener.removeElement(node.ref);
	      }
	    }
	  }
	  if (!preserved) {
	    node.destroy();
	  }
	};
	
	Element.prototype.clear = function () {
	  var _this2 = this;
	
	  if (this.docId) {
	    (function () {
	      var listener = instanceMap[_this2.docId].listener;
	      _this2.pureChildren.forEach(function (node) {
	        listener.removeElement(node.ref);
	      });
	    })();
	  }
	  this.children.forEach(function (node) {
	    node.destroy();
	  });
	  this.children.length = 0;
	  this.pureChildren.length = 0;
	};
	
	function nextElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.nextSibling;
	  }
	}
	
	function previousElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.previousSibling;
	  }
	}
	
	function linkParent(node, parent) {
	  node.parentNode = parent;
	  if (parent.docId) {
	    node.docId = parent.docId;
	    node.ownerDocument = parent.ownerDocument;
	    node.ownerDocument.nodeMap[node.nodeId] = node;
	    node.depth = parent.depth + 1;
	  }
	  node.children.forEach(function (child) {
	    linkParent(child, node);
	  });
	}
	
	function registerNode(docId, node) {
	  var doc = instanceMap[docId];
	  doc.nodeMap[node.nodeId] = node;
	}
	
	function insertIndex(target, list, newIndex, changeSibling) {
	  if (newIndex < 0) {
	    newIndex = 0;
	  }
	  var before = list[newIndex - 1];
	  var after = list[newIndex];
	  list.splice(newIndex, 0, target);
	  if (changeSibling) {
	    before && (before.nextSibling = target);
	    target.previousSibling = before;
	    target.nextSibling = after;
	    after && (after.previousSibling = target);
	  }
	  return newIndex;
	}
	
	function moveIndex(target, list, newIndex, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return -1;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	  var newIndexAfter = newIndex;
	  if (index <= newIndex) {
	    newIndexAfter = newIndex - 1;
	  }
	  var beforeNew = list[newIndexAfter - 1];
	  var afterNew = list[newIndexAfter];
	  list.splice(newIndexAfter, 0, target);
	  if (changeSibling) {
	    beforeNew && (beforeNew.nextSibling = target);
	    target.previousSibling = beforeNew;
	    target.nextSibling = afterNew;
	    afterNew && (afterNew.previousSibling = target);
	  }
	  if (index === newIndexAfter) {
	    return -1;
	  }
	  return newIndex;
	}
	
	function removeIndex(target, list, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	}
	
	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value && silent !== false) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value && silent !== false) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.resetClassStyle = function () {
	  for (var key in this.classStyle) {
	    this.classStyle[key] = '';
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.resetClassStyle();
	  (0, _utils.extend)(this.classStyle, classStyle);
	  if (this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyles(this.ref, this.toStyle());
	  }
	};
	
	Element.prototype.addEvent = function (type, handler) {
	  if (!this.event[type]) {
	    this.event[type] = handler;
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.addEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.removeEvent = function (type) {
	  if (this.event[type]) {
	    delete this.event[type];
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.removeEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.fireEvent = function (type, e) {
	  var handler = this.event[type];
	  if (handler) {
	    return handler.call(this, e);
	  }
	};
	
	Element.prototype.toStyle = function () {
	  return (0, _utils.extend)({}, this.classStyle, this.style);
	};
	
	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	  var event = Object.keys(this.event);
	  if (event.length) {
	    result.event = event;
	  }
	  if (this.pureChildren.length) {
	    result.children = this.pureChildren.map(function (child) {
	      return child.toJSON();
	    });
	  }
	  return result;
	};
	
	Element.prototype.toString = function () {
	  return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
	    return child.toString();
	  }).join('') + '</' + this.type + '>';
	};
	
	function Comment(value) {
	  this.nodeType = 8;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = 'comment';
	  this.value = value;
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Comment.prototype = new Node();
	
	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Listener;
	exports.createAction = createAction;
	function Listener(id, handler) {
	  this.id = id;
	  this.batched = false;
	  this.updates = [];
	  if (typeof handler === 'function') {
	    this.handler = handler;
	  }
	}
	
	Listener.prototype.createFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('createFinish', [])], callback);
	};
	
	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('updateFinish', [])], callback);
	};
	
	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('refreshFinish', [])], callback);
	};
	
	Listener.prototype.createBody = function (element) {
	  var body = element.toJSON();
	  var children = body.children;
	  delete body.children;
	  var actions = [createAction('createBody', [body])];
	  if (children) {
	    actions.push.apply(actions, children.map(function (child) {
	      return createAction('addElement', [body.ref, child, -1]);
	    }));
	  }
	  return this.addActions(actions);
	};
	
	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};
	
	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    return this.addActions(actions);
	  }
	  return this.addActions(createAction('removeElement', [ref]));
	};
	
	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};
	
	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateAttrs', [ref, result]));
	};
	
	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateStyle', [ref, result]));
	};
	
	Listener.prototype.setStyles = function (ref, style) {
	  return this.addActions(createAction('updateStyle', [ref, style]));
	};
	
	Listener.prototype.addEvent = function (ref, type) {
	  return this.addActions(createAction('addEvent', [ref, type]));
	};
	
	Listener.prototype.removeEvent = function (ref, type) {
	  return this.addActions(createAction('removeEvent', [ref, type]));
	};
	
	Listener.prototype.handler = function (actions, cb) {
	  return cb && cb();
	};
	
	Listener.prototype.addActions = function (actions) {
	  var updates = this.updates;
	  var handler = this.handler;
	
	  if (!Array.isArray(actions)) {
	    actions = [actions];
	  }
	
	  if (this.batched) {
	    updates.push.apply(updates, actions);
	  } else {
	    return handler(actions);
	  }
	};
	
	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vanilla = __webpack_require__(81);
	
	var Vanilla = _interopRequireWildcard(_vanilla);
	
	var _default = __webpack_require__(82);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// built by npm run build:config
	
	exports.default = {
	  Vanilla: Vanilla,
	  Weex: Weex
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.init = init;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.prepareInstance = prepareInstance;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var config = {};
	
	var instanceMap = {};
	
	function init(cfg) {
	  config.Document = cfg.Document;
	  config.Element = cfg.Element;
	  config.Comment = cfg.Comment;
	  config.sendTasks = cfg.sendTasks;
	}
	
	function registerComponents(components) {}
	
	function registerModules(modules) {}
	
	function registerMethods(apis) {}
	
	function prepareInstance(id, options, data) {}
	
	function createInstance(id, code, options, data) {
	  var document = new config.Document(id, options.bundleUrl);
	  var callbacks = {};
	  var lastCallbackId = 0;
	  document.addCallback = function (func) {
	    lastCallbackId++;
	    callbacks[lastCallbackId] = func;
	    return lastCallbackId;
	  };
	  document.handleCallback = function (funcId, data, ifLast) {
	    var callback = callbacks[funcId];
	    if (ifLast) {
	      delete callbacks[funcId];
	    }
	    return callback(data);
	  };
	  instanceMap[id] = document;
	  var result = new Function('Document', 'Element', 'Comment', 'sendTasks', 'id', 'options', 'data', 'document', code);
	  return result(config.Document, config.Element, config.Comment, config.sendTasks, id, options, data, document);
	}
	
	function refreshInstance(id, data) {}
	
	function destroyInstance(id) {
	  delete instanceMap[id];
	}
	
	function getRoot(id) {
	  return instanceMap[id].body.toJSON();
	}
	
	function receiveTasks(id, tasks) {
	  var jsHandlers = {
	    fireEvent: function fireEvent(id, ref, type, data, domChanges) {
	      var document = instanceMap[id];
	      var el = document.getRef(ref);
	      return document.fireEvent(el, type, data, domChanges);
	    },
	
	    callback: function callback(id, funcId, data, ifLast) {
	      var document = instanceMap[id];
	      return document.handleCallback(funcId, data, ifLast);
	    }
	  };
	
	  var document = instanceMap[id];
	  if (document && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(id);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(83);
	
	Object.defineProperty(exports, 'createInstance', {
	  enumerable: true,
	  get: function get() {
	    return _create.createInstance;
	  }
	});
	
	var _life = __webpack_require__(110);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _life.init;
	  }
	});
	Object.defineProperty(exports, 'refreshInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.refreshInstance;
	  }
	});
	Object.defineProperty(exports, 'destroyInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.destroyInstance;
	  }
	});
	
	var _register = __webpack_require__(111);
	
	Object.defineProperty(exports, 'registerComponents', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerComponents;
	  }
	});
	Object.defineProperty(exports, 'registerModules', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerModules;
	  }
	});
	Object.defineProperty(exports, 'registerMethods', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerMethods;
	  }
	});
	
	var _bridge = __webpack_require__(112);
	
	Object.defineProperty(exports, 'receiveTasks', {
	  enumerable: true,
	  get: function get() {
	    return _bridge.receiveTasks;
	  }
	});
	
	var _misc = __webpack_require__(113);
	
	Object.defineProperty(exports, 'getRoot', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRoot;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _app = __webpack_require__(84);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _map = __webpack_require__(109);
	
	var _ctrl = __webpack_require__(86);
	
	var _dep = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a Weex instance.
	 *
	 * @param  {string} id
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(id, code, options, data) {
	  (0, _dep.resetTarget)();
	  var instance = _map.instanceMap[id];
	  options = options || {};
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(id, options);
	    _map.instanceMap[id] = instance;
	    result = (0, _ctrl.init)(instance, code, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(85);
	
	var _ctrl = __webpack_require__(86);
	
	var _instance = __webpack_require__(107);
	
	var _instance2 = _interopRequireDefault(_instance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.requireModule = function (name) {
	  return (0, _register.requireModule)(this, name);
	};
	
	/**
	 * @deprecated
	 */
	/**
	 * @fileOverview
	 * Weex instance constructor & definition
	 */
	
	_instance2.default.prototype.updateActions = function () {
	  (0, _ctrl.updateActions)(this);
	};
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.callTasks = function (tasks) {
	  (0, _ctrl.callTasks)(this, tasks);
	};
	
	exports.default = _instance2.default;

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getModule = getModule;
	exports.clearModules = clearModules;
	exports.initModules = initModules;
	exports.initMethods = initMethods;
	exports.requireModule = requireModule;
	exports.requireCustomComponent = requireCustomComponent;
	exports.registerCustomComponent = registerCustomComponent;
	var nativeModules = {};
	
	// for testing
	
	/**
	 * for testing
	 */
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * for testing
	 */
	function clearModules() {
	  nativeModules = {};
	}
	
	// for framework
	
	/**
	 * init modules for an app instance
	 * the second param determines whether to replace an existed method
	 */
	function initModules(modules, ifReplace) {
	  var _loop = function _loop(moduleName) {
	    // init `modules[moduleName][]`
	    var methods = nativeModules[moduleName];
	    if (!methods) {
	      methods = {};
	      nativeModules[moduleName] = methods;
	    }
	
	    // push each non-existed new method
	    modules[moduleName].forEach(function (method) {
	      if (typeof method === 'string') {
	        method = {
	          name: method
	        };
	      }
	
	      if (!methods[method.name] || ifReplace) {
	        methods[method.name] = method;
	      }
	    });
	  };
	
	  for (var moduleName in modules) {
	    _loop(moduleName);
	  }
	}
	
	/**
	 * init app methods
	 */
	function initMethods(Vm, apis) {
	  var p = Vm.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	// for app
	
	/**
	 * get a module of methods for an app instance
	 */
	function requireModule(app, name) {
	  var methods = nativeModules[name];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return app.callTasks({
	        module: name,
	        method: methodName,
	        args: args
	      });
	    };
	  };
	
	  for (var methodName in methods) {
	    _loop2(methodName);
	  }
	  return target;
	}
	
	/**
	 * get a custom component options
	 */
	function requireCustomComponent(app, name) {
	  var customComponentMap = app.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * register a custom component options
	 */
	function registerCustomComponent(app, name, def) {
	  var customComponentMap = app.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(87);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _init.init;
	  }
	});
	
	var _misc = __webpack_require__(106);
	
	Object.defineProperty(exports, 'refresh', {
	  enumerable: true,
	  get: function get() {
	    return _misc.refresh;
	  }
	});
	Object.defineProperty(exports, 'destroy', {
	  enumerable: true,
	  get: function get() {
	    return _misc.destroy;
	  }
	});
	Object.defineProperty(exports, 'getRootElement', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRootElement;
	  }
	});
	Object.defineProperty(exports, 'fireEvent', {
	  enumerable: true,
	  get: function get() {
	    return _misc.fireEvent;
	  }
	});
	Object.defineProperty(exports, 'callback', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callback;
	  }
	});
	Object.defineProperty(exports, 'updateActions', {
	  enumerable: true,
	  get: function get() {
	    return _misc.updateActions;
	  }
	});
	Object.defineProperty(exports, 'callTasks', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callTasks;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _vm = __webpack_require__(88);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _util = __webpack_require__(89);
	
	var _bundle = __webpack_require__(101);
	
	var _misc = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	/**
	 * Init an app by run code witgh data
	 * @param  {object} app
	 * @param  {string} code
	 * @param  {object} data
	 */
	function init(app, code, data) {
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	  var result = void 0;
	
	  // prepare app env methods
	  var bundleDefine = function bundleDefine() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _bundle.defineFn.apply(undefined, [app].concat(args));
	  };
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(app, name, config, _data || data);
	    (0, _misc.updateActions)(app);
	    app.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + app.id + ')');
	  };
	  var bundleVm = _vm2.default;
	  var bundleRegister = function bundleRegister() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _bundle.register.apply(undefined, [app].concat(args));
	  };
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(app, name, {}, _data);
	  };
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(app, name, {}, _data);
	    };
	  };
	  var bundleDocument = app.doc;
	  var bundleRequireModule = function bundleRequireModule(name) {
	    return app.requireModule((0, _util.removeWeexPrefix)(name));
	  };
	
	  // prepare code
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  // run code and get result
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      // timer APIs polyfill in native
	      var timer = app.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return app.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return app.uid.toString();
	        },
	        clearTimeout: function clearTimeout(n) {
	          timer.clearTimeout(n);
	        },
	        clearInterval: function clearInterval(n) {
	          timer.clearInterval(n);
	        }
	      };
	
	      var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	      '__weex_bootstrap__', // alias for bootstrap
	      '__weex_document__', // alias for bootstrap
	      '__weex_require__', '__weex_viewmodel__', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    '__weex_document__', // alias for bootstrap
	    '__weex_require__', '__weex_viewmodel__', functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm);
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(89);
	
	var _state = __webpack_require__(90);
	
	var _compiler = __webpack_require__(96);
	
	var _observer = __webpack_require__(94);
	
	var _directive = __webpack_require__(97);
	
	var _events = __webpack_require__(100);
	
	/**
	 * ViewModel constructor
	 *
	 * @param {string} type
	 * @param {object} options    component options
	 * @param {object} parentVm   which contains _app
	 * @param {object} parentEl   root element or frag block
	 * @param {object} mergedData external data
	 * @param {object} externalEvents external events
	 */
	/**
	 * @fileOverview
	 * ViewModel Constructor & definition
	 */
	
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  parentVm = parentVm || {};
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app || {};
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options && this._app.customComponentMap) {
	    options = this._app.customComponentMap[type];
	  }
	  options = options || {};
	
	  var data = options.data || {};
	
	  this._options = options;
	  this._methods = options.methods || {};
	  this._computed = options.computed || {};
	  this._css = options.style || {};
	  this._ids = {};
	  this._vmEvents = {};
	  this._childrenVms = [];
	  this._type = type;
	
	  // bind events and lifecycles
	  (0, _events.initEvents)(this, externalEvents);
	
	  console.debug('[JS Framework] "init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;
	
	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    (0, _util.extend)(this._data, mergedData);
	  }
	  (0, _state.initState)(this);
	
	  console.debug('[JS Framework] "created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;
	
	  // backward old ready entry
	  if (options.methods && options.methods.ready) {
	    console.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    options.methods.ready.call(this);
	  }
	
	  if (!this._app.doc) {
	    return;
	  }
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	}
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	/**
	 * Watch an function and bind all the data appeared in it. When the related
	 * data changes, the callback will be called with new value as 1st param.
	 *
	 * @param {Function} fn
	 * @param {Function} callback
	 */
	Vm.prototype.$watch = function (fn, callback) {
	  (0, _directive.watch)(this, fn, callback);
	};
	
	Vm.set = _observer.set;
	Vm.delete = _observer.del;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.createNewSet = createNewSet;
	exports.cached = cached;
	exports.typof = typof;
	exports.removeWeexPrefix = removeWeexPrefix;
	exports.removeJSSurfix = removeJSSurfix;
	
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};
	
	var _Set = void 0;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  exports._Set = _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  exports._Set = _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	exports._Set = _Set;
	
	/**
	 * Polyfill in iOS7 by native because the JavaScript polyfill has memory problem.
	 * @return {object}
	 */
	
	function createNewSet() {
	  /* eslint-disable */
	  if ((typeof nativeSet === 'undefined' ? 'undefined' : _typeof(nativeSet)) === 'object') {
	    return nativeSet.create();
	  }
	  /* eslint-enable */
	  return new _Set();
	}
	
	/**
	 * Create a cached version of a pure function.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, toUpper);
	});
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}
	
	// weex name rules
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = exports.isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = exports.isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = exports.isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = exports.isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  var result = str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	  return result;
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(91);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(93);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(94);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	function initState(vm) {
	  vm._watchers = [];
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	}
	
	function initData(vm) {
	  var data = vm._data;
	
	  if (!(0, _util.isPlainObject)(data)) {
	    data = {};
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    (0, _observer.proxy)(vm, keys[i]);
	  }
	  // observe data
	  (0, _observer.observe)(data, vm);
	}
	
	function noop() {}
	
	function initComputed(vm) {
	  var computed = vm._computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, vm);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _util.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _util.bind)(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, def);
	    }
	  }
	}
	
	function makeComputedGetter(getter, owner) {
	  var watcher = new _watcher2.default(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (_dep2.default.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}
	
	function initMethods(vm) {
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key];
	    }
	  }
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(93);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	// import { pushWatcher } from './batcher'
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    (0, _util.extend)(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = (0, _util.createNewSet)(); // new Set()
	  this.newDepIds = (0, _util.createNewSet)(); // new Set()
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _util.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _util.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  (0, _dep.pushTarget)(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  (0, _dep.popTarget)();
	  this.cleanupDeps();
	  return value;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.cleanupDeps = function () {
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else {
	    this.run();
	  }
	  // } else if (this.sync) {
	  //   this.run()
	  // } else {
	  //   // if queued, only overwrite shallow with non-shallow,
	  //   // but not the other way around.
	  //   this.shallow = this.queued
	  //     ? shallow
	  //       ? this.shallow
	  //       : false
	  //     : !!shallow
	  //   this.queued = true
	  //   pushWatcher(this)
	  // }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    ((0, _util.isObject)(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      this.cb.call(this.vm, value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      (0, _util.remove)(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 * @param {Set} seen
	 */
	
	var seenObjects = (0, _util.createNewSet)(); // new Set()
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = Array.isArray(val);
	  isO = (0, _util.isObject)(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92)))

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	exports.pushTarget = pushTarget;
	exports.popTarget = popTarget;
	exports.resetTarget = resetTarget;
	
	var _util = __webpack_require__(89);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget(_target) {
	  if (Dep.target) targetStack.push(Dep.target);
	  Dep.target = _target;
	}
	
	function popTarget() {
	  Dep.target = targetStack.pop();
	}
	
	function resetTarget() {
	  Dep.target = null;
	  targetStack = [];
	}
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  (0, _util.remove)(this.subs, sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;
	
	var _dep = __webpack_require__(93);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(95);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _util.def)(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = _util.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  for (var key in obj) {
	    this.convert(key, obj[key]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  (0, _util.remove)(this.vms, vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    (0, _util.def)(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!(0, _util.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	function set(obj, key, val) {
	  if (Array.isArray(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _util.hasOwn)(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      proxy(vm, key);
	      // vm.$forceUpdate()
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!(0, _util.hasOwn)(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      // obj.$forceUpdate()
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      // vm.$forceUpdate()
	    }
	  }
	}
	
	var KEY_WORDS = ['$index', '$value', '$event'];
	function proxy(vm, key) {
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _util.isReserved)(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	function unproxy(vm, key) {
	  if (!(0, _util.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(89);
	
	var arrayProto = Array.prototype; /* eslint-disable */
	
	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _util.def)(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted = void 0;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	(0, _util.def)(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	(0, _util.def)(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = this.indexOf(index);
	  }
	  if (index > -1) {
	    this.splice(index, 1);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(89);
	
	var _state = __webpack_require__(90);
	
	var _directive = __webpack_require__(97);
	
	var _domHelper = __webpack_require__(99);
	
	/**
	 * build()
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is dynamic)
	 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	/**
	 * @fileOverview
	 * ViewModel template parser & data-binding process
	 */
	
	function build(vm) {
	  var opt = vm._options || {};
	  var template = opt.template || {};
	
	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      compile(vm, template.children[0], vm._parentEl);
	    } else {
	      compile(vm, template.children, vm._parentEl);
	    }
	  } else {
	    compile(vm, template, vm._parentEl);
	  }
	
	  console.debug('[JS Framework] "ready" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:ready');
	  vm._ready = true;
	}
	
	/**
	 * Generate elements by child or children and append to parent elements.
	 * Root element info would be merged if has. The first argument may be an array
	 * if the root element with options.replace has not only one child.
	 *
	 * @param {object|array} target
	 * @param {object}       dest
	 * @param {object}       meta
	 */
	function compile(vm, target, dest, meta) {
	  var app = vm._app || {};
	
	  if (app.lastSignal === -1) {
	    return;
	  }
	
	  if (target.attr && target.attr.hasOwnProperty('static')) {
	    vm._static = true;
	  }
	
	  if (targetIsFragment(target)) {
	    compileFragment(vm, target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (targetIsContent(target)) {
	    console.debug('[JS Framework] compile "content" block by', target);
	    vm._content = (0, _domHelper.createBlock)(vm, dest);
	    return;
	  }
	
	  if (targetNeedCheckRepeat(target, meta)) {
	    console.debug('[JS Framework] compile "repeat" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `repeat` directive!');
	    } else {
	      compileRepeat(vm, target, dest);
	    }
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `if` directive!');
	    } else {
	      compileShown(vm, target, dest, meta);
	    }
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (targetNeedCheckType(typeGetter, meta)) {
	    compileType(vm, target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = targetIsComposed(vm, target, type);
	  if (component) {
	    console.debug('[JS Framework] compile composed component by', target);
	    compileCustomComponent(vm, component, target, dest, type, meta);
	    return;
	  }
	  console.debug('[JS Framework] compile native component by', target);
	  compileNativeComponent(vm, target, dest, type);
	}
	
	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsFragment(target) {
	  return Array.isArray(target);
	}
	
	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}
	
	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}
	
	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}
	
	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}
	
	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function targetIsComposed(vm, target, type) {
	  var component = void 0;
	  if (vm._app && vm._app.customComponentMap) {
	    component = vm._app.customComponentMap[type];
	  }
	  if (vm._options && vm._options.components) {
	    component = vm._options.components[type];
	  }
	  if (target.component) {
	    component = component || {};
	  }
	  return component;
	}
	
	/**
	 * Compile a list of targets.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileFragment(vm, target, dest, meta) {
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  target.forEach(function (child) {
	    compile(vm, child, fragBlock, meta);
	  });
	}
	
	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function compileRepeat(vm, target, dest) {
	  var repeat = target.repeat;
	  var oldStyle = typeof repeat === 'function';
	  var getter = repeat.getter || repeat.expression || repeat;
	  if (typeof getter !== 'function') {
	    getter = function getter() {
	      return [];
	    };
	  }
	  var key = repeat.key || '$index';
	  var value = repeat.value || '$value';
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy;
	
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];
	
	  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}
	
	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileShown(vm, target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }
	
	  bindShown(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function compileType(vm, target, dest, typeGetter, meta) {
	  var type = typeGetter.call(vm);
	  var newMeta = (0, _util.extend)({ type: type }, meta);
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  (0, _directive.watch)(vm, typeGetter, function (value) {
	    var newMeta = (0, _util.extend)({ type: value }, meta);
	    (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    compile(vm, target, fragBlock, newMeta);
	  });
	
	  compile(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileCustomComponent(vm, component, target, dest, type, meta) {
	  var Ctor = vm.constructor;
	  var subVm = new Ctor(type, component, vm, dest, undefined, {
	    'hook:init': function hookInit() {
	      if (vm._static) {
	        this._static = vm._static;
	      }
	      (0, _directive.setId)(vm, null, target.id, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: vm,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      (0, _directive.bindSubVm)(vm, this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        compileChildren(vm, target, this._content);
	      }
	    }
	  });
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target, dest);
	}
	
	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileNativeComponent(vm, template, dest, type) {
	  (0, _directive.applyNaitveComponentOptions)(template);
	
	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    console.debug('[JS Framework] compile to create body for ' + type);
	    element = (0, _domHelper.createBody)(vm, type);
	  } else {
	    console.debug('[JS Framework] compile to create element for ' + type);
	    element = (0, _domHelper.createElement)(vm, type);
	  }
	
	  if (!vm._rootEl) {
	    vm._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = vm._externalBinding || {};
	    var target = binding.template;
	    var parentVm = binding.parent;
	    if (target && target.events && parentVm && element) {
	      for (var _type in target.events) {
	        var handler = parentVm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, (0, _util.bind)(handler, parentVm));
	        }
	      }
	    }
	  }
	
	  (0, _directive.bindElement)(vm, element, template);
	
	  if (template.attr && template.attr.append) {
	    // backward, append prop in attr
	    template.append = template.attr.append;
	  }
	
	  if (template.append) {
	    // give the append attribute for ios adaptation
	    element.attr = element.attr || {};
	    element.attr.append = template.append;
	  }
	
	  var treeMode = template.append === 'tree';
	  var app = vm._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    console.debug('[JS Framework] compile to append single node for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    compileChildren(vm, template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    console.debug('[JS Framework] compile to append whole tree for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	}
	
	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function compileChildren(vm, template, dest) {
	  var app = vm._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      compile(vm, child, dest);
	      return app.lastSignal !== -1;
	    });
	  }
	}
	
	/**
	 * Watch the list update and refresh the changes.
	 *
	 * @param {object} target
	 * @param {object} fragBlock {vms, data, children}
	 * @param {object} info      {getter, key, value, trackBy, oldStyle}
	 */
	function bindRepeat(vm, target, fragBlock, info) {
	  var vms = fragBlock.vms;
	  var children = fragBlock.children;
	  var getter = info.getter;
	  var trackBy = info.trackBy;
	  var oldStyle = info.oldStyle;
	
	  var keyName = info.key;
	  var valueName = info.value;
	
	  function compileItem(item, index, context) {
	    var mergedData = void 0;
	    if (oldStyle) {
	      mergedData = item;
	      if ((0, _util.isObject)(item)) {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' + 'please use "$index" instead');
	            }
	          });
	        }
	      } else {
	        console.warn('[JS Framework] Each list item must be an object in old-style repeat, ' + 'please use `repeat={{v in list}}` instead.');
	        mergedData = {};
	        mergedData[keyName] = index;
	        mergedData[valueName] = item;
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    var newContext = mergeContext(context, mergedData);
	    vms.push(newContext);
	    compile(newContext, target, fragBlock, { repeat: item });
	  }
	
	  var list = watchBlock(vm, fragBlock, getter, 'repeat', function (data) {
	    console.debug('[JS Framework] the "repeat" item has changed', data);
	    if (!fragBlock || !data) {
	      return;
	    }
	
	    var oldChildren = children.slice();
	    var oldVms = vms.slice();
	    var oldData = fragBlock.data.slice();
	    // 1. collect all new refs track by
	    var trackMap = {};
	    var reusedMap = {};
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });
	
	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      if (trackMap.hasOwnProperty(key)) {
	        reusedMap[key] = {
	          item: item, index: index, key: key,
	          target: oldChildren[index],
	          vm: oldVms[index]
	        };
	        reusedList.push(item);
	      } else {
	        (0, _domHelper.removeTarget)(vm, oldChildren[index]);
	      }
	    });
	
	    // 3. create new element foreach new item
	    children.length = 0;
	    vms.length = 0;
	    fragBlock.data = data.slice();
	    fragBlock.updateMark = fragBlock.start;
	
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      var reused = reusedMap[key];
	      if (reused) {
	        if (reused.item === reusedList[0]) {
	          reusedList.shift();
	        } else {
	          reusedList.$remove(reused.item);
	          (0, _domHelper.moveTarget)(vm, reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        if (oldStyle) {
	          reused.vm = item;
	        } else {
	          reused.vm[valueName] = item;
	        }
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, vm);
	      }
	    });
	
	    delete fragBlock.updateMark;
	  });
	
	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, vm);
	  });
	}
	
	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function bindShown(vm, target, fragBlock, meta) {
	  var display = watchBlock(vm, fragBlock, target.shown, 'shown', function (display) {
	    console.debug('[JS Framework] the "if" item was changed', display);
	
	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      compile(vm, target, fragBlock, meta);
	    } else {
	      (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    }
	  });
	
	  fragBlock.display = !!display;
	  if (display) {
	    compile(vm, target, fragBlock, meta);
	  }
	}
	
	/**
	 * Watch calc value changes and append certain type action to differ.
	 * It is used for if or repeat data-binding generator.
	 *
	 * @param  {object}   fragBlock
	 * @param  {function} calc
	 * @param  {string}   type
	 * @param  {function} handler
	 * @return {any}      init value of calc
	 */
	function watchBlock(vm, fragBlock, calc, type, handler) {
	  var differ = vm && vm._app && vm._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;
	
	  return (0, _directive.watch)(vm, calc, function (value) {
	    config.latestValue = value;
	    if (differ && !config.recorded) {
	      differ.append(type, depth, fragBlock.blockId, function () {
	        var latestValue = config.latestValue;
	        handler(latestValue);
	        config.recorded = false;
	        config.latestValue = undefined;
	      });
	    }
	    config.recorded = true;
	  });
	}
	
	/**
	 * Clone a context and merge certain data.
	 *
	 * @param  {object} mergedData
	 * @return {object}
	 */
	function mergeContext(context, mergedData) {
	  var newContext = Object.create(context);
	  newContext._data = mergedData;
	  (0, _state.initData)(newContext);
	  (0, _state.initComputed)(newContext);
	  newContext._realParent = context;
	  if (context._static) {
	    newContext._static = context._static;
	  }
	  return newContext;
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @fileOverview
	                                                                                                                                                                                                                                                                               * Directive Parser
	                                                                                                                                                                                                                                                                               */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(89);
	
	var _watcher = __webpack_require__(91);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	
	var SETTERS = {
	  attr: 'setAttr',
	  style: 'setStyle',
	  event: 'addEvent'
	};
	
	/**
	 * apply the native component's options(specified by template.type)
	 * to the template
	 */
	function applyNaitveComponentOptions(template) {
	  var type = template.type;
	
	  var options = nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if ((0, _util.typof)(template[key]) === 'object' && (0, _util.typof)(options[key]) === 'object') {
	        for (var subkey in options[key]) {
	          if (template[key][subkey] == null) {
	            template[key][subkey] = options[key][subkey];
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * bind all id, attr, classnames, style, events to an element
	 */
	function bindElement(vm, el, template) {
	  setId(vm, el, template.id, vm);
	  setAttr(vm, el, template.attr);
	  setClass(vm, el, template.classList);
	  setStyle(vm, el, template.style);
	  bindEvents(vm, el, template.events);
	}
	
	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function bindSubVm(vm, subVm, template, repeatItem) {
	  subVm = subVm || {};
	  template = template || {};
	
	  var options = subVm._options || {};
	
	  // bind props
	  var props = options.props;
	
	  if (Array.isArray(props)) {
	    props = props.reduce(function (result, value) {
	      result[value] = true;
	      return result;
	    }, {});
	  }
	
	  mergeProps(repeatItem, props, vm, subVm);
	  mergeProps(template.attr, props, vm, subVm);
	}
	
	/**
	 * merge class and styles from vm to sub vm.
	 */
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	
	  // bind subVm to the target element
	  if (target.children) {
	    target.children[target.children.length - 1]._vm = subVm;
	  } else {
	    target._vm = subVm;
	  }
	}
	
	/**
	 * Bind props from vm to sub vm and watch their updates.
	 */
	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }
	
	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = watch(vm, value, function (v) {
	          subVm[key] = v;
	        });
	        subVm[key] = returnValue;
	      } else {
	        subVm[key] = value;
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop(key);
	  }
	}
	
	/**
	 * Bind style from vm to sub vm and watch their updates.
	 */
	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = watch(vm, value, function (v) {
	        if (subVm._rootEl) {
	          subVm._rootEl.setStyle(key, v);
	        }
	      });
	      subVm._rootEl.setStyle(key, returnValue);
	    } else {
	      if (subVm._rootEl) {
	        subVm._rootEl.setStyle(key, value);
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop2(key);
	  }
	}
	
	/**
	 * Bind class & style from vm to sub vm and watch their updates.
	 */
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  var className = '@originalRootEl';
	  css[className] = subVm._rootEl.classStyle;
	
	  function addClassName(list, name) {
	    if ((0, _util.typof)(list) === 'array') {
	      list.unshift(name);
	    }
	  }
	
	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      addClassName(v, className);
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    addClassName(_value, className);
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    addClassName(target, className);
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}
	
	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function setId(vm, el, id, target) {
	  var map = Object.create(null);
	
	  Object.defineProperties(map, {
	    vm: {
	      value: target,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || target._rootEl;
	      },
	      configurable: false
	    }
	  });
	
	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(vm);
	    if (id) {
	      vm._ids[id] = map;
	    }
	    watch(vm, handler, function (newId) {
	      if (newId) {
	        vm._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    vm._ids[id] = map;
	  }
	}
	
	/**
	 * bind attr to an element
	 */
	function setAttr(vm, el, attr) {
	  bindDir(vm, el, 'attr', attr);
	}
	
	function setClassStyle(el, css, classList) {
	  var classStyle = {};
	  var length = classList.length;
	
	  for (var i = 0; i < length; i++) {
	    var style = css[classList[i]];
	    if (style) {
	      for (var key in style) {
	        classStyle[key] = style[key];
	      }
	    }
	  }
	  el.setClassStyle(classStyle);
	}
	
	/**
	 * bind classnames to an element
	 */
	function setClass(vm, el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }
	
	  var style = vm._options && vm._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = watch(vm, classList, function (v) {
	      setClassStyle(el, style, v);
	    });
	    setClassStyle(el, style, _value2);
	  } else {
	    setClassStyle(el, style, classList);
	  }
	}
	
	/**
	 * bind style to an element
	 */
	function setStyle(vm, el, style) {
	  bindDir(vm, el, 'style', style);
	}
	
	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function setEvent(vm, el, type, handler) {
	  el.addEvent(type, (0, _util.bind)(handler, vm));
	}
	
	/**
	 * add all events of an element
	 */
	function bindEvents(vm, el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        console.debug('[JS Framework] The method "' + handler + '" is not defined.');
	      }
	    }
	    var realVm = vm._realParent ? vm._realParent : vm;
	    setEvent(realVm, el, key, handler);
	  }
	}
	
	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function bindDir(vm, el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      bindKey(vm, el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}
	
	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function bindKey(vm, el, name, key, calc) {
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = watch(vm, calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = vm && vm._app && vm._app.differ;
	    if (differ) {
	      differ.append('element', el.depth, el.ref, handler);
	    } else {
	      handler();
	    }
	  });
	
	  el[methodName](key, value);
	}
	
	/**
	 * watch a calc function and callback if the calc value changes
	 */
	function watch(vm, calc, callback) {
	  if (vm._static) {
	    return (typeof calc === 'function' ? calc : (0, _util.parsePath)(calc)).call(vm, vm);
	  }
	  var watcher = new _watcher2.default(vm, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });
	
	  return watcher.value;
	}

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// @todo: It should be registered by native from `registerComponents()`.
	exports.default = {
	  nativeComponentMap: {
	    text: true,
	    image: true,
	    container: true,
	    slider: {
	      type: 'slider',
	      append: 'tree'
	    },
	    cell: {
	      type: 'cell',
	      append: 'tree'
	    }
	  }
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.createBody = createBody;
	exports.createElement = createElement;
	exports.createBlock = createBlock;
	exports.attachTarget = attachTarget;
	exports.moveTarget = moveTarget;
	exports.removeTarget = removeTarget;
	/**
	 * @fileOverview Document & Element Helpers.
	 *
	 * required:
	 * Document#: createElement, createComment, getRef
	 * Element#: appendChild, insertBefore, removeChild, nextSibling
	 */
	
	/**
	 * Create a body by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createBody(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createBody(type);
	}
	
	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createElement(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createElement(type);
	}
	
	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function createBlock(vm, element) {
	  var start = createBlockStart(vm);
	  var end = createBlockEnd(vm);
	  var blockId = lastestBlockId++;
	  if (element.element) {
	    var updateMark = element.updateMark;
	    if (updateMark) {
	      if (updateMark.element) {
	        updateMark = updateMark.end;
	      }
	      element.element.insertAfter(end, updateMark);
	      element.element.insertAfter(start, updateMark);
	      element.updateMark = end;
	    } else {
	      element.element.insertBefore(start, element.end);
	      element.element.insertBefore(end, element.end);
	    }
	    element = element.element;
	  } else {
	    element.appendChild(start);
	    element.appendChild(end);
	  }
	  return { start: start, end: end, element: element, blockId: blockId };
	}
	
	var lastestBlockId = 1;
	
	/**
	 * Create and return a block starter.
	 * Using this._app.doc
	 */
	function createBlockStart(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}
	
	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function createBlockEnd(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('end');
	  return anchor;
	}
	
	/**
	 * Attach target to a certain dest using appendChild by default.
	 * If the dest is a frag block then insert before the ender.
	 * If the target is a frag block then attach the starter and ender in order.
	 *
	 * @param  {object} target
	 * @param  {object} dest
	 */
	function attachTarget(vm, target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = moveTarget(vm, target, after);
	      dest.updateMark = target.element ? target.end : target;
	      return signal;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      return dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      return dest.appendChild(target);
	    }
	  }
	}
	
	/**
	 * Move target before a certain element. The target maybe block or element.
	 *
	 * @param  {object} target
	 * @param  {object} before
	 */
	function moveTarget(vm, target, after) {
	  if (target.element) {
	    return moveBlock(target, after);
	  }
	  return moveElement(target, after);
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function moveElement(element, after) {
	  var parent = after.parentNode;
	  if (parent) {
	    return parent.insertAfter(element, after);
	  }
	}
	
	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function moveBlock(fragBlock, after) {
	  var parent = after.parentNode;
	
	  if (parent) {
	    var _ret = function () {
	      var el = fragBlock.start;
	      var signal = void 0;
	      var group = [el];
	
	      while (el && el !== fragBlock.end) {
	        el = el.nextSibling;
	        group.push(el);
	      }
	
	      var temp = after;
	      group.every(function (el) {
	        signal = parent.insertAfter(el, temp);
	        temp = el;
	        return signal !== -1;
	      });
	
	      return {
	        v: signal
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Remove target from DOM tree.
	 * If the target is a frag block then call _removeBlock
	 *
	 * @param  {object} target
	 */
	function removeTarget(vm, target) {
	  var preserveBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	  if (target._vm) {
	    target._vm.$emit('hook:destroyed');
	  }
	}
	
	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function removeElement(target) {
	  var parent = target.parentNode;
	
	  if (parent) {
	    parent.removeChild(target);
	  }
	}
	
	/**
	 * Remove a frag block.
	 * The second param decides whether the block self should be removed too.
	 *
	 * @param  {object}  fragBlock
	 * @param  {Boolean} preserveBlock=false
	 */
	function removeBlock(fragBlock) {
	  var preserveBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var result = [];
	  var el = fragBlock.start.nextSibling;
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }
	
	  if (!preserveBlock) {
	    removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    removeElement(el);
	  });
	  if (!preserveBlock) {
	    removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$emit = $emit;
	exports.$dispatch = $dispatch;
	exports.$broadcast = $broadcast;
	exports.$on = $on;
	exports.$off = $off;
	exports.initEvents = initEvents;
	exports.mixinEvents = mixinEvents;
	/**
	 * @fileOverview
	 * Everything about component event which includes event object, event listener,
	 * event emitter and lifecycle hooks.
	 */
	
	/**
	 * Event object definition. An event object has `type`, `timestamp` and
	 * `detail` from which a component emit. The event object could be dispatched to
	 * parents or broadcasted to children except `this.stop()` is called.
	 * @param {string} type
	 * @param {any}    detail
	 */
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	
	  /**
	   * stop dispatch and broadcast
	   */
	  this.stop = function () {
	    shouldStop = true;
	  };
	
	  /**
	   * check if it can't be dispatched or broadcasted
	   */
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
	/**
	 * Emit an event but not broadcast down or dispatch up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $emit(type, detail) {
	  var _this = this;
	
	  var events = this._vmEvents;
	  var handlerList = events[type];
	  if (handlerList) {
	    (function () {
	      var evt = new Evt(type, detail);
	      handlerList.forEach(function (handler) {
	        handler.call(_this, evt);
	      });
	    })();
	  }
	}
	
	/**
	 * Emit an event and dispatch it up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	/**
	 * Emit an event and broadcast it down.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
	/**
	 * Add event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
	function $on(type, handler) {
	  if (!type || typeof handler !== 'function') {
	    return;
	  }
	  var events = this._vmEvents;
	  var handlerList = events[type] || [];
	  handlerList.push(handler);
	  events[type] = handlerList;
	
	  // fixed old version lifecycle design
	  if (type === 'hook:ready' && this._ready) {
	    this.$emit('hook:ready');
	  }
	}
	
	/**
	 * Remove event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
	function $off(type, handler) {
	  if (!type) {
	    return;
	  }
	  var events = this._vmEvents;
	  if (!handler) {
	    delete events[type];
	    return;
	  }
	  var handlerList = events[type];
	  if (!handlerList) {
	    return;
	  }
	  handlerList.$remove(handler);
	}
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready', 'destroyed'];
	
	/**
	 * Init events:
	 * 1. listen `events` in component options & `externalEvents`.
	 * 2. bind lifecycle hooks.
	 * @param  {Vm}     vm
	 * @param  {object} externalEvents
	 */
	function initEvents(vm, externalEvents) {
	  var options = vm._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    vm.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    vm.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    vm.$on('hook:' + type, options[type]);
	  });
	}
	
	/**
	 * Bind event related methods to ViewModel instance.
	 * @param  {Vm} vm
	 */
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(102);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(105);
	
	Object.defineProperty(exports, 'defineFn', {
	  enumerable: true,
	  get: function get() {
	    return _define.defineFn;
	  }
	});
	Object.defineProperty(exports, 'register', {
	  enumerable: true,
	  get: function get() {
	    return _define.register;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(103);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(88);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(104);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _register = __webpack_require__(85);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * bootstrap app from a certain custom component with config & data
	 */
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  // 1. validate custom component name first
	  var cleanName = void 0;
	  if ((0, _util.isWeexComponent)(name)) {
	    cleanName = (0, _util.removeWeexPrefix)(name);
	  } else if ((0, _util.isNpmModule)(name)) {
	    cleanName = (0, _util.removeJSSurfix)(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!(0, _register.requireCustomComponent)(app, cleanName)) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  // 2. validate configuration
	  config = (0, _util.isPlainObject)(config) ? config : {};
	  // 2.1 transformer version check
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	  // 2.2 downgrade version check
	  var downgradeResult = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (downgradeResult.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [downgradeResult.errorType, downgradeResult.code, downgradeResult.errorMessage]
	    }]);
	    return new Error('Downgrade[' + downgradeResult.code + ']: ' + downgradeResult.errorMessage);
	  }
	
	  // 3. create a new Vm with custom component name and data
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */var debug;
	/* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	/* nomin */process.env &&
	/* nomin */process.env.NODE_DEBUG &&
	/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */debug = function debug() {
	    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */args.unshift('SEMVER');
	    /* nomin */console.log.apply(console, args);
	    /* nomin */
	  };
	  /* nomin */else
	  /* nomin */debug = function debug() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer) return version;
	
	  if (typeof version !== 'string') return null;
	
	  if (version.length > MAX_LENGTH) return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) return version;else version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
	
	  if (!(this instanceof SemVer)) return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m) throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
	
	  // numberify any prerelease numeric ids
	  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
	    if (/^[0-9]+$/.test(id)) {
	      var num = +id;
	      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
	    }
	    return id;
	  });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function () {
	  return this.version;
	};
	
	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) this.prerelease = [0];else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
	        } else this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof loose === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre' + key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '':case '=':case '==':
	      ret = eq(a, b, loose);break;
	    case '!=':
	      ret = neq(a, b, loose);break;
	    case '>':
	      ret = gt(a, b, loose);break;
	    case '>=':
	      ret = gte(a, b, loose);break;
	    case '<':
	      ret = lt(a, b, loose);break;
	    case '<=':
	      ret = lte(a, b, loose);break;
	    default:
	      throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) return comp;else comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator)) return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m) throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=') this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function () {
	  return this.value;
	};
	
	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY) return true;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range && range.loose === loose) return range;
	
	  if (!(this instanceof Range)) return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function () {
	  return this.range;
	};
	
	Range.prototype.parseRange = function (range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
	      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX) gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) m = 0;
	      if (xp) p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) M = +M + 1;else m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
	
	  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) return false;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return compare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(103);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Normalize a version string.
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v);
	  if (isValid) {
	    return v;
	  }
	
	  v = typeof v === 'string' ? v : '';
	  var split = v.split('.');
	  var i = 0;
	  var result = [];
	
	  while (i < 3) {
	    var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
	    result.push(s);
	    i++;
	  }
	
	  return result.join('.');
	}
	
	/**
	 * Get informations from different error key. Like:
	 * - code
	 * - errorMessage
	 * - errorType
	 * - isDowngrade
	 * @param  {string} key
	 * @param  {string} val
	 * @param  {string} criteria
	 * @return {object}
	 */
	function getError(key, val, criteria) {
	  var result = {
	    isDowngrade: true,
	    errorType: 1,
	    code: 1000
	  };
	  var getMsg = function getMsg(key, val, criteria) {
	    return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
	  };
	  var _key = key.toLowerCase();
	
	  result.errorMessage = getMsg(key, val, criteria);
	
	  if (_key.indexOf('osversion') >= 0) {
	    result.code = 1001;
	  } else if (_key.indexOf('appversion') >= 0) {
	    result.code = 1002;
	  } else if (_key.indexOf('weexversion') >= 0) {
	    result.code = 1003;
	  } else if (_key.indexOf('devicemodel') >= 0) {
	    result.code = 1004;
	  }
	
	  return result;
	}
	
	/**
	 * WEEX framework input(deviceInfo)
	 * {
	 *   platform: 'iOS' or 'android'
	 *   osVersion: '1.0.0' or '1.0' or '1'
	 *   appVersion: '1.0.0' or '1.0' or '1'
	 *   weexVersion: '1.0.0' or '1.0' or '1'
	 *   dDeviceModel: 'MODEL_NAME'
	 * }
	 *
	 * downgrade config(config)
	 * {
	 *   ios: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   },
	 *   android: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   }
	 * }
	 *
	 *
	 * @param  {object} deviceInfo Weex SDK framework input
	 * @param  {object} config     user input
	 * @return {Object}            { isDowngrade: true/false, errorMessage... }
	 */
	function check(config, deviceInfo) {
	  deviceInfo = deviceInfo || global.WXEnvironment;
	  deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};
	
	  var result = {
	    isDowngrade: false // defautl is pass
	  };
	
	  if ((0, _util.typof)(config) === 'function') {
	    var customDowngrade = config.call(this, deviceInfo, {
	      semver: _semver2.default,
	      normalizeVersion: this.normalizeVersion
	    });
	
	    customDowngrade = !!customDowngrade;
	
	    result = customDowngrade ? this.getError('custom', '', 'custom params') : result;
	  } else {
	    config = (0, _util.isPlainObject)(config) ? config : {};
	
	    var platform = deviceInfo.platform || 'unknow';
	    var dPlatform = platform.toLowerCase();
	    var cObj = config[dPlatform] || {};
	
	    for (var i in deviceInfo) {
	      var key = i;
	      var keyLower = key.toLowerCase();
	      var val = deviceInfo[i];
	      var isVersion = keyLower.indexOf('version') >= 0;
	      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
	      var criteria = cObj[i];
	
	      if (criteria && isVersion) {
	        var c = this.normalizeVersion(criteria);
	        var d = this.normalizeVersion(deviceInfo[i]);
	
	        if (_semver2.default.satisfies(d, c)) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      } else if (isDeviceModel) {
	        var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	        if (_criteria.indexOf(val) >= 0) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      }
	    }
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineFn = undefined;
	exports.register = register;
	
	var _util = __webpack_require__(89);
	
	var _register = __webpack_require__(85);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * define(name, factory) for primary usage
	 * or
	 * define(name, deps, factory) for compatibility
	 * Notice: DO NOT use function define() {},
	 * it will cause error after builded by webpack
	 */
	var defineFn = exports.defineFn = function defineFn(app, name) {
	  console.debug('[JS Framework] define a component ' + name);
	
	  // adapt args:
	  // 1. name, deps[], factory()
	  // 2. name, factory()
	  // 3. name, definition{}
	  var factory = void 0,
	      definition = void 0;
	  if ((arguments.length <= 2 ? 0 : arguments.length - 2) > 1) {
	    definition = arguments.length <= 3 ? undefined : arguments[3];
	  } else {
	    definition = arguments.length <= 2 ? undefined : arguments[2];
	  }
	  if (typeof definition === 'function') {
	    factory = definition;
	    definition = null;
	  }
	
	  // resolve definition from factory
	  if (factory) {
	    var r = function r(name) {
	      if ((0, _util.isWeexComponent)(name)) {
	        var cleanName = (0, _util.removeWeexPrefix)(name);
	        return (0, _register.requireCustomComponent)(app, cleanName);
	      }
	      if ((0, _util.isWeexModule)(name)) {
	        var _cleanName = (0, _util.removeWeexPrefix)(name);
	        return app.requireModule(_cleanName);
	      }
	      if ((0, _util.isNormalModule)(name) || (0, _util.isNpmModule)(name)) {
	        var _cleanName2 = (0, _util.removeJSSurfix)(name);
	        return app.commonModules[_cleanName2];
	      }
	    };
	    var m = { exports: {} };
	    factory(r, m.exports, m);
	    definition = m.exports;
	  }
	
	  // apply definition
	  if ((0, _util.isWeexComponent)(name)) {
	    var cleanName = (0, _util.removeWeexPrefix)(name);
	    (0, _register.registerCustomComponent)(app, cleanName, definition);
	  } else if ((0, _util.isWeexModule)(name)) {
	    var _cleanName3 = (0, _util.removeWeexPrefix)(name);
	    (0, _register.initModules)(_defineProperty({}, _cleanName3, definition));
	  } else if ((0, _util.isNormalModule)(name)) {
	    var _cleanName4 = (0, _util.removeJSSurfix)(name);
	    app.commonModules[_cleanName4] = definition;
	  } else if ((0, _util.isNpmModule)(name)) {
	    var _cleanName5 = (0, _util.removeJSSurfix)(name);
	    if (definition.template || definition.style || definition.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      (0, _register.registerCustomComponent)(app, _cleanName5, definition);
	    } else {
	      app.commonModules[_cleanName5] = definition;
	    }
	  }
	};
	
	/**
	 * @deprecated
	 */
	function register(app, type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  (0, _register.registerCustomComponent)(app, type, options);
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.refresh = refresh;
	exports.destroy = destroy;
	exports.destroyVm = destroyVm;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.updateActions = updateActions;
	exports.callTasks = callTasks;
	
	var _util = __webpack_require__(89);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - refresh
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	
	/**
	 * Refresh an app with data to its root component options.
	 * @param  {object} app
	 * @param  {any}    data
	 */
	function refresh(app, data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + app.id + ']');
	  var vm = app.vm;
	  if (vm && data) {
	    // app.doc.close()
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    updateActions(app);
	    app.doc.listener.refreshFinish();
	    // app.doc.open()
	    return;
	  }
	  return new Error('invalid data "' + data + '"');
	}
	
	/**
	 * Destroy an app.
	 * @param  {object} app
	 */
	function destroy(app) {
	  console.debug('[JS Framework] Destory an instance(' + app.id + ')');
	
	  if (app.vm) {
	    destroyVm(app.vm);
	  }
	
	  app.id = '';
	  app.options = null;
	  app.blocks = null;
	  app.vm = null;
	  app.doc.destroy();
	  app.doc = null;
	  app.customComponentMap = null;
	  app.commonModules = null;
	  app.callbacks = null;
	}
	
	/**
	 * Destroy an Vm.
	 * @param {object} vm
	 */
	function destroyVm(vm) {
	  delete vm._app;
	  delete vm._computed;
	  delete vm._css;
	  delete vm._data;
	  delete vm._ids;
	  delete vm._methods;
	  delete vm._options;
	  delete vm._parent;
	  delete vm._parentEl;
	  delete vm._rootEl;
	
	  // remove all watchers
	  if (vm._watchers) {
	    var watcherCount = vm._watchers.length;
	    while (watcherCount--) {
	      vm._watchers[watcherCount].teardown();
	    }
	    delete vm._watchers;
	  }
	
	  // destroy child vms recursively
	  if (vm._childrenVms) {
	    var vmCount = vm._childrenVms.length;
	    while (vmCount--) {
	      destroyVm(vm._childrenVms[vmCount]);
	    }
	    delete vm._childrenVms;
	  }
	
	  console.debug('[JS Framework] "destroyed" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:destroyed');
	
	  delete vm._type;
	  delete vm._vmEvents;
	}
	
	/**
	 * Get a JSON object to describe the document body.
	 * @param  {object} app
	 * @return {object}
	 */
	function getRootElement(app) {
	  var doc = app.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	/**
	 * Fire an event from renderer. The event has type, an event object and an
	 * element ref. If the event comes with some virtual-DOM changes, it should
	 * have one more parameter to describe the changes.
	 * @param  {object} app
	 * @param  {string} ref
	 * @param  {type}   type
	 * @param  {object} e
	 * @param  {object} domChanges
	 */
	function fireEvent(app, ref, type, e, domChanges) {
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + app.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return app.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	  var el = app.doc.getRef(ref);
	  if (el) {
	    // app.doc.close()
	    var result = app.doc.fireEvent(el, type, e, domChanges);
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    // app.doc.open()
	    return result;
	  }
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	/**
	 * Make a callback for a certain app.
	 * @param  {object}   app
	 * @param  {number}   callbackId
	 * @param  {any}      data
	 * @param  {boolean}  ifKeepAlive
	 */
	function callback(app, callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + app.id + ')');
	  var callback = app.callbacks[callbackId];
	  if (typeof callback === 'function') {
	    // app.doc.close()
	    callback(data);
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      app.callbacks[callbackId] = undefined;
	    }
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    // app.doc.open()
	    return;
	  }
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	/**
	 * Collect all virtual-DOM mutations together and send them to renderer.
	 * @param  {object} app
	 */
	function updateActions(app) {
	  app.differ.flush();
	  var tasks = [];
	  if (app.doc && app.doc.listener && app.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(app.doc.listener.updates));
	    app.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return callTasks(app, tasks);
	  }
	}
	
	/**
	 * Call all tasks from an app to renderer (native).
	 * @param  {object} app
	 * @param  {array}  tasks
	 */
	function callTasks(app, tasks) {
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(arg, app);
	    });
	  });
	
	  return _config2.default.sendTasks(app.id, tasks, '-1');
	}
	
	/**
	 * Normalize a value. Specially, if the value is a function, then generate a function id
	 * and save it to `app.callbacks`, at last return the function id.
	 * @param  {any}        v
	 * @param  {object}     app
	 * @return {primitive}
	 */
	function normalize(v, app) {
	  var type = (0, _util.typof)(v);
	
	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	      if (v instanceof _config2.default.Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      app.callbacks[++app.uid] = v;
	      return app.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;
	
	var _differ = __webpack_require__(108);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * App constructor for Weex framework.
	 * @param {string} id
	 * @param {object} options
	 */
	/**
	 * @fileOverview
	 * Weex App constructor & definition
	 */
	
	function App(id, options) {
	  this.id = id;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.commonModules = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(id, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(id);
	  this.uid = 0;
	}

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Differ = function () {
	  function Differ(id) {
	    _classCallCheck(this, Differ);
	
	    this.id = id;
	    this.map = [];
	    this.hooks = [];
	  }
	
	  _createClass(Differ, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.map.length === 0;
	    }
	  }, {
	    key: 'append',
	    value: function append(type, depth, ref, handler) {
	      var _this = this;
	
	      if (!this.hasTimer) {
	        this.hasTimer = true;
	        setTimeout(function () {
	          _this.hasTimer = false;
	          _this.flush(true);
	        }, 0);
	      }
	      var map = this.map;
	      if (!map[depth]) {
	        map[depth] = {};
	      }
	      var group = map[depth];
	      if (!group[type]) {
	        group[type] = {};
	      }
	      if (type === 'element') {
	        if (!group[type][ref]) {
	          group[type][ref] = [];
	        }
	        group[type][ref].push(handler);
	      } else {
	        group[type][ref] = handler;
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush(isTimeout) {
	      var map = this.map.slice();
	      this.map.length = 0;
	      map.forEach(function (group) {
	        callTypeMap(group, 'repeat');
	        callTypeMap(group, 'shown');
	        callTypeList(group, 'element');
	      });
	
	      var hooks = this.hooks.slice();
	      this.hooks.length = 0;
	      hooks.forEach(function (fn) {
	        fn();
	      });
	
	      if (!this.isEmpty()) {
	        this.flush();
	      }
	    }
	  }, {
	    key: 'then',
	    value: function then(fn) {
	      this.hooks.push(fn);
	    }
	  }]);
	
	  return Differ;
	}();
	
	exports.default = Differ;
	
	
	function callTypeMap(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    map[ref]();
	  }
	}
	
	function callTypeList(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    var list = map[ref];
	    list.forEach(function (handler) {
	      handler();
	    });
	  }
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instanceMap = exports.instanceMap = {};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _ctrl = __webpack_require__(86);
	
	var _map = __webpack_require__(109);
	
	var _dep = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Init config informations for Weex framework
	 * @param  {object} cfg
	 */
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	  _config2.default.Listener = cfg.Listener;
	}
	
	/**
	 * Refresh a Weex instance with data.
	 *
	 * @param  {string} id
	 * @param  {object} data
	 */
	function refreshInstance(id, data) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.refresh)(instance, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}
	
	/**
	 * Destroy a Weex instance.
	 * @param  {string} id
	 */
	function destroyInstance(id) {
	  (0, _dep.resetTarget)();
	  var instance = _map.instanceMap[id];
	  if (!instance) {
	    return new Error('invalid instance id "' + id + '"');
	  }
	  (0, _ctrl.destroy)(instance);
	  delete _map.instanceMap[id];
	  return _map.instanceMap;
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(88);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	/**
	 * Register the name of each native component.
	 * @param  {array} components array of name
	 */
	
	function registerComponents(components) {
	  if (Array.isArray(components)) {
	    components.forEach(function register(name) {
	      /* istanbul ignore if */
	      if (!name) {
	        return;
	      }
	      if (typeof name === 'string') {
	        nativeComponentMap[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        nativeComponentMap[name.type] = name;
	      }
	    });
	  }
	}
	
	/**
	 * Register the name and methods of each module.
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    (0, _register.initModules)(modules);
	  }
	}
	
	/**
	 * Register the name and methods of each api.
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(methods) {
	  if ((typeof methods === 'undefined' ? 'undefined' : _typeof(methods)) === 'object') {
	    (0, _register.initMethods)(_vm2.default, methods);
	  }
	}
	
	// @todo: Hack for this framework only. Will be re-designed or removed later.
	global.registerMethods = registerMethods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(109);
	
	var _ctrl = __webpack_require__(86);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var jsHandlers = {
	  fireEvent: function fireEvent(id) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return _ctrl.fireEvent.apply(undefined, [_map.instanceMap[id]].concat(args));
	  },
	  callback: function callback(id) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    return _ctrl.callback.apply(undefined, [_map.instanceMap[id]].concat(args));
	  }
	};
	
	/**
	 * Accept calls from native (event or callback).
	 *
	 * @param  {string} id
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(id, tasks) {
	  var instance = _map.instanceMap[id];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(id);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + id + '" or tasks');
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	
	var _map = __webpack_require__(109);
	
	var _ctrl = __webpack_require__(86);
	
	/**
	 * Get a whole element tree of an instance for debugging.
	 * @param  {string} id
	 * @return {object} a virtual dom tree
	 */
	function getRoot(id) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.getRootElement)(instance);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	var frameworks = void 0;
	
	var versionRegExp = /^\s*\/\/ *(\{[^\}]*\}) *\r?\n/;
	
	/**
	 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
	 * Bundle should make sure that it starts with a line of JSON comment and is
	 * more that one line.
	 * @param  {string} code
	 * @return {object}
	 */
	function checkVersion(code) {
	  var info = void 0;
	  var result = versionRegExp.exec(code);
	  if (result) {
	    try {
	      info = JSON.parse(result[1]);
	    } catch (e) {}
	  }
	  return info;
	}
	
	var instanceMap = {};
	
	/**
	 * Check which framework a certain JS Bundle code based to. And create instance
	 * by this framework.
	 * @param {string} id
	 * @param {string} code
	 * @param {object} config
	 * @param {object} data
	 */
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!frameworks[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return frameworks[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	/**
	 * Register methods which init each frameworks.
	 * @param {string} methodName
	 */
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var name in frameworks) {
	      var framework = frameworks[name];
	      if (framework && framework[methodName]) {
	        framework[methodName].apply(framework, arguments);
	      }
	    }
	  };
	}
	
	/**
	 * Register methods which will be called for each instance.
	 * @param {string} methodName
	 */
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = frameworks[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	/**
	 * Adapt some legacy method(s) which will be called for each instance. These
	 * methods should be deprecated and removed later.
	 * @param {string} methodName
	 * @param {string} nativeMethodName
	 */
	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram2;
	
	      return (_frameworks$info$fram2 = frameworks[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	function init(config) {
	  frameworks = config.frameworks || {};
	
	  // Init each framework by `init` method and `config` which contains three
	  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
	  // `sendTasks(...args)`.
	  for (var name in frameworks) {
	    var framework = frameworks[name];
	    framework.init(config);
	  }
	
	  // @todo: The method `registerMethods` will be re-designed or removed later.
	  ;['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);
	
	  adaptInstance('receiveTasks', 'callJS');
	
	  return methods;
	}

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex",
		"version": "0.4.0",
		"description": "A framework for building Mobile cross-platform UI",
		"license": "Apache-2.0",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"homepage": "http://alibaba.github.io/weex/",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"private": true,
		"keywords": [
			"weex",
			"hybrid",
			"webcomponent",
			"appframework",
			"mvvm",
			"javascript",
			"webkit",
			"v8",
			"jscore",
			"html5",
			"android",
			"ios",
			"yunos"
		],
		"engines": {
			"node": ">=4"
		},
		"scripts": {
			"postinstall": "bash ./bin/install-hooks.sh",
			"build:config": "node build/config.frameworks.js",
			"build:browser": "wwp && webpack --config build/webpack.browser.config.js",
			"build:common": "webpack --config build/webpack.common.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && npm run build:common && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "wwp && webpack --watch --config build/webpack.browser.config.js",
			"dev:native": "webpack --watch --config build/webpack.native.config.js",
			"dev:examples": "webpack --watch --config build/webpack.examples.config.js",
			"dev:test": "webpack --watch --config build/webpack.test.config.js",
			"build": "npm run build:native && npm run build:browser && npm run build:examples && npm run build:test",
			"lint": "eslint html5",
			"test:unit": "mocha --compilers js:babel-core/register html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:e2e": "npm run build:browser && node html5/test/e2e/runner.js",
			"test": "npm run build:config && npm run lint && npm run test:cover && npm run test:e2e",
			"serve": "serve ./ -p 12580",
			"clean:examples": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mexamples\\033[0m\" && rm -vrf examples/build/*",
			"clean:test": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mtest\\033[0m\" && rm -vrf test/build/*",
			"clean": "npm run clean:examples && npm run clean:test",
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.4.0",
			"framework": "0.16.17",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"httpurl": "^0.1.1",
			"lazyimg": "^0.1.2",
			"modals": "^0.1.6",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"weex-components": "^0.2.0"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-plugin-transform-runtime": "^6.15.0",
			"babel-preset-es2015": "^6.9.0",
			"babel-runtime": "^6.11.6",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
			"http-server": "^0.9.0",
			"isparta": "^4.0.0",
			"istanbul": "^0.4.3",
			"json-loader": "^0.5.4",
			"mocha": "^2.5.3",
			"nightwatch": "^0.9.4",
			"phantomjs-prebuilt": "^2.1.7",
			"selenium-server": "2.53.1",
			"serve": "^1.4.0",
			"sinon": "^1.17.4",
			"sinon-chai": "^2.8.0",
			"style-loader": "^0.13.1",
			"uglify-js": "^2.6.4",
			"webpack": "^1.13.1",
			"weex-loader": "^0.3.1",
			"wwp": "^0.2.0"
		}
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = $;
	exports.$el = $el;
	exports.$vm = $vm;
	exports.$renderThen = $renderThen;
	exports.$scrollTo = $scrollTo;
	exports.$transition = $transition;
	exports.$getConfig = $getConfig;
	exports.$sendHttp = $sendHttp;
	exports.$openURL = $openURL;
	exports.$setTitle = $setTitle;
	exports.$call = $call;
	
	var _util = __webpack_require__(89);
	
	/**
	 * ==========================================================
	 * common
	 * ==========================================================
	 */
	
	/**
	 * @deprecated use $vm instead
	 * find the vm by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $(id) {
	  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * find the element by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Element}
	 */
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	function $el(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.el;
	  }
	}
	
	/**
	 * find the vm of the custom component by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $vm(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * Fire when differ rendering finished
	 *
	 * @param  {Function} fn
	 */
	function $renderThen(fn) {
	  var app = this._app;
	  var differ = app.differ;
	  return differ.then(function () {
	    fn();
	  });
	}
	
	/**
	 * scroll an element specified by id into view,
	 * moreover specify a number of offset optionally
	 * @param  {string} id
	 * @param  {number} offset
	 */
	function $scrollTo(id, offset) {
	  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
	  var el = this.$el(id);
	  if (el) {
	    var dom = this._app.requireModule('dom');
	    dom.scrollToElement(el.ref, { offset: offset });
	  }
	}
	
	/**
	 * perform transition animation on an element specified by id
	 * @param  {string}   id
	 * @param  {object}   options
	 * @param  {object}   options.styles
	 * @param  {object}   options.duration(ms)
	 * @param  {object}   [options.timingFunction]
	 * @param  {object}   [options.delay=0(ms)]
	 * @param  {Function} callback
	 */
	function $transition(id, options, callback) {
	  var _this = this;
	
	  var el = this.$el(id);
	  if (el && options && options.styles) {
	    var animation = this._app.requireModule('animation');
	    animation.transition(el.ref, options, function () {
	      _this._setStyle(el, options.styles);
	      callback && callback.apply(undefined, arguments);
	    });
	  }
	}
	
	/**
	 * get some config
	 * @return {object} some config for app instance
	 * @property {string} bundleUrl
	 * @property {boolean} debug
	 * @property {object} env
	 * @property {string} env.weexVersion(ex. 1.0.0)
	 * @property {string} env.appName(ex. TB/TM)
	 * @property {string} env.appVersion(ex. 5.0.0)
	 * @property {string} env.platform(ex. iOS/Android)
	 * @property {string} env.osVersion(ex. 7.0.0)
	 * @property {string} env.deviceModel **native only**
	 * @property {number} env.[deviceWidth=750]
	 * @property {number} env.deviceHeight
	 */
	function $getConfig(callback) {
	  var config = (0, _util.extend)({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if ((0, _util.typof)(callback) === 'function') {
	    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
	    callback(config);
	  }
	  return config;
	}
	
	/**
	 * @deprecated
	 * request network via http protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendHttp(params, callback) {
	  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}
	
	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  console.warn('[JS Framework] Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}
	
	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setTitle(title);
	}
	
	/**
	 * @deprecated use "require('@weex-module/moduleName') instead"
	 * invoke a native method by specifing the name of module and method
	 * @param  {string} moduleName
	 * @param  {string} methodName
	 * @param  {...*} the rest arguments
	 */
	function $call(moduleName, methodName) {
	  console.warn('[JS Framework] Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
	  var module = this._app.requireModule(moduleName);
	  if (module && module[methodName]) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    module[methodName].apply(module, args);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzMwNGE3NGMwYjIwYjQ2YmI5YWIiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9vYmplY3RTZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvYXJyYXlGcm9tLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvdmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2xpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3ZhbmlsbGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS93YXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvcHJvY2Vzcy8wLjExLjkvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9kZXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3NlbXZlci81LjMuMC9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvZGVmaW5lLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9kaWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWFwLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvc3RhdGljL2xpZmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvYnJpZGdlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvc3RhdGljL21pc2MuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9pbml0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UuanNvbiIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJuYXRpdmUiLCJ0cmFuc2Zvcm1lciIsIm1ldGhvZE5hbWUiLCJnbG9iYWwiLCJyZXQiLCJFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsInRvU3RyaW5nIiwiZnJhbWV3b3JrVmVyc2lvbiIsInRyYW5zZm9ybWVyVmVyc2lvbiIsInJlZ2lzdGVyTWV0aG9kcyIsImV4dGVuZCIsImRlZiIsInJlbW92ZSIsImhhc093biIsImJpbmQiLCJ0b0FycmF5IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwidGFyZ2V0Iiwic3JjIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlyc3QiLCJzaGlmdCIsImtleSIsImxlbmd0aCIsIm9iaiIsInZhbCIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJhcnIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZm4iLCJjdHgiLCJhIiwibCIsImFyZ3VtZW50cyIsImFwcGx5IiwibGlzdCIsInN0YXJ0IiwiaSIsIkFycmF5IiwiT0JKRUNUX1NUUklORyIsInNldFRpbWVvdXQiLCJzZXRUaW1lb3V0TmF0aXZlIiwidGltZW91dE1hcCIsInRpbWVvdXRJZCIsImNiIiwidGltZSIsInNldFRpbWVvdXRDYWxsYmFjayIsImlkIiwiV1hFbnZpcm9ubWVudCIsInBsYXRmb3JtIiwiUHJvbWlzZSIsInJlcXVpcmUiLCJjbGFzc29mIiwidGVzdCIsImNvZiIsIlRBRyIsIkFSRyIsInRyeUdldCIsIml0IiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJPIiwiVCIsIkIiLCJ1bmRlZmluZWQiLCJjYWxsZWUiLCJzbGljZSIsInN0b3JlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibmFtZSIsIlNIQVJFRCIsIndpbmRvdyIsIk1hdGgiLCJzZWxmIiwiRnVuY3Rpb24iLCJfX2ciLCJweCIsInJhbmRvbSIsImNvbmNhdCIsImhpZGUiLCJoYXMiLCJTUkMiLCJUT19TVFJJTkciLCIkdG9TdHJpbmciLCJUUEwiLCJzcGxpdCIsImluc3BlY3RTb3VyY2UiLCJzYWZlIiwiaXNGdW5jdGlvbiIsImpvaW4iLCJTdHJpbmciLCJkUCIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJmIiwiYW5PYmplY3QiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiUCIsIkF0dHJpYnV0ZXMiLCJUeXBlRXJyb3IiLCJnZXQiLCJleGVjIiwiZG9jdW1lbnQiLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJTIiwidmFsdWVPZiIsImJpdG1hcCIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiJGF0IiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwicG9pbnQiLCJkb25lIiwidG9JbnRlZ2VyIiwiZGVmaW5lZCIsInRoYXQiLCJwb3MiLCJzIiwiYiIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsIkxJQlJBUlkiLCIkZXhwb3J0IiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJJdGVyYXRvclByb3RvdHlwZSIsIkYiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIklTX1BST1RPIiwiSVNfQklORCIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiVSIsIlciLCJSIiwiYUZ1bmN0aW9uIiwiYyIsImNyZWF0ZSIsImRlc2NyaXB0b3IiLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwicmVzdWx0IiwiZ2V0S2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCIka2V5cyIsInRvSU9iamVjdCIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwicHVzaCIsIklPYmplY3QiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvTGVuZ3RoIiwidG9JbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsIm1pbiIsIm1heCIsInNoYXJlZCIsImRvY3VtZW50RWxlbWVudCIsInRhZyIsInN0YXQiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCIkaXRlcmF0b3JzIiwid2tzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9uIiwiYWRkVG9VbnNjb3BhYmxlcyIsInN0ZXAiLCJfayIsIkFyZ3VtZW50cyIsIlVOU0NPUEFCTEVTIiwiQXJyYXlQcm90byIsImFuSW5zdGFuY2UiLCJmb3JPZiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsInRhc2siLCJzZXQiLCJtaWNyb3Rhc2siLCJQUk9NSVNFIiwicHJvY2VzcyIsIiRQcm9taXNlIiwiaXNOb2RlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIkdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwicHJvbWlzZSIsInJlc29sdmUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsInRoZW4iLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJDIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZWplY3QiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsInBlcmZvcm0iLCJub3RpZnkiLCJpc1JlamVjdCIsIl9uIiwiY2hhaW4iLCJfYyIsIl92Iiwib2siLCJfcyIsInJ1biIsInJlYWN0aW9uIiwiaGFuZGxlciIsImZhaWwiLCJkb21haW4iLCJfaCIsIm9uSGFuZGxlVW5oYW5kbGVkIiwiZW50ZXIiLCJleGl0Iiwib25VbmhhbmRsZWQiLCJhYnJ1cHQiLCJpc1VuaGFuZGxlZCIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsIl9hIiwib25yZWplY3Rpb25oYW5kbGVkIiwiJHJlamVjdCIsIl9kIiwiX3ciLCIkcmVzb2x2ZSIsIndyYXBwZXIiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInIiLCJjYXBhYmlsaXR5IiwieCIsIml0ZXIiLCJhbGwiLCJpdGVyYWJsZSIsInJlbWFpbmluZyIsIiRpbmRleCIsImFscmVhZHlDYWxsZWQiLCJyYWNlIiwiZm9yYmlkZGVuRmllbGQiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlckZuIiwiaXRlcmF0b3IiLCJnZXRJdGVyYXRvck1ldGhvZCIsIlNQRUNJRVMiLCJEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsImxpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwiYXJncyIsIm5leHRUaWNrIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltcG9ydFNjcmlwdHMiLCJyZW1vdmVDaGlsZCIsImNsZWFyIiwidW4iLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaGVhZCIsImxhc3QiLCJmbHVzaCIsInBhcmVudCIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiREVTQ1JJUFRPUlMiLCJLRVkiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsIm5hdGl2ZUxvZyIsIkxFVkVMUyIsImxldmVsTWFwIiwiZ2VuZXJhdGVMZXZlbE1hcCIsImRlYnVnIiwiY2hlY2tMZXZlbCIsImZvcm1hdCIsImxvZyIsImluZm8iLCJ3YXJuIiwiX19vcmlfXyIsImZvckVhY2giLCJsZXZlbEluZGV4IiwibGV2ZWwiLCJ0eXBlSW5kZXgiLCJsb2dMZXZlbCIsIm1hcCIsInYiLCJ0b0xvd2VyQ2FzZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnT1BTIiwicElFIiwiJGFzc2lnbiIsIkEiLCJLIiwiayIsImFMZW4iLCJnZXRTeW1ib2xzIiwiaXNFbnVtIiwiaiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNldFByb3RvdHlwZU9mIiwibWFnaWMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfX3Byb3RvX18iLCJwb2x5ZmlsbCIsInRvU3RyIiwiaXNDYWxsYWJsZSIsIm51bWJlciIsIk51bWJlciIsImlzRmluaXRlIiwiYWJzIiwibWF4U2FmZUludGVnZXIiLCJwb3ciLCJsZW4iLCJhcnJheUxpa2UiLCJpdGVtcyIsIm1hcEZuIiwia1ZhbHVlIiwiY29uZmlnIiwiRG9jdW1lbnQiLCJFbGVtZW50IiwiQ29tbWVudCIsIkxpc3RlbmVyIiwiZnJhbWV3b3JrcyIsInNlbmRUYXNrcyIsImNhbGxOYXRpdmUiLCJOb2RlIiwiREVGQVVMVF9UQUdfTkFNRSIsImluc3RhbmNlTWFwIiwibmV4dE5vZGVSZWYiLCJ1cmwiLCJVUkwiLCJub2RlTWFwIiwiZ2VuQ2FsbFRhc2tzIiwiY3JlYXRlRG9jdW1lbnRFbGVtZW50IiwiaGFzQWRkRWxlbWVudEhhbmRsZXIiLCJjYWxsQWRkRWxlbWVudCIsInRhc2tzIiwiaXNBcnJheSIsInJldHVyblZhbHVlIiwibWV0aG9kIiwicmVmIiwianNvbiIsImRlc3Ryb3kiLCJiYXRjaGVkIiwiZG9jSWQiLCJvd25lckRvY3VtZW50Iiwicm9sZSIsImRlcHRoIiwiX2RvY3VtZW50RWxlbWVudCIsImFwcGVuZEJvZHkiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJkb2MiLCJwdXJlQ2hpbGRyZW4iLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJiZWZvcmVJbmRleCIsIm5vZGVUeXBlIiwibGlua1BhcmVudCIsImNoaWxkIiwic2V0Qm9keSIsIm5vZGVJZCIsImNyZWF0ZUJvZHkiLCJfcm9vdCIsImJvZHkiLCJwcm9wcyIsInRhZ05hbWUiLCJjcmVhdGVDb21tZW50IiwidGV4dCIsImZpcmVFdmVudCIsImRvbUNoYW5nZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidXBkYXRlRWxlbWVudCIsImdldFJlZiIsImNoYW5nZXMiLCJhdHRycyIsInNldEF0dHIiLCJzZXRTdHlsZSIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0ciIsImNsYXNzU3R5bGUiLCJpbnNlcnRJbmRleCIsInJlZ2lzdGVyTm9kZSIsImFkZEVsZW1lbnQiLCJtb3ZlSW5kZXgiLCJtb3ZlRWxlbWVudCIsInB1cmVCZWZvcmUiLCJuZXh0RWxlbWVudCIsImluc2VydEFmdGVyIiwiYWZ0ZXIiLCJwcmV2aW91c0VsZW1lbnQiLCJwcmVzZXJ2ZWQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUVsZW1lbnQiLCJuZXdJbmRleCIsImNoYW5nZVNpYmxpbmciLCJuZXdJbmRleEFmdGVyIiwiYmVmb3JlTmV3IiwiYWZ0ZXJOZXciLCJzaWxlbnQiLCJyZXNldENsYXNzU3R5bGUiLCJzZXRDbGFzc1N0eWxlIiwic2V0U3R5bGVzIiwidG9TdHlsZSIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJ0b0pTT04iLCJjcmVhdGVBY3Rpb24iLCJ1cGRhdGVzIiwiY3JlYXRlRmluaXNoIiwiY2FsbGJhY2siLCJ1cGRhdGVGaW5pc2giLCJyZWZyZXNoRmluaXNoIiwiZWxlbWVudCIsImFjdGlvbnMiLCJhZGRBY3Rpb25zIiwidGFyZ2V0UmVmIiwicGFyZW50UmVmIiwiVmFuaWxsYSIsIldlZXgiLCJpbml0IiwicmVnaXN0ZXJDb21wb25lbnRzIiwicmVnaXN0ZXJNb2R1bGVzIiwicHJlcGFyZUluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2UiLCJkZXN0cm95SW5zdGFuY2UiLCJnZXRSb290IiwicmVjZWl2ZVRhc2tzIiwiY2ZnIiwiY29tcG9uZW50cyIsIm1vZHVsZXMiLCJhcGlzIiwib3B0aW9ucyIsImNvZGUiLCJidW5kbGVVcmwiLCJjYWxsYmFja3MiLCJsYXN0Q2FsbGJhY2tJZCIsImFkZENhbGxiYWNrIiwiZnVuYyIsImhhbmRsZUNhbGxiYWNrIiwiZnVuY0lkIiwiaWZMYXN0IiwianNIYW5kbGVycyIsInJlc3VsdHMiLCJ1bnNoaWZ0IiwiaW5zdGFuY2UiLCJyZXF1aXJlTW9kdWxlIiwidXBkYXRlQWN0aW9ucyIsImNhbGxUYXNrcyIsImdldE1vZHVsZSIsImNsZWFyTW9kdWxlcyIsImluaXRNb2R1bGVzIiwiaW5pdE1ldGhvZHMiLCJyZXF1aXJlQ3VzdG9tQ29tcG9uZW50IiwicmVnaXN0ZXJDdXN0b21Db21wb25lbnQiLCJuYXRpdmVNb2R1bGVzIiwibW9kdWxlTmFtZSIsImlmUmVwbGFjZSIsIlZtIiwicCIsImFwaU5hbWUiLCJhcHAiLCJjdXN0b21Db21wb25lbnRNYXAiLCJyZWZyZXNoIiwiZ2V0Um9vdEVsZW1lbnQiLCJidW5kbGVEZWZpbmUiLCJidW5kbGVCb290c3RyYXAiLCJfZGF0YSIsImJ1bmRsZVZtIiwiYnVuZGxlUmVnaXN0ZXIiLCJidW5kbGVSZW5kZXIiLCJidW5kbGVSZXF1aXJlIiwiYnVuZGxlRG9jdW1lbnQiLCJidW5kbGVSZXF1aXJlTW9kdWxlIiwiZnVuY3Rpb25Cb2R5Iiwic3Vic3RyIiwidGltZXIiLCJ0aW1lckFQSXMiLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsIm4iLCJjbGVhckludGVydmFsIiwicGFyZW50Vm0iLCJwYXJlbnRFbCIsIm1lcmdlZERhdGEiLCJleHRlcm5hbEV2ZW50cyIsIl9wYXJlbnQiLCJfcmVhbFBhcmVudCIsIl9hcHAiLCJfY2hpbGRyZW5WbXMiLCJfb3B0aW9ucyIsIl9tZXRob2RzIiwiX2NvbXB1dGVkIiwiY29tcHV0ZWQiLCJfY3NzIiwiX2lkcyIsIl92bUV2ZW50cyIsIl90eXBlIiwiJGVtaXQiLCJfaW5pdGVkIiwiX2NyZWF0ZWQiLCJyZWFkeSIsIl9wYXJlbnRFbCIsIiR3YXRjaCIsImRlbGV0ZSIsImlzUmVzZXJ2ZWQiLCJjcmVhdGVOZXdTZXQiLCJjYWNoZWQiLCJ0eXBvZiIsInJlbW92ZVdlZXhQcmVmaXgiLCJyZW1vdmVKU1N1cmZpeCIsInN0ciIsImhhc1Byb3RvIiwiX1NldCIsIlNldCIsIm1hdGNoIiwiYWRkIiwibmF0aXZlU2V0IiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJ0b1VwcGVyIiwiXyIsInRvVXBwZXJDYXNlIiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJzdWJzdHJpbmciLCJXRUVYX0NPTVBPTkVOVF9SRUciLCJXRUVYX01PRFVMRV9SRUciLCJOT1JNQUxfTU9EVUxFX1JFRyIsIkpTX1NVUkZJWF9SRUciLCJpc1dlZXhDb21wb25lbnQiLCJpc1dlZXhNb2R1bGUiLCJpc05vcm1hbE1vZHVsZSIsImlzTnBtTW9kdWxlIiwiaW5pdFN0YXRlIiwiaW5pdERhdGEiLCJpbml0Q29tcHV0ZWQiLCJ2bSIsIl93YXRjaGVycyIsIm5vb3AiLCJ1c2VyRGVmIiwibWFrZUNvbXB1dGVkR2V0dGVyIiwiZ2V0dGVyIiwib3duZXIiLCJ3YXRjaGVyIiwibGF6eSIsImNvbXB1dGVkR2V0dGVyIiwiZGlydHkiLCJldmFsdWF0ZSIsImRlcGVuZCIsIldhdGNoZXIiLCJleHBPckZuIiwiaXNGbiIsImV4cHJlc3Npb24iLCJhY3RpdmUiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImVudiIsIk5PREVfRU5WIiwicXVldWVkIiwic2hhbGxvdyIsImRlZXAiLCJ0cmF2ZXJzZSIsImNsZWFudXBEZXBzIiwiYWRkRGVwIiwiZGVwIiwiYWRkU3ViIiwicmVtb3ZlU3ViIiwidG1wIiwidXBkYXRlIiwib2xkVmFsdWUiLCJ0ZWFyZG93biIsIl9pc0JlaW5nRGVzdHJveWVkIiwiX3ZGb3JSZW1vdmluZyIsInNlZW5PYmplY3RzIiwic2VlbiIsImlzQSIsImlzTyIsIl9fb2JfXyIsImRlcElkIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb25zIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiRGVwIiwicHVzaFRhcmdldCIsInBvcFRhcmdldCIsInJlc2V0VGFyZ2V0Iiwic3VicyIsInRhcmdldFN0YWNrIiwiX3RhcmdldCIsInBvcCIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiYWRkVm0iLCJ2bXMiLCJyZW1vdmVWbSIsIm9iIiwiaXNFeHRlbnNpYmxlIiwiX2lzVnVlIiwicHJvcGVydHkiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJyZWFjdGl2ZVNldHRlciIsIm5ld1ZhbCIsIktFWV9XT1JEUyIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJhcnJheVByb3RvIiwiYXJyYXlNZXRob2RzIiwib3JpZ2luYWwiLCJtdXRhdG9yIiwiaW5zZXJ0ZWQiLCIkc2V0IiwiJHJlbW92ZSIsImJ1aWxkIiwib3B0IiwidGVtcGxhdGUiLCJjb21waWxlIiwiX3JlYWR5IiwiZGVzdCIsIm1ldGEiLCJsYXN0U2lnbmFsIiwiX3N0YXRpYyIsInRhcmdldElzRnJhZ21lbnQiLCJjb21waWxlRnJhZ21lbnQiLCJ0YXJnZXRJc0NvbnRlbnQiLCJfY29udGVudCIsInRhcmdldE5lZWRDaGVja1JlcGVhdCIsImNvbXBpbGVSZXBlYXQiLCJ0YXJnZXROZWVkQ2hlY2tTaG93biIsImNvbXBpbGVTaG93biIsInR5cGVHZXR0ZXIiLCJ0YXJnZXROZWVkQ2hlY2tUeXBlIiwiY29tcGlsZVR5cGUiLCJjb21wb25lbnQiLCJ0YXJnZXRJc0NvbXBvc2VkIiwiY29tcGlsZUN1c3RvbUNvbXBvbmVudCIsImNvbXBpbGVOYXRpdmVDb21wb25lbnQiLCJyZXBlYXQiLCJzaG93biIsImZyYWdCbG9jayIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImJpbmRSZXBlYXQiLCJuZXdNZXRhIiwiYmluZFNob3duIiwiQ3RvciIsInN1YlZtIiwiX2V4dGVybmFsQmluZGluZyIsImNvbXBpbGVDaGlsZHJlbiIsIl9yb290RWwiLCJldmVudHMiLCJhcHBlbmQiLCJ0cmVlTW9kZSIsImV2ZXJ5Iiwia2V5TmFtZSIsInZhbHVlTmFtZSIsImNvbXBpbGVJdGVtIiwiY29udGV4dCIsIm5ld0NvbnRleHQiLCJtZXJnZUNvbnRleHQiLCJ3YXRjaEJsb2NrIiwib2xkQ2hpbGRyZW4iLCJvbGRWbXMiLCJvbGREYXRhIiwidHJhY2tNYXAiLCJyZXVzZWRNYXAiLCJyZXVzZWRMaXN0IiwidXBkYXRlTWFyayIsInJldXNlZCIsImNhbGMiLCJkaWZmZXIiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJuYXRpdmVDb21wb25lbnRNYXAiLCJTRVRURVJTIiwic3Via2V5Iiwic2V0Q2xhc3MiLCJjbGFzc0xpc3QiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInJlZHVjZSIsIm1lcmdlUHJvcHMiLCJtZXJnZUNsYXNzU3R5bGUiLCJtZXJnZVN0eWxlIiwiX3ZtIiwiY3NzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3NOYW1lIiwibmV3SWQiLCJiaW5kRGlyIiwic2V0RXZlbnQiLCJyZWFsVm0iLCJiaW5kS2V5IiwiaW1hZ2UiLCJjb250YWluZXIiLCJzbGlkZXIiLCJjZWxsIiwiY3JlYXRlQmxvY2siLCJhdHRhY2hUYXJnZXQiLCJtb3ZlVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0IiwiY3JlYXRlQmxvY2tTdGFydCIsImVuZCIsImNyZWF0ZUJsb2NrRW5kIiwibGFzdGVzdEJsb2NrSWQiLCJhbmNob3IiLCJzaWduYWwiLCJtb3ZlQmxvY2siLCJncm91cCIsInRlbXAiLCJwcmVzZXJ2ZUJsb2NrIiwicmVtb3ZlQmxvY2siLCIkZGlzcGF0Y2giLCIkYnJvYWRjYXN0IiwiJG9uIiwiJG9mZiIsImluaXRFdmVudHMiLCJtaXhpbkV2ZW50cyIsIkV2dCIsImRldGFpbCIsInNob3VsZFN0b3AiLCJzdG9wIiwiaGFzU3RvcHBlZCIsImhhbmRsZXJMaXN0IiwiZXZ0IiwiTElGRV9DWUNMRV9UWVBFUyIsInR5cGUxIiwidHlwZTIiLCJib290c3RyYXAiLCJkZWZpbmVGbiIsInJlZ2lzdGVyIiwiZG93bmdyYWRlIiwiY2xlYW5OYW1lIiwic2F0aXNmaWVzIiwiZG93bmdyYWRlUmVzdWx0IiwiY2hlY2siLCJpc0Rvd25ncmFkZSIsImVycm9yVHlwZSIsImVycm9yTWVzc2FnZSIsIlNlbVZlciIsIk5PREVfREVCVUciLCJTRU1WRVJfU1BFQ19WRVJTSU9OIiwiTUFYX0xFTkdUSCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZSIsIk5VTUVSSUNJREVOVElGSUVSIiwiTlVNRVJJQ0lERU5USUZJRVJMT09TRSIsIk5PTk5VTUVSSUNJREVOVElGSUVSIiwiTUFJTlZFUlNJT04iLCJNQUlOVkVSU0lPTkxPT1NFIiwiUFJFUkVMRUFTRUlERU5USUZJRVIiLCJQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFIiwiUFJFUkVMRUFTRSIsIlBSRVJFTEVBU0VMT09TRSIsIkJVSUxESURFTlRJRklFUiIsIkJVSUxEIiwiRlVMTCIsIkZVTExQTEFJTiIsIkxPT1NFUExBSU4iLCJMT09TRSIsIkdUTFQiLCJYUkFOR0VJREVOVElGSUVSTE9PU0UiLCJYUkFOR0VJREVOVElGSUVSIiwiWFJBTkdFUExBSU4iLCJYUkFOR0VQTEFJTkxPT1NFIiwiWFJBTkdFIiwiWFJBTkdFTE9PU0UiLCJMT05FVElMREUiLCJUSUxERVRSSU0iLCJSZWdFeHAiLCJ0aWxkZVRyaW1SZXBsYWNlIiwiVElMREUiLCJUSUxERUxPT1NFIiwiTE9ORUNBUkVUIiwiQ0FSRVRUUklNIiwiY2FyZXRUcmltUmVwbGFjZSIsIkNBUkVUIiwiQ0FSRVRMT09TRSIsIkNPTVBBUkFUT1JMT09TRSIsIkNPTVBBUkFUT1IiLCJDT01QQVJBVE9SVFJJTSIsImNvbXBhcmF0b3JUcmltUmVwbGFjZSIsIkhZUEhFTlJBTkdFIiwiSFlQSEVOUkFOR0VMT09TRSIsIlNUQVIiLCJwYXJzZSIsImxvb3NlIiwiZXIiLCJ2YWxpZCIsImNsZWFuIiwidHJpbSIsIm0iLCJyYXciLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJwcmVyZWxlYXNlIiwibnVtIiwiY29tcGFyZSIsIm90aGVyIiwiY29tcGFyZU1haW4iLCJjb21wYXJlUHJlIiwiY29tcGFyZUlkZW50aWZpZXJzIiwiaW5jIiwicmVsZWFzZSIsImlkZW50aWZpZXIiLCJkaWZmIiwidmVyc2lvbjEiLCJ2ZXJzaW9uMiIsImVxIiwidjEiLCJ2MiIsIm51bWVyaWMiLCJhbnVtIiwiYm51bSIsInJjb21wYXJlSWRlbnRpZmllcnMiLCJjb21wYXJlTG9vc2UiLCJyY29tcGFyZSIsInNvcnQiLCJyc29ydCIsIm5lcSIsImd0ZSIsImx0ZSIsImNtcCIsIm9wIiwiQ29tcGFyYXRvciIsImNvbXAiLCJzZW12ZXIiLCJBTlkiLCJvcGVyYXRvciIsIlJhbmdlIiwicmFuZ2UiLCJwYXJzZVJhbmdlIiwiZmlsdGVyIiwiY29tcHMiLCJociIsImh5cGhlblJlcGxhY2UiLCJjb21wUmUiLCJwYXJzZUNvbXBhcmF0b3IiLCJ0b0NvbXBhcmF0b3JzIiwicmVwbGFjZUNhcmV0cyIsInJlcGxhY2VUaWxkZXMiLCJyZXBsYWNlWFJhbmdlcyIsInJlcGxhY2VTdGFycyIsImlzWCIsInJlcGxhY2VUaWxkZSIsIk0iLCJwciIsInJlcGxhY2VDYXJldCIsInJlcGxhY2VYUmFuZ2UiLCJndGx0IiwieE0iLCJ4bSIsInhwIiwiYW55WCIsIiQwIiwiZk0iLCJmbSIsImZwIiwiZnByIiwiZmIiLCJ0byIsInRNIiwidG0iLCJ0cCIsInRwciIsInRiIiwidGVzdFNldCIsImFsbG93ZWQiLCJtYXhTYXRpc2Z5aW5nIiwibWluU2F0aXNmeWluZyIsInZhbGlkUmFuZ2UiLCJsdHIiLCJvdXRzaWRlIiwiZ3RyIiwiaGlsbyIsImd0Zm4iLCJsdGVmbiIsImx0Zm4iLCJlY29tcCIsImNvbXBhcmF0b3JzIiwiaGlnaCIsImxvdyIsImNvbXBhcmF0b3IiLCJwYXJzZWQiLCJub3JtYWxpemVWZXJzaW9uIiwiZ2V0RXJyb3IiLCJpc1ZhbGlkIiwiY3JpdGVyaWEiLCJnZXRNc2ciLCJfa2V5IiwiZGV2aWNlSW5mbyIsImN1c3RvbURvd25ncmFkZSIsImRQbGF0Zm9ybSIsImNPYmoiLCJrZXlMb3dlciIsImlzVmVyc2lvbiIsImlzRGV2aWNlTW9kZWwiLCJkIiwiX2NyaXRlcmlhIiwiZmFjdG9yeSIsImRlZmluaXRpb24iLCJjb21tb25Nb2R1bGVzIiwiZGVzdHJveVZtIiwicmVmcmVzaERhdGEiLCJibG9ja3MiLCJ3YXRjaGVyQ291bnQiLCJ2bUNvdW50Iiwic29tZSIsImNhbGxiYWNrSWQiLCJpZktlZXBBbGl2ZSIsIm5vcm1hbGl6ZSIsImFyZyIsInRvSVNPU3RyaW5nIiwiQXBwIiwiRGlmZmVyIiwiaG9va3MiLCJoYXNUaW1lciIsImlzVGltZW91dCIsImNhbGxUeXBlTWFwIiwiY2FsbFR5cGVMaXN0IiwiaXNFbXB0eSIsInZlcnNpb25SZWdFeHAiLCJjaGVja1ZlcnNpb24iLCJmcmFtZXdvcmsiLCJidW5kbGVWZXJzaW9uIiwiZ2VuSW5pdCIsImdlbkluc3RhbmNlIiwiYWRhcHRJbnN0YW5jZSIsIm5hdGl2ZU1ldGhvZE5hbWUiLCIkIiwiJGVsIiwiJHZtIiwiJHJlbmRlclRoZW4iLCIkc2Nyb2xsVG8iLCIkdHJhbnNpdGlvbiIsIiRnZXRDb25maWciLCIkc2VuZEh0dHAiLCIkb3BlblVSTCIsIiRzZXRUaXRsZSIsIiRjYWxsIiwib2Zmc2V0IiwiZG9tIiwic2Nyb2xsVG9FbGVtZW50Iiwic3R5bGVzIiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsIl9zZXRTdHlsZSIsInBhcmFtcyIsInN0cmVhbSIsInNlbmRIdHRwIiwib3BlblVSTCIsInBhZ2VJbmZvIiwic2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzA0YTc0YzBiMjBiNDZiYjlhYlxuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuaW1wb3J0ICcuL29iamVjdFNldFByb3RvdHlwZU9mJ1xuaW1wb3J0ICcuL2FycmF5RnJvbSdcblxuZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuL3V0aWxzJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodGFyZ2V0LCAuLi5zcmMpIHtcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNyYylcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmaXJzdCA9IHNyYy5zaGlmdCgpXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmlyc3QpIHtcbiAgICAgIHRhcmdldFtrZXldID0gZmlyc3Rba2V5XVxuICAgIH1cbiAgICBpZiAoc3JjLmxlbmd0aCkge1xuICAgICAgZXh0ZW5kKHRhcmdldCwgLi4uc3JjKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudW1lcmFibGVdXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICBjb25zdCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheS1saWtlfSBsaXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSAtIHN0YXJ0IGluZGV4XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwXG4gIGxldCBpID0gbGlzdC5sZW5ndGggLSBzdGFydFxuICBjb25zdCByZXQgPSBuZXcgQXJyYXkoaSlcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbmNvbnN0IE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC91dGlscy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUG9seWZpbGwgYHNldFRpbWVvdXRgIG9uIEFuZHJvaWQgVjggdXNpbmcgbmF0aXZlIG1ldGhvZFxuICogYHNldFRpbWVvdXROYXRpdmUoY2FsbGJhY2tJZCwgdGltZSlgIGFuZCBKUyBtZXRob2RcbiAqIGBzZXRUaW1lb3V0Q2FsbGJhY2soY2FsbGJhY2tJZClgLlxuICogVGhpcyBwb2x5ZmlsbCBpcyBvbmx5IHVzZWQgaW4gdmlydHVhbC1ET00gZGlmZiAmIGZsdXNoIGFnb3JpdGhtLiBOb3RcbiAqIGFjY2Vzc2VkIGJ5IEpTIEJ1bmRsZSBjb2RlIChUaGUgdGltZXIgQVBJcyBwb2x5ZmlsbCBmb3IgSlMgQnVuZGxlIGlzIGluXG4gKiBgaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc2ApLlxuICovXG5cbmNvbnN0IHtcbiAgc2V0VGltZW91dCxcbiAgc2V0VGltZW91dE5hdGl2ZVxufSA9IGdsb2JhbFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIHNldFRpbWVvdXROYXRpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gIGxldCB0aW1lb3V0SWQgPSAwXG5cbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0Q2FsbGJhY2sgPSAoaWQpID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXRNYXBbaWRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aW1lb3V0TWFwW2lkXSgpXG4gICAgICBkZWxldGUgdGltZW91dE1hcFtpZF1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanNcbiAqKi8iLCIvLyBmaXggUHJvbWlzZSBQcm9ibGVtIG9uIEpTQ29udGV4dCBvZiBpT1M3fjhcbi8vIEBzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNTg2NlxuY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbmlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSB7XG4gIGdsb2JhbC5Qcm9taXNlID0gbnVsbFxufVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJylcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZScpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9wcm9taXNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuICoqLyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbiAqKi8iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19jdHguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4gKiovIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuICoqLyIsInZhciAkaXRlcmF0b3JzICAgID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKVxuICAsIHJlZGVmaW5lICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHdrcyAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIElURVJBVE9SICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgLCBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpXG4gICwgQXJyYXlWYWx1ZXMgICA9IEl0ZXJhdG9ycy5BcnJheTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlXG4gICAgLCBrZXk7XG4gIGlmKHByb3RvKXtcbiAgICBpZighcHJvdG9bSVRFUkFUT1JdKWhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYoIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGZvcihrZXkgaW4gJGl0ZXJhdG9ycylpZighcHJvdG9ba2V5XSlyZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKi8iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKVxuICAsIEFycmF5UHJvdG8gID0gQXJyYXkucHJvdG90eXBlO1xuaWYoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKXJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuICoqLyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qc1xuICoqLyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4gKiovIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVGhpcyBmaWxlIHdpbGwgaGFjayBgY29uc29sZWAgbWV0aG9kcyBieSBgV1hFbnZpcm9ubWVudC5sb2dMZXZlbGAuXG4gKiBTbyB3ZSBjYW4gY29udHJvbCBob3cgbWFueSBhbmQgd2hpY2ggbWVzc2FnZXMgd2lsbCBiZSBzZW50IGJ5IGNoYW5nZSB0aGUgbG9nIGxldmVsLlxuICogQWRkaXRpb25hbGx5IGluIG5hdGl2ZSBwbGF0Zm9ybSB0aGUgbWVzc2FnZSBjb250ZW50IG11c3QgYmUgcHJpbWl0aXZlIHZhbHVlcyBhbmRcbiAqIHVzaW5nIGBuYXRpdmVMb2coLi4uYXJncywgbG9nTGV2ZWxNYXJrKWAgc28gd2UgY3JlYXRlIGEgbmV3IGBjb25zb2xlYCBvYmplY3QgaW5cbiAqIGdsb2JhbCBhZGQgYSBmb3JtYXQgcHJvY2VzcyBmb3IgaXRzIG1ldGhvZHMuXG4gKi9cblxuY29uc3QgeyBjb25zb2xlLCBuYXRpdmVMb2cgfSA9IGdsb2JhbFxuY29uc3QgTEVWRUxTID0gWydvZmYnLCAnZXJyb3InLCAnd2FybicsICdpbmZvJywgJ2xvZycsICdkZWJ1ZyddXG5jb25zdCBsZXZlbE1hcCA9IHt9XG5cbmdlbmVyYXRlTGV2ZWxNYXAoKVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChcbiAgdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8IC8vIEFuZHJvaWRcbiAgKGdsb2JhbC5XWEVudmlyb25tZW50ICYmIGdsb2JhbC5XWEVudmlyb25tZW50LnBsYXRmb3JtID09PSAnaU9TJykgLy8gaU9TXG4pIHtcbiAgZ2xvYmFsLmNvbnNvbGUgPSB7XG4gICAgZGVidWc6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19ERUJVRycpIH1cbiAgICB9LFxuICAgIGxvZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19MT0cnKSB9XG4gICAgfSxcbiAgICBpbmZvOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2luZm8nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19JTkZPJykgfVxuICAgIH0sXG4gICAgd2FybjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fV0FSTicpIH1cbiAgICB9LFxuICAgIGVycm9yOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fRVJST1InKSB9XG4gICAgfVxuICB9XG59XG5lbHNlIHsgLy8gSFRNTDVcbiAgY29uc3QgeyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9ID0gY29uc29sZVxuICBjb25zb2xlLl9fb3JpX18gPSB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH1cbiAgY29uc29sZS5kZWJ1ZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgY29uc29sZS5fX29yaV9fLmRlYnVnLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IGNvbnNvbGUuX19vcmlfXy5sb2cuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuaW5mbyA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2luZm8nKSkgeyBjb25zb2xlLl9fb3JpX18uaW5mby5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS53YXJuID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IGNvbnNvbGUuX19vcmlfXy53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmVycm9yID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBjb25zb2xlLl9fb3JpX18uZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgbWFwIGZvciB3aGljaCB0eXBlcyBvZiBtZXNzYWdlIHdpbGwgYmUgc2VudCBpbiBhIGNlcnRhaW4gbWVzc2FnZSBsZXZlbFxuICogYXMgdGhlIG9yZGVyIG9mIExFVkVMUy5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbE1hcCAoKSB7XG4gIExFVkVMUy5mb3JFYWNoKGxldmVsID0+IHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpXG4gICAgbGV2ZWxNYXBbbGV2ZWxdID0ge31cbiAgICBMRVZFTFMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgIGNvbnN0IHR5cGVJbmRleCA9IExFVkVMUy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAodHlwZUluZGV4IDw9IGxldmVsSW5kZXgpIHtcbiAgICAgICAgbGV2ZWxNYXBbbGV2ZWxdW3R5cGVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjZXJ0YWluIHR5cGUgb2YgbWVzc2FnZSB3aWxsIGJlIHNlbnQgaW4gY3VycmVudCBsb2cgbGV2ZWwgb2YgZW52LlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjaGVja0xldmVsICh0eXBlKSB7XG4gIGNvbnN0IGxvZ0xldmVsID0gKGdsb2JhbC5XWEVudmlyb25tZW50ICYmIGdsb2JhbC5XWEVudmlyb25tZW50LmxvZ0xldmVsKSB8fCAnbG9nJ1xuICByZXR1cm4gbGV2ZWxNYXBbbG9nTGV2ZWxdICYmIGxldmVsTWFwW2xvZ0xldmVsXVt0eXBlXVxufVxuXG4vKipcbiAqIENvbnZlcnQgYWxsIGxvZyBhcmd1bWVudHMgaW50byBwcmltaXRpdmUgdmFsdWVzLlxuICogQHBhcmFtICB7YXJyYXl9IGFyZ3NcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBmb3JtYXQgKGFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3MubWFwKCh2KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XG4gICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2ID0gU3RyaW5nKHYpXG4gICAgfVxuICAgIHJldHVybiB2XG4gIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9jb25zb2xlLmpzXG4gKiovIiwiaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9vYmplY3RBc3NpZ24uanNcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4xL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4gKiovIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMS9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjEvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi81NTkzNTU0XG5pZiAoIU9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YgPSAoZnVuY3Rpb24oT2JqZWN0LCBtYWdpYykge1xuICAgIHZhciBzZXQ7XG4gICAgZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIHNldC5jYWxsKE8sIHByb3RvKTtcbiAgICAgIHJldHVybiBPO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gdGhpcyB3b3JrcyBhbHJlYWR5IGluIEZpcmVmb3ggYW5kIFNhZmFyaVxuICAgICAgc2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBtYWdpYykuc2V0O1xuICAgICAgc2V0LmNhbGwoe30sIG51bGwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gSUUgPCAxMSBjYW5ub3QgYmUgc2hpbW1lZFxuICAgICAgICBPYmplY3QucHJvdG90eXBlICE9PSB7fVttYWdpY10gfHxcbiAgICAgICAgLy8gbmVpdGhlciBjYW4gYW55IGJyb3dzZXIgdGhhdCBhY3R1YWxseVxuICAgICAgICAvLyBpbXBsZW1lbnRlZCBfX3Byb3RvX18gY29ycmVjdGx5XG4gICAgICAgIC8vIChhbGwgYnV0IG9sZCBWOCB3aWxsIHJldHVybiBoZXJlKVxuICAgICAgICB7X19wcm90b19fOiBudWxsfS5fX3Byb3RvX18gPT09IHZvaWQgMFxuICAgICAgICAvLyB0aGlzIGNhc2UgbWVhbnMgbnVsbCBvYmplY3RzIGNhbm5vdCBiZSBwYXNzZWRcbiAgICAgICAgLy8gdGhyb3VnaCBzZXRQcm90b3R5cGVPZiBpbiBhIHJlbGlhYmxlIHdheVxuICAgICAgICAvLyB3aGljaCBtZWFucyBoZXJlIGEgKipTaGFtKiogaXMgbmVlZGVkIGluc3RlYWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBub2RlanMgMC44IGFuZCAwLjEwIGFyZSAoYnVnZ3kgYW5kLi4pIGZpbmUgaGVyZVxuICAgICAgLy8gcHJvYmFibHkgQ2hyb21lIG9yIHNvbWUgb2xkIE1vYmlsZSBzdG9jayBicm93c2VyXG4gICAgICBzZXQgPSBmdW5jdGlvbihwcm90bykge1xuICAgICAgICB0aGlzW21hZ2ljXSA9IHByb3RvO1xuICAgICAgfTtcbiAgICAgIC8vIHBsZWFzZSBub3RlIHRoYXQgdGhpcyB3aWxsICoqbm90Kiogd29ya1xuICAgICAgLy8gaW4gdGhvc2UgYnJvd3NlcnMgdGhhdCBkbyBub3QgaW5oZXJpdFxuICAgICAgLy8gX19wcm90b19fIGJ5IG1pc3Rha2UgZnJvbSBPYmplY3QucHJvdG90eXBlXG4gICAgICAvLyBpbiB0aGVzZSBjYXNlcyB3ZSBzaG91bGQgcHJvYmFibHkgdGhyb3cgYW4gZXJyb3JcbiAgICAgIC8vIG9yIGF0IGxlYXN0IGJlIGluZm9ybWVkIGFib3V0IHRoZSBpc3N1ZVxuICAgICAgc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPSBzZXRQcm90b3R5cGVPZihcbiAgICAgICAgc2V0UHJvdG90eXBlT2Yoe30sIG51bGwpLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlXG4gICAgICApIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHRydWUgbWVhbnMgaXQgd29ya3MgYXMgbWVhbnRcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSBmYWxzZSBtZWFucyBpdCdzIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdW5kZWZpbmVkXG4gICAgICAvLyBvclxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT0gIG51bGwgbWVhbnMgaXQncyBub3QgYSBwb2x5ZmlsbFxuICAgICAgLy8gd2hpY2ggbWVhbnMgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIHdlIGNhbiBldmVuIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fcHJvdG9fXztcbiAgICB9XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mO1xuICB9KE9iamVjdCwgJ19fcHJvdG9fXycpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUmVmZXJlbmNlOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuaWYgKCFBcnJheS5mcm9tKSB7XG4gIGNvbnNvbGUubG9nKCdtYWtlIHBvbHlmaWxsJylcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gICAgfTtcbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICB9O1xuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpO1xuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzO1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpO1xuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgdmFyIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwO1xuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWU7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE7XG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuO1xuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEE7XG4gICAgfTtcbiAgfSgpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL2FycmF5RnJvbS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUmVnaXN0ZXIgZnJhbWV3b3JrKHMpIGluIEpTIHJ1bnRpbWUuIFdlZXggc3VwcGx5IHR3byBsYXllcnMgZm9yIDNyZC1wYXJ0eVxuICogZnJhbWV3b3JrKHMpOiBvbmUgaXMgdGhlIGluc3RhbmNlIG1hbmFnZW1lbnQgbGF5ZXIsIGFub3RoZXIgaXMgdGhlXG4gKiB2aXJ0dWFsLURPTSBsYXllci5cbiAqL1xuXG4vLyBUaGlzIGNvbmZpZyBpcyBnZW5lcmF0ZWQgYnkgYG5wbSBydW4gYnVpbGQ6Y29uZmlnYC5cbi8vIEl0IHdpbGwgY29sbGVjdCBhbGwgYHJ1bnRpbWUvZnJhbWV3b3JrLSouanNgIGZpbGVzIGFuZCBpbXBvcnQgZWFjaCBvZiB0aGVtLlxuLy8gVGhlIGZpbGVuYW1lIGlzIGFsc28gdGhlIGZyYW1ld29yayBuYW1lLlxuaW1wb3J0IHsgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQgfSBmcm9tICcuLi92ZG9tJ1xuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4uL3Zkb20vbGlzdGVuZXInXG5pbXBvcnQgZnJhbWV3b3JrcyBmcm9tICcuL2NvbmZpZydcblxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0J1xuXG5jb25zdCBjb25maWcgPSB7XG4gIERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50LCBMaXN0ZW5lciwgZnJhbWV3b3JrcyxcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5jYWxsTmF0aXZlKC4uLmFyZ3MpXG4gIH1cbn1cblxuY29uc3QgbWV0aG9kcyA9IGluaXQoY29uZmlnKVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEEgc2ltcGxlIHZpcnR1YWwgZG9tIGltcGxlbWVudGF0aW9uXG4gKi9cbi8vIGltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZC91dGlscydcblxuY29uc3QgREVGQVVMVF9UQUdfTkFNRSA9ICdkaXYnXG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBEb2N1bWVudCAoaWQsIHVybCwgaGFuZGxlciwgTGlzdGVuZXIpIHtcbiAgaWQgPSBpZCA/IGlkLnRvU3RyaW5nKCkgOiAnJ1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5VUkwgPSB1cmxcblxuICBpbnN0YW5jZU1hcFtpZF0gPSB0aGlzXG4gIHRoaXMubm9kZU1hcCA9IHt9XG4gIExpc3RlbmVyICYmICh0aGlzLmxpc3RlbmVyID0gbmV3IExpc3RlbmVyKGlkLCBoYW5kbGVyIHx8IGdlbkNhbGxUYXNrcyhpZCkpKVxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGdlbkNhbGxUYXNrcyAoaWQpIHtcbiAgLy8gQHRvZG86IFRoZSBgY2FsbEFkZEVsZW1lbnRgIEFQSSBzaG91bGQgYmUgcmUtZGVzaWduIGltbWVkaWF0ZWx5XG4gIC8vIGJlY2F1c2UgaXRzIHB1YmxpYyBhbmQgZ2xvYmFsIGFuZCB3aXRob3V0IGNvbmZpZyBvcHBvcnR1bml0eS5cbiAgY29uc3QgaGFzQWRkRWxlbWVudEhhbmRsZXIgPSB0eXBlb2YgY2FsbEFkZEVsZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgcmV0dXJuICh0YXNrcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHRhc2tzID0gW3Rhc2tzXVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGFza3NbaV1cbiAgICAgIGxldCByZXR1cm5WYWx1ZVxuICAgICAgaWYgKGhhc0FkZEVsZW1lbnRIYW5kbGVyICYmIHRhc2subW9kdWxlID09PSAnZG9tJyAmJiB0YXNrLm1ldGhvZCA9PT0gJ2FkZEVsZW1lbnQnKSB7XG4gICAgICAgIGNvbnN0IFtyZWYsIGpzb24sIGluZGV4XSA9IHRhc2suYXJnc1xuICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGxBZGRFbGVtZW50KGlkLCByZWYsIGpzb24sIGluZGV4LCAnLTEnKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gY2FsbE5hdGl2ZShpZCwgW3Rhc2tdLCAnLTEnKVxuICAgICAgfVxuICAgICAgaWYgKHJldHVyblZhbHVlID09PSAtMSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICAgIGxpbmtQYXJlbnQobm9kZSwgZG9jdW1lbnRFbGVtZW50KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBub2RlXG4gICAgICB9KVxuICAgICAgc2V0Qm9keShkb2MsIG5vZGUpXG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIGxpbmtQYXJlbnQobm9kZSwgZG9jdW1lbnRFbGVtZW50KVxuICAgICAgZGVsZXRlIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXVxuICAgIH1cbiAgICBkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLnB1c2gobm9kZSlcbiAgICBkb2MubGlzdGVuZXIuY3JlYXRlQm9keShub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIGRvYy5ub2RlTWFwW25vZGUucmVmXSA9IG5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb2R5IChkb2MsIGVsKSB7XG4gIGVsLnJvbGUgPSAnYm9keSdcbiAgZWwuZGVwdGggPSAxXG4gIGRlbGV0ZSBkb2Mubm9kZU1hcFtlbC5ub2RlSWRdXG4gIGVsLnJlZiA9ICdfcm9vdCdcbiAgZG9jLm5vZGVNYXAuX3Jvb3QgPSBlbFxuICBkb2MuYm9keSA9IGVsXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gIGlmICghdGhpcy5ib2R5KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcylcbiAgICBzZXRCb2R5KHRoaXMsIGVsKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuYm9keVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcykge1xuICByZXR1cm4gbmV3IEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVDb21tZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIG5ldyBDb21tZW50KHRleHQpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVyblxuICB9XG4gIGUgPSBlIHx8IHt9XG4gIGUudHlwZSA9IHR5cGVcbiAgZS50YXJnZXQgPSBlbFxuICBlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgaWYgKGRvbUNoYW5nZXMpIHtcbiAgICB1cGRhdGVFbGVtZW50KGVsLCBkb21DaGFuZ2VzKVxuICB9XG4gIHJldHVybiBlbC5maXJlRXZlbnQodHlwZSwgZSlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmdldFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgcmV0dXJuIHRoaXMubm9kZU1hcFtyZWZdXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQgKGVsLCBjaGFuZ2VzKSB7XG4gIGNvbnN0IGF0dHJzID0gY2hhbmdlcy5hdHRycyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gYXR0cnMpIHtcbiAgICBlbC5zZXRBdHRyKG5hbWUsIGF0dHJzW25hbWVdLCB0cnVlKVxuICB9XG4gIGNvbnN0IHN0eWxlID0gY2hhbmdlcy5zdHlsZSB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGUpIHtcbiAgICBlbC5zZXRTdHlsZShuYW1lLCBzdHlsZVtuYW1lXSwgdHJ1ZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZSAoKSB7XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxuICB0aGlzLnBhcmVudE5vZGUgPSBudWxsXG4gIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsXG4gIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbFxufVxuXG5Ob2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXVxuICBpZiAoZG9jKSB7XG4gICAgZGVsZXRlIHRoaXMuZG9jSWRcbiAgICBkZWxldGUgZG9jLm5vZGVNYXBbdGhpcy5ub2RlSWRdXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBjaGlsZC5kZXN0cm95KClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVsZW1lbnQgKHR5cGUgPSBERUZBVUxUX1RBR19OQU1FLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9XG4gIHRoaXMubm9kZVR5cGUgPSAxXG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuYXR0ciA9IHByb3BzLmF0dHIgfHwge31cbiAgdGhpcy5jbGFzc1N0eWxlID0gcHJvcHMuY2xhc3NTdHlsZSB8fCB7fVxuICB0aGlzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge31cbiAgdGhpcy5ldmVudCA9IHt9XG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkVsZW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIC0xKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChub2RlLCBiZWZvcmUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYmVmb3JlIHx8IG5vZGUubmV4dFNpYmxpbmcgPT09IGJlZm9yZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobm9kZSwgYWZ0ZXIpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYWZ0ZXIgfHwgbm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGFmdGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKG5vZGUsIHByZXNlcnZlZCkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4pXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghcHJlc2VydmVkKSB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgfSlcbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfSlcbiAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwXG4gIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCA9IDBcbn1cblxuZnVuY3Rpb24gbmV4dEVsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c0VsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gbGlua1BhcmVudCAobm9kZSwgcGFyZW50KSB7XG4gIG5vZGUucGFyZW50Tm9kZSA9IHBhcmVudFxuICBpZiAocGFyZW50LmRvY0lkKSB7XG4gICAgbm9kZS5kb2NJZCA9IHBhcmVudC5kb2NJZFxuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50XG4gICAgbm9kZS5vd25lckRvY3VtZW50Lm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxuICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxXG4gIH1cbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsaW5rUGFyZW50KGNoaWxkLCBub2RlKVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck5vZGUgKGRvY0lkLCBub2RlKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW2RvY0lkXVxuICBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG59XG5cbmZ1bmN0aW9uIGluc2VydEluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IDBcbiAgfVxuICBjb25zdCBiZWZvcmUgPSBsaXN0W25ld0luZGV4IC0gMV1cbiAgY29uc3QgYWZ0ZXIgPSBsaXN0W25ld0luZGV4XVxuICBsaXN0LnNwbGljZShuZXdJbmRleCwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlclxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIG1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxuICBsZXQgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4XG4gIGlmIChpbmRleCA8PSBuZXdJbmRleCkge1xuICAgIG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleCAtIDFcbiAgfVxuICBjb25zdCBiZWZvcmVOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXIgLSAxXVxuICBjb25zdCBhZnRlck5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlcl1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXhBZnRlciwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZU5ldyAmJiAoYmVmb3JlTmV3Lm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVOZXdcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlck5ld1xuICAgIGFmdGVyTmV3ICYmIChhZnRlck5ldy5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgaWYgKGluZGV4ID09PSBuZXdJbmRleEFmdGVyKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuYXR0cltrZXldID09PSB2YWx1ZSAmJiBzaWxlbnQgIT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5hdHRyW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldEF0dHIodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLnN0eWxlW2tleV0gPT09IHZhbHVlICYmIHNpbGVudCAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlc2V0Q2xhc3NTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jbGFzc1N0eWxlKSB7XG4gICAgdGhpcy5jbGFzc1N0eWxlW2tleV0gPSAnJ1xuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLnJlc2V0Q2xhc3NTdHlsZSgpXG4gIGV4dGVuZCh0aGlzLmNsYXNzU3R5bGUsIGNsYXNzU3R5bGUpXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFZhbmlsbGEgZnJvbSAnLi4vdmFuaWxsYSdcbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBWYW5pbGxhLFxuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiY29uc3QgY29uZmlnID0ge31cblxuY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY2ZnKSB7XG4gIGNvbmZpZy5Eb2N1bWVudCA9IGNmZy5Eb2N1bWVudFxuICBjb25maWcuRWxlbWVudCA9IGNmZy5FbGVtZW50XG4gIGNvbmZpZy5Db21tZW50ID0gY2ZnLkNvbW1lbnRcbiAgY29uZmlnLnNlbmRUYXNrcyA9IGNmZy5zZW5kVGFza3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyAoY29tcG9uZW50cykge31cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyAobW9kdWxlcykge31cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAoYXBpcykge31cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVJbnN0YW5jZSAoaWQsIG9wdGlvbnMsIGRhdGEpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBuZXcgY29uZmlnLkRvY3VtZW50KGlkLCBvcHRpb25zLmJ1bmRsZVVybClcbiAgY29uc3QgY2FsbGJhY2tzID0ge31cbiAgbGV0IGxhc3RDYWxsYmFja0lkID0gMFxuICBkb2N1bWVudC5hZGRDYWxsYmFjayA9IGZ1bmMgPT4ge1xuICAgIGxhc3RDYWxsYmFja0lkKytcbiAgICBjYWxsYmFja3NbbGFzdENhbGxiYWNrSWRdID0gZnVuY1xuICAgIHJldHVybiBsYXN0Q2FsbGJhY2tJZFxuICB9XG4gIGRvY3VtZW50LmhhbmRsZUNhbGxiYWNrID0gKGZ1bmNJZCwgZGF0YSwgaWZMYXN0KSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3NbZnVuY0lkXVxuICAgIGlmIChpZkxhc3QpIHtcbiAgICAgIGRlbGV0ZSBjYWxsYmFja3NbZnVuY0lkXVxuICAgIH1cbiAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcbiAgfVxuICBpbnN0YW5jZU1hcFtpZF0gPSBkb2N1bWVudFxuICBjb25zdCByZXN1bHQgPSBuZXcgRnVuY3Rpb24oXG4gICAgJ0RvY3VtZW50JyxcbiAgICAnRWxlbWVudCcsXG4gICAgJ0NvbW1lbnQnLFxuICAgICdzZW5kVGFza3MnLFxuICAgICdpZCcsXG4gICAgJ29wdGlvbnMnLFxuICAgICdkYXRhJyxcbiAgICAnZG9jdW1lbnQnLFxuICAgIGNvZGVcbiAgKVxuICByZXR1cm4gcmVzdWx0KFxuICAgIGNvbmZpZy5Eb2N1bWVudCxcbiAgICBjb25maWcuRWxlbWVudCxcbiAgICBjb25maWcuQ29tbWVudCxcbiAgICBjb25maWcuc2VuZFRhc2tzLFxuICAgIGlkLFxuICAgIG9wdGlvbnMsXG4gICAgZGF0YSxcbiAgICBkb2N1bWVudFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGlkLCBkYXRhKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpZCkge1xuICBkZWxldGUgaW5zdGFuY2VNYXBbaWRdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpZCkge1xuICByZXR1cm4gaW5zdGFuY2VNYXBbaWRdLmJvZHkudG9KU09OKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUYXNrcyAoaWQsIHRhc2tzKSB7XG4gIGNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gICAgZmlyZUV2ZW50OiAoaWQsIHJlZiwgdHlwZSwgZGF0YSwgZG9tQ2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgZG9jdW1lbnQgPSBpbnN0YW5jZU1hcFtpZF1cbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0UmVmKHJlZilcbiAgICAgIHJldHVybiBkb2N1bWVudC5maXJlRXZlbnQoZWwsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpXG4gICAgfSxcblxuICAgIGNhbGxiYWNrOiAoaWQsIGZ1bmNJZCwgZGF0YSwgaWZMYXN0KSA9PiB7XG4gICAgICBjb25zdCBkb2N1bWVudCA9IGluc3RhbmNlTWFwW2lkXVxuICAgICAgcmV0dXJuIGRvY3VtZW50LmhhbmRsZUNhbGxiYWNrKGZ1bmNJZCwgZGF0YSwgaWZMYXN0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRvY3VtZW50ID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmIChkb2N1bWVudCAmJiBBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBqc0hhbmRsZXJzW3Rhc2subWV0aG9kXVxuICAgICAgY29uc3QgYXJncyA9IFsuLi50YXNrLmFyZ3NdXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGlkKVxuICAgICAgICByZXN1bHRzLnB1c2goaGFuZGxlciguLi5hcmdzKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmFuaWxsYS9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBXZWV4IGZyYW1ld29yayBlbnRyeS5cbiAqL1xuXG5leHBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2NyZWF0ZSdcbmV4cG9ydCB7IGluaXQsIHJlZnJlc2hJbnN0YW5jZSwgZGVzdHJveUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvbGlmZSdcbmV4cG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50cywgcmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHMgfSBmcm9tICcuL3N0YXRpYy9yZWdpc3RlcidcbmV4cG9ydCB7IHJlY2VpdmVUYXNrcyB9IGZyb20gJy4vc3RhdGljL2JyaWRnZSdcbmV4cG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL3N0YXRpYy9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgaW5pdCBhcyBpbml0QXBwIH0gZnJvbSAnLi4vYXBwL2N0cmwnXG5pbXBvcnQgeyByZXNldFRhcmdldCB9IGZyb20gJy4uL2NvcmUvZGVwJ1xuXG4vKipcbiAqIENyZWF0ZSBhIFdlZXggaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgcmVzZXRUYXJnZXQoKVxuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IHJlc3VsdFxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgQXBwKGlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluc3RhbmNlXG4gICAgcmVzdWx0ID0gaW5pdEFwcChpbnN0YW5jZSwgY29kZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBpbnN0YW5jZSBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyByZXF1aXJlTW9kdWxlIH0gZnJvbSAnLi9yZWdpc3RlcidcbmltcG9ydCB7IHVwZGF0ZUFjdGlvbnMsIGNhbGxUYXNrcyB9IGZyb20gJy4vY3RybCdcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnN0YW5jZSdcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5BcHAucHJvdG90eXBlLnJlcXVpcmVNb2R1bGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gcmVxdWlyZU1vZHVsZSh0aGlzLCBuYW1lKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUudXBkYXRlQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlQWN0aW9ucyh0aGlzKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGNhbGxUYXNrcyh0aGlzLCB0YXNrcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2luZGV4LmpzXG4gKiovIiwibGV0IG5hdGl2ZU1vZHVsZXMgPSB7fVxuXG4vLyBmb3IgdGVzdGluZ1xuXG4vKipcbiAqIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbn1cblxuLyoqXG4gKiBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzICgpIHtcbiAgbmF0aXZlTW9kdWxlcyA9IHt9XG59XG5cbi8vIGZvciBmcmFtZXdvcmtcblxuLyoqXG4gKiBpbml0IG1vZHVsZXMgZm9yIGFuIGFwcCBpbnN0YW5jZVxuICogdGhlIHNlY29uZCBwYXJhbSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGVkIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBmb3IgKGNvbnN0IG1vZHVsZU5hbWUgaW4gbW9kdWxlcykge1xuICAgIC8vIGluaXQgYG1vZHVsZXNbbW9kdWxlTmFtZV1bXWBcbiAgICBsZXQgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgICBpZiAoIW1ldGhvZHMpIHtcbiAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXSA9IG1ldGhvZHNcbiAgICB9XG5cbiAgICAvLyBwdXNoIGVhY2ggbm9uLWV4aXN0ZWQgbmV3IG1ldGhvZFxuICAgIG1vZHVsZXNbbW9kdWxlTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWV0aG9kID0ge1xuICAgICAgICAgIG5hbWU6IG1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kc1ttZXRob2QubmFtZV0gfHwgaWZSZXBsYWNlKSB7XG4gICAgICAgIG1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGluaXQgYXBwIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXRob2RzIChWbSwgYXBpcykge1xuICBjb25zdCBwID0gVm0ucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbi8vIGZvciBhcHBcblxuLyoqXG4gKiBnZXQgYSBtb2R1bGUgb2YgbWV0aG9kcyBmb3IgYW4gYXBwIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlIChhcHAsIG5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICB0YXJnZXRbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4gYXBwLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogZ2V0IGEgY3VzdG9tIGNvbXBvbmVudCBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50IChhcHAsIG5hbWUpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IGFwcFxuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogcmVnaXN0ZXIgYSBjdXN0b20gY29tcG9uZW50IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50IChhcHAsIG5hbWUsIGRlZikge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gYXBwXG5cbiAgaWYgKGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCgke25hbWV9KSB0aGF0IGFscmVhZHkgZXhpc3RzYClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSA9IGRlZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9yZWdpc3Rlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0J1xuXG5leHBvcnQge1xuICByZWZyZXNoLFxuICBkZXN0cm95LFxuICBnZXRSb290RWxlbWVudCxcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFjayxcbiAgdXBkYXRlQWN0aW9ucyxcbiAgY2FsbFRhc2tzXG59IGZyb20gJy4vbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cblxuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0IHsgcmVtb3ZlV2VleFByZWZpeCB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICBkZWZpbmVGbixcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5pbXBvcnQgeyB1cGRhdGVBY3Rpb25zIH0gZnJvbSAnLi9taXNjJ1xuXG4vKipcbiAqIEluaXQgYW4gYXBwIGJ5IHJ1biBjb2RlIHdpdGdoIGRhdGFcbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoYXBwLCBjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG4gIGxldCByZXN1bHRcblxuICAvLyBwcmVwYXJlIGFwcCBlbnYgbWV0aG9kc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSAoLi4uYXJncykgPT4gZGVmaW5lRm4oYXBwLCAuLi5hcmdzKVxuICBjb25zdCBidW5kbGVCb290c3RyYXAgPSAobmFtZSwgY29uZmlnLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgfVxuICBjb25zdCBidW5kbGVWbSA9IFZtXG4gIGNvbnN0IGJ1bmRsZVJlZ2lzdGVyID0gKC4uLmFyZ3MpID0+IHJlZ2lzdGVyKGFwcCwgLi4uYXJncylcbiAgY29uc3QgYnVuZGxlUmVuZGVyID0gKG5hbWUsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwge30sIF9kYXRhKVxuICB9XG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmUgPSBuYW1lID0+IF9kYXRhID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAoYXBwLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cbiAgY29uc3QgYnVuZGxlRG9jdW1lbnQgPSBhcHAuZG9jXG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmVNb2R1bGUgPSBuYW1lID0+IGFwcC5yZXF1aXJlTW9kdWxlKHJlbW92ZVdlZXhQcmVmaXgobmFtZSkpXG5cbiAgLy8gcHJlcGFyZSBjb2RlXG4gIGxldCBmdW5jdGlvbkJvZHlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGBmdW5jdGlvbiAoKSB7Li4ufWAgLT4gYHsuLi59YFxuICAgIC8vIG5vdCB2ZXJ5IHN0cmljdFxuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKS5zdWJzdHIoMTIpXG4gIH1cbiAgZWxzZSBpZiAoY29kZSkge1xuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKVxuICB9XG5cbiAgLy8gcnVuIGNvZGUgYW5kIGdldCByZXN1bHRcbiAgY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbiAgaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSAhPT0gJ1dlYicpIHtcbiAgICAvLyB0aW1lciBBUElzIHBvbHlmaWxsIGluIG5hdGl2ZVxuICAgIGNvbnN0IHRpbWVyID0gYXBwLnJlcXVpcmVNb2R1bGUoJ3RpbWVyJylcbiAgICBjb25zdCB0aW1lckFQSXMgPSB7XG4gICAgICBzZXRUaW1lb3V0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRUaW1lb3V0KGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBzZXRJbnRlcnZhbDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWwoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KG4pXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnRlcnZhbDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJJbnRlcnZhbChuKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdfX3dlZXhfZG9jdW1lbnRfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdfX3dlZXhfcmVxdWlyZV9fJyxcbiAgICAgICdfX3dlZXhfdmlld21vZGVsX18nLFxuICAgICAgJ3NldFRpbWVvdXQnLFxuICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlUmVxdWlyZU1vZHVsZSxcbiAgICAgIGJ1bmRsZVZtLFxuICAgICAgdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICB0aW1lckFQSXMuY2xlYXJUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLmNsZWFySW50ZXJ2YWwpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9kb2N1bWVudF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9yZXF1aXJlX18nLFxuICAgICAgJ19fd2VleF92aWV3bW9kZWxfXycsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlLFxuICAgICAgYnVuZGxlVm0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvaW5pdC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIENvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1xuICBpbml0U3RhdGVcbn0gZnJvbSAnLi4vY29yZS9zdGF0ZSdcbmltcG9ydCB7XG4gIGJ1aWxkXG59IGZyb20gJy4vY29tcGlsZXInXG5pbXBvcnQge1xuICBzZXQsXG4gIGRlbFxufSBmcm9tICcuLi9jb3JlL29ic2VydmVyJ1xuaW1wb3J0IHtcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBpbml0RXZlbnRzLFxuICBtaXhpbkV2ZW50c1xufSBmcm9tICcuL2V2ZW50cydcblxuLyoqXG4gKiBWaWV3TW9kZWwgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgICAgY29tcG9uZW50IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRWbSAgIHdoaWNoIGNvbnRhaW5zIF9hcHBcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRFbCAgIHJvb3QgZWxlbWVudCBvciBmcmFnIGJsb2NrXG4gKiBAcGFyYW0ge29iamVjdH0gbWVyZ2VkRGF0YSBleHRlcm5hbCBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gZXh0ZXJuYWxFdmVudHMgZXh0ZXJuYWwgZXZlbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZtIChcbiAgdHlwZSxcbiAgb3B0aW9ucyxcbiAgcGFyZW50Vm0sXG4gIHBhcmVudEVsLFxuICBtZXJnZWREYXRhLFxuICBleHRlcm5hbEV2ZW50c1xuKSB7XG4gIHBhcmVudFZtID0gcGFyZW50Vm0gfHwge31cbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50Vm0uX3JlYWxQYXJlbnQgPyBwYXJlbnRWbS5fcmVhbFBhcmVudCA6IHBhcmVudFZtXG4gIHRoaXMuX2FwcCA9IHBhcmVudFZtLl9hcHAgfHwge31cbiAgcGFyZW50Vm0uX2NoaWxkcmVuVm1zICYmIHBhcmVudFZtLl9jaGlsZHJlblZtcy5wdXNoKHRoaXMpXG5cbiAgaWYgKCFvcHRpb25zICYmIHRoaXMuX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB7fVxuXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuX21ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge31cbiAgdGhpcy5fY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IHt9XG4gIHRoaXMuX2NzcyA9IG9wdGlvbnMuc3R5bGUgfHwge31cbiAgdGhpcy5faWRzID0ge31cbiAgdGhpcy5fdm1FdmVudHMgPSB7fVxuICB0aGlzLl9jaGlsZHJlblZtcyA9IFtdXG4gIHRoaXMuX3R5cGUgPSB0eXBlXG5cbiAgLy8gYmluZCBldmVudHMgYW5kIGxpZmVjeWNsZXNcbiAgaW5pdEV2ZW50cyh0aGlzLCBleHRlcm5hbEV2ZW50cylcblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImluaXRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmluaXQnKVxuICB0aGlzLl9pbml0ZWQgPSB0cnVlXG5cbiAgLy8gcHJveHkgZGF0YSBhbmQgbWV0aG9kc1xuICAvLyBvYnNlcnZlIGRhdGEgYW5kIGFkZCB0aGlzIHRvIHZtc1xuICB0aGlzLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicgPyBkYXRhKCkgOiBkYXRhXG4gIGlmIChtZXJnZWREYXRhKSB7XG4gICAgZXh0ZW5kKHRoaXMuX2RhdGEsIG1lcmdlZERhdGEpXG4gIH1cbiAgaW5pdFN0YXRlKHRoaXMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJjcmVhdGVkXCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazpjcmVhdGVkJylcbiAgdGhpcy5fY3JlYXRlZCA9IHRydWVcblxuICAvLyBiYWNrd2FyZCBvbGQgcmVhZHkgZW50cnlcbiAgaWYgKG9wdGlvbnMubWV0aG9kcyAmJiBvcHRpb25zLm1ldGhvZHMucmVhZHkpIHtcbiAgICBjb25zb2xlLndhcm4oJ1wiZXhwb3J0cy5tZXRob2RzLnJlYWR5XCIgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAncGxlYXNlIHVzZSBcImV4cG9ydHMuY3JlYXRlZFwiIGluc3RlYWQnKVxuICAgIG9wdGlvbnMubWV0aG9kcy5yZWFkeS5jYWxsKHRoaXMpXG4gIH1cblxuICBpZiAoIXRoaXMuX2FwcC5kb2MpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGlmIG5vIHBhcmVudEVsZW1lbnQgdGhlbiBzcGVjaWZ5IHRoZSBkb2N1bWVudEVsZW1lbnRcbiAgdGhpcy5fcGFyZW50RWwgPSBwYXJlbnRFbCB8fCB0aGlzLl9hcHAuZG9jLmRvY3VtZW50RWxlbWVudFxuICBidWlsZCh0aGlzKVxufVxuXG5taXhpbkV2ZW50cyhWbS5wcm90b3R5cGUpXG5cbi8qKlxuICogV2F0Y2ggYW4gZnVuY3Rpb24gYW5kIGJpbmQgYWxsIHRoZSBkYXRhIGFwcGVhcmVkIGluIGl0LiBXaGVuIHRoZSByZWxhdGVkXG4gKiBkYXRhIGNoYW5nZXMsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aXRoIG5ldyB2YWx1ZSBhcyAxc3QgcGFyYW0uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblZtLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gIHdhdGNoKHRoaXMsIGZuLCBjYWxsYmFjaylcbn1cblxuVm0uc2V0ID0gc2V0XG5WbS5kZWxldGUgPSBkZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCB7XG4gIGV4dGVuZCxcbiAgZGVmLFxuICByZW1vdmUsXG4gIGhhc093bixcbiAgYmluZCxcbiAgdG9BcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Rcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzJ1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICBjb25zdCBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApXG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG5leHBvcnQgY29uc3QgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fVxuXG5sZXQgX1NldFxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgU2V0LnRvU3RyaW5nKCkubWF0Y2goL25hdGl2ZSBjb2RlLykpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXRcbn1cbmVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLnNldFtrZXldICE9PSB1bmRlZmluZWRcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGhpcy5zZXRba2V5XSA9IDFcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxufVxuXG5leHBvcnQgeyBfU2V0IH1cblxuLyoqXG4gKiBQb2x5ZmlsbCBpbiBpT1M3IGJ5IG5hdGl2ZSBiZWNhdXNlIHRoZSBKYXZhU2NyaXB0IHBvbHlmaWxsIGhhcyBtZW1vcnkgcHJvYmxlbS5cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3U2V0ICgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgaWYgKHR5cGVvZiBuYXRpdmVTZXQgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG5hdGl2ZVNldC5jcmVhdGUoKVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgcmV0dXJuIG5ldyBfU2V0KClcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl1cbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCB0b1VwcGVyKVxufSlcblxuZnVuY3Rpb24gdG9VcHBlciAoXywgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnXG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFthLXpcXGRdKShbQS1aXSkvZ1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgLnRvTG93ZXJDYXNlKClcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBvZiAodikge1xuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpLnRvTG93ZXJDYXNlKClcbn1cblxuLy8gd2VleCBuYW1lIHJ1bGVzXG5cbmNvbnN0IFdFRVhfQ09NUE9ORU5UX1JFRyA9IC9eQHdlZXgtY29tcG9uZW50XFwvL1xuY29uc3QgV0VFWF9NT0RVTEVfUkVHID0gL15Ad2VleC1tb2R1bGVcXC8vXG5jb25zdCBOT1JNQUxfTU9EVUxFX1JFRyA9IC9eXFwuezEsMn1cXC8vXG5jb25zdCBKU19TVVJGSVhfUkVHID0gL1xcLmpzJC9cblxuZXhwb3J0IGNvbnN0IGlzV2VleENvbXBvbmVudCA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfQ09NUE9ORU5UX1JFRylcbmV4cG9ydCBjb25zdCBpc1dlZXhNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX01PRFVMRV9SRUcpXG5leHBvcnQgY29uc3QgaXNOb3JtYWxNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChOT1JNQUxfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05wbU1vZHVsZSA9IG5hbWUgPT4gIWlzV2VleENvbXBvbmVudChuYW1lKSAmJiAhaXNXZWV4TW9kdWxlKG5hbWUpICYmICFpc05vcm1hbE1vZHVsZShuYW1lKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2VleFByZWZpeCAoc3RyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHN0ci5yZXBsYWNlKFdFRVhfQ09NUE9ORU5UX1JFRywgJycpLnJlcGxhY2UoV0VFWF9NT0RVTEVfUkVHLCAnJylcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSlNTdXJmaXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoSlNfU1VSRklYX1JFRywgJycpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4vd2F0Y2hlcidcbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQge1xuICBvYnNlcnZlLFxuICBwcm94eSxcbiAgdW5wcm94eVxufSBmcm9tICcuL29ic2VydmVyJ1xuaW1wb3J0IHtcbiAgaXNQbGFpbk9iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXVxuICBpbml0RGF0YSh2bSlcbiAgaW5pdENvbXB1dGVkKHZtKVxuICBpbml0TWV0aG9kcyh2bSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICBsZXQgZGF0YSA9IHZtLl9kYXRhXG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJveHkodm0sIGtleXNbaV0pXG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdm0pXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSkge1xuICBjb25zdCBjb21wdXRlZCA9IHZtLl9jb21wdXRlZFxuICBpZiAoY29tcHV0ZWQpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXJEZWYgPSBjb21wdXRlZFtrZXldXG4gICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRlZi5nZXQgPSBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZiwgdm0pXG4gICAgICAgIGRlZi5zZXQgPSBub29wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWYuZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgICAgICA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgICA/IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgICA6IGJpbmQodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgICAgICA/IGJpbmQodXNlckRlZi5zZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIGRlZilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyIChnZXR0ZXIsIG93bmVyKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvd25lciwgZ2V0dGVyLCBudWxsLCB7XG4gICAgbGF6eTogdHJ1ZVxuICB9KVxuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICB3YXRjaGVyLmV2YWx1YXRlKClcbiAgICB9XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIHdhdGNoZXIuZGVwZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSB2bS5fbWV0aG9kc1xuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAobGV0IGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB2bVtrZXldID0gbWV0aG9kc1trZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAsIHsgcHVzaFRhcmdldCwgcG9wVGFyZ2V0IH0gZnJvbSAnLi9kZXAnXG4vLyBpbXBvcnQgeyBwdXNoV2F0Y2hlciB9IGZyb20gJy4vYmF0Y2hlcidcbmltcG9ydCB7XG4gIHdhcm4sXG4gIHJlbW92ZSxcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgcGFyc2VQYXRoLFxuICBjcmVhdGVOZXdTZXRcbiAgLy8gX1NldCBhcyBTZXRcbn0gZnJvbSAnLi4vdXRpbCdcblxubGV0IHVpZCA9IDBcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdGNoZXIgKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIGNvbnN0IGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW11cbiAgdGhpcy5uZXdEZXBzID0gW11cbiAgdGhpcy5kZXBJZHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbiAgdGhpcy5uZXdEZXBJZHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbilcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdGYWlsZWQgd2F0Y2hpbmcgcGF0aDogJyArIGV4cE9yRm4gK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKVxuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICBwb3BUYXJnZXQoKVxuICB0aGlzLmNsZWFudXBEZXBzKClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0RlcH0gZGVwXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICBjb25zdCBpZCA9IGRlcC5pZFxuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpXG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKVxuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgZGVwID0gdGhpcy5kZXBzW2ldXG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgfVxuICBsZXQgdG1wID0gdGhpcy5kZXBJZHNcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkc1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcFxuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpXG4gIHRtcCA9IHRoaXMuZGVwc1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHNcbiAgdGhpcy5uZXdEZXBzID0gdG1wXG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwXG59XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHRoaXMucnVuKClcbiAgfVxuICAvLyB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAvLyAgIHRoaXMucnVuKClcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyBpZiBxdWV1ZWQsIG9ubHkgb3ZlcndyaXRlIHNoYWxsb3cgd2l0aCBub24tc2hhbGxvdyxcbiAgLy8gICAvLyBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAvLyAgIHRoaXMuc2hhbGxvdyA9IHRoaXMucXVldWVkXG4gIC8vICAgICA/IHNoYWxsb3dcbiAgLy8gICAgICAgPyB0aGlzLnNoYWxsb3dcbiAgLy8gICAgICAgOiBmYWxzZVxuICAvLyAgICAgOiAhIXNoYWxsb3dcbiAgLy8gICB0aGlzLnF1ZXVlZCA9IHRydWVcbiAgLy8gICBwdXNoV2F0Y2hlcih0aGlzKVxuICAvLyB9XG59XG5cbi8qKlxuICogQmF0Y2hlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIGJhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KClcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQ7IGJ1dCBvbmx5IGRvIHNvIGlmIHRoaXMgaXMgYVxuICAgICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgICAgKChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KVxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKVxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U2V0fSBzZWVuXG4gKi9cblxuY29uc3Qgc2Vlbk9iamVjdHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgbGV0IGksIGtleXMsIGlzQSwgaXNPXG4gIGlmICghc2Vlbikge1xuICAgIHNlZW4gPSBzZWVuT2JqZWN0c1xuICAgIHNlZW4uY2xlYXIoKVxuICB9XG4gIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICBpc08gPSBpc09iamVjdCh2YWwpXG4gIGlmIChpc0EgfHwgaXNPKSB7XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIGNvbnN0IGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWRcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLmFkZChkZXBJZClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSwgc2VlbilcbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvcHJvY2Vzcy8wLjExLjkvcHJvY2Vzcy9icm93c2VyLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnLi4vdXRpbCdcblxubGV0IHVpZCA9IDBcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVwICgpIHtcbiAgdGhpcy5pZCA9IHVpZCsrXG4gIHRoaXMuc3VicyA9IFtdXG59XG5cbi8vIHRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIHRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb25seSBvbmVcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGxcbmxldCB0YXJnZXRTdGFjayA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFyZ2V0IChfdGFyZ2V0KSB7XG4gIGlmIChEZXAudGFyZ2V0KSB0YXJnZXRTdGFjay5wdXNoKERlcC50YXJnZXQpXG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2sucG9wKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VGFyZ2V0ICgpIHtcbiAgRGVwLnRhcmdldCA9IG51bGxcbiAgdGFyZ2V0U3RhY2sgPSBbXVxufVxuXG4vKipcbiAqIEFkZCBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKVxufVxuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgRGVwLnRhcmdldC5hZGREZXAodGhpcylcbiAgfVxufVxuXG4vKipcbiAqIE5vdGlmeSBhbGwgc3Vic2NyaWJlcnMgb2YgYSBuZXcgdmFsdWUuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHN0YWJsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgY29uc3Qgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdWJzW2ldLnVwZGF0ZSgpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL2RlcC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQgeyBhcnJheU1ldGhvZHMgfSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHtcbiAgZGVmLFxuICByZW1vdmUsXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBoYXNQcm90byxcbiAgaGFzT3duLFxuICBpc1Jlc2VydmVkXG59IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcylcblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGFyZSBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2hlcyB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSB2YWx1ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKClcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcylcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgYXVnbWVudCA9IGhhc1Byb3RvXG4gICAgICA/IHByb3RvQXVnbWVudFxuICAgICAgOiBjb3B5QXVnbWVudFxuICAgIGF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSlcbiAgfVxufVxuXG4vLyBJbnN0YW5jZSBtZXRob2RzXG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIHRoaXMuY29udmVydChrZXksIG9ialtrZXldKVxuICB9XG59XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGRlZmluZVJlYWN0aXZlKHRoaXMudmFsdWUsIGtleSwgdmFsKVxufVxuXG4vKipcbiAqIEFkZCBhbiBvd25lciB2bSwgc28gdGhhdCB3aGVuICRzZXQvJGRlbGV0ZSBtdXRhdGlvbnNcbiAqIGhhcHBlbiB3ZSBjYW4gbm90aWZ5IG93bmVyIHZtcyB0byBwcm94eSB0aGUga2V5cyBhbmRcbiAqIGRpZ2VzdCB0aGUgd2F0Y2hlcnMuIFRoaXMgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0XG4gKiBpcyBvYnNlcnZlZCBhcyBhbiBpbnN0YW5jZSdzIHJvb3QgJGRhdGEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmFkZFZtID0gZnVuY3Rpb24gKHZtKSB7XG4gICh0aGlzLnZtcyB8fCAodGhpcy52bXMgPSBbXSkpLnB1c2godm0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIG93bmVyIHZtLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBvYmplY3QgaXNcbiAqIHN3YXBwZWQgb3V0IGFzIGFuIGluc3RhbmNlJ3MgJGRhdGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVWbSA9IGZ1bmN0aW9uICh2bSkge1xuICByZW1vdmUodGhpcy52bXMsIHZtKVxufVxuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gc3JjXG4gKi9cblxuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1xuICovXG5cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7T2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICogQHN0YXRpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBsZXQgb2JcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgfSBlbHNlIGlmIChcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKVxuICB9XG4gIGlmIChvYiAmJiB2bSkge1xuICAgIG9iLmFkZFZtKHZtKVxuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSAob2JqLCBrZXksIHZhbCkge1xuICBjb25zdCBkZXAgPSBuZXcgRGVwKClcblxuICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpXG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0XG4gIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldFxuXG4gIGxldCBjaGlsZE9iID0gb2JzZXJ2ZSh2YWwpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKClcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAobGV0IGUsIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlID0gdmFsdWVbaV1cbiAgICAgICAgICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWxcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSBvYnNlcnZlKG5ld1ZhbClcbiAgICAgIGRlcC5ub3RpZnkoKVxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0IChvYmosIGtleSwgdmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLnNwbGljZShrZXksIDEsIHZhbClcbiAgfVxuICBpZiAoaGFzT3duKG9iaiwga2V5KSkge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbClcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cbiAgaWYgKCFvYikge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbClcbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgcHJveHkodm0sIGtleSlcbiAgICAgIC8vIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsIChvYmosIGtleSkge1xuICBpZiAoIWhhc093bihvYmosIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgb2JqW2tleV1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG5cbiAgaWYgKCFvYikge1xuICAgIGlmIChvYmouX2lzVnVlKSB7XG4gICAgICBkZWxldGUgb2JqLl9kYXRhW2tleV1cbiAgICAgIC8vIG9iai4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICB1bnByb3h5KHZtLCBrZXkpXG4gICAgICAvLyB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBLRVlfV09SRFMgPSBbJyRpbmRleCcsICckdmFsdWUnLCAnJGV2ZW50J11cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSAodm0sIGtleSkge1xuICBpZiAoS0VZX1dPUkRTLmluZGV4T2Yoa2V5KSA+IC0xIHx8ICFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgICAgICByZXR1cm4gdm0uX2RhdGFba2V5XVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgICAgICB2bS5fZGF0YVtrZXldID0gdmFsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm94eSAodm0sIGtleSkge1xuICBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIGRlbGV0ZSB2bVtrZXldXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL29ic2VydmVyLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgZGVmIH0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZVxuZXhwb3J0IGNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuXG47W1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXVxuLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgbGV0IGkgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgY29uc3QgYXJncyA9IG5ldyBBcnJheShpKVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fXG4gICAgbGV0IGluc2VydGVkXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZClcbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KVxufSlcblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIGEgbmV3IHZhbHVlXG4gKiBhbmQgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHsqfSAtIHJlcGxhY2VkIGVsZW1lbnRcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckc2V0JyxcbiAgZnVuY3Rpb24gJHNldCAoaW5kZXgsIHZhbCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBpbmRleCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxLCB2YWwpWzBdXG4gIH1cbilcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckcmVtb3ZlJyxcbiAgZnVuY3Rpb24gJHJlbW92ZSAoaW5kZXgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2YoaW5kZXgpXG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBWaWV3TW9kZWwgdGVtcGxhdGUgcGFyc2VyICYgZGF0YS1iaW5kaW5nIHByb2Nlc3NcbiAqL1xuXG5pbXBvcnQge1xuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1xuICBpbml0RGF0YSxcbiAgaW5pdENvbXB1dGVkXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBiaW5kRWxlbWVudCxcbiAgc2V0SWQsXG4gIGJpbmRTdWJWbSxcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCxcbiAgYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zLFxuICB3YXRjaFxufSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCB7XG4gIGNyZWF0ZUJsb2NrLFxuICBjcmVhdGVCb2R5LFxuICBjcmVhdGVFbGVtZW50LFxuICBhdHRhY2hUYXJnZXQsXG4gIG1vdmVUYXJnZXQsXG4gIHJlbW92ZVRhcmdldFxufSBmcm9tICcuL2RvbS1oZWxwZXInXG5cbi8qKlxuICogYnVpbGQoKVxuICogICBjb21waWxlKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgIGlmICh0eXBlIGlzIGNvbnRlbnQpIGNyZWF0ZSBjb250ZW50Tm9kZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWZvcikgZm9yZWFjaCAtPiBjcmVhdGUgY29udGV4dFxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXRGb3IsIHBhcmVudE5vZGUpOiBkaWZmKGxpc3QpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAoZGlycyBoYXZlIHYtaWYpIGFzc2VydFxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXRJZiwgcGFyZW50Tm9kZSk6IHRvZ2dsZShzaG93bikgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIGR5bmFtaWMpXG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dER5bmFtaWNUeXBlLCBwYXJlbnROb2RlKTogd2F0Y2godHlwZSkgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIGN1c3RvbSlcbiAqICAgICAgIGFkZENoaWxkVm0odm0sIHBhcmVudFZtKVxuICogICAgICAgYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIG5hdGl2ZSlcbiAqICAgICAgIHNldChkaXJzKTogdXBkYXRlKGlkL2F0dHIvc3R5bGUvY2xhc3MpIG9uY2hhbmdlXG4gKiAgICAgICBhcHBlbmQodGVtcGxhdGUsIHBhcmVudE5vZGUpXG4gKiAgICAgICBmb3JlYWNoIGNoaWxkTm9kZXMgLT4gY29tcGlsZShjaGlsZE5vZGUsIHRlbXBsYXRlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQgKHZtKSB7XG4gIGNvbnN0IG9wdCA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IHRlbXBsYXRlID0gb3B0LnRlbXBsYXRlIHx8IHt9XG5cbiAgaWYgKG9wdC5yZXBsYWNlKSB7XG4gICAgaWYgKHRlbXBsYXRlLmNoaWxkcmVuICYmIHRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW5bMF0sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZS5jaGlsZHJlbiwgdm0uX3BhcmVudEVsKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZSwgdm0uX3BhcmVudEVsKVxuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJyZWFkeVwiIGxpZmVjeWNsZSBpbiBWbSgke3ZtLl90eXBlfSlgKVxuICB2bS4kZW1pdCgnaG9vazpyZWFkeScpXG4gIHZtLl9yZWFkeSA9IHRydWVcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50cyBieSBjaGlsZCBvciBjaGlsZHJlbiBhbmQgYXBwZW5kIHRvIHBhcmVudCBlbGVtZW50cy5cbiAqIFJvb3QgZWxlbWVudCBpbmZvIHdvdWxkIGJlIG1lcmdlZCBpZiBoYXMuIFRoZSBmaXJzdCBhcmd1bWVudCBtYXkgYmUgYW4gYXJyYXlcbiAqIGlmIHRoZSByb290IGVsZW1lbnQgd2l0aCBvcHRpb25zLnJlcGxhY2UgaGFzIG5vdCBvbmx5IG9uZSBjaGlsZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgZGVzdFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG5cbiAgaWYgKGFwcC5sYXN0U2lnbmFsID09PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldC5hdHRyICYmIHRhcmdldC5hdHRyLmhhc093blByb3BlcnR5KCdzdGF0aWMnKSkge1xuICAgIHZtLl9zdGF0aWMgPSB0cnVlXG4gIH1cblxuICBpZiAodGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpKSB7XG4gICAgY29tcGlsZUZyYWdtZW50KHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgbWV0YSA9IG1ldGEgfHwge31cbiAgaWYgKHRhcmdldElzQ29udGVudCh0YXJnZXQpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImNvbnRlbnRcIiBibG9jayBieScsIHRhcmdldClcbiAgICB2bS5fY29udGVudCA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcInJlcGVhdFwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGlmIChkZXN0LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVGhlIHJvb3QgZWxlbWVudCBkb2VzXFwndCBzdXBwb3J0IGByZXBlYXRgIGRpcmVjdGl2ZSEnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGVSZXBlYXQodm0sIHRhcmdldCwgZGVzdClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRhcmdldE5lZWRDaGVja1Nob3duKHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiaWZcIiBsb2dpYyBieScsIHRhcmdldClcbiAgICBpZiAoZGVzdC50eXBlID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFRoZSByb290IGVsZW1lbnQgZG9lc1xcJ3Qgc3VwcG9ydCBgaWZgIGRpcmVjdGl2ZSEnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGVTaG93bih2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlR2V0dGVyID0gbWV0YS50eXBlIHx8IHRhcmdldC50eXBlXG4gIGlmICh0YXJnZXROZWVkQ2hlY2tUeXBlKHR5cGVHZXR0ZXIsIG1ldGEpKSB7XG4gICAgY29tcGlsZVR5cGUodm0sIHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlID0gdHlwZUdldHRlclxuICBjb25zdCBjb21wb25lbnQgPSB0YXJnZXRJc0NvbXBvc2VkKHZtLCB0YXJnZXQsIHR5cGUpXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIGNvbXBvc2VkIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgICBjb21waWxlQ3VzdG9tQ29tcG9uZW50KHZtLCBjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIG5hdGl2ZSBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gIGNvbXBpbGVOYXRpdmVDb21wb25lbnQodm0sIHRhcmdldCwgZGVzdCwgdHlwZSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgaXMgYSBmcmFnbWVudCAoYW4gYXJyYXkpLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNGcmFnbWVudCAodGFyZ2V0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgdHlwZSBpcyBjb250ZW50L3Nsb3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbnRlbnQgKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdjb250ZW50JyB8fCB0YXJnZXQudHlwZSA9PT0gJ3Nsb3QnXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGxpc3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tSZXBlYXQgKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3JlcGVhdCcpICYmIHRhcmdldC5yZXBlYXRcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgYm9vbGVhbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1Nob3duICh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdzaG93bicpICYmIHRhcmdldC5zaG93blxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBkeW5hbWljIHR5cGUuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfGZ1bmN0aW9ufSB0eXBlR2V0dGVyXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1R5cGUgKHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgcmV0dXJuICh0eXBlb2YgdHlwZUdldHRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgIW1ldGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMga2luZCBvZiBjb21wb25lbnQgaXMgY29tcG9zZWQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNDb21wb3NlZCAodm0sIHRhcmdldCwgdHlwZSkge1xuICBsZXQgY29tcG9uZW50XG4gIGlmICh2bS5fYXBwICYmIHZtLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV1cbiAgfVxuICBpZiAodm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudCA9IHZtLl9vcHRpb25zLmNvbXBvbmVudHNbdHlwZV1cbiAgfVxuICBpZiAodGFyZ2V0LmNvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudCB8fCB7fVxuICB9XG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbGlzdCBvZiB0YXJnZXRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlRnJhZ21lbnQgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gIHRhcmdldC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbXBpbGUodm0sIGNoaWxkLCBmcmFnQmxvY2ssIG1ldGEpXG4gIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIHJlcGVhdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVJlcGVhdCAodm0sIHRhcmdldCwgZGVzdCkge1xuICBjb25zdCByZXBlYXQgPSB0YXJnZXQucmVwZWF0XG4gIGNvbnN0IG9sZFN0eWxlID0gdHlwZW9mIHJlcGVhdCA9PT0gJ2Z1bmN0aW9uJ1xuICBsZXQgZ2V0dGVyID0gcmVwZWF0LmdldHRlciB8fCByZXBlYXQuZXhwcmVzc2lvbiB8fCByZXBlYXRcbiAgaWYgKHR5cGVvZiBnZXR0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICBnZXR0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9XG4gIH1cbiAgY29uc3Qga2V5ID0gcmVwZWF0LmtleSB8fCAnJGluZGV4J1xuICBjb25zdCB2YWx1ZSA9IHJlcGVhdC52YWx1ZSB8fCAnJHZhbHVlJ1xuICBjb25zdCB0cmFja0J5ID0gcmVwZWF0LnRyYWNrQnkgfHwgdGFyZ2V0LnRyYWNrQnkgfHxcbiAgICAodGFyZ2V0LmF0dHIgJiYgdGFyZ2V0LmF0dHIudHJhY2tCeSlcblxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgZnJhZ0Jsb2NrLmNoaWxkcmVuID0gW11cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBbXVxuICBmcmFnQmxvY2sudm1zID0gW11cblxuICBiaW5kUmVwZWF0KHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgeyBnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIGlmIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNob3duICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IG5ld01ldGEgPSB7IHNob3duOiB0cnVlIH1cbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIGlmIChtZXRhLnJlcGVhdCkge1xuICAgIG5ld01ldGEucmVwZWF0ID0gbWV0YS5yZXBlYXRcbiAgfVxuXG4gIGJpbmRTaG93bih2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIGR5bmFtaWMgY29tcG9uZW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICAgdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gICBkZXN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0eXBlR2V0dGVyXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVUeXBlICh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyLmNhbGwodm0pXG4gIGNvbnN0IG5ld01ldGEgPSBleHRlbmQoeyB0eXBlIH0sIG1ldGEpXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuXG4gIGlmIChkZXN0LmVsZW1lbnQgJiYgZGVzdC5jaGlsZHJlbikge1xuICAgIGRlc3QuY2hpbGRyZW4ucHVzaChmcmFnQmxvY2spXG4gIH1cblxuICB3YXRjaCh2bSwgdHlwZUdldHRlciwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGU6IHZhbHVlIH0sIG1ldGEpXG4gICAgcmVtb3ZlVGFyZ2V0KHZtLCBmcmFnQmxvY2ssIHRydWUpXG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG4gIH0pXG5cbiAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGNvbXBvc2VkIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUN1c3RvbUNvbXBvbmVudCAodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKSB7XG4gIGNvbnN0IEN0b3IgPSB2bS5jb25zdHJ1Y3RvclxuICBjb25zdCBzdWJWbSA9IG5ldyBDdG9yKHR5cGUsIGNvbXBvbmVudCwgdm0sIGRlc3QsIHVuZGVmaW5lZCwge1xuICAgICdob29rOmluaXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodm0uX3N0YXRpYykge1xuICAgICAgICB0aGlzLl9zdGF0aWMgPSB2bS5fc3RhdGljXG4gICAgICB9XG4gICAgICBzZXRJZCh2bSwgbnVsbCwgdGFyZ2V0LmlkLCB0aGlzKVxuICAgICAgLy8gYmluZCB0ZW1wbGF0ZSBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgICAgdGhpcy5fZXh0ZXJuYWxCaW5kaW5nID0ge1xuICAgICAgICBwYXJlbnQ6IHZtLFxuICAgICAgICB0ZW1wbGF0ZTogdGFyZ2V0XG4gICAgICB9XG4gICAgfSxcbiAgICAnaG9vazpjcmVhdGVkJzogZnVuY3Rpb24gKCkge1xuICAgICAgYmluZFN1YlZtKHZtLCB0aGlzLCB0YXJnZXQsIG1ldGEucmVwZWF0KVxuICAgIH0sXG4gICAgJ2hvb2s6cmVhZHknOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgICBjb21waWxlQ2hpbGRyZW4odm0sIHRhcmdldCwgdGhpcy5fY29udGVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQodm0sIHN1YlZtLCB0YXJnZXQsIGRlc3QpXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudCBmcm9tIHRlbXBsYXRlIGFuZCBhdHRhY2ggdG8gdGhlIGRlc3QgaWYgbmVlZGVkLlxuICogVGhlIHRpbWUgdG8gYXR0YWNoIGRlcGVuZHMgb24gd2hldGhlciB0aGUgbW9kZSBzdGF0dXMgaXMgbm9kZSBvciB0cmVlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVOYXRpdmVDb21wb25lbnQgKHZtLCB0ZW1wbGF0ZSwgZGVzdCwgdHlwZSkge1xuICBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnModGVtcGxhdGUpXG5cbiAgbGV0IGVsZW1lbnRcbiAgaWYgKGRlc3QucmVmID09PSAnX2RvY3VtZW50RWxlbWVudCcpIHtcbiAgICAvLyBpZiBpdHMgcGFyZW50IGlzIGRvY3VtZW50RWxlbWVudCB0aGVuIGl0J3MgYSBib2R5XG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBjcmVhdGUgYm9keSBmb3IgJHt0eXBlfWApXG4gICAgZWxlbWVudCA9IGNyZWF0ZUJvZHkodm0sIHR5cGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBjcmVhdGUgZWxlbWVudCBmb3IgJHt0eXBlfWApXG4gICAgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQodm0sIHR5cGUpXG4gIH1cblxuICBpZiAoIXZtLl9yb290RWwpIHtcbiAgICB2bS5fcm9vdEVsID0gZWxlbWVudFxuICAgIC8vIGJpbmQgZXZlbnQgZWFybGllciBiZWNhdXNlIG9mIGxpZmVjeWNsZSBpc3N1ZXNcbiAgICBjb25zdCBiaW5kaW5nID0gdm0uX2V4dGVybmFsQmluZGluZyB8fCB7fVxuICAgIGNvbnN0IHRhcmdldCA9IGJpbmRpbmcudGVtcGxhdGVcbiAgICBjb25zdCBwYXJlbnRWbSA9IGJpbmRpbmcucGFyZW50XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZXZlbnRzICYmIHBhcmVudFZtICYmIGVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgdHlwZSBpbiB0YXJnZXQuZXZlbnRzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYXJlbnRWbVt0YXJnZXQuZXZlbnRzW3R5cGVdXVxuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCBwYXJlbnRWbSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiaW5kRWxlbWVudCh2bSwgZWxlbWVudCwgdGVtcGxhdGUpXG5cbiAgaWYgKHRlbXBsYXRlLmF0dHIgJiYgdGVtcGxhdGUuYXR0ci5hcHBlbmQpIHsgLy8gYmFja3dhcmQsIGFwcGVuZCBwcm9wIGluIGF0dHJcbiAgICB0ZW1wbGF0ZS5hcHBlbmQgPSB0ZW1wbGF0ZS5hdHRyLmFwcGVuZFxuICB9XG5cbiAgaWYgKHRlbXBsYXRlLmFwcGVuZCkgeyAvLyBnaXZlIHRoZSBhcHBlbmQgYXR0cmlidXRlIGZvciBpb3MgYWRhcHRhdGlvblxuICAgIGVsZW1lbnQuYXR0ciA9IGVsZW1lbnQuYXR0ciB8fCB7fVxuICAgIGVsZW1lbnQuYXR0ci5hcHBlbmQgPSB0ZW1wbGF0ZS5hcHBlbmRcbiAgfVxuXG4gIGNvbnN0IHRyZWVNb2RlID0gdGVtcGxhdGUuYXBwZW5kID09PSAndHJlZSdcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmICF0cmVlTW9kZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gYXBwZW5kIHNpbmdsZSBub2RlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSBhdHRhY2hUYXJnZXQodm0sIGVsZW1lbnQsIGRlc3QpXG4gIH1cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSkge1xuICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGVtcGxhdGUsIGVsZW1lbnQpXG4gIH1cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSAmJiB0cmVlTW9kZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gYXBwZW5kIHdob2xlIHRyZWUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhbGwgY2hpbGRyZW4gdG8gYSBjZXJ0YWluIHBhcmVudCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuICh2bSwgdGVtcGxhdGUsIGRlc3QpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuICBjb25zdCBjaGlsZHJlbiA9IHRlbXBsYXRlLmNoaWxkcmVuXG4gIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbi5ldmVyeSgoY2hpbGQpID0+IHtcbiAgICAgIGNvbXBpbGUodm0sIGNoaWxkLCBkZXN0KVxuICAgICAgcmV0dXJuIGFwcC5sYXN0U2lnbmFsICE9PSAtMVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgbGlzdCB1cGRhdGUgYW5kIHJlZnJlc2ggdGhlIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGZyYWdCbG9jayB7dm1zLCBkYXRhLCBjaGlsZHJlbn1cbiAqIEBwYXJhbSB7b2JqZWN0fSBpbmZvICAgICAge2dldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGV9XG4gKi9cbmZ1bmN0aW9uIGJpbmRSZXBlYXQgKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgaW5mbykge1xuICBjb25zdCB2bXMgPSBmcmFnQmxvY2sudm1zXG4gIGNvbnN0IGNoaWxkcmVuID0gZnJhZ0Jsb2NrLmNoaWxkcmVuXG4gIGNvbnN0IHsgZ2V0dGVyLCB0cmFja0J5LCBvbGRTdHlsZSB9ID0gaW5mb1xuICBjb25zdCBrZXlOYW1lID0gaW5mby5rZXlcbiAgY29uc3QgdmFsdWVOYW1lID0gaW5mby52YWx1ZVxuXG4gIGZ1bmN0aW9uIGNvbXBpbGVJdGVtIChpdGVtLCBpbmRleCwgY29udGV4dCkge1xuICAgIGxldCBtZXJnZWREYXRhXG4gICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICBtZXJnZWREYXRhID0gaXRlbVxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBpZiAoIW1lcmdlZERhdGEuaGFzT3duUHJvcGVydHkoJ0lOREVYJykpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVyZ2VkRGF0YSwgJ0lOREVYJywge1xuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBcIklOREVYXCIgaW4gcmVwZWF0IGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICAgICAgICdwbGVhc2UgdXNlIFwiJGluZGV4XCIgaW5zdGVhZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gRWFjaCBsaXN0IGl0ZW0gbXVzdCBiZSBhbiBvYmplY3QgaW4gb2xkLXN0eWxlIHJlcGVhdCwgJ1xuICAgICAgICAgICsgJ3BsZWFzZSB1c2UgYHJlcGVhdD17e3YgaW4gbGlzdH19YCBpbnN0ZWFkLicpXG4gICAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgbWVyZ2VkRGF0YVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgfVxuICAgIGNvbnN0IG5ld0NvbnRleHQgPSBtZXJnZUNvbnRleHQoY29udGV4dCwgbWVyZ2VkRGF0YSlcbiAgICB2bXMucHVzaChuZXdDb250ZXh0KVxuICAgIGNvbXBpbGUobmV3Q29udGV4dCwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgcmVwZWF0OiBpdGVtIH0pXG4gIH1cblxuICBjb25zdCBsaXN0ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCBnZXR0ZXIsICdyZXBlYXQnLFxuICAgIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSB0aGUgXCJyZXBlYXRcIiBpdGVtIGhhcyBjaGFuZ2VkJywgZGF0YSlcbiAgICAgIGlmICghZnJhZ0Jsb2NrIHx8ICFkYXRhKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRDaGlsZHJlbiA9IGNoaWxkcmVuLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZFZtcyA9IHZtcy5zbGljZSgpXG4gICAgICBjb25zdCBvbGREYXRhID0gZnJhZ0Jsb2NrLmRhdGEuc2xpY2UoKVxuICAgICAgLy8gMS4gY29sbGVjdCBhbGwgbmV3IHJlZnMgdHJhY2sgYnlcbiAgICAgIGNvbnN0IHRyYWNrTWFwID0ge31cbiAgICAgIGNvbnN0IHJldXNlZE1hcCA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGtleSA9PSBudWxsIHx8IGtleSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cmFja01hcFtrZXldID0gaXRlbVxuICAgICAgfSlcblxuICAgICAgLy8gMi4gcmVtb3ZlIHVudXNlZCBlbGVtZW50IGZvcmVhY2ggb2xkIGl0ZW1cbiAgICAgIGNvbnN0IHJldXNlZExpc3QgPSBbXVxuICAgICAgb2xkRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgaWYgKHRyYWNrTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXVzZWRNYXBba2V5XSA9IHtcbiAgICAgICAgICAgIGl0ZW0sIGluZGV4LCBrZXksXG4gICAgICAgICAgICB0YXJnZXQ6IG9sZENoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgICAgIHZtOiBvbGRWbXNbaW5kZXhdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZExpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlbW92ZVRhcmdldCh2bSwgb2xkQ2hpbGRyZW5baW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyAzLiBjcmVhdGUgbmV3IGVsZW1lbnQgZm9yZWFjaCBuZXcgaXRlbVxuICAgICAgY2hpbGRyZW4ubGVuZ3RoID0gMFxuICAgICAgdm1zLmxlbmd0aCA9IDBcbiAgICAgIGZyYWdCbG9jay5kYXRhID0gZGF0YS5zbGljZSgpXG4gICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IGZyYWdCbG9jay5zdGFydFxuXG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBjb25zdCByZXVzZWQgPSByZXVzZWRNYXBba2V5XVxuICAgICAgICBpZiAocmV1c2VkKSB7XG4gICAgICAgICAgaWYgKHJldXNlZC5pdGVtID09PSByZXVzZWRMaXN0WzBdKSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LnNoaWZ0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LiRyZW1vdmUocmV1c2VkLml0ZW0pXG4gICAgICAgICAgICBtb3ZlVGFyZ2V0KHZtLCByZXVzZWQudGFyZ2V0LCBmcmFnQmxvY2sudXBkYXRlTWFyaywgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChyZXVzZWQudGFyZ2V0KVxuICAgICAgICAgIHZtcy5wdXNoKHJldXNlZC52bSlcbiAgICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldXNlZC52bSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWQudm1bdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkLnZtW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IHJldXNlZC50YXJnZXRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZSBmcmFnQmxvY2sudXBkYXRlTWFya1xuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kYXRhID0gbGlzdC5zbGljZSgwKVxuICBsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIHZtKVxuICB9KVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBkaXNwbGF5IHVwZGF0ZSBhbmQgYWRkL3JlbW92ZSB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBiaW5kU2hvd24gKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSkge1xuICBjb25zdCBkaXNwbGF5ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCB0YXJnZXQuc2hvd24sICdzaG93bicsXG4gICAgKGRpc3BsYXkpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcImlmXCIgaXRlbSB3YXMgY2hhbmdlZCcsIGRpc3BsYXkpXG5cbiAgICAgIGlmICghZnJhZ0Jsb2NrIHx8ICEhZnJhZ0Jsb2NrLmRpc3BsYXkgPT09ICEhZGlzcGxheSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICBpZiAoZGlzcGxheSkge1xuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggY2FsYyB2YWx1ZSBjaGFuZ2VzIGFuZCBhcHBlbmQgY2VydGFpbiB0eXBlIGFjdGlvbiB0byBkaWZmZXIuXG4gKiBJdCBpcyB1c2VkIGZvciBpZiBvciByZXBlYXQgZGF0YS1iaW5kaW5nIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsY1xuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcmV0dXJuIHthbnl9ICAgICAgaW5pdCB2YWx1ZSBvZiBjYWxjXG4gKi9cbmZ1bmN0aW9uIHdhdGNoQmxvY2sgKHZtLCBmcmFnQmxvY2ssIGNhbGMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICBjb25zdCBjb25maWcgPSB7fVxuICBjb25zdCBkZXB0aCA9IChmcmFnQmxvY2suZWxlbWVudC5kZXB0aCB8fCAwKSArIDFcblxuICByZXR1cm4gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKGRpZmZlciAmJiAhY29uZmlnLnJlY29yZGVkKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKHR5cGUsIGRlcHRoLCBmcmFnQmxvY2suYmxvY2tJZCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGNvbmZpZy5sYXRlc3RWYWx1ZVxuICAgICAgICBoYW5kbGVyKGxhdGVzdFZhbHVlKVxuICAgICAgICBjb25maWcucmVjb3JkZWQgPSBmYWxzZVxuICAgICAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbmZpZy5yZWNvcmRlZCA9IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBDbG9uZSBhIGNvbnRleHQgYW5kIG1lcmdlIGNlcnRhaW4gZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1lcmdlZERhdGFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDb250ZXh0IChjb250ZXh0LCBtZXJnZWREYXRhKSB7XG4gIGNvbnN0IG5ld0NvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpXG4gIG5ld0NvbnRleHQuX2RhdGEgPSBtZXJnZWREYXRhXG4gIGluaXREYXRhKG5ld0NvbnRleHQpXG4gIGluaXRDb21wdXRlZChuZXdDb250ZXh0KVxuICBuZXdDb250ZXh0Ll9yZWFsUGFyZW50ID0gY29udGV4dFxuICBpZiAoY29udGV4dC5fc3RhdGljKSB7XG4gICAgbmV3Q29udGV4dC5fc3RhdGljID0gY29udGV4dC5fc3RhdGljXG4gIH1cbiAgcmV0dXJuIG5ld0NvbnRleHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRGlyZWN0aXZlIFBhcnNlclxuICovXG5cbmltcG9ydCB7IGJpbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi4vY29yZS93YXRjaGVyJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBwYXJzZVBhdGggfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCB7IG5hdGl2ZUNvbXBvbmVudE1hcCB9ID0gY29uZmlnXG5cbmNvbnN0IFNFVFRFUlMgPSB7XG4gIGF0dHI6ICdzZXRBdHRyJyxcbiAgc3R5bGU6ICdzZXRTdHlsZScsXG4gIGV2ZW50OiAnYWRkRXZlbnQnXG59XG5cbi8qKlxuICogYXBwbHkgdGhlIG5hdGl2ZSBjb21wb25lbnQncyBvcHRpb25zKHNwZWNpZmllZCBieSB0ZW1wbGF0ZS50eXBlKVxuICogdG8gdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMgKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGVtcGxhdGVcbiAgY29uc3Qgb3B0aW9ucyA9IG5hdGl2ZUNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAodGVtcGxhdGVba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRlbXBsYXRlW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cG9mKHRlbXBsYXRlW2tleV0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnQgKHZtLCBlbCwgdGVtcGxhdGUpIHtcbiAgc2V0SWQodm0sIGVsLCB0ZW1wbGF0ZS5pZCwgdm0pXG4gIHNldEF0dHIodm0sIGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICBzZXRDbGFzcyh2bSwgZWwsIHRlbXBsYXRlLmNsYXNzTGlzdClcbiAgc2V0U3R5bGUodm0sIGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgYmluZEV2ZW50cyh2bSwgZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm0gKHZtLCBzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB2bSwgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHZtLCBzdWJWbSlcbn1cblxuLyoqXG4gKiBtZXJnZSBjbGFzcyBhbmQgc3R5bGVzIGZyb20gdm0gdG8gc3ViIHZtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCAodm0sIHN1YlZtLCB0ZW1wbGF0ZSwgdGFyZ2V0ID0ge30pIHtcbiAgbWVyZ2VDbGFzc1N0eWxlKHRlbXBsYXRlLmNsYXNzTGlzdCwgdm0sIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB2bSwgc3ViVm0pXG5cbiAgLy8gYmluZCBzdWJWbSB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgaWYgKHRhcmdldC5jaGlsZHJlbikge1xuICAgIHRhcmdldC5jaGlsZHJlblt0YXJnZXQuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uX3ZtID0gc3ViVm1cbiAgfVxuICBlbHNlIHtcbiAgICB0YXJnZXQuX3ZtID0gc3ViVm1cbiAgfVxufVxuXG4vKipcbiAqIEJpbmQgcHJvcHMgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCaW5kIHN0eWxlIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZVN0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgcmV0dXJuVmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJpbmQgY2xhc3MgJiBzdHlsZSBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDbGFzc1N0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBjb25zdCBjc3MgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXN1YlZtLl9yb290RWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9ICdAb3JpZ2luYWxSb290RWwnXG4gIGNzc1tjbGFzc05hbWVdID0gc3ViVm0uX3Jvb3RFbC5jbGFzc1N0eWxlXG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3NOYW1lIChsaXN0LCBuYW1lKSB7XG4gICAgaWYgKHR5cG9mKGxpc3QpID09PSAnYXJyYXknKSB7XG4gICAgICBsaXN0LnVuc2hpZnQobmFtZSlcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIHRhcmdldCwgdiA9PiB7XG4gICAgICBhZGRDbGFzc05hbWUodiwgY2xhc3NOYW1lKVxuICAgICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHYpXG4gICAgfSlcbiAgICBhZGRDbGFzc05hbWUodmFsdWUsIGNsYXNzTmFtZSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdmFsdWUpXG4gIH1cbiAgZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICBhZGRDbGFzc05hbWUodGFyZ2V0LCBjbGFzc05hbWUpXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgaWQgdG8gYW4gZWxlbWVudFxuICogZWFjaCBpZCBpcyB1bmlxdWUgaW4gYSB3aG9sZSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SWQgKHZtLCBlbCwgaWQsIHRhcmdldCkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB0YXJnZXQsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB0YXJnZXQuX3Jvb3RFbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBpZFxuICAgIGlkID0gaGFuZGxlci5jYWxsKHZtKVxuICAgIGlmIChpZCkge1xuICAgICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgd2F0Y2godm0sIGhhbmRsZXIsIChuZXdJZCkgPT4ge1xuICAgICAgaWYgKG5ld0lkKSB7XG4gICAgICAgIHZtLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIgKHZtLCBlbCwgYXR0cikge1xuICBiaW5kRGlyKHZtLCBlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3MgKHZtLCBlbCwgY2xhc3NMaXN0KSB7XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpICYmICFjbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgZWwuc2V0Q2xhc3NTdHlsZSh7fSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjbGFzc0xpc3QsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZSAodm0sIGVsLCBzdHlsZSkge1xuICBiaW5kRGlyKHZtLCBlbCwgJ3N0eWxlJywgc3R5bGUpXG59XG5cbi8qKlxuICogYWRkIGFuIGV2ZW50IHR5cGUgYW5kIGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgZ2VuZXJhdGUgYSBkb20gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50ICh2bSwgZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZWwuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCB2bSkpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnRzICh2bSwgZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlYWxWbSA9IHZtLl9yZWFsUGFyZW50ID8gdm0uX3JlYWxQYXJlbnQgOiB2bVxuICAgIHNldEV2ZW50KHJlYWxWbSwgZWwsIGtleSwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIHNldCBhIHNlcmllcyBvZiBtZW1iZXJzIGFzIGEga2luZCBvZiBhbiBlbGVtZW50XG4gKiBmb3IgZXhhbXBsZTogc3R5bGUsIGF0dHIsIC4uLlxuICogaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBiaW5kIHRoZSBkYXRhIGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gYmluZERpciAodm0sIGVsLCBuYW1lLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBiaW5kS2V5KHZtLCBlbCwgbmFtZSwga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbFtTRVRURVJTW25hbWVdXShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgZGF0YSBjaGFuZ2VzIHRvIGEgY2VydGFpbiBrZXkgdG8gYSBuYW1lIHNlcmllcyBpbiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRLZXkgKHZtLCBlbCwgbmFtZSwga2V5LCBjYWxjKSB7XG4gIGNvbnN0IG1ldGhvZE5hbWUgPSBTRVRURVJTW25hbWVdXG4gIC8vIHdhdGNoIHRoZSBjYWxjLCBhbmQgcmV0dXJucyBhIHZhbHVlIGJ5IGNhbGMuY2FsbCgpXG4gIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICAgIGlmIChkaWZmZXIpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQoJ2VsZW1lbnQnLCBlbC5kZXB0aCwgZWwucmVmLCBoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfSlcblxuICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxufVxuXG4vKipcbiAqIHdhdGNoIGEgY2FsYyBmdW5jdGlvbiBhbmQgY2FsbGJhY2sgaWYgdGhlIGNhbGMgdmFsdWUgY2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2ggKHZtLCBjYWxjLCBjYWxsYmFjaykge1xuICBpZiAodm0uX3N0YXRpYykge1xuICAgIHJldHVybiAoKHR5cGVvZiBjYWxjID09PSAnZnVuY3Rpb24nKSA/IGNhbGMgOiBwYXJzZVBhdGgoY2FsYykpLmNhbGwodm0sIHZtKVxuICB9XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgY2FsYywgZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiB3YXRjaGVyLnZhbHVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzXG4gKiovIiwiLy8gQHRvZG86IEl0IHNob3VsZCBiZSByZWdpc3RlcmVkIGJ5IG5hdGl2ZSBmcm9tIGByZWdpc3RlckNvbXBvbmVudHMoKWAuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hdGl2ZUNvbXBvbmVudE1hcDoge1xuICAgIHRleHQ6IHRydWUsXG4gICAgaW1hZ2U6IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHNsaWRlcjoge1xuICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH0sXG4gICAgY2VsbDoge1xuICAgICAgdHlwZTogJ2NlbGwnLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRG9jdW1lbnQgJiBFbGVtZW50IEhlbHBlcnMuXG4gKlxuICogcmVxdWlyZWQ6XG4gKiBEb2N1bWVudCM6IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNvbW1lbnQsIGdldFJlZlxuICogRWxlbWVudCM6IGFwcGVuZENoaWxkLCBpbnNlcnRCZWZvcmUsIHJlbW92ZUNoaWxkLCBuZXh0U2libGluZ1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgYm9keSBieSB0eXBlXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2R5ICh2bSwgdHlwZSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICByZXR1cm4gZG9jLmNyZWF0ZUJvZHkodHlwZSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCBieSB0eXBlXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh2bSwgdHlwZSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICByZXR1cm4gZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGZyYWcgYmxvY2sgZm9yIGFuIGVsZW1lbnQuXG4gKiBUaGUgZnJhZyBibG9jayBoYXMgYSBzdGFydGVyLCBlbmRlciBhbmQgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvY2sgKHZtLCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQmxvY2tTdGFydCh2bSlcbiAgY29uc3QgZW5kID0gY3JlYXRlQmxvY2tFbmQodm0pXG4gIGNvbnN0IGJsb2NrSWQgPSBsYXN0ZXN0QmxvY2tJZCsrXG4gIGlmIChlbGVtZW50LmVsZW1lbnQpIHtcbiAgICBsZXQgdXBkYXRlTWFyayA9IGVsZW1lbnQudXBkYXRlTWFya1xuICAgIGlmICh1cGRhdGVNYXJrKSB7XG4gICAgICBpZiAodXBkYXRlTWFyay5lbGVtZW50KSB7XG4gICAgICAgIHVwZGF0ZU1hcmsgPSB1cGRhdGVNYXJrLmVuZFxuICAgICAgfVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEFmdGVyKGVuZCwgdXBkYXRlTWFyaylcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihzdGFydCwgdXBkYXRlTWFyaylcbiAgICAgIGVsZW1lbnQudXBkYXRlTWFyayA9IGVuZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoc3RhcnQsIGVsZW1lbnQuZW5kKVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShlbmQsIGVsZW1lbnQuZW5kKVxuICAgIH1cbiAgICBlbGVtZW50ID0gZWxlbWVudC5lbGVtZW50XG4gIH1cbiAgZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGFydClcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVuZClcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kLCBlbGVtZW50LCBibG9ja0lkIH1cbn1cblxubGV0IGxhc3Rlc3RCbG9ja0lkID0gMVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgYmxvY2sgc3RhcnRlci5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmxvY2tTdGFydCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0JylcbiAgcmV0dXJuIGFuY2hvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgYmxvY2sgZW5kZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrRW5kICh2bSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICBjb25zdCBhbmNob3IgPSBkb2MuY3JlYXRlQ29tbWVudCgnZW5kJylcbiAgcmV0dXJuIGFuY2hvclxufVxuXG4vKipcbiAqIEF0dGFjaCB0YXJnZXQgdG8gYSBjZXJ0YWluIGRlc3QgdXNpbmcgYXBwZW5kQ2hpbGQgYnkgZGVmYXVsdC5cbiAqIElmIHRoZSBkZXN0IGlzIGEgZnJhZyBibG9jayB0aGVuIGluc2VydCBiZWZvcmUgdGhlIGVuZGVyLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBhdHRhY2ggdGhlIHN0YXJ0ZXIgYW5kIGVuZGVyIGluIG9yZGVyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFRhcmdldCAodm0sIHRhcmdldCwgZGVzdCkge1xuICBpZiAoZGVzdC5lbGVtZW50KSB7XG4gICAgY29uc3QgYmVmb3JlID0gZGVzdC5lbmRcbiAgICBjb25zdCBhZnRlciA9IGRlc3QudXBkYXRlTWFya1xuICAgIC8vIHB1c2ggbmV3IHRhcmdldCBmb3Igd2F0Y2ggbGlzdCB1cGRhdGUgbGF0ZXJcbiAgICBpZiAoZGVzdC5jaGlsZHJlbikge1xuICAgICAgZGVzdC5jaGlsZHJlbi5wdXNoKHRhcmdldClcbiAgICB9XG4gICAgLy8gZm9yIGNoZWNrIHJlcGVhdCBjYXNlXG4gICAgaWYgKGFmdGVyKSB7XG4gICAgICBjb25zdCBzaWduYWwgPSBtb3ZlVGFyZ2V0KHZtLCB0YXJnZXQsIGFmdGVyKVxuICAgICAgZGVzdC51cGRhdGVNYXJrID0gdGFyZ2V0LmVsZW1lbnQgPyB0YXJnZXQuZW5kIDogdGFyZ2V0XG4gICAgICByZXR1cm4gc2lnbmFsXG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5zdGFydCwgYmVmb3JlKVxuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuZW5kLCBiZWZvcmUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LCBiZWZvcmUpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuc3RhcnQpXG4gICAgICBkZXN0LmFwcGVuZENoaWxkKHRhcmdldC5lbmQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0KVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1vdmUgdGFyZ2V0IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC4gVGhlIHRhcmdldCBtYXliZSBibG9jayBvciBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRhcmdldCAodm0sIHRhcmdldCwgYWZ0ZXIpIHtcbiAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgcmV0dXJuIG1vdmVCbG9jayh0YXJnZXQsIGFmdGVyKVxuICB9XG4gIHJldHVybiBtb3ZlRWxlbWVudCh0YXJnZXQsIGFmdGVyKVxufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudCAoZWxlbWVudCwgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHBhcmVudC5pbnNlcnRBZnRlcihlbGVtZW50LCBhZnRlcilcbiAgfVxufVxuXG4vKipcbiAqIE1vdmUgYWxsIGVsZW1lbnRzIG9mIHRoZSBibG9jayBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmZ1bmN0aW9uIG1vdmVCbG9jayAoZnJhZ0Jsb2NrLCBhZnRlcikge1xuICBjb25zdCBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlXG5cbiAgaWYgKHBhcmVudCkge1xuICAgIGxldCBlbCA9IGZyYWdCbG9jay5zdGFydFxuICAgIGxldCBzaWduYWxcbiAgICBjb25zdCBncm91cCA9IFtlbF1cblxuICAgIHdoaWxlIChlbCAmJiBlbCAhPT0gZnJhZ0Jsb2NrLmVuZCkge1xuICAgICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICAgICAgZ3JvdXAucHVzaChlbClcbiAgICB9XG5cbiAgICBsZXQgdGVtcCA9IGFmdGVyXG4gICAgZ3JvdXAuZXZlcnkoKGVsKSA9PiB7XG4gICAgICBzaWduYWwgPSBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWwsIHRlbXApXG4gICAgICB0ZW1wID0gZWxcbiAgICAgIHJldHVybiBzaWduYWwgIT09IC0xXG4gICAgfSlcblxuICAgIHJldHVybiBzaWduYWxcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSB0YXJnZXQgZnJvbSBET00gdHJlZS5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gY2FsbCBfcmVtb3ZlQmxvY2tcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0ICh2bSwgdGFyZ2V0LCBwcmVzZXJ2ZUJsb2NrID0gZmFsc2UpIHtcbiAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgcmVtb3ZlQmxvY2sodGFyZ2V0LCBwcmVzZXJ2ZUJsb2NrKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlbW92ZUVsZW1lbnQodGFyZ2V0KVxuICB9XG4gIGlmICh0YXJnZXQuX3ZtKSB7XG4gICAgdGFyZ2V0Ll92bS4kZW1pdCgnaG9vazpkZXN0cm95ZWQnKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2VydGFpbiBlbGVtZW50LlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQgKHRhcmdldCkge1xuICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZnJhZyBibG9jay5cbiAqIFRoZSBzZWNvbmQgcGFyYW0gZGVjaWRlcyB3aGV0aGVyIHRoZSBibG9jayBzZWxmIHNob3VsZCBiZSByZW1vdmVkIHRvby5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHByZXNlcnZlQmxvY2s9ZmFsc2VcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQmxvY2sgKGZyYWdCbG9jaywgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBlbCA9IGZyYWdCbG9jay5zdGFydC5uZXh0U2libGluZ1xuXG4gIHdoaWxlIChlbCAmJiBlbCAhPT0gZnJhZ0Jsb2NrLmVuZCkge1xuICAgIHJlc3VsdC5wdXNoKGVsKVxuICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgfVxuXG4gIGlmICghcHJlc2VydmVCbG9jaykge1xuICAgIHJlbW92ZUVsZW1lbnQoZnJhZ0Jsb2NrLnN0YXJ0KVxuICB9XG4gIHJlc3VsdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHJlbW92ZUVsZW1lbnQoZWwpXG4gIH0pXG4gIGlmICghcHJlc2VydmVCbG9jaykge1xuICAgIHJlbW92ZUVsZW1lbnQoZnJhZ0Jsb2NrLmVuZClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEV2ZXJ5dGhpbmcgYWJvdXQgY29tcG9uZW50IGV2ZW50IHdoaWNoIGluY2x1ZGVzIGV2ZW50IG9iamVjdCwgZXZlbnQgbGlzdGVuZXIsXG4gKiBldmVudCBlbWl0dGVyIGFuZCBsaWZlY3ljbGUgaG9va3MuXG4gKi9cblxuLyoqXG4gKiBFdmVudCBvYmplY3QgZGVmaW5pdGlvbi4gQW4gZXZlbnQgb2JqZWN0IGhhcyBgdHlwZWAsIGB0aW1lc3RhbXBgIGFuZFxuICogYGRldGFpbGAgZnJvbSB3aGljaCBhIGNvbXBvbmVudCBlbWl0LiBUaGUgZXZlbnQgb2JqZWN0IGNvdWxkIGJlIGRpc3BhdGNoZWQgdG9cbiAqIHBhcmVudHMgb3IgYnJvYWRjYXN0ZWQgdG8gY2hpbGRyZW4gZXhjZXB0IGB0aGlzLnN0b3AoKWAgaXMgY2FsbGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSAgICBkZXRhaWxcbiAqL1xuZnVuY3Rpb24gRXZ0ICh0eXBlLCBkZXRhaWwpIHtcbiAgaWYgKGRldGFpbCBpbnN0YW5jZW9mIEV2dCkge1xuICAgIHJldHVybiBkZXRhaWxcbiAgfVxuXG4gIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICB0aGlzLmRldGFpbCA9IGRldGFpbFxuICB0aGlzLnR5cGUgPSB0eXBlXG5cbiAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZVxuXG4gIC8qKlxuICAgKiBzdG9wIGRpc3BhdGNoIGFuZCBicm9hZGNhc3RcbiAgICovXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGlmIGl0IGNhbid0IGJlIGRpc3BhdGNoZWQgb3IgYnJvYWRjYXN0ZWRcbiAgICovXG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBidXQgbm90IGJyb2FkY2FzdCBkb3duIG9yIGRpc3BhdGNoIHVwLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVtaXQgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoaGFuZGxlckxpc3QpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGFuZCBkaXNwYXRjaCBpdCB1cC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7YW55fSAgICBkZXRhaWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRkaXNwYXRjaCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2gpIHtcbiAgICB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKHR5cGUsIGV2dClcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYW5kIGJyb2FkY2FzdCBpdCBkb3duLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGJyb2FkY2FzdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lci5cbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdIHx8IFtdXG4gIGhhbmRsZXJMaXN0LnB1c2goaGFuZGxlcilcbiAgZXZlbnRzW3R5cGVdID0gaGFuZGxlckxpc3RcblxuICAvLyBmaXhlZCBvbGQgdmVyc2lvbiBsaWZlY3ljbGUgZGVzaWduXG4gIGlmICh0eXBlID09PSAnaG9vazpyZWFkeScgJiYgdGhpcy5fcmVhZHkpIHtcbiAgICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lci5cbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9mZiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVdXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKCFoYW5kbGVyTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZXJMaXN0LiRyZW1vdmUoaGFuZGxlcilcbn1cblxuY29uc3QgTElGRV9DWUNMRV9UWVBFUyA9IFsnaW5pdCcsICdjcmVhdGVkJywgJ3JlYWR5JywgJ2Rlc3Ryb3llZCddXG5cbi8qKlxuICogSW5pdCBldmVudHM6XG4gKiAxLiBsaXN0ZW4gYGV2ZW50c2AgaW4gY29tcG9uZW50IG9wdGlvbnMgJiBgZXh0ZXJuYWxFdmVudHNgLlxuICogMi4gYmluZCBsaWZlY3ljbGUgaG9va3MuXG4gKiBAcGFyYW0gIHtWbX0gICAgIHZtXG4gKiBAcGFyYW0gIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZlbnRzICh2bSwgZXh0ZXJuYWxFdmVudHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzIHx8IHt9XG4gIGZvciAoY29uc3QgdHlwZTEgaW4gZXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB2bS4kb24odHlwZTIsIGV4dGVybmFsRXZlbnRzW3R5cGUyXSlcbiAgfVxuICBMSUZFX0NZQ0xFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB2bS4kb24oYGhvb2s6JHt0eXBlfWAsIG9wdGlvbnNbdHlwZV0pXG4gIH0pXG59XG5cbi8qKlxuICogQmluZCBldmVudCByZWxhdGVkIG1ldGhvZHMgdG8gVmlld01vZGVsIGluc3RhbmNlLlxuICogQHBhcmFtICB7Vm19IHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkV2ZW50cyAodm0pIHtcbiAgdm0uJGVtaXQgPSAkZW1pdFxuICB2bS4kZGlzcGF0Y2ggPSAkZGlzcGF0Y2hcbiAgdm0uJGJyb2FkY2FzdCA9ICRicm9hZGNhc3RcbiAgdm0uJG9uID0gJG9uXG4gIHZtLiRvZmYgPSAkb2ZmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZXZlbnRzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5leHBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCdcbmV4cG9ydCB7IGRlZmluZUZuLCByZWdpc3RlciB9IGZyb20gJy4vZGVmaW5lJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCBWbSBmcm9tICcuLi8uLi92bSdcbmltcG9ydCAqIGFzIGRvd25ncmFkZSBmcm9tICcuLi9kb3duZ3JhZGUnXG5pbXBvcnQge1xuICByZXF1aXJlQ3VzdG9tQ29tcG9uZW50XG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuaW1wb3J0IHtcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNXZWV4Q29tcG9uZW50LFxuICBpc05wbU1vZHVsZSxcbiAgcmVtb3ZlV2VleFByZWZpeCxcbiAgcmVtb3ZlSlNTdXJmaXhcbn0gZnJvbSAnLi4vLi4vdXRpbCdcblxuLyoqXG4gKiBib290c3RyYXAgYXBwIGZyb20gYSBjZXJ0YWluIGN1c3RvbSBjb21wb25lbnQgd2l0aCBjb25maWcgJiBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAgKGFwcCwgbmFtZSwgY29uZmlnLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGJvb3RzdHJhcCBmb3IgJHtuYW1lfWApXG5cbiAgLy8gMS4gdmFsaWRhdGUgY3VzdG9tIGNvbXBvbmVudCBuYW1lIGZpcnN0XG4gIGxldCBjbGVhbk5hbWVcbiAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgfVxuICBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgLy8gY2hlY2sgaWYgZGVmaW5lIGJ5IG9sZCAnZGVmaW5lJyBtZXRob2RcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXJlcXVpcmVDdXN0b21Db21wb25lbnQoYXBwLCBjbGVhbk5hbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJdCdzIG5vdCBhIGNvbXBvbmVudDogJHtuYW1lfWApXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYFdyb25nIGNvbXBvbmVudCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIC8vIDIuIHZhbGlkYXRlIGNvbmZpZ3VyYXRpb25cbiAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cbiAgLy8gMi4xIHRyYW5zZm9ybWVyIHZlcnNpb24gY2hlY2tcbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgICFzZW12ZXIuc2F0aXNmaWVzKGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24sXG4gICAgICBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cbiAgLy8gMi4yIGRvd25ncmFkZSB2ZXJzaW9uIGNoZWNrXG4gIGNvbnN0IGRvd25ncmFkZVJlc3VsdCA9IGRvd25ncmFkZS5jaGVjayhjb25maWcuZG93bmdyYWRlKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRvd25ncmFkZVJlc3VsdC5pc0Rvd25ncmFkZSkge1xuICAgIGFwcC5jYWxsVGFza3MoW3tcbiAgICAgIG1vZHVsZTogJ2luc3RhbmNlV3JhcCcsXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBhcmdzOiBbXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5lcnJvclR5cGUsXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5jb2RlLFxuICAgICAgICBkb3duZ3JhZGVSZXN1bHQuZXJyb3JNZXNzYWdlXG4gICAgICBdXG4gICAgfV0pXG4gICAgcmV0dXJuIG5ldyBFcnJvcihgRG93bmdyYWRlWyR7ZG93bmdyYWRlUmVzdWx0LmNvZGV9XTogJHtkb3duZ3JhZGVSZXN1bHQuZXJyb3JNZXNzYWdlfWApXG4gIH1cblxuICAvLyAzLiBjcmVhdGUgYSBuZXcgVm0gd2l0aCBjdXN0b20gY29tcG9uZW50IG5hbWUgYW5kIGRhdGFcbiAgYXBwLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwgeyBfYXBwOiBhcHAgfSwgbnVsbCwgZGF0YSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qc1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvc2VtdmVyLzUuMy4wL3NlbXZlci9zZW12ZXIuanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZXJzaW9uIHN0cmluZy5cbiAqIEBwYXJhbSAge1N0cmluZ30gVmVyc2lvbi4gaWU6IDEsIDEuMCwgMS4wLjBcbiAqIEByZXR1cm4ge1N0cmluZ30gVmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmVyc2lvbiAodikge1xuICBjb25zdCBpc1ZhbGlkID0gc2VtdmVyLnZhbGlkKHYpXG4gIGlmIChpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIHZcbiAgfVxuXG4gIHYgPSB0eXBlb2YgKHYpID09PSAnc3RyaW5nJyA/IHYgOiAnJ1xuICBjb25zdCBzcGxpdCA9IHYuc3BsaXQoJy4nKVxuICBsZXQgaSA9IDBcbiAgY29uc3QgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoaSA8IDMpIHtcbiAgICBjb25zdCBzID0gdHlwZW9mIChzcGxpdFtpXSkgPT09ICdzdHJpbmcnICYmIHNwbGl0W2ldID8gc3BsaXRbaV0gOiAnMCdcbiAgICByZXN1bHQucHVzaChzKVxuICAgIGkrK1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcuJylcbn1cblxuLyoqXG4gKiBHZXQgaW5mb3JtYXRpb25zIGZyb20gZGlmZmVyZW50IGVycm9yIGtleS4gTGlrZTpcbiAqIC0gY29kZVxuICogLSBlcnJvck1lc3NhZ2VcbiAqIC0gZXJyb3JUeXBlXG4gKiAtIGlzRG93bmdyYWRlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuICogQHBhcmFtICB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSAge3N0cmluZ30gY3JpdGVyaWFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiB0cnVlLFxuICAgIGVycm9yVHlwZTogMSxcbiAgICBjb2RlOiAxMDAwXG4gIH1cbiAgY29uc3QgZ2V0TXNnID0gZnVuY3Rpb24gKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICAgIHJldHVybiAnRG93bmdyYWRlWycgKyBrZXkgKyAnXSA6OiBkZXZpY2VJbmZvICdcbiAgICAgICsgdmFsICsgJyBtYXRjaGVkIGNyaXRlcmlhICcgKyBjcml0ZXJpYVxuICB9XG4gIGNvbnN0IF9rZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gIHJlc3VsdC5lcnJvck1lc3NhZ2UgPSBnZXRNc2coa2V5LCB2YWwsIGNyaXRlcmlhKVxuXG4gIGlmIChfa2V5LmluZGV4T2YoJ29zdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDFcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2FwcHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAyXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCd3ZWV4dmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDNcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwNFxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFdFRVggZnJhbWV3b3JrIGlucHV0KGRldmljZUluZm8pXG4gKiB7XG4gKiAgIHBsYXRmb3JtOiAnaU9TJyBvciAnYW5kcm9pZCdcbiAqICAgb3NWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBhcHBWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICB3ZWV4VmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgZERldmljZU1vZGVsOiAnTU9ERUxfTkFNRSdcbiAqIH1cbiAqXG4gKiBkb3duZ3JhZGUgY29uZmlnKGNvbmZpZylcbiAqIHtcbiAqICAgaW9zOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfSxcbiAqICAgYW5kcm9pZDoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH1cbiAqIH1cbiAqXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBkZXZpY2VJbmZvIFdlZXggU0RLIGZyYW1ld29yayBpbnB1dFxuICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgICAgIHVzZXIgaW5wdXRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICB7IGlzRG93bmdyYWRlOiB0cnVlL2ZhbHNlLCBlcnJvck1lc3NhZ2UuLi4gfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sgKGNvbmZpZywgZGV2aWNlSW5mbykge1xuICBkZXZpY2VJbmZvID0gZGV2aWNlSW5mbyB8fCBnbG9iYWwuV1hFbnZpcm9ubWVudFxuICBkZXZpY2VJbmZvID0gaXNQbGFpbk9iamVjdChkZXZpY2VJbmZvKSA/IGRldmljZUluZm8gOiB7fVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IGZhbHNlIC8vIGRlZmF1dGwgaXMgcGFzc1xuICB9XG5cbiAgaWYgKHR5cG9mKGNvbmZpZykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgY3VzdG9tRG93bmdyYWRlID0gY29uZmlnLmNhbGwodGhpcywgZGV2aWNlSW5mbywge1xuICAgICAgc2VtdmVyOiBzZW12ZXIsXG4gICAgICBub3JtYWxpemVWZXJzaW9uOiB0aGlzLm5vcm1hbGl6ZVZlcnNpb25cbiAgICB9KVxuXG4gICAgY3VzdG9tRG93bmdyYWRlID0gISFjdXN0b21Eb3duZ3JhZGVcblxuICAgIHJlc3VsdCA9IGN1c3RvbURvd25ncmFkZSA/IHRoaXMuZ2V0RXJyb3IoJ2N1c3RvbScsICcnLCAnY3VzdG9tIHBhcmFtcycpIDogcmVzdWx0XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cblxuICAgIGNvbnN0IHBsYXRmb3JtID0gZGV2aWNlSW5mby5wbGF0Zm9ybSB8fCAndW5rbm93J1xuICAgIGNvbnN0IGRQbGF0Zm9ybSA9IHBsYXRmb3JtLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBjT2JqID0gY29uZmlnW2RQbGF0Zm9ybV0gfHwge31cblxuICAgIGZvciAoY29uc3QgaSBpbiBkZXZpY2VJbmZvKSB7XG4gICAgICBjb25zdCBrZXkgPSBpXG4gICAgICBjb25zdCBrZXlMb3dlciA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCB2YWwgPSBkZXZpY2VJbmZvW2ldXG4gICAgICBjb25zdCBpc1ZlcnNpb24gPSBrZXlMb3dlci5pbmRleE9mKCd2ZXJzaW9uJykgPj0gMFxuICAgICAgY29uc3QgaXNEZXZpY2VNb2RlbCA9IGtleUxvd2VyLmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMFxuICAgICAgY29uc3QgY3JpdGVyaWEgPSBjT2JqW2ldXG5cbiAgICAgIGlmIChjcml0ZXJpYSAmJiBpc1ZlcnNpb24pIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihjcml0ZXJpYSlcbiAgICAgICAgY29uc3QgZCA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihkZXZpY2VJbmZvW2ldKVxuXG4gICAgICAgIGlmIChzZW12ZXIuc2F0aXNmaWVzKGQsIGMpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNEZXZpY2VNb2RlbCkge1xuICAgICAgICBjb25zdCBfY3JpdGVyaWEgPSB0eXBvZihjcml0ZXJpYSkgPT09ICdhcnJheScgPyBjcml0ZXJpYSA6IFtjcml0ZXJpYV1cbiAgICAgICAgaWYgKF9jcml0ZXJpYS5pbmRleE9mKHZhbCkgPj0gMCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qc1xuICoqLyIsImltcG9ydCB7XG4gIGlzV2VleENvbXBvbmVudCxcbiAgaXNXZWV4TW9kdWxlLFxuICBpc05vcm1hbE1vZHVsZSxcbiAgaXNOcG1Nb2R1bGUsXG4gIHJlbW92ZVdlZXhQcmVmaXgsXG4gIHJlbW92ZUpTU3VyZml4XG59IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICByZWdpc3RlckN1c3RvbUNvbXBvbmVudCxcbiAgcmVxdWlyZUN1c3RvbUNvbXBvbmVudCxcbiAgaW5pdE1vZHVsZXNcbn0gZnJvbSAnLi4vcmVnaXN0ZXInXG5cbi8qKlxuICogZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4gKiBvclxuICogZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4gKiBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4gKiBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRm4gPSBmdW5jdGlvbiAoYXBwLCBuYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICAvLyBhZGFwdCBhcmdzOlxuICAvLyAxLiBuYW1lLCBkZXBzW10sIGZhY3RvcnkoKVxuICAvLyAyLiBuYW1lLCBmYWN0b3J5KClcbiAgLy8gMy4gbmFtZSwgZGVmaW5pdGlvbnt9XG4gIGxldCBmYWN0b3J5LCBkZWZpbml0aW9uXG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1sxXVxuICB9XG4gIGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBhcmdzWzBdXG4gIH1cbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlZmluaXRpb25cbiAgICBkZWZpbml0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gcmVzb2x2ZSBkZWZpbml0aW9uIGZyb20gZmFjdG9yeVxuICBpZiAoZmFjdG9yeSkge1xuICAgIGNvbnN0IHIgPSAobmFtZSkgPT4ge1xuICAgICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAucmVxdWlyZU1vZHVsZShjbGVhbk5hbWUpXG4gICAgICB9XG4gICAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkgfHwgaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgICAgcmV0dXJuIGFwcC5jb21tb25Nb2R1bGVzW2NsZWFuTmFtZV1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbSA9IHsgZXhwb3J0czoge319XG4gICAgZmFjdG9yeShyLCBtLmV4cG9ydHMsIG0pXG4gICAgZGVmaW5pdGlvbiA9IG0uZXhwb3J0c1xuICB9XG5cbiAgLy8gYXBwbHkgZGVmaW5pdGlvblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lLCBkZWZpbml0aW9uKVxuICB9XG4gIGVsc2UgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICBpbml0TW9kdWxlcyh7IFtjbGVhbk5hbWVdOiBkZWZpbml0aW9uIH0pXG4gIH1cbiAgZWxzZSBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIGFwcC5jb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIGlmIChkZWZpbml0aW9uLnRlbXBsYXRlIHx8XG4gICAgICAgIGRlZmluaXRpb24uc3R5bGUgfHxcbiAgICAgICAgZGVmaW5pdGlvbi5tZXRob2RzKSB7XG4gICAgICAvLyBkb3duZ3JhZGUgdG8gb2xkIGRlZmluZSBtZXRob2QgKGRlZmluZSgnY29tcG9uZW50TmFtZScsIGZhY3RvcnkpKVxuICAgICAgLy8gdGhlIGV4cG9ydHMgY29udGFpbiBvbmUga2V5IG9mIHRlbXBsYXRlLCBzdHlsZSBvciBtZXRob2RzXG4gICAgICAvLyBidXQgaXQgaGFzIHJpc2shISFcbiAgICAgIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lLCBkZWZpbml0aW9uKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFwcC5jb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChhcHAsIHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgdHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2RlZmluZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gcmVmcmVzaFxuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbmZpZydcblxuLyoqXG4gKiBSZWZyZXNoIGFuIGFwcCB3aXRoIGRhdGEgdG8gaXRzIHJvb3QgY29tcG9uZW50IG9wdGlvbnMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7YW55fSAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoIChhcHAsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gUmVmcmVzaCB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZVske2FwcC5pZH1dYClcbiAgY29uc3Qgdm0gPSBhcHAudm1cbiAgaWYgKHZtICYmIGRhdGEpIHtcbiAgICAvLyBhcHAuZG9jLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHZtLnJlZnJlc2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bS5yZWZyZXNoRGF0YShkYXRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4dGVuZCh2bSwgZGF0YSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci5yZWZyZXNoRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZGF0YSBcIiR7ZGF0YX1cImApXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBhcHAuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSAoYXBwKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIERlc3RvcnkgYW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG5cbiAgaWYgKGFwcC52bSkge1xuICAgIGRlc3Ryb3lWbShhcHAudm0pXG4gIH1cblxuICBhcHAuaWQgPSAnJ1xuICBhcHAub3B0aW9ucyA9IG51bGxcbiAgYXBwLmJsb2NrcyA9IG51bGxcbiAgYXBwLnZtID0gbnVsbFxuICBhcHAuZG9jLmRlc3Ryb3koKVxuICBhcHAuZG9jID0gbnVsbFxuICBhcHAuY3VzdG9tQ29tcG9uZW50TWFwID0gbnVsbFxuICBhcHAuY29tbW9uTW9kdWxlcyA9IG51bGxcbiAgYXBwLmNhbGxiYWNrcyA9IG51bGxcbn1cblxuLyoqXG4gKiBEZXN0cm95IGFuIFZtLlxuICogQHBhcmFtIHtvYmplY3R9IHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Vm0gKHZtKSB7XG4gIGRlbGV0ZSB2bS5fYXBwXG4gIGRlbGV0ZSB2bS5fY29tcHV0ZWRcbiAgZGVsZXRlIHZtLl9jc3NcbiAgZGVsZXRlIHZtLl9kYXRhXG4gIGRlbGV0ZSB2bS5faWRzXG4gIGRlbGV0ZSB2bS5fbWV0aG9kc1xuICBkZWxldGUgdm0uX29wdGlvbnNcbiAgZGVsZXRlIHZtLl9wYXJlbnRcbiAgZGVsZXRlIHZtLl9wYXJlbnRFbFxuICBkZWxldGUgdm0uX3Jvb3RFbFxuXG4gIC8vIHJlbW92ZSBhbGwgd2F0Y2hlcnNcbiAgaWYgKHZtLl93YXRjaGVycykge1xuICAgIGxldCB3YXRjaGVyQ291bnQgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoXG4gICAgd2hpbGUgKHdhdGNoZXJDb3VudC0tKSB7XG4gICAgICB2bS5fd2F0Y2hlcnNbd2F0Y2hlckNvdW50XS50ZWFyZG93bigpXG4gICAgfVxuICAgIGRlbGV0ZSB2bS5fd2F0Y2hlcnNcbiAgfVxuXG4gIC8vIGRlc3Ryb3kgY2hpbGQgdm1zIHJlY3Vyc2l2ZWx5XG4gIGlmICh2bS5fY2hpbGRyZW5WbXMpIHtcbiAgICBsZXQgdm1Db3VudCA9IHZtLl9jaGlsZHJlblZtcy5sZW5ndGhcbiAgICB3aGlsZSAodm1Db3VudC0tKSB7XG4gICAgICBkZXN0cm95Vm0odm0uX2NoaWxkcmVuVm1zW3ZtQ291bnRdKVxuICAgIH1cbiAgICBkZWxldGUgdm0uX2NoaWxkcmVuVm1zXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImRlc3Ryb3llZFwiIGxpZmVjeWNsZSBpbiBWbSgke3ZtLl90eXBlfSlgKVxuICB2bS4kZW1pdCgnaG9vazpkZXN0cm95ZWQnKVxuXG4gIGRlbGV0ZSB2bS5fdHlwZVxuICBkZWxldGUgdm0uX3ZtRXZlbnRzXG59XG5cbi8qKlxuICogR2V0IGEgSlNPTiBvYmplY3QgdG8gZGVzY3JpYmUgdGhlIGRvY3VtZW50IGJvZHkuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdEVsZW1lbnQgKGFwcCkge1xuICBjb25zdCBkb2MgPSBhcHAuZG9jIHx8IHt9XG4gIGNvbnN0IGJvZHkgPSBkb2MuYm9keSB8fCB7fVxuICByZXR1cm4gYm9keS50b0pTT04gPyBib2R5LnRvSlNPTigpIDoge31cbn1cblxuLyoqXG4gKiBGaXJlIGFuIGV2ZW50IGZyb20gcmVuZGVyZXIuIFRoZSBldmVudCBoYXMgdHlwZSwgYW4gZXZlbnQgb2JqZWN0IGFuZCBhblxuICogZWxlbWVudCByZWYuIElmIHRoZSBldmVudCBjb21lcyB3aXRoIHNvbWUgdmlydHVhbC1ET00gY2hhbmdlcywgaXQgc2hvdWxkXG4gKiBoYXZlIG9uZSBtb3JlIHBhcmFtZXRlciB0byBkZXNjcmliZSB0aGUgY2hhbmdlcy5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHJlZlxuICogQHBhcmFtICB7dHlwZX0gICB0eXBlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVcbiAqIEBwYXJhbSAge29iamVjdH0gZG9tQ2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50IChhcHAsIHJlZiwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBGaXJlIGEgXCIke3R5cGV9XCIgZXZlbnQgb24gYW4gZWxlbWVudCgke3JlZn0pIGluIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgcmVmLnNvbWUoKHJlZikgPT4ge1xuICAgICAgcmV0dXJuIGFwcC5maXJlRXZlbnQocmVmLCB0eXBlLCBlKSAhPT0gZmFsc2VcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGVsID0gYXBwLmRvYy5nZXRSZWYocmVmKVxuICBpZiAoZWwpIHtcbiAgICAvLyBhcHAuZG9jLmNsb3NlKClcbiAgICBjb25zdCByZXN1bHQgPSBhcHAuZG9jLmZpcmVFdmVudChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcylcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgLy8gYXBwLmRvYy5vcGVuKClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBlbGVtZW50IHJlZmVyZW5jZSBcIiR7cmVmfVwiYClcbn1cblxuLyoqXG4gKiBNYWtlIGEgY2FsbGJhY2sgZm9yIGEgY2VydGFpbiBhcHAuXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgYXBwXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgY2FsbGJhY2tJZFxuICogQHBhcmFtICB7YW55fSAgICAgIGRhdGFcbiAqIEBwYXJhbSAge2Jvb2xlYW59ICBpZktlZXBBbGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2sgKGFwcCwgY2FsbGJhY2tJZCwgZGF0YSwgaWZLZWVwQWxpdmUpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gSW52b2tlIGEgY2FsbGJhY2soJHtjYWxsYmFja0lkfSkgd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG4gIGNvbnN0IGNhbGxiYWNrID0gYXBwLmNhbGxiYWNrc1tjYWxsYmFja0lkXVxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgY2FsbGJhY2soZGF0YSlcbiAgICBpZiAodHlwZW9mIGlmS2VlcEFsaXZlID09PSAndW5kZWZpbmVkJyB8fCBpZktlZXBBbGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGFwcC5jYWxsYmFja3NbY2FsbGJhY2tJZF0gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIC8vIGFwcC5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBjYWxsYmFjayBpZCBcIiR7Y2FsbGJhY2tJZH1cImApXG59XG5cbi8qKlxuICogQ29sbGVjdCBhbGwgdmlydHVhbC1ET00gbXV0YXRpb25zIHRvZ2V0aGVyIGFuZCBzZW5kIHRoZW0gdG8gcmVuZGVyZXIuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aW9ucyAoYXBwKSB7XG4gIGFwcC5kaWZmZXIuZmx1c2goKVxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGlmIChhcHAuZG9jICYmIGFwcC5kb2MubGlzdGVuZXIgJiYgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVzLmxlbmd0aCkge1xuICAgIHRhc2tzLnB1c2goLi4uYXBwLmRvYy5saXN0ZW5lci51cGRhdGVzKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlcyA9IFtdXG4gIH1cbiAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsVGFza3MoYXBwLCB0YXNrcylcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgYWxsIHRhc2tzIGZyb20gYW4gYXBwIHRvIHJlbmRlcmVyIChuYXRpdmUpLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge2FycmF5fSAgdGFza3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxUYXNrcyAoYXBwLCB0YXNrcykge1xuICBpZiAodHlwb2YodGFza3MpICE9PSAnYXJyYXknKSB7XG4gICAgdGFza3MgPSBbdGFza3NdXG4gIH1cblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5hcmdzID0gdGFzay5hcmdzLm1hcChhcmcgPT4gbm9ybWFsaXplKGFyZywgYXBwKSlcbiAgfSlcblxuICByZXR1cm4gcmVuZGVyZXIuc2VuZFRhc2tzKGFwcC5pZCwgdGFza3MsICctMScpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmFsdWUuIFNwZWNpYWxseSwgaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZW4gZ2VuZXJhdGUgYSBmdW5jdGlvbiBpZFxuICogYW5kIHNhdmUgaXQgdG8gYGFwcC5jYWxsYmFja3NgLCBhdCBsYXN0IHJldHVybiB0aGUgZnVuY3Rpb24gaWQuXG4gKiBAcGFyYW0gIHthbnl9ICAgICAgICB2XG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICBhcHBcbiAqIEByZXR1cm4ge3ByaW1pdGl2ZX1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplICh2LCBhcHApIHtcbiAgY29uc3QgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdudWxsJzpcbiAgICAgIHJldHVybiAnJ1xuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICByZXR1cm4gdi50b1N0cmluZygpXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gdi50b0lTT1N0cmluZygpXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiByZW5kZXJlci5FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2LnJlZlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBhcHAuY2FsbGJhY2tzWysrYXBwLnVpZF0gPSB2XG4gICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvbWlzYy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogV2VleCBBcHAgY29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IERpZmZlciBmcm9tICcuL2RpZmZlcidcbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi9jb25maWcnXG5cbi8qKlxuICogQXBwIGNvbnN0cnVjdG9yIGZvciBXZWV4IGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwIChpZCwgb3B0aW9ucykge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB0aGlzLnZtID0gbnVsbFxuICB0aGlzLmN1c3RvbUNvbXBvbmVudE1hcCA9IHt9XG4gIHRoaXMuY29tbW9uTW9kdWxlcyA9IHt9XG4gIHRoaXMuY2FsbGJhY2tzID0ge31cbiAgdGhpcy5kb2MgPSBuZXcgcmVuZGVyZXIuRG9jdW1lbnQoXG4gICAgaWQsXG4gICAgdGhpcy5vcHRpb25zLmJ1bmRsZVVybCxcbiAgICBudWxsLFxuICAgIHJlbmRlcmVyLkxpc3RlbmVyXG4gIClcbiAgdGhpcy5kaWZmZXIgPSBuZXcgRGlmZmVyKGlkKVxuICB0aGlzLnVpZCA9IDBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5zdGFuY2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmZXIge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm1hcCA9IFtdXG4gICAgdGhpcy5ob29rcyA9IFtdXG4gIH1cbiAgaXNFbXB0eSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmxlbmd0aCA9PT0gMFxuICB9XG4gIGFwcGVuZCAodHlwZSwgZGVwdGgsIHJlZiwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5oYXNUaW1lcikge1xuICAgICAgdGhpcy5oYXNUaW1lciA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc1RpbWVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5mbHVzaCh0cnVlKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBcbiAgICBpZiAoIW1hcFtkZXB0aF0pIHtcbiAgICAgIG1hcFtkZXB0aF0gPSB7fVxuICAgIH1cbiAgICBjb25zdCBncm91cCA9IG1hcFtkZXB0aF1cbiAgICBpZiAoIWdyb3VwW3R5cGVdKSB7XG4gICAgICBncm91cFt0eXBlXSA9IHt9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGlmICghZ3JvdXBbdHlwZV1bcmVmXSkge1xuICAgICAgICBncm91cFt0eXBlXVtyZWZdID0gW11cbiAgICAgIH1cbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0ucHVzaChoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBoYW5kbGVyXG4gICAgfVxuICB9XG4gIGZsdXNoIChpc1RpbWVvdXQpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcC5zbGljZSgpXG4gICAgdGhpcy5tYXAubGVuZ3RoID0gMFxuICAgIG1hcC5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdyZXBlYXQnKVxuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdzaG93bicpXG4gICAgICBjYWxsVHlwZUxpc3QoZ3JvdXAsICdlbGVtZW50JylcbiAgICB9KVxuXG4gICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLnNsaWNlKClcbiAgICB0aGlzLmhvb2tzLmxlbmd0aCA9IDBcbiAgICBob29rcy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmZsdXNoKClcbiAgICB9XG4gIH1cbiAgdGhlbiAoZm4pIHtcbiAgICB0aGlzLmhvb2tzLnB1c2goZm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVNYXAgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIG1hcFtyZWZdKClcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZUxpc3QgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIGNvbnN0IGxpc3QgPSBtYXBbcmVmXVxuICAgIGxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4geyBoYW5kbGVyKCkgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9kaWZmZXIuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9tYXAuanNcbiAqKi8iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7XG4gIHJlZnJlc2gsXG4gIGRlc3Ryb3lcbn0gZnJvbSAnLi4vYXBwL2N0cmwnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgcmVzZXRUYXJnZXQgfSBmcm9tICcuLi9jb3JlL2RlcCdcblxuLyoqXG4gKiBJbml0IGNvbmZpZyBpbmZvcm1hdGlvbnMgZm9yIFdlZXggZnJhbWV3b3JrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNmZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY2ZnKSB7XG4gIGNvbmZpZy5Eb2N1bWVudCA9IGNmZy5Eb2N1bWVudFxuICBjb25maWcuRWxlbWVudCA9IGNmZy5FbGVtZW50XG4gIGNvbmZpZy5Db21tZW50ID0gY2ZnLkNvbW1lbnRcbiAgY29uZmlnLnNlbmRUYXNrcyA9IGNmZy5zZW5kVGFza3NcbiAgY29uZmlnLkxpc3RlbmVyID0gY2ZnLkxpc3RlbmVyXG59XG5cbi8qKlxuICogUmVmcmVzaCBhIFdlZXggaW5zdGFuY2Ugd2l0aCBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEluc3RhbmNlIChpZCwgZGF0YSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IHJlZnJlc2goaW5zdGFuY2UsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIERlc3Ryb3kgYSBXZWV4IGluc3RhbmNlLlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpZCkge1xuICByZXNldFRhcmdldCgpXG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgZGVzdHJveShpbnN0YW5jZSlcbiAgZGVsZXRlIGluc3RhbmNlTWFwW2lkXVxuICByZXR1cm4gaW5zdGFuY2VNYXBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qc1xuICoqLyIsImltcG9ydCBWbSBmcm9tICcuLi92bSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgaW5pdE1vZHVsZXMsXG4gIGluaXRNZXRob2RzXG59IGZyb20gJy4uL2FwcC9yZWdpc3RlcidcblxuY29uc3Qge1xuICBuYXRpdmVDb21wb25lbnRNYXBcbn0gPSBjb25maWdcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBvZiBlYWNoIG5hdGl2ZSBjb21wb25lbnQuXG4gKiBAcGFyYW0gIHthcnJheX0gY29tcG9uZW50cyBhcnJheSBvZiBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudHMgKGNvbXBvbmVudHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tcG9uZW50cykpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gcmVnaXN0ZXIgKG5hbWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG5hbWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWUudHlwZV0gPSBuYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggbW9kdWxlLlxuICogQHBhcmFtICB7b2JqZWN0fSBtb2R1bGVzIGEgb2JqZWN0IG9mIG1vZHVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyAobW9kdWxlcykge1xuICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdvYmplY3QnKSB7XG4gICAgaW5pdE1vZHVsZXMobW9kdWxlcylcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggYXBpLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcGlzIGEgb2JqZWN0IG9mIGFwaXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAobWV0aG9kcykge1xuICBpZiAodHlwZW9mIG1ldGhvZHMgPT09ICdvYmplY3QnKSB7XG4gICAgaW5pdE1ldGhvZHMoVm0sIG1ldGhvZHMpXG4gIH1cbn1cblxuLy8gQHRvZG86IEhhY2sgZm9yIHRoaXMgZnJhbWV3b3JrIG9ubHkuIFdpbGwgYmUgcmUtZGVzaWduZWQgb3IgcmVtb3ZlZCBsYXRlci5cbmdsb2JhbC5yZWdpc3Rlck1ldGhvZHMgPSByZWdpc3Rlck1ldGhvZHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHtcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFja1xufSBmcm9tICcuLi9hcHAvY3RybCdcblxuY29uc3QganNIYW5kbGVycyA9IHtcbiAgZmlyZUV2ZW50OiAoaWQsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gZmlyZUV2ZW50KGluc3RhbmNlTWFwW2lkXSwgLi4uYXJncylcbiAgfSxcbiAgY2FsbGJhY2s6IChpZCwgLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBjYWxsYmFjayhpbnN0YW5jZU1hcFtpZF0sIC4uLmFyZ3MpXG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHthcnJheX0gdGFza3MgbGlzdCB3aXRoIGBtZXRob2RgIGFuZCBgYXJnc2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUYXNrcyAoaWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmIChpbnN0YW5jZSAmJiBBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBqc0hhbmRsZXJzW3Rhc2subWV0aG9kXVxuICAgICAgY29uc3QgYXJncyA9IFsuLi50YXNrLmFyZ3NdXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGlkKVxuICAgICAgICByZXN1bHRzLnB1c2goaGFuZGxlciguLi5hcmdzKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanNcbiAqKi8iLCJpbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHtcbiAgZ2V0Um9vdEVsZW1lbnRcbn0gZnJvbSAnLi4vYXBwL2N0cmwnXG5cbi8qKlxuICogR2V0IGEgd2hvbGUgZWxlbWVudCB0cmVlIG9mIGFuIGluc3RhbmNlIGZvciBkZWJ1Z2dpbmcuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEgdmlydHVhbCBkb20gdHJlZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdCAoaWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBnZXRSb290RWxlbWVudChpbnN0YW5jZSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21pc2MuanNcbiAqKi8iLCJsZXQgZnJhbWV3b3Jrc1xuXG5jb25zdCB2ZXJzaW9uUmVnRXhwID0gL15cXHMqXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbi8qKlxuICogRGV0ZWN0IGEgSlMgQnVuZGxlIGNvZGUgYW5kIG1ha2Ugc3VyZSB3aGljaCBmcmFtZXdvcmsgaXQncyBiYXNlZCB0by4gRWFjaCBKU1xuICogQnVuZGxlIHNob3VsZCBtYWtlIHN1cmUgdGhhdCBpdCBzdGFydHMgd2l0aCBhIGxpbmUgb2YgSlNPTiBjb21tZW50IGFuZCBpc1xuICogbW9yZSB0aGF0IG9uZSBsaW5lLlxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuLyoqXG4gKiBDaGVjayB3aGljaCBmcmFtZXdvcmsgYSBjZXJ0YWluIEpTIEJ1bmRsZSBjb2RlIGJhc2VkIHRvLiBBbmQgY3JlYXRlIGluc3RhbmNlXG4gKiBieSB0aGlzIGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgY29uZmlnLCBkYXRhKSB7XG4gIGxldCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5mbykge1xuICAgIGluZm8gPSBjaGVja1ZlcnNpb24oY29kZSkgfHwge31cbiAgICBpZiAoIWZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICBpbmZvLmZyYW1ld29yayA9ICdXZWV4J1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbmZvXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9XG4gICAgY29uZmlnLmJ1bmRsZVZlcnNpb24gPSBpbmZvLnZlcnNpb25cbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjcmVhdGUgYW4gJHtpbmZvLmZyYW1ld29ya31AJHtjb25maWcuYnVuZGxlVmVyc2lvbn0gaW5zdGFuY2UgZnJvbSAke2NvbmZpZy5idW5kbGVWZXJzaW9ufWApXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIG1ldGhvZHMgd2hpY2ggaW5pdCBlYWNoIGZyYW1ld29ya3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cbi8qKlxuICogQWRhcHQgc29tZSBsZWdhY3kgbWV0aG9kKHMpIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLiBUaGVzZVxuICogbWV0aG9kcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBsYXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlTWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxuICB9XG5cbiAgLy8gQHRvZG86IFRoZSBtZXRob2QgYHJlZ2lzdGVyTWV0aG9kc2Agd2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgOyBbJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvaW5pdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4XCIsXG5cdFwidmVyc2lvblwiOiBcIjAuNC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJBIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgTW9iaWxlIGNyb3NzLXBsYXRmb3JtIFVJXCIsXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdEBnaXRodWIuY29tOmFsaWJhYmEvd2VleC5naXRcIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cDovL2FsaWJhYmEuZ2l0aHViLmlvL3dlZXgvXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS93ZWV4L2lzc3Vlc1wiXG5cdH0sXG5cdFwicHJpdmF0ZVwiOiB0cnVlLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcIndlZXhcIixcblx0XHRcImh5YnJpZFwiLFxuXHRcdFwid2ViY29tcG9uZW50XCIsXG5cdFx0XCJhcHBmcmFtZXdvcmtcIixcblx0XHRcIm12dm1cIixcblx0XHRcImphdmFzY3JpcHRcIixcblx0XHRcIndlYmtpdFwiLFxuXHRcdFwidjhcIixcblx0XHRcImpzY29yZVwiLFxuXHRcdFwiaHRtbDVcIixcblx0XHRcImFuZHJvaWRcIixcblx0XHRcImlvc1wiLFxuXHRcdFwieXVub3NcIlxuXHRdLFxuXHRcImVuZ2luZXNcIjoge1xuXHRcdFwibm9kZVwiOiBcIj49NFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJwb3N0aW5zdGFsbFwiOiBcImJhc2ggLi9iaW4vaW5zdGFsbC1ob29rcy5zaFwiLFxuXHRcdFwiYnVpbGQ6Y29uZmlnXCI6IFwibm9kZSBidWlsZC9jb25maWcuZnJhbWV3b3Jrcy5qc1wiLFxuXHRcdFwiYnVpbGQ6YnJvd3NlclwiOiBcInd3cCAmJiB3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suYnJvd3Nlci5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOmNvbW1vblwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5jb21tb24uY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDp0ZXN0XCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJkaXN0OmJyb3dzZXJcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbnBtIHJ1biBidWlsZDpjb21tb24gJiYgYmFzaCAuL2Jpbi9kaXN0LWJyb3dzZXIuc2hcIixcblx0XHRcImRpc3RcIjogXCJucG0gcnVuIGRpc3Q6YnJvd3NlclwiLFxuXHRcdFwiZGV2OmJyb3dzZXJcIjogXCJ3d3AgJiYgd2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suYnJvd3Nlci5jb25maWcuanNcIixcblx0XHRcImRldjpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5uYXRpdmUuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5leGFtcGxlcy5jb25maWcuanNcIixcblx0XHRcImRldjp0ZXN0XCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2sudGVzdC5jb25maWcuanNcIixcblx0XHRcImJ1aWxkXCI6IFwibnBtIHJ1biBidWlsZDpuYXRpdmUgJiYgbnBtIHJ1biBidWlsZDpicm93c2VyICYmIG5wbSBydW4gYnVpbGQ6ZXhhbXBsZXMgJiYgbnBtIHJ1biBidWlsZDp0ZXN0XCIsXG5cdFx0XCJsaW50XCI6IFwiZXNsaW50IGh0bWw1XCIsXG5cdFx0XCJ0ZXN0OnVuaXRcIjogXCJtb2NoYSAtLWNvbXBpbGVycyBqczpiYWJlbC1jb3JlL3JlZ2lzdGVyIGh0bWw1L3Rlc3QvdW5pdC8qLyouanMgaHRtbDUvdGVzdC91bml0LyovKi8qLmpzXCIsXG5cdFx0XCJ0ZXN0OmNvdmVyXCI6IFwiYmFiZWwtbm9kZSBub2RlX21vZHVsZXMvaXNwYXJ0YS9iaW4vaXNwYXJ0YSBjb3ZlciAtLXJlcG9ydCB0ZXh0IG5vZGVfbW9kdWxlcy9tb2NoYS9iaW4vX21vY2hhIC0tIC0tcmVwb3J0ZXIgZG90IGh0bWw1L3Rlc3QvdW5pdC8qLyouanMgaHRtbDUvdGVzdC91bml0LyovKi8qLmpzXCIsXG5cdFx0XCJ0ZXN0OmUyZVwiOiBcIm5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBub2RlIGh0bWw1L3Rlc3QvZTJlL3J1bm5lci5qc1wiLFxuXHRcdFwidGVzdFwiOiBcIm5wbSBydW4gYnVpbGQ6Y29uZmlnICYmIG5wbSBydW4gbGludCAmJiBucG0gcnVuIHRlc3Q6Y292ZXIgJiYgbnBtIHJ1biB0ZXN0OmUyZVwiLFxuXHRcdFwic2VydmVcIjogXCJzZXJ2ZSAuLyAtcCAxMjU4MFwiLFxuXHRcdFwiY2xlYW46ZXhhbXBsZXNcIjogXCJlY2hvIFxcXCJcXFxcMDMzWzM2OzFtW0NsZWFuXVxcXFwwMzNbMG0gXFxcXDAzM1szM21leGFtcGxlc1xcXFwwMzNbMG1cXFwiICYmIHJtIC12cmYgZXhhbXBsZXMvYnVpbGQvKlwiLFxuXHRcdFwiY2xlYW46dGVzdFwiOiBcImVjaG8gXFxcIlxcXFwwMzNbMzY7MW1bQ2xlYW5dXFxcXDAzM1swbSBcXFxcMDMzWzMzbXRlc3RcXFxcMDMzWzBtXFxcIiAmJiBybSAtdnJmIHRlc3QvYnVpbGQvKlwiLFxuXHRcdFwiY2xlYW5cIjogXCJucG0gcnVuIGNsZWFuOmV4YW1wbGVzICYmIG5wbSBydW4gY2xlYW46dGVzdFwiLFxuXHRcdFwiY29weTpqc1wiOiBcImNwIC12ZiAuL2Rpc3QvbmF0aXZlLmpzIC4vYW5kcm9pZC9zZGsvYXNzZXRzL21haW4uanNcIixcblx0XHRcImNvcHk6ZXhhbXBsZXNcIjogXCJybSAtcmYgLi9hbmRyb2lkL3BsYXlncm91bmQvYXBwL3NyYy9tYWluL2Fzc2V0cy8qICYmIGNwIC12cmYgLi9leGFtcGxlcy9idWlsZC8qIC4vYW5kcm9pZC9wbGF5Z3JvdW5kL2FwcC9zcmMvbWFpbi9hc3NldHMvXCIsXG5cdFx0XCJjb3B5XCI6IFwibnBtIHJ1biBjb3B5OmpzICYmIG5wbSBydW4gY29weTpleGFtcGxlc1wiXG5cdH0sXG5cdFwic3VidmVyc2lvblwiOiB7XG5cdFx0XCJicm93c2VyXCI6IFwiMC40LjBcIixcblx0XHRcImZyYW1ld29ya1wiOiBcIjAuMTYuMTdcIixcblx0XHRcInRyYW5zZm9ybWVyXCI6IFwiPj0wLjEuNSA8MC40XCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYW5pbWF0aW9uanNcIjogXCJeMC4xLjVcIixcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcImN1YmljYmV6aWVyXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJlbnZkXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJodHRwdXJsXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJsYXp5aW1nXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJtb2RhbHNcIjogXCJeMC4xLjZcIixcblx0XHRcInNjcm9sbC10b1wiOiBcIjAuMC4yXCIsXG5cdFx0XCJzZW12ZXJcIjogXCJeNS4xLjBcIixcblx0XHRcIndlZXgtY29tcG9uZW50c1wiOiBcIl4wLjIuMFwiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNsaVwiOiBcIn42LjQuNVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjYuMi40XCIsXG5cdFx0XCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWVcIjogXCJeNi4xNS4wXCIsXG5cdFx0XCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuOS4wXCIsXG5cdFx0XCJiYWJlbC1ydW50aW1lXCI6IFwiXjYuMTEuNlwiLFxuXHRcdFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuXHRcdFwiY2hyb21lZHJpdmVyXCI6IFwiXjIuMjEuMlwiLFxuXHRcdFwiY3Jvc3Mtc3Bhd25cIjogXCJeNC4wLjBcIixcblx0XHRcImNzcy1sb2FkZXJcIjogXCJeMC4yMy4xXCIsXG5cdFx0XCJlc2xpbnRcIjogXCJeMi4xMS4xXCIsXG5cdFx0XCJodHRwLXNlcnZlclwiOiBcIl4wLjkuMFwiLFxuXHRcdFwiaXNwYXJ0YVwiOiBcIl40LjAuMFwiLFxuXHRcdFwiaXN0YW5idWxcIjogXCJeMC40LjNcIixcblx0XHRcImpzb24tbG9hZGVyXCI6IFwiXjAuNS40XCIsXG5cdFx0XCJtb2NoYVwiOiBcIl4yLjUuM1wiLFxuXHRcdFwibmlnaHR3YXRjaFwiOiBcIl4wLjkuNFwiLFxuXHRcdFwicGhhbnRvbWpzLXByZWJ1aWx0XCI6IFwiXjIuMS43XCIsXG5cdFx0XCJzZWxlbml1bS1zZXJ2ZXJcIjogXCIyLjUzLjFcIixcblx0XHRcInNlcnZlXCI6IFwiXjEuNC4wXCIsXG5cdFx0XCJzaW5vblwiOiBcIl4xLjE3LjRcIixcblx0XHRcInNpbm9uLWNoYWlcIjogXCJeMi44LjBcIixcblx0XHRcInN0eWxlLWxvYWRlclwiOiBcIl4wLjEzLjFcIixcblx0XHRcInVnbGlmeS1qc1wiOiBcIl4yLjYuNFwiLFxuXHRcdFwid2VicGFja1wiOiBcIl4xLjEzLjFcIixcblx0XHRcIndlZXgtbG9hZGVyXCI6IFwiXjAuMy4xXCIsXG5cdFx0XCJ3d3BcIjogXCJeMC4yLjBcIlxuXHR9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWNrYWdlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBjb21tb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSAkdm0gaW5zdGVhZFxuICogZmluZCB0aGUgdm0gYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkIChpZCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBWbSMkdm0gaW5zdGVhZCcpXG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIGVsZW1lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRlbCAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5lbFxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgdm0gb2YgdGhlIGN1c3RvbSBjb21wb25lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdm0gKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIEZpcmUgd2hlbiBkaWZmZXIgcmVuZGVyaW5nIGZpbmlzaGVkXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkcmVuZGVyVGhlbiAoZm4pIHtcbiAgY29uc3QgYXBwID0gdGhpcy5fYXBwXG4gIGNvbnN0IGRpZmZlciA9IGFwcC5kaWZmZXJcbiAgcmV0dXJuIGRpZmZlci50aGVuKCgpID0+IHtcbiAgICBmbigpXG4gIH0pXG59XG5cbi8qKlxuICogc2Nyb2xsIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkIGludG8gdmlldyxcbiAqIG1vcmVvdmVyIHNwZWNpZnkgYSBudW1iZXIgb2Ygb2Zmc2V0IG9wdGlvbmFsbHlcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge251bWJlcn0gb2Zmc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2Nyb2xsVG8gKGlkLCBvZmZzZXQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2Nyb2xsVG8gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9kb21cXCcpJyArXG4gICAgICAgICAgJy5zY3JvbGxUbyhlbCwgb3B0aW9ucylcIiBpbnN0ZWFkJylcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsKSB7XG4gICAgY29uc3QgZG9tID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2RvbScpXG4gICAgZG9tLnNjcm9sbFRvRWxlbWVudChlbC5yZWYsIHsgb2Zmc2V0OiBvZmZzZXQgfSlcbiAgfVxufVxuXG4vKipcbiAqIHBlcmZvcm0gdHJhbnNpdGlvbiBhbmltYXRpb24gb24gYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZFxuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLnN0eWxlc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuZHVyYXRpb24obXMpXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMudGltaW5nRnVuY3Rpb25dXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMuZGVsYXk9MChtcyldXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR0cmFuc2l0aW9uIChpZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5zdHlsZXMpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcbiAgICBhbmltYXRpb24udHJhbnNpdGlvbihlbC5yZWYsIG9wdGlvbnMsICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLl9zZXRTdHlsZShlbCwgb3B0aW9ucy5zdHlsZXMpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBnZXQgc29tZSBjb25maWdcbiAqIEByZXR1cm4ge29iamVjdH0gc29tZSBjb25maWcgZm9yIGFwcCBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJ1bmRsZVVybFxuICogQHByb3BlcnR5IHtib29sZWFufSBkZWJ1Z1xuICogQHByb3BlcnR5IHtvYmplY3R9IGVudlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi53ZWV4VmVyc2lvbihleC4gMS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcE5hbWUoZXguIFRCL1RNKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBWZXJzaW9uKGV4LiA1LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYucGxhdGZvcm0oZXguIGlPUy9BbmRyb2lkKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5vc1ZlcnNpb24oZXguIDcuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5kZXZpY2VNb2RlbCAqKm5hdGl2ZSBvbmx5KipcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuW2RldmljZVdpZHRoPTc1MF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuZGV2aWNlSGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0Q29uZmlnIChjYWxsYmFjaykge1xuICBjb25zdCBjb25maWcgPSBleHRlbmQoe1xuICAgIGVudjogZ2xvYmFsLldYRW52aXJvbm1lbnQgfHwge31cbiAgfSwgdGhpcy5fYXBwLm9wdGlvbnMpXG4gIGlmICh0eXBvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIHRoZSBjYWxsYmFjayBvZiBWbSMkZ2V0Q29uZmlnKGNhbGxiYWNrKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd0aGlzIGFwaSBub3cgY2FuIGRpcmVjdGx5IFJFVFVSTiBjb25maWcgaW5mby4nKVxuICAgIGNhbGxiYWNrKGNvbmZpZylcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHJlcXVlc3QgbmV0d29yayB2aWEgaHR0cCBwcm90b2NvbFxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZEh0dHAgKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2VuZEh0dHAgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9zdHJlYW1cXCcpJyArXG4gICAgICAgICAgJy5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCBzdHJlYW0gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnc3RyZWFtJylcbiAgc3RyZWFtLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIG9wZW4gYSB1cmxcbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb3BlblVSTCAodXJsKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJG9wZW5VUkwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9ldmVudFxcJyknICtcbiAgICAgICAgICAnLm9wZW5VUkwodXJsKVwiIGluc3RlYWQnKVxuICBjb25zdCBldmVudCA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdldmVudCcpXG4gIGV2ZW50Lm9wZW5VUkwodXJsKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBzZXQgYSB0aXRsZSBmb3IgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFRpdGxlICh0aXRsZSkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZXRUaXRsZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3BhZ2VJbmZvXFwnKScgK1xuICAgICAgICAgICcuc2V0VGl0bGUodGl0bGUpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0VGl0bGUodGl0bGUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFwicmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWUnKSBpbnN0ZWFkXCJcbiAqIGludm9rZSBhIG5hdGl2ZSBtZXRob2QgYnkgc3BlY2lmaW5nIHRoZSBuYW1lIG9mIG1vZHVsZSBhbmQgbWV0aG9kXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqIEBwYXJhbSAge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtICB7Li4uKn0gdGhlIHJlc3QgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbCAobW9kdWxlTmFtZSwgbWV0aG9kTmFtZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRjYWxsIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZVxcJylcIiBpbnN0ZWFkJylcbiAgY29uc3QgbW9kdWxlID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUobW9kdWxlTmFtZSlcbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGVbbWV0aG9kTmFtZV0pIHtcbiAgICBtb2R1bGVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==