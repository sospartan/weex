(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.2 Build 20160914');
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
	
	__webpack_require__(71);
	
	__webpack_require__(72);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
	// fix no setTimeout on Android V8
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

	'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	// global.Promise = null
	__webpack_require__(5);
	__webpack_require__(25);
	__webpack_require__(51);
	__webpack_require__(55);

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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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
	    anObject = __webpack_require__(15),
	    aFunction = __webpack_require__(33),
	    anInstance = __webpack_require__(56),
	    forOf = __webpack_require__(57),
	    setProto = __webpack_require__(61).set,
	    speciesConstructor = __webpack_require__(64),
	    task = __webpack_require__(65).set,
	    microtask = __webpack_require__(67)(),
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
	  Internal.prototype = __webpack_require__(68)($Promise.prototype, {
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
	__webpack_require__(69)(PROMISE);
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(70)(function (iter) {
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
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(16),
	    anObject = __webpack_require__(15);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(32)(Function.call, __webpack_require__(62).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(63),
	    createDesc = __webpack_require__(22),
	    toIObject = __webpack_require__(40),
	    toPrimitive = __webpack_require__(21),
	    has = __webpack_require__(23),
	    IE8_DOM_DEFINE = __webpack_require__(17),
	    gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    invoke = __webpack_require__(66),
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    macrotask = __webpack_require__(65).set,
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(12);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['error', 'warn', 'info', 'log', 'debug'];
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
	
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(73);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(74);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(31);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(75) });

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(38),
	    gOPS = __webpack_require__(76),
	    pIE = __webpack_require__(63),
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
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

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
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _utils = __webpack_require__(2);
	
	var DEFAULT_TAG_NAME = 'div'; /**
	                               * @fileOverview
	                               * A simple virtual dom implementation
	                               */
	// import { extend } from '../shared'
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
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    return callNative(id, tasks, '-1');
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
	  var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
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
	  if (this.attr[key] === value) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.classStyle = classStyle;
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
	
	var _default = __webpack_require__(81);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(82);
	
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _app = __webpack_require__(83);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _map = __webpack_require__(109);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options, data) {
	  var instance = _map.instanceMap[instanceId];
	  options = options || {};
	
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(instanceId, options);
	    _map.instanceMap[instanceId] = instance;
	    result = instance.init(code, data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  return result || instance;
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(84);
	
	var _ctrl = __webpack_require__(85);
	
	var ctrl = _interopRequireWildcard(_ctrl);
	
	var _instance = __webpack_require__(107);
	
	var _instance2 = _interopRequireDefault(_instance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	(0, _util.extend)(_instance2.default.prototype, ctrl); /**
	                                                        * @fileOverview
	                                                        * Weex instance constructor & definition
	                                                        */
	exports.default = _instance2.default;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	exports.cached = cached;
	exports.typof = typof;
	
	
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

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(86);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _init.init;
	  }
	});
	
	var _misc = __webpack_require__(106);
	
	Object.defineProperty(exports, 'updateActions', {
	  enumerable: true,
	  get: function get() {
	    return _misc.updateActions;
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
	Object.defineProperty(exports, 'refreshData', {
	  enumerable: true,
	  get: function get() {
	    return _misc.refreshData;
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _util = __webpack_require__(84);
	
	var _bundle = __webpack_require__(87);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function init(code, data) {
	  var _this = this;
	
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	
	  var result = void 0;
	  // @see: lib/app/bundle.js
	  var bundleDefine = (0, _util.bind)(_bundle.define, this);
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + _this.id + ')');
	  };
	
	  // backward(register/render)
	  var bundleRegister = (0, _util.bind)(_bundle.register, this);
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	  };
	
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	    };
	  };
	
	  var bundleDocument = this.doc;
	
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      var timer = _this.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return _this.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return _this.uid.toString();
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
	      'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap);
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(88);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(105);
	
	Object.defineProperty(exports, 'clearCommonModules', {
	  enumerable: true,
	  get: function get() {
	    return _define.clearCommonModules;
	  }
	});
	Object.defineProperty(exports, 'define', {
	  enumerable: true,
	  get: function get() {
	    return _define.define;
	  }
	});
	Object.defineProperty(exports, 'register', {
	  enumerable: true,
	  get: function get() {
	    return _define.register;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(89);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(91);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(103);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _util = __webpack_require__(84);
	
	var _misc = __webpack_require__(104);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  var cleanName = void 0;
	
	  if ((0, _misc.isWeexComponent)(name)) {
	    cleanName = (0, _misc.removeWeexPrefix)(name);
	  } else if ((0, _misc.isNpmModule)(name)) {
	    cleanName = (0, _misc.removeJSSurfix)(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!app.customComponentMap[cleanName]) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  config = (0, _util.isPlainObject)(config) ? config : {};
	
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	
	  var _checkDowngrade = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (_checkDowngrade.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [_checkDowngrade.errorType, _checkDowngrade.code, _checkDowngrade.errorMessage]
	    }]);
	    return new Error('Downgrade[' + _checkDowngrade.code + ']: ' + _checkDowngrade.errorMessage);
	  }
	
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ },
/* 90 */
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
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(84);
	
	var _state = __webpack_require__(92);
	
	var _compiler = __webpack_require__(97);
	
	var _events = __webpack_require__(101);
	
	var _register = __webpack_require__(102);
	
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
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app;
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options) {
	    options = this._app.customComponentMap[type] || {};
	  }
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
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	} /**
	   * @fileOverview
	   * ViewModel Constructor & definition
	   */
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	(0, _util.extend)(Vm, {
	  registerModules: _register.registerModules,
	  registerMethods: _register.registerMethods
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(93);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(94);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(95);
	
	var _util = __webpack_require__(84);
	
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(94);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	// import { pushWatcher } from './batcher'
	
	var prevTarget = void 0;
	
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
	  this.depIds = new _util._Set();
	  this.newDepIds = new _util._Set();
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
	  this.beforeGet();
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  prevTarget = _dep2.default.target;
	  _dep2.default.target = this;
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
	
	Watcher.prototype.afterGet = function () {
	  _dep2.default.target = prevTarget;
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
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = _dep2.default.target;
	  this.value = this.get();
	  this.dirty = false;
	  _dep2.default.target = current;
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
	
	var seenObjects = new _util._Set();
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _util = __webpack_require__(84);
	
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
	  Dep.target.addDep(this);
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
/* 95 */
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
	
	var _dep = __webpack_require__(94);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(96);
	
	var _util = __webpack_require__(84);
	
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
	      vm.$forceUpdate();
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
	      obj.$forceUpdate();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      vm.$forceUpdate();
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(84);
	
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(84);
	
	var _state = __webpack_require__(92);
	
	var _directive = __webpack_require__(98);
	
	var _domHelper = __webpack_require__(100);
	
	/**
	 * build(externalDirs)
	 *   createVm()
	 *   merge(externalDirs, dirs)
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
	 *
	 * required:
	 * index.js: Vm
	 * dom-helper.js: createElement, createBlock
	 * dom-helper.js: attachTarget, moveTarget, removeTarget
	 * directive.js: bindElement, bindSubVm, setId, watch
	 * events.js: $on
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
	    compileRepeat(vm, target, dest);
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    compileShown(vm, target, dest, meta);
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
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target);
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
	    if (!fragBlock) {
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
	  return newContext;
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * Directive Parser
	                                                                                                                                                                                                                                                   */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(84);
	
	var _watcher = __webpack_require__(93);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(99);
	
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
	
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	}
	
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
	
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
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
	    setEvent(vm, el, key, handler);
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
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	  var preserveBlock = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
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
	  var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
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
/* 101 */
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
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	  this.stop = function () {
	    shouldStop = true;
	  };
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
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
	
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
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
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready'];
	
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
	
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearModules = clearModules;
	exports.getModule = getModule;
	exports.requireModule = requireModule;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.requireComponent = requireComponent;
	exports.registerComponent = registerComponent;
	var nativeModules = {};
	
	function assignModules(modules, ifReplace) {
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
	
	function assignApis(Ctor, apis) {
	  var p = Ctor.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	function clearModules() {
	  nativeModules = {};
	}
	
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireModule(moduleName) {
	  var _this = this;
	
	  var methods = nativeModules[moduleName];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _this.callTasks({
	        module: moduleName,
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
	 * @context Vm
	 */
	function registerModules(modules, ifReplace) {
	  assignModules(modules, ifReplace);
	}
	
	/**
	 * @context Vm
	 */
	function registerMethods(apis) {
	  assignApis(this, apis);
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireComponent(name) {
	  var customComponentMap = this.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function registerComponent(name, def) {
	  var customComponentMap = this.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(89);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * [normalizeVersion description]
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
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeWeexPrefix = removeWeexPrefix;
	exports.removeJSSurfix = removeJSSurfix;
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
	  return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.register = register;
	
	var _util = __webpack_require__(84);
	
	var _vm = __webpack_require__(91);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _misc = __webpack_require__(104);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var commonModules = {};
	
	function clearCommonModules() {
	  commonModules = {};
	}
	
	// define(name, factory) for primary usage
	// or
	// define(name, deps, factory) for compatibility
	// Notice: DO NOT use function define() {},
	// it will cause error after builded by webpack
	var define = exports.define = function define(name, deps, factory) {
	  var _this = this;
	
	  console.debug('[JS Framework] define a component ' + name);
	
	  if ((0, _util.typof)(deps) === 'function') {
	    factory = deps;
	    deps = [];
	  }
	
	  var _require = function _require(name) {
	    var cleanName = void 0;
	
	    if ((0, _misc.isWeexComponent)(name)) {
	      cleanName = (0, _misc.removeWeexPrefix)(name);
	      return _this.requireComponent(cleanName);
	    }
	    if ((0, _misc.isWeexModule)(name)) {
	      cleanName = (0, _misc.removeWeexPrefix)(name);
	      return _this.requireModule(cleanName);
	    }
	    if ((0, _misc.isNormalModule)(name)) {
	      cleanName = (0, _misc.removeJSSurfix)(name);
	      return commonModules[name];
	    }
	    if ((0, _misc.isNpmModule)(name)) {
	      cleanName = (0, _misc.removeJSSurfix)(name);
	      return commonModules[name];
	    }
	  };
	  var _module = { exports: {} };
	
	  var cleanName = void 0;
	  if ((0, _misc.isWeexComponent)(name)) {
	    cleanName = (0, _misc.removeWeexPrefix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    this.registerComponent(cleanName, _module.exports);
	  } else if ((0, _misc.isWeexModule)(name)) {
	    cleanName = (0, _misc.removeWeexPrefix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
	  } else if ((0, _misc.isNormalModule)(name)) {
	    cleanName = (0, _misc.removeJSSurfix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    commonModules[cleanName] = _module.exports;
	  } else if ((0, _misc.isNpmModule)(name)) {
	    cleanName = (0, _misc.removeJSSurfix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    var exports = _module.exports;
	    if (exports.template || exports.style || exports.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      this.registerComponent(cleanName, exports);
	    } else {
	      commonModules[cleanName] = _module.exports;
	    }
	  }
	};
	
	/**
	 * @deprecated
	 */
	function register(type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  this.registerComponent(type, options);
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateActions = updateActions;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.refreshData = refreshData;
	
	var _util = __webpack_require__(84);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	
	function updateActions() {
	  this.differ.flush();
	  var tasks = [];
	  if (this.doc && this.doc.listener && this.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(this.doc.listener.updates));
	    this.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return this.callTasks(tasks);
	  }
	}
	
	function destroy() {
	  console.debug('[JS Framework] Destory an instance(' + this.id + ')');
	
	  this.id = '';
	  this.options = null;
	  this.blocks = null;
	  this.vm = null;
	  this.doc = null;
	  this.customComponentMap = null;
	  this.callbacks = null;
	}
	
	function getRootElement() {
	  var doc = this.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	function fireEvent(ref, type, e, domChanges) {
	  var _this = this;
	
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + this.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	
	  var el = this.doc.getRef(ref);
	
	  if (el) {
	    this.doc.close();
	    var result = this.doc.fireEvent(el, type, e, domChanges);
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return result;
	  }
	
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	function callback(callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + this.id + ')');
	
	  var callback = this.callbacks[callbackId];
	
	  if (typeof callback === 'function') {
	    this.doc.close();
	    callback(data); // data is already a object, @see: lib/runtime/index.js
	
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      this.callbacks[callbackId] = undefined;
	    }
	
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	function refreshData(data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + this.id + ']');
	
	  var vm = this.vm;
	
	  if (vm && data) {
	    this.doc.close();
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    this.updateActions();
	    this.doc.listener.refreshFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid data "' + data + '"');
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;
	
	var _util = __webpack_require__(84);
	
	var _differ = __webpack_require__(108);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(99);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(102);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AppInstance(instanceId, options) {
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(instanceId, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	}
	
	function normalize(app, v) {
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
	
	AppInstance.prototype.callTasks = function (tasks) {
	  var _this = this;
	
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(_this, arg);
	    });
	  });
	
	  return _config2.default.sendTasks(this.id, tasks, '-1');
	};
	
	(0, _util.extend)(AppInstance.prototype, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

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
	
	var _config = __webpack_require__(99);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _map = __webpack_require__(109);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	  _config2.default.Listener = cfg.Listener;
	}
	
	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = _map.instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.refreshData(data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	/**
	 * destroy a Weex instance
	 * @param  {string} instanceId
	 */
	function destroyInstance(instanceId) {
	  var instance = _map.instanceMap[instanceId];
	  if (!instance) {
	    return new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  instance.destroy();
	  delete _map.instanceMap[instanceId];
	  return _map.instanceMap;
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(91);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(99);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	/**
	 * register the name of each native component
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
	 * register the name and methods of each module
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    _vm2.default.registerModules(modules);
	  }
	}
	
	/**
	 * register the name and methods of each api
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(apis) {
	  if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
	    _vm2.default.registerMethods(apis);
	  }
	}
	global.registerMethods = registerMethods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(109);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var jsHandlers = {
	  fireEvent: function fireEvent(instanceId, ref, type, data, domChanges) {
	    var instance = _map.instanceMap[instanceId];
	    return instance.fireEvent(ref, type, data, domChanges);
	  },
	
	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = _map.instanceMap[instanceId];
	    return instance.callback(funcId, data, ifLast);
	  }
	};
	
	/**
	 * accept calls from native (event or callback)
	 *
	 * @param  {string} instanceId
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(instanceId, tasks) {
	  var instance = _map.instanceMap[instanceId];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(instanceId);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + instanceId + '" or tasks');
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
	
	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = _map.instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.getRootElement();
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
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
	
	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;
	
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
	  for (var name in frameworks) {
	    var framework = frameworks[name];
	    framework.init(config);
	  }
	
	  ;['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);
	
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
			"build:browser": "webpack --config build/webpack.browser.config.js",
			"build:common": "webpack --config build/webpack.common.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && npm run build:common && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "webpack --watch --config build/webpack.browser.config.js",
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
			"browser": "0.3.2",
			"framework": "0.15.2",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"httpurl": "^0.1.1",
			"lazyimg": "^0.1.2",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"weex-components": "^0.1.3"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
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
			"weex-loader": "^0.2.0"
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
	
	var _util = __webpack_require__(84);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTRkZDA2OTVlODIzZjA1YzJmNzIiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvdmRvbS9saXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9zZW12ZXIvNS4yLjAvc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3Byb2Nlc3MvMC4xMS41L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsImdsb2JhbCIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwicmVnaXN0ZXJNZXRob2RzIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJyZXF1aXJlIiwiY2xhc3NvZiIsInRlc3QiLCJjb2YiLCJUQUciLCJBUkciLCJ0cnlHZXQiLCJpdCIsImUiLCJtb2R1bGUiLCJleHBvcnRzIiwiTyIsIlQiLCJCIiwidW5kZWZpbmVkIiwiY2FsbGVlIiwic2xpY2UiLCJzdG9yZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm5hbWUiLCJTSEFSRUQiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJoaWRlIiwiaGFzIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU3RyaW5nIiwiZFAiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiZiIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIlAiLCJBdHRyaWJ1dGVzIiwiVHlwZUVycm9yIiwiZ2V0IiwiZXhlYyIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiUyIsInZhbHVlT2YiLCJiaXRtYXAiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRhdCIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsInBvaW50IiwiZG9uZSIsInRvSW50ZWdlciIsImRlZmluZWQiLCJ0aGF0IiwicG9zIiwicyIsImIiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJMSUJSQVJZIiwiJGV4cG9ydCIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJGIiwiUFJPVE9UWVBFIiwidHlwZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIlUiLCJXIiwiUiIsImFGdW5jdGlvbiIsImMiLCJjcmVhdGUiLCJkZXNjcmlwdG9yIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic2V0UHJvdG8iLCJzZXQiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJ0YXNrIiwibWljcm90YXNrIiwiUFJPTUlTRSIsInByb2Nlc3MiLCIkUHJvbWlzZSIsImlzTm9kZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsInByb21pc2UiLCJyZXNvbHZlIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJ0aGVuIiwic2FtZUNvbnN0cnVjdG9yIiwiaXNUaGVuYWJsZSIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwiQyIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwibm90aWZ5IiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJydW4iLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZG9tYWluIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsImVudGVyIiwiZXhpdCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiUHJvbWlzZSIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiY2hlY2siLCJzZXRQcm90b3R5cGVPZiIsImJ1Z2d5IiwiX19wcm90b19fIiwicElFIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlNQRUNJRVMiLCJEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsImxpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwiYXJncyIsIm5leHRUaWNrIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltcG9ydFNjcmlwdHMiLCJyZW1vdmVDaGlsZCIsImNsZWFyIiwidW4iLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaGVhZCIsImxhc3QiLCJmbHVzaCIsInBhcmVudCIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiREVTQ1JJUFRPUlMiLCJLRVkiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsIm5hdGl2ZUxvZyIsIkxFVkVMUyIsImxldmVsTWFwIiwiZ2VuZXJhdGVMZXZlbE1hcCIsIldYRW52aXJvbm1lbnQiLCJwbGF0Zm9ybSIsImRlYnVnIiwiY2hlY2tMZXZlbCIsImZvcm1hdCIsImxvZyIsImluZm8iLCJ3YXJuIiwiX19vcmlfXyIsImZvckVhY2giLCJsZXZlbEluZGV4IiwibGV2ZWwiLCJ0eXBlSW5kZXgiLCJsb2dMZXZlbCIsIm1hcCIsInYiLCJ0b0xvd2VyQ2FzZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnT1BTIiwiJGFzc2lnbiIsIkEiLCJLIiwiayIsImFMZW4iLCJnZXRTeW1ib2xzIiwiaXNFbnVtIiwiaiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmZpZyIsIkRvY3VtZW50IiwiRWxlbWVudCIsIkNvbW1lbnQiLCJMaXN0ZW5lciIsImZyYW1ld29ya3MiLCJzZW5kVGFza3MiLCJjYWxsTmF0aXZlIiwiTm9kZSIsIkRFRkFVTFRfVEFHX05BTUUiLCJpbnN0YW5jZU1hcCIsIm5leHROb2RlUmVmIiwidXJsIiwiVVJMIiwibm9kZU1hcCIsImdlbkNhbGxUYXNrcyIsImNyZWF0ZURvY3VtZW50RWxlbWVudCIsInRhc2tzIiwiaXNBcnJheSIsImRlc3Ryb3kiLCJiYXRjaGVkIiwiZG9jSWQiLCJvd25lckRvY3VtZW50Iiwicm9sZSIsImRlcHRoIiwicmVmIiwiX2RvY3VtZW50RWxlbWVudCIsImFwcGVuZEJvZHkiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJkb2MiLCJwdXJlQ2hpbGRyZW4iLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJiZWZvcmVJbmRleCIsIm5vZGVUeXBlIiwiY2hpbGQiLCJzZXRCb2R5IiwibGlua1BhcmVudCIsIm5vZGVJZCIsImNyZWF0ZUJvZHkiLCJfcm9vdCIsImJvZHkiLCJwcm9wcyIsInRhZ05hbWUiLCJjcmVhdGVDb21tZW50IiwidGV4dCIsImZpcmVFdmVudCIsImRvbUNoYW5nZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidXBkYXRlRWxlbWVudCIsImdldFJlZiIsImNoYW5nZXMiLCJhdHRycyIsInNldEF0dHIiLCJzZXRTdHlsZSIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0ciIsImNsYXNzU3R5bGUiLCJpbnNlcnRJbmRleCIsInJlZ2lzdGVyTm9kZSIsImFkZEVsZW1lbnQiLCJtb3ZlSW5kZXgiLCJtb3ZlRWxlbWVudCIsInB1cmVCZWZvcmUiLCJuZXh0RWxlbWVudCIsImluc2VydEFmdGVyIiwiYWZ0ZXIiLCJwcmV2aW91c0VsZW1lbnQiLCJwcmVzZXJ2ZWQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUVsZW1lbnQiLCJuZXdJbmRleCIsImNoYW5nZVNpYmxpbmciLCJuZXdJbmRleEFmdGVyIiwiYmVmb3JlTmV3IiwiYWZ0ZXJOZXciLCJzaWxlbnQiLCJzZXRDbGFzc1N0eWxlIiwic2V0U3R5bGVzIiwidG9TdHlsZSIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJ0b0pTT04iLCJjcmVhdGVBY3Rpb24iLCJ1cGRhdGVzIiwiY3JlYXRlRmluaXNoIiwiY2FsbGJhY2siLCJ1cGRhdGVGaW5pc2giLCJyZWZyZXNoRmluaXNoIiwiZWxlbWVudCIsImFjdGlvbnMiLCJhZGRBY3Rpb25zIiwidGFyZ2V0UmVmIiwicGFyZW50UmVmIiwibWV0aG9kIiwiV2VleCIsImNyZWF0ZUluc3RhbmNlIiwiaW5pdCIsInJlZnJlc2hJbnN0YW5jZSIsImRlc3Ryb3lJbnN0YW5jZSIsInJlZ2lzdGVyQ29tcG9uZW50cyIsInJlZ2lzdGVyTW9kdWxlcyIsInJlY2VpdmVUYXNrcyIsImdldFJvb3QiLCJpbnN0YW5jZUlkIiwiY29kZSIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImN0cmwiLCJpc1Jlc2VydmVkIiwiY2FjaGVkIiwidHlwb2YiLCJzdHIiLCJoYXNQcm90byIsIl9TZXQiLCJTZXQiLCJtYXRjaCIsImFkZCIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwidG9VcHBlciIsIl8iLCJ0b1VwcGVyQ2FzZSIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3Vic3RyaW5nIiwidXBkYXRlQWN0aW9ucyIsImdldFJvb3RFbGVtZW50IiwicmVmcmVzaERhdGEiLCJidW5kbGVEZWZpbmUiLCJidW5kbGVCb290c3RyYXAiLCJfZGF0YSIsImJ1bmRsZVJlZ2lzdGVyIiwiYnVuZGxlUmVuZGVyIiwiYnVuZGxlUmVxdWlyZSIsImJ1bmRsZURvY3VtZW50IiwiZnVuY3Rpb25Cb2R5Iiwic3Vic3RyIiwidGltZXIiLCJyZXF1aXJlTW9kdWxlIiwidGltZXJBUElzIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJuIiwiY2xlYXJJbnRlcnZhbCIsImJvb3RzdHJhcCIsImNsZWFyQ29tbW9uTW9kdWxlcyIsImRlZmluZSIsInJlZ2lzdGVyIiwiZG93bmdyYWRlIiwiYXBwIiwiY2xlYW5OYW1lIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwic2F0aXNmaWVzIiwiX2NoZWNrRG93bmdyYWRlIiwiaXNEb3duZ3JhZGUiLCJjYWxsVGFza3MiLCJlcnJvclR5cGUiLCJlcnJvck1lc3NhZ2UiLCJ2bSIsIl9hcHAiLCJTZW1WZXIiLCJlbnYiLCJOT0RFX0RFQlVHIiwidW5zaGlmdCIsIlNFTVZFUl9TUEVDX1ZFUlNJT04iLCJNQVhfTEVOR1RIIiwiTUFYX1NBRkVfSU5URUdFUiIsIk51bWJlciIsInJlIiwiTlVNRVJJQ0lERU5USUZJRVIiLCJOVU1FUklDSURFTlRJRklFUkxPT1NFIiwiTk9OTlVNRVJJQ0lERU5USUZJRVIiLCJNQUlOVkVSU0lPTiIsIk1BSU5WRVJTSU9OTE9PU0UiLCJQUkVSRUxFQVNFSURFTlRJRklFUiIsIlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UiLCJQUkVSRUxFQVNFIiwiUFJFUkVMRUFTRUxPT1NFIiwiQlVJTERJREVOVElGSUVSIiwiQlVJTEQiLCJGVUxMIiwiRlVMTFBMQUlOIiwiTE9PU0VQTEFJTiIsIkxPT1NFIiwiR1RMVCIsIlhSQU5HRUlERU5USUZJRVJMT09TRSIsIlhSQU5HRUlERU5USUZJRVIiLCJYUkFOR0VQTEFJTiIsIlhSQU5HRVBMQUlOTE9PU0UiLCJYUkFOR0UiLCJYUkFOR0VMT09TRSIsIkxPTkVUSUxERSIsIlRJTERFVFJJTSIsIlJlZ0V4cCIsInRpbGRlVHJpbVJlcGxhY2UiLCJUSUxERSIsIlRJTERFTE9PU0UiLCJMT05FQ0FSRVQiLCJDQVJFVFRSSU0iLCJjYXJldFRyaW1SZXBsYWNlIiwiQ0FSRVQiLCJDQVJFVExPT1NFIiwiQ09NUEFSQVRPUkxPT1NFIiwiQ09NUEFSQVRPUiIsIkNPTVBBUkFUT1JUUklNIiwiY29tcGFyYXRvclRyaW1SZXBsYWNlIiwiSFlQSEVOUkFOR0UiLCJIWVBIRU5SQU5HRUxPT1NFIiwiU1RBUiIsInBhcnNlIiwibG9vc2UiLCJlciIsInZhbGlkIiwiY2xlYW4iLCJ0cmltIiwibSIsInJhdyIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsInByZXJlbGVhc2UiLCJudW0iLCJidWlsZCIsImNvbXBhcmUiLCJvdGhlciIsImNvbXBhcmVNYWluIiwiY29tcGFyZVByZSIsImNvbXBhcmVJZGVudGlmaWVycyIsImluYyIsInJlbGVhc2UiLCJpZGVudGlmaWVyIiwiZGlmZiIsInZlcnNpb24xIiwidmVyc2lvbjIiLCJlcSIsInYxIiwidjIiLCJudW1lcmljIiwiYW51bSIsImJudW0iLCJyY29tcGFyZUlkZW50aWZpZXJzIiwiY29tcGFyZUxvb3NlIiwicmNvbXBhcmUiLCJzb3J0IiwicnNvcnQiLCJsdCIsIm5lcSIsImd0ZSIsImx0ZSIsImNtcCIsIm9wIiwiQ29tcGFyYXRvciIsImNvbXAiLCJzZW12ZXIiLCJBTlkiLCJvcGVyYXRvciIsIlJhbmdlIiwicmFuZ2UiLCJwYXJzZVJhbmdlIiwiZmlsdGVyIiwiY29tcHMiLCJociIsImh5cGhlblJlcGxhY2UiLCJjb21wUmUiLCJwYXJzZUNvbXBhcmF0b3IiLCJ0b0NvbXBhcmF0b3JzIiwicmVwbGFjZUNhcmV0cyIsInJlcGxhY2VUaWxkZXMiLCJyZXBsYWNlWFJhbmdlcyIsInJlcGxhY2VTdGFycyIsImlzWCIsInJlcGxhY2VUaWxkZSIsIk0iLCJwIiwicHIiLCJyZXBsYWNlQ2FyZXQiLCJyZXBsYWNlWFJhbmdlIiwiZ3RsdCIsInhNIiwieG0iLCJ4cCIsImFueVgiLCIkMCIsImZNIiwiZm0iLCJmcCIsImZwciIsImZiIiwidG8iLCJ0TSIsInRtIiwidHAiLCJ0cHIiLCJ0YiIsInRlc3RTZXQiLCJhbGxvd2VkIiwibWF4U2F0aXNmeWluZyIsInZlcnNpb25zIiwidmFsaWRSYW5nZSIsImx0ciIsIm91dHNpZGUiLCJndHIiLCJoaWxvIiwiZ3RmbiIsImx0ZWZuIiwibHRmbiIsImVjb21wIiwiY29tcGFyYXRvcnMiLCJoaWdoIiwibG93IiwiY29tcGFyYXRvciIsInBhcnNlZCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsImZ1biIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiVm0iLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2NoaWxkcmVuVm1zIiwiX29wdGlvbnMiLCJfbWV0aG9kcyIsIl9jb21wdXRlZCIsImNvbXB1dGVkIiwiX2NzcyIsIl9pZHMiLCJfdm1FdmVudHMiLCJfdHlwZSIsIiRlbWl0IiwiX2luaXRlZCIsIl9jcmVhdGVkIiwicmVhZHkiLCJfcGFyZW50RWwiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsImluaXRNZXRob2RzIiwiX3dhdGNoZXJzIiwidXNlckRlZiIsIm1ha2VDb21wdXRlZEdldHRlciIsImdldHRlciIsIm93bmVyIiwid2F0Y2hlciIsImxhenkiLCJjb21wdXRlZEdldHRlciIsImRpcnR5IiwiZXZhbHVhdGUiLCJkZXBlbmQiLCJXYXRjaGVyIiwicHJldlRhcmdldCIsImV4cE9yRm4iLCJpc0ZuIiwiZXhwcmVzc2lvbiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiTk9ERV9FTlYiLCJxdWV1ZWQiLCJzaGFsbG93IiwiYmVmb3JlR2V0IiwiZGVlcCIsInRyYXZlcnNlIiwiYWZ0ZXJHZXQiLCJhZGREZXAiLCJkZXAiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJ0bXAiLCJ1cGRhdGUiLCJvbGRWYWx1ZSIsImN1cnJlbnQiLCJ0ZWFyZG93biIsIl9pc0JlaW5nRGVzdHJveWVkIiwiX3ZGb3JSZW1vdmluZyIsInNlZW5PYmplY3RzIiwic2VlbiIsImlzQSIsImlzTyIsIl9fb2JfXyIsImRlcElkIiwiRGVwIiwic3VicyIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiaXRlbXMiLCJhZGRWbSIsInZtcyIsInJlbW92ZVZtIiwib2IiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJwcm9wZXJ0eSIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwiJGZvcmNlVXBkYXRlIiwiS0VZX1dPUkRTIiwicHJveHlHZXR0ZXIiLCJwcm94eVNldHRlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJpbnNlcnRlZCIsIiRzZXQiLCIkcmVtb3ZlIiwib3B0IiwidGVtcGxhdGUiLCJjb21waWxlIiwiX3JlYWR5IiwiZGVzdCIsIm1ldGEiLCJsYXN0U2lnbmFsIiwidGFyZ2V0SXNGcmFnbWVudCIsImNvbXBpbGVGcmFnbWVudCIsInRhcmdldElzQ29udGVudCIsIl9jb250ZW50IiwidGFyZ2V0TmVlZENoZWNrUmVwZWF0IiwiY29tcGlsZVJlcGVhdCIsInRhcmdldE5lZWRDaGVja1Nob3duIiwiY29tcGlsZVNob3duIiwidHlwZUdldHRlciIsInRhcmdldE5lZWRDaGVja1R5cGUiLCJjb21waWxlVHlwZSIsImNvbXBvbmVudCIsInRhcmdldElzQ29tcG9zZWQiLCJjb21waWxlQ3VzdG9tQ29tcG9uZW50IiwiY29tcGlsZU5hdGl2ZUNvbXBvbmVudCIsInJlcGVhdCIsInNob3duIiwiY29tcG9uZW50cyIsImZyYWdCbG9jayIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImJpbmRSZXBlYXQiLCJuZXdNZXRhIiwiYmluZFNob3duIiwiQ3RvciIsInN1YlZtIiwiX2V4dGVybmFsQmluZGluZyIsImNvbXBpbGVDaGlsZHJlbiIsIl9yb290RWwiLCJldmVudHMiLCJhcHBlbmQiLCJ0cmVlTW9kZSIsImV2ZXJ5Iiwia2V5TmFtZSIsInZhbHVlTmFtZSIsImNvbXBpbGVJdGVtIiwiY29udGV4dCIsIm5ld0NvbnRleHQiLCJtZXJnZUNvbnRleHQiLCJ3YXRjaEJsb2NrIiwib2xkQ2hpbGRyZW4iLCJvbGRWbXMiLCJvbGREYXRhIiwidHJhY2tNYXAiLCJyZXVzZWRNYXAiLCJyZXVzZWRMaXN0IiwidXBkYXRlTWFyayIsInJldXNlZCIsImNhbGMiLCJkaWZmZXIiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJuYXRpdmVDb21wb25lbnRNYXAiLCJTRVRURVJTIiwic3Via2V5Iiwic2V0Q2xhc3MiLCJjbGFzc0xpc3QiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInJlZHVjZSIsIm1lcmdlUHJvcHMiLCJtZXJnZUNsYXNzU3R5bGUiLCJtZXJnZVN0eWxlIiwicmV0dXJuVmFsdWUiLCJjc3MiLCJuZXdJZCIsImJpbmREaXIiLCJzZXRFdmVudCIsImJpbmRLZXkiLCJpbWFnZSIsImNvbnRhaW5lciIsInNsaWRlciIsImNlbGwiLCJjcmVhdGVCbG9jayIsImF0dGFjaFRhcmdldCIsIm1vdmVUYXJnZXQiLCJyZW1vdmVUYXJnZXQiLCJjcmVhdGVCbG9ja1N0YXJ0IiwiZW5kIiwiY3JlYXRlQmxvY2tFbmQiLCJsYXN0ZXN0QmxvY2tJZCIsImFuY2hvciIsInNpZ25hbCIsIm1vdmVCbG9jayIsImdyb3VwIiwidGVtcCIsInByZXNlcnZlQmxvY2siLCJyZW1vdmVCbG9jayIsIiRkaXNwYXRjaCIsIiRicm9hZGNhc3QiLCIkb24iLCIkb2ZmIiwiaW5pdEV2ZW50cyIsIm1peGluRXZlbnRzIiwiRXZ0IiwiZGV0YWlsIiwic2hvdWxkU3RvcCIsInN0b3AiLCJoYXNTdG9wcGVkIiwiaGFuZGxlckxpc3QiLCJldnQiLCJMSUZFX0NZQ0xFX1RZUEVTIiwidHlwZTEiLCJ0eXBlMiIsImNsZWFyTW9kdWxlcyIsImdldE1vZHVsZSIsInJlcXVpcmVDb21wb25lbnQiLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hdGl2ZU1vZHVsZXMiLCJhc3NpZ25Nb2R1bGVzIiwibW9kdWxlcyIsImlmUmVwbGFjZSIsIm1vZHVsZU5hbWUiLCJhc3NpZ25BcGlzIiwiYXBpcyIsImFwaU5hbWUiLCJub3JtYWxpemVWZXJzaW9uIiwiZ2V0RXJyb3IiLCJpc1ZhbGlkIiwiY3JpdGVyaWEiLCJnZXRNc2ciLCJfa2V5IiwiZGV2aWNlSW5mbyIsImN1c3RvbURvd25ncmFkZSIsImRQbGF0Zm9ybSIsImNPYmoiLCJrZXlMb3dlciIsImlzVmVyc2lvbiIsImlzRGV2aWNlTW9kZWwiLCJkIiwiX2NyaXRlcmlhIiwicmVtb3ZlV2VleFByZWZpeCIsInJlbW92ZUpTU3VyZml4IiwiV0VFWF9DT01QT05FTlRfUkVHIiwiV0VFWF9NT0RVTEVfUkVHIiwiTk9STUFMX01PRFVMRV9SRUciLCJKU19TVVJGSVhfUkVHIiwiaXNXZWV4Q29tcG9uZW50IiwiaXNXZWV4TW9kdWxlIiwiaXNOb3JtYWxNb2R1bGUiLCJpc05wbU1vZHVsZSIsImNvbW1vbk1vZHVsZXMiLCJmYWN0b3J5IiwiX3JlcXVpcmUiLCJfbW9kdWxlIiwiYmxvY2tzIiwiY2FsbGJhY2tzIiwic29tZSIsImNhbGxiYWNrSWQiLCJpZktlZXBBbGl2ZSIsIkFwcEluc3RhbmNlIiwiYnVuZGxlVXJsIiwibm9ybWFsaXplIiwidG9JU09TdHJpbmciLCJhcmciLCJEaWZmZXIiLCJob29rcyIsImhhc1RpbWVyIiwiaXNUaW1lb3V0IiwiY2FsbFR5cGVNYXAiLCJjYWxsVHlwZUxpc3QiLCJpc0VtcHR5IiwiY2ZnIiwianNIYW5kbGVycyIsImZ1bmNJZCIsImlmTGFzdCIsInJlc3VsdHMiLCJ2ZXJzaW9uUmVnRXhwIiwiY2hlY2tWZXJzaW9uIiwiZnJhbWV3b3JrIiwiYnVuZGxlVmVyc2lvbiIsImdlbkluaXQiLCJnZW5JbnN0YW5jZSIsImFkYXB0SW5zdGFuY2UiLCJuYXRpdmVNZXRob2ROYW1lIiwiJCIsIiRlbCIsIiR2bSIsIiRyZW5kZXJUaGVuIiwiJHNjcm9sbFRvIiwiJHRyYW5zaXRpb24iLCIkZ2V0Q29uZmlnIiwiJHNlbmRIdHRwIiwiJG9wZW5VUkwiLCIkc2V0VGl0bGUiLCIkY2FsbCIsIm9mZnNldCIsImRvbSIsInNjcm9sbFRvRWxlbWVudCIsInN0eWxlcyIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJfc2V0U3R5bGUiLCJwYXJhbXMiLCJzdHJlYW0iLCJzZW5kSHR0cCIsIm9wZW5VUkwiLCJwYWdlSW5mbyIsInNldFRpdGxlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7OztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7S0FFSkMsTSx1QkFBQUEsTTtLQUFRQyxXLHVCQUFBQSxXOztBQUVoQjs7NEJBQ1dDLFU7QUFDVEMsVUFBT0QsVUFBUCxJQUFxQixZQUFhO0FBQ2hDLFNBQU1FLE1BQU0sa0JBQVFGLFVBQVIscUNBQVo7QUFDQSxTQUFJRSxlQUFlQyxLQUFuQixFQUEwQjtBQUN4QkMsZUFBUUMsS0FBUixDQUFjSCxJQUFJSSxRQUFKLEVBQWQ7QUFDRDtBQUNELFlBQU9KLEdBQVA7QUFDRCxJQU5EOzs7QUFERixNQUFLLElBQU1GLFVBQVgsdUJBQWtDO0FBQUEsU0FBdkJBLFVBQXVCO0FBUWpDOztBQUVEO0FBQ0FDLFFBQU9NLGdCQUFQLEdBQTBCVCxNQUEx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QUFhLDRDQUNYLDJEQURGO0FBRUEsT0FBTTFVLFNBQVMsS0FBS3dnQixJQUFMLENBQVVyQixhQUFWLENBQXdCb2IsVUFBeEIsQ0FBZjtBQUNBLE9BQUl2NkIsVUFBVUEsT0FBT3JFLFVBQVAsQ0FBZCxFQUFrQztBQUFBLHVDQUpjc1csSUFJZDtBQUpjQSxXQUlkO0FBQUE7O0FBQ2hDalMsWUFBT3JFLFVBQVAsZ0JBQXNCc1csSUFBdEI7QUFDRDtBQUNGLEUiLCJmaWxlIjoibmF0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5NGRkMDY5NWU4MjNmMDVjMmY3MlxuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuXG5leHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4vdXRpbHMnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3V0aWxzLmpzXG4gKiovIiwiY29uc3Qge1xuICBzZXRUaW1lb3V0LFxuICBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbi8vIGZpeCBubyBzZXRUaW1lb3V0IG9uIEFuZHJvaWQgVjhcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2Ygc2V0VGltZW91dE5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zdCB0aW1lb3V0TWFwID0ge31cbiAgbGV0IHRpbWVvdXRJZCA9IDBcblxuICBnbG9iYWwuc2V0VGltZW91dCA9IChjYiwgdGltZSkgPT4ge1xuICAgIHRpbWVvdXRNYXBbKyt0aW1lb3V0SWRdID0gY2JcbiAgICBzZXRUaW1lb3V0TmF0aXZlKHRpbWVvdXRJZC50b1N0cmluZygpLCB0aW1lKVxuICB9XG5cbiAgZ2xvYmFsLnNldFRpbWVvdXRDYWxsYmFjayA9IChpZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZW91dE1hcFtpZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRpbWVvdXRNYXBbaWRdKClcbiAgICAgIGRlbGV0ZSB0aW1lb3V0TWFwW2lkXVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qc1xuICoqLyIsIi8vIGZpeCBQcm9taXNlIFByb2JsZW0gb24gSlNDb250ZXh0IG9mIGlPUzd+OFxuLy8gQHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM1ODY2XG4vLyBnbG9iYWwuUHJvbWlzZSA9IG51bGxcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1xuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1xuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3VpZC5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xyXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcclxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXHJcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cclxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcclxuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xyXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXHJcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxyXG4gICAgLCBndCAgICAgPSAnPidcclxuICAgICwgaWZyYW1lRG9jdW1lbnQ7XHJcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxyXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XHJcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xyXG4gIGlmcmFtZURvY3VtZW50LndyaXRlKCc8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHQnICsgZ3QpO1xyXG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XHJcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XHJcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xyXG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgaWYoTyAhPT0gbnVsbCl7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XHJcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcclxuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcclxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XHJcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXHJcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XHJcbiAgYW5PYmplY3QoTyk7XHJcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaSA9IDBcclxuICAgICwgUDtcclxuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XHJcbiAgcmV0dXJuIE87XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4gKiovIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXHJcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xyXG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcclxuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCByZXN1bHQgPSBbXVxyXG4gICAgLCBrZXk7XHJcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xyXG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxyXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcclxuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuICoqLyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcclxubW9kdWxlLmV4cG9ydHMgPSAoXHJcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcclxuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qc1xuICoqLyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4gKiovIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcclxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcclxuICBPID0gdG9PYmplY3QoTyk7XHJcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XHJcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XHJcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbiAqKi8iLCJ2YXIgJGl0ZXJhdG9ycyAgICA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJylcbiAgLCByZWRlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB3a3MgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc2V0UHJvdG8gICAgICAgICAgID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0XG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuICoqLyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qc1xuICoqLyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxyXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcclxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXHJcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcclxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuXHJcbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xyXG4gIE8gPSB0b0lPYmplY3QoTyk7XHJcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xyXG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XHJcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcclxuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4gKiovIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiY29uc3QgeyBjb25zb2xlLCBuYXRpdmVMb2cgfSA9IGdsb2JhbFxuY29uc3QgTEVWRUxTID0gWydlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbE1hcCAoKSB7XG4gIExFVkVMUy5mb3JFYWNoKGxldmVsID0+IHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpXG4gICAgbGV2ZWxNYXBbbGV2ZWxdID0ge31cbiAgICBMRVZFTFMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgIGNvbnN0IHR5cGVJbmRleCA9IExFVkVMUy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAodHlwZUluZGV4IDw9IGxldmVsSW5kZXgpIHtcbiAgICAgICAgbGV2ZWxNYXBbbGV2ZWxdW3R5cGVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAoKHYpID0+IHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcbiAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYgPSBTdHJpbmcodilcbiAgICB9XG4gICAgcmV0dXJuIHZcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanNcbiAqKi8iLCJpbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbidcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJpbXBvcnQgeyBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCB9IGZyb20gJy4uL3Zkb20nXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi4vdmRvbS9saXN0ZW5lcidcbmltcG9ydCBmcmFtZXdvcmtzIGZyb20gJy4vY29uZmlnJ1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQsIExpc3RlbmVyLCBmcmFtZXdvcmtzLFxuICBzZW5kVGFza3MgKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZ2xvYmFsLmNhbGxOYXRpdmUoLi4uYXJncylcbiAgfVxufVxuXG5jb25zdCBtZXRob2RzID0gaW5pdChjb25maWcpXG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuLy8gaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzJ1xuXG5jb25zdCBERUZBVUxUX1RBR19OQU1FID0gJ2RpdidcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cbmxldCBuZXh0Tm9kZVJlZiA9IDFcblxuZXhwb3J0IGZ1bmN0aW9uIERvY3VtZW50IChpZCwgdXJsLCBoYW5kbGVyLCBMaXN0ZW5lcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgTGlzdGVuZXIgJiYgKHRoaXMubGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoaWQsIGhhbmRsZXIgfHwgZ2VuQ2FsbFRhc2tzKGlkKSkpXG4gIHRoaXMuY3JlYXRlRG9jdW1lbnRFbGVtZW50KClcbn1cblxuZnVuY3Rpb24gZ2VuQ2FsbFRhc2tzIChpZCkge1xuICByZXR1cm4gKHRhc2tzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgICAgdGFza3MgPSBbdGFza3NdXG4gICAgfVxuICAgIHJldHVybiBjYWxsTmF0aXZlKGlkLCB0YXNrcywgJy0xJylcbiAgfVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVsZXRlIHRoaXMubGlzdGVuZXJcbiAgZGVsZXRlIHRoaXMubm9kZU1hcFxuICBkZWxldGUgaW5zdGFuY2VNYXBbdGhpcy5pZF1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IGZhbHNlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gdHJ1ZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCgnZG9jdW1lbnQnKVxuICAgIGVsLmRvY0lkID0gdGhpcy5pZFxuICAgIGVsLm93bmVyRG9jdW1lbnQgPSB0aGlzXG4gICAgZWwucm9sZSA9ICdkb2N1bWVudEVsZW1lbnQnXG4gICAgZWwuZGVwdGggPSAwXG4gICAgZWwucmVmID0gJ19kb2N1bWVudEVsZW1lbnQnXG4gICAgdGhpcy5ub2RlTWFwLl9kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICBlbC5hcHBlbmRDaGlsZCA9IChub2RlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUpXG4gICAgfVxuICAgIGVsLmluc2VydEJlZm9yZSA9IChub2RlLCBiZWZvcmUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSwgYmVmb3JlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudFxufVxuXG5mdW5jdGlvbiBhcHBlbmRCb2R5IChkb2MsIG5vZGUsIGJlZm9yZSkge1xuICBjb25zdCB7IGRvY3VtZW50RWxlbWVudCB9ID0gZG9jXG5cbiAgaWYgKGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ubGVuZ3RoID4gMCB8fCBub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50RWxlbWVudC5jaGlsZHJlblxuICBjb25zdCBiZWZvcmVJbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKVxuICBpZiAoYmVmb3JlSW5kZXggPCAwKSB7XG4gICAgY2hpbGRyZW4ucHVzaChub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNoaWxkcmVuLnNwbGljZShiZWZvcmVJbmRleCwgMCwgbm9kZSlcbiAgfVxuXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgaWYgKG5vZGUucm9sZSA9PT0gJ2JvZHknKSB7XG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBub2RlXG4gICAgICB9KVxuICAgICAgc2V0Qm9keShkb2MsIG5vZGUpXG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIGxpbmtQYXJlbnQobm9kZSwgZG9jdW1lbnRFbGVtZW50KVxuICAgICAgZGVsZXRlIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXVxuICAgIH1cbiAgICBkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLnB1c2gobm9kZSlcbiAgICBkb2MubGlzdGVuZXIuY3JlYXRlQm9keShub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIGRvYy5ub2RlTWFwW25vZGUucmVmXSA9IG5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb2R5IChkb2MsIGVsKSB7XG4gIGVsLnJvbGUgPSAnYm9keSdcbiAgZWwuZGVwdGggPSAxXG4gIGRlbGV0ZSBkb2Mubm9kZU1hcFtlbC5ub2RlSWRdXG4gIGVsLnJlZiA9ICdfcm9vdCdcbiAgZG9jLm5vZGVNYXAuX3Jvb3QgPSBlbFxuICBkb2MuYm9keSA9IGVsXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gIGlmICghdGhpcy5ib2R5KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcylcbiAgICBzZXRCb2R5KHRoaXMsIGVsKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuYm9keVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcykge1xuICByZXR1cm4gbmV3IEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVDb21tZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIG5ldyBDb21tZW50KHRleHQpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVyblxuICB9XG4gIGUgPSBlIHx8IHt9XG4gIGUudHlwZSA9IHR5cGVcbiAgZS50YXJnZXQgPSBlbFxuICBlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgaWYgKGRvbUNoYW5nZXMpIHtcbiAgICB1cGRhdGVFbGVtZW50KGVsLCBkb21DaGFuZ2VzKVxuICB9XG4gIHJldHVybiBlbC5maXJlRXZlbnQodHlwZSwgZSlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmdldFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgcmV0dXJuIHRoaXMubm9kZU1hcFtyZWZdXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQgKGVsLCBjaGFuZ2VzKSB7XG4gIGNvbnN0IGF0dHJzID0gY2hhbmdlcy5hdHRycyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gYXR0cnMpIHtcbiAgICBlbC5zZXRBdHRyKG5hbWUsIGF0dHJzW25hbWVdLCB0cnVlKVxuICB9XG4gIGNvbnN0IHN0eWxlID0gY2hhbmdlcy5zdHlsZSB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGUpIHtcbiAgICBlbC5zZXRTdHlsZShuYW1lLCBzdHlsZVtuYW1lXSwgdHJ1ZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZSAoKSB7XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxuICB0aGlzLnBhcmVudE5vZGUgPSBudWxsXG4gIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsXG4gIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbFxufVxuXG5Ob2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXVxuICBpZiAoZG9jKSB7XG4gICAgZGVsZXRlIHRoaXMuZG9jSWRcbiAgICBkZWxldGUgZG9jLm5vZGVNYXBbdGhpcy5ub2RlSWRdXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBjaGlsZC5kZXN0cm95KClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVsZW1lbnQgKHR5cGUgPSBERUZBVUxUX1RBR19OQU1FLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9XG4gIHRoaXMubm9kZVR5cGUgPSAxXG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuYXR0ciA9IHByb3BzLmF0dHIgfHwge31cbiAgdGhpcy5jbGFzc1N0eWxlID0gcHJvcHMuY2xhc3NTdHlsZSB8fCB7fVxuICB0aGlzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge31cbiAgdGhpcy5ldmVudCA9IHt9XG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkVsZW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIC0xKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChub2RlLCBiZWZvcmUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYmVmb3JlIHx8IG5vZGUubmV4dFNpYmxpbmcgPT09IGJlZm9yZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobm9kZSwgYWZ0ZXIpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYWZ0ZXIgfHwgbm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGFmdGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKG5vZGUsIHByZXNlcnZlZCkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4pXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghcHJlc2VydmVkKSB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgfSlcbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfSlcbiAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwXG4gIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCA9IDBcbn1cblxuZnVuY3Rpb24gbmV4dEVsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c0VsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gbGlua1BhcmVudCAobm9kZSwgcGFyZW50KSB7XG4gIG5vZGUucGFyZW50Tm9kZSA9IHBhcmVudFxuICBpZiAocGFyZW50LmRvY0lkKSB7XG4gICAgbm9kZS5kb2NJZCA9IHBhcmVudC5kb2NJZFxuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50XG4gICAgbm9kZS5vd25lckRvY3VtZW50Lm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxuICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxXG4gIH1cbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsaW5rUGFyZW50KGNoaWxkLCBub2RlKVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck5vZGUgKGRvY0lkLCBub2RlKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW2RvY0lkXVxuICBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG59XG5cbmZ1bmN0aW9uIGluc2VydEluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IDBcbiAgfVxuICBjb25zdCBiZWZvcmUgPSBsaXN0W25ld0luZGV4IC0gMV1cbiAgY29uc3QgYWZ0ZXIgPSBsaXN0W25ld0luZGV4XVxuICBsaXN0LnNwbGljZShuZXdJbmRleCwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlclxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIG1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxuICBsZXQgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4XG4gIGlmIChpbmRleCA8PSBuZXdJbmRleCkge1xuICAgIG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleCAtIDFcbiAgfVxuICBjb25zdCBiZWZvcmVOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXIgLSAxXVxuICBjb25zdCBhZnRlck5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlcl1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXhBZnRlciwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZU5ldyAmJiAoYmVmb3JlTmV3Lm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVOZXdcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlck5ld1xuICAgIGFmdGVyTmV3ICYmIChhZnRlck5ldy5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgaWYgKGluZGV4ID09PSBuZXdJbmRleEFmdGVyKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuYXR0cltrZXldID09PSB2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuYXR0cltrZXldID0gdmFsdWVcbiAgaWYgKCFzaWxlbnQgJiYgdGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICBsaXN0ZW5lci5zZXRBdHRyKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICBpZiAodGhpcy5zdHlsZVtrZXldID09PSB2YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuc3R5bGVba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0U3R5bGUodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0Q2xhc3NTdHlsZSA9IGZ1bmN0aW9uIChjbGFzc1N0eWxlKSB7XG4gIHRoaXMuY2xhc3NTdHlsZSA9IGNsYXNzU3R5bGVcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0U3R5bGVzKHRoaXMucmVmLCB0aGlzLnRvU3R5bGUoKSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdGhpcy5ldmVudFt0eXBlXSkge1xuICAgIHRoaXMuZXZlbnRbdHlwZV0gPSBoYW5kbGVyXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLmFkZEV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRbdHlwZV1cbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnQodGhpcy5yZWYsIHR5cGUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBlKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50W3R5cGVdXG4gIGlmIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBleHRlbmQoe30sIHRoaXMuY2xhc3NTdHlsZSwgdGhpcy5zdHlsZSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgcmVmOiB0aGlzLnJlZi50b1N0cmluZygpLFxuICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICBhdHRyOiB0aGlzLmF0dHIsXG4gICAgc3R5bGU6IHRoaXMudG9TdHlsZSgpXG4gIH1cbiAgY29uc3QgZXZlbnQgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50KVxuICBpZiAoZXZlbnQubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmV2ZW50ID0gZXZlbnRcbiAgfVxuICBpZiAodGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmNoaWxkcmVuID0gdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9KU09OKCkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8JyArIHRoaXMudHlwZSArXG4gICAgJyBhdHRyPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHIpICtcbiAgICAnIHN0eWxlPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRvU3R5bGUoKSkgKyAnPicgK1xuICAgIHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvU3RyaW5nKCkpLmpvaW4oJycpICtcbiAgICAnPC8nICsgdGhpcy50eXBlICsgJz4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50ICh2YWx1ZSkge1xuICB0aGlzLm5vZGVUeXBlID0gOFxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gJ2NvbW1lbnQnXG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5Db21tZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuQ29tbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCEtLSAnICsgdGhpcy52YWx1ZSArICcgLS0+J1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS92ZG9tL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGVuZXIgKGlkLCBoYW5kbGVyKSB7XG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLmJhdGNoZWQgPSBmYWxzZVxuICB0aGlzLnVwZGF0ZXMgPSBbXVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUudXBkYXRlRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbigndXBkYXRlRmluaXNoJywgW10pXSwgY2FsbGJhY2spXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZWZyZXNoRmluaXNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJcbiAgcmV0dXJuIGhhbmRsZXIoW2NyZWF0ZUFjdGlvbigncmVmcmVzaEZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50LnRvSlNPTigpXG4gIGNvbnN0IGNoaWxkcmVuID0gYm9keS5jaGlsZHJlblxuICBkZWxldGUgYm9keS5jaGlsZHJlblxuICBjb25zdCBhY3Rpb25zID0gW2NyZWF0ZUFjdGlvbignY3JlYXRlQm9keScsIFtib2R5XSldXG4gIGlmIChjaGlsZHJlbikge1xuICAgIGFjdGlvbnMucHVzaC5hcHBseShhY3Rpb25zLCBjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbignYWRkRWxlbWVudCcsIFtib2R5LnJlZiwgY2hpbGQsIC0xXSlcbiAgICB9KSlcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHJlZiwgaW5kZXgpIHtcbiAgaWYgKCEoaW5kZXggPj0gMCkpIHtcbiAgICBpbmRleCA9IC0xXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbcmVmLCBlbGVtZW50LnRvSlNPTigpLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSByZWYubWFwKChyKSA9PiBjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcl0pKVxuICAgIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucylcbiAgfVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigncmVtb3ZlRWxlbWVudCcsIFtyZWZdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLm1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleCkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignbW92ZUVsZW1lbnQnLCBbdGFyZ2V0UmVmLCBwYXJlbnRSZWYsIGluZGV4XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVBdHRycycsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAocmVmLCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgcmVzdWx0XSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5zZXRTdHlsZXMgPSBmdW5jdGlvbiAocmVmLCBzdHlsZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlU3R5bGUnLCBbcmVmLCBzdHlsZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAocmVmLCB0eXBlKSB7XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFdmVudCcsIFtyZWYsIHR5cGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigncmVtb3ZlRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5oYW5kbGVyID0gZnVuY3Rpb24gKGFjdGlvbnMsIGNiKSB7XG4gIHJldHVybiBjYiAmJiBjYigpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcbiAgY29uc3QgdXBkYXRlcyA9IHRoaXMudXBkYXRlc1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbnMpKSB7XG4gICAgYWN0aW9ucyA9IFthY3Rpb25zXVxuICB9XG5cbiAgaWYgKHRoaXMuYmF0Y2hlZCkge1xuICAgIHVwZGF0ZXMucHVzaC5hcHBseSh1cGRhdGVzLCBhY3Rpb25zKVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBoYW5kbGVyKGFjdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbiAobmFtZSwgYXJncykge1xuICByZXR1cm4geyBtb2R1bGU6ICdkb20nLCBtZXRob2Q6IG5hbWUsIGFyZ3M6IGFyZ3MgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS92ZG9tL2xpc3RlbmVyLmpzXG4gKiovIiwiLy8gYnVpbHQgYnkgbnBtIHJ1biBidWlsZDpjb25maWdcblxuaW1wb3J0ICogYXMgV2VleCBmcm9tICcuLi9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFdlZXhcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgTWFpbiBlbnRyeSwgaW5zdGFuY2UgbWFuYWdlclxuICpcbiAqIC0gY3JlYXRlSW5zdGFuY2UoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSlcbiAqIC0gcmVmcmVzaEluc3RhbmNlKGluc3RhbmNlSWQsIGRhdGEpXG4gKiAtIGRlc3Ryb3lJbnN0YW5jZShpbnN0YW5jZUlkKVxuICogLSByZWdpc3RlckNvbXBvbmVudHMoY29tcG9uZW50cylcbiAqIC0gcmVnaXN0ZXJNb2R1bGVzKG1vZHVsZXMpXG4gKiAtIGdldFJvb3QoaW5zdGFuY2VJZClcbiAqIC0gaW5zdGFuY2VNYXBcbiAqIC0gY2FsbEpTKGluc3RhbmNlSWQsIHRhc2tzKVxuICogICAtIGZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEpXG4gKiAgIC0gY2FsbGJhY2soZnVuY0lkLCBkYXRhKVxuICovXG5leHBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2NyZWF0ZSdcbmV4cG9ydCB7IGluaXQsIHJlZnJlc2hJbnN0YW5jZSwgZGVzdHJveUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvbGlmZSdcbmV4cG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50cywgcmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHMgfSBmcm9tICcuL3N0YXRpYy9yZWdpc3RlcidcbmV4cG9ydCB7IHJlY2VpdmVUYXNrcyB9IGZyb20gJy4vc3RhdGljL2JyaWRnZSdcbmV4cG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL3N0YXRpYy9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IEFwcEluc3RhbmNlIGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5cbi8qKlxuICogY3JlYXRlIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb24gYEhBU19MT0dgIGVuYWJsZSBwcmludCBsb2dcbiAqIEBwYXJhbSAge29iamVjdH0gW2RhdGFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaW5zdGFuY2VJZCwgY29kZSwgb3B0aW9ucywgZGF0YSkge1xuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCByZXN1bHRcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IEFwcEluc3RhbmNlKGluc3RhbmNlSWQsIG9wdGlvbnMpXG4gICAgaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF0gPSBpbnN0YW5jZVxuICAgIHJlc3VsdCA9IGluc3RhbmNlLmluaXQoY29kZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCB8fCBpbnN0YW5jZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9jcmVhdGUuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFdlZXggaW5zdGFuY2UgY29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgKiBhcyBjdHJsIGZyb20gJy4vY3RybCdcbmltcG9ydCBBcHBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuXG5leHRlbmQoQXBwSW5zdGFuY2UucHJvdG90eXBlLCBjdHJsKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBJbnN0YW5jZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9pbmRleC5qc1xuICoqLyIsImV4cG9ydCB7XG4gIGV4dGVuZCxcbiAgZGVmLFxuICByZW1vdmUsXG4gIGhhc093bixcbiAgYmluZCxcbiAgdG9BcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Rcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzJ1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICBjb25zdCBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApXG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG5leHBvcnQgY29uc3QgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fVxuXG5sZXQgX1NldFxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgU2V0LnRvU3RyaW5nKCkubWF0Y2goL25hdGl2ZSBjb2RlLykpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXRcbn1cbmVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLnNldFtrZXldICE9PSB1bmRlZmluZWRcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGhpcy5zZXRba2V5XSA9IDFcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxufVxuXG5leHBvcnQgeyBfU2V0IH1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl1cbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCB0b1VwcGVyKVxufSlcblxuZnVuY3Rpb24gdG9VcHBlciAoXywgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnXG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFthLXpcXGRdKShbQS1aXSkvZ1xuZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoaHlwaGVuYXRlUkUsICckMS0kMicpXG4gICAgLnRvTG93ZXJDYXNlKClcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBvZiAodikge1xuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpLnRvTG93ZXJDYXNlKClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gaW5pdCBidW5kbGVcbiAqIC0gZmlyZSBldmVudFxuICogLSBjYWxsYmFja1xuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmV4cG9ydCB7IGluaXQgfSBmcm9tICcuL2luaXQnXG5cbmV4cG9ydCB7XG4gIHVwZGF0ZUFjdGlvbnMsXG4gIGRlc3Ryb3ksXG4gIGdldFJvb3RFbGVtZW50LFxuICBmaXJlRXZlbnQsXG4gIGNhbGxiYWNrLFxuICByZWZyZXNoRGF0YVxufSBmcm9tICcuL21pc2MnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgeyBiaW5kIH0gZnJvbSAnLi4vLi4vdXRpbCdcblxuaW1wb3J0IHtcbiAgZGVmaW5lLFxuICBib290c3RyYXAsXG4gIHJlZ2lzdGVyXG59IGZyb20gJy4uL2J1bmRsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNvZGUsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gSW50aWFsaXplIGFuIGluc3RhbmNlIHdpdGg6XFxuJywgZGF0YSlcblxuICBsZXQgcmVzdWx0XG4gIC8vIEBzZWU6IGxpYi9hcHAvYnVuZGxlLmpzXG4gIGNvbnN0IGJ1bmRsZURlZmluZSA9IGJpbmQoZGVmaW5lLCB0aGlzKVxuICBjb25zdCBidW5kbGVCb290c3RyYXAgPSAobmFtZSwgY29uZmlnLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcCh0aGlzLCBuYW1lLCBjb25maWcsIF9kYXRhIHx8IGRhdGEpXG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci5jcmVhdGVGaW5pc2goKVxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEFmdGVyIGludGlhbGl6ZWQgYW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuICB9XG5cbiAgLy8gYmFja3dhcmQocmVnaXN0ZXIvcmVuZGVyKVxuICBjb25zdCBidW5kbGVSZWdpc3RlciA9IGJpbmQocmVnaXN0ZXIsIHRoaXMpXG4gIGNvbnN0IGJ1bmRsZVJlbmRlciA9IChuYW1lLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcCh0aGlzLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cblxuICBjb25zdCBidW5kbGVSZXF1aXJlID0gbmFtZSA9PiBfZGF0YSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKHRoaXMsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGJ1bmRsZURvY3VtZW50ID0gdGhpcy5kb2NcblxuICBsZXQgZnVuY3Rpb25Cb2R5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBgZnVuY3Rpb24gKCkgey4uLn1gIC0+IGB7Li4ufWBcbiAgICAvLyBub3QgdmVyeSBzdHJpY3RcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKCkuc3Vic3RyKDEyKVxuICB9XG4gIGVsc2UgaWYgKGNvZGUpIHtcbiAgICBmdW5jdGlvbkJvZHkgPSBjb2RlLnRvU3RyaW5nKClcbiAgfVxuXG4gIGNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG4gIGlmIChXWEVudmlyb25tZW50ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0gIT09ICdXZWInKSB7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLnJlcXVpcmVNb2R1bGUoJ3RpbWVyJylcbiAgICBjb25zdCB0aW1lckFQSXMgPSB7XG4gICAgICBzZXRUaW1lb3V0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRUaW1lb3V0KGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiB0aGlzLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgc2V0SW50ZXJ2YWw6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldEludGVydmFsKGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiB0aGlzLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgY2xlYXJUaW1lb3V0OiAobikgPT4ge1xuICAgICAgICB0aW1lci5jbGVhclRpbWVvdXQobilcbiAgICAgIH0sXG4gICAgICBjbGVhckludGVydmFsOiAobikgPT4ge1xuICAgICAgICB0aW1lci5jbGVhckludGVydmFsKG4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ3NldFRpbWVvdXQnLFxuICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIHRpbWVyQVBJcy5zZXRUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLnNldEludGVydmFsLFxuICAgICAgdGltZXJBUElzLmNsZWFyVGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhckludGVydmFsKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXApXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvaW5pdC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogYXBpIHRoYXQgaW52b2tlZCBieSBqcyBidW5kbGUgY29kZVxuICpcbiAqIC0gZGVmaW5lKG5hbWUsIGZhY3RvcnkpOiBkZWZpbmUgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gYm9vdHN0cmFwKHR5cGUsIGNvbmZpZywgZGF0YSk6IHJlcXVpcmUgYSBjZXJ0YWluIHR5cGUgJlxuICogICAgICAgICByZW5kZXIgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqXG4gKiBkZXByZWNhdGVkOlxuICogLSByZWdpc3Rlcih0eXBlLCBvcHRpb25zKTogcmVnaXN0ZXIgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gcmVuZGVyKHR5cGUsIGRhdGEpOiByZW5kZXIgYnkgYSBjZXJ0YWluIHR5cGUgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqIC0gcmVxdWlyZSh0eXBlKShkYXRhKTogcmVxdWlyZSBhIHR5cGUgdGhlbiByZW5kZXIgd2l0aCBkYXRhXG4gKi9cblxuZXhwb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnLi9ib290c3RyYXAnXG5leHBvcnQgeyBjbGVhckNvbW1vbk1vZHVsZXMsIGRlZmluZSwgcmVnaXN0ZXIgfSBmcm9tICcuL2RlZmluZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgVm0gZnJvbSAnLi4vLi4vdm0nXG5pbXBvcnQgKiBhcyBkb3duZ3JhZGUgZnJvbSAnLi4vZG93bmdyYWRlJ1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuL21pc2MnXG5cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAgKGFwcCwgbmFtZSwgY29uZmlnLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGJvb3RzdHJhcCBmb3IgJHtuYW1lfWApXG5cbiAgbGV0IGNsZWFuTmFtZVxuXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIC8vIGNoZWNrIGlmIGRlZmluZSBieSBvbGQgJ2RlZmluZScgbWV0aG9kXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFhcHAuY3VzdG9tQ29tcG9uZW50TWFwW2NsZWFuTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cblxuICBpZiAodHlwZW9mIGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC50cmFuc2Zvcm1lclZlcnNpb259YClcbiAgfVxuXG4gIGNvbnN0IF9jaGVja0Rvd25ncmFkZSA9IGRvd25ncmFkZS5jaGVjayhjb25maWcuZG93bmdyYWRlKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKF9jaGVja0Rvd25ncmFkZS5pc0Rvd25ncmFkZSkge1xuICAgIGFwcC5jYWxsVGFza3MoW3tcbiAgICAgIG1vZHVsZTogJ2luc3RhbmNlV3JhcCcsXG4gICAgICBtZXRob2Q6ICdlcnJvcicsXG4gICAgICBhcmdzOiBbXG4gICAgICAgIF9jaGVja0Rvd25ncmFkZS5lcnJvclR5cGUsXG4gICAgICAgIF9jaGVja0Rvd25ncmFkZS5jb2RlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JNZXNzYWdlXG4gICAgICBdXG4gICAgfV0pXG4gICAgcmV0dXJuIG5ldyBFcnJvcihgRG93bmdyYWRlWyR7X2NoZWNrRG93bmdyYWRlLmNvZGV9XTogJHtfY2hlY2tEb3duZ3JhZGUuZXJyb3JNZXNzYWdlfWApXG4gIH1cblxuICBhcHAudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IGFwcCB9LCBudWxsLCBkYXRhKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWRcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnXG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvc2VtdmVyLzUuMi4wL3NlbXZlci9zZW12ZXIuanNcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9wcm9jZXNzLzAuMTEuNS9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQge1xuICByZWdpc3Rlck1vZHVsZXMsXG4gIHJlZ2lzdGVyTWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuZXh0ZW5kKFZtLCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3N0YXRlLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbi8vIGltcG9ydCB7IHB1c2hXYXRjaGVyIH0gZnJvbSAnLi9iYXRjaGVyJ1xuaW1wb3J0IHtcbiAgd2FybixcbiAgcmVtb3ZlLFxuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBwYXJzZVBhdGgsXG4gIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5sZXQgcHJldlRhcmdldFxuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGV4cE9yRm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgICAgICAgICAgIC0ge0FycmF5fSBmaWx0ZXJzXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdHdvV2F5XG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHVzZXJcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBzeW5jXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gbGF6eVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcHJlUHJvY2Vzc11cbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3Bvc3RQcm9jZXNzXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F0Y2hlciAodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKSB7XG4gIC8vIG1peCBpbiBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgZXh0ZW5kKHRoaXMsIG9wdGlvbnMpXG4gIH1cbiAgY29uc3QgaXNGbiA9IHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nXG4gIHRoaXMudm0gPSB2bVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKVxuICB0aGlzLmV4cHJlc3Npb24gPSBleHBPckZuXG4gIHRoaXMuY2IgPSBjYlxuICB0aGlzLmlkID0gKyt1aWQgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWVcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eSAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXVxuICB0aGlzLm5ld0RlcHMgPSBbXVxuICB0aGlzLmRlcElkcyA9IG5ldyBTZXQoKVxuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBTZXQoKVxuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKGlzRm4pIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm5cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKVxuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gZnVuY3Rpb24gKCkge31cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ0ZhaWxlZCB3YXRjaGluZyBwYXRoOiAnICsgZXhwT3JGbiArXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXG4gICAgICAgICdGb3IgZnVsbCBjb250cm9sLCB1c2UgYSBmdW5jdGlvbiBpbnN0ZWFkLicsXG4gICAgICAgIHZtXG4gICAgICApXG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKVxuICAvLyBzdGF0ZSBmb3IgYXZvaWRpbmcgZmFsc2UgdHJpZ2dlcnMgZm9yIGRlZXAgYW5kIEFycmF5XG4gIC8vIHdhdGNoZXJzIGR1cmluZyB2bS5fZGlnZXN0KClcbiAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmVmb3JlR2V0KClcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMudm0sIHRoaXMudm0pXG4gIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgaWYgKHRoaXMuZGVlcCkge1xuICAgIHRyYXZlcnNlKHZhbHVlKVxuICB9XG4gIHRoaXMuYWZ0ZXJHZXQoKVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBQcmVwYXJlIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYmVmb3JlR2V0ID0gZnVuY3Rpb24gKCkge1xuICBwcmV2VGFyZ2V0ID0gRGVwLnRhcmdldFxuICBEZXAudGFyZ2V0ID0gdGhpc1xufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgY29uc3QgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKVxuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcClcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFmdGVyR2V0ID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0ID0gcHJldlRhcmdldFxuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgbGV0IHRtcCA9IHRoaXMuZGVwSWRzXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHNcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKVxuICB0bXAgPSB0aGlzLmRlcHNcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IHRtcFxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMFxufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJ1bigpXG4gIH1cbiAgLy8gfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgLy8gICB0aGlzLnJ1bigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gIC8vICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgLy8gICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAvLyAgICAgPyBzaGFsbG93XG4gIC8vICAgICAgID8gdGhpcy5zaGFsbG93XG4gIC8vICAgICAgIDogZmFsc2VcbiAgLy8gICAgIDogISFzaGFsbG93XG4gIC8vICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gIC8vICAgcHVzaFdhdGNoZXIodGhpcylcbiAgLy8gfVxufVxuXG4vKipcbiAqIEJhdGNoZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBiYXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGF2b2lkIG92ZXJ3cml0aW5nIGFub3RoZXIgd2F0Y2hlciB0aGF0IGlzIGJlaW5nXG4gIC8vIGNvbGxlY3RlZC5cbiAgY29uc3QgY3VycmVudCA9IERlcC50YXJnZXRcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG4gIERlcC50YXJnZXQgPSBjdXJyZW50XG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKVxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U2V0fSBzZWVuXG4gKi9cblxuY29uc3Qgc2Vlbk9iamVjdHMgPSBuZXcgU2V0KClcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgbGV0IGksIGtleXMsIGlzQSwgaXNPXG4gIGlmICghc2Vlbikge1xuICAgIHNlZW4gPSBzZWVuT2JqZWN0c1xuICAgIHNlZW4uY2xlYXIoKVxuICB9XG4gIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICBpc08gPSBpc09iamVjdCh2YWwpXG4gIGlmIChpc0EgfHwgaXNPKSB7XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIGNvbnN0IGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWRcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLmFkZChkZXBJZClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSwgc2VlbilcbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5cbi8qKlxuICogQWRkIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpXG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpXG59XG5cbi8qKlxuICogQWRkIHNlbGYgYXMgYSBkZXBlbmRlbmN5IHRvIHRoZSB0YXJnZXQgd2F0Y2hlci5cbiAqL1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldC5hZGREZXAodGhpcylcbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9kZXAuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHsgYXJyYXlNZXRob2RzIH0gZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7XG4gIGRlZixcbiAgcmVtb3ZlLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGFzUHJvdG8sXG4gIGhhc093bixcbiAgaXNSZXNlcnZlZFxufSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5LCBvYmpba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgcmVtb3ZlKHRoaXMudm1zLCB2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIHZtKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG9iXG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgY29uc3QgZGVwID0gbmV3IERlcCgpXG5cbiAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KVxuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldFxuICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXRcblxuICBsZXQgY2hpbGRPYiA9IG9ic2VydmUodmFsKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsXG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpXG4gICAgICBkZXAubm90aWZ5KClcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpXG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIGlmIChvYmouX2lzVnVlKSB7XG4gICAgc2V0KG9iai5fZGF0YSwga2V5LCB2YWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuXG4gIGlmICghb2IpIHtcbiAgICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgICAgZGVsZXRlIG9iai5fZGF0YVtrZXldXG4gICAgICBvYmouJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgdW5wcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgS0VZX1dPUkRTID0gWyckaW5kZXgnLCAnJHZhbHVlJywgJyRldmVudCddXG5leHBvcnQgZnVuY3Rpb24gcHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKEtFWV9XT1JEUy5pbmRleE9mKGtleSkgPiAtMSB8fCAhaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9kYXRhW2tleV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgICAgdm0uX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdm1ba2V5XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGRlZiB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGVcbmV4cG9ydCBjb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pXG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cblxuO1tcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl1cbi5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIGxldCBpID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfX1xuICAgIGxldCBpbnNlcnRlZFxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMilcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpXG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSlcbn0pXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCBhIG5ldyB2YWx1ZVxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Kn0gLSByZXBsYWNlZCBlbGVtZW50XG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHJlbW92ZScsXG4gIGZ1bmN0aW9uICRyZW1vdmUgKGluZGV4KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mKGluZGV4KVxuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKlxuICogcmVxdWlyZWQ6XG4gKiBpbmRleC5qczogVm1cbiAqIGRvbS1oZWxwZXIuanM6IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUJsb2NrXG4gKiBkb20taGVscGVyLmpzOiBhdHRhY2hUYXJnZXQsIG1vdmVUYXJnZXQsIHJlbW92ZVRhcmdldFxuICogZGlyZWN0aXZlLmpzOiBiaW5kRWxlbWVudCwgYmluZFN1YlZtLCBzZXRJZCwgd2F0Y2hcbiAqIGV2ZW50cy5qczogJG9uXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgY3JlYXRlVm0oKVxuICogICBtZXJnZShleHRlcm5hbERpcnMsIGRpcnMpXG4gKiAgIGNvbXBpbGUodGVtcGxhdGUsIHBhcmVudE5vZGUpXG4gKiAgICAgaWYgKHR5cGUgaXMgY29udGVudCkgY3JlYXRlIGNvbnRlbnROb2RlXG4gKiAgICAgZWxzZSBpZiAoZGlycyBoYXZlIHYtZm9yKSBmb3JlYWNoIC0+IGNyZWF0ZSBjb250ZXh0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dEZvciwgcGFyZW50Tm9kZSk6IGRpZmYobGlzdCkgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1pZikgYXNzZXJ0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dElmLCBwYXJlbnROb2RlKTogdG9nZ2xlKHNob3duKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgZHluYW1pYylcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0RHluYW1pY1R5cGUsIHBhcmVudE5vZGUpOiB3YXRjaCh0eXBlKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgY3VzdG9tKVxuICogICAgICAgYWRkQ2hpbGRWbSh2bSwgcGFyZW50Vm0pXG4gKiAgICAgICBidWlsZChleHRlcm5hbERpcnMpXG4gKiAgICAgICBmb3JlYWNoIGNoaWxkTm9kZXMgLT4gY29tcGlsZShjaGlsZE5vZGUsIHRlbXBsYXRlKVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgbmF0aXZlKVxuICogICAgICAgc2V0KGRpcnMpOiB1cGRhdGUoaWQvYXR0ci9zdHlsZS9jbGFzcykgb25jaGFuZ2VcbiAqICAgICAgIGFwcGVuZCh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAodm0pIHtcbiAgY29uc3Qgb3B0ID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgdGVtcGxhdGUgPSBvcHQudGVtcGxhdGUgfHwge31cblxuICBpZiAob3B0LnJlcGxhY2UpIHtcbiAgICBpZiAodGVtcGxhdGUuY2hpbGRyZW4gJiYgdGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZS5jaGlsZHJlblswXSwgdm0uX3BhcmVudEVsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLCB2bS5fcGFyZW50RWwpXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcInJlYWR5XCIgbGlmZWN5Y2xlIGluIFZtKCR7dm0uX3R5cGV9KWApXG4gIHZtLiRlbWl0KCdob29rOnJlYWR5JylcbiAgdm0uX3JlYWR5ID0gdHJ1ZVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnRzIGJ5IGNoaWxkIG9yIGNoaWxkcmVuIGFuZCBhcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRzLlxuICogUm9vdCBlbGVtZW50IGluZm8gd291bGQgYmUgbWVyZ2VkIGlmIGhhcy4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZSBhbiBhcnJheVxuICogaWYgdGhlIHJvb3QgZWxlbWVudCB3aXRoIG9wdGlvbnMucmVwbGFjZSBoYXMgbm90IG9ubHkgb25lIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cblxuICBpZiAoYXBwLmxhc3RTaWduYWwgPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpKSB7XG4gICAgY29tcGlsZUZyYWdtZW50KHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgbWV0YSA9IG1ldGEgfHwge31cbiAgaWYgKHRhcmdldElzQ29udGVudCh0YXJnZXQpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImNvbnRlbnRcIiBibG9jayBieScsIHRhcmdldClcbiAgICB2bS5fY29udGVudCA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcInJlcGVhdFwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVSZXBlYXQodm0sIHRhcmdldCwgZGVzdClcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVTaG93bih2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBFYWNoIGxpc3QgaXRlbSBtdXN0IGJlIGFuIG9iamVjdCBpbiBvbGQtc3R5bGUgcmVwZWF0LCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBgcmVwZWF0PXt7diBpbiBsaXN0fX1gIGluc3RlYWQuJylcbiAgICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vY29tcGlsZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIERpcmVjdGl2ZSBQYXJzZXJcbiAqL1xuXG5pbXBvcnQgeyBiaW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4uL2NvcmUvd2F0Y2hlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCB7IG5hdGl2ZUNvbXBvbmVudE1hcCB9ID0gY29uZmlnXG5cbmNvbnN0IFNFVFRFUlMgPSB7XG4gIGF0dHI6ICdzZXRBdHRyJyxcbiAgc3R5bGU6ICdzZXRTdHlsZScsXG4gIGV2ZW50OiAnYWRkRXZlbnQnXG59XG5cbi8qKlxuICogYXBwbHkgdGhlIG5hdGl2ZSBjb21wb25lbnQncyBvcHRpb25zKHNwZWNpZmllZCBieSB0ZW1wbGF0ZS50eXBlKVxuICogdG8gdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMgKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGVtcGxhdGVcbiAgY29uc3Qgb3B0aW9ucyA9IG5hdGl2ZUNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAodGVtcGxhdGVba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRlbXBsYXRlW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cG9mKHRlbXBsYXRlW2tleV0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnQgKHZtLCBlbCwgdGVtcGxhdGUpIHtcbiAgc2V0SWQodm0sIGVsLCB0ZW1wbGF0ZS5pZCwgdm0pXG4gIHNldEF0dHIodm0sIGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICBzZXRDbGFzcyh2bSwgZWwsIHRlbXBsYXRlLmNsYXNzTGlzdClcbiAgc2V0U3R5bGUodm0sIGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgYmluZEV2ZW50cyh2bSwgZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm0gKHZtLCBzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB2bSwgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHZtLCBzdWJWbSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQgKHZtLCBzdWJWbSwgdGVtcGxhdGUpIHtcbiAgbWVyZ2VDbGFzc1N0eWxlKHRlbXBsYXRlLmNsYXNzTGlzdCwgdm0sIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB2bSwgc3ViVm0pXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHJldHVyblZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VDbGFzc1N0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBjb25zdCBjc3MgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXN1YlZtLl9yb290RWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgdGFyZ2V0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHZhbHVlKVxuICB9XG4gIGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgaWQgdG8gYW4gZWxlbWVudFxuICogZWFjaCBpZCBpcyB1bmlxdWUgaW4gYSB3aG9sZSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SWQgKHZtLCBlbCwgaWQsIHRhcmdldCkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB0YXJnZXQsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB0YXJnZXQuX3Jvb3RFbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBpZFxuICAgIGlkID0gaGFuZGxlci5jYWxsKHZtKVxuICAgIGlmIChpZCkge1xuICAgICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgd2F0Y2godm0sIGhhbmRsZXIsIChuZXdJZCkgPT4ge1xuICAgICAgaWYgKG5ld0lkKSB7XG4gICAgICAgIHZtLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIgKHZtLCBlbCwgYXR0cikge1xuICBiaW5kRGlyKHZtLCBlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3MgKHZtLCBlbCwgY2xhc3NMaXN0KSB7XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpICYmICFjbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgZWwuc2V0Q2xhc3NTdHlsZSh7fSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjbGFzc0xpc3QsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZSAodm0sIGVsLCBzdHlsZSkge1xuICBiaW5kRGlyKHZtLCBlbCwgJ3N0eWxlJywgc3R5bGUpXG59XG5cbi8qKlxuICogYWRkIGFuIGV2ZW50IHR5cGUgYW5kIGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgZ2VuZXJhdGUgYSBkb20gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50ICh2bSwgZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZWwuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCB2bSkpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnRzICh2bSwgZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIHNldEV2ZW50KHZtLCBlbCwga2V5LCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogc2V0IGEgc2VyaWVzIG9mIG1lbWJlcnMgYXMgYSBraW5kIG9mIGFuIGVsZW1lbnRcbiAqIGZvciBleGFtcGxlOiBzdHlsZSwgYXR0ciwgLi4uXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGJpbmQgdGhlIGRhdGEgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBiaW5kRGlyICh2bSwgZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJpbmRLZXkodm0sIGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsW1NFVFRFUlNbbmFtZV1dKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBkYXRhIGNoYW5nZXMgdG8gYSBjZXJ0YWluIGtleSB0byBhIG5hbWUgc2VyaWVzIGluIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEtleSAodm0sIGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gICAgaWYgKGRpZmZlcikge1xuICAgICAgZGlmZmVyLmFwcGVuZCgnZWxlbWVudCcsIGVsLmRlcHRoLCBlbC5yZWYsIGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCAodm0sIGNhbGMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgY2FsYywgZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiB3YXRjaGVyLnZhbHVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYXRpdmVDb21wb25lbnRNYXA6IHtcbiAgICB0ZXh0OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBzbGlkZXI6IHtcbiAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9LFxuICAgIGNlbGw6IHtcbiAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBFdnQgKHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmIChoYW5kbGVyTGlzdCkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCkge1xuICAgIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2godHlwZSwgZXZ0KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkYnJvYWRjYXN0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9jaGlsZHJlblZtcykge1xuICAgIHRoaXMuX2NoaWxkcmVuVm1zLmZvckVhY2goKHN1YlZtKSA9PiB7XG4gICAgICBzdWJWbS4kYnJvYWRjYXN0KHR5cGUsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGlmICghaGFuZGxlcikge1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZV1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoIWhhbmRsZXJMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaGFuZGxlckxpc3QuJHJlbW92ZShoYW5kbGVyKVxufVxuXG5jb25zdCBMSUZFX0NZQ0xFX1RZUEVTID0gWydpbml0JywgJ2NyZWF0ZWQnLCAncmVhZHknXVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0sIGV4dGVybmFsRXZlbnRzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCBldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCB7fVxuICBmb3IgKGNvbnN0IHR5cGUxIGluIGV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMSwgZXZlbnRzW3R5cGUxXSlcbiAgfVxuICBmb3IgKGNvbnN0IHR5cGUyIGluIGV4dGVybmFsRXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUyLCBleHRlcm5hbEV2ZW50c1t0eXBlMl0pXG4gIH1cbiAgTElGRV9DWUNMRV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgdm0uJG9uKGBob29rOiR7dHlwZX1gLCBvcHRpb25zW3R5cGVdKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5FdmVudHMgKHZtKSB7XG4gIHZtLiRlbWl0ID0gJGVtaXRcbiAgdm0uJGRpc3BhdGNoID0gJGRpc3BhdGNoXG4gIHZtLiRicm9hZGNhc3QgPSAkYnJvYWRjYXN0XG4gIHZtLiRvbiA9ICRvblxuICB2bS4kb2ZmID0gJG9mZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qc1xuICoqLyIsImxldCBuYXRpdmVNb2R1bGVzID0ge31cblxuZnVuY3Rpb24gYXNzaWduTW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG4gICAgLy8gaW5pdCBgbW9kdWxlc1ttb2R1bGVOYW1lXVtdYFxuICAgIGxldCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9XG4gICAgICBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdID0gbWV0aG9kc1xuICAgIH1cblxuICAgIC8vIHB1c2ggZWFjaCBub24tZXhpc3RlZCBuZXcgbWV0aG9kXG4gICAgbW9kdWxlc1ttb2R1bGVOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXRob2QgPSB7XG4gICAgICAgICAgbmFtZTogbWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RzW21ldGhvZC5uYW1lXSB8fCBpZlJlcGxhY2UpIHtcbiAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2RcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkFwaXMgKEN0b3IsIGFwaXMpIHtcbiAgY29uc3QgcCA9IEN0b3IucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXMgKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZSAobW9kdWxlTmFtZSkge1xuICByZXR1cm4gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cblxuICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICAgIHRhcmdldFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB0aGlzLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBAY29udGV4dCBWbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgYXNzaWduTW9kdWxlcyhtb2R1bGVzLCBpZlJlcGxhY2UpXG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAoYXBpcykge1xuICBhc3NpZ25BcGlzKHRoaXMsIGFwaXMpXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUNvbXBvbmVudCAobmFtZSkge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGRlZikge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuXG4gIGlmIChjdXN0b21Db21wb25lbnRNYXBbbmFtZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQoJHtuYW1lfSkgdGhhdCBhbHJlYWR5IGV4aXN0c2ApXG4gICAgcmV0dXJuXG4gIH1cblxuICBjdXN0b21Db21wb25lbnRNYXBbbmFtZV0gPSBkZWZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiBbbm9ybWFsaXplVmVyc2lvbiBkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1N0cmluZ30gVmVyc2lvbi4gaWU6IDEsIDEuMCwgMS4wLjBcbiAqIEByZXR1cm4ge1N0cmluZ30gVmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmVyc2lvbiAodikge1xuICBjb25zdCBpc1ZhbGlkID0gc2VtdmVyLnZhbGlkKHYpXG4gIGlmIChpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIHZcbiAgfVxuXG4gIHYgPSB0eXBlb2YgKHYpID09PSAnc3RyaW5nJyA/IHYgOiAnJ1xuICBjb25zdCBzcGxpdCA9IHYuc3BsaXQoJy4nKVxuICBsZXQgaSA9IDBcbiAgY29uc3QgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoaSA8IDMpIHtcbiAgICBjb25zdCBzID0gdHlwZW9mIChzcGxpdFtpXSkgPT09ICdzdHJpbmcnICYmIHNwbGl0W2ldID8gc3BsaXRbaV0gOiAnMCdcbiAgICByZXN1bHQucHVzaChzKVxuICAgIGkrK1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiB0cnVlLFxuICAgIGVycm9yVHlwZTogMSxcbiAgICBjb2RlOiAxMDAwXG4gIH1cbiAgY29uc3QgZ2V0TXNnID0gZnVuY3Rpb24gKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICAgIHJldHVybiAnRG93bmdyYWRlWycgKyBrZXkgKyAnXSA6OiBkZXZpY2VJbmZvICdcbiAgICAgICsgdmFsICsgJyBtYXRjaGVkIGNyaXRlcmlhICcgKyBjcml0ZXJpYVxuICB9XG4gIGNvbnN0IF9rZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gIHJlc3VsdC5lcnJvck1lc3NhZ2UgPSBnZXRNc2coa2V5LCB2YWwsIGNyaXRlcmlhKVxuXG4gIGlmIChfa2V5LmluZGV4T2YoJ29zdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDFcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2FwcHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAyXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCd3ZWV4dmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDNcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwNFxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFdFRVggZnJhbWV3b3JrIGlucHV0KGRldmljZUluZm8pXG4gKiB7XG4gKiAgIHBsYXRmb3JtOiAnaU9TJyBvciAnYW5kcm9pZCdcbiAqICAgb3NWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBhcHBWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICB3ZWV4VmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgZERldmljZU1vZGVsOiAnTU9ERUxfTkFNRSdcbiAqIH1cbiAqXG4gKiBkb3duZ3JhZGUgY29uZmlnKGNvbmZpZylcbiAqIHtcbiAqICAgaW9zOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfSxcbiAqICAgYW5kcm9pZDoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH1cbiAqIH1cbiAqXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBkZXZpY2VJbmZvIFdlZXggU0RLIGZyYW1ld29yayBpbnB1dFxuICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgICAgIHVzZXIgaW5wdXRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICB7IGlzRG93bmdyYWRlOiB0cnVlL2ZhbHNlLCBlcnJvck1lc3NhZ2UuLi4gfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sgKGNvbmZpZywgZGV2aWNlSW5mbykge1xuICBkZXZpY2VJbmZvID0gZGV2aWNlSW5mbyB8fCBnbG9iYWwuV1hFbnZpcm9ubWVudFxuICBkZXZpY2VJbmZvID0gaXNQbGFpbk9iamVjdChkZXZpY2VJbmZvKSA/IGRldmljZUluZm8gOiB7fVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IGZhbHNlIC8vIGRlZmF1dGwgaXMgcGFzc1xuICB9XG5cbiAgaWYgKHR5cG9mKGNvbmZpZykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgY3VzdG9tRG93bmdyYWRlID0gY29uZmlnLmNhbGwodGhpcywgZGV2aWNlSW5mbywge1xuICAgICAgc2VtdmVyOiBzZW12ZXIsXG4gICAgICBub3JtYWxpemVWZXJzaW9uOiB0aGlzLm5vcm1hbGl6ZVZlcnNpb25cbiAgICB9KVxuXG4gICAgY3VzdG9tRG93bmdyYWRlID0gISFjdXN0b21Eb3duZ3JhZGVcblxuICAgIHJlc3VsdCA9IGN1c3RvbURvd25ncmFkZSA/IHRoaXMuZ2V0RXJyb3IoJ2N1c3RvbScsICcnLCAnY3VzdG9tIHBhcmFtcycpIDogcmVzdWx0XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cblxuICAgIGNvbnN0IHBsYXRmb3JtID0gZGV2aWNlSW5mby5wbGF0Zm9ybSB8fCAndW5rbm93J1xuICAgIGNvbnN0IGRQbGF0Zm9ybSA9IHBsYXRmb3JtLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBjT2JqID0gY29uZmlnW2RQbGF0Zm9ybV0gfHwge31cblxuICAgIGZvciAoY29uc3QgaSBpbiBkZXZpY2VJbmZvKSB7XG4gICAgICBjb25zdCBrZXkgPSBpXG4gICAgICBjb25zdCBrZXlMb3dlciA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCB2YWwgPSBkZXZpY2VJbmZvW2ldXG4gICAgICBjb25zdCBpc1ZlcnNpb24gPSBrZXlMb3dlci5pbmRleE9mKCd2ZXJzaW9uJykgPj0gMFxuICAgICAgY29uc3QgaXNEZXZpY2VNb2RlbCA9IGtleUxvd2VyLmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMFxuICAgICAgY29uc3QgY3JpdGVyaWEgPSBjT2JqW2ldXG5cbiAgICAgIGlmIChjcml0ZXJpYSAmJiBpc1ZlcnNpb24pIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihjcml0ZXJpYSlcbiAgICAgICAgY29uc3QgZCA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihkZXZpY2VJbmZvW2ldKVxuXG4gICAgICAgIGlmIChzZW12ZXIuc2F0aXNmaWVzKGQsIGMpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNEZXZpY2VNb2RlbCkge1xuICAgICAgICBjb25zdCBfY3JpdGVyaWEgPSB0eXBvZihjcml0ZXJpYSkgPT09ICdhcnJheScgPyBjcml0ZXJpYSA6IFtjcml0ZXJpYV1cbiAgICAgICAgaWYgKF9jcml0ZXJpYS5pbmRleE9mKHZhbCkgPj0gMCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qc1xuICoqLyIsImNvbnN0IFdFRVhfQ09NUE9ORU5UX1JFRyA9IC9eQHdlZXgtY29tcG9uZW50XFwvL1xuY29uc3QgV0VFWF9NT0RVTEVfUkVHID0gL15Ad2VleC1tb2R1bGVcXC8vXG5jb25zdCBOT1JNQUxfTU9EVUxFX1JFRyA9IC9eXFwuezEsMn1cXC8vXG5jb25zdCBKU19TVVJGSVhfUkVHID0gL1xcLmpzJC9cblxuZXhwb3J0IGNvbnN0IGlzV2VleENvbXBvbmVudCA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfQ09NUE9ORU5UX1JFRylcbmV4cG9ydCBjb25zdCBpc1dlZXhNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX01PRFVMRV9SRUcpXG5leHBvcnQgY29uc3QgaXNOb3JtYWxNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChOT1JNQUxfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05wbU1vZHVsZSA9IG5hbWUgPT4gIWlzV2VleENvbXBvbmVudChuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzV2VleE1vZHVsZShuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzTm9ybWFsTW9kdWxlKG5hbWUpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFdFRVhfQ09NUE9ORU5UX1JFRywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoV0VFWF9NT0RVTEVfUkVHLCAnJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTU3VyZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKEpTX1NVUkZJWF9SRUcsICcnKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvbWlzYy5qc1xuICoqLyIsImltcG9ydCB7IHR5cG9mIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCBWbSBmcm9tICcuLi8uLi92bSdcbmltcG9ydCB7XG4gIGlzV2VleENvbXBvbmVudCxcbiAgaXNXZWV4TW9kdWxlLFxuICBpc05vcm1hbE1vZHVsZSxcbiAgaXNOcG1Nb2R1bGUsXG4gIHJlbW92ZVdlZXhQcmVmaXgsXG4gIHJlbW92ZUpTU3VyZml4XG59IGZyb20gJy4vbWlzYydcblxubGV0IGNvbW1vbk1vZHVsZXMgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21tb25Nb2R1bGVzICgpIHtcbiAgY29tbW9uTW9kdWxlcyA9IHt9XG59XG5cbi8vIGRlZmluZShuYW1lLCBmYWN0b3J5KSBmb3IgcHJpbWFyeSB1c2FnZVxuLy8gb3Jcbi8vIGRlZmluZShuYW1lLCBkZXBzLCBmYWN0b3J5KSBmb3IgY29tcGF0aWJpbGl0eVxuLy8gTm90aWNlOiBETyBOT1QgdXNlIGZ1bmN0aW9uIGRlZmluZSgpIHt9LFxuLy8gaXQgd2lsbCBjYXVzZSBlcnJvciBhZnRlciBidWlsZGVkIGJ5IHdlYnBhY2tcbmV4cG9ydCBjb25zdCBkZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgZmFjdG9yeSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQgJHtuYW1lfWApXG5cbiAgaWYgKHR5cG9mKGRlcHMpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlcHNcbiAgICBkZXBzID0gW11cbiAgfVxuXG4gIGNvbnN0IF9yZXF1aXJlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgY2xlYW5OYW1lXG5cbiAgICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICByZXR1cm4gdGhpcy5yZXF1aXJlQ29tcG9uZW50KGNsZWFuTmFtZSlcbiAgICB9XG4gICAgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZU1vZHVsZShjbGVhbk5hbWUpXG4gICAgfVxuICAgIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgIHJldHVybiBjb21tb25Nb2R1bGVzW25hbWVdXG4gICAgfVxuICAgIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgIHJldHVybiBjb21tb25Nb2R1bGVzW25hbWVdXG4gICAgfVxuICB9XG4gIGNvbnN0IF9tb2R1bGUgPSB7IGV4cG9ydHM6IHt9fVxuXG4gIGxldCBjbGVhbk5hbWVcbiAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIHRoaXMucmVnaXN0ZXJDb21wb25lbnQoY2xlYW5OYW1lLCBfbW9kdWxlLmV4cG9ydHMpXG4gIH1cbiAgZWxzZSBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgVm0ucmVnaXN0ZXJNb2R1bGVzKHtcbiAgICAgIFtjbGVhbk5hbWVdOiBfbW9kdWxlLmV4cG9ydHNcbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXSA9IF9tb2R1bGUuZXhwb3J0c1xuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIGNvbnN0IGV4cG9ydHMgPSBfbW9kdWxlLmV4cG9ydHNcbiAgICBpZiAoZXhwb3J0cy50ZW1wbGF0ZSB8fFxuICAgICAgICBleHBvcnRzLnN0eWxlIHx8XG4gICAgICAgIGV4cG9ydHMubWV0aG9kcykge1xuICAgICAgLy8gZG93bmdyYWRlIHRvIG9sZCBkZWZpbmUgbWV0aG9kIChkZWZpbmUoJ2NvbXBvbmVudE5hbWUnLCBmYWN0b3J5KSlcbiAgICAgIC8vIHRoZSBleHBvcnRzIGNvbnRhaW4gb25lIGtleSBvZiB0ZW1wbGF0ZSwgc3R5bGUgb3IgbWV0aG9kc1xuICAgICAgLy8gYnV0IGl0IGhhcyByaXNrISEhXG4gICAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KGNsZWFuTmFtZSwgZXhwb3J0cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBfbW9kdWxlLmV4cG9ydHNcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIgKHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHRoaXMucmVnaXN0ZXJDb21wb25lbnQodHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2RlZmluZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aW9ucyAoKSB7XG4gIHRoaXMuZGlmZmVyLmZsdXNoKClcbiAgY29uc3QgdGFza3MgPSBbXVxuICBpZiAodGhpcy5kb2MgJiYgdGhpcy5kb2MubGlzdGVuZXIgJiYgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZXMpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcyA9IFtdXG4gIH1cbiAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxUYXNrcyh0YXNrcylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIERlc3RvcnkgYW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuXG4gIHRoaXMuaWQgPSAnJ1xuICB0aGlzLm9wdGlvbnMgPSBudWxsXG4gIHRoaXMuYmxvY2tzID0gbnVsbFxuICB0aGlzLnZtID0gbnVsbFxuICB0aGlzLmRvYyA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSBudWxsXG4gIHRoaXMuY2FsbGJhY2tzID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdEVsZW1lbnQgKCkge1xuICBjb25zdCBkb2MgPSB0aGlzLmRvYyB8fCB7fVxuICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwge31cbiAgcmV0dXJuIGJvZHkudG9KU09OID8gYm9keS50b0pTT04oKSA6IHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJlRXZlbnQgKHJlZiwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBGaXJlIGEgXCIke3R5cGV9XCIgZXZlbnQgb24gYW4gZWxlbWVudCgke3JlZn0pIGluIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIHJlZi5zb21lKChyZWYpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmZpcmVFdmVudChyZWYsIHR5cGUsIGUpICE9PSBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBlbCA9IHRoaXMuZG9jLmdldFJlZihyZWYpXG5cbiAgaWYgKGVsKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZG9jLmZpcmVFdmVudChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcylcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBlbGVtZW50IHJlZmVyZW5jZSBcIiR7cmVmfVwiYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrIChjYWxsYmFja0lkLCBkYXRhLCBpZktlZXBBbGl2ZSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBJbnZva2UgYSBjYWxsYmFjaygke2NhbGxiYWNrSWR9KSB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG5cbiAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrc1tjYWxsYmFja0lkXVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgY2FsbGJhY2soZGF0YSkgLy8gZGF0YSBpcyBhbHJlYWR5IGEgb2JqZWN0LCBAc2VlOiBsaWIvcnVudGltZS9pbmRleC5qc1xuXG4gICAgaWYgKHR5cGVvZiBpZktlZXBBbGl2ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWZLZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICB0aGlzLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgY2FsbGJhY2sgaWQgXCIke2NhbGxiYWNrSWR9XCJgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaERhdGEgKGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gUmVmcmVzaCB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZVske3RoaXMuaWR9XWApXG5cbiAgY29uc3Qgdm0gPSB0aGlzLnZtXG5cbiAgaWYgKHZtICYmIGRhdGEpIHtcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgaWYgKHR5cGVvZiB2bS5yZWZyZXNoRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm0ucmVmcmVzaERhdGEoZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHRlbmQodm0sIGRhdGEpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIucmVmcmVzaEZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGRhdGEgXCIke2RhdGF9XCJgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL21pc2MuanNcbiAqKi8iLCJpbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBEaWZmZXIgZnJvbSAnLi9kaWZmZXInXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQsIHJlcXVpcmVDb21wb25lbnQsIHJlcXVpcmVNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBJbnN0YW5jZSAoaW5zdGFuY2VJZCwgb3B0aW9ucykge1xuICB0aGlzLmlkID0gaW5zdGFuY2VJZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpbnN0YW5jZUlkLFxuICAgIHRoaXMub3B0aW9ucy5idW5kbGVVcmwsXG4gICAgbnVsbCxcbiAgICByZW5kZXJlci5MaXN0ZW5lclxuICApXG4gIHRoaXMuZGlmZmVyID0gbmV3IERpZmZlcihpbnN0YW5jZUlkKVxuICB0aGlzLnVpZCA9IDBcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplIChhcHAsIHYpIHtcbiAgY29uc3QgdHlwZSA9IHR5cG9mKHYpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICBjYXNlICdudWxsJzpcbiAgICAgIHJldHVybiAnJ1xuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICByZXR1cm4gdi50b1N0cmluZygpXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gdi50b0lTT1N0cmluZygpXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiByZW5kZXJlci5FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2LnJlZlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBhcHAuY2FsbGJhY2tzWysrYXBwLnVpZF0gPSB2XG4gICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KVxuICB9XG59XG5cbkFwcEluc3RhbmNlLnByb3RvdHlwZS5jYWxsVGFza3MgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgaWYgKHR5cG9mKHRhc2tzKSAhPT0gJ2FycmF5Jykge1xuICAgIHRhc2tzID0gW3Rhc2tzXVxuICB9XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYXJncyA9IHRhc2suYXJncy5tYXAoYXJnID0+IG5vcm1hbGl6ZSh0aGlzLCBhcmcpKVxuICB9KVxuXG4gIHJldHVybiByZW5kZXJlci5zZW5kVGFza3ModGhpcy5pZCwgdGFza3MsICctMScpXG59XG5cbmV4dGVuZChBcHBJbnN0YW5jZS5wcm90b3R5cGUsIHtcbiAgcmVnaXN0ZXJDb21wb25lbnQsXG4gIHJlcXVpcmVDb21wb25lbnQsXG4gIHJlcXVpcmVNb2R1bGVcbn0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZmVyIHtcbiAgY29uc3RydWN0b3IgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5tYXAgPSBbXVxuICAgIHRoaXMuaG9va3MgPSBbXVxuICB9XG4gIGlzRW1wdHkgKCkge1xuICAgIHJldHVybiB0aGlzLm1hcC5sZW5ndGggPT09IDBcbiAgfVxuICBhcHBlbmQgKHR5cGUsIGRlcHRoLCByZWYsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuaGFzVGltZXIpIHtcbiAgICAgIHRoaXMuaGFzVGltZXIgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNUaW1lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuZmx1c2godHJ1ZSlcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwXG4gICAgaWYgKCFtYXBbZGVwdGhdKSB7XG4gICAgICBtYXBbZGVwdGhdID0ge31cbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSBtYXBbZGVwdGhdXG4gICAgaWYgKCFncm91cFt0eXBlXSkge1xuICAgICAgZ3JvdXBbdHlwZV0gPSB7fVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICBpZiAoIWdyb3VwW3R5cGVdW3JlZl0pIHtcbiAgICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IFtdXG4gICAgICB9XG4gICAgICBncm91cFt0eXBlXVtyZWZdLnB1c2goaGFuZGxlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBncm91cFt0eXBlXVtyZWZdID0gaGFuZGxlclxuICAgIH1cbiAgfVxuICBmbHVzaCAoaXNUaW1lb3V0KSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXAuc2xpY2UoKVxuICAgIHRoaXMubWFwLmxlbmd0aCA9IDBcbiAgICBtYXAuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGNhbGxUeXBlTWFwKGdyb3VwLCAncmVwZWF0JylcbiAgICAgIGNhbGxUeXBlTWFwKGdyb3VwLCAnc2hvd24nKVxuICAgICAgY2FsbFR5cGVMaXN0KGdyb3VwLCAnZWxlbWVudCcpXG4gICAgfSlcblxuICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5zbGljZSgpXG4gICAgdGhpcy5ob29rcy5sZW5ndGggPSAwXG4gICAgaG9va3MuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGZuKClcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5mbHVzaCgpXG4gICAgfVxuICB9XG4gIHRoZW4gKGZuKSB7XG4gICAgdGhpcy5ob29rcy5wdXNoKGZuKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTWFwIChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBtYXBbcmVmXSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVMaXN0IChncm91cCwgdHlwZSkge1xuICBjb25zdCBtYXAgPSBncm91cFt0eXBlXVxuICBmb3IgKGNvbnN0IHJlZiBpbiBtYXApIHtcbiAgICBjb25zdCBsaXN0ID0gbWFwW3JlZl1cbiAgICBsaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHsgaGFuZGxlcigpIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvZGlmZmVyLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWFwLmpzXG4gKiovIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY2ZnKSB7XG4gIGNvbmZpZy5Eb2N1bWVudCA9IGNmZy5Eb2N1bWVudFxuICBjb25maWcuRWxlbWVudCA9IGNmZy5FbGVtZW50XG4gIGNvbmZpZy5Db21tZW50ID0gY2ZnLkNvbW1lbnRcbiAgY29uZmlnLnNlbmRUYXNrcyA9IGNmZy5zZW5kVGFza3NcbiAgY29uZmlnLkxpc3RlbmVyID0gY2ZnLkxpc3RlbmVyXG59XG5cbi8qKlxuICogcmVmcmVzaCBhIFdlZXggaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEluc3RhbmNlIChpbnN0YW5jZUlkLCBkYXRhKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5yZWZyZXNoRGF0YShkYXRhKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIGRlc3Ryb3kgYSBXZWV4IGluc3RhbmNlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lJbnN0YW5jZSAoaW5zdGFuY2VJZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuXG4gIGluc3RhbmNlLmRlc3Ryb3koKVxuICBkZWxldGUgaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgcmV0dXJuIGluc3RhbmNlTWFwXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL2xpZmUuanNcbiAqKi8iLCJpbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuY29uc3Qge1xuICBuYXRpdmVDb21wb25lbnRNYXBcbn0gPSBjb25maWdcblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBvZiBlYWNoIG5hdGl2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge2FycmF5fSBjb21wb25lbnRzIGFycmF5IG9mIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyAoY29tcG9uZW50cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiByZWdpc3RlciAobmFtZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmFtZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZS50eXBlXSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBtb2R1bGVcbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBhcGlcbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKGFwaXMpIHtcbiAgaWYgKHR5cGVvZiBhcGlzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTWV0aG9kcyhhcGlzKVxuICB9XG59XG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL3JlZ2lzdGVyLmpzXG4gKiovIiwiaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcblxuY29uc3QganNIYW5kbGVycyA9IHtcbiAgZmlyZUV2ZW50OiBmdW5jdGlvbiBmaXJlRXZlbnQgKGluc3RhbmNlSWQsIHJlZiwgdHlwZSwgZGF0YSwgZG9tQ2hhbmdlcykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZGF0YSwgZG9tQ2hhbmdlcylcbiAgfSxcblxuICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sgKGluc3RhbmNlSWQsIGZ1bmNJZCwgZGF0YSwgaWZMYXN0KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICAgIHJldHVybiBpbnN0YW5jZS5jYWxsYmFjayhmdW5jSWQsIGRhdGEsIGlmTGFzdClcbiAgfVxufVxuXG4vKipcbiAqIGFjY2VwdCBjYWxscyBmcm9tIG5hdGl2ZSAoZXZlbnQgb3IgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHthcnJheX0gdGFza3MgbGlzdCB3aXRoIGBtZXRob2RgIGFuZCBgYXJnc2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUYXNrcyAoaW5zdGFuY2VJZCwgdGFza3MpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBpZiAoaW5zdGFuY2UgJiYgQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW11cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0ganNIYW5kbGVyc1t0YXNrLm1ldGhvZF1cbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4udGFzay5hcmdzXVxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChpbnN0YW5jZUlkKVxuICAgICAgICByZXN1bHRzLnB1c2goaGFuZGxlciguLi5hcmdzKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cIiBvciB0YXNrc2ApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL2JyaWRnZS5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5cbi8qKlxuICogZ2V0IGEgd2hvbGUgZWxlbWVudCB0cmVlIG9mIGFuIGluc3RhbmNlXG4gKiBmb3IgZGVidWdnaW5nXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5nZXRSb290RWxlbWVudCgpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21pc2MuanNcbiAqKi8iLCJsZXQgZnJhbWV3b3Jrc1xuXG5jb25zdCB2ZXJzaW9uUmVnRXhwID0gL15cXC9cXC8gKihcXHtbXlxcfV0qXFx9KSAqXFxyP1xcbi9cblxuZnVuY3Rpb24gY2hlY2tWZXJzaW9uIChjb2RlKSB7XG4gIGxldCBpbmZvXG4gIGNvbnN0IHJlc3VsdCA9IHZlcnNpb25SZWdFeHAuZXhlYyhjb2RlKVxuICBpZiAocmVzdWx0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGluZm8gPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIGluZm9cbn1cblxuY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSkge1xuICBsZXQgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoIWluZm8pIHtcbiAgICBpbmZvID0gY2hlY2tWZXJzaW9uKGNvZGUpIHx8IHt9XG4gICAgaWYgKCFmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgaW5mby5mcmFtZXdvcmsgPSAnV2VleCdcbiAgICB9XG4gICAgaW5zdGFuY2VNYXBbaWRdID0gaW5mb1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuICAgIGNvbmZpZy5idW5kbGVWZXJzaW9uID0gaW5mby52ZXJzaW9uXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY3JlYXRlIGFuICR7aW5mby5mcmFtZXdvcmt9QCR7Y29uZmlnLmJ1bmRsZVZlcnNpb259IGluc3RhbmNlIGZyb20gJHtjb25maWcuYnVuZGxlVmVyc2lvbn1gKVxuICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXS5jcmVhdGVJbnN0YW5jZShpZCwgY29kZSwgY29uZmlnLCBkYXRhKVxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbn1cblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgY3JlYXRlSW5zdGFuY2Vcbn1cblxuZnVuY3Rpb24gZ2VuSW5pdCAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZnJhbWV3b3Jrcykge1xuICAgICAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICAgICAgaWYgKGZyYW1ld29yayAmJiBmcmFtZXdvcmtbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgZnJhbWV3b3JrW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbkluc3RhbmNlIChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICAgIGZyYW1ld29yay5pbml0KGNvbmZpZylcbiAgfVxuXG4gIDsgWydkZXN0cm95SW5zdGFuY2UnLCAncmVmcmVzaEluc3RhbmNlJywgJ3JlY2VpdmVUYXNrcycsICdnZXRSb290J10uZm9yRWFjaChnZW5JbnN0YW5jZSlcblxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgYWRhcHRJbnN0YW5jZSgncmVjZWl2ZVRhc2tzJywgJ2NhbGxKUycpXG5cbiAgcmV0dXJuIG1ldGhvZHNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9pbml0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcIndlZXhcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMC40LjBcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkEgZnJhbWV3b3JrIGZvciBidWlsZGluZyBNb2JpbGUgY3Jvc3MtcGxhdGZvcm0gVUlcIixcblx0XCJsaWNlbnNlXCI6IFwiQXBhY2hlLTIuMFwiLFxuXHRcInJlcG9zaXRvcnlcIjoge1xuXHRcdFwidHlwZVwiOiBcImdpdFwiLFxuXHRcdFwidXJsXCI6IFwiZ2l0QGdpdGh1Yi5jb206YWxpYmFiYS93ZWV4LmdpdFwiXG5cdH0sXG5cdFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vYWxpYmFiYS5naXRodWIuaW8vd2VleC9cIixcblx0XCJidWdzXCI6IHtcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGliYWJhL3dlZXgvaXNzdWVzXCJcblx0fSxcblx0XCJwcml2YXRlXCI6IHRydWUsXG5cdFwia2V5d29yZHNcIjogW1xuXHRcdFwid2VleFwiLFxuXHRcdFwiaHlicmlkXCIsXG5cdFx0XCJ3ZWJjb21wb25lbnRcIixcblx0XHRcImFwcGZyYW1ld29ya1wiLFxuXHRcdFwibXZ2bVwiLFxuXHRcdFwiamF2YXNjcmlwdFwiLFxuXHRcdFwid2Via2l0XCIsXG5cdFx0XCJ2OFwiLFxuXHRcdFwianNjb3JlXCIsXG5cdFx0XCJodG1sNVwiLFxuXHRcdFwiYW5kcm9pZFwiLFxuXHRcdFwiaW9zXCIsXG5cdFx0XCJ5dW5vc1wiXG5cdF0sXG5cdFwiZW5naW5lc1wiOiB7XG5cdFx0XCJub2RlXCI6IFwiPj00XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcInBvc3RpbnN0YWxsXCI6IFwiYmFzaCAuL2Jpbi9pbnN0YWxsLWhvb2tzLnNoXCIsXG5cdFx0XCJidWlsZDpjb25maWdcIjogXCJub2RlIGJ1aWxkL2NvbmZpZy5mcmFtZXdvcmtzLmpzXCIsXG5cdFx0XCJidWlsZDpicm93c2VyXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpjb21tb25cIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suY29tbW9uLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6bmF0aXZlXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLm5hdGl2ZS5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOmV4YW1wbGVzXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmV4YW1wbGVzLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6dGVzdFwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay50ZXN0LmNvbmZpZy5qc1wiLFxuXHRcdFwiZGlzdDpicm93c2VyXCI6IFwibnBtIHJ1biBidWlsZDpicm93c2VyICYmIG5wbSBydW4gYnVpbGQ6Y29tbW9uICYmIGJhc2ggLi9iaW4vZGlzdC1icm93c2VyLnNoXCIsXG5cdFx0XCJkaXN0XCI6IFwibnBtIHJ1biBkaXN0OmJyb3dzZXJcIixcblx0XHRcImRldjpicm93c2VyXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suYnJvd3Nlci5jb25maWcuanNcIixcblx0XHRcImRldjpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5uYXRpdmUuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5leGFtcGxlcy5jb25maWcuanNcIixcblx0XHRcImRldjp0ZXN0XCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2sudGVzdC5jb25maWcuanNcIixcblx0XHRcImJ1aWxkXCI6IFwibnBtIHJ1biBidWlsZDpuYXRpdmUgJiYgbnBtIHJ1biBidWlsZDpicm93c2VyICYmIG5wbSBydW4gYnVpbGQ6ZXhhbXBsZXMgJiYgbnBtIHJ1biBidWlsZDp0ZXN0XCIsXG5cdFx0XCJsaW50XCI6IFwiZXNsaW50IGh0bWw1XCIsXG5cdFx0XCJ0ZXN0OnVuaXRcIjogXCJtb2NoYSAtLWNvbXBpbGVycyBqczpiYWJlbC1jb3JlL3JlZ2lzdGVyIGh0bWw1L3Rlc3QvdW5pdC8qLyouanMgaHRtbDUvdGVzdC91bml0LyovKi8qLmpzXCIsXG5cdFx0XCJ0ZXN0OmNvdmVyXCI6IFwiYmFiZWwtbm9kZSBub2RlX21vZHVsZXMvaXNwYXJ0YS9iaW4vaXNwYXJ0YSBjb3ZlciAtLXJlcG9ydCB0ZXh0IG5vZGVfbW9kdWxlcy9tb2NoYS9iaW4vX21vY2hhIC0tIC0tcmVwb3J0ZXIgZG90IGh0bWw1L3Rlc3QvdW5pdC8qLyouanMgaHRtbDUvdGVzdC91bml0LyovKi8qLmpzXCIsXG5cdFx0XCJ0ZXN0OmUyZVwiOiBcIm5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBub2RlIGh0bWw1L3Rlc3QvZTJlL3J1bm5lci5qc1wiLFxuXHRcdFwidGVzdFwiOiBcIm5wbSBydW4gYnVpbGQ6Y29uZmlnICYmIG5wbSBydW4gbGludCAmJiBucG0gcnVuIHRlc3Q6Y292ZXIgJiYgbnBtIHJ1biB0ZXN0OmUyZVwiLFxuXHRcdFwic2VydmVcIjogXCJzZXJ2ZSAuLyAtcCAxMjU4MFwiLFxuXHRcdFwiY2xlYW46ZXhhbXBsZXNcIjogXCJlY2hvIFxcXCJcXFxcMDMzWzM2OzFtW0NsZWFuXVxcXFwwMzNbMG0gXFxcXDAzM1szM21leGFtcGxlc1xcXFwwMzNbMG1cXFwiICYmIHJtIC12cmYgZXhhbXBsZXMvYnVpbGQvKlwiLFxuXHRcdFwiY2xlYW46dGVzdFwiOiBcImVjaG8gXFxcIlxcXFwwMzNbMzY7MW1bQ2xlYW5dXFxcXDAzM1swbSBcXFxcMDMzWzMzbXRlc3RcXFxcMDMzWzBtXFxcIiAmJiBybSAtdnJmIHRlc3QvYnVpbGQvKlwiLFxuXHRcdFwiY2xlYW5cIjogXCJucG0gcnVuIGNsZWFuOmV4YW1wbGVzICYmIG5wbSBydW4gY2xlYW46dGVzdFwiLFxuXHRcdFwiY29weTpqc1wiOiBcImNwIC12ZiAuL2Rpc3QvbmF0aXZlLmpzIC4vYW5kcm9pZC9zZGsvYXNzZXRzL21haW4uanNcIixcblx0XHRcImNvcHk6ZXhhbXBsZXNcIjogXCJybSAtcmYgLi9hbmRyb2lkL3BsYXlncm91bmQvYXBwL3NyYy9tYWluL2Fzc2V0cy8qICYmIGNwIC12cmYgLi9leGFtcGxlcy9idWlsZC8qIC4vYW5kcm9pZC9wbGF5Z3JvdW5kL2FwcC9zcmMvbWFpbi9hc3NldHMvXCIsXG5cdFx0XCJjb3B5XCI6IFwibnBtIHJ1biBjb3B5OmpzICYmIG5wbSBydW4gY29weTpleGFtcGxlc1wiXG5cdH0sXG5cdFwic3VidmVyc2lvblwiOiB7XG5cdFx0XCJicm93c2VyXCI6IFwiMC4zLjJcIixcblx0XHRcImZyYW1ld29ya1wiOiBcIjAuMTUuMlwiLFxuXHRcdFwidHJhbnNmb3JtZXJcIjogXCI+PTAuMS41IDwwLjRcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJhbmltYXRpb25qc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwiY29yZS1qc1wiOiBcIl4yLjQuMFwiLFxuXHRcdFwiY3ViaWNiZXppZXJcIjogXCJeMC4xLjFcIixcblx0XHRcImVudmRcIjogXCJeMC4xLjFcIixcblx0XHRcImh0dHB1cmxcIjogXCJeMC4xLjFcIixcblx0XHRcImxhenlpbWdcIjogXCJeMC4xLjJcIixcblx0XHRcIm1vZGFsc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwic2Nyb2xsLXRvXCI6IFwiMC4wLjJcIixcblx0XHRcInNlbXZlclwiOiBcIl41LjEuMFwiLFxuXHRcdFwid2VleC1jb21wb25lbnRzXCI6IFwiXjAuMS4zXCJcblx0fSxcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYmFiZWwtY2xpXCI6IFwifjYuNC41XCIsXG5cdFx0XCJiYWJlbC1sb2FkZXJcIjogXCJeNi4yLjRcIixcblx0XHRcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi45LjBcIixcblx0XHRcImNoYWlcIjogXCJeMy41LjBcIixcblx0XHRcImNocm9tZWRyaXZlclwiOiBcIl4yLjIxLjJcIixcblx0XHRcImNyb3NzLXNwYXduXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJjc3MtbG9hZGVyXCI6IFwiXjAuMjMuMVwiLFxuXHRcdFwiZXNsaW50XCI6IFwiXjIuMTEuMVwiLFxuXHRcdFwiaHR0cC1zZXJ2ZXJcIjogXCJeMC45LjBcIixcblx0XHRcImlzcGFydGFcIjogXCJeNC4wLjBcIixcblx0XHRcImlzdGFuYnVsXCI6IFwiXjAuNC4zXCIsXG5cdFx0XCJqc29uLWxvYWRlclwiOiBcIl4wLjUuNFwiLFxuXHRcdFwibW9jaGFcIjogXCJeMi41LjNcIixcblx0XHRcIm5pZ2h0d2F0Y2hcIjogXCJeMC45LjRcIixcblx0XHRcInBoYW50b21qcy1wcmVidWlsdFwiOiBcIl4yLjEuN1wiLFxuXHRcdFwic2VsZW5pdW0tc2VydmVyXCI6IFwiMi41My4xXCIsXG5cdFx0XCJzZXJ2ZVwiOiBcIl4xLjQuMFwiLFxuXHRcdFwic2lub25cIjogXCJeMS4xNy40XCIsXG5cdFx0XCJzaW5vbi1jaGFpXCI6IFwiXjIuOC4wXCIsXG5cdFx0XCJzdHlsZS1sb2FkZXJcIjogXCJeMC4xMy4xXCIsXG5cdFx0XCJ1Z2xpZnktanNcIjogXCJeMi42LjRcIixcblx0XHRcIndlYnBhY2tcIjogXCJeMS4xMy4xXCIsXG5cdFx0XCJ3ZWV4LWxvYWRlclwiOiBcIl4wLjIuMFwiXG5cdH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3BhY2thZ2UuanNvblxuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoZSBhcGkgZm9yIGludm9raW5nIHdpdGggXCIkXCIgcHJlZml4XG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGNvbW1vblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlICR2bSBpbnN0ZWFkXG4gKiBmaW5kIHRoZSB2bSBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICQgKGlkKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFZtIyR2bSBpbnN0ZWFkJylcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgZWxlbWVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVsIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLmVsXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSB2bSBvZiB0aGUgY3VzdG9tIGNvbXBvbmVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR2bSAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuIChmbikge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHBcbiAgY29uc3QgZGlmZmVyID0gYXBwLmRpZmZlclxuICByZXR1cm4gZGlmZmVyLnRoZW4oKCkgPT4ge1xuICAgIGZuKClcbiAgfSlcbn1cblxuLyoqXG4gKiBzY3JvbGwgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWQgaW50byB2aWV3LFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyAoaWQsIG9mZnNldCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzY3JvbGxUbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2RvbVxcJyknICtcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwgeyBvZmZzZXQ6IG9mZnNldCB9KVxuICB9XG59XG5cbi8qKlxuICogcGVyZm9ybSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBvbiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9uc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuc3R5bGVzXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5kdXJhdGlvbihtcylcbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy50aW1pbmdGdW5jdGlvbl1cbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy5kZWxheT0wKG1zKV1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHRyYW5zaXRpb24gKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGV4dGVuZCh7XG4gICAgZW52OiBnbG9iYWwuV1hFbnZpcm9ubWVudCB8fCB7fVxuICB9LCB0aGlzLl9hcHAub3B0aW9ucylcbiAgaWYgKHR5cG9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gdGhlIGNhbGxiYWNrIG9mIFZtIyRnZXRDb25maWcoY2FsbGJhY2spIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3RoaXMgYXBpIG5vdyBjYW4gZGlyZWN0bHkgUkVUVVJOIGNvbmZpZyBpbmZvLicpXG4gICAgY2FsbGJhY2soY29uZmlnKVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogcmVxdWVzdCBuZXR3b3JrIHZpYSBodHRwIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kSHR0cCAocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kSHR0cCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICBzdHJlYW0uc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogb3BlbiBhIHVybFxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvcGVuVVJMICh1cmwpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkb3BlblVSTCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2V2ZW50XFwnKScgK1xuICAgICAgICAgICcub3BlblVSTCh1cmwpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGV2ZW50ID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2V2ZW50JylcbiAgZXZlbnQub3BlblVSTCh1cmwpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHNldCBhIHRpdGxlIGZvciBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2V0VGl0bGUgKHRpdGxlKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNldFRpdGxlIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArXG4gICAgICAgICAgJy5zZXRUaXRsZSh0aXRsZSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgcGFnZUluZm8gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgncGFnZUluZm8nKVxuICBwYWdlSW5mby5zZXRUaXRsZSh0aXRsZSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJyZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZScpIGluc3RlYWRcIlxuICogaW52b2tlIGEgbmF0aXZlIG1ldGhvZCBieSBzcGVjaWZpbmcgdGhlIG5hbWUgb2YgbW9kdWxlIGFuZCBtZXRob2RcbiAqIEBwYXJhbSAge3N0cmluZ30gbW9kdWxlTmFtZVxuICogQHBhcmFtICB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gIHsuLi4qfSB0aGUgcmVzdCBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsIChtb2R1bGVOYW1lLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lXFwnKVwiIGluc3RlYWQnKVxuICBjb25zdCBtb2R1bGUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZShtb2R1bGVOYW1lKVxuICBpZiAobW9kdWxlICYmIG1vZHVsZVttZXRob2ROYW1lXSkge1xuICAgIG1vZHVsZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9