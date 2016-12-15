(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.2 Build 20161215');
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
			"weex-loader": "^0.3.1"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFlYTA1MDI3ZGZlYjRhM2QzOWUiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvdmRvbS9saXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9zZW12ZXIvNS4yLjAvc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3Byb2Nlc3MvMC4xMS41L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsImdsb2JhbCIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwicmVnaXN0ZXJNZXRob2RzIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJyZXF1aXJlIiwiY2xhc3NvZiIsInRlc3QiLCJjb2YiLCJUQUciLCJBUkciLCJ0cnlHZXQiLCJpdCIsImUiLCJtb2R1bGUiLCJleHBvcnRzIiwiTyIsIlQiLCJCIiwidW5kZWZpbmVkIiwiY2FsbGVlIiwic2xpY2UiLCJzdG9yZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm5hbWUiLCJTSEFSRUQiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJoaWRlIiwiaGFzIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU3RyaW5nIiwiZFAiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiZiIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIlAiLCJBdHRyaWJ1dGVzIiwiVHlwZUVycm9yIiwiZ2V0IiwiZXhlYyIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiUyIsInZhbHVlT2YiLCJiaXRtYXAiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRhdCIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsInBvaW50IiwiZG9uZSIsInRvSW50ZWdlciIsImRlZmluZWQiLCJ0aGF0IiwicG9zIiwicyIsImIiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJMSUJSQVJZIiwiJGV4cG9ydCIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJGIiwiUFJPVE9UWVBFIiwidHlwZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIlUiLCJXIiwiUiIsImFGdW5jdGlvbiIsImMiLCJjcmVhdGUiLCJkZXNjcmlwdG9yIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic2V0UHJvdG8iLCJzZXQiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJ0YXNrIiwibWljcm90YXNrIiwiUFJPTUlTRSIsInByb2Nlc3MiLCIkUHJvbWlzZSIsImlzTm9kZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsInByb21pc2UiLCJyZXNvbHZlIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJ0aGVuIiwic2FtZUNvbnN0cnVjdG9yIiwiaXNUaGVuYWJsZSIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwiQyIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwibm90aWZ5IiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJydW4iLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZG9tYWluIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsImVudGVyIiwiZXhpdCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiUHJvbWlzZSIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiY2hlY2siLCJzZXRQcm90b3R5cGVPZiIsImJ1Z2d5IiwiX19wcm90b19fIiwicElFIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlNQRUNJRVMiLCJEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsImxpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwiYXJncyIsIm5leHRUaWNrIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltcG9ydFNjcmlwdHMiLCJyZW1vdmVDaGlsZCIsImNsZWFyIiwidW4iLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaGVhZCIsImxhc3QiLCJmbHVzaCIsInBhcmVudCIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiREVTQ1JJUFRPUlMiLCJLRVkiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsIm5hdGl2ZUxvZyIsIkxFVkVMUyIsImxldmVsTWFwIiwiZ2VuZXJhdGVMZXZlbE1hcCIsIldYRW52aXJvbm1lbnQiLCJwbGF0Zm9ybSIsImRlYnVnIiwiY2hlY2tMZXZlbCIsImZvcm1hdCIsImxvZyIsImluZm8iLCJ3YXJuIiwiX19vcmlfXyIsImZvckVhY2giLCJsZXZlbEluZGV4IiwibGV2ZWwiLCJ0eXBlSW5kZXgiLCJsb2dMZXZlbCIsIm1hcCIsInYiLCJ0b0xvd2VyQ2FzZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnT1BTIiwiJGFzc2lnbiIsIkEiLCJLIiwiayIsImFMZW4iLCJnZXRTeW1ib2xzIiwiaXNFbnVtIiwiaiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmZpZyIsIkRvY3VtZW50IiwiRWxlbWVudCIsIkNvbW1lbnQiLCJMaXN0ZW5lciIsImZyYW1ld29ya3MiLCJzZW5kVGFza3MiLCJjYWxsTmF0aXZlIiwiTm9kZSIsIkRFRkFVTFRfVEFHX05BTUUiLCJpbnN0YW5jZU1hcCIsIm5leHROb2RlUmVmIiwidXJsIiwiVVJMIiwibm9kZU1hcCIsImdlbkNhbGxUYXNrcyIsImNyZWF0ZURvY3VtZW50RWxlbWVudCIsInRhc2tzIiwiaXNBcnJheSIsImRlc3Ryb3kiLCJiYXRjaGVkIiwiZG9jSWQiLCJvd25lckRvY3VtZW50Iiwicm9sZSIsImRlcHRoIiwicmVmIiwiX2RvY3VtZW50RWxlbWVudCIsImFwcGVuZEJvZHkiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJkb2MiLCJwdXJlQ2hpbGRyZW4iLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJiZWZvcmVJbmRleCIsIm5vZGVUeXBlIiwiY2hpbGQiLCJzZXRCb2R5IiwibGlua1BhcmVudCIsIm5vZGVJZCIsImNyZWF0ZUJvZHkiLCJfcm9vdCIsImJvZHkiLCJwcm9wcyIsInRhZ05hbWUiLCJjcmVhdGVDb21tZW50IiwidGV4dCIsImZpcmVFdmVudCIsImRvbUNoYW5nZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidXBkYXRlRWxlbWVudCIsImdldFJlZiIsImNoYW5nZXMiLCJhdHRycyIsInNldEF0dHIiLCJzZXRTdHlsZSIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0ciIsImNsYXNzU3R5bGUiLCJpbnNlcnRJbmRleCIsInJlZ2lzdGVyTm9kZSIsImFkZEVsZW1lbnQiLCJtb3ZlSW5kZXgiLCJtb3ZlRWxlbWVudCIsInB1cmVCZWZvcmUiLCJuZXh0RWxlbWVudCIsImluc2VydEFmdGVyIiwiYWZ0ZXIiLCJwcmV2aW91c0VsZW1lbnQiLCJwcmVzZXJ2ZWQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUVsZW1lbnQiLCJuZXdJbmRleCIsImNoYW5nZVNpYmxpbmciLCJuZXdJbmRleEFmdGVyIiwiYmVmb3JlTmV3IiwiYWZ0ZXJOZXciLCJzaWxlbnQiLCJzZXRDbGFzc1N0eWxlIiwic2V0U3R5bGVzIiwidG9TdHlsZSIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJ0b0pTT04iLCJjcmVhdGVBY3Rpb24iLCJ1cGRhdGVzIiwiY3JlYXRlRmluaXNoIiwiY2FsbGJhY2siLCJ1cGRhdGVGaW5pc2giLCJyZWZyZXNoRmluaXNoIiwiZWxlbWVudCIsImFjdGlvbnMiLCJhZGRBY3Rpb25zIiwidGFyZ2V0UmVmIiwicGFyZW50UmVmIiwibWV0aG9kIiwiV2VleCIsImNyZWF0ZUluc3RhbmNlIiwiaW5pdCIsInJlZnJlc2hJbnN0YW5jZSIsImRlc3Ryb3lJbnN0YW5jZSIsInJlZ2lzdGVyQ29tcG9uZW50cyIsInJlZ2lzdGVyTW9kdWxlcyIsInJlY2VpdmVUYXNrcyIsImdldFJvb3QiLCJpbnN0YW5jZUlkIiwiY29kZSIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImN0cmwiLCJpc1Jlc2VydmVkIiwiY2FjaGVkIiwidHlwb2YiLCJzdHIiLCJoYXNQcm90byIsIl9TZXQiLCJTZXQiLCJtYXRjaCIsImFkZCIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwidG9VcHBlciIsIl8iLCJ0b1VwcGVyQ2FzZSIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3Vic3RyaW5nIiwidXBkYXRlQWN0aW9ucyIsImdldFJvb3RFbGVtZW50IiwicmVmcmVzaERhdGEiLCJidW5kbGVEZWZpbmUiLCJidW5kbGVCb290c3RyYXAiLCJfZGF0YSIsImJ1bmRsZVJlZ2lzdGVyIiwiYnVuZGxlUmVuZGVyIiwiYnVuZGxlUmVxdWlyZSIsImJ1bmRsZURvY3VtZW50IiwiZnVuY3Rpb25Cb2R5Iiwic3Vic3RyIiwidGltZXIiLCJyZXF1aXJlTW9kdWxlIiwidGltZXJBUElzIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJuIiwiY2xlYXJJbnRlcnZhbCIsImJvb3RzdHJhcCIsImNsZWFyQ29tbW9uTW9kdWxlcyIsImRlZmluZSIsInJlZ2lzdGVyIiwiZG93bmdyYWRlIiwiYXBwIiwiY2xlYW5OYW1lIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwic2F0aXNmaWVzIiwiX2NoZWNrRG93bmdyYWRlIiwiaXNEb3duZ3JhZGUiLCJjYWxsVGFza3MiLCJlcnJvclR5cGUiLCJlcnJvck1lc3NhZ2UiLCJ2bSIsIl9hcHAiLCJTZW1WZXIiLCJlbnYiLCJOT0RFX0RFQlVHIiwidW5zaGlmdCIsIlNFTVZFUl9TUEVDX1ZFUlNJT04iLCJNQVhfTEVOR1RIIiwiTUFYX1NBRkVfSU5URUdFUiIsIk51bWJlciIsInJlIiwiTlVNRVJJQ0lERU5USUZJRVIiLCJOVU1FUklDSURFTlRJRklFUkxPT1NFIiwiTk9OTlVNRVJJQ0lERU5USUZJRVIiLCJNQUlOVkVSU0lPTiIsIk1BSU5WRVJTSU9OTE9PU0UiLCJQUkVSRUxFQVNFSURFTlRJRklFUiIsIlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UiLCJQUkVSRUxFQVNFIiwiUFJFUkVMRUFTRUxPT1NFIiwiQlVJTERJREVOVElGSUVSIiwiQlVJTEQiLCJGVUxMIiwiRlVMTFBMQUlOIiwiTE9PU0VQTEFJTiIsIkxPT1NFIiwiR1RMVCIsIlhSQU5HRUlERU5USUZJRVJMT09TRSIsIlhSQU5HRUlERU5USUZJRVIiLCJYUkFOR0VQTEFJTiIsIlhSQU5HRVBMQUlOTE9PU0UiLCJYUkFOR0UiLCJYUkFOR0VMT09TRSIsIkxPTkVUSUxERSIsIlRJTERFVFJJTSIsIlJlZ0V4cCIsInRpbGRlVHJpbVJlcGxhY2UiLCJUSUxERSIsIlRJTERFTE9PU0UiLCJMT05FQ0FSRVQiLCJDQVJFVFRSSU0iLCJjYXJldFRyaW1SZXBsYWNlIiwiQ0FSRVQiLCJDQVJFVExPT1NFIiwiQ09NUEFSQVRPUkxPT1NFIiwiQ09NUEFSQVRPUiIsIkNPTVBBUkFUT1JUUklNIiwiY29tcGFyYXRvclRyaW1SZXBsYWNlIiwiSFlQSEVOUkFOR0UiLCJIWVBIRU5SQU5HRUxPT1NFIiwiU1RBUiIsInBhcnNlIiwibG9vc2UiLCJlciIsInZhbGlkIiwiY2xlYW4iLCJ0cmltIiwibSIsInJhdyIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsInByZXJlbGVhc2UiLCJudW0iLCJidWlsZCIsImNvbXBhcmUiLCJvdGhlciIsImNvbXBhcmVNYWluIiwiY29tcGFyZVByZSIsImNvbXBhcmVJZGVudGlmaWVycyIsImluYyIsInJlbGVhc2UiLCJpZGVudGlmaWVyIiwiZGlmZiIsInZlcnNpb24xIiwidmVyc2lvbjIiLCJlcSIsInYxIiwidjIiLCJudW1lcmljIiwiYW51bSIsImJudW0iLCJyY29tcGFyZUlkZW50aWZpZXJzIiwiY29tcGFyZUxvb3NlIiwicmNvbXBhcmUiLCJzb3J0IiwicnNvcnQiLCJsdCIsIm5lcSIsImd0ZSIsImx0ZSIsImNtcCIsIm9wIiwiQ29tcGFyYXRvciIsImNvbXAiLCJzZW12ZXIiLCJBTlkiLCJvcGVyYXRvciIsIlJhbmdlIiwicmFuZ2UiLCJwYXJzZVJhbmdlIiwiZmlsdGVyIiwiY29tcHMiLCJociIsImh5cGhlblJlcGxhY2UiLCJjb21wUmUiLCJwYXJzZUNvbXBhcmF0b3IiLCJ0b0NvbXBhcmF0b3JzIiwicmVwbGFjZUNhcmV0cyIsInJlcGxhY2VUaWxkZXMiLCJyZXBsYWNlWFJhbmdlcyIsInJlcGxhY2VTdGFycyIsImlzWCIsInJlcGxhY2VUaWxkZSIsIk0iLCJwIiwicHIiLCJyZXBsYWNlQ2FyZXQiLCJyZXBsYWNlWFJhbmdlIiwiZ3RsdCIsInhNIiwieG0iLCJ4cCIsImFueVgiLCIkMCIsImZNIiwiZm0iLCJmcCIsImZwciIsImZiIiwidG8iLCJ0TSIsInRtIiwidHAiLCJ0cHIiLCJ0YiIsInRlc3RTZXQiLCJhbGxvd2VkIiwibWF4U2F0aXNmeWluZyIsInZlcnNpb25zIiwidmFsaWRSYW5nZSIsImx0ciIsIm91dHNpZGUiLCJndHIiLCJoaWxvIiwiZ3RmbiIsImx0ZWZuIiwibHRmbiIsImVjb21wIiwiY29tcGFyYXRvcnMiLCJoaWdoIiwibG93IiwiY29tcGFyYXRvciIsInBhcnNlZCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsImZ1biIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiVm0iLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2NoaWxkcmVuVm1zIiwiX29wdGlvbnMiLCJfbWV0aG9kcyIsIl9jb21wdXRlZCIsImNvbXB1dGVkIiwiX2NzcyIsIl9pZHMiLCJfdm1FdmVudHMiLCJfdHlwZSIsIiRlbWl0IiwiX2luaXRlZCIsIl9jcmVhdGVkIiwicmVhZHkiLCJfcGFyZW50RWwiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsImluaXRNZXRob2RzIiwiX3dhdGNoZXJzIiwidXNlckRlZiIsIm1ha2VDb21wdXRlZEdldHRlciIsImdldHRlciIsIm93bmVyIiwid2F0Y2hlciIsImxhenkiLCJjb21wdXRlZEdldHRlciIsImRpcnR5IiwiZXZhbHVhdGUiLCJkZXBlbmQiLCJXYXRjaGVyIiwicHJldlRhcmdldCIsImV4cE9yRm4iLCJpc0ZuIiwiZXhwcmVzc2lvbiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiTk9ERV9FTlYiLCJxdWV1ZWQiLCJzaGFsbG93IiwiYmVmb3JlR2V0IiwiZGVlcCIsInRyYXZlcnNlIiwiYWZ0ZXJHZXQiLCJhZGREZXAiLCJkZXAiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJ0bXAiLCJ1cGRhdGUiLCJvbGRWYWx1ZSIsImN1cnJlbnQiLCJ0ZWFyZG93biIsIl9pc0JlaW5nRGVzdHJveWVkIiwiX3ZGb3JSZW1vdmluZyIsInNlZW5PYmplY3RzIiwic2VlbiIsImlzQSIsImlzTyIsIl9fb2JfXyIsImRlcElkIiwiRGVwIiwic3VicyIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiaXRlbXMiLCJhZGRWbSIsInZtcyIsInJlbW92ZVZtIiwib2IiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJwcm9wZXJ0eSIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwiJGZvcmNlVXBkYXRlIiwiS0VZX1dPUkRTIiwicHJveHlHZXR0ZXIiLCJwcm94eVNldHRlciIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJpbnNlcnRlZCIsIiRzZXQiLCIkcmVtb3ZlIiwib3B0IiwidGVtcGxhdGUiLCJjb21waWxlIiwiX3JlYWR5IiwiZGVzdCIsIm1ldGEiLCJsYXN0U2lnbmFsIiwidGFyZ2V0SXNGcmFnbWVudCIsImNvbXBpbGVGcmFnbWVudCIsInRhcmdldElzQ29udGVudCIsIl9jb250ZW50IiwidGFyZ2V0TmVlZENoZWNrUmVwZWF0IiwiY29tcGlsZVJlcGVhdCIsInRhcmdldE5lZWRDaGVja1Nob3duIiwiY29tcGlsZVNob3duIiwidHlwZUdldHRlciIsInRhcmdldE5lZWRDaGVja1R5cGUiLCJjb21waWxlVHlwZSIsImNvbXBvbmVudCIsInRhcmdldElzQ29tcG9zZWQiLCJjb21waWxlQ3VzdG9tQ29tcG9uZW50IiwiY29tcGlsZU5hdGl2ZUNvbXBvbmVudCIsInJlcGVhdCIsInNob3duIiwiY29tcG9uZW50cyIsImZyYWdCbG9jayIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImJpbmRSZXBlYXQiLCJuZXdNZXRhIiwiYmluZFNob3duIiwiQ3RvciIsInN1YlZtIiwiX2V4dGVybmFsQmluZGluZyIsImNvbXBpbGVDaGlsZHJlbiIsIl9yb290RWwiLCJldmVudHMiLCJhcHBlbmQiLCJ0cmVlTW9kZSIsImV2ZXJ5Iiwia2V5TmFtZSIsInZhbHVlTmFtZSIsImNvbXBpbGVJdGVtIiwiY29udGV4dCIsIm5ld0NvbnRleHQiLCJtZXJnZUNvbnRleHQiLCJ3YXRjaEJsb2NrIiwib2xkQ2hpbGRyZW4iLCJvbGRWbXMiLCJvbGREYXRhIiwidHJhY2tNYXAiLCJyZXVzZWRNYXAiLCJyZXVzZWRMaXN0IiwidXBkYXRlTWFyayIsInJldXNlZCIsImNhbGMiLCJkaWZmZXIiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJuYXRpdmVDb21wb25lbnRNYXAiLCJTRVRURVJTIiwic3Via2V5Iiwic2V0Q2xhc3MiLCJjbGFzc0xpc3QiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInJlZHVjZSIsIm1lcmdlUHJvcHMiLCJtZXJnZUNsYXNzU3R5bGUiLCJtZXJnZVN0eWxlIiwicmV0dXJuVmFsdWUiLCJjc3MiLCJuZXdJZCIsImJpbmREaXIiLCJzZXRFdmVudCIsImJpbmRLZXkiLCJpbWFnZSIsImNvbnRhaW5lciIsInNsaWRlciIsImNlbGwiLCJjcmVhdGVCbG9jayIsImF0dGFjaFRhcmdldCIsIm1vdmVUYXJnZXQiLCJyZW1vdmVUYXJnZXQiLCJjcmVhdGVCbG9ja1N0YXJ0IiwiZW5kIiwiY3JlYXRlQmxvY2tFbmQiLCJsYXN0ZXN0QmxvY2tJZCIsImFuY2hvciIsInNpZ25hbCIsIm1vdmVCbG9jayIsImdyb3VwIiwidGVtcCIsInByZXNlcnZlQmxvY2siLCJyZW1vdmVCbG9jayIsIiRkaXNwYXRjaCIsIiRicm9hZGNhc3QiLCIkb24iLCIkb2ZmIiwiaW5pdEV2ZW50cyIsIm1peGluRXZlbnRzIiwiRXZ0IiwiZGV0YWlsIiwic2hvdWxkU3RvcCIsInN0b3AiLCJoYXNTdG9wcGVkIiwiaGFuZGxlckxpc3QiLCJldnQiLCJMSUZFX0NZQ0xFX1RZUEVTIiwidHlwZTEiLCJ0eXBlMiIsImNsZWFyTW9kdWxlcyIsImdldE1vZHVsZSIsInJlcXVpcmVDb21wb25lbnQiLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hdGl2ZU1vZHVsZXMiLCJhc3NpZ25Nb2R1bGVzIiwibW9kdWxlcyIsImlmUmVwbGFjZSIsIm1vZHVsZU5hbWUiLCJhc3NpZ25BcGlzIiwiYXBpcyIsImFwaU5hbWUiLCJub3JtYWxpemVWZXJzaW9uIiwiZ2V0RXJyb3IiLCJpc1ZhbGlkIiwiY3JpdGVyaWEiLCJnZXRNc2ciLCJfa2V5IiwiZGV2aWNlSW5mbyIsImN1c3RvbURvd25ncmFkZSIsImRQbGF0Zm9ybSIsImNPYmoiLCJrZXlMb3dlciIsImlzVmVyc2lvbiIsImlzRGV2aWNlTW9kZWwiLCJkIiwiX2NyaXRlcmlhIiwicmVtb3ZlV2VleFByZWZpeCIsInJlbW92ZUpTU3VyZml4IiwiV0VFWF9DT01QT05FTlRfUkVHIiwiV0VFWF9NT0RVTEVfUkVHIiwiTk9STUFMX01PRFVMRV9SRUciLCJKU19TVVJGSVhfUkVHIiwiaXNXZWV4Q29tcG9uZW50IiwiaXNXZWV4TW9kdWxlIiwiaXNOb3JtYWxNb2R1bGUiLCJpc05wbU1vZHVsZSIsImNvbW1vbk1vZHVsZXMiLCJmYWN0b3J5IiwiX3JlcXVpcmUiLCJfbW9kdWxlIiwiYmxvY2tzIiwiY2FsbGJhY2tzIiwic29tZSIsImNhbGxiYWNrSWQiLCJpZktlZXBBbGl2ZSIsIkFwcEluc3RhbmNlIiwiYnVuZGxlVXJsIiwibm9ybWFsaXplIiwidG9JU09TdHJpbmciLCJhcmciLCJEaWZmZXIiLCJob29rcyIsImhhc1RpbWVyIiwiaXNUaW1lb3V0IiwiY2FsbFR5cGVNYXAiLCJjYWxsVHlwZUxpc3QiLCJpc0VtcHR5IiwiY2ZnIiwianNIYW5kbGVycyIsImZ1bmNJZCIsImlmTGFzdCIsInJlc3VsdHMiLCJ2ZXJzaW9uUmVnRXhwIiwiY2hlY2tWZXJzaW9uIiwiZnJhbWV3b3JrIiwiYnVuZGxlVmVyc2lvbiIsImdlbkluaXQiLCJnZW5JbnN0YW5jZSIsImFkYXB0SW5zdGFuY2UiLCJuYXRpdmVNZXRob2ROYW1lIiwiJCIsIiRlbCIsIiR2bSIsIiRyZW5kZXJUaGVuIiwiJHNjcm9sbFRvIiwiJHRyYW5zaXRpb24iLCIkZ2V0Q29uZmlnIiwiJHNlbmRIdHRwIiwiJG9wZW5VUkwiLCIkc2V0VGl0bGUiLCIkY2FsbCIsIm9mZnNldCIsImRvbSIsInNjcm9sbFRvRWxlbWVudCIsInN0eWxlcyIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJfc2V0U3R5bGUiLCJwYXJhbXMiLCJzdHJlYW0iLCJzZW5kSHR0cCIsIm9wZW5VUkwiLCJwYWdlSW5mbyIsInNldFRpdGxlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7OztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7S0FFSkMsTSx1QkFBQUEsTTtLQUFRQyxXLHVCQUFBQSxXOztBQUVoQjs7NEJBQ1dDLFU7QUFDVEMsVUFBT0QsVUFBUCxJQUFxQixZQUFhO0FBQ2hDLFNBQU1FLE1BQU0sa0JBQVFGLFVBQVIscUNBQVo7QUFDQSxTQUFJRSxlQUFlQyxLQUFuQixFQUEwQjtBQUN4QkMsZUFBUUMsS0FBUixDQUFjSCxJQUFJSSxRQUFKLEVBQWQ7QUFDRDtBQUNELFlBQU9KLEdBQVA7QUFDRCxJQU5EOzs7QUFERixNQUFLLElBQU1GLFVBQVgsdUJBQWtDO0FBQUEsU0FBdkJBLFVBQXVCO0FBUWpDOztBQUVEO0FBQ0FDLFFBQU9NLGdCQUFQLEdBQTBCVCxNQUEx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UTJZLElBQVIsQ0FBYSw0Q0FDWCwyREFERjtBQUVBLE9BQU0xVSxTQUFTLEtBQUt3Z0IsSUFBTCxDQUFVckIsYUFBVixDQUF3Qm9iLFVBQXhCLENBQWY7QUFDQSxPQUFJdjZCLFVBQVVBLE9BQU9yRSxVQUFQLENBQWQsRUFBa0M7QUFBQSx1Q0FKY3NXLElBSWQ7QUFKY0EsV0FJZDtBQUFBOztBQUNoQ2pTLFlBQU9yRSxVQUFQLGdCQUFzQnNXLElBQXRCO0FBQ0Q7QUFDRixFIiwiZmlsZSI6Im5hdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjFlYTA1MDI3ZGZlYjRhM2QzOWVcbiAqKi8iLCJpbXBvcnQgJy4uL3NoYXJlZCdcbmltcG9ydCBydW50aW1lIGZyb20gJy4uL3J1bnRpbWUnXG5pbXBvcnQgeyBzdWJ2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tICcuLi9kZWZhdWx0L2FwaS9tZXRob2RzJ1xuXG5jb25zdCB7IG5hdGl2ZSwgdHJhbnNmb3JtZXIgfSA9IHN1YnZlcnNpb25cblxuLy8gcmVnaXN0ZXIgaW5zdGFuY2UgbWFuYWdlbWVudCBBUElzXG5mb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gcnVudGltZSkge1xuICBnbG9iYWxbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJldCA9IHJ1bnRpbWVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICBpZiAocmV0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmV0LnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuXG4vLyByZWdpc3RlciBmcmFtZXdvcmsgbWV0YSBpbmZvXG5nbG9iYWwuZnJhbWV3b3JrVmVyc2lvbiA9IG5hdGl2ZVxuZ2xvYmFsLnRyYW5zZm9ybWVyVmVyc2lvbiA9IHRyYW5zZm9ybWVyXG5cbi8vIHJlZ2lzdGVyIHNwZWNpYWwgbWV0aG9kcyBmb3IgV2VleCBmcmFtZXdvcmtcbmdsb2JhbC5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvbmF0aXZlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3NldFRpbWVvdXQnXG5pbXBvcnQgJy4vcHJvbWlzZSdcbmltcG9ydCAnLi9jb25zb2xlJ1xuaW1wb3J0ICcuL29iamVjdEFzc2lnbidcblxuZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuL3V0aWxzJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodGFyZ2V0LCAuLi5zcmMpIHtcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNyYylcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmaXJzdCA9IHNyYy5zaGlmdCgpXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmlyc3QpIHtcbiAgICAgIHRhcmdldFtrZXldID0gZmlyc3Rba2V5XVxuICAgIH1cbiAgICBpZiAoc3JjLmxlbmd0aCkge1xuICAgICAgZXh0ZW5kKHRhcmdldCwgLi4uc3JjKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudW1lcmFibGVdXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICBjb25zdCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheS1saWtlfSBsaXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSAtIHN0YXJ0IGluZGV4XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwXG4gIGxldCBpID0gbGlzdC5sZW5ndGggLSBzdGFydFxuICBjb25zdCByZXQgPSBuZXcgQXJyYXkoaSlcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbmNvbnN0IE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC91dGlscy5qc1xuICoqLyIsImNvbnN0IHtcbiAgc2V0VGltZW91dCxcbiAgc2V0VGltZW91dE5hdGl2ZVxufSA9IGdsb2JhbFxuXG4vLyBmaXggbm8gc2V0VGltZW91dCBvbiBBbmRyb2lkIFY4XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIHNldFRpbWVvdXROYXRpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gIGxldCB0aW1lb3V0SWQgPSAwXG5cbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0Q2FsbGJhY2sgPSAoaWQpID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXRNYXBbaWRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aW1lb3V0TWFwW2lkXSgpXG4gICAgICBkZWxldGUgdGltZW91dE1hcFtpZF1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanNcbiAqKi8iLCIvLyBmaXggUHJvbWlzZSBQcm9ibGVtIG9uIEpTQ29udGV4dCBvZiBpT1M3fjhcbi8vIEBzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNTg2NlxuLy8gZ2xvYmFsLlByb21pc2UgPSBudWxsXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XHJcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19jdHguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XHJcbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxyXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcclxuICAgICwgZ3QgICAgID0gJz4nXHJcbiAgICAsIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcclxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcclxuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xyXG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGlmKE8gIT09IG51bGwpe1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xyXG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXHJcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xyXG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxyXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xyXG4gIGFuT2JqZWN0KE8pO1xyXG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXHJcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAsIGkgPSAwXHJcbiAgICAsIFA7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xyXG4gIHJldHVybiBPO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxyXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbiAqKi8iLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XHJcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVzdWx0ID0gW11cclxuICAgICwga2V5O1xyXG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xyXG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKi8iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXHJcbm1vZHVsZS5leHBvcnRzID0gKFxyXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXHJcbikuc3BsaXQoJywnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXHJcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XHJcbiAgTyA9IHRvT2JqZWN0KE8pO1xyXG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xyXG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xyXG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNldFByb3RvICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldFxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuICoqLyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzXG4gKiovIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKi8iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanNcbiAqKi8iLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcclxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXHJcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxyXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXHJcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcclxuICBPID0gdG9JT2JqZWN0KE8pO1xyXG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcclxuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xyXG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuICoqLyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qc1xuICoqLyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4gKiovIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuICoqLyIsImNvbnN0IHsgY29uc29sZSwgbmF0aXZlTG9nIH0gPSBnbG9iYWxcbmNvbnN0IExFVkVMUyA9IFsnZXJyb3InLCAnd2FybicsICdpbmZvJywgJ2xvZycsICdkZWJ1ZyddXG5jb25zdCBsZXZlbE1hcCA9IHt9XG5cbmdlbmVyYXRlTGV2ZWxNYXAoKVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChcbiAgdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8IC8vIEFuZHJvaWRcbiAgKGdsb2JhbC5XWEVudmlyb25tZW50ICYmIGdsb2JhbC5XWEVudmlyb25tZW50LnBsYXRmb3JtID09PSAnaU9TJykgLy8gaU9TXG4pIHtcbiAgZ2xvYmFsLmNvbnNvbGUgPSB7XG4gICAgZGVidWc6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19ERUJVRycpIH1cbiAgICB9LFxuICAgIGxvZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19MT0cnKSB9XG4gICAgfSxcbiAgICBpbmZvOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2luZm8nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19JTkZPJykgfVxuICAgIH0sXG4gICAgd2FybjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fV0FSTicpIH1cbiAgICB9LFxuICAgIGVycm9yOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fRVJST1InKSB9XG4gICAgfVxuICB9XG59XG5lbHNlIHsgLy8gSFRNTDVcbiAgY29uc3QgeyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9ID0gY29uc29sZVxuICBjb25zb2xlLl9fb3JpX18gPSB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH1cbiAgY29uc29sZS5kZWJ1ZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgY29uc29sZS5fX29yaV9fLmRlYnVnLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IGNvbnNvbGUuX19vcmlfXy5sb2cuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuaW5mbyA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2luZm8nKSkgeyBjb25zb2xlLl9fb3JpX18uaW5mby5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS53YXJuID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IGNvbnNvbGUuX19vcmlfXy53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmVycm9yID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBjb25zb2xlLl9fb3JpX18uZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGV2ZWxNYXAgKCkge1xuICBMRVZFTFMuZm9yRWFjaChsZXZlbCA9PiB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IExFVkVMUy5pbmRleE9mKGxldmVsKVxuICAgIGxldmVsTWFwW2xldmVsXSA9IHt9XG4gICAgTEVWRUxTLmZvckVhY2godHlwZSA9PiB7XG4gICAgICBjb25zdCB0eXBlSW5kZXggPSBMRVZFTFMuaW5kZXhPZih0eXBlKVxuICAgICAgaWYgKHR5cGVJbmRleCA8PSBsZXZlbEluZGV4KSB7XG4gICAgICAgIGxldmVsTWFwW2xldmVsXVt0eXBlXSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja0xldmVsICh0eXBlKSB7XG4gIGNvbnN0IGxvZ0xldmVsID0gKGdsb2JhbC5XWEVudmlyb25tZW50ICYmIGdsb2JhbC5XWEVudmlyb25tZW50LmxvZ0xldmVsKSB8fCAnbG9nJ1xuICByZXR1cm4gbGV2ZWxNYXBbbG9nTGV2ZWxdICYmIGxldmVsTWFwW2xvZ0xldmVsXVt0eXBlXVxufVxuXG5mdW5jdGlvbiBmb3JtYXQgKGFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3MubWFwKCh2KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XG4gICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2ID0gU3RyaW5nKHYpXG4gICAgfVxuICAgIHJldHVybiB2XG4gIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9jb25zb2xlLmpzXG4gKiovIiwiaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9vYmplY3RBc3NpZ24uanNcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi8ubnBtaW5zdGFsbC9jb3JlLWpzLzIuNC4wL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL2NvcmUtanMvMi40LjAvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4gKiovIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvY29yZS1qcy8yLjQuMC9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4gKiovIiwiaW1wb3J0IHsgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQgfSBmcm9tICcuLi92ZG9tJ1xuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4uL3Zkb20vbGlzdGVuZXInXG5pbXBvcnQgZnJhbWV3b3JrcyBmcm9tICcuL2NvbmZpZydcblxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0J1xuXG5jb25zdCBjb25maWcgPSB7XG4gIERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50LCBMaXN0ZW5lciwgZnJhbWV3b3JrcyxcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5jYWxsTmF0aXZlKC4uLmFyZ3MpXG4gIH1cbn1cblxuY29uc3QgbWV0aG9kcyA9IGluaXQoY29uZmlnKVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEEgc2ltcGxlIHZpcnR1YWwgZG9tIGltcGxlbWVudGF0aW9uXG4gKi9cbi8vIGltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZC91dGlscydcblxuY29uc3QgREVGQVVMVF9UQUdfTkFNRSA9ICdkaXYnXG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBEb2N1bWVudCAoaWQsIHVybCwgaGFuZGxlciwgTGlzdGVuZXIpIHtcbiAgaWQgPSBpZCA/IGlkLnRvU3RyaW5nKCkgOiAnJ1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5VUkwgPSB1cmxcblxuICBpbnN0YW5jZU1hcFtpZF0gPSB0aGlzXG4gIHRoaXMubm9kZU1hcCA9IHt9XG4gIExpc3RlbmVyICYmICh0aGlzLmxpc3RlbmVyID0gbmV3IExpc3RlbmVyKGlkLCBoYW5kbGVyIHx8IGdlbkNhbGxUYXNrcyhpZCkpKVxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGdlbkNhbGxUYXNrcyAoaWQpIHtcbiAgcmV0dXJuICh0YXNrcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHRhc2tzID0gW3Rhc2tzXVxuICAgIH1cbiAgICByZXR1cm4gY2FsbE5hdGl2ZShpZCwgdGFza3MsICctMScpXG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgZG9jLmxpc3RlbmVyLmNyZWF0ZUJvZHkobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICBkb2Mubm9kZU1hcFtub2RlLnJlZl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9keSAoZG9jLCBlbCkge1xuICBlbC5yb2xlID0gJ2JvZHknXG4gIGVsLmRlcHRoID0gMVxuICBkZWxldGUgZG9jLm5vZGVNYXBbZWwubm9kZUlkXVxuICBlbC5yZWYgPSAnX3Jvb3QnXG4gIGRvYy5ub2RlTWFwLl9yb290ID0gZWxcbiAgZG9jLmJvZHkgPSBlbFxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuYm9keSkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQodHlwZSwgcHJvcHMpXG4gICAgc2V0Qm9keSh0aGlzLCBlbClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0KVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm5cbiAgfVxuICBlID0gZSB8fCB7fVxuICBlLnR5cGUgPSB0eXBlXG4gIGUudGFyZ2V0ID0gZWxcbiAgZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIGlmIChkb21DaGFuZ2VzKSB7XG4gICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgfVxuICByZXR1cm4gZWwuZmlyZUV2ZW50KHR5cGUsIGUpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50IChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGUgKCkge1xuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbFxuICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbn1cblxuTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF1cbiAgaWYgKGRvYykge1xuICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgZGVsZXRlIGRvYy5ub2RlTWFwW3RoaXMubm9kZUlkXVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGVtZW50ICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLm5vZGVUeXBlID0gMVxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSB7fVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobm9kZSwgYmVmb3JlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGJlZm9yZSB8fCBub2RlLm5leHRTaWJsaW5nID09PSBiZWZvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIGFmdGVyKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGFmdGVyIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBhZnRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlLCBwcmVzZXJ2ZWQpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXByZXNlcnZlZCkge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIHRoaXMucHVyZUNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgIH0pXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMFxuICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG59XG5cbmZ1bmN0aW9uIG5leHRFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmtQYXJlbnQgKG5vZGUsIHBhcmVudCkge1xuICBub2RlLnBhcmVudE5vZGUgPSBwYXJlbnRcbiAgaWYgKHBhcmVudC5kb2NJZCkge1xuICAgIG5vZGUuZG9jSWQgPSBwYXJlbnQuZG9jSWRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgIG5vZGUub3duZXJEb2N1bWVudC5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbiAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMVxuICB9XG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGlua1BhcmVudChjaGlsZCwgbm9kZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlIChkb2NJZCwgbm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtkb2NJZF1cbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5mdW5jdGlvbiBpbnNlcnRJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgbmV3SW5kZXggPSAwXG4gIH1cbiAgY29uc3QgYmVmb3JlID0gbGlzdFtuZXdJbmRleCAtIDFdXG4gIGNvbnN0IGFmdGVyID0gbGlzdFtuZXdJbmRleF1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXgsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlXG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgbGV0IG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleFxuICBpZiAoaW5kZXggPD0gbmV3SW5kZXgpIHtcbiAgICBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXggLSAxXG4gIH1cbiAgY29uc3QgYmVmb3JlTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyIC0gMV1cbiAgY29uc3QgYWZ0ZXJOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXJdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4QWZ0ZXIsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmVOZXcgJiYgKGJlZm9yZU5ldy5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlTmV3XG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJOZXdcbiAgICBhZnRlck5ldyAmJiAoYWZ0ZXJOZXcucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIGlmIChpbmRleCA9PT0gbmV3SW5kZXhBZnRlcikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLmNsYXNzU3R5bGUgPSBjbGFzc1N0eWxlXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IE1haW4gZW50cnksIGluc3RhbmNlIG1hbmFnZXJcbiAqXG4gKiAtIGNyZWF0ZUluc3RhbmNlKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpXG4gKiAtIHJlZnJlc2hJbnN0YW5jZShpbnN0YW5jZUlkLCBkYXRhKVxuICogLSBkZXN0cm95SW5zdGFuY2UoaW5zdGFuY2VJZClcbiAqIC0gcmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHMpXG4gKiAtIHJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICogLSBnZXRSb290KGluc3RhbmNlSWQpXG4gKiAtIGluc3RhbmNlTWFwXG4gKiAtIGNhbGxKUyhpbnN0YW5jZUlkLCB0YXNrcylcbiAqICAgLSBmaXJlRXZlbnQocmVmLCB0eXBlLCBkYXRhKVxuICogICAtIGNhbGxiYWNrKGZ1bmNJZCwgZGF0YSlcbiAqL1xuZXhwb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICcuL3N0YXRpYy9jcmVhdGUnXG5leHBvcnQgeyBpbml0LCByZWZyZXNoSW5zdGFuY2UsIGRlc3Ryb3lJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2xpZmUnXG5leHBvcnQgeyByZWdpc3RlckNvbXBvbmVudHMsIHJlZ2lzdGVyTW9kdWxlcywgcmVnaXN0ZXJNZXRob2RzIH0gZnJvbSAnLi9zdGF0aWMvcmVnaXN0ZXInXG5leHBvcnQgeyByZWNlaXZlVGFza3MgfSBmcm9tICcuL3N0YXRpYy9icmlkZ2UnXG5leHBvcnQgeyBnZXRSb290IH0gZnJvbSAnLi9zdGF0aWMvbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9pbmRleC5qc1xuICoqLyIsImltcG9ydCBBcHBJbnN0YW5jZSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuXG4vKipcbiAqIGNyZWF0ZSBhIFdlZXggaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gb3B0aW9uIGBIQVNfTE9HYCBlbmFibGUgcHJpbnQgbG9nXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtkYXRhXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBsZXQgcmVzdWx0XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBBcHBJbnN0YW5jZShpbnN0YW5jZUlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdID0gaW5zdGFuY2VcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5pbml0KGNvZGUsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgfHwgaW5zdGFuY2Vcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvY3JlYXRlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICogYXMgY3RybCBmcm9tICcuL2N0cmwnXG5pbXBvcnQgQXBwSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcblxuZXh0ZW5kKEFwcEluc3RhbmNlLnByb3RvdHlwZSwgY3RybClcblxuZXhwb3J0IGRlZmF1bHQgQXBwSW5zdGFuY2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanNcbiAqKi8iLCJleHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscydcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgY29uc3QgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKVxuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0IGNvbnN0IGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge31cblxubGV0IF9TZXRcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIFNldC50b1N0cmluZygpLm1hdGNoKC9uYXRpdmUgY29kZS8pKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0XG59XG5lbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRba2V5XSAhPT0gdW5kZWZpbmVkXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRoaXMuc2V0W2tleV0gPSAxXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IHsgX1NldCB9XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcilcbn0pXG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0J1xuXG5leHBvcnQge1xuICB1cGRhdGVBY3Rpb25zLFxuICBkZXN0cm95LFxuICBnZXRSb290RWxlbWVudCxcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFjayxcbiAgcmVmcmVzaERhdGFcbn0gZnJvbSAnLi9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4uLy4uL3V0aWwnXG5cbmltcG9ydCB7XG4gIGRlZmluZSxcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG5cbiAgbGV0IHJlc3VsdFxuICAvLyBAc2VlOiBsaWIvYXBwL2J1bmRsZS5qc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSBiaW5kKGRlZmluZSwgdGhpcylcbiAgY29uc3QgYnVuZGxlQm9vdHN0cmFwID0gKG5hbWUsIGNvbmZpZywgX2RhdGEpID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwgY29uZmlnLCBfZGF0YSB8fCBkYXRhKVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIuY3JlYXRlRmluaXNoKClcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBBZnRlciBpbnRpYWxpemVkIGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcbiAgfVxuXG4gIC8vIGJhY2t3YXJkKHJlZ2lzdGVyL3JlbmRlcilcbiAgY29uc3QgYnVuZGxlUmVnaXN0ZXIgPSBiaW5kKHJlZ2lzdGVyLCB0aGlzKVxuICBjb25zdCBidW5kbGVSZW5kZXIgPSAobmFtZSwgX2RhdGEpID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwge30sIF9kYXRhKVxuICB9XG5cbiAgY29uc3QgYnVuZGxlUmVxdWlyZSA9IG5hbWUgPT4gX2RhdGEgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcCh0aGlzLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cblxuICBjb25zdCBidW5kbGVEb2N1bWVudCA9IHRoaXMuZG9jXG5cbiAgbGV0IGZ1bmN0aW9uQm9keVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYGZ1bmN0aW9uICgpIHsuLi59YCAtPiBgey4uLn1gXG4gICAgLy8gbm90IHZlcnkgc3RyaWN0XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpLnN1YnN0cigxMilcbiAgfVxuICBlbHNlIGlmIChjb2RlKSB7XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpXG4gIH1cblxuICBjb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuICBpZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtICE9PSAnV2ViJykge1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5yZXF1aXJlTW9kdWxlKCd0aW1lcicpXG4gICAgY29uc3QgdGltZXJBUElzID0ge1xuICAgICAgc2V0VGltZW91dDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0VGltZW91dChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gdGhpcy51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIHNldEludGVydmFsOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRJbnRlcnZhbChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gdGhpcy51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KG4pXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnRlcnZhbDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJJbnRlcnZhbChuKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICdzZXRJbnRlcnZhbCcsXG4gICAgICAnY2xlYXJUaW1lb3V0JyxcbiAgICAgICdjbGVhckludGVydmFsJyxcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICB0aW1lckFQSXMuc2V0VGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5zZXRJbnRlcnZhbCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhclRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuY2xlYXJJbnRlcnZhbClcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGFwaSB0aGF0IGludm9rZWQgYnkganMgYnVuZGxlIGNvZGVcbiAqXG4gKiAtIGRlZmluZShuYW1lLCBmYWN0b3J5KTogZGVmaW5lIGEgbmV3IGNvbXBvc2VkIGNvbXBvbmVudCB0eXBlXG4gKiAtIGJvb3RzdHJhcCh0eXBlLCBjb25maWcsIGRhdGEpOiByZXF1aXJlIGEgY2VydGFpbiB0eXBlICZcbiAqICAgICAgICAgcmVuZGVyIHdpdGggKG9wdGlvbmFsKSBkYXRhXG4gKlxuICogZGVwcmVjYXRlZDpcbiAqIC0gcmVnaXN0ZXIodHlwZSwgb3B0aW9ucyk6IHJlZ2lzdGVyIGEgbmV3IGNvbXBvc2VkIGNvbXBvbmVudCB0eXBlXG4gKiAtIHJlbmRlcih0eXBlLCBkYXRhKTogcmVuZGVyIGJ5IGEgY2VydGFpbiB0eXBlIHdpdGggKG9wdGlvbmFsKSBkYXRhXG4gKiAtIHJlcXVpcmUodHlwZSkoZGF0YSk6IHJlcXVpcmUgYSB0eXBlIHRoZW4gcmVuZGVyIHdpdGggZGF0YVxuICovXG5cbmV4cG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJy4vYm9vdHN0cmFwJ1xuZXhwb3J0IHsgY2xlYXJDb21tb25Nb2R1bGVzLCBkZWZpbmUsIHJlZ2lzdGVyIH0gZnJvbSAnLi9kZWZpbmUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0ICogYXMgZG93bmdyYWRlIGZyb20gJy4uL2Rvd25ncmFkZSdcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgaXNXZWV4Q29tcG9uZW50LFxuICBpc05wbU1vZHVsZSxcbiAgcmVtb3ZlV2VleFByZWZpeCxcbiAgcmVtb3ZlSlNTdXJmaXhcbn0gZnJvbSAnLi9taXNjJ1xuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwIChhcHAsIG5hbWUsIGNvbmZpZywgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBib290c3RyYXAgZm9yICR7bmFtZX1gKVxuXG4gIGxldCBjbGVhbk5hbWVcblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghYXBwLmN1c3RvbUNvbXBvbmVudE1hcFtjbGVhbk5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJdCdzIG5vdCBhIGNvbXBvbmVudDogJHtuYW1lfWApXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYFdyb25nIGNvbXBvbmVudCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgICFzZW12ZXIuc2F0aXNmaWVzKGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24sXG4gICAgICBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cblxuICBjb25zdCBfY2hlY2tEb3duZ3JhZGUgPSBkb3duZ3JhZGUuY2hlY2soY29uZmlnLmRvd25ncmFkZSlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChfY2hlY2tEb3duZ3JhZGUuaXNEb3duZ3JhZGUpIHtcbiAgICBhcHAuY2FsbFRhc2tzKFt7XG4gICAgICBtb2R1bGU6ICdpbnN0YW5jZVdyYXAnLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgYXJnczogW1xuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JUeXBlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuY29kZSxcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZVxuICAgICAgXVxuICAgIH1dKVxuICAgIHJldHVybiBuZXcgRXJyb3IoYERvd25ncmFkZVske19jaGVja0Rvd25ncmFkZS5jb2RlfV06ICR7X2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZX1gKVxuICB9XG5cbiAgYXBwLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwgeyBfYXBwOiBhcHAgfSwgbnVsbCwgZGF0YSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qc1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkXG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpZDtcbiAgICB9KTtcblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdO1xuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5TZW1WZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2g7XG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpO1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLmxvb3NlLCBvdGhlcik7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpO1xufTtcblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlUHJlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gLTE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAxO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDA7XG5cbiAgdmFyIGkgPSAwO1xuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV07XG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldO1xuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAwO1xuICAgIGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiAtMTtcbiAgICBlbHNlIGlmIChhID09PSBiKVxuICAgICAgY29udGludWU7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKTtcbiAgfSB3aGlsZSAoKytpKTtcbn07XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24ocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgIC8vIGRyb3AgYW55IHByZXJlbGVhc2VzIHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdCwgc2luY2UgdGhleSBhcmUgbm90XG4gICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHwgdGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1ham9yKys7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5taW5vcisrO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgIC8vIDEuMi4wLTUgcGF0Y2hlcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucGF0Y2grKztcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrO1xuICAgICAgICAgICAgaSA9IC0yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSlcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpO1xuICB9XG4gIHRoaXMuZm9ybWF0KCk7XG4gIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmV4cG9ydHMuaW5jID0gaW5jO1xuZnVuY3Rpb24gaW5jKHZlcnNpb24sIHJlbGVhc2UsIGxvb3NlLCBpZGVudGlmaWVyKSB7XG4gIGlmICh0eXBlb2YobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZTtcbiAgICBsb29zZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG5mdW5jdGlvbiBkaWZmKHZlcnNpb24xLCB2ZXJzaW9uMikge1xuICBpZiAoZXEodmVyc2lvbjEsIHZlcnNpb24yKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKTtcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMik7XG4gICAgaWYgKHYxLnByZXJlbGVhc2UubGVuZ3RoIHx8IHYyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAncHJlJytrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3ByZXJlbGVhc2UnO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnM7XG5cbnZhciBudW1lcmljID0gL15bMC05XSskLztcbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHZhciBhbnVtID0gbnVtZXJpYy50ZXN0KGEpO1xuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKTtcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthO1xuICAgIGIgPSArYjtcbiAgfVxuXG4gIHJldHVybiAoYW51bSAmJiAhYm51bSkgPyAtMSA6XG4gICAgICAgICAoYm51bSAmJiAhYW51bSkgPyAxIDpcbiAgICAgICAgIGEgPCBiID8gLTEgOlxuICAgICAgICAgYSA+IGIgPyAxIDpcbiAgICAgICAgIDA7XG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnM7XG5mdW5jdGlvbiByY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKTtcbn1cblxuZXhwb3J0cy5tYWpvciA9IG1ham9yO1xuZnVuY3Rpb24gbWFqb3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1ham9yO1xufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3I7XG5mdW5jdGlvbiBtaW5vcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3I7XG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcbmZ1bmN0aW9uIHBhdGNoKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaDtcbn1cblxuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLmNvbXBhcmUoYik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUxvb3NlID0gY29tcGFyZUxvb3NlO1xuZnVuY3Rpb24gY29tcGFyZUxvb3NlKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZTtcbmZ1bmN0aW9uIHJjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydDtcbmZ1bmN0aW9uIHNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnQ7XG5mdW5jdGlvbiByc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pO1xufVxuXG5leHBvcnRzLmd0ID0gZ3Q7XG5mdW5jdGlvbiBndChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwO1xufVxuXG5leHBvcnRzLmx0ID0gbHQ7XG5mdW5jdGlvbiBsdChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwO1xufVxuXG5leHBvcnRzLmVxID0gZXE7XG5mdW5jdGlvbiBlcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPT09IDA7XG59XG5cbmV4cG9ydHMubmVxID0gbmVxO1xuZnVuY3Rpb24gbmVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMDtcbn1cblxuZXhwb3J0cy5ndGUgPSBndGU7XG5mdW5jdGlvbiBndGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDA7XG59XG5cbmV4cG9ydHMubHRlID0gbHRlO1xuZnVuY3Rpb24gbHRlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8PSAwO1xufVxuXG5leHBvcnRzLmNtcCA9IGNtcDtcbmZ1bmN0aW9uIGNtcChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgdmFyIHJldDtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgPT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhICE9PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnJzogY2FzZSAnPSc6IGNhc2UgJz09JzogcmV0ID0gZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICchPSc6IHJldCA9IG5lcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz4nOiByZXQgPSBndChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJz49JzogcmV0ID0gZ3RlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPCc6IHJldCA9IGx0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPD0nOiByZXQgPSBsdGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9wZXJhdG9yOiAnICsgb3ApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3I7XG5mdW5jdGlvbiBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiBjb21wO1xuICAgIGVsc2VcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlO1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKVxuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG5cbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdGhpcy5wYXJzZShjb21wKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIGVsc2VcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb247XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKTtcbn1cblxudmFyIEFOWSA9IHt9O1xuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihjb21wKSB7XG4gIHZhciByID0gdGhpcy5sb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIG0gPSBjb21wLm1hdGNoKHIpO1xuXG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNvbXBhcmF0b3I6ICcgKyBjb21wKTtcblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXTtcbiAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9JylcbiAgICB0aGlzLm9wZXJhdG9yID0gJyc7XG5cbiAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gIGlmICghbVsyXSlcbiAgICB0aGlzLnNlbXZlciA9IEFOWTtcbiAgZWxzZVxuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5sb29zZSk7XG59O1xuXG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZTtcbmZ1bmN0aW9uIFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICBpZiAoKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpICYmIHJhbmdlLmxvb3NlID09PSBsb29zZSlcbiAgICByZXR1cm4gcmFuZ2U7XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2U7XG4gIHRoaXMuc2V0ID0gcmFuZ2Uuc3BsaXQoL1xccypcXHxcXHxcXHMqLykubWFwKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpO1xuICB9LCB0aGlzKS5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGg7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyByYW5nZSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdCgpO1xufVxuXG5SYW5nZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24oY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKTtcbiAgfSkuam9pbignfHwnKS50cmltKCk7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlO1xufTtcblxuUmFuZ2UucHJvdG90eXBlLnBhcnNlUmFuZ2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLmxvb3NlO1xuICByYW5nZSA9IHJhbmdlLnRyaW0oKTtcbiAgZGVidWcoJ3JhbmdlJywgcmFuZ2UsIGxvb3NlKTtcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbSFlQSEVOUkFOR0VMT09TRV0gOiByZVtIWVBIRU5SQU5HRV07XG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSk7XG4gIGRlYnVnKCdoeXBoZW4gcmVwbGFjZScsIHJhbmdlKTtcbiAgLy8gYD4gMS4yLjMgPCAxLjIuNWAgPT4gYD4xLjIuMyA8MS4yLjVgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSk7XG4gIGRlYnVnKCdjb21wYXJhdG9yIHRyaW0nLCByYW5nZSwgcmVbQ09NUEFSQVRPUlRSSU1dKTtcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW1RJTERFVFJJTV0sIHRpbGRlVHJpbVJlcGxhY2UpO1xuXG4gIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSk7XG5cbiAgLy8gbm9ybWFsaXplIHNwYWNlc1xuICByYW5nZSA9IHJhbmdlLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG5cbiAgdmFyIGNvbXBSZSA9IGxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgc2V0ID0gcmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJykuc3BsaXQoL1xccysvKTtcbiAgaWYgKHRoaXMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24oY29tcCkge1xuICAgICAgcmV0dXJuICEhY29tcC5tYXRjaChjb21wUmUpO1xuICAgIH0pO1xuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXQ7XG59O1xuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzO1xuZnVuY3Rpb24gdG9Db21wYXJhdG9ycyhyYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnNldC5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiBjb21wLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9KS5qb2luKCcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gIH0pO1xufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygndGlsZGVzJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdzdGFycycsIGNvbXApO1xuICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gaXNYKGlkKSB7XG4gIHJldHVybiAhaWQgfHwgaWQudG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IGlkID09PSAnKic7XG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKSB7XG4gIHZhciByID0gbG9vc2UgPyByZVtUSUxERUxPT1NFXSA6IHJlW1RJTERFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd0aWxkZScsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpXG4gICAgICAvLyB+MS4yID09ID49MS4yLjAgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH0gZWxzZVxuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBsb29zZSk7XG4gIHZhciByID0gbG9vc2UgPyByZVtDQVJFVExPT1NFXSA6IHJlW0NBUkVUXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgcmV0O1xuXG4gICAgaWYgKGlzWChNKSlcbiAgICAgIHJldCA9ICcnO1xuICAgIGVsc2UgaWYgKGlzWChtKSlcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlQ2FyZXQgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKTtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ2NhcmV0IHJldHVybicsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIGxvb3NlKTtcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlKGNvbXAsIGxvb3NlKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1hSQU5HRUxPT1NFXSA6IHJlW1hSQU5HRV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24ocmV0LCBndGx0LCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCd4UmFuZ2UnLCBjb21wLCByZXQsIGd0bHQsIE0sIG0sIHAsIHByKTtcbiAgICB2YXIgeE0gPSBpc1goTSk7XG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pO1xuICAgIHZhciB4cCA9IHhtIHx8IGlzWChwKTtcbiAgICB2YXIgYW55WCA9IHhwO1xuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKVxuICAgICAgZ3RsdCA9ICcnO1xuXG4gICAgaWYgKHhNKSB7XG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nIHx8IGd0bHQgPT09ICc8Jykge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGFsbG93ZWRcbiAgICAgICAgcmV0ID0gJzwwLjAuMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndGx0ICYmIGFueVgpIHtcbiAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgIGlmICh4bSlcbiAgICAgICAgbSA9IDA7XG4gICAgICBpZiAoeHApXG4gICAgICAgIHAgPSAwO1xuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZFxuICAgICAgICAvLyBwYXNzLiAgU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgZ3RsdCA9ICc8J1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMVxuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwO1xuICAgIH0gZWxzZSBpZiAoeG0pIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBsb29zZSk7XG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVtTVEFSXSwgJycpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBzdHJpbmcucmVwbGFjZShyZVtIWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSgkMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgICAgICAgICAgICAgICAgICAgICAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcblxuICBpZiAoaXNYKGZNKSlcbiAgICBmcm9tID0gJyc7XG4gIGVsc2UgaWYgKGlzWChmbSkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKGZwKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnO1xuICBlbHNlXG4gICAgZnJvbSA9ICc+PScgKyBmcm9tO1xuXG4gIGlmIChpc1godE0pKVxuICAgIHRvID0gJyc7XG4gIGVsc2UgaWYgKGlzWCh0bSkpXG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWCh0cCkpXG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCc7XG4gIGVsc2UgaWYgKHRwcilcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHI7XG4gIGVsc2VcbiAgICB0byA9ICc8PScgKyB0bztcblxuICByZXR1cm4gKGZyb20gKyAnICcgKyB0bykudHJpbSgpO1xufVxuXG5cbi8vIGlmIEFOWSBvZiB0aGUgc2V0cyBtYXRjaCBBTEwgb2YgaXRzIGNvbXBhcmF0b3JzLCB0aGVuIHBhc3NcblJhbmdlLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpXG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTZXQoc2V0LCB2ZXJzaW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpO1xuICAgICAgaWYgKHNldFtpXS5zZW12ZXIgPT09IEFOWSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXI7XG4gICAgICAgIGlmIChhbGxvd2VkLm1ham9yID09PSB2ZXJzaW9uLm1ham9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLm1pbm9yID09PSB2ZXJzaW9uLm1pbm9yICYmXG4gICAgICAgICAgICBhbGxvd2VkLnBhdGNoID09PSB2ZXJzaW9uLnBhdGNoKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZlcnNpb24gaGFzIGEgLXByZSwgYnV0IGl0J3Mgbm90IG9uZSBvZiB0aGUgb25lcyB3ZSBsaWtlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllcztcbmZ1bmN0aW9uIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKTtcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZztcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiByY29tcGFyZShhLCBiLCBsb29zZSk7XG4gIH0pWzBdIHx8IG51bGw7XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+Ly5ucG1pbnN0YWxsL3NlbXZlci81LjIuMC9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxufSAoKSlcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vLm5wbWluc3RhbGwvcHJvY2Vzcy8wLjExLjUvcHJvY2Vzcy9icm93c2VyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBWaWV3TW9kZWwgQ29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7XG4gIGluaXRTdGF0ZVxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYnVpbGRcbn0gZnJvbSAnLi9jb21waWxlcidcbmltcG9ydCB7XG4gIGluaXRFdmVudHMsXG4gIG1peGluRXZlbnRzXG59IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJNb2R1bGVzLFxuICByZWdpc3Rlck1ldGhvZHNcbn0gZnJvbSAnLi4vYXBwL3JlZ2lzdGVyJ1xuXG4vKipcbiAqIFZpZXdNb2RlbCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAgICBjb21wb25lbnQgb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudFZtICAgd2hpY2ggY29udGFpbnMgX2FwcFxuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudEVsICAgcm9vdCBlbGVtZW50IG9yIGZyYWcgYmxvY2tcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXJnZWREYXRhIGV4dGVybmFsIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBleHRlcm5hbEV2ZW50cyBleHRlcm5hbCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm0gKFxuICB0eXBlLFxuICBvcHRpb25zLFxuICBwYXJlbnRWbSxcbiAgcGFyZW50RWwsXG4gIG1lcmdlZERhdGEsXG4gIGV4dGVybmFsRXZlbnRzXG4pIHtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50Vm0uX3JlYWxQYXJlbnQgPyBwYXJlbnRWbS5fcmVhbFBhcmVudCA6IHBhcmVudFZtXG4gIHRoaXMuX2FwcCA9IHBhcmVudFZtLl9hcHBcbiAgcGFyZW50Vm0uX2NoaWxkcmVuVm1zICYmIHBhcmVudFZtLl9jaGlsZHJlblZtcy5wdXNoKHRoaXMpXG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRoaXMuX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV0gfHwge31cbiAgfVxuICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IHt9XG5cbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fbWV0aG9kcyA9IG9wdGlvbnMubWV0aG9kcyB8fCB7fVxuICB0aGlzLl9jb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwge31cbiAgdGhpcy5fY3NzID0gb3B0aW9ucy5zdHlsZSB8fCB7fVxuICB0aGlzLl9pZHMgPSB7fVxuICB0aGlzLl92bUV2ZW50cyA9IHt9XG4gIHRoaXMuX2NoaWxkcmVuVm1zID0gW11cbiAgdGhpcy5fdHlwZSA9IHR5cGVcblxuICAvLyBiaW5kIGV2ZW50cyBhbmQgbGlmZWN5Y2xlc1xuICBpbml0RXZlbnRzKHRoaXMsIGV4dGVybmFsRXZlbnRzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiaW5pdFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6aW5pdCcpXG4gIHRoaXMuX2luaXRlZCA9IHRydWVcblxuICAvLyBwcm94eSBkYXRhIGFuZCBtZXRob2RzXG4gIC8vIG9ic2VydmUgZGF0YSBhbmQgYWRkIHRoaXMgdG8gdm1zXG4gIHRoaXMuX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IGRhdGEoKSA6IGRhdGFcbiAgaWYgKG1lcmdlZERhdGEpIHtcbiAgICBleHRlbmQodGhpcy5fZGF0YSwgbWVyZ2VkRGF0YSlcbiAgfVxuICBpbml0U3RhdGUodGhpcylcblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImNyZWF0ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmNyZWF0ZWQnKVxuICB0aGlzLl9jcmVhdGVkID0gdHJ1ZVxuXG4gIC8vIGJhY2t3YXJkIG9sZCByZWFkeSBlbnRyeVxuICBpZiAob3B0aW9ucy5tZXRob2RzICYmIG9wdGlvbnMubWV0aG9kcy5yZWFkeSkge1xuICAgIGNvbnNvbGUud2FybignXCJleHBvcnRzLm1ldGhvZHMucmVhZHlcIiBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICdwbGVhc2UgdXNlIFwiZXhwb3J0cy5jcmVhdGVkXCIgaW5zdGVhZCcpXG4gICAgb3B0aW9ucy5tZXRob2RzLnJlYWR5LmNhbGwodGhpcylcbiAgfVxuXG4gIC8vIGlmIG5vIHBhcmVudEVsZW1lbnQgdGhlbiBzcGVjaWZ5IHRoZSBkb2N1bWVudEVsZW1lbnRcbiAgdGhpcy5fcGFyZW50RWwgPSBwYXJlbnRFbCB8fCB0aGlzLl9hcHAuZG9jLmRvY3VtZW50RWxlbWVudFxuICBidWlsZCh0aGlzKVxufVxuXG5taXhpbkV2ZW50cyhWbS5wcm90b3R5cGUpXG5cbmV4dGVuZChWbSwge1xuICByZWdpc3Rlck1vZHVsZXMsXG4gIHJlZ2lzdGVyTWV0aG9kc1xufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9pbmRleC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4vd2F0Y2hlcidcbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQge1xuICBvYnNlcnZlLFxuICBwcm94eSxcbiAgdW5wcm94eVxufSBmcm9tICcuL29ic2VydmVyJ1xuaW1wb3J0IHtcbiAgaXNQbGFpbk9iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXVxuICBpbml0RGF0YSh2bSlcbiAgaW5pdENvbXB1dGVkKHZtKVxuICBpbml0TWV0aG9kcyh2bSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICBsZXQgZGF0YSA9IHZtLl9kYXRhXG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJveHkodm0sIGtleXNbaV0pXG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdm0pXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSkge1xuICBjb25zdCBjb21wdXRlZCA9IHZtLl9jb21wdXRlZFxuICBpZiAoY29tcHV0ZWQpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXJEZWYgPSBjb21wdXRlZFtrZXldXG4gICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRlZi5nZXQgPSBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZiwgdm0pXG4gICAgICAgIGRlZi5zZXQgPSBub29wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWYuZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgICAgICA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgICA/IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgICA6IGJpbmQodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgICAgICA/IGJpbmQodXNlckRlZi5zZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIGRlZilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyIChnZXR0ZXIsIG93bmVyKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvd25lciwgZ2V0dGVyLCBudWxsLCB7XG4gICAgbGF6eTogdHJ1ZVxuICB9KVxuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICB3YXRjaGVyLmV2YWx1YXRlKClcbiAgICB9XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIHdhdGNoZXIuZGVwZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSB2bS5fbWV0aG9kc1xuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAobGV0IGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB2bVtrZXldID0gbWV0aG9kc1trZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG4vLyBpbXBvcnQgeyBwdXNoV2F0Y2hlciB9IGZyb20gJy4vYmF0Y2hlcidcbmltcG9ydCB7XG4gIHdhcm4sXG4gIHJlbW92ZSxcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgcGFyc2VQYXRoLFxuICBfU2V0IGFzIFNldFxufSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxubGV0IHByZXZUYXJnZXRcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdGNoZXIgKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIGNvbnN0IGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW11cbiAgdGhpcy5uZXdEZXBzID0gW11cbiAgdGhpcy5kZXBJZHMgPSBuZXcgU2V0KClcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgU2V0KClcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbilcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdGYWlsZWQgd2F0Y2hpbmcgcGF0aDogJyArIGV4cE9yRm4gK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKVxuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJlZm9yZUdldCgpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICB0aGlzLmFmdGVyR2V0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHJldlRhcmdldCA9IERlcC50YXJnZXRcbiAgRGVwLnRhcmdldCA9IHRoaXNcbn1cblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RGVwfSBkZXBcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiAoZGVwKSB7XG4gIGNvbnN0IGlkID0gZGVwLmlkXG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZClcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApXG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZnRlckdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHByZXZUYXJnZXRcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBkZXAgPSB0aGlzLmRlcHNbaV1cbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICB9XG4gIGxldCB0bXAgPSB0aGlzLmRlcElkc1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzXG4gIHRoaXMubmV3RGVwSWRzID0gdG1wXG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKClcbiAgdG1wID0gdGhpcy5kZXBzXG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwc1xuICB0aGlzLm5ld0RlcHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDBcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBzaGFsbG93XG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHNoYWxsb3cpIHtcbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ydW4oKVxuICB9XG4gIC8vIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gIC8vICAgdGhpcy5ydW4oKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vIGlmIHF1ZXVlZCwgb25seSBvdmVyd3JpdGUgc2hhbGxvdyB3aXRoIG5vbi1zaGFsbG93LFxuICAvLyAgIC8vIGJ1dCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gIC8vICAgdGhpcy5zaGFsbG93ID0gdGhpcy5xdWV1ZWRcbiAgLy8gICAgID8gc2hhbGxvd1xuICAvLyAgICAgICA/IHRoaXMuc2hhbGxvd1xuICAvLyAgICAgICA6IGZhbHNlXG4gIC8vICAgICA6ICEhc2hhbGxvd1xuICAvLyAgIHRoaXMucXVldWVkID0gdHJ1ZVxuICAvLyAgIHB1c2hXYXRjaGVyKHRoaXMpXG4gIC8vIH1cbn1cblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoKVxuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgICAvLyBub24tc2hhbGxvdyB1cGRhdGUgKGNhdXNlZCBieSBhIHZtIGRpZ2VzdCkuXG4gICAgICAoKGlzT2JqZWN0KHZhbHVlKSB8fCB0aGlzLmRlZXApICYmICF0aGlzLnNoYWxsb3cpXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9XG4gICAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gKCkge1xuICAvLyBhdm9pZCBvdmVyd3JpdGluZyBhbm90aGVyIHdhdGNoZXIgdGhhdCBpcyBiZWluZ1xuICAvLyBjb2xsZWN0ZWQuXG4gIGNvbnN0IGN1cnJlbnQgPSBEZXAudGFyZ2V0XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxuICBEZXAudGFyZ2V0ID0gY3VycmVudFxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKytcbiAgdGhpcy5zdWJzID0gW11cbn1cblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbFxuXG4vKipcbiAqIEFkZCBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKVxufVxuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG59XG5cbi8qKlxuICogTm90aWZ5IGFsbCBzdWJzY3JpYmVycyBvZiBhIG5ldyB2YWx1ZS5cbiAqL1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICBjb25zdCBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKClcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7IGFycmF5TWV0aG9kcyB9IGZyb20gJy4vYXJyYXknXG5pbXBvcnQge1xuICBkZWYsXG4gIHJlbW92ZSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGhhc1Byb3RvLFxuICBoYXNPd24sXG4gIGlzUmVzZXJ2ZWRcbn0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmRlcCA9IG5ldyBEZXAoKVxuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBhdWdtZW50ID0gaGFzUHJvdG9cbiAgICAgID8gcHJvdG9BdWdtZW50XG4gICAgICA6IGNvcHlBdWdtZW50XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpXG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG59XG5cbi8vIEluc3RhbmNlIG1ldGhvZHNcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gKG9iaikge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgdGhpcy5jb252ZXJ0KGtleSwgb2JqW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhIHByb3BlcnR5IGludG8gZ2V0dGVyL3NldHRlciBzbyB3ZSBjYW4gZW1pdFxuICogdGhlIGV2ZW50cyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC9jaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZGVmaW5lUmVhY3RpdmUodGhpcy52YWx1ZSwga2V5LCB2YWwpXG59XG5cbi8qKlxuICogQWRkIGFuIG93bmVyIHZtLCBzbyB0aGF0IHdoZW4gJHNldC8kZGVsZXRlIG11dGF0aW9uc1xuICogaGFwcGVuIHdlIGNhbiBub3RpZnkgb3duZXIgdm1zIHRvIHByb3h5IHRoZSBrZXlzIGFuZFxuICogZGlnZXN0IHRoZSB3YXRjaGVycy4gVGhpcyBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSBvYmplY3RcbiAqIGlzIG9ic2VydmVkIGFzIGFuIGluc3RhbmNlJ3Mgcm9vdCAkZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuYWRkVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgKHRoaXMudm1zIHx8ICh0aGlzLnZtcyA9IFtdKSkucHVzaCh2bSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gb3duZXIgdm0uIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIG9iamVjdCBpc1xuICogc3dhcHBlZCBvdXQgYXMgYW4gaW5zdGFuY2UncyAkZGF0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLnJlbW92ZVZtID0gZnVuY3Rpb24gKHZtKSB7XG4gIHJlbW92ZSh0aGlzLnZtcywgdm0pXG59XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmNcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKiBAcmV0dXJuIHtPYnNlcnZlcnx1bmRlZmluZWR9XG4gKiBAc3RhdGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCB2bSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVyblxuICB9XG4gIGxldCBvYlxuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICB9IGVsc2UgaWYgKFxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpXG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pXG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlIChvYmosIGtleSwgdmFsKSB7XG4gIGNvbnN0IGRlcCA9IG5ldyBEZXAoKVxuXG4gIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXRcbiAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0XG5cbiAgbGV0IGNoaWxkT2IgPSBvYnNlcnZlKHZhbClcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKVxuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgZSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSB2YWx1ZVtpXVxuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbFxuICAgICAgfVxuICAgICAgY2hpbGRPYiA9IG9ic2VydmUobmV3VmFsKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouc3BsaWNlKGtleSwgMSwgdmFsKVxuICB9XG4gIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgIHNldChvYmouX2RhdGEsIGtleSwgdmFsKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuICBpZiAoIW9iKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBvYi5jb252ZXJ0KGtleSwgdmFsKVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICBwcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cblxuICBpZiAoIW9iKSB7XG4gICAgaWYgKG9iai5faXNWdWUpIHtcbiAgICAgIGRlbGV0ZSBvYmouX2RhdGFba2V5XVxuICAgICAgb2JqLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHVucHJveHkodm0sIGtleSlcbiAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEtFWV9XT1JEUyA9IFsnJGluZGV4JywgJyR2YWx1ZScsICckZXZlbnQnXVxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5ICh2bSwga2V5KSB7XG4gIGlmIChLRVlfV09SRFMuaW5kZXhPZihrZXkpID4gLTEgfHwgIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgICAgIHJldHVybiB2bS5fZGF0YVtrZXldXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgICAgIHZtLl9kYXRhW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb3h5ICh2bSwga2V5KSB7XG4gIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgZGVsZXRlIHZtW2tleV1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBkZWYgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG5leHBvcnQgY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGkpXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX19cbiAgICBsZXQgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRyZW1vdmUnLFxuICBmdW5jdGlvbiAkcmVtb3ZlIChpbmRleCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihpbmRleClcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCB0ZW1wbGF0ZSBwYXJzZXIgJiBkYXRhLWJpbmRpbmcgcHJvY2Vzc1xuICpcbiAqIHJlcXVpcmVkOlxuICogaW5kZXguanM6IFZtXG4gKiBkb20taGVscGVyLmpzOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVCbG9ja1xuICogZG9tLWhlbHBlci5qczogYXR0YWNoVGFyZ2V0LCBtb3ZlVGFyZ2V0LCByZW1vdmVUYXJnZXRcbiAqIGRpcmVjdGl2ZS5qczogYmluZEVsZW1lbnQsIGJpbmRTdWJWbSwgc2V0SWQsIHdhdGNoXG4gKiBldmVudHMuanM6ICRvblxuICovXG5cbmltcG9ydCB7XG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIGJpbmRcbn0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7XG4gIGluaXREYXRhLFxuICBpbml0Q29tcHV0ZWRcbn0gZnJvbSAnLi4vY29yZS9zdGF0ZSdcbmltcG9ydCB7XG4gIGJpbmRFbGVtZW50LFxuICBzZXRJZCxcbiAgYmluZFN1YlZtLFxuICBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkLFxuICBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMsXG4gIHdhdGNoXG59IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQmxvY2ssXG4gIGNyZWF0ZUJvZHksXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGF0dGFjaFRhcmdldCxcbiAgbW92ZVRhcmdldCxcbiAgcmVtb3ZlVGFyZ2V0XG59IGZyb20gJy4vZG9tLWhlbHBlcidcblxuLyoqXG4gKiBidWlsZChleHRlcm5hbERpcnMpXG4gKiAgIGNyZWF0ZVZtKClcbiAqICAgbWVyZ2UoZXh0ZXJuYWxEaXJzLCBkaXJzKVxuICogICBjb21waWxlKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgIGlmICh0eXBlIGlzIGNvbnRlbnQpIGNyZWF0ZSBjb250ZW50Tm9kZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWZvcikgZm9yZWFjaCAtPiBjcmVhdGUgY29udGV4dFxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXRGb3IsIHBhcmVudE5vZGUpOiBkaWZmKGxpc3QpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAoZGlycyBoYXZlIHYtaWYpIGFzc2VydFxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXRJZiwgcGFyZW50Tm9kZSk6IHRvZ2dsZShzaG93bikgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIGR5bmFtaWMpXG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dER5bmFtaWNUeXBlLCBwYXJlbnROb2RlKTogd2F0Y2godHlwZSkgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIGN1c3RvbSlcbiAqICAgICAgIGFkZENoaWxkVm0odm0sIHBhcmVudFZtKVxuICogICAgICAgYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqICAgICBlbHNlIGlmICh0eXBlIGlzIG5hdGl2ZSlcbiAqICAgICAgIHNldChkaXJzKTogdXBkYXRlKGlkL2F0dHIvc3R5bGUvY2xhc3MpIG9uY2hhbmdlXG4gKiAgICAgICBhcHBlbmQodGVtcGxhdGUsIHBhcmVudE5vZGUpXG4gKiAgICAgICBmb3JlYWNoIGNoaWxkTm9kZXMgLT4gY29tcGlsZShjaGlsZE5vZGUsIHRlbXBsYXRlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQgKHZtKSB7XG4gIGNvbnN0IG9wdCA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IHRlbXBsYXRlID0gb3B0LnRlbXBsYXRlIHx8IHt9XG5cbiAgaWYgKG9wdC5yZXBsYWNlKSB7XG4gICAgaWYgKHRlbXBsYXRlLmNoaWxkcmVuICYmIHRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW5bMF0sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZS5jaGlsZHJlbiwgdm0uX3BhcmVudEVsKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZSwgdm0uX3BhcmVudEVsKVxuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJyZWFkeVwiIGxpZmVjeWNsZSBpbiBWbSgke3ZtLl90eXBlfSlgKVxuICB2bS4kZW1pdCgnaG9vazpyZWFkeScpXG4gIHZtLl9yZWFkeSA9IHRydWVcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50cyBieSBjaGlsZCBvciBjaGlsZHJlbiBhbmQgYXBwZW5kIHRvIHBhcmVudCBlbGVtZW50cy5cbiAqIFJvb3QgZWxlbWVudCBpbmZvIHdvdWxkIGJlIG1lcmdlZCBpZiBoYXMuIFRoZSBmaXJzdCBhcmd1bWVudCBtYXkgYmUgYW4gYXJyYXlcbiAqIGlmIHRoZSByb290IGVsZW1lbnQgd2l0aCBvcHRpb25zLnJlcGxhY2UgaGFzIG5vdCBvbmx5IG9uZSBjaGlsZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgZGVzdFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG5cbiAgaWYgKGFwcC5sYXN0U2lnbmFsID09PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldElzRnJhZ21lbnQodGFyZ2V0KSkge1xuICAgIGNvbXBpbGVGcmFnbWVudCh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIG1ldGEgPSBtZXRhIHx8IHt9XG4gIGlmICh0YXJnZXRJc0NvbnRlbnQodGFyZ2V0KSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJjb250ZW50XCIgYmxvY2sgYnknLCB0YXJnZXQpXG4gICAgdm0uX2NvbnRlbnQgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXROZWVkQ2hlY2tSZXBlYXQodGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJyZXBlYXRcIiBsb2dpYyBieScsIHRhcmdldClcbiAgICBjb21waWxlUmVwZWF0KHZtLCB0YXJnZXQsIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRhcmdldE5lZWRDaGVja1Nob3duKHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiaWZcIiBsb2dpYyBieScsIHRhcmdldClcbiAgICBjb21waWxlU2hvd24odm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlR2V0dGVyID0gbWV0YS50eXBlIHx8IHRhcmdldC50eXBlXG4gIGlmICh0YXJnZXROZWVkQ2hlY2tUeXBlKHR5cGVHZXR0ZXIsIG1ldGEpKSB7XG4gICAgY29tcGlsZVR5cGUodm0sIHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlID0gdHlwZUdldHRlclxuICBjb25zdCBjb21wb25lbnQgPSB0YXJnZXRJc0NvbXBvc2VkKHZtLCB0YXJnZXQsIHR5cGUpXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIGNvbXBvc2VkIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgICBjb21waWxlQ3VzdG9tQ29tcG9uZW50KHZtLCBjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIG5hdGl2ZSBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gIGNvbXBpbGVOYXRpdmVDb21wb25lbnQodm0sIHRhcmdldCwgZGVzdCwgdHlwZSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgaXMgYSBmcmFnbWVudCAoYW4gYXJyYXkpLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNGcmFnbWVudCAodGFyZ2V0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgdHlwZSBpcyBjb250ZW50L3Nsb3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbnRlbnQgKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdjb250ZW50JyB8fCB0YXJnZXQudHlwZSA9PT0gJ3Nsb3QnXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGxpc3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tSZXBlYXQgKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3JlcGVhdCcpICYmIHRhcmdldC5yZXBlYXRcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgYm9vbGVhbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1Nob3duICh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdzaG93bicpICYmIHRhcmdldC5zaG93blxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBkeW5hbWljIHR5cGUuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfGZ1bmN0aW9ufSB0eXBlR2V0dGVyXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1R5cGUgKHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgcmV0dXJuICh0eXBlb2YgdHlwZUdldHRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgIW1ldGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMga2luZCBvZiBjb21wb25lbnQgaXMgY29tcG9zZWQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNDb21wb3NlZCAodm0sIHRhcmdldCwgdHlwZSkge1xuICBsZXQgY29tcG9uZW50XG4gIGlmICh2bS5fYXBwICYmIHZtLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV1cbiAgfVxuICBpZiAodm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudCA9IHZtLl9vcHRpb25zLmNvbXBvbmVudHNbdHlwZV1cbiAgfVxuICBpZiAodGFyZ2V0LmNvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudCB8fCB7fVxuICB9XG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbGlzdCBvZiB0YXJnZXRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlRnJhZ21lbnQgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gIHRhcmdldC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbXBpbGUodm0sIGNoaWxkLCBmcmFnQmxvY2ssIG1ldGEpXG4gIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIHJlcGVhdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVJlcGVhdCAodm0sIHRhcmdldCwgZGVzdCkge1xuICBjb25zdCByZXBlYXQgPSB0YXJnZXQucmVwZWF0XG4gIGNvbnN0IG9sZFN0eWxlID0gdHlwZW9mIHJlcGVhdCA9PT0gJ2Z1bmN0aW9uJ1xuICBsZXQgZ2V0dGVyID0gcmVwZWF0LmdldHRlciB8fCByZXBlYXQuZXhwcmVzc2lvbiB8fCByZXBlYXRcbiAgaWYgKHR5cGVvZiBnZXR0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICBnZXR0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9XG4gIH1cbiAgY29uc3Qga2V5ID0gcmVwZWF0LmtleSB8fCAnJGluZGV4J1xuICBjb25zdCB2YWx1ZSA9IHJlcGVhdC52YWx1ZSB8fCAnJHZhbHVlJ1xuICBjb25zdCB0cmFja0J5ID0gcmVwZWF0LnRyYWNrQnkgfHwgdGFyZ2V0LnRyYWNrQnkgfHxcbiAgICAodGFyZ2V0LmF0dHIgJiYgdGFyZ2V0LmF0dHIudHJhY2tCeSlcblxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgZnJhZ0Jsb2NrLmNoaWxkcmVuID0gW11cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBbXVxuICBmcmFnQmxvY2sudm1zID0gW11cblxuICBiaW5kUmVwZWF0KHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgeyBnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIGlmIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNob3duICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IG5ld01ldGEgPSB7IHNob3duOiB0cnVlIH1cbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIGlmIChtZXRhLnJlcGVhdCkge1xuICAgIG5ld01ldGEucmVwZWF0ID0gbWV0YS5yZXBlYXRcbiAgfVxuXG4gIGJpbmRTaG93bih2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIGR5bmFtaWMgY29tcG9uZW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICAgdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gICBkZXN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0eXBlR2V0dGVyXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVUeXBlICh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyLmNhbGwodm0pXG4gIGNvbnN0IG5ld01ldGEgPSBleHRlbmQoeyB0eXBlIH0sIG1ldGEpXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuXG4gIGlmIChkZXN0LmVsZW1lbnQgJiYgZGVzdC5jaGlsZHJlbikge1xuICAgIGRlc3QuY2hpbGRyZW4ucHVzaChmcmFnQmxvY2spXG4gIH1cblxuICB3YXRjaCh2bSwgdHlwZUdldHRlciwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGU6IHZhbHVlIH0sIG1ldGEpXG4gICAgcmVtb3ZlVGFyZ2V0KHZtLCBmcmFnQmxvY2ssIHRydWUpXG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG4gIH0pXG5cbiAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGNvbXBvc2VkIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUN1c3RvbUNvbXBvbmVudCAodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKSB7XG4gIGNvbnN0IEN0b3IgPSB2bS5jb25zdHJ1Y3RvclxuICBjb25zdCBzdWJWbSA9IG5ldyBDdG9yKHR5cGUsIGNvbXBvbmVudCwgdm0sIGRlc3QsIHVuZGVmaW5lZCwge1xuICAgICdob29rOmluaXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJZCh2bSwgbnVsbCwgdGFyZ2V0LmlkLCB0aGlzKVxuICAgICAgLy8gYmluZCB0ZW1wbGF0ZSBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgICAgdGhpcy5fZXh0ZXJuYWxCaW5kaW5nID0ge1xuICAgICAgICBwYXJlbnQ6IHZtLFxuICAgICAgICB0ZW1wbGF0ZTogdGFyZ2V0XG4gICAgICB9XG4gICAgfSxcbiAgICAnaG9vazpjcmVhdGVkJzogZnVuY3Rpb24gKCkge1xuICAgICAgYmluZFN1YlZtKHZtLCB0aGlzLCB0YXJnZXQsIG1ldGEucmVwZWF0KVxuICAgIH0sXG4gICAgJ2hvb2s6cmVhZHknOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgICBjb21waWxlQ2hpbGRyZW4odm0sIHRhcmdldCwgdGhpcy5fY29udGVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQodm0sIHN1YlZtLCB0YXJnZXQpXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudCBmcm9tIHRlbXBsYXRlIGFuZCBhdHRhY2ggdG8gdGhlIGRlc3QgaWYgbmVlZGVkLlxuICogVGhlIHRpbWUgdG8gYXR0YWNoIGRlcGVuZHMgb24gd2hldGhlciB0aGUgbW9kZSBzdGF0dXMgaXMgbm9kZSBvciB0cmVlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVOYXRpdmVDb21wb25lbnQgKHZtLCB0ZW1wbGF0ZSwgZGVzdCwgdHlwZSkge1xuICBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnModGVtcGxhdGUpXG5cbiAgbGV0IGVsZW1lbnRcbiAgaWYgKGRlc3QucmVmID09PSAnX2RvY3VtZW50RWxlbWVudCcpIHtcbiAgICAvLyBpZiBpdHMgcGFyZW50IGlzIGRvY3VtZW50RWxlbWVudCB0aGVuIGl0J3MgYSBib2R5XG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBjcmVhdGUgYm9keSBmb3IgJHt0eXBlfWApXG4gICAgZWxlbWVudCA9IGNyZWF0ZUJvZHkodm0sIHR5cGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBjcmVhdGUgZWxlbWVudCBmb3IgJHt0eXBlfWApXG4gICAgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQodm0sIHR5cGUpXG4gIH1cblxuICBpZiAoIXZtLl9yb290RWwpIHtcbiAgICB2bS5fcm9vdEVsID0gZWxlbWVudFxuICAgIC8vIGJpbmQgZXZlbnQgZWFybGllciBiZWNhdXNlIG9mIGxpZmVjeWNsZSBpc3N1ZXNcbiAgICBjb25zdCBiaW5kaW5nID0gdm0uX2V4dGVybmFsQmluZGluZyB8fCB7fVxuICAgIGNvbnN0IHRhcmdldCA9IGJpbmRpbmcudGVtcGxhdGVcbiAgICBjb25zdCBwYXJlbnRWbSA9IGJpbmRpbmcucGFyZW50XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZXZlbnRzICYmIHBhcmVudFZtICYmIGVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgdHlwZSBpbiB0YXJnZXQuZXZlbnRzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYXJlbnRWbVt0YXJnZXQuZXZlbnRzW3R5cGVdXVxuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCBwYXJlbnRWbSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiaW5kRWxlbWVudCh2bSwgZWxlbWVudCwgdGVtcGxhdGUpXG5cbiAgaWYgKHRlbXBsYXRlLmF0dHIgJiYgdGVtcGxhdGUuYXR0ci5hcHBlbmQpIHsgLy8gYmFja3dhcmQsIGFwcGVuZCBwcm9wIGluIGF0dHJcbiAgICB0ZW1wbGF0ZS5hcHBlbmQgPSB0ZW1wbGF0ZS5hdHRyLmFwcGVuZFxuICB9XG5cbiAgaWYgKHRlbXBsYXRlLmFwcGVuZCkgeyAvLyBnaXZlIHRoZSBhcHBlbmQgYXR0cmlidXRlIGZvciBpb3MgYWRhcHRhdGlvblxuICAgIGVsZW1lbnQuYXR0ciA9IGVsZW1lbnQuYXR0ciB8fCB7fVxuICAgIGVsZW1lbnQuYXR0ci5hcHBlbmQgPSB0ZW1wbGF0ZS5hcHBlbmRcbiAgfVxuXG4gIGNvbnN0IHRyZWVNb2RlID0gdGVtcGxhdGUuYXBwZW5kID09PSAndHJlZSdcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmICF0cmVlTW9kZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gYXBwZW5kIHNpbmdsZSBub2RlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSBhdHRhY2hUYXJnZXQodm0sIGVsZW1lbnQsIGRlc3QpXG4gIH1cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSkge1xuICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGVtcGxhdGUsIGVsZW1lbnQpXG4gIH1cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSAmJiB0cmVlTW9kZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gYXBwZW5kIHdob2xlIHRyZWUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhbGwgY2hpbGRyZW4gdG8gYSBjZXJ0YWluIHBhcmVudCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuICh2bSwgdGVtcGxhdGUsIGRlc3QpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuICBjb25zdCBjaGlsZHJlbiA9IHRlbXBsYXRlLmNoaWxkcmVuXG4gIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbi5ldmVyeSgoY2hpbGQpID0+IHtcbiAgICAgIGNvbXBpbGUodm0sIGNoaWxkLCBkZXN0KVxuICAgICAgcmV0dXJuIGFwcC5sYXN0U2lnbmFsICE9PSAtMVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgbGlzdCB1cGRhdGUgYW5kIHJlZnJlc2ggdGhlIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGZyYWdCbG9jayB7dm1zLCBkYXRhLCBjaGlsZHJlbn1cbiAqIEBwYXJhbSB7b2JqZWN0fSBpbmZvICAgICAge2dldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGV9XG4gKi9cbmZ1bmN0aW9uIGJpbmRSZXBlYXQgKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgaW5mbykge1xuICBjb25zdCB2bXMgPSBmcmFnQmxvY2sudm1zXG4gIGNvbnN0IGNoaWxkcmVuID0gZnJhZ0Jsb2NrLmNoaWxkcmVuXG4gIGNvbnN0IHsgZ2V0dGVyLCB0cmFja0J5LCBvbGRTdHlsZSB9ID0gaW5mb1xuICBjb25zdCBrZXlOYW1lID0gaW5mby5rZXlcbiAgY29uc3QgdmFsdWVOYW1lID0gaW5mby52YWx1ZVxuXG4gIGZ1bmN0aW9uIGNvbXBpbGVJdGVtIChpdGVtLCBpbmRleCwgY29udGV4dCkge1xuICAgIGxldCBtZXJnZWREYXRhXG4gICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICBtZXJnZWREYXRhID0gaXRlbVxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBpZiAoIW1lcmdlZERhdGEuaGFzT3duUHJvcGVydHkoJ0lOREVYJykpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVyZ2VkRGF0YSwgJ0lOREVYJywge1xuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBcIklOREVYXCIgaW4gcmVwZWF0IGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICAgICAgICdwbGVhc2UgdXNlIFwiJGluZGV4XCIgaW5zdGVhZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gRWFjaCBsaXN0IGl0ZW0gbXVzdCBiZSBhbiBvYmplY3QgaW4gb2xkLXN0eWxlIHJlcGVhdCwgJ1xuICAgICAgICAgICsgJ3BsZWFzZSB1c2UgYHJlcGVhdD17e3YgaW4gbGlzdH19YCBpbnN0ZWFkLicpXG4gICAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgbWVyZ2VkRGF0YVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgfVxuICAgIGNvbnN0IG5ld0NvbnRleHQgPSBtZXJnZUNvbnRleHQoY29udGV4dCwgbWVyZ2VkRGF0YSlcbiAgICB2bXMucHVzaChuZXdDb250ZXh0KVxuICAgIGNvbXBpbGUobmV3Q29udGV4dCwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgcmVwZWF0OiBpdGVtIH0pXG4gIH1cblxuICBjb25zdCBsaXN0ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCBnZXR0ZXIsICdyZXBlYXQnLFxuICAgIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSB0aGUgXCJyZXBlYXRcIiBpdGVtIGhhcyBjaGFuZ2VkJywgZGF0YSlcbiAgICAgIGlmICghZnJhZ0Jsb2NrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRDaGlsZHJlbiA9IGNoaWxkcmVuLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZFZtcyA9IHZtcy5zbGljZSgpXG4gICAgICBjb25zdCBvbGREYXRhID0gZnJhZ0Jsb2NrLmRhdGEuc2xpY2UoKVxuICAgICAgLy8gMS4gY29sbGVjdCBhbGwgbmV3IHJlZnMgdHJhY2sgYnlcbiAgICAgIGNvbnN0IHRyYWNrTWFwID0ge31cbiAgICAgIGNvbnN0IHJldXNlZE1hcCA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGtleSA9PSBudWxsIHx8IGtleSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cmFja01hcFtrZXldID0gaXRlbVxuICAgICAgfSlcblxuICAgICAgLy8gMi4gcmVtb3ZlIHVudXNlZCBlbGVtZW50IGZvcmVhY2ggb2xkIGl0ZW1cbiAgICAgIGNvbnN0IHJldXNlZExpc3QgPSBbXVxuICAgICAgb2xkRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgaWYgKHRyYWNrTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXVzZWRNYXBba2V5XSA9IHtcbiAgICAgICAgICAgIGl0ZW0sIGluZGV4LCBrZXksXG4gICAgICAgICAgICB0YXJnZXQ6IG9sZENoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgICAgIHZtOiBvbGRWbXNbaW5kZXhdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZExpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlbW92ZVRhcmdldCh2bSwgb2xkQ2hpbGRyZW5baW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyAzLiBjcmVhdGUgbmV3IGVsZW1lbnQgZm9yZWFjaCBuZXcgaXRlbVxuICAgICAgY2hpbGRyZW4ubGVuZ3RoID0gMFxuICAgICAgdm1zLmxlbmd0aCA9IDBcbiAgICAgIGZyYWdCbG9jay5kYXRhID0gZGF0YS5zbGljZSgpXG4gICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IGZyYWdCbG9jay5zdGFydFxuXG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBjb25zdCByZXVzZWQgPSByZXVzZWRNYXBba2V5XVxuICAgICAgICBpZiAocmV1c2VkKSB7XG4gICAgICAgICAgaWYgKHJldXNlZC5pdGVtID09PSByZXVzZWRMaXN0WzBdKSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LnNoaWZ0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LiRyZW1vdmUocmV1c2VkLml0ZW0pXG4gICAgICAgICAgICBtb3ZlVGFyZ2V0KHZtLCByZXVzZWQudGFyZ2V0LCBmcmFnQmxvY2sudXBkYXRlTWFyaywgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChyZXVzZWQudGFyZ2V0KVxuICAgICAgICAgIHZtcy5wdXNoKHJldXNlZC52bSlcbiAgICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldXNlZC52bSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWQudm1bdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkLnZtW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IHJldXNlZC50YXJnZXRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZSBmcmFnQmxvY2sudXBkYXRlTWFya1xuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kYXRhID0gbGlzdC5zbGljZSgwKVxuICBsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIHZtKVxuICB9KVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBkaXNwbGF5IHVwZGF0ZSBhbmQgYWRkL3JlbW92ZSB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBiaW5kU2hvd24gKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSkge1xuICBjb25zdCBkaXNwbGF5ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCB0YXJnZXQuc2hvd24sICdzaG93bicsXG4gICAgKGRpc3BsYXkpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcImlmXCIgaXRlbSB3YXMgY2hhbmdlZCcsIGRpc3BsYXkpXG5cbiAgICAgIGlmICghZnJhZ0Jsb2NrIHx8ICEhZnJhZ0Jsb2NrLmRpc3BsYXkgPT09ICEhZGlzcGxheSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICBpZiAoZGlzcGxheSkge1xuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggY2FsYyB2YWx1ZSBjaGFuZ2VzIGFuZCBhcHBlbmQgY2VydGFpbiB0eXBlIGFjdGlvbiB0byBkaWZmZXIuXG4gKiBJdCBpcyB1c2VkIGZvciBpZiBvciByZXBlYXQgZGF0YS1iaW5kaW5nIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsY1xuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcmV0dXJuIHthbnl9ICAgICAgaW5pdCB2YWx1ZSBvZiBjYWxjXG4gKi9cbmZ1bmN0aW9uIHdhdGNoQmxvY2sgKHZtLCBmcmFnQmxvY2ssIGNhbGMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICBjb25zdCBjb25maWcgPSB7fVxuICBjb25zdCBkZXB0aCA9IChmcmFnQmxvY2suZWxlbWVudC5kZXB0aCB8fCAwKSArIDFcblxuICByZXR1cm4gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKGRpZmZlciAmJiAhY29uZmlnLnJlY29yZGVkKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKHR5cGUsIGRlcHRoLCBmcmFnQmxvY2suYmxvY2tJZCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGNvbmZpZy5sYXRlc3RWYWx1ZVxuICAgICAgICBoYW5kbGVyKGxhdGVzdFZhbHVlKVxuICAgICAgICBjb25maWcucmVjb3JkZWQgPSBmYWxzZVxuICAgICAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbmZpZy5yZWNvcmRlZCA9IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBDbG9uZSBhIGNvbnRleHQgYW5kIG1lcmdlIGNlcnRhaW4gZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1lcmdlZERhdGFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDb250ZXh0IChjb250ZXh0LCBtZXJnZWREYXRhKSB7XG4gIGNvbnN0IG5ld0NvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpXG4gIG5ld0NvbnRleHQuX2RhdGEgPSBtZXJnZWREYXRhXG4gIGluaXREYXRhKG5ld0NvbnRleHQpXG4gIGluaXRDb21wdXRlZChuZXdDb250ZXh0KVxuICBuZXdDb250ZXh0Ll9yZWFsUGFyZW50ID0gY29udGV4dFxuICByZXR1cm4gbmV3Q29udGV4dFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBEaXJlY3RpdmUgUGFyc2VyXG4gKi9cblxuaW1wb3J0IHsgYmluZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuLi9jb3JlL3dhdGNoZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgeyBuYXRpdmVDb21wb25lbnRNYXAgfSA9IGNvbmZpZ1xuXG5jb25zdCBTRVRURVJTID0ge1xuICBhdHRyOiAnc2V0QXR0cicsXG4gIHN0eWxlOiAnc2V0U3R5bGUnLFxuICBldmVudDogJ2FkZEV2ZW50J1xufVxuXG4vKipcbiAqIGFwcGx5IHRoZSBuYXRpdmUgY29tcG9uZW50J3Mgb3B0aW9ucyhzcGVjaWZpZWQgYnkgdGVtcGxhdGUudHlwZSlcbiAqIHRvIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zICh0ZW1wbGF0ZSkge1xuICBjb25zdCB7IHR5cGUgfSA9IHRlbXBsYXRlXG4gIGNvbnN0IG9wdGlvbnMgPSBuYXRpdmVDb21wb25lbnRNYXBbdHlwZV1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKHRlbXBsYXRlW2tleV0gPT0gbnVsbCkge1xuICAgICAgICB0ZW1wbGF0ZVtrZXldID0gb3B0aW9uc1trZXldXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBvZih0ZW1wbGF0ZVtrZXldKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwb2Yob3B0aW9uc1trZXldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBzdWJrZXkgaW4gb3B0aW9uc1trZXldKSB7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlW2tleV1bc3Via2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPSBvcHRpb25zW2tleV1bc3Via2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIGlkLCBhdHRyLCBjbGFzc25hbWVzLCBzdHlsZSwgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRFbGVtZW50ICh2bSwgZWwsIHRlbXBsYXRlKSB7XG4gIHNldElkKHZtLCBlbCwgdGVtcGxhdGUuaWQsIHZtKVxuICBzZXRBdHRyKHZtLCBlbCwgdGVtcGxhdGUuYXR0cilcbiAgc2V0Q2xhc3Modm0sIGVsLCB0ZW1wbGF0ZS5jbGFzc0xpc3QpXG4gIHNldFN0eWxlKHZtLCBlbCwgdGVtcGxhdGUuc3R5bGUpXG4gIGJpbmRFdmVudHModm0sIGVsLCB0ZW1wbGF0ZS5ldmVudHMpXG59XG5cbi8qKlxuICogYmluZCBhbGwgcHJvcHMgdG8gc3ViIHZtIGFuZCBiaW5kIGFsbCBzdHlsZSwgZXZlbnRzIHRvIHRoZSByb290IGVsZW1lbnRcbiAqIG9mIHRoZSBzdWIgdm0gaWYgaXQgZG9lc24ndCBoYXZlIGEgcmVwbGFjZWQgbXVsdGktbm9kZSBmcmFnbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtICh2bSwgc3ViVm0sIHRlbXBsYXRlLCByZXBlYXRJdGVtKSB7XG4gIHN1YlZtID0gc3ViVm0gfHwge31cbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB7fVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBzdWJWbS5fb3B0aW9ucyB8fCB7fVxuXG4gIC8vIGJpbmQgcHJvcHNcbiAgbGV0IHByb3BzID0gb3B0aW9ucy5wcm9wc1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIHByb3BzID0gcHJvcHMucmVkdWNlKChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICByZXN1bHRbdmFsdWVdID0gdHJ1ZVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIHt9KVxuICB9XG5cbiAgbWVyZ2VQcm9wcyhyZXBlYXRJdGVtLCBwcm9wcywgdm0sIHN1YlZtKVxuICBtZXJnZVByb3BzKHRlbXBsYXRlLmF0dHIsIHByb3BzLCB2bSwgc3ViVm0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkICh2bSwgc3ViVm0sIHRlbXBsYXRlKSB7XG4gIG1lcmdlQ2xhc3NTdHlsZSh0ZW1wbGF0ZS5jbGFzc0xpc3QsIHZtLCBzdWJWbSlcbiAgbWVyZ2VTdHlsZSh0ZW1wbGF0ZS5zdHlsZSwgdm0sIHN1YlZtKVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0YXJnZXQsIHByb3BzLCB2bSwgc3ViVm0pIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm5cbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIXByb3BzIHx8IHByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgc3ViVm1ba2V5XSA9IHZcbiAgICAgICAgfSlcbiAgICAgICAgc3ViVm1ba2V5XSA9IHJldHVyblZhbHVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3ViVm1ba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCByZXR1cm5WYWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgY29uc3QgY3NzID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFzdWJWbS5fcm9vdEVsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIHRhcmdldCwgdiA9PiB7XG4gICAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdilcbiAgICB9KVxuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2YWx1ZSlcbiAgfVxuICBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGlkIHRvIGFuIGVsZW1lbnRcbiAqIGVhY2ggaWQgaXMgdW5pcXVlIGluIGEgd2hvbGUgdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldElkICh2bSwgZWwsIGlkLCB0YXJnZXQpIHtcbiAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1hcCwge1xuICAgIHZtOiB7XG4gICAgICB2YWx1ZTogdGFyZ2V0LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgZWw6IHtcbiAgICAgIGdldDogKCkgPT4gZWwgfHwgdGFyZ2V0Ll9yb290RWwsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gaWRcbiAgICBpZCA9IGhhbmRsZXIuY2FsbCh2bSlcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gICAgfVxuICAgIHdhdGNoKHZtLCBoYW5kbGVyLCAobmV3SWQpID0+IHtcbiAgICAgIGlmIChuZXdJZCkge1xuICAgICAgICB2bS5faWRzW25ld0lkXSA9IG1hcFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgIHZtLl9pZHNbaWRdID0gbWFwXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGF0dHIgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyICh2bSwgZWwsIGF0dHIpIHtcbiAgYmluZERpcih2bSwgZWwsICdhdHRyJywgYXR0cilcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NTdHlsZSAoZWwsIGNzcywgY2xhc3NMaXN0KSB7XG4gIGNvbnN0IGNsYXNzU3R5bGUgPSB7fVxuICBjb25zdCBsZW5ndGggPSBjbGFzc0xpc3QubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzW2NsYXNzTGlzdFtpXV1cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgICAgIGNsYXNzU3R5bGVba2V5XSA9IHN0eWxlW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWwuc2V0Q2xhc3NTdHlsZShjbGFzc1N0eWxlKVxufVxuXG4vKipcbiAqIGJpbmQgY2xhc3NuYW1lcyB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldENsYXNzICh2bSwgZWwsIGNsYXNzTGlzdCkge1xuICBpZiAodHlwZW9mIGNsYXNzTGlzdCAhPT0gJ2Z1bmN0aW9uJyAmJiAhQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSAmJiAhY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgIGVsLnNldENsYXNzU3R5bGUoe30pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2xhc3NMaXN0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHZhbHVlKVxuICB9XG4gIGVsc2Uge1xuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCBjbGFzc0xpc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIHN0eWxlIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUgKHZtLCBlbCwgc3R5bGUpIHtcbiAgYmluZERpcih2bSwgZWwsICdzdHlsZScsIHN0eWxlKVxufVxuXG4vKipcbiAqIGFkZCBhbiBldmVudCB0eXBlIGFuZCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQgYW5kIGdlbmVyYXRlIGEgZG9tIHVwZGF0ZVxuICovXG5mdW5jdGlvbiBzZXRFdmVudCAodm0sIGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGVsLmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgdm0pKVxufVxuXG4vKipcbiAqIGFkZCBhbGwgZXZlbnRzIG9mIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEV2ZW50cyAodm0sIGVsLCBldmVudHMpIHtcbiAgaWYgKCFldmVudHMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgbGV0IGhhbmRsZXIgPSBldmVudHNba2V5XVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGhhbmRsZXIgPSB2bVtoYW5kbGVyXVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gVGhlIG1ldGhvZCBcIiR7aGFuZGxlcn1cIiBpcyBub3QgZGVmaW5lZC5gKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRFdmVudCh2bSwgZWwsIGtleSwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIHNldCBhIHNlcmllcyBvZiBtZW1iZXJzIGFzIGEga2luZCBvZiBhbiBlbGVtZW50XG4gKiBmb3IgZXhhbXBsZTogc3R5bGUsIGF0dHIsIC4uLlxuICogaWYgdGhlIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBiaW5kIHRoZSBkYXRhIGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gYmluZERpciAodm0sIGVsLCBuYW1lLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBiaW5kS2V5KHZtLCBlbCwgbmFtZSwga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbFtTRVRURVJTW25hbWVdXShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgZGF0YSBjaGFuZ2VzIHRvIGEgY2VydGFpbiBrZXkgdG8gYSBuYW1lIHNlcmllcyBpbiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRLZXkgKHZtLCBlbCwgbmFtZSwga2V5LCBjYWxjKSB7XG4gIGNvbnN0IG1ldGhvZE5hbWUgPSBTRVRURVJTW25hbWVdXG4gIC8vIHdhdGNoIHRoZSBjYWxjLCBhbmQgcmV0dXJucyBhIHZhbHVlIGJ5IGNhbGMuY2FsbCgpXG4gIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICAgIGlmIChkaWZmZXIpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQoJ2VsZW1lbnQnLCBlbC5kZXB0aCwgZWwucmVmLCBoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIoKVxuICAgIH1cbiAgfSlcblxuICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxufVxuXG4vKipcbiAqIHdhdGNoIGEgY2FsYyBmdW5jdGlvbiBhbmQgY2FsbGJhY2sgaWYgdGhlIGNhbGMgdmFsdWUgY2hhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2ggKHZtLCBjYWxjLCBjYWxsYmFjaykge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGNhbGMsIGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsYmFjayh2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gd2F0Y2hlci52YWx1ZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwOiB7XG4gICAgdGV4dDogdHJ1ZSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgc2xpZGVyOiB7XG4gICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfSxcbiAgICBjZWxsOiB7XG4gICAgICB0eXBlOiAnY2VsbCcsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvbmZpZy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBEb2N1bWVudCAmIEVsZW1lbnQgSGVscGVycy5cbiAqXG4gKiByZXF1aXJlZDpcbiAqIERvY3VtZW50IzogY3JlYXRlRWxlbWVudCwgY3JlYXRlQ29tbWVudCwgZ2V0UmVmXG4gKiBFbGVtZW50IzogYXBwZW5kQ2hpbGQsIGluc2VydEJlZm9yZSwgcmVtb3ZlQ2hpbGQsIG5leHRTaWJsaW5nXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBib2R5IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvZHkgKHZtLCB0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlQm9keSh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHZtLCB0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlRWxlbWVudCh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgZnJhZyBibG9jayBmb3IgYW4gZWxlbWVudC5cbiAqIFRoZSBmcmFnIGJsb2NrIGhhcyBhIHN0YXJ0ZXIsIGVuZGVyIGFuZCB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9jayAodm0sIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCbG9ja1N0YXJ0KHZtKVxuICBjb25zdCBlbmQgPSBjcmVhdGVCbG9ja0VuZCh2bSlcbiAgY29uc3QgYmxvY2tJZCA9IGxhc3Rlc3RCbG9ja0lkKytcbiAgaWYgKGVsZW1lbnQuZWxlbWVudCkge1xuICAgIGxldCB1cGRhdGVNYXJrID0gZWxlbWVudC51cGRhdGVNYXJrXG4gICAgaWYgKHVwZGF0ZU1hcmspIHtcbiAgICAgIGlmICh1cGRhdGVNYXJrLmVsZW1lbnQpIHtcbiAgICAgICAgdXBkYXRlTWFyayA9IHVwZGF0ZU1hcmsuZW5kXG4gICAgICB9XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoZW5kLCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEFmdGVyKHN0YXJ0LCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC51cGRhdGVNYXJrID0gZW5kXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShzdGFydCwgZWxlbWVudC5lbmQpXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVuZCwgZWxlbWVudC5lbmQpXG4gICAgfVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LmVsZW1lbnRcbiAgfVxuICBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN0YXJ0KVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZW5kKVxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQsIGVsZW1lbnQsIGJsb2NrSWQgfVxufVxuXG5sZXQgbGFzdGVzdEJsb2NrSWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBzdGFydGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja1N0YXJ0ICh2bSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICBjb25zdCBhbmNob3IgPSBkb2MuY3JlYXRlQ29tbWVudCgnc3RhcnQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBlbmRlci5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmxvY2tFbmQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdlbmQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQXR0YWNoIHRhcmdldCB0byBhIGNlcnRhaW4gZGVzdCB1c2luZyBhcHBlbmRDaGlsZCBieSBkZWZhdWx0LlxuICogSWYgdGhlIGRlc3QgaXMgYSBmcmFnIGJsb2NrIHRoZW4gaW5zZXJ0IGJlZm9yZSB0aGUgZW5kZXIuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGF0dGFjaCB0aGUgc3RhcnRlciBhbmQgZW5kZXIgaW4gb3JkZXIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVGFyZ2V0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGlmIChkZXN0LmVsZW1lbnQpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBkZXN0LmVuZFxuICAgIGNvbnN0IGFmdGVyID0gZGVzdC51cGRhdGVNYXJrXG4gICAgLy8gcHVzaCBuZXcgdGFyZ2V0IGZvciB3YXRjaCBsaXN0IHVwZGF0ZSBsYXRlclxuICAgIGlmIChkZXN0LmNoaWxkcmVuKSB7XG4gICAgICBkZXN0LmNoaWxkcmVuLnB1c2godGFyZ2V0KVxuICAgIH1cbiAgICAvLyBmb3IgY2hlY2sgcmVwZWF0IGNhc2VcbiAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25hbCA9IG1vdmVUYXJnZXQodm0sIHRhcmdldCwgYWZ0ZXIpXG4gICAgICBkZXN0LnVwZGF0ZU1hcmsgPSB0YXJnZXQuZWxlbWVudCA/IHRhcmdldC5lbmQgOiB0YXJnZXRcbiAgICAgIHJldHVybiBzaWduYWxcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LnN0YXJ0LCBiZWZvcmUpXG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5lbmQsIGJlZm9yZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIGJlZm9yZSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgICBkZXN0LmFwcGVuZENoaWxkKHRhcmdldC5zdGFydClcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LmVuZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTW92ZSB0YXJnZXQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LiBUaGUgdGFyZ2V0IG1heWJlIGJsb2NrIG9yIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGFyZ2V0ICh2bSwgdGFyZ2V0LCBhZnRlcikge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZXR1cm4gbW92ZUJsb2NrKHRhcmdldCwgYWZ0ZXIpXG4gIH1cbiAgcmV0dXJuIG1vdmVFbGVtZW50KHRhcmdldCwgYWZ0ZXIpXG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50IChlbGVtZW50LCBhZnRlcikge1xuICBjb25zdCBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlXG4gIGlmIChwYXJlbnQpIHtcbiAgICByZXR1cm4gcGFyZW50Lmluc2VydEFmdGVyKGVsZW1lbnQsIGFmdGVyKVxuICB9XG59XG5cbi8qKlxuICogTW92ZSBhbGwgZWxlbWVudHMgb2YgdGhlIGJsb2NrIGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUJsb2NrIChmcmFnQmxvY2ssIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0XG4gICAgbGV0IHNpZ25hbFxuICAgIGNvbnN0IGdyb3VwID0gW2VsXVxuXG4gICAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gICAgICBncm91cC5wdXNoKGVsKVxuICAgIH1cblxuICAgIGxldCB0ZW1wID0gYWZ0ZXJcbiAgICBncm91cC5ldmVyeSgoZWwpID0+IHtcbiAgICAgIHNpZ25hbCA9IHBhcmVudC5pbnNlcnRBZnRlcihlbCwgdGVtcClcbiAgICAgIHRlbXAgPSBlbFxuICAgICAgcmV0dXJuIHNpZ25hbCAhPT0gLTFcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNpZ25hbFxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHRhcmdldCBmcm9tIERPTSB0cmVlLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBjYWxsIF9yZW1vdmVCbG9ja1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZW1vdmVCbG9jayh0YXJnZXQsIHByZXNlcnZlQmxvY2spXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCAodGFyZ2V0KSB7XG4gIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBmcmFnIGJsb2NrLlxuICogVGhlIHNlY29uZCBwYXJhbSBkZWNpZGVzIHdoZXRoZXIgdGhlIGJsb2NrIHNlbGYgc2hvdWxkIGJlIHJlbW92ZWQgdG9vLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIGZyYWdCbG9ja1xuICogQHBhcmFtICB7Qm9vbGVhbn0gcHJlc2VydmVCbG9jaz1mYWxzZVxuICovXG5mdW5jdGlvbiByZW1vdmVCbG9jayAoZnJhZ0Jsb2NrLCBwcmVzZXJ2ZUJsb2NrID0gZmFsc2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0Lm5leHRTaWJsaW5nXG5cbiAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgcmVzdWx0LnB1c2goZWwpXG4gICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICB9XG5cbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suc3RhcnQpXG4gIH1cbiAgcmVzdWx0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgcmVtb3ZlRWxlbWVudChlbClcbiAgfSlcbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suZW5kKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9kb20taGVscGVyLmpzXG4gKiovIiwiZnVuY3Rpb24gRXZ0ICh0eXBlLCBkZXRhaWwpIHtcbiAgaWYgKGRldGFpbCBpbnN0YW5jZW9mIEV2dCkge1xuICAgIHJldHVybiBkZXRhaWxcbiAgfVxuXG4gIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICB0aGlzLmRldGFpbCA9IGRldGFpbFxuICB0aGlzLnR5cGUgPSB0eXBlXG5cbiAgbGV0IHNob3VsZFN0b3AgPSBmYWxzZVxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvdWxkU3RvcCA9IHRydWVcbiAgfVxuICB0aGlzLmhhc1N0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNob3VsZFN0b3BcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGVtaXQgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoaGFuZGxlckxpc3QpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRkaXNwYXRjaCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2gpIHtcbiAgICB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKHR5cGUsIGV2dClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGJyb2FkY2FzdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICB0aGlzLiRlbWl0KHR5cGUsIGV2dClcblxuICBpZiAoIWV2dC5oYXNTdG9wcGVkKCkgJiYgdGhpcy5fY2hpbGRyZW5WbXMpIHtcbiAgICB0aGlzLl9jaGlsZHJlblZtcy5mb3JFYWNoKChzdWJWbSkgPT4ge1xuICAgICAgc3ViVm0uJGJyb2FkY2FzdCh0eXBlLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdIHx8IFtdXG4gIGhhbmRsZXJMaXN0LnB1c2goaGFuZGxlcilcbiAgZXZlbnRzW3R5cGVdID0gaGFuZGxlckxpc3RcblxuICAvLyBmaXhlZCBvbGQgdmVyc2lvbiBsaWZlY3ljbGUgZGVzaWduXG4gIGlmICh0eXBlID09PSAnaG9vazpyZWFkeScgJiYgdGhpcy5fcmVhZHkpIHtcbiAgICB0aGlzLiRlbWl0KCdob29rOnJlYWR5JylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9mZiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBkZWxldGUgZXZlbnRzW3R5cGVdXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKCFoYW5kbGVyTGlzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGhhbmRsZXJMaXN0LiRyZW1vdmUoaGFuZGxlcilcbn1cblxuY29uc3QgTElGRV9DWUNMRV9UWVBFUyA9IFsnaW5pdCcsICdjcmVhdGVkJywgJ3JlYWR5J11cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFdmVudHMgKHZtLCBleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgZXZlbnRzID0gb3B0aW9ucy5ldmVudHMgfHwge31cbiAgZm9yIChjb25zdCB0eXBlMSBpbiBldmVudHMpIHtcbiAgICB2bS4kb24odHlwZTEsIGV2ZW50c1t0eXBlMV0pXG4gIH1cbiAgZm9yIChjb25zdCB0eXBlMiBpbiBleHRlcm5hbEV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHZtLiRvbihgaG9vazoke3R5cGV9YCwgb3B0aW9uc1t0eXBlXSlcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRXZlbnRzICh2bSkge1xuICB2bS4kZW1pdCA9ICRlbWl0XG4gIHZtLiRkaXNwYXRjaCA9ICRkaXNwYXRjaFxuICB2bS4kYnJvYWRjYXN0ID0gJGJyb2FkY2FzdFxuICB2bS4kb24gPSAkb25cbiAgdm0uJG9mZiA9ICRvZmZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanNcbiAqKi8iLCJsZXQgbmF0aXZlTW9kdWxlcyA9IHt9XG5cbmZ1bmN0aW9uIGFzc2lnbk1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBmb3IgKGNvbnN0IG1vZHVsZU5hbWUgaW4gbW9kdWxlcykge1xuICAgIC8vIGluaXQgYG1vZHVsZXNbbW9kdWxlTmFtZV1bXWBcbiAgICBsZXQgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgICBpZiAoIW1ldGhvZHMpIHtcbiAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXSA9IG1ldGhvZHNcbiAgICB9XG5cbiAgICAvLyBwdXNoIGVhY2ggbm9uLWV4aXN0ZWQgbmV3IG1ldGhvZFxuICAgIG1vZHVsZXNbbW9kdWxlTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWV0aG9kID0ge1xuICAgICAgICAgIG5hbWU6IG1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kc1ttZXRob2QubmFtZV0gfHwgaWZSZXBsYWNlKSB7XG4gICAgICAgIG1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25BcGlzIChDdG9yLCBhcGlzKSB7XG4gIGNvbnN0IHAgPSBDdG9yLnByb3RvdHlwZVxuXG4gIGZvciAoY29uc3QgYXBpTmFtZSBpbiBhcGlzKSB7XG4gICAgaWYgKCFwLmhhc093blByb3BlcnR5KGFwaU5hbWUpKSB7XG4gICAgICBwW2FwaU5hbWVdID0gYXBpc1thcGlOYW1lXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzICgpIHtcbiAgbmF0aXZlTW9kdWxlcyA9IHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbn1cblxuLyoqXG4gKiBAY29udGV4dCBhIGluc3RhbmNlIG9mIEFwcEluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlIChtb2R1bGVOYW1lKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gIGNvbnN0IHRhcmdldCA9IHt9XG5cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICB0YXJnZXRbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4gdGhpcy5jYWxsVGFza3Moe1xuICAgICAgbW9kdWxlOiBtb2R1bGVOYW1lLFxuICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGFzc2lnbk1vZHVsZXMobW9kdWxlcywgaWZSZXBsYWNlKVxufVxuXG4vKipcbiAqIEBjb250ZXh0IFZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKGFwaXMpIHtcbiAgYXNzaWduQXBpcyh0aGlzLCBhcGlzKVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVDb21wb25lbnQgKG5hbWUpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IHRoaXNcbiAgcmV0dXJuIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50IChuYW1lLCBkZWYpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IHRoaXNcblxuICBpZiAoY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdKSB7XG4gICAgY29uc29sZS5lcnJvcihgW0pTIEZyYW1ld29ya10gZGVmaW5lIGEgY29tcG9uZW50KCR7bmFtZX0pIHRoYXQgYWxyZWFkeSBleGlzdHNgKVxuICAgIHJldHVyblxuICB9XG5cbiAgY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdID0gZGVmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogW25vcm1hbGl6ZVZlcnNpb24gZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGkgPCAzKSB7XG4gICAgY29uc3QgcyA9IHR5cGVvZiAoc3BsaXRbaV0pID09PSAnc3RyaW5nJyAmJiBzcGxpdFtpXSA/IHNwbGl0W2ldIDogJzAnXG4gICAgcmVzdWx0LnB1c2gocylcbiAgICBpKytcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignLicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvciAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogdHJ1ZSxcbiAgICBlcnJvclR5cGU6IDEsXG4gICAgY29kZTogMTAwMFxuICB9XG4gIGNvbnN0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdhcHB2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMlxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignd2VleHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAzXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiBmYWxzZSAvLyBkZWZhdXRsIGlzIHBhc3NcbiAgfVxuXG4gIGlmICh0eXBvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IGN1c3RvbURvd25ncmFkZSA9IGNvbmZpZy5jYWxsKHRoaXMsIGRldmljZUluZm8sIHtcbiAgICAgIHNlbXZlcjogc2VtdmVyLFxuICAgICAgbm9ybWFsaXplVmVyc2lvbjogdGhpcy5ub3JtYWxpemVWZXJzaW9uXG4gICAgfSlcblxuICAgIGN1c3RvbURvd25ncmFkZSA9ICEhY3VzdG9tRG93bmdyYWRlXG5cbiAgICByZXN1bHQgPSBjdXN0b21Eb3duZ3JhZGUgPyB0aGlzLmdldEVycm9yKCdjdXN0b20nLCAnJywgJ2N1c3RvbSBwYXJhbXMnKSA6IHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IGRldmljZUluZm8ucGxhdGZvcm0gfHwgJ3Vua25vdydcbiAgICBjb25zdCBkUGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZGV2aWNlSW5mbykge1xuICAgICAgY29uc3Qga2V5ID0gaVxuICAgICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdmFsID0gZGV2aWNlSW5mb1tpXVxuICAgICAgY29uc3QgaXNWZXJzaW9uID0ga2V5TG93ZXIuaW5kZXhPZigndmVyc2lvbicpID49IDBcbiAgICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDBcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gY09ialtpXVxuXG4gICAgICBpZiAoY3JpdGVyaWEgJiYgaXNWZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oZGV2aWNlSW5mb1tpXSlcblxuICAgICAgICBpZiAoc2VtdmVyLnNhdGlzZmllcyhkLCBjKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgX2NyaXRlcmlhID0gdHlwb2YoY3JpdGVyaWEpID09PSAnYXJyYXknID8gY3JpdGVyaWEgOiBbY3JpdGVyaWFdXG4gICAgICAgIGlmIChfY3JpdGVyaWEuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJjb25zdCBXRUVYX0NPTVBPTkVOVF9SRUcgPSAvXkB3ZWV4LWNvbXBvbmVudFxcLy9cbmNvbnN0IFdFRVhfTU9EVUxFX1JFRyA9IC9eQHdlZXgtbW9kdWxlXFwvL1xuY29uc3QgTk9STUFMX01PRFVMRV9SRUcgPSAvXlxcLnsxLDJ9XFwvL1xuY29uc3QgSlNfU1VSRklYX1JFRyA9IC9cXC5qcyQvXG5cbmV4cG9ydCBjb25zdCBpc1dlZXhDb21wb25lbnQgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChXRUVYX0NPTVBPTkVOVF9SRUcpXG5leHBvcnQgY29uc3QgaXNXZWV4TW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTm9ybWFsTW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goTk9STUFMX01PRFVMRV9SRUcpXG5leHBvcnQgY29uc3QgaXNOcG1Nb2R1bGUgPSBuYW1lID0+ICFpc1dlZXhDb21wb25lbnQobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1dlZXhNb2R1bGUobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc05vcm1hbE1vZHVsZShuYW1lKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2VleFByZWZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShXRUVYX0NPTVBPTkVOVF9SRUcsICcnKVxuICAgICAgICAgIC5yZXBsYWNlKFdFRVhfTU9EVUxFX1JFRywgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU1N1cmZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShKU19TVVJGSVhfUkVHLCAnJylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL21pc2MuanNcbiAqKi8iLCJpbXBvcnQgeyB0eXBvZiB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQgVm0gZnJvbSAnLi4vLi4vdm0nXG5pbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzV2VleE1vZHVsZSxcbiAgaXNOb3JtYWxNb2R1bGUsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuL21pc2MnXG5cbmxldCBjb21tb25Nb2R1bGVzID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tbW9uTW9kdWxlcyAoKSB7XG4gIGNvbW1vbk1vZHVsZXMgPSB7fVxufVxuXG4vLyBkZWZpbmUobmFtZSwgZmFjdG9yeSkgZm9yIHByaW1hcnkgdXNhZ2Vcbi8vIG9yXG4vLyBkZWZpbmUobmFtZSwgZGVwcywgZmFjdG9yeSkgZm9yIGNvbXBhdGliaWxpdHlcbi8vIE5vdGljZTogRE8gTk9UIHVzZSBmdW5jdGlvbiBkZWZpbmUoKSB7fSxcbi8vIGl0IHdpbGwgY2F1c2UgZXJyb3IgYWZ0ZXIgYnVpbGRlZCBieSB3ZWJwYWNrXG5leHBvcnQgY29uc3QgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGZhY3RvcnkpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gZGVmaW5lIGEgY29tcG9uZW50ICR7bmFtZX1gKVxuXG4gIGlmICh0eXBvZihkZXBzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZhY3RvcnkgPSBkZXBzXG4gICAgZGVwcyA9IFtdXG4gIH1cblxuICBjb25zdCBfcmVxdWlyZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNsZWFuTmFtZVxuXG4gICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZUNvbXBvbmVudChjbGVhbk5hbWUpXG4gICAgfVxuICAgIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVNb2R1bGUoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgICBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgICByZXR1cm4gY29tbW9uTW9kdWxlc1tuYW1lXVxuICAgIH1cbiAgfVxuICBjb25zdCBfbW9kdWxlID0geyBleHBvcnRzOiB7fX1cblxuICBsZXQgY2xlYW5OYW1lXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KGNsZWFuTmFtZSwgX21vZHVsZS5leHBvcnRzKVxuICB9XG4gIGVsc2UgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcblxuICAgIGZhY3RvcnkoX3JlcXVpcmUsIF9tb2R1bGUuZXhwb3J0cywgX21vZHVsZSlcblxuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyh7XG4gICAgICBbY2xlYW5OYW1lXTogX21vZHVsZS5leHBvcnRzXG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBfbW9kdWxlLmV4cG9ydHNcbiAgfVxuICBlbHNlIGlmIChpc05wbU1vZHVsZShuYW1lKSkge1xuICAgIGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBjb25zdCBleHBvcnRzID0gX21vZHVsZS5leHBvcnRzXG4gICAgaWYgKGV4cG9ydHMudGVtcGxhdGUgfHxcbiAgICAgICAgZXhwb3J0cy5zdHlsZSB8fFxuICAgICAgICBleHBvcnRzLm1ldGhvZHMpIHtcbiAgICAgIC8vIGRvd25ncmFkZSB0byBvbGQgZGVmaW5lIG1ldGhvZCAoZGVmaW5lKCdjb21wb25lbnROYW1lJywgZmFjdG9yeSkpXG4gICAgICAvLyB0aGUgZXhwb3J0cyBjb250YWluIG9uZSBrZXkgb2YgdGVtcGxhdGUsIHN0eWxlIG9yIG1ldGhvZHNcbiAgICAgIC8vIGJ1dCBpdCBoYXMgcmlzayEhIVxuICAgICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudChjbGVhbk5hbWUsIGV4cG9ydHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gX21vZHVsZS5leHBvcnRzXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyICh0eXBlLCBvcHRpb25zKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gUmVnaXN0ZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIGluc3RhbGwgbGFzdGVzdCB0cmFuc2Zvcm1lci4nKVxuICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KHR5cGUsIG9wdGlvbnMpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIGRlc3Ryb3lcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFjdGlvbnMgKCkge1xuICB0aGlzLmRpZmZlci5mbHVzaCgpXG4gIGNvbnN0IHRhc2tzID0gW11cbiAgaWYgKHRoaXMuZG9jICYmIHRoaXMuZG9jLmxpc3RlbmVyICYmIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZXMubGVuZ3RoKSB7XG4gICAgdGFza3MucHVzaCguLi50aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZXMgPSBbXVxuICB9XG4gIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsVGFza3ModGFza3MpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBEZXN0b3J5IGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcblxuICB0aGlzLmlkID0gJydcbiAgdGhpcy5vcHRpb25zID0gbnVsbFxuICB0aGlzLmJsb2NrcyA9IG51bGxcbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5kb2MgPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0gbnVsbFxuICB0aGlzLmNhbGxiYWNrcyA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RFbGVtZW50ICgpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5kb2MgfHwge31cbiAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IHt9XG4gIHJldHVybiBib2R5LnRvSlNPTiA/IGJvZHkudG9KU09OKCkgOiB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50IChyZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KSBpbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICByZWYuc29tZSgocmVmKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQocmVmLCB0eXBlLCBlKSAhPT0gZmFsc2VcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSB0aGlzLmRvYy5nZXRSZWYocmVmKVxuXG4gIGlmIChlbCkge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRvYy5maXJlRXZlbnQoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpXG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZWxlbWVudCByZWZlcmVuY2UgXCIke3JlZn1cImApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayAoY2FsbGJhY2tJZCwgZGF0YSwgaWZLZWVwQWxpdmUpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gSW52b2tlIGEgY2FsbGJhY2soJHtjYWxsYmFja0lkfSkgd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuXG4gIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGNhbGxiYWNrKGRhdGEpIC8vIGRhdGEgaXMgYWxyZWFkeSBhIG9iamVjdCwgQHNlZTogbGliL3J1bnRpbWUvaW5kZXguanNcblxuICAgIGlmICh0eXBlb2YgaWZLZWVwQWxpdmUgPT09ICd1bmRlZmluZWQnIHx8IGlmS2VlcEFsaXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF0gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGNhbGxiYWNrIGlkIFwiJHtjYWxsYmFja0lkfVwiYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hEYXRhIChkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFJlZnJlc2ggd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2VbJHt0aGlzLmlkfV1gKVxuXG4gIGNvbnN0IHZtID0gdGhpcy52bVxuXG4gIGlmICh2bSAmJiBkYXRhKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGlmICh0eXBlb2Ygdm0ucmVmcmVzaERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtLnJlZnJlc2hEYXRhKGRhdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXh0ZW5kKHZtLCBkYXRhKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnJlZnJlc2hGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIFwiJHtkYXRhfVwiYClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzXG4gKiovIiwiaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50LCByZXF1aXJlQ29tcG9uZW50LCByZXF1aXJlTW9kdWxlIH0gZnJvbSAnLi9yZWdpc3RlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwSW5zdGFuY2UgKGluc3RhbmNlSWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5pZCA9IGluc3RhbmNlSWRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB0aGlzLnZtID0gbnVsbFxuICB0aGlzLmN1c3RvbUNvbXBvbmVudE1hcCA9IHt9XG4gIHRoaXMuY2FsbGJhY2tzID0ge31cbiAgdGhpcy5kb2MgPSBuZXcgcmVuZGVyZXIuRG9jdW1lbnQoXG4gICAgaW5zdGFuY2VJZCxcbiAgICB0aGlzLm9wdGlvbnMuYnVuZGxlVXJsLFxuICAgIG51bGwsXG4gICAgcmVuZGVyZXIuTGlzdGVuZXJcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaW5zdGFuY2VJZClcbiAgdGhpcy51aWQgPSAwXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAoYXBwLCB2KSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgcmVuZGVyZXIuRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5BcHBJbnN0YW5jZS5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGlmICh0eXBvZih0YXNrcykgIT09ICdhcnJheScpIHtcbiAgICB0YXNrcyA9IFt0YXNrc11cbiAgfVxuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFyZ3MgPSB0YXNrLmFyZ3MubWFwKGFyZyA9PiBub3JtYWxpemUodGhpcywgYXJnKSlcbiAgfSlcblxuICByZXR1cm4gcmVuZGVyZXIuc2VuZFRhc2tzKHRoaXMuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG5leHRlbmQoQXBwSW5zdGFuY2UucHJvdG90eXBlLCB7XG4gIHJlZ2lzdGVyQ29tcG9uZW50LFxuICByZXF1aXJlQ29tcG9uZW50LFxuICByZXF1aXJlTW9kdWxlXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9pbnN0YW5jZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21hcC5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNmZykge1xuICBjb25maWcuRG9jdW1lbnQgPSBjZmcuRG9jdW1lbnRcbiAgY29uZmlnLkVsZW1lbnQgPSBjZmcuRWxlbWVudFxuICBjb25maWcuQ29tbWVudCA9IGNmZy5Db21tZW50XG4gIGNvbmZpZy5zZW5kVGFza3MgPSBjZmcuc2VuZFRhc2tzXG4gIGNvbmZpZy5MaXN0ZW5lciA9IGNmZy5MaXN0ZW5lclxufVxuXG4vKipcbiAqIHJlZnJlc2ggYSBXZWV4IGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZSAoaW5zdGFuY2VJZCwgZGF0YSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gaW5zdGFuY2UucmVmcmVzaERhdGEoZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBkZXN0cm95IGEgV2VleCBpbnN0YW5jZVxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UgKGluc3RhbmNlSWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cblxuICBpbnN0YW5jZS5kZXN0cm95KClcbiAgZGVsZXRlIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9saWZlLmpzXG4gKiovIiwiaW1wb3J0IFZtIGZyb20gJy4uL3ZtJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgb2YgZWFjaCBuYXRpdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHthcnJheX0gY29tcG9uZW50cyBhcnJheSBvZiBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudHMgKGNvbXBvbmVudHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tcG9uZW50cykpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gcmVnaXN0ZXIgKG5hbWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG5hbWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWUudHlwZV0gPSBuYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggbW9kdWxlXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1vZHVsZXMgYSBvYmplY3Qgb2YgbW9kdWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ29iamVjdCcpIHtcbiAgICBWbS5yZWdpc3Rlck1vZHVsZXMobW9kdWxlcylcbiAgfVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggYXBpXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwaXMgYSBvYmplY3Qgb2YgYXBpc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzIChhcGlzKSB7XG4gIGlmICh0eXBlb2YgYXBpcyA9PT0gJ29iamVjdCcpIHtcbiAgICBWbS5yZWdpc3Rlck1ldGhvZHMoYXBpcylcbiAgfVxufVxuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyA9IHJlZ2lzdGVyTWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogZnVuY3Rpb24gZmlyZUV2ZW50IChpbnN0YW5jZUlkLCByZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gICAgcmV0dXJuIGluc3RhbmNlLmZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpXG4gIH0sXG5cbiAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrIChpbnN0YW5jZUlkLCBmdW5jSWQsIGRhdGEsIGlmTGFzdCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuY2FsbGJhY2soZnVuY0lkLCBkYXRhLCBpZkxhc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBhY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGluc3RhbmNlSWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKGluc3RhbmNlICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2VJZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanNcbiAqKi8iLCJpbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuXG4vKipcbiAqIGdldCBhIHdob2xlIGVsZW1lbnQgdHJlZSBvZiBhbiBpbnN0YW5jZVxuICogZm9yIGRlYnVnZ2luZ1xuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEgdmlydHVhbCBkb20gdHJlZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdCAoaW5zdGFuY2VJZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gaW5zdGFuY2UuZ2V0Um9vdEVsZW1lbnQoKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9taXNjLmpzXG4gKiovIiwibGV0IGZyYW1ld29ya3NcblxuY29uc3QgdmVyc2lvblJlZ0V4cCA9IC9eXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpIHtcbiAgbGV0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbmZvKSB7XG4gICAgaW5mbyA9IGNoZWNrVmVyc2lvbihjb2RlKSB8fCB7fVxuICAgIGlmICghZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIGluZm8uZnJhbWV3b3JrID0gJ1dlZXgnXG4gICAgfVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluZm9cbiAgICBjb25maWcgPSBjb25maWcgfHwge31cbiAgICBjb25maWcuYnVuZGxlVmVyc2lvbiA9IGluZm8udmVyc2lvblxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNyZWF0ZSBhbiAke2luZm8uZnJhbWV3b3JrfUAke2NvbmZpZy5idW5kbGVWZXJzaW9ufSBpbnN0YW5jZSBmcm9tICR7Y29uZmlnLmJ1bmRsZVZlcnNpb259YClcbiAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10uY3JlYXRlSW5zdGFuY2UoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSlcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG59XG5cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIGNyZWF0ZUluc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGdlbkluaXQgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICAgIGlmIChmcmFtZXdvcmsgJiYgZnJhbWV3b3JrW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIGZyYW1ld29ya1ttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5JbnN0YW5jZSAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRhcHRJbnN0YW5jZSAobWV0aG9kTmFtZSwgbmF0aXZlTWV0aG9kTmFtZSkge1xuICBtZXRob2RzW25hdGl2ZU1ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCAoY29uZmlnKSB7XG4gIGZyYW1ld29ya3MgPSBjb25maWcuZnJhbWV3b3JrcyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gZnJhbWV3b3Jrcykge1xuICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICBmcmFtZXdvcmsuaW5pdChjb25maWcpXG4gIH1cblxuICA7IFsnZGVzdHJveUluc3RhbmNlJywgJ3JlZnJlc2hJbnN0YW5jZScsICdyZWNlaXZlVGFza3MnLCAnZ2V0Um9vdCddLmZvckVhY2goZ2VuSW5zdGFuY2UpXG5cbiAgOyBbJ3JlZ2lzdGVyQ29tcG9uZW50cycsICdyZWdpc3Rlck1vZHVsZXMnLCAncmVnaXN0ZXJNZXRob2RzJ10uZm9yRWFjaChnZW5Jbml0KVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvaW5pdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4XCIsXG5cdFwidmVyc2lvblwiOiBcIjAuNC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJBIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgTW9iaWxlIGNyb3NzLXBsYXRmb3JtIFVJXCIsXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdEBnaXRodWIuY29tOmFsaWJhYmEvd2VleC5naXRcIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cDovL2FsaWJhYmEuZ2l0aHViLmlvL3dlZXgvXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS93ZWV4L2lzc3Vlc1wiXG5cdH0sXG5cdFwicHJpdmF0ZVwiOiB0cnVlLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcIndlZXhcIixcblx0XHRcImh5YnJpZFwiLFxuXHRcdFwid2ViY29tcG9uZW50XCIsXG5cdFx0XCJhcHBmcmFtZXdvcmtcIixcblx0XHRcIm12dm1cIixcblx0XHRcImphdmFzY3JpcHRcIixcblx0XHRcIndlYmtpdFwiLFxuXHRcdFwidjhcIixcblx0XHRcImpzY29yZVwiLFxuXHRcdFwiaHRtbDVcIixcblx0XHRcImFuZHJvaWRcIixcblx0XHRcImlvc1wiLFxuXHRcdFwieXVub3NcIlxuXHRdLFxuXHRcImVuZ2luZXNcIjoge1xuXHRcdFwibm9kZVwiOiBcIj49NFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJwb3N0aW5zdGFsbFwiOiBcImJhc2ggLi9iaW4vaW5zdGFsbC1ob29rcy5zaFwiLFxuXHRcdFwiYnVpbGQ6Y29uZmlnXCI6IFwibm9kZSBidWlsZC9jb25maWcuZnJhbWV3b3Jrcy5qc1wiLFxuXHRcdFwiYnVpbGQ6YnJvd3NlclwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5icm93c2VyLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6Y29tbW9uXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmNvbW1vbi5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOm5hdGl2ZVwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5uYXRpdmUuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5leGFtcGxlcy5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOnRlc3RcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2sudGVzdC5jb25maWcuanNcIixcblx0XHRcImRpc3Q6YnJvd3NlclwiOiBcIm5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBucG0gcnVuIGJ1aWxkOmNvbW1vbiAmJiBiYXNoIC4vYmluL2Rpc3QtYnJvd3Nlci5zaFwiLFxuXHRcdFwiZGlzdFwiOiBcIm5wbSBydW4gZGlzdDpicm93c2VyXCIsXG5cdFx0XCJkZXY6YnJvd3NlclwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6bmF0aXZlXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OmV4YW1wbGVzXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6dGVzdFwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZFwiOiBcIm5wbSBydW4gYnVpbGQ6bmF0aXZlICYmIG5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBucG0gcnVuIGJ1aWxkOmV4YW1wbGVzICYmIG5wbSBydW4gYnVpbGQ6dGVzdFwiLFxuXHRcdFwibGludFwiOiBcImVzbGludCBodG1sNVwiLFxuXHRcdFwidGVzdDp1bml0XCI6IFwibW9jaGEgLS1jb21waWxlcnMganM6YmFiZWwtY29yZS9yZWdpc3RlciBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDpjb3ZlclwiOiBcImJhYmVsLW5vZGUgbm9kZV9tb2R1bGVzL2lzcGFydGEvYmluL2lzcGFydGEgY292ZXIgLS1yZXBvcnQgdGV4dCBub2RlX21vZHVsZXMvbW9jaGEvYmluL19tb2NoYSAtLSAtLXJlcG9ydGVyIGRvdCBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDplMmVcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbm9kZSBodG1sNS90ZXN0L2UyZS9ydW5uZXIuanNcIixcblx0XHRcInRlc3RcIjogXCJucG0gcnVuIGJ1aWxkOmNvbmZpZyAmJiBucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biB0ZXN0OmNvdmVyICYmIG5wbSBydW4gdGVzdDplMmVcIixcblx0XHRcInNlcnZlXCI6IFwic2VydmUgLi8gLXAgMTI1ODBcIixcblx0XHRcImNsZWFuOmV4YW1wbGVzXCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtZXhhbXBsZXNcXFxcMDMzWzBtXFxcIiAmJiBybSAtdnJmIGV4YW1wbGVzL2J1aWxkLypcIixcblx0XHRcImNsZWFuOnRlc3RcIjogXCJlY2hvIFxcXCJcXFxcMDMzWzM2OzFtW0NsZWFuXVxcXFwwMzNbMG0gXFxcXDAzM1szM210ZXN0XFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiB0ZXN0L2J1aWxkLypcIixcblx0XHRcImNsZWFuXCI6IFwibnBtIHJ1biBjbGVhbjpleGFtcGxlcyAmJiBucG0gcnVuIGNsZWFuOnRlc3RcIixcblx0XHRcImNvcHk6anNcIjogXCJjcCAtdmYgLi9kaXN0L25hdGl2ZS5qcyAuL2FuZHJvaWQvc2RrL2Fzc2V0cy9tYWluLmpzXCIsXG5cdFx0XCJjb3B5OmV4YW1wbGVzXCI6IFwicm0gLXJmIC4vYW5kcm9pZC9wbGF5Z3JvdW5kL2FwcC9zcmMvbWFpbi9hc3NldHMvKiAmJiBjcCAtdnJmIC4vZXhhbXBsZXMvYnVpbGQvKiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzL1wiLFxuXHRcdFwiY29weVwiOiBcIm5wbSBydW4gY29weTpqcyAmJiBucG0gcnVuIGNvcHk6ZXhhbXBsZXNcIlxuXHR9LFxuXHRcInN1YnZlcnNpb25cIjoge1xuXHRcdFwiYnJvd3NlclwiOiBcIjAuMy4yXCIsXG5cdFx0XCJmcmFtZXdvcmtcIjogXCIwLjE1LjJcIixcblx0XHRcInRyYW5zZm9ybWVyXCI6IFwiPj0wLjEuNSA8MC40XCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYW5pbWF0aW9uanNcIjogXCJeMC4xLjVcIixcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcImN1YmljYmV6aWVyXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJlbnZkXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJodHRwdXJsXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJsYXp5aW1nXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJtb2RhbHNcIjogXCJeMC4xLjVcIixcblx0XHRcInNjcm9sbC10b1wiOiBcIjAuMC4yXCIsXG5cdFx0XCJzZW12ZXJcIjogXCJeNS4xLjBcIixcblx0XHRcIndlZXgtY29tcG9uZW50c1wiOiBcIl4wLjIuMFwiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNsaVwiOiBcIn42LjQuNVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjYuMi40XCIsXG5cdFx0XCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWVcIjogXCJeNi4xNS4wXCIsXG5cdFx0XCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuOS4wXCIsXG5cdFx0XCJiYWJlbC1ydW50aW1lXCI6IFwiXjYuMTEuNlwiLFxuXHRcdFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuXHRcdFwiY2hyb21lZHJpdmVyXCI6IFwiXjIuMjEuMlwiLFxuXHRcdFwiY3Jvc3Mtc3Bhd25cIjogXCJeNC4wLjBcIixcblx0XHRcImNzcy1sb2FkZXJcIjogXCJeMC4yMy4xXCIsXG5cdFx0XCJlc2xpbnRcIjogXCJeMi4xMS4xXCIsXG5cdFx0XCJodHRwLXNlcnZlclwiOiBcIl4wLjkuMFwiLFxuXHRcdFwiaXNwYXJ0YVwiOiBcIl40LjAuMFwiLFxuXHRcdFwiaXN0YW5idWxcIjogXCJeMC40LjNcIixcblx0XHRcImpzb24tbG9hZGVyXCI6IFwiXjAuNS40XCIsXG5cdFx0XCJtb2NoYVwiOiBcIl4yLjUuM1wiLFxuXHRcdFwibmlnaHR3YXRjaFwiOiBcIl4wLjkuNFwiLFxuXHRcdFwicGhhbnRvbWpzLXByZWJ1aWx0XCI6IFwiXjIuMS43XCIsXG5cdFx0XCJzZWxlbml1bS1zZXJ2ZXJcIjogXCIyLjUzLjFcIixcblx0XHRcInNlcnZlXCI6IFwiXjEuNC4wXCIsXG5cdFx0XCJzaW5vblwiOiBcIl4xLjE3LjRcIixcblx0XHRcInNpbm9uLWNoYWlcIjogXCJeMi44LjBcIixcblx0XHRcInN0eWxlLWxvYWRlclwiOiBcIl4wLjEzLjFcIixcblx0XHRcInVnbGlmeS1qc1wiOiBcIl4yLjYuNFwiLFxuXHRcdFwid2VicGFja1wiOiBcIl4xLjEzLjFcIixcblx0XHRcIndlZXgtbG9hZGVyXCI6IFwiXjAuMy4xXCJcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhlIGFwaSBmb3IgaW52b2tpbmcgd2l0aCBcIiRcIiBwcmVmaXhcbiAqL1xuaW1wb3J0IHsgZXh0ZW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogY29tbW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgJHZtIGluc3RlYWRcbiAqIGZpbmQgdGhlIHZtIGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJCAoaWQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgVm0jJHZtIGluc3RlYWQnKVxuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSBlbGVtZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZWwgKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8uZWxcbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIHZtIG9mIHRoZSBjdXN0b20gY29tcG9uZW50IGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHZtIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuLyoqXG4gKiBGaXJlIHdoZW4gZGlmZmVyIHJlbmRlcmluZyBmaW5pc2hlZFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gJHJlbmRlclRoZW4gKGZuKSB7XG4gIGNvbnN0IGFwcCA9IHRoaXMuX2FwcFxuICBjb25zdCBkaWZmZXIgPSBhcHAuZGlmZmVyXG4gIHJldHVybiBkaWZmZXIudGhlbigoKSA9PiB7XG4gICAgZm4oKVxuICB9KVxufVxuXG4vKipcbiAqIHNjcm9sbCBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZCBpbnRvIHZpZXcsXG4gKiBtb3Jlb3ZlciBzcGVjaWZ5IGEgbnVtYmVyIG9mIG9mZnNldCBvcHRpb25hbGx5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG9mZnNldFxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNjcm9sbFRvIChpZCwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNjcm9sbFRvIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZG9tXFwnKScgK1xuICAgICAgICAgICcuc2Nyb2xsVG8oZWwsIG9wdGlvbnMpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCkge1xuICAgIGNvbnN0IGRvbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQoZWwucmVmLCB7IG9mZnNldDogb2Zmc2V0IH0pXG4gIH1cbn1cblxuLyoqXG4gKiBwZXJmb3JtIHRyYW5zaXRpb24gYW5pbWF0aW9uIG9uIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgaWRcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5zdHlsZXNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLmR1cmF0aW9uKG1zKVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLnRpbWluZ0Z1bmN0aW9uXVxuICogQHBhcmFtICB7b2JqZWN0fSAgIFtvcHRpb25zLmRlbGF5PTAobXMpXVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdHJhbnNpdGlvbiAoaWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsID0gdGhpcy4kZWwoaWQpXG4gIGlmIChlbCAmJiBvcHRpb25zICYmIG9wdGlvbnMuc3R5bGVzKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpXG4gICAgYW5pbWF0aW9uLnRyYW5zaXRpb24oZWwucmVmLCBvcHRpb25zLCAoLi4uYXJncykgPT4ge1xuICAgICAgdGhpcy5fc2V0U3R5bGUoZWwsIG9wdGlvbnMuc3R5bGVzKVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soLi4uYXJncylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogZ2V0IHNvbWUgY29uZmlnXG4gKiBAcmV0dXJuIHtvYmplY3R9IHNvbWUgY29uZmlnIGZvciBhcHAgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBidW5kbGVVcmxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBlbnZcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYud2VleFZlcnNpb24oZXguIDEuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBOYW1lKGV4LiBUQi9UTSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwVmVyc2lvbihleC4gNS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LnBsYXRmb3JtKGV4LiBpT1MvQW5kcm9pZClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYub3NWZXJzaW9uKGV4LiA3LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuZGV2aWNlTW9kZWwgKipuYXRpdmUgb25seSoqXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LltkZXZpY2VXaWR0aD03NTBdXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW52LmRldmljZUhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGdldENvbmZpZyAoY2FsbGJhY2spIHtcbiAgY29uc3QgY29uZmlnID0gZXh0ZW5kKHtcbiAgICBlbnY6IGdsb2JhbC5XWEVudmlyb25tZW50IHx8IHt9XG4gIH0sIHRoaXMuX2FwcC5vcHRpb25zKVxuICBpZiAodHlwb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSB0aGUgY2FsbGJhY2sgb2YgVm0jJGdldENvbmZpZyhjYWxsYmFjaykgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAndGhpcyBhcGkgbm93IGNhbiBkaXJlY3RseSBSRVRVUk4gY29uZmlnIGluZm8uJylcbiAgICBjYWxsYmFjayhjb25maWcpXG4gIH1cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiByZXF1ZXN0IG5ldHdvcmsgdmlhIGh0dHAgcHJvdG9jb2xcbiAqIEBwYXJhbSAge29iamVjdH0gICBwYXJhbXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHNlbmRIdHRwIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNlbmRIdHRwIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvc3RyZWFtXFwnKScgK1xuICAgICAgICAgICcuc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcIiBpbnN0ZWFkJylcbiAgY29uc3Qgc3RyZWFtID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXG4gIHN0cmVhbS5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBvcGVuIGEgdXJsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gJG9wZW5VUkwgKHVybCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRvcGVuVVJMIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvZXZlbnRcXCcpJyArXG4gICAgICAgICAgJy5vcGVuVVJMKHVybClcIiBpbnN0ZWFkJylcbiAgY29uc3QgZXZlbnQgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZXZlbnQnKVxuICBldmVudC5vcGVuVVJMKHVybClcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogc2V0IGEgdGl0bGUgZm9yIHBhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZXRUaXRsZSAodGl0bGUpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2V0VGl0bGUgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9wYWdlSW5mb1xcJyknICtcbiAgICAgICAgICAnLnNldFRpdGxlKHRpdGxlKVwiIGluc3RlYWQnKVxuICBjb25zdCBwYWdlSW5mbyA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdwYWdlSW5mbycpXG4gIHBhZ2VJbmZvLnNldFRpdGxlKHRpdGxlKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBcInJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lJykgaW5zdGVhZFwiXG4gKiBpbnZva2UgYSBuYXRpdmUgbWV0aG9kIGJ5IHNwZWNpZmluZyB0aGUgbmFtZSBvZiBtb2R1bGUgYW5kIG1ldGhvZFxuICogQHBhcmFtICB7c3RyaW5nfSBtb2R1bGVOYW1lXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqIEBwYXJhbSAgey4uLip9IHRoZSByZXN0IGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gJGNhbGwgKG1vZHVsZU5hbWUsIG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkY2FsbCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWVcXCcpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IG1vZHVsZSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKG1vZHVsZU5hbWUpXG4gIGlmIChtb2R1bGUgJiYgbW9kdWxlW21ldGhvZE5hbWVdKSB7XG4gICAgbW9kdWxlW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcGkvbWV0aG9kcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=