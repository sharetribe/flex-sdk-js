(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["sharetribeSdk"] = factory(require("axios"));
	else
		root["sharetribeSdk"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_237__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(65);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ },
/* 2 */
/***/ function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(134),
    getValue = __webpack_require__(173);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ },
/* 4 */
/***/ function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    getRawTag = __webpack_require__(172),
    objectToString = __webpack_require__(201);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(139),
    baseMatchesProperty = __webpack_require__(140),
    identity = __webpack_require__(14),
    isArray = __webpack_require__(0),
    property = __webpack_require__(227);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(38),
    stringToPath = __webpack_require__(213),
    toString = __webpack_require__(86);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(80),
    isLength = __webpack_require__(44);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(52),
    baseKeys = __webpack_require__(136),
    isArrayLike = __webpack_require__(10);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(8),
    toKey = __webpack_require__(9);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(30),
    baseAssignValue = __webpack_require__(31);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ },
/* 14 */
/***/ function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ },
/* 15 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DEBUG = false;

var resolve = function resolve(ctx) {
  return Promise.resolve(ctx);
};

var buildCtx = function buildCtx() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middleware = arguments[1];
  return _extends({}, params, {
    enterQueue: [].concat(_toConsumableArray(middleware)).reverse(),
    leaveStack: []
  });
};

var tryExecuteMw = function tryExecuteMw(ctx, mw, stage) {
  /* eslint-disable no-console */
  /* eslint-disable no-undef */
  if (DEBUG) {
    if (mw[stage]) {
      console.log('Executing ' + mw.constructor.name + '#' + stage);
    }
  }
  /* eslint-enable no-console */
  /* eslint-enable no-undef */

  return resolve(ctx).then(mw[stage] || resolve).catch(function (error) {
    var errorCtx = error.ctx || ctx;
    return Promise.resolve(_extends({}, errorCtx, {
      error: error,
      errorMiddleware: mw.constructor.name,
      errorStage: stage
    }));
  });
};

var nextMw = function nextMw(ctx) {
  var leaveStack = [].concat(_toConsumableArray(ctx.leaveStack));
  var enterQueue = [].concat(_toConsumableArray(ctx.enterQueue));
  var mw = void 0;
  var type = void 0;

  if (ctx.error) {
    mw = leaveStack.shift();
    type = 'error';
  } else if (enterQueue.length) {
    mw = enterQueue.pop();
    leaveStack.unshift(mw);
    type = 'enter';
  } else {
    mw = leaveStack.shift();
    type = 'leave';
  }
  return [_extends({}, ctx, { enterQueue: enterQueue, leaveStack: leaveStack }), mw, type];
};

var executeCtx = function executeCtx(ctx) {
  var _nextMw = nextMw(ctx),
      _nextMw2 = _slicedToArray(_nextMw, 3),
      newCtx = _nextMw2[0],
      mw = _nextMw2[1],
      type = _nextMw2[2];

  if (mw) {
    return tryExecuteMw(newCtx, mw, type).then(executeCtx);
  } else if (newCtx.error) {
    var error = newCtx.error,
        errorCtx = _objectWithoutProperties(newCtx, ['error']);

    error.ctx = errorCtx;
    return Promise.reject(error);
  }

  return Promise.resolve(newCtx);
};

/**

   ## contextRunner([interceptors]) => (ctx: Object) => Promise

   `contextRunner` takes an array of interceptor objects and returns a
   runnable function that takes context map (i.e. `ctx`) as a
   parameter, executes the interceptor chain and returns a Promise.

   ## Return value

   After running the function returned by the context runner, a
   Promise will be returned.

   - If the result is successful a `Promise.resolve(ctx)` is returned
   - If the result is unsuccessful a `Promise.resolve(error)` is
   - returned. The `error` MUST be instance of Error, and it MUST
   - contain key `ctx`, which contains the context map.

   ## Interceptor

   Interceptor is an object with `enter`, `leave` and `exit`
   functions. The object implement all `enter`, `leave` and `exit`
   functions, or some or none of them.

   It might be beneficial to define interceptors as classes. This
   helps debugging, because instead of `[Object object]` you are able
   to see the name of the interceptor. However, if you define the
   interceptor as a class, you should NOT use `this` in the class
   methods. The methods will be called in unbinded fashion.

   ### enter(ctx) => ctx

   `enter` function will be called when the context runner is
   executing the interceptor chain in the `enter` stage. The function
   takes context map as a parameter and returns the context map. If
   the interceptor does async operations, it can also return a
   Promise. If an error occures during the execution, an Error can be
   thrown.

   ### leave(ctx) => ctx

   `leave` function will be called when the context runner is
   executing the interceptor chain in the `leave` stage. The function
   takes context map as a parameter and returns the context map. If
   the interceptor does async operations, it can also return a
   Promise. If an error occures during the execution, an Error can be
   thrown.

   ### error(ctx) => ctx

   `error` function will be called when the context runner is
   executing the interceptor chain in the `error` stage. The runner
   goes to an `error` stage, if a previously executed interceptor
   threw an error or returned a rejected Promise.

   In `error` stage, the context map will have `ctx.error` assigned to
   the error that was thrown.

   The error can be rescued by returning a context map where
   `ctx.error` is falsy.

   ## Example usage:

   ```
   class LocalSumNumbers {
     enter({ numbers, ...ctx }) {
       return { ...ctx, sum: numbers.reduce((a, b) => a + b, 0) }
     }
   }

   contextRunner([
     new LocalSumNumbers()
   ])({ numbers: [1, 2, 3, 4 ]}).then((ctx) => {
     console.log(ctx.sym) // prints 10
   });
   ```

 */
var contextRunner = function contextRunner(middleware) {
  return function (params) {
    return executeCtx(buildCtx(params, middleware));
  };
};

exports.default = contextRunner;

/***/ },
/* 16 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Take `authToken` from `res` and add it to `ctx` top-level.

   Changes to `ctx`:

   - add `authToken` (from res)
*/
var AddAuthTokenResponse = function () {
  function AddAuthTokenResponse() {
    _classCallCheck(this, AddAuthTokenResponse);
  }

  _createClass(AddAuthTokenResponse, [{
    key: "leave",
    value: function leave(ctx) {
      var authToken = ctx.res.data;


      return _extends({}, ctx, { authToken: authToken });
    }
  }]);

  return AddAuthTokenResponse;
}();

exports.default = AddAuthTokenResponse;

/***/ },
/* 17 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   On `leave` phase, take `authToken` from `ctx` and save it to tokenStore

   Changes to `ctx`:

   - None
*/
var SaveToken = function () {
  function SaveToken() {
    _classCallCheck(this, SaveToken);
  }

  _createClass(SaveToken, [{
    key: "leave",
    value: function leave(ctx) {
      var authToken = ctx.authToken,
          tokenStore = ctx.tokenStore;


      if (tokenStore) {
        return Promise.resolve().then(function () {
          return tokenStore.setToken(authToken);
        }).then(function () {
          return ctx;
        });
      }

      return ctx;
    }
  }]);

  return SaveToken;
}();

exports.default = SaveToken;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(187),
    listCacheDelete = __webpack_require__(188),
    listCacheGet = __webpack_require__(189),
    listCacheHas = __webpack_require__(190),
    listCacheSet = __webpack_require__(191);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ },
/* 19 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var eq = __webpack_require__(40);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(185);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reviver = exports.replacer = exports.BigDecimal = exports.Money = exports.LatLngBounds = exports.LatLng = exports.UUID = undefined;

var _findKey2 = __webpack_require__(219);

var _findKey3 = _interopRequireDefault(_findKey2);

var _omit2 = __webpack_require__(225);

var _omit3 = _interopRequireDefault(_omit2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   UUID type
   @constructor
   @param {string} uuid - UUID represented as string
 */
var UUID = exports.UUID = function UUID(uuid) {
  _classCallCheck(this, UUID);

  this.uuid = uuid;
};

var LatLng = exports.LatLng = function LatLng(lat, lng) {
  _classCallCheck(this, LatLng);

  this.lat = lat;
  this.lng = lng;
};

var LatLngBounds = exports.LatLngBounds = function LatLngBounds(ne, sw) {
  _classCallCheck(this, LatLngBounds);

  this.ne = ne;
  this.sw = sw;
};

/**
   Money type to represent money

   - `amount`: The money amount in `minor` unit. In most cases, the minor unit means cents.
               However, in currencies without cents, e.g. Japanese Yen, the `amount` value
               is the number of Yens.
   - `currency`: ISO 4217 currency code

   Examples:

   ```
   new Money(5000, "USD") // $50
   new Money(150, "EUR")  // 1.5€
   new Money(2500, "JPY") // ¥2500
   ```
*/


var Money = exports.Money = function Money(amount, currency) {
  _classCallCheck(this, Money);

  this.amount = amount;
  this.currency = currency;
};

/**
  Type to represent arbitrary precision decimal value.

  It's recommended to use a library such as decimal.js to make decimal
  calculations.
*/


var BigDecimal = exports.BigDecimal = function BigDecimal(value) {
  _classCallCheck(this, BigDecimal);

  this.value = value;
};

//
// Map containing the type name for serialization and the type class
//


var types = {
  UUID: UUID,
  LatLng: LatLng,
  LatLngBounds: LatLngBounds,
  Money: Money,
  BigDecimal: BigDecimal
};

//
// Clean Error details when stringifying Error.
//
var cleanErrorValue = function cleanErrorValue(value) {
  // Omit Error ctx and config from Error's details part.
  // Those can contain circular structures on Node.js side and cause errors when stringifying
  if (value instanceof Error) {
    var details = value.details || {};
    return _extends({}, value, { details: (0, _omit3.default)(details, ['ctx', 'config']) });
  }
  return value;
};

//
// JSON replacer
//
var replacer = exports.replacer = function replacer() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var value = arguments[1];

  var cleanedValue = cleanErrorValue(value);
  var type = (0, _findKey3.default)(types, function (typeClass) {
    return cleanedValue instanceof typeClass;
  });

  if (type) {
    // eslint-disable-next-line no-underscore-dangle
    return _extends({}, cleanedValue, { _sdkType: type });
  }

  return cleanedValue;
};

//
// JSON reviver
//
var reviver = exports.reviver = function reviver() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var value = arguments[1];

  // eslint-disable-next-line no-underscore-dangle
  var type = value && value._sdkType;

  switch (type) {
    case 'LatLng':
      return new LatLng(value.lat, value.lng);
    case 'LatLngBounds':
      return new LatLngBounds(value.ne, value.sw);
    case 'UUID':
      return new UUID(value.uuid);
    case 'Money':
      return new Money(value.amount, value.currency);
    case 'BigDecimal':
      return new BigDecimal(value.value);
    default:
      return value;
  }
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(192),
    mapCacheDelete = __webpack_require__(193),
    mapCacheGet = __webpack_require__(194),
    mapCacheHas = __webpack_require__(195),
    mapCacheSet = __webpack_require__(196);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(18),
    stackClear = __webpack_require__(206),
    stackDelete = __webpack_require__(207),
    stackGet = __webpack_require__(208),
    stackHas = __webpack_require__(209),
    stackSet = __webpack_require__(210);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ },
/* 28 */
/***/ function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ },
/* 29 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(31),
    eq = __webpack_require__(40);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(62);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(128),
    keys = __webpack_require__(11);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(30),
    castPath = __webpack_require__(8),
    isIndex = __webpack_require__(37),
    isObject = __webpack_require__(2),
    toKey = __webpack_require__(9);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(51);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(73);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(116),
    stubArray = __webpack_require__(85);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ },
/* 37 */
/***/ function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(23);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ },
/* 39 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ },
/* 40 */
/***/ function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(12);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(130),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(229);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)(module)))

/***/ },
/* 44 */
/***/ function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(29),
    baseEach = __webpack_require__(53),
    baseIteratee = __webpack_require__(7),
    baseReduce = __webpack_require__(145),
    isArray = __webpack_require__(0);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsCookie = __webpack_require__(106);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateKey = function generateKey(clientId, namespace) {
  return namespace + '-' + clientId + '-token';
};

var createStore = function createStore(_ref) {
  var clientId = _ref.clientId,
      secure = _ref.secure;

  var expiration = 30; // 30 days
  var namespace = 'st';
  var key = generateKey(clientId, namespace);

  var getToken = function getToken() {
    return _jsCookie2.default.getJSON(key);
  };
  var setToken = function setToken(tokenData) {
    var secureFlag = secure ? { secure: true } : {};
    _jsCookie2.default.set(key, tokenData, _extends({ expires: expiration }, secureFlag));
  };
  var removeToken = function removeToken() {
    _jsCookie2.default.remove(key);
  };

  return {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken
  };
};

exports.default = createStore;

/***/ },
/* 48 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createStore = function createStore() {
  var memo = void 0;

  var getToken = function getToken() {
    return memo;
  };
  var setToken = function setToken(tokenData) {
    memo = tokenData;
  };
  var removeToken = function removeToken() {
    memo = null;
  };

  return {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken
  };
};

exports.default = createStore;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTransitConverters = exports.writer = exports.reader = undefined;

var _reduce2 = __webpack_require__(45);

var _reduce3 = _interopRequireDefault(_reduce2);

var _flatten2 = __webpack_require__(78);

var _flatten3 = _interopRequireDefault(_flatten2);

var _find2 = __webpack_require__(217);

var _find3 = _interopRequireDefault(_find2);

var _map2 = __webpack_require__(84);

var _map3 = _interopRequireDefault(_map2);

var _fromPairs2 = __webpack_require__(220);

var _fromPairs3 = _interopRequireDefault(_fromPairs2);

var _identity2 = __webpack_require__(14);

var _identity3 = _interopRequireDefault(_identity2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _transitJs = __webpack_require__(236);

var _transitJs2 = _interopRequireDefault(_transitJs);

var _types = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
   Composes two readers (default and custom) so that:

  ```
  class MyCustomUuid {
    constructor(uuid) {
      this.myUuid = uuid;
    }
  }

  const defaultReader = {
     type: UUID,
     reader: v => new UUID(v),
  };

  const customReader = {
     type: UUID,

     // type of reader function: UUID -> MyCustomUuid
     reader: v => new MyCustomUuid(v.uuid),
  }

  Composition creates a new reader:

  {
     type: UUID,
     reader: v => new MyCustomUuid(new UUID(v))
  }
  ```
 */
var composeReader = function composeReader(defaultReader, customReader) {
  var defaultReaderFn = defaultReader.reader;
  var customReaderFn = customReader ? customReader.reader : _identity3.default;

  return function (rep) {
    return customReaderFn(defaultReaderFn(rep));
  };
};

/**
   Composes two writers (default and custom) so that:

  ```
  class MyCustomUuid {
    constructor(uuid) {
      this.myUuid = uuid;
    }
  }

  const defaultWriter = {
     type: UUID,
     writer: v => new UUID(v),
  };

  const customWriter = {
     type: UUID,
     customType: MyCustomUuid,

     // type of writer fn: MyCustomUuid -> UUID
     writer: v => new UUID(v.myUuid),
  }

  Composition creates a new reader:

  {
     type: UUID,
     reader: v => new MyCustomUuid(new UUID(v))
  }
  ```
 */
var composeWriter = function composeWriter(defaultWriter, customWriter) {
  var defaultWriterFn = defaultWriter.writer;
  var customWriterFn = customWriter ? customWriter.writer : _identity3.default;

  return function (rep) {
    return defaultWriterFn(customWriterFn(rep));
  };
};

/**
   Type map from Transit tags to type classes
 */
var typeMap = {
  u: _types.UUID,
  geo: _types.LatLng,
  mn: _types.Money,
  f: _types.BigDecimal
};

/**
   List of default readers
 */
var defaultReaders = [{
  type: _types.UUID,
  reader: function reader(rep) {
    return new _types.UUID(rep);
  }
}, {
  type: _types.LatLng,
  reader: function reader(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        lat = _ref2[0],
        lng = _ref2[1];

    return new _types.LatLng(lat, lng);
  }
}, {
  type: _types.Money,
  reader: function reader(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        amount = _ref4[0],
        currency = _ref4[1];

    return new _types.Money(amount, currency);
  }
}, {
  type: _types.BigDecimal,
  reader: function reader(rep) {
    return new _types.BigDecimal(rep);
  }
}];

/**
   List of default writers
 */
var defaultWriters = [{
  type: _types.UUID,
  writer: function writer(v) {
    return v.uuid;
  }
}, {
  type: _types.LatLng,
  writer: function writer(v) {
    return [v.lat, v.lng];
  }
}, {
  type: _types.Money,
  writer: function writer(v) {
    return [v.amount, v.currency];
  }
}, {
  type: _types.BigDecimal,
  writer: function writer(v) {
    return v.value;
  }
}];

/**
   Take `customReaders` param and construct a list of read handlers
   from `customReaders`, `defaultReaders` and `typeMap`.
*/
var constructReadHandlers = function constructReadHandlers(customReaders) {
  return (0, _fromPairs3.default)((0, _map3.default)(typeMap, function (typeClass, tag) {
    var defaultReader = (0, _find3.default)(defaultReaders, function (r) {
      return r.type === typeClass;
    });
    var customReader = (0, _find3.default)(customReaders, function (r) {
      return r.type === typeClass;
    });

    return [tag, composeReader(defaultReader, customReader)];
  }));
};

/**
   Take `customWriters` param and construct a list of write handlers
   from `customWriters`, `defaultWriters` and `typeMap`.
*/
var constructWriteHandlers = function constructWriteHandlers(customWriters) {
  return (0, _flatten3.default)((0, _map3.default)(typeMap, function (typeClass, _tag) {
    var defaultWriter = (0, _find3.default)(defaultWriters, function (w) {
      return w.type === typeClass;
    });
    var customWriter = (0, _find3.default)(customWriters, function (w) {
      return w.type === typeClass;
    });
    var composedWriter = composeWriter(defaultWriter, customWriter);
    var customTypeClass = customWriter ? customWriter.customType : defaultWriter.type;

    var handler = _transitJs2.default.makeWriteHandler({
      tag: function tag() {
        return _tag;
      },
      rep: composedWriter
    });

    return [customTypeClass || typeClass, handler];
  }));
};

/**
   Builds JS objects from Transit maps
 */
var mapBuilder = {
  init: function init() {
    return {};
  },
  add: function add(ret, key, val) {
    /* eslint-disable no-param-reassign */
    ret[key] = val;
    return ret;
  },
  finalize: _identity3.default
};

var reader = exports.reader = function reader() {
  var customReaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var handlers = constructReadHandlers(customReaders);

  return _transitJs2.default.reader('json', {
    handlers: _extends({}, handlers, {

      // Convert keywords to plain strings.
      // The conversion loses the information that the
      // string was originally a keyword. However, the API
      // can coerse strings to keywords, so it's ok to send strings
      // to the API when keywords is expected.
      ':': function _(rep) {
        return rep;
      },

      // Convert set to an array
      // The conversion loses the information that the
      // array was originally a set. However, the API
      // can coerse arrays to sets, so it's ok to send arrays
      // to the API when set is expected.
      set: function set(rep) {
        return rep;
      },

      // Convert list to an array
      list: function list(rep) {
        return rep;
      }
    }),
    mapBuilder: mapBuilder
  });
};

var MapHandler = [Object, _transitJs2.default.makeWriteHandler({
  tag: function tag() {
    return 'map';
  },
  rep: function rep(v) {
    return (0, _reduce3.default)(v, function (map, val, key) {
      map.set(_transitJs2.default.keyword(key), val);
      return map;
    }, _transitJs2.default.map());
  }
})];

var writer = exports.writer = function writer() {
  var customWriters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var ownHandlers = constructWriteHandlers(customWriters);

  return _transitJs2.default.writer('json', {
    handlers: _transitJs2.default.map([].concat(_toConsumableArray(ownHandlers), MapHandler)),

    // This is only needed for the REPL
    // TODO This could be stripped out for production build
    handlerForForeign: function handlerForForeign(x, handlers) {
      if (Array.isArray(x)) {
        return handlers.get('array');
      } else if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
        return handlers.get('map');
      }

      return null;
    }
  });
};

var createTransitConverters = exports.createTransitConverters = function createTransitConverters() {
  var typeHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _typeHandlers$reduce = typeHandlers.reduce(function (memo, handler) {
    var r = {
      type: handler.type,
      reader: handler.reader
    };
    var w = {
      type: handler.type,
      customType: handler.customType,
      writer: handler.writer
    };

    memo.readers.push(r);
    memo.writers.push(w);

    return memo;
  }, { readers: [], writers: [] }),
      readers = _typeHandlers$reduce.readers,
      writers = _typeHandlers$reduce.writers;

  return {
    reader: reader(readers),
    writer: writer(writers)
  };
};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(26),
    setCacheAdd = __webpack_require__(203),
    setCacheHas = __webpack_require__(204);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(148),
    isArguments = __webpack_require__(42),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(43),
    isIndex = __webpack_require__(37),
    isTypedArray = __webpack_require__(82);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(32),
    createBaseEach = __webpack_require__(165);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ },
/* 54 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(28),
    isArray = __webpack_require__(0);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(54),
    baseIsNaN = __webpack_require__(133),
    strictIndexOf = __webpack_require__(211);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(131),
    isObjectLike = __webpack_require__(4);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ },
/* 58 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    arrayMap = __webpack_require__(19),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ },
/* 60 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ },
/* 61 */
/***/ function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(50),
    arraySome = __webpack_require__(119),
    cacheHas = __webpack_require__(61);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(78),
    overRest = __webpack_require__(74),
    setToString = __webpack_require__(76);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ },
/* 65 */
/***/ function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(55),
    getSymbols = __webpack_require__(36),
    keys = __webpack_require__(11);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(55),
    getSymbolsIn = __webpack_require__(68),
    keysIn = __webpack_require__(83);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(28),
    getPrototype = __webpack_require__(35),
    getSymbols = __webpack_require__(36),
    stubArray = __webpack_require__(85);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(107),
    Map = __webpack_require__(25),
    Promise = __webpack_require__(109),
    Set = __webpack_require__(110),
    WeakMap = __webpack_require__(111),
    baseGetTag = __webpack_require__(6),
    toSource = __webpack_require__(77);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ },
/* 71 */
/***/ function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ },
/* 72 */
/***/ function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ },
/* 73 */
/***/ function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var apply = __webpack_require__(114);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ },
/* 75 */
/***/ function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(147),
    shortOut = __webpack_require__(205);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ },
/* 77 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(127);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(129),
    hasPath = __webpack_require__(174);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    getPrototype = __webpack_require__(35),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(135),
    baseUnary = __webpack_require__(60),
    nodeUtil = __webpack_require__(200);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(52),
    baseKeysIn = __webpack_require__(137),
    isArrayLike = __webpack_require__(10);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(19),
    baseIteratee = __webpack_require__(7),
    baseMap = __webpack_require__(138),
    isArray = __webpack_require__(0);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ },
/* 85 */
/***/ function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(59);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ },
/* 87 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var generateKey = function generateKey(clientId, namespace) {
  return namespace + '-' + clientId + '-token';
};

var createStore = function createStore(_ref) {
  var clientId = _ref.clientId,
      req = _ref.req,
      res = _ref.res,
      secure = _ref.secure;

  var expiration = 30; // 30 days
  var namespace = 'st';
  var key = generateKey(clientId, namespace);

  // A mutable variable containing the current token.
  // When a `setToken` is called, the current token will be
  // stored to this variable. `getToken` will read subsequent
  // calls from this variable.
  var currentToken = void 0;

  var readCookie = function readCookie() {
    var cookie = req.cookies[key];

    if (cookie) {
      return JSON.parse(cookie);
    }

    return null;
  };

  var getToken = function getToken() {
    currentToken = currentToken || readCookie();

    return currentToken;
  };

  var setToken = function setToken(tokenData) {
    currentToken = tokenData;
    var secureFlag = secure ? { secure: true } : {};

    // Manually stringify tokenData.
    // Express supports passing object to `res.cookie` which will be then automatically
    // JSON stringified. However, we CAN NOT use it, because it seems to output invalid JSON
    // with a "j" tag in front of the content (`"j:{ ...json here... }`). Because we want
    // to read that cookie also in browser, we don't want to produce invalid JSON.
    res.cookie(key, JSON.stringify(tokenData), _extends({
      maxAge: 1000 * 60 * 60 * 24 * expiration
    }, secureFlag));
  };

  var removeToken = function removeToken() {
    currentToken = null;
    res.clearCookie(key);
  };

  return {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken
  };
};

exports.default = createStore;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__(41);

var _get3 = _interopRequireDefault(_get2);

var _set2 = __webpack_require__(228);

var _set3 = _interopRequireDefault(_set2);

var _mapValues2 = __webpack_require__(223);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _compact2 = __webpack_require__(215);

var _compact3 = _interopRequireDefault(_compact2);

var _pick2 = __webpack_require__(226);

var _pick3 = _interopRequireDefault(_pick2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(237);

var _axios2 = _interopRequireDefault(_axios);

var _utils = __webpack_require__(105);

var _params_serializer = __webpack_require__(103);

var _params_serializer2 = _interopRequireDefault(_params_serializer);

var _add_auth_header = __webpack_require__(90);

var _add_auth_header2 = _interopRequireDefault(_add_auth_header);

var _retry_with_refresh_token = __webpack_require__(100);

var _retry_with_refresh_token2 = _interopRequireDefault(_retry_with_refresh_token);

var _retry_with_anon_token = __webpack_require__(99);

var _retry_with_anon_token2 = _interopRequireDefault(_retry_with_anon_token);

var _clear_token_after_revoke = __webpack_require__(93);

var _clear_token_after_revoke2 = _interopRequireDefault(_clear_token_after_revoke);

var _fetch_refresh_token_for_revoke = __webpack_require__(97);

var _fetch_refresh_token_for_revoke2 = _interopRequireDefault(_fetch_refresh_token_for_revoke);

var _add_auth_token_response = __webpack_require__(16);

var _add_auth_token_response2 = _interopRequireDefault(_add_auth_token_response);

var _save_token = __webpack_require__(17);

var _save_token2 = _interopRequireDefault(_save_token);

var _fetch_auth_token_from_api = __webpack_require__(95);

var _fetch_auth_token_from_api2 = _interopRequireDefault(_fetch_auth_token_from_api);

var _fetch_auth_token_from_store = __webpack_require__(96);

var _fetch_auth_token_from_store2 = _interopRequireDefault(_fetch_auth_token_from_store);

var _add_client_id_to_params = __webpack_require__(91);

var _add_client_id_to_params2 = _interopRequireDefault(_add_client_id_to_params);

var _auth_info = __webpack_require__(92);

var _auth_info2 = _interopRequireDefault(_auth_info);

var _default_params = __webpack_require__(94);

var _default_params2 = _interopRequireDefault(_default_params);

var _multipart_request = __webpack_require__(98);

var _multipart_request2 = _interopRequireDefault(_multipart_request);

var _transit_request = __webpack_require__(101);

var _transit_request2 = _interopRequireDefault(_transit_request);

var _transit_response = __webpack_require__(102);

var _transit_response2 = _interopRequireDefault(_transit_response);

var _token_store = __webpack_require__(104);

var _context_runner = __webpack_require__(15);

var _context_runner2 = _interopRequireDefault(_context_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable class-methods-use-this */

var defaultSdkConfig = {
  baseUrl: 'https://api.sharetribe.com',
  typeHandlers: [],
  endpoints: [],
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null
};

/**
   Basic configurations for different 'apis'.

   Currently we have two apis:

   - `api`: the marketplace API
   - `auth`: the authentication API

   These configurations will be passed to Axios library.
   They define how to do the requets to the APIs, e.g.
   how the parameters should be serialized,
   what are the headers that should be always sent and
   how to transform requests and response, etc.
 */
var apis = {
  api: function api(_ref) {
    var baseUrl = _ref.baseUrl,
        version = _ref.version,
        adapter = _ref.adapter,
        httpAgent = _ref.httpAgent,
        httpsAgent = _ref.httpsAgent;
    return {
      headers: {
        Accept: 'application/transit+json'
      },
      baseURL: baseUrl + '/' + version,
      transformRequest: function transformRequest(v) {
        return v;
      },
      transformResponse: function transformResponse(v) {
        return v;
      },
      adapter: adapter,
      paramsSerializer: _params_serializer2.default,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
  },
  auth: function auth(_ref2) {
    var baseUrl = _ref2.baseUrl,
        version = _ref2.version,
        adapter = _ref2.adapter,
        httpAgent = _ref2.httpAgent,
        httpsAgent = _ref2.httpsAgent;
    return {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      baseURL: baseUrl + '/' + version + '/',
      transformRequest: [function (data) {
        return (0, _utils.formData)(data);
      }],
      // using default transformRequest, which can handle JSON and fallback to plain
      // test if JSON parsing fails
      adapter: adapter,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
  }
};

/**
   List of all known endpoints

   - apiName: api / auth
   - path: URL path to the endpoint
   - internal: Is this method SDK internal only,
     or will it be part of the public SDK interface
   - method: HTTP method
 */
var endpointDefinitions = [{
  apiName: 'api',
  path: 'marketplace/show',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'users/show',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'current_user/show',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'current_user/create',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/update_profile',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/change_email',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/change_password',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/verify_email',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/send_verification_email',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/create_stripe_account',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/update_stripe_account',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'current_user/delete_stripe_account',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'password_reset/request',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'password_reset/reset',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'listings/show',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'listings/query',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'listings/query_own',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'listings/search',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'listings/create',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'listings/update',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'listings/open',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'listings/close',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'listings/add_image',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'images/upload_listing_image',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _multipart_request2.default()]
}, {
  apiName: 'api',
  path: 'images/upload_profile_image',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _multipart_request2.default()]
}, {
  apiName: 'api',
  path: 'transactions/initiate',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'transactions/initiate_speculative',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'transactions/transition',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'transactions/transition_speculative',
  internal: false,
  method: 'post',
  interceptors: [new _transit_response2.default(), new _transit_request2.default()]
}, {
  apiName: 'api',
  path: 'transactions/query',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, {
  apiName: 'api',
  path: 'transactions/show',
  internal: false,
  method: 'get',
  interceptors: [new _transit_response2.default()]
}, { apiName: 'auth', path: 'token', internal: true, method: 'post', interceptors: [] }, { apiName: 'auth', path: 'revoke', internal: true, method: 'post', interceptors: [] }];

var authenticateInterceptors = [new _fetch_auth_token_from_store2.default(), new _fetch_auth_token_from_api2.default(), new _retry_with_anon_token2.default(), new _retry_with_refresh_token2.default(), new _add_auth_header2.default()];

var loginInterceptors = [(0, _default_params2.default)({ grant_type: 'password', scope: 'user' }), new _add_client_id_to_params2.default(), new _save_token2.default(), new _add_auth_token_response2.default()];

var logoutInterceptors = [new _fetch_auth_token_from_store2.default(), new _clear_token_after_revoke2.default(), new _retry_with_refresh_token2.default(), new _add_auth_header2.default(), new _fetch_refresh_token_for_revoke2.default()];

/**
   Take endpoint definitions and return SDK function definition.
 */
var sdkFnDefsFromEndpointDefs = function sdkFnDefsFromEndpointDefs(epDefs) {
  return epDefs.filter(function (_ref3) {
    var _ref3$internal = _ref3.internal,
        internal = _ref3$internal === undefined ? false : _ref3$internal;
    return !internal;
  }).map(function (_ref4) {
    var apiName = _ref4.apiName,
        path = _ref4.path,
        method = _ref4.method;

    var fnPath = (0, _utils.fnPath)(path);
    var fullFnPath = [apiName].concat(_toConsumableArray(fnPath));

    return {
      method: method,
      path: fnPath,
      endpointInterceptorPath: fullFnPath,
      interceptors: [].concat(authenticateInterceptors)
    };
  });
};

/**
   List of SDK methods that will be part of the SDKs public interface.
   The list is created from the `endpointDefinitions` list.

   The objects in the list have following fields:

   - path (String | Array): The function name and path. I.e. if the path is `listings.show`,
     then there will be a public SDK method `sdk.listings.show`
   - endpointInterceptorPath (String | Array): Path to endpoint interceptor
   - interceptors: List of additional interceptors.

 */
var endpointSdkFnDefinitions = sdkFnDefsFromEndpointDefs(endpointDefinitions);

/**
   List of SDK methods that are not derived from the endpoints.
 */
var additionalSdkFnDefinitions = [{ path: 'login', endpointInterceptorPath: 'auth.token', interceptors: loginInterceptors }, { path: 'logout', endpointInterceptorPath: 'auth.revoke', interceptors: [].concat(logoutInterceptors) }, { path: 'authInfo', interceptors: [new _auth_info2.default()] }];

// const logAndReturn = (data) => {
//   console.log(data);
//   return data;
// };

var handleSuccessResponse = function handleSuccessResponse(response) {
  var status = response.status,
      statusText = response.statusText,
      data = response.data;


  return { status: status, statusText: statusText, data: data };
};

// GET requests: `params` includes query params. `queryParams` will be ignored
// POST requests: `params` includes body params. `queryParams` includes URL query params
var doRequest = function doRequest(_ref5) {
  var _ref5$params = _ref5.params,
      params = _ref5$params === undefined ? {} : _ref5$params,
      _ref5$queryParams = _ref5.queryParams,
      queryParams = _ref5$queryParams === undefined ? {} : _ref5$queryParams,
      httpOpts = _ref5.httpOpts;
  var _httpOpts$method = httpOpts.method,
      method = _httpOpts$method === undefined ? 'get' : _httpOpts$method;


  var data = null;
  var query = null;

  if (method.toLowerCase() === 'post') {
    data = params;
    query = queryParams;
  } else {
    query = params;
    // leave `data` null
  }

  var req = _extends({}, httpOpts, {
    method: method,
    data: data,
    params: query
  });

  return _axios2.default.request(req).then(handleSuccessResponse);
};

/**
   Creates a list of endpoint interceptors that call the endpoint with the
   given parameters.
*/
var createEndpointInterceptors = function createEndpointInterceptors(_ref6) {
  var method = _ref6.method,
      url = _ref6.url,
      httpOpts = _ref6.httpOpts;

  var httpOptsHeaders = httpOpts.headers,
      restHttpOpts = _objectWithoutProperties(httpOpts, ['headers']);

  return {
    enter: function enter(ctx) {
      var params = ctx.params,
          queryParams = ctx.queryParams,
          headers = ctx.headers,
          perRequestOpts = ctx.perRequestOpts;

      return doRequest({
        params: params,
        queryParams: queryParams,
        httpOpts: _extends({}, perRequestOpts, {
          method: method || 'get',
          // Merge additional headers
          headers: _extends({}, httpOptsHeaders, headers)
        }, restHttpOpts, {
          url: url
        })
      }).then(function (res) {
        return _extends({}, ctx, { res: res });
      }).catch(function (error) {
        var errorCtx = _extends({}, ctx, { res: error.response });
        // eslint-disable-next-line no-param-reassign
        error.ctx = errorCtx;
        throw error;
      });
    }
  };
};

var formatError = function formatError(e) {
  /* eslint-disable no-param-reassign */
  e.details = {};

  if (e.response) {
    var _e$response = e.response,
        status = _e$response.status,
        statusText = _e$response.statusText,
        data = _e$response.data;

    Object.assign(e, { status: status, statusText: statusText, data: data });
    delete e.response;
  }

  if (e.ctx) {
    // Move context `ctx` under `details`, i.e. to the non-public part.
    e.details.ctx = e.ctx;
    delete e.ctx;
  }

  if (e.config) {
    // Axios attachs the config object that was used to the error.
    // Move it under `details`, i.e. to the non-public part.
    e.details.config = e.config;
    delete e.config;
  }

  throw e;
  /* eslint-enable no-param-reassign */
};

var allowedPerRequestOpts = function allowedPerRequestOpts(opts) {
  return (0, _pick3.default)(opts, ['onUploadProgress']);
};

var createSdkFnContextRunner = function createSdkFnContextRunner(_ref7) {
  var params = _ref7.params,
      queryParams = _ref7.queryParams,
      perRequestOpts = _ref7.perRequestOpts,
      ctx = _ref7.ctx,
      interceptors = _ref7.interceptors,
      endpointInterceptors = _ref7.endpointInterceptors;
  return (0, _context_runner2.default)((0, _compact3.default)([].concat(_toConsumableArray(interceptors), _toConsumableArray(endpointInterceptors))))(_extends({}, ctx, {
    params: params,
    queryParams: queryParams,
    perRequestOpts: perRequestOpts
  })).then(function (_ref8) {
    var res = _ref8.res;
    return res;
  }).catch(formatError);
};
var createSdkPostFn = function createSdkPostFn(sdkFnParams) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var perRequestOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return createSdkFnContextRunner(_extends({
      params: params,
      queryParams: queryParams,
      perRequestOpts: allowedPerRequestOpts(perRequestOpts)
    }, sdkFnParams));
  };
};
var createSdkGetFn = function createSdkGetFn(sdkFnParams) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return createSdkFnContextRunner(_extends({ params: params }, sdkFnParams));
  };
};
/**
   Creates a new SDK function.

   'sdk function' is a function that will be attached to the SDK instance.
   These functions will be part of the SDK's public interface.

   It's meant to used by the user of the SDK.
 */
var createSdkFn = function createSdkFn(_ref9) {
  var method = _ref9.method,
      sdkFnParams = _objectWithoutProperties(_ref9, ['method']);

  if (method && method.toLowerCase() === 'post') {
    return createSdkPostFn(sdkFnParams);
  }

  return createSdkGetFn(sdkFnParams);
};

// Take SDK configurations, do transformation and return.
var transformSdkConfig = function transformSdkConfig(_ref10) {
  var baseUrl = _ref10.baseUrl,
      tokenStore = _ref10.tokenStore,
      sdkConfig = _objectWithoutProperties(_ref10, ['baseUrl', 'tokenStore']);

  return _extends({}, sdkConfig, {
    baseUrl: (0, _utils.trimEndSlash)(baseUrl),
    tokenStore: tokenStore || (0, _token_store.createDefaultTokenStore)(tokenStore, sdkConfig.clientId, !!sdkConfig.secure)
  });
};

// Validate SDK configurations, throw an error if invalid, otherwise return.
var validateSdkConfig = function validateSdkConfig(sdkConfig) {
  if (!sdkConfig.clientId) {
    throw new Error('clientId must be provided');
  }

  return sdkConfig;
};

var SharetribeSdk =
/**
   Instantiates a new SharetribeSdk instance.
   The constructor assumes the config options have been
   already validated.
 */
function SharetribeSdk(userSdkConfig) {
  var _this = this;

  _classCallCheck(this, SharetribeSdk);

  // Transform and validation SDK configurations
  var sdkConfig = validateSdkConfig(transformSdkConfig(_extends({}, defaultSdkConfig, userSdkConfig)));

  // Instantiate API configs
  var apiConfigs = (0, _mapValues3.default)(apis, function (apiConfig) {
    return apiConfig(sdkConfig);
  });

  // Read the endpoint definitions and do some mapping
  var endpointDefs = [].concat(endpointDefinitions, _toConsumableArray(sdkConfig.endpoints)).map(function (epDef) {
    var path = epDef.path,
        apiName = epDef.apiName,
        method = epDef.method,
        _epDef$interceptors = epDef.interceptors,
        interceptors = _epDef$interceptors === undefined ? [] : _epDef$interceptors;

    var fnPath = (0, _utils.fnPath)(path);
    var fullFnPath = [apiName].concat(_toConsumableArray(fnPath));
    var url = [apiName, path].join('/');
    var httpOpts = apiConfigs[apiName];

    var endpointInterceptors = [].concat(_toConsumableArray(interceptors), [createEndpointInterceptors({ method: method, url: url, httpOpts: httpOpts })]);

    return _extends({}, epDef, {
      fnPath: fnPath,
      fullFnPath: fullFnPath,
      endpointInterceptors: endpointInterceptors
    });
  });

  // Create `endpointInterceptors` object, which is object
  // containing interceptors for all defined endpoints.
  // This object can be passed to other interceptors in the interceptor context so they
  // are able to do API calls (e.g. authentication interceptors)
  var endpointInterceptors = endpointDefs.reduce(function (acc, _ref11) {
    var fullFnPath = _ref11.fullFnPath,
        interceptors = _ref11.endpointInterceptors;
    return (0, _set3.default)(acc, fullFnPath, interceptors);
  }, {});

  // Create a context object that will be passed to the interceptor context runner
  var ctx = {
    tokenStore: sdkConfig.tokenStore,
    endpointInterceptors: endpointInterceptors,
    clientId: sdkConfig.clientId,
    typeHandlers: sdkConfig.typeHandlers
  };

  var userDefinedSdkFnDefs = sdkFnDefsFromEndpointDefs(sdkConfig.endpoints);

  // Create SDK functions
  var sdkFns = [].concat(_toConsumableArray(endpointSdkFnDefinitions), additionalSdkFnDefinitions, _toConsumableArray(userDefinedSdkFnDefs)).map(function (_ref12) {
    var path = _ref12.path,
        method = _ref12.method,
        endpointInterceptorPath = _ref12.endpointInterceptorPath,
        interceptors = _ref12.interceptors;
    return {
      path: path,
      fn: createSdkFn({
        method: method,
        ctx: ctx,
        endpointInterceptors: (0, _get3.default)(endpointInterceptors, endpointInterceptorPath) || [],
        interceptors: interceptors
      })
    };
  });

  // Assign SDK functions to 'this'
  sdkFns.forEach(function (_ref13) {
    var path = _ref13.path,
        fn = _ref13.fn;
    return (0, _set3.default)(_this, path, fn);
  });
};

exports.default = SharetribeSdk;

/***/ },
/* 89 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**

   Collection of functions for detecting browser/server capabilities.

 */

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

var hasBrowserCookies = exports.hasBrowserCookies = function hasBrowserCookies() {
  return (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' && typeof document.cookie === 'string';
};

/***/ },
/* 90 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constructAuthHeader = function constructAuthHeader(authToken) {
  /* eslint-disable camelcase */
  var token_type = authToken.token_type && authToken.token_type.toLowerCase();

  switch (token_type) {
    case 'bearer':
      return 'Bearer ' + authToken.access_token;
    default:
      throw new Error('Unknown token type: ' + token_type);
  }
  /* eslint-enable camelcase */
};

/**
   Read `authToken` from `ctx`. Then construct Authorize header and add it to `headers`.

   Changes to `ctx`:

   - Add `headers.Authorize`
 */

var AddAuthHeader = function () {
  function AddAuthHeader() {
    _classCallCheck(this, AddAuthHeader);
  }

  _createClass(AddAuthHeader, [{
    key: 'enter',
    value: function enter(ctx) {
      var authToken = ctx.authToken,
          _ctx$headers = ctx.headers,
          headers = _ctx$headers === undefined ? {} : _ctx$headers;


      if (!authToken) {
        return ctx;
      }

      var authHeaders = { Authorization: constructAuthHeader(authToken) };
      return _extends({}, ctx, { headers: _extends({}, headers, authHeaders) });
    }
  }]);

  return AddAuthHeader;
}();

exports.default = AddAuthHeader;

/***/ },
/* 91 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Read `clientId` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.clientId`
 */
var AddClientIdToParams = function () {
  function AddClientIdToParams() {
    _classCallCheck(this, AddClientIdToParams);
  }

  _createClass(AddClientIdToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var clientId = _ref.clientId,
          params = _ref.params,
          ctx = _objectWithoutProperties(_ref, ["clientId", "params"]);

      return _extends({}, ctx, { clientId: clientId, params: _extends({}, params, { client_id: clientId }) });
    }
  }]);

  return AddClientIdToParams;
}();

exports.default = AddClientIdToParams;

/***/ },
/* 92 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Reads current authentication token from the tokenStore and returns
   information whether the user is currently logged in with anon token
   or password token.

   Changes to `ctx`:

   - add `res`

*/
var AuthInfo = function () {
  function AuthInfo() {
    _classCallCheck(this, AuthInfo);
  }

  _createClass(AuthInfo, [{
    key: 'enter',
    value: function enter(ctx) {
      var tokenStore = ctx.tokenStore;


      if (tokenStore) {
        return Promise.resolve().then(tokenStore.getToken).then(function (storedToken) {
          if (storedToken) {
            var grantType = storedToken.refresh_token ? 'refresh_token' : 'client_credentials';

            return _extends({}, ctx, { res: { grantType: grantType } });
          }

          return _extends({}, ctx, { res: {} });
        });
      }

      return _extends({}, ctx, { res: {} });
    }
  }]);

  return AuthInfo;
}();

exports.default = AuthInfo;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__(41);

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Clears token after revoke.

   If the `revoke` call was successful, clear token.

   If the `revoke` call was unsuccessful, and the reason
   was that we we're not authorized (401), rescue the chain
   and clear token

   Otherwise, do nothing.

   Changes to `ctx`:

   - Remove `error`, if 401
*/
var ClearTokenAfterRevoke = function () {
  function ClearTokenAfterRevoke() {
    _classCallCheck(this, ClearTokenAfterRevoke);
  }

  _createClass(ClearTokenAfterRevoke, [{
    key: 'leave',
    value: function leave(ctx) {
      return ClearTokenAfterRevoke.clearTokenAndResque(ctx);
    }
  }, {
    key: 'error',
    value: function error(ctx) {
      var _ref = ctx.res || {},
          status = _ref.status;

      var retryStatus = (0, _get3.default)(ctx, ['refreshTokenRetry', 'res', 'status']);

      if (status === 401 && retryStatus === 401) {
        return ClearTokenAfterRevoke.clearTokenAndResque(ctx);
      }

      return ctx;
    }
  }], [{
    key: 'clearTokenAndResque',
    value: function clearTokenAndResque(ctx) {
      var tokenStore = ctx.tokenStore;


      if (tokenStore) {
        return Promise.resolve().then(tokenStore.removeToken).then(function () {
          return _extends({}, ctx, { error: null });
        });
      }

      return _extends({}, ctx, { error: null });
    }
  }]);

  return ClearTokenAfterRevoke;
}();

exports.default = ClearTokenAfterRevoke;

/***/ },
/* 94 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
   Add given params to the `ctx.params`

   Changes to `ctx`:

   - Modify `ctx.params`
 */
var defaultParams = function defaultParams() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    enter: function enter(_ref) {
      var ctxParams = _ref.params,
          ctx = _objectWithoutProperties(_ref, ["params"]);

      return _extends({}, ctx, { params: _extends({}, params, ctxParams) });
    }
  };
};

exports.default = defaultParams;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _context_runner = __webpack_require__(15);

var _context_runner2 = _interopRequireDefault(_context_runner);

var _save_token = __webpack_require__(17);

var _save_token2 = _interopRequireDefault(_save_token);

var _add_auth_token_response = __webpack_require__(16);

var _add_auth_token_response2 = _interopRequireDefault(_add_auth_token_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   If there's no `authToken` stored to the `ctx`, try to fetch new auth token from the API.

   Changes to the `ctx`:

   - add `authToken`
*/
var FetchAuthTokenFromApi = function () {
  function FetchAuthTokenFromApi() {
    _classCallCheck(this, FetchAuthTokenFromApi);
  }

  _createClass(FetchAuthTokenFromApi, [{
    key: 'enter',
    value: function enter(ctx) {
      var tokenStore = ctx.tokenStore,
          authToken = ctx.authToken,
          endpointInterceptors = ctx.endpointInterceptors,
          clientId = ctx.clientId;


      if (authToken) {
        return ctx;
      }

      return (0, _context_runner2.default)([new _save_token2.default(), new _add_auth_token_response2.default()].concat(_toConsumableArray(endpointInterceptors.auth.token)))({
        params: {
          client_id: clientId,
          grant_type: 'client_credentials',
          scope: 'public-read'
        },
        tokenStore: tokenStore
      }).then(function (_ref) {
        var newAuthToken = _ref.authToken;
        return _extends({}, ctx, { authToken: newAuthToken });
      });
    }
  }]);

  return FetchAuthTokenFromApi;
}();

exports.default = FetchAuthTokenFromApi;

/***/ },
/* 96 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Fetches the auth token from tokenStore and adds it to the context.

   Changes to `ctx`:

   - add `authToken`

 */
var FetchAuthTokenFromStore = function () {
  function FetchAuthTokenFromStore() {
    _classCallCheck(this, FetchAuthTokenFromStore);
  }

  _createClass(FetchAuthTokenFromStore, [{
    key: "enter",
    value: function enter(enterCtx) {
      var tokenStore = enterCtx.tokenStore;


      if (!tokenStore) {
        return enterCtx;
      }

      return Promise.resolve().then(tokenStore.getToken).then(function (storedToken) {
        if (storedToken) {
          return _extends({}, enterCtx, { authToken: storedToken });
        }

        return enterCtx;
      });
    }
  }]);

  return FetchAuthTokenFromStore;
}();

exports.default = FetchAuthTokenFromStore;

/***/ },
/* 97 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Fetch `refresh_token` from `authToken` in `ctx`. If
   `refresh_token` doesn't exist, clear the `enterQueue`, because we
   don't need to revoke the refresh token we don't have.

   Changes to `ctx`:

   - Add `params.token`
   - Clear `enterQueue` (if no need to revoke)
*/
var FetchRefreshTokenForRevoke = function () {
  function FetchRefreshTokenForRevoke() {
    _classCallCheck(this, FetchRefreshTokenForRevoke);
  }

  _createClass(FetchRefreshTokenForRevoke, [{
    key: "enter",
    value: function enter(ctx) {
      var _ctx$authToken = ctx.authToken;
      _ctx$authToken = _ctx$authToken === undefined ? {} : _ctx$authToken;
      var token = _ctx$authToken.refresh_token;


      if (token) {
        return _extends({}, ctx, { params: { token: token } });
      }

      // No need to call `revoke` endpoint, because we don't have
      // refresh_token.
      // Clear the enterQueue
      return _extends({}, ctx, { enterQueue: [] });
    }
  }]);

  return FetchRefreshTokenForRevoke;
}();

exports.default = FetchRefreshTokenForRevoke;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce2 = __webpack_require__(45);

var _reduce3 = _interopRequireDefault(_reduce2);

var _isPlainObject2 = __webpack_require__(81);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Takes `params` from `ctx` and converts to `FormData`

   Changes to `ctx`:

   - Modify `ctx.params`
 */
var MultipartRequest = function () {
  function MultipartRequest() {
    _classCallCheck(this, MultipartRequest);
  }

  _createClass(MultipartRequest, [{
    key: 'enter',
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = _objectWithoutProperties(_ref, ['params']);

      if ((0, _isPlainObject3.default)(params)) {
        /* eslint-disable no-undef */
        if (typeof FormData === 'undefined') {
          throw new Error("Don't know how to create multipart request from Object, when the FormData is undefined");
        }

        var formDataObj = (0, _reduce3.default)(params, function (fd, val, key) {
          fd.append(key, val);
          return fd;
        }, new FormData());
        /* eslint-enable no-undef */

        return _extends({ params: formDataObj }, ctx);
      }

      return _extends({ params: params }, ctx);
    }
  }]);

  return MultipartRequest;
}();

exports.default = MultipartRequest;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _context_runner = __webpack_require__(15);

var _context_runner2 = _interopRequireDefault(_context_runner);

var _save_token = __webpack_require__(17);

var _save_token2 = _interopRequireDefault(_save_token);

var _add_auth_token_response = __webpack_require__(16);

var _add_auth_token_response2 = _interopRequireDefault(_add_auth_token_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Retries with a fresh anon token.

   `enter`: Save current `enterQueue` to `retryQueue` and save current `attempts` count

   `error`: Try to fetch new anon token. If successful, save it to `ctx`

   Changes to `ctx`:

   - add `anonTokenRetry`
   - add `authToken`
 */
var RetryWithAnonToken = function () {
  function RetryWithAnonToken() {
    _classCallCheck(this, RetryWithAnonToken);
  }

  _createClass(RetryWithAnonToken, [{
    key: 'enter',
    value: function enter(enterCtx) {
      var enterQueue = enterCtx.enterQueue,
          _enterCtx$anonTokenRe = enterCtx.anonTokenRetry;
      _enterCtx$anonTokenRe = _enterCtx$anonTokenRe === undefined ? {} : _enterCtx$anonTokenRe;
      var _enterCtx$anonTokenRe2 = _enterCtx$anonTokenRe.attempts,
          attempts = _enterCtx$anonTokenRe2 === undefined ? 0 : _enterCtx$anonTokenRe2;

      return _extends({}, enterCtx, {
        anonTokenRetry: {
          retryQueue: [].concat(_toConsumableArray(enterQueue), [new RetryWithAnonToken()]),
          attempts: attempts + 1
        }
      });
    }
  }, {
    key: 'error',
    value: function error(errorCtx) {
      var clientId = errorCtx.clientId,
          tokenStore = errorCtx.tokenStore,
          endpointInterceptors = errorCtx.endpointInterceptors,
          _errorCtx$anonTokenRe = errorCtx.anonTokenRetry,
          retryQueue = _errorCtx$anonTokenRe.retryQueue,
          attempts = _errorCtx$anonTokenRe.attempts;


      if (attempts > 1) {
        return errorCtx;
      }

      if (errorCtx.res && errorCtx.res.status === 401) {
        return (0, _context_runner2.default)([new _save_token2.default(), new _add_auth_token_response2.default()].concat(_toConsumableArray(endpointInterceptors.auth.token)))({
          params: {
            client_id: clientId,
            grant_type: 'client_credentials',
            scope: 'public-read'
          },
          tokenStore: tokenStore
        }).then(function (_ref) {
          var authToken = _ref.authToken;
          return _extends({}, errorCtx, { authToken: authToken, enterQueue: retryQueue, error: null });
        });
      }

      return errorCtx;
    }
  }]);

  return RetryWithAnonToken;
}();

exports.default = RetryWithAnonToken;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _context_runner = __webpack_require__(15);

var _context_runner2 = _interopRequireDefault(_context_runner);

var _save_token = __webpack_require__(17);

var _save_token2 = _interopRequireDefault(_save_token);

var _add_auth_token_response = __webpack_require__(16);

var _add_auth_token_response2 = _interopRequireDefault(_add_auth_token_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Retries with a fresh password token.


   `enter`: Save current `enterQueue` to `retryQueue` and save current `attempts` count

   `error`: Try to fetch new password token. If successful, save it to `ctx`

   Changes to `ctx`:

   - add `anonTokenRetry`
   - add `authToken`
 */
var RetryWithRefreshToken = function () {
  function RetryWithRefreshToken() {
    _classCallCheck(this, RetryWithRefreshToken);
  }

  _createClass(RetryWithRefreshToken, [{
    key: 'enter',
    value: function enter(enterCtx) {
      var enterQueue = enterCtx.enterQueue,
          _enterCtx$refreshToke = enterCtx.refreshTokenRetry;
      _enterCtx$refreshToke = _enterCtx$refreshToke === undefined ? {} : _enterCtx$refreshToke;
      var _enterCtx$refreshToke2 = _enterCtx$refreshToke.attempts,
          attempts = _enterCtx$refreshToke2 === undefined ? 0 : _enterCtx$refreshToke2;

      return _extends({}, enterCtx, {
        refreshTokenRetry: {
          retryQueue: [].concat(_toConsumableArray(enterQueue), [new RetryWithRefreshToken()]),
          attempts: attempts + 1
        }
      });
    }
  }, {
    key: 'error',
    value: function error(errorCtx) {
      var authToken = errorCtx.authToken,
          clientId = errorCtx.clientId,
          tokenStore = errorCtx.tokenStore,
          endpointInterceptors = errorCtx.endpointInterceptors,
          _errorCtx$refreshToke = errorCtx.refreshTokenRetry,
          retryQueue = _errorCtx$refreshToke.retryQueue,
          attempts = _errorCtx$refreshToke.attempts;


      if (attempts > 1) {
        return errorCtx;
      }

      if (errorCtx.res && errorCtx.res.status === 401 && authToken.refresh_token) {
        return (0, _context_runner2.default)([new _save_token2.default(), new _add_auth_token_response2.default()].concat(_toConsumableArray(endpointInterceptors.auth.token)))({
          params: {
            client_id: clientId,
            grant_type: 'refresh_token',
            refresh_token: authToken.refresh_token
          },
          tokenStore: tokenStore
        }).then(function (_ref) {
          var newAuthToken = _ref.authToken;
          return _extends({}, errorCtx, {
            authToken: newAuthToken,
            enterQueue: retryQueue,
            error: null
          });
        }).catch(function (e) {
          return _extends({}, errorCtx, {
            refreshTokenRetry: { retryQueue: retryQueue, attempts: attempts, res: e.response }
          });
        });
      }

      return errorCtx;
    }
  }]);

  return RetryWithRefreshToken;
}();

exports.default = RetryWithRefreshToken;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _serializer = __webpack_require__(49);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Transit encode the request
 */
var TransitRequest = function () {
  function TransitRequest() {
    _classCallCheck(this, TransitRequest);
  }

  _createClass(TransitRequest, [{
    key: 'enter',
    value: function enter(ctx) {
      var params = ctx.params,
          _ctx$headers = ctx.headers,
          headers = _ctx$headers === undefined ? {} : _ctx$headers,
          typeHandlers = ctx.typeHandlers,
          restCtx = _objectWithoutProperties(ctx, ['params', 'headers', 'typeHandlers']);

      if (headers['Content-Type'] === 'application/transit+json') {
        return ctx;
      }

      var _createTransitConvert = (0, _serializer.createTransitConverters)(typeHandlers),
          writer = _createTransitConvert.writer;

      return _extends({
        params: writer.write(params),
        headers: _extends({}, headers, {
          'Content-Type': 'application/transit+json'
        }),
        typeHandlers: typeHandlers
      }, restCtx);
    }
  }]);

  return TransitRequest;
}();

exports.default = TransitRequest;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _update2 = __webpack_require__(234);

var _update3 = _interopRequireDefault(_update2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _serializer = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
   Transit encode the response
 */
var TransitResponse = function () {
  function TransitResponse() {
    _classCallCheck(this, TransitResponse);
  }

  _createClass(TransitResponse, [{
    key: 'error',
    value: function error(ctx) {
      var _createTransitConvert = (0, _serializer.createTransitConverters)(ctx.typeHandlers),
          reader = _createTransitConvert.reader;

      if (!ctx.error.response) {
        return ctx;
      }

      return (0, _update3.default)(_extends({}, ctx), 'error.response.data', function (data) {
        return reader.read(data);
      });
    }
  }, {
    key: 'leave',
    value: function leave(ctx) {
      var _createTransitConvert2 = (0, _serializer.createTransitConverters)(ctx.typeHandlers),
          reader = _createTransitConvert2.reader;

      if (!ctx.res) {
        return ctx;
      }

      return (0, _update3.default)(_extends({}, ctx), 'res.data', function (data) {
        return reader.read(data);
      });
    }
  }]);

  return TransitResponse;
}();

exports.default = TransitResponse;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = __webpack_require__(84);

var _map3 = _interopRequireDefault(_map2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _types = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes a value for query string and returns it in encoded form.
 *
 * Uses `encodeURIComponent` with few exceptions:
 *
 * - Don't encode comma (,)
 *
 * Inspired by the `encode` function in Axios:
 * https://github.com/mzabriskie/axios/blob/b8f6f5049cf3da8126a184b6b270316402b5b374/lib/helpers/buildURL.js#L5
 */
var encode = function encode(value) {
  return encodeURIComponent(value).replace(/%2C/gi, ',');
};

/**
 * Take `key` and `value` and return a key-value tuple where
 * key and value are stringified.
 *
 * TODO Consider moving this function closer to the type definitions,
 * maybe in types.js file(?).
 */
var serialize = function serialize(key, value) {
  var v = value;

  if (value instanceof _types.UUID) {
    v = value.uuid;
  } else if (value instanceof _types.LatLng) {
    v = value.lat + ',' + value.lng;
  } else if (value instanceof _types.LatLngBounds) {
    v = value.ne.lat + ',' + value.ne.lng + ',' + value.sw.lat + ',' + value.sw.lng;
  } else if (Array.isArray(value)) {
    v = value;
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    throw new Error('Don\'t know how to serialize query parameter \'' + key + '\': ' + value);
  }

  return [key, encode(v)];
};

var paramsSerializer = function paramsSerializer(params) {
  return (0, _map3.default)(params, function (value, key) {
    return serialize(key, value).join('=');
  }).join('&');
};

exports.default = paramsSerializer;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultTokenStore = undefined;

var _detect = __webpack_require__(89);

var _browser_cookie_store = __webpack_require__(47);

var _browser_cookie_store2 = _interopRequireDefault(_browser_cookie_store);

var _memory_store = __webpack_require__(48);

var _memory_store2 = _interopRequireDefault(_memory_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */

var createDefaultTokenStore = exports.createDefaultTokenStore = function createDefaultTokenStore(tokenStore, clientId, secure) {
  if ((0, _detect.hasBrowserCookies)()) {
    return (0, _browser_cookie_store2.default)({ clientId: clientId, secure: secure });
  }

  // Token store was not given and we can't use browser cookie store.
  // Default to in-memory store.
  return (0, _memory_store2.default)();
};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formData = exports.fnPath = exports.trimEndSlash = undefined;

var _reduce2 = __webpack_require__(45);

var _reduce3 = _interopRequireDefault(_reduce2);

var _without2 = __webpack_require__(235);

var _without3 = _interopRequireDefault(_without2);

var _trimEnd2 = __webpack_require__(233);

var _trimEnd3 = _interopRequireDefault(_trimEnd2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   Take URL and remove the trailing slashes.

   Example:

   ```
   trimEndSlash("http://www.api.com") => "http://www.api.com"
   trimEndSlash("http://www.api.com/") => "http://www.api.com"
   trimEndSlash("http://www.api.com//") => "http://www.api.com"
   ```
 */
var trimEndSlash = exports.trimEndSlash = function trimEndSlash(url) {
  return (0, _trimEnd3.default)(url, '/');
};

var fnPath = exports.fnPath = function fnPath(path) {
  return (0, _without3.default)(path.split('/'), '').map(function (part) {
    return part.replace(/_\w/g, function (m) {
      return m[1].toUpperCase();
    });
  });
};

var formData = exports.formData = function formData(params) {
  return (0, _reduce3.default)(params, function (pairs, v, k) {
    pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
    return pairs;
  }, []).join('&');
};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(176),
    hashDelete = __webpack_require__(177),
    hashGet = __webpack_require__(178),
    hashHas = __webpack_require__(179),
    hashSet = __webpack_require__(180);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ },
/* 112 */
/***/ function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ },
/* 113 */
/***/ function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ },
/* 114 */
/***/ function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ },
/* 115 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ },
/* 116 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(56);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ },
/* 118 */
/***/ function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ },
/* 119 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ },
/* 120 */
/***/ function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(13),
    keys = __webpack_require__(11);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(13),
    keysIn = __webpack_require__(83);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    arrayEach = __webpack_require__(115),
    assignValue = __webpack_require__(30),
    baseAssign = __webpack_require__(121),
    baseAssignIn = __webpack_require__(122),
    cloneBuffer = __webpack_require__(154),
    copyArray = __webpack_require__(161),
    copySymbols = __webpack_require__(162),
    copySymbolsIn = __webpack_require__(163),
    getAllKeys = __webpack_require__(66),
    getAllKeysIn = __webpack_require__(67),
    getTag = __webpack_require__(69),
    initCloneArray = __webpack_require__(181),
    initCloneByTag = __webpack_require__(182),
    initCloneObject = __webpack_require__(183),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(43),
    isObject = __webpack_require__(2),
    keys = __webpack_require__(11);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(50),
    arrayIncludes = __webpack_require__(117),
    arrayIncludesWith = __webpack_require__(118),
    arrayMap = __webpack_require__(19),
    baseUnary = __webpack_require__(60),
    cacheHas = __webpack_require__(61);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ },
/* 126 */
/***/ function(module, exports) {

/**
 * The base implementation of methods like `_.findKey` and `_.findLastKey`,
 * without support for iteratee shorthands, which iterates over `collection`
 * using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFindKey(collection, predicate, eachFunc) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = key;
      return false;
    }
  });
  return result;
}

module.exports = baseFindKey;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(28),
    isFlattenable = __webpack_require__(184);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(166);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ },
/* 129 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    equalArrays = __webpack_require__(63),
    equalByTag = __webpack_require__(169),
    equalObjects = __webpack_require__(170),
    getTag = __webpack_require__(69),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(43),
    isTypedArray = __webpack_require__(82);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    baseIsEqual = __webpack_require__(57);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ },
/* 133 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(80),
    isMasked = __webpack_require__(186),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(77);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isLength = __webpack_require__(44),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(39),
    nativeKeys = __webpack_require__(198);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(39),
    nativeKeysIn = __webpack_require__(199);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(53),
    isArrayLike = __webpack_require__(10);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(132),
    getMatchData = __webpack_require__(171),
    matchesStrictComparable = __webpack_require__(72);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(57),
    get = __webpack_require__(41),
    hasIn = __webpack_require__(79),
    isKey = __webpack_require__(38),
    isStrictComparable = __webpack_require__(70),
    matchesStrictComparable = __webpack_require__(72),
    toKey = __webpack_require__(9);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(142),
    hasIn = __webpack_require__(79);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(12),
    baseSet = __webpack_require__(33),
    castPath = __webpack_require__(8);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ },
/* 143 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(12);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ },
/* 145 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

var identity = __webpack_require__(14),
    overRest = __webpack_require__(74),
    setToString = __webpack_require__(76);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

var constant = __webpack_require__(216),
    defineProperty = __webpack_require__(62),
    identity = __webpack_require__(14);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ },
/* 148 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(8),
    last = __webpack_require__(222),
    parent = __webpack_require__(202),
    toKey = __webpack_require__(9);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(12),
    baseSet = __webpack_require__(33);

/**
 * The base implementation of `_.update`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to update.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseUpdate(object, path, updater, customizer) {
  return baseSet(object, path, updater(baseGet(object, path)), customizer);
}

module.exports = baseUpdate;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

var identity = __webpack_require__(14);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(58);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(56);

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)(module)))

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(34);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(112),
    arrayReduce = __webpack_require__(29),
    mapToArray = __webpack_require__(71);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ },
/* 157 */
/***/ function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(113),
    arrayReduce = __webpack_require__(29),
    setToArray = __webpack_require__(75);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(34);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ },
/* 161 */
/***/ function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(13),
    getSymbols = __webpack_require__(36);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(13),
    getSymbolsIn = __webpack_require__(68);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(10);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ },
/* 166 */
/***/ function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(7),
    isArrayLike = __webpack_require__(10),
    keys = __webpack_require__(11);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(81);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    Uint8Array = __webpack_require__(51),
    eq = __webpack_require__(40),
    equalArrays = __webpack_require__(63),
    mapToArray = __webpack_require__(71),
    setToArray = __webpack_require__(75);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(66);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(70),
    keys = __webpack_require__(11);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ },
/* 173 */
/***/ function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(8),
    isArguments = __webpack_require__(42),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(37),
    isLength = __webpack_require__(44),
    toKey = __webpack_require__(9);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ },
/* 175 */
/***/ function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(22);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ },
/* 177 */
/***/ function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(22);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(22);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(22);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ },
/* 181 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(34),
    cloneDataView = __webpack_require__(155),
    cloneMap = __webpack_require__(156),
    cloneRegExp = __webpack_require__(157),
    cloneSet = __webpack_require__(158),
    cloneSymbol = __webpack_require__(159),
    cloneTypedArray = __webpack_require__(160);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(124),
    getPrototype = __webpack_require__(35),
    isPrototype = __webpack_require__(39);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    isArguments = __webpack_require__(42),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ },
/* 185 */
/***/ function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(164);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ },
/* 187 */
/***/ function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(108),
    ListCache = __webpack_require__(18),
    Map = __webpack_require__(25);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(224);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(73);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ },
/* 199 */
/***/ function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(65);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)(module)))

/***/ },
/* 201 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(12),
    baseSlice = __webpack_require__(58);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ },
/* 203 */
/***/ function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ },
/* 204 */
/***/ function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ },
/* 205 */
/***/ function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(18);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ },
/* 207 */
/***/ function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ },
/* 208 */
/***/ function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ },
/* 209 */
/***/ function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(18),
    Map = __webpack_require__(25),
    MapCache = __webpack_require__(26);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ },
/* 211 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(120),
    hasUnicode = __webpack_require__(175),
    unicodeToArray = __webpack_require__(214);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(197);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ },
/* 214 */
/***/ function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ },
/* 215 */
/***/ function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ },
/* 216 */
/***/ function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(167),
    findIndex = __webpack_require__(218);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(54),
    baseIteratee = __webpack_require__(7),
    toInteger = __webpack_require__(231);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

var baseFindKey = __webpack_require__(126),
    baseForOwn = __webpack_require__(32),
    baseIteratee = __webpack_require__(7);

/**
 * This method is like `_.find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * var users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * _.findKey(users, function(o) { return o.age < 40; });
 * // => 'barney' (iteration order is not guaranteed)
 *
 * // The `_.matches` iteratee shorthand.
 * _.findKey(users, { 'age': 1, 'active': true });
 * // => 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findKey(users, ['active', false]);
 * // => 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.findKey(users, 'active');
 * // => 'barney'
 */
function findKey(object, predicate) {
  return baseFindKey(object, baseIteratee(predicate, 3), baseForOwn);
}

module.exports = findKey;


/***/ },
/* 220 */
/***/ function(module, exports) {

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(10),
    isObjectLike = __webpack_require__(4);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ },
/* 222 */
/***/ function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(31),
    baseForOwn = __webpack_require__(32),
    baseIteratee = __webpack_require__(7);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(26);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(19),
    baseClone = __webpack_require__(123),
    baseUnset = __webpack_require__(149),
    castPath = __webpack_require__(8),
    copyObject = __webpack_require__(13),
    customOmitClone = __webpack_require__(168),
    flatRest = __webpack_require__(64),
    getAllKeysIn = __webpack_require__(67);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(141),
    flatRest = __webpack_require__(64);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(143),
    basePropertyDeep = __webpack_require__(144),
    isKey = __webpack_require__(38),
    toKey = __webpack_require__(9);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(33);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ },
/* 229 */
/***/ function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(232);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(230);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(59),
    castSlice = __webpack_require__(152),
    charsEndIndex = __webpack_require__(153),
    stringToArray = __webpack_require__(212),
    toString = __webpack_require__(86);

/** Used to match leading and trailing whitespace. */
var reTrimEnd = /\s+$/;

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
function trimEnd(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimEnd, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

  return castSlice(strSymbols, 0, end).join('');
}

module.exports = trimEnd;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

var baseUpdate = __webpack_require__(150),
    castFunction = __webpack_require__(151);

/**
 * This method is like `_.set` except that accepts `updater` to produce the
 * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
 * is invoked with one argument: (value).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.update(object, 'a[0].b.c', function(n) { return n * n; });
 * console.log(object.a[0].b.c);
 * // => 9
 *
 * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
 * console.log(object.x[0].y.z);
 * // => 0
 */
function update(object, path, updater) {
  return object == null ? object : baseUpdate(object, path, castFunction(updater));
}

module.exports = update;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(125),
    baseRest = __webpack_require__(146),
    isArrayLikeObject = __webpack_require__(221);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ },
/* 236 */
/***/ function(module, exports) {

// transit-js 0.8.847
// http://transit-format.org
// 
// Copyright 2014 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License..
var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function(a) {
  return void 0 !== a;
};
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
};
goog.define = function(a, b) {
  var c = b;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
  goog.exportPath_(a, c);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var c = a;(c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) {
      goog.implicitNamespaces_[c] = !0;
    }
  }
  goog.exportPath_(a, b);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (!COMPILED) {
    return goog.isProvided_(a) ? a in goog.loadedModules_ ? goog.loadedModules_[a] : goog.getObjectByName(a) : null;
  }
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareTestMethods = function() {
  if (!goog.isInModuleLoader_()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  goog.moduleLoaderState_.declareTestMethods = !0;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if (goog.isDefAndNotNull(d[e])) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for (d in a) {
    c[d] = a[d];
  }
};
goog.addDependency = function(a, b, c, d) {
  if (goog.DEPENDENCIES_ENABLED) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = goog.dependencies_, g = 0;e = b[g];g++) {
      f.nameToPath[e] = a, f.pathIsModule[a] = !!d;
    }
    for (d = 0;b = c[d];d++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][b] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(a);
    if (goog.isProvided_(a)) {
      return goog.isInModuleLoader_() ? goog.module.getInternal_(a) : null;
    }
    if (goog.ENABLE_DEBUG_LOADER) {
      var b = goog.getPathFromDeps_(a);
      if (b) {
        return goog.included_[b] = !0, goog.writeScripts_(), null;
      }
    }
    a = "goog.require could not find: " + a;
    goog.logToConsole_(a);
    throw Error(a);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathIsModule:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return "undefined" != typeof a && "write" in a;
}, goog.findBasePath_ = function() {
  if (goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      for (var a = goog.global.document.getElementsByTagName("SCRIPT"), b = a.length - 1;0 <= b;--b) {
        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function(a, b) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0);
}, goog.IS_OLD_IE_ = !goog.global.atob && goog.global.document && goog.global.document.all, goog.importModule_ = function(a) {
  goog.importScript_("", 'goog.retrieveAndExecModule_("' + a + '");') && (goog.dependencies_.written[a] = !0);
}, goog.queuedModules_ = [], goog.wrapModule_ = function(a, b) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + b + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, goog.loadQueuedModules_ = function() {
  var a = goog.queuedModules_.length;
  if (0 < a) {
    var b = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var c = 0;c < a;c++) {
      goog.maybeProcessDeferredPath_(b[c]);
    }
  }
}, goog.maybeProcessDeferredDep_ = function(a) {
  goog.isDeferredModule_(a) && goog.allDepsAreAvailable_(a) && (a = goog.getPathFromDeps_(a), goog.maybeProcessDeferredPath_(goog.basePath + a));
}, goog.isDeferredModule_ = function(a) {
  return (a = goog.getPathFromDeps_(a)) && goog.dependencies_.pathIsModule[a] ? goog.basePath + a in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function(a) {
  if ((a = goog.getPathFromDeps_(a)) && a in goog.dependencies_.requires) {
    for (var b in goog.dependencies_.requires[a]) {
      if (!goog.isProvided_(b) && !goog.isDeferredModule_(b)) {
        return !1;
      }
    }
  }
  return !0;
}, goog.maybeProcessDeferredPath_ = function(a) {
  if (a in goog.dependencies_.deferred) {
    var b = goog.dependencies_.deferred[a];
    delete goog.dependencies_.deferred[a];
    goog.globalEval(b);
  }
}, goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0, declareTestMethods:!1};
    var c;
    if (goog.isFunction(a)) {
      c = a.call(goog.global, {});
    } else {
      if (goog.isString(a)) {
        c = goog.loadModuleFromSource_.call(goog.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = goog.moduleLoaderState_.moduleName;
    if (!goog.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(c);
    goog.loadedModules_[d] = c;
    if (goog.moduleLoaderState_.declareTestMethods) {
      for (var e in c) {
        if (0 === e.indexOf("test", 0) || "tearDown" == e || "setUp" == e || "setUpPage" == e || "tearDownPage" == e) {
          goog.global[e] = c[e];
        }
      }
    }
  } finally {
    goog.moduleLoaderState_ = b;
  }
}, goog.loadModuleFromSource_ = function(a) {
  eval(a);
  return {};
}, goog.writeScriptSrcNode_ = function(a) {
  goog.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, goog.appendScriptSrcNode_ = function(a) {
  var b = goog.global.document, c = b.createElement("script");
  c.type = "text/javascript";
  c.src = a;
  c.defer = !1;
  c.async = !1;
  b.head.appendChild(c);
}, goog.writeScriptTag_ = function(a, b) {
  if (goog.inHtmlDocument_()) {
    var c = goog.global.document;
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var d = goog.IS_OLD_IE_;
    void 0 === b ? d ? (d = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", c.write('<script type="text/javascript" src="' + a + '"' + d + ">\x3c/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(a) : goog.writeScriptSrcNode_(a) : c.write('<script type="text/javascript">' + b + "\x3c/script>");
    return !0;
  }
  return !1;
}, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {
  "complete" == a.readyState && goog.lastNonModuleScriptIndex_ == b && goog.loadQueuedModules_();
  return !0;
}, goog.writeScripts_ = function() {
  function a(e) {
    if (!(e in d.written)) {
      if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
        for (var f in d.requires[e]) {
          if (!goog.isProvided_(f)) {
            if (f in d.nameToPath) {
              a(d.nameToPath[f]);
            } else {
              throw Error("Undefined nameToPath for " + f);
            }
          }
        }
      }
      e in c || (c[e] = !0, b.push(e));
    }
  }
  var b = [], c = {}, d = goog.dependencies_, e;
  for (e in goog.included_) {
    d.written[e] || a(e);
  }
  for (var f = 0;f < b.length;f++) {
    e = b[f], goog.dependencies_.written[e] = !0;
  }
  var g = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for (f = 0;f < b.length;f++) {
    if (e = b[f]) {
      d.pathIsModule[e] ? goog.importModule_(goog.basePath + e) : goog.importScript_(goog.basePath + e);
    } else {
      throw goog.moduleLoaderState_ = g, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = g;
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0;b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  var b = new goog.global.XMLHttpRequest;
  b.open("get", a, !1);
  b.send();
  return b.responseText;
};
goog.retrieveAndExecModule_ = function(a) {
  if (!COMPILED) {
    var b = a;
    a = goog.normalizePath_(a);
    var c = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, d = goog.loadFileSync_(a);
    if (null != d) {
      d = goog.wrapModule_(a, d), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[b] = d, goog.queuedModules_.push(b)) : c(a, d);
    } else {
      throw Error("load of " + a + "failed");
    }
  }
};
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
goog.isNull = function(a) {
  return null === a;
};
goog.isDefAndNotNull = function(a) {
  return null != a;
};
goog.isArray = function(a) {
  return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isString = function(a) {
  return "string" == typeof a;
};
goog.isBoolean = function(a) {
  return "boolean" == typeof a;
};
goog.isNumber = function(a) {
  return "number" == typeof a;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    goog.global.execScript(a, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) {
        goog.global.eval(a);
      } else {
        var b = goog.global.document, c = b.createElement("SCRIPT");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a;
  }, d = function(a) {
    a = a.split("-");
    for (var b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]));
    }
    return b.join("-");
  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
    return a;
  };
  return b ? a + "-" + d(b) : d(a);
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
    return d in b ? b[d] : a;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(a, c, f) {
    for (var g = Array(arguments.length - 2), h = 2;h < arguments.length;h++) {
      g[h - 2] = arguments[h];
    }
    return b.prototype[c].apply(a, g);
  };
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (d.superClass_) {
    for (var e = Array(arguments.length - 1), f = 1;f < arguments.length;f++) {
      e[f - 1] = arguments[f];
    }
    return d.superClass_.constructor.apply(a, e);
  }
  e = Array(arguments.length - 2);
  for (f = 2;f < arguments.length;f++) {
    e[f - 2] = arguments[f];
  }
  for (var f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if (g.prototype[b] === d) {
      f = !0;
    } else {
      if (f) {
        return g.prototype[b].apply(a, e);
      }
    }
  }
  if (a[b] === d) {
    return a.constructor.prototype[b].apply(a, e);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor || (c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
    if (b && b.prototype && b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) {
      return a;
    }
    var c = function() {
      var b = a.apply(this, arguments) || this;
      b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
      this.constructor === c && Object.seal(b);
      return b;
    };
    return c;
  }
  return a;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0;d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.tagUnsealableClass = function(a) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.math = {};
goog.math.Long = function(a, b) {
  this.low_ = a | 0;
  this.high_ = b | 0;
};
goog.math.Long.IntCache_ = {};
goog.math.Long.fromInt = function(a) {
  if (-128 <= a && 128 > a) {
    var b = goog.math.Long.IntCache_[a];
    if (b) {
      return b;
    }
  }
  b = new goog.math.Long(a | 0, 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (goog.math.Long.IntCache_[a] = b);
  return b;
};
goog.math.Long.fromNumber = function(a) {
  return isNaN(a) || !isFinite(a) ? goog.math.Long.getZero() : a <= -goog.math.Long.TWO_PWR_63_DBL_ ? goog.math.Long.getMinValue() : a + 1 >= goog.math.Long.TWO_PWR_63_DBL_ ? goog.math.Long.getMaxValue() : 0 > a ? goog.math.Long.fromNumber(-a).negate() : new goog.math.Long(a % goog.math.Long.TWO_PWR_32_DBL_ | 0, a / goog.math.Long.TWO_PWR_32_DBL_ | 0);
};
goog.math.Long.fromBits = function(a, b) {
  return new goog.math.Long(a, b);
};
goog.math.Long.fromString = function(a, b) {
  if (0 == a.length) {
    throw Error("number format error: empty string");
  }
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  if ("-" == a.charAt(0)) {
    return goog.math.Long.fromString(a.substring(1), c).negate();
  }
  if (0 <= a.indexOf("-")) {
    throw Error('number format error: interior "-" character: ' + a);
  }
  for (var d = goog.math.Long.fromNumber(Math.pow(c, 8)), e = goog.math.Long.getZero(), f = 0;f < a.length;f += 8) {
    var g = Math.min(8, a.length - f), h = parseInt(a.substring(f, f + g), c);
    8 > g ? (g = goog.math.Long.fromNumber(Math.pow(c, g)), e = e.multiply(g).add(goog.math.Long.fromNumber(h))) : (e = e.multiply(d), e = e.add(goog.math.Long.fromNumber(h)));
  }
  return e;
};
goog.math.Long.TWO_PWR_16_DBL_ = 65536;
goog.math.Long.getTwoPwr24DBL_ = 16777216;
goog.math.Long.TWO_PWR_32_DBL_ = goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
goog.math.Long.TWO_PWR_31_DBL_ = goog.math.Long.TWO_PWR_32_DBL_ / 2;
goog.math.Long.TWO_PWR_48_DBL_ = goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
goog.math.Long.TWO_PWR_64_DBL_ = goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
goog.math.Long.TWO_PWR_63_DBL_ = goog.math.Long.TWO_PWR_64_DBL_ / 2;
goog.math.Long.getZero = function() {
  goog.math.Long.ZERO_ || (goog.math.Long.ZERO_ = goog.math.Long.fromInt(0));
  return goog.math.Long.ZERO_;
};
goog.math.Long.getOne = function() {
  goog.math.Long.ONE_ || (goog.math.Long.ONE_ = goog.math.Long.fromInt(1));
  return goog.math.Long.ONE_;
};
goog.math.Long.getNegOne = function() {
  goog.math.Long.NEG_ONE_ || (goog.math.Long.NEG_ONE_ = goog.math.Long.fromInt(-1));
  return goog.math.Long.NEG_ONE_;
};
goog.math.Long.getMaxValue = function() {
  goog.math.Long.MAX_VALUE_ || (goog.math.Long.MAX_VALUE_ = goog.math.Long.fromBits(-1, 2147483647));
  return goog.math.Long.MAX_VALUE_;
};
goog.math.Long.getMinValue = function() {
  goog.math.Long.MIN_VALUE_ || (goog.math.Long.MIN_VALUE_ = goog.math.Long.fromBits(0, -2147483648));
  return goog.math.Long.MIN_VALUE_;
};
goog.math.Long.getTwoPwr24 = function() {
  goog.math.Long.TWO_PWR_24_ || (goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(16777216));
  return goog.math.Long.TWO_PWR_24_;
};
goog.math.Long.prototype.toInt = function() {
  return this.low_;
};
goog.math.Long.prototype.toNumber = function() {
  return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
};
goog.math.Long.prototype.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (this.isZero()) {
    return "0";
  }
  if (this.isNegative()) {
    if (this.equals(goog.math.Long.getMinValue())) {
      var b = goog.math.Long.fromNumber(a), c = this.div(b), b = c.multiply(b).subtract(this);
      return c.toString(a) + b.toInt().toString(a);
    }
    return "-" + this.negate().toString(a);
  }
  for (var c = goog.math.Long.fromNumber(Math.pow(a, 6)), b = this, d = "";;) {
    var e = b.div(c), f = b.subtract(e.multiply(c)).toInt().toString(a), b = e;
    if (b.isZero()) {
      return f + d;
    }
    for (;6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
goog.math.Long.prototype.getHighBits = function() {
  return this.high_;
};
goog.math.Long.prototype.getLowBits = function() {
  return this.low_;
};
goog.math.Long.prototype.getLowBitsUnsigned = function() {
  return 0 <= this.low_ ? this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
};
goog.math.Long.prototype.getNumBitsAbs = function() {
  if (this.isNegative()) {
    return this.equals(goog.math.Long.getMinValue()) ? 64 : this.negate().getNumBitsAbs();
  }
  for (var a = 0 != this.high_ ? this.high_ : this.low_, b = 31;0 < b && 0 == (a & 1 << b);b--) {
  }
  return 0 != this.high_ ? b + 33 : b + 1;
};
goog.math.Long.prototype.isZero = function() {
  return 0 == this.high_ && 0 == this.low_;
};
goog.math.Long.prototype.isNegative = function() {
  return 0 > this.high_;
};
goog.math.Long.prototype.isOdd = function() {
  return 1 == (this.low_ & 1);
};
goog.math.Long.prototype.equals = function(a) {
  return this.high_ == a.high_ && this.low_ == a.low_;
};
goog.math.Long.prototype.notEquals = function(a) {
  return this.high_ != a.high_ || this.low_ != a.low_;
};
goog.math.Long.prototype.lessThan = function(a) {
  return 0 > this.compare(a);
};
goog.math.Long.prototype.lessThanOrEqual = function(a) {
  return 0 >= this.compare(a);
};
goog.math.Long.prototype.greaterThan = function(a) {
  return 0 < this.compare(a);
};
goog.math.Long.prototype.greaterThanOrEqual = function(a) {
  return 0 <= this.compare(a);
};
goog.math.Long.prototype.compare = function(a) {
  if (this.equals(a)) {
    return 0;
  }
  var b = this.isNegative(), c = a.isNegative();
  return b && !c ? -1 : !b && c ? 1 : this.subtract(a).isNegative() ? -1 : 1;
};
goog.math.Long.prototype.negate = function() {
  return this.equals(goog.math.Long.getMinValue()) ? goog.math.Long.getMinValue() : this.not().add(goog.math.Long.getOne());
};
goog.math.Long.prototype.add = function(a) {
  var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = a.high_ >>> 16, f = a.high_ & 65535, g = a.low_ >>> 16, h;
  h = 0 + ((this.low_ & 65535) + (a.low_ & 65535));
  a = 0 + (h >>> 16);
  a += d + g;
  d = 0 + (a >>> 16);
  d += c + f;
  c = 0 + (d >>> 16);
  c = c + (b + e) & 65535;
  return goog.math.Long.fromBits((a & 65535) << 16 | h & 65535, c << 16 | d & 65535);
};
goog.math.Long.prototype.subtract = function(a) {
  return this.add(a.negate());
};
goog.math.Long.prototype.multiply = function(a) {
  if (this.isZero() || a.isZero()) {
    return goog.math.Long.getZero();
  }
  if (this.equals(goog.math.Long.getMinValue())) {
    return a.isOdd() ? goog.math.Long.getMinValue() : goog.math.Long.getZero();
  }
  if (a.equals(goog.math.Long.getMinValue())) {
    return this.isOdd() ? goog.math.Long.getMinValue() : goog.math.Long.getZero();
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
  }
  if (a.isNegative()) {
    return this.multiply(a.negate()).negate();
  }
  if (this.lessThan(goog.math.Long.getTwoPwr24()) && a.lessThan(goog.math.Long.getTwoPwr24())) {
    return goog.math.Long.fromNumber(this.toNumber() * a.toNumber());
  }
  var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = this.low_ & 65535, f = a.high_ >>> 16, g = a.high_ & 65535, h = a.low_ >>> 16;
  a = a.low_ & 65535;
  var m, k, l, n;
  n = 0 + e * a;
  l = 0 + (n >>> 16);
  l += d * a;
  k = 0 + (l >>> 16);
  l = (l & 65535) + e * h;
  k += l >>> 16;
  l &= 65535;
  k += c * a;
  m = 0 + (k >>> 16);
  k = (k & 65535) + d * h;
  m += k >>> 16;
  k &= 65535;
  k += e * g;
  m += k >>> 16;
  k &= 65535;
  m = m + (b * a + c * h + d * g + e * f) & 65535;
  return goog.math.Long.fromBits(l << 16 | n & 65535, m << 16 | k);
};
goog.math.Long.prototype.div = function(a) {
  if (a.isZero()) {
    throw Error("division by zero");
  }
  if (this.isZero()) {
    return goog.math.Long.getZero();
  }
  if (this.equals(goog.math.Long.getMinValue())) {
    if (a.equals(goog.math.Long.getOne()) || a.equals(goog.math.Long.getNegOne())) {
      return goog.math.Long.getMinValue();
    }
    if (a.equals(goog.math.Long.getMinValue())) {
      return goog.math.Long.getOne();
    }
    var b = this.shiftRight(1).div(a).shiftLeft(1);
    if (b.equals(goog.math.Long.getZero())) {
      return a.isNegative() ? goog.math.Long.getOne() : goog.math.Long.getNegOne();
    }
    var c = this.subtract(a.multiply(b));
    return b.add(c.div(a));
  }
  if (a.equals(goog.math.Long.getMinValue())) {
    return goog.math.Long.getZero();
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
  }
  if (a.isNegative()) {
    return this.div(a.negate()).negate();
  }
  for (var d = goog.math.Long.getZero(), c = this;c.greaterThanOrEqual(a);) {
    for (var b = Math.max(1, Math.floor(c.toNumber() / a.toNumber())), e = Math.ceil(Math.log(b) / Math.LN2), e = 48 >= e ? 1 : Math.pow(2, e - 48), f = goog.math.Long.fromNumber(b), g = f.multiply(a);g.isNegative() || g.greaterThan(c);) {
      b -= e, f = goog.math.Long.fromNumber(b), g = f.multiply(a);
    }
    f.isZero() && (f = goog.math.Long.getOne());
    d = d.add(f);
    c = c.subtract(g);
  }
  return d;
};
goog.math.Long.prototype.modulo = function(a) {
  return this.subtract(this.div(a).multiply(a));
};
goog.math.Long.prototype.not = function() {
  return goog.math.Long.fromBits(~this.low_, ~this.high_);
};
goog.math.Long.prototype.and = function(a) {
  return goog.math.Long.fromBits(this.low_ & a.low_, this.high_ & a.high_);
};
goog.math.Long.prototype.or = function(a) {
  return goog.math.Long.fromBits(this.low_ | a.low_, this.high_ | a.high_);
};
goog.math.Long.prototype.xor = function(a) {
  return goog.math.Long.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_);
};
goog.math.Long.prototype.shiftLeft = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.low_;
  return 32 > a ? goog.math.Long.fromBits(b << a, this.high_ << a | b >>> 32 - a) : goog.math.Long.fromBits(0, b << a - 32);
};
goog.math.Long.prototype.shiftRight = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.high_;
  return 32 > a ? goog.math.Long.fromBits(this.low_ >>> a | b << 32 - a, b >> a) : goog.math.Long.fromBits(b >> a - 32, 0 <= b ? 0 : -1);
};
goog.math.Long.prototype.shiftRightUnsigned = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.high_;
  return 32 > a ? goog.math.Long.fromBits(this.low_ >>> a | b << 32 - a, b >>> a) : 32 == a ? goog.math.Long.fromBits(b, 0) : goog.math.Long.fromBits(b >>> a - 32, 0);
};
goog.object = {};
goog.object.forEach = function(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e]);
  }
  return d;
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    d[e] = b.call(c, a[e], e, a);
  }
  return d;
};
goog.object.some = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return !0;
    }
  }
  return !1;
};
goog.object.every = function(a, b, c) {
  for (var d in a) {
    if (!b.call(c, a[d], d, a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for (c in a) {
    b++;
  }
  return b;
};
goog.object.getAnyKey = function(a) {
  for (var b in a) {
    return b;
  }
};
goog.object.getAnyValue = function(a) {
  for (var b in a) {
    return a[b];
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b);
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
goog.object.getValueByKeys = function(a, b) {
  for (var c = goog.isArrayLike(b), d = c ? b : arguments, c = c ? 0 : 1;c < d.length && (a = a[d[c]], goog.isDef(a));c++) {
  }
  return a;
};
goog.object.containsKey = function(a, b) {
  return b in a;
};
goog.object.containsValue = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return !0;
    }
  }
  return !1;
};
goog.object.findKey = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return d;
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return (b = goog.object.findKey(a, b, c)) && a[b];
};
goog.object.isEmpty = function(a) {
  for (var b in a) {
    return !1;
  }
  return !0;
};
goog.object.clear = function(a) {
  for (var b in a) {
    delete a[b];
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c;
};
goog.object.add = function(a, b, c) {
  if (b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c);
};
goog.object.get = function(a, b, c) {
  return b in a ? a[b] : c;
};
goog.object.set = function(a, b, c) {
  a[b] = c;
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c;
};
goog.object.setWithReturnValueIfNotSet = function(a, b, c) {
  if (b in a) {
    return a[b];
  }
  c = c();
  return a[b] = c;
};
goog.object.equals = function(a, b) {
  for (var c in a) {
    if (!(c in b) || a[c] !== b[c]) {
      return !1;
    }
  }
  for (c in b) {
    if (!(c in a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.clone = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.object.unsafeClone(a[c]);
    }
    return b;
  }
  return a;
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < goog.object.PROTOTYPE_FIELDS_.length;f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
goog.object.createImmutableView = function(a) {
  var b = a;
  Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
  return b;
};
goog.object.isImmutableView = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
var com = {cognitect:{}};
com.cognitect.transit = {};
com.cognitect.transit.delimiters = {};
com.cognitect.transit.delimiters.ESC = "~";
com.cognitect.transit.delimiters.TAG = "#";
com.cognitect.transit.delimiters.SUB = "^";
com.cognitect.transit.delimiters.RES = "`";
com.cognitect.transit.delimiters.ESC_TAG = "~#";
com.cognitect.transit.caching = {};
com.cognitect.transit.caching.MIN_SIZE_CACHEABLE = 3;
com.cognitect.transit.caching.BASE_CHAR_IDX = 48;
com.cognitect.transit.caching.CACHE_CODE_DIGITS = 44;
com.cognitect.transit.caching.MAX_CACHE_ENTRIES = com.cognitect.transit.caching.CACHE_CODE_DIGITS * com.cognitect.transit.caching.CACHE_CODE_DIGITS;
com.cognitect.transit.caching.MAX_CACHE_SIZE = 4096;
com.cognitect.transit.caching.isCacheable = function(a, b) {
  if (a.length > com.cognitect.transit.caching.MIN_SIZE_CACHEABLE) {
    if (b) {
      return !0;
    }
    var c = a.charAt(0), d = a.charAt(1);
    return c === com.cognitect.transit.delimiters.ESC ? ":" === d || "$" === d || "#" === d : !1;
  }
  return !1;
};
com.cognitect.transit.caching.idxToCode = function(a) {
  var b = Math.floor(a / com.cognitect.transit.caching.CACHE_CODE_DIGITS);
  a = String.fromCharCode(a % com.cognitect.transit.caching.CACHE_CODE_DIGITS + com.cognitect.transit.caching.BASE_CHAR_IDX);
  return 0 === b ? com.cognitect.transit.delimiters.SUB + a : com.cognitect.transit.delimiters.SUB + String.fromCharCode(b + com.cognitect.transit.caching.BASE_CHAR_IDX) + a;
};
com.cognitect.transit.caching.WriteCache = function() {
  this.cacheSize = this.gen = this.idx = 0;
  this.cache = {};
};
com.cognitect.transit.caching.WriteCache.prototype.write = function(a, b) {
  if (com.cognitect.transit.caching.isCacheable(a, b)) {
    this.cacheSize === com.cognitect.transit.caching.MAX_CACHE_SIZE ? (this.clear(), this.gen = 0, this.cache = {}) : this.idx === com.cognitect.transit.caching.MAX_CACHE_ENTRIES && this.clear();
    var c = this.cache[a];
    return null == c ? (this.cache[a] = [com.cognitect.transit.caching.idxToCode(this.idx), this.gen], this.idx++, a) : c[1] != this.gen ? (c[1] = this.gen, c[0] = com.cognitect.transit.caching.idxToCode(this.idx), this.idx++, a) : c[0];
  }
  return a;
};
com.cognitect.transit.caching.WriteCache.prototype.clear = function() {
  this.idx = 0;
  this.gen++;
};
com.cognitect.transit.caching.writeCache = function() {
  return new com.cognitect.transit.caching.WriteCache;
};
com.cognitect.transit.caching.isCacheCode = function(a) {
  return a.charAt(0) === com.cognitect.transit.delimiters.SUB && " " !== a.charAt(1);
};
com.cognitect.transit.caching.codeToIdx = function(a) {
  if (2 === a.length) {
    return a.charCodeAt(1) - com.cognitect.transit.caching.BASE_CHAR_IDX;
  }
  var b = (a.charCodeAt(1) - com.cognitect.transit.caching.BASE_CHAR_IDX) * com.cognitect.transit.caching.CACHE_CODE_DIGITS;
  a = a.charCodeAt(2) - com.cognitect.transit.caching.BASE_CHAR_IDX;
  return b + a;
};
com.cognitect.transit.caching.ReadCache = function() {
  this.idx = 0;
  this.cache = [];
};
com.cognitect.transit.caching.ReadCache.prototype.write = function(a, b) {
  this.idx == com.cognitect.transit.caching.MAX_CACHE_ENTRIES && (this.idx = 0);
  this.cache[this.idx] = a;
  this.idx++;
  return a;
};
com.cognitect.transit.caching.ReadCache.prototype.read = function(a, b) {
  return this.cache[com.cognitect.transit.caching.codeToIdx(a)];
};
com.cognitect.transit.caching.ReadCache.prototype.clear = function() {
  this.idx = 0;
};
com.cognitect.transit.caching.readCache = function() {
  return new com.cognitect.transit.caching.ReadCache;
};
com.cognitect.transit.util = {};
com.cognitect.transit.util.objectKeys = "undefined" != typeof Object.keys ? function(a) {
  return Object.keys(a);
} : function(a) {
  return goog.object.getKeys(a);
};
com.cognitect.transit.util.isArray = "undefined" != typeof Array.isArray ? function(a) {
  return Array.isArray(a);
} : function(a) {
  return "array" === goog.typeOf(a);
};
com.cognitect.transit.util.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
com.cognitect.transit.util.randInt = function(a) {
  return Math.round(Math.random() * a);
};
com.cognitect.transit.util.randHex = function() {
  return com.cognitect.transit.util.randInt(15).toString(16);
};
com.cognitect.transit.util.randomUUID = function() {
  var a = (8 | 3 & com.cognitect.transit.util.randInt(14)).toString(16);
  return com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-" + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-4" + com.cognitect.transit.util.randHex() + 
  com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-" + a + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-" + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + 
  com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex();
};
com.cognitect.transit.util.btoa = function(a) {
  if ("undefined" != typeof btoa) {
    return btoa(a);
  }
  a = String(a);
  for (var b, c, d = 0, e = com.cognitect.transit.util.chars, f = "";a.charAt(d | 0) || (e = "=", d % 1);f += e.charAt(63 & b >> 8 - d % 1 * 8)) {
    c = a.charCodeAt(d += .75);
    if (255 < c) {
      throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }
    b = b << 8 | c;
  }
  return f;
};
com.cognitect.transit.util.atob = function(a) {
  if ("undefined" != typeof atob) {
    return atob(a);
  }
  a = String(a).replace(/=+$/, "");
  if (1 == a.length % 4) {
    throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (var b = 0, c, d, e = 0, f = "";d = a.charAt(e++);~d && (c = b % 4 ? 64 * c + d : d, b++ % 4) ? f += String.fromCharCode(255 & c >> (-2 * b & 6)) : 0) {
    d = com.cognitect.transit.util.chars.indexOf(d);
  }
  return f;
};
com.cognitect.transit.util.Uint8ToBase64 = function(a) {
  for (var b = 0, c = a.length, d = "", e = null;b < c;) {
    e = a.subarray(b, Math.min(b + 32768, c)), d += String.fromCharCode.apply(null, e), b += 32768;
  }
  return com.cognitect.transit.util.btoa(d);
};
com.cognitect.transit.util.Base64ToUint8 = function(a) {
  a = com.cognitect.transit.util.atob(a);
  for (var b = a.length, c = new Uint8Array(b), d = 0;d < b;d++) {
    var e = a.charCodeAt(d);
    c[d] = e;
  }
  return c;
};
com.cognitect.transit.eq = {};
com.cognitect.transit.eq.hashCodeProperty = "transit$hashCode$";
com.cognitect.transit.eq.hashCodeCounter = 1;
com.cognitect.transit.eq.equals = function(a, b) {
  if (null == a) {
    return null == b;
  }
  if (a === b) {
    return !0;
  }
  if ("object" === typeof a) {
    if (com.cognitect.transit.util.isArray(a)) {
      if (com.cognitect.transit.util.isArray(b) && a.length === b.length) {
        for (var c = 0;c < a.length;c++) {
          if (!com.cognitect.transit.eq.equals(a[c], b[c])) {
            return !1;
          }
        }
        return !0;
      }
      return !1;
    }
    if (a.com$cognitect$transit$equals) {
      return a.com$cognitect$transit$equals(b);
    }
    if (null != b && "object" === typeof b) {
      if (b.com$cognitect$transit$equals) {
        return b.com$cognitect$transit$equals(a);
      }
      var c = 0, d = com.cognitect.transit.util.objectKeys(b).length, e;
      for (e in a) {
        if (a.hasOwnProperty(e) && (c++, !b.hasOwnProperty(e) || !com.cognitect.transit.eq.equals(a[e], b[e]))) {
          return !1;
        }
      }
      return c === d;
    }
  }
  return !1;
};
com.cognitect.transit.eq.hashCombine = function(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
};
com.cognitect.transit.eq.stringCodeCache = {};
com.cognitect.transit.eq.stringCodeCacheSize = 0;
com.cognitect.transit.eq.STR_CACHE_MAX = 256;
com.cognitect.transit.eq.hashString = function(a) {
  var b = com.cognitect.transit.eq.stringCodeCache[a];
  if (null != b) {
    return b;
  }
  for (var c = b = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  com.cognitect.transit.eq.stringCodeCacheSize++;
  com.cognitect.transit.eq.stringCodeCacheSize >= com.cognitect.transit.eq.STR_CACHE_MAX && (com.cognitect.transit.eq.stringCodeCache = {}, com.cognitect.transit.eq.stringCodeCacheSize = 1);
  return com.cognitect.transit.eq.stringCodeCache[a] = b;
};
com.cognitect.transit.eq.hashMapLike = function(a) {
  var b = 0;
  if (null != a.forEach) {
    a.forEach(function(a, c, d) {
      b = (b + (com.cognitect.transit.eq.hashCode(c) ^ com.cognitect.transit.eq.hashCode(a))) % 4503599627370496;
    });
  } else {
    for (var c = com.cognitect.transit.util.objectKeys(a), d = 0;d < c.length;d++) {
      var e = c[d], f = a[e], b = (b + (com.cognitect.transit.eq.hashCode(e) ^ com.cognitect.transit.eq.hashCode(f))) % 4503599627370496
    }
  }
  return b;
};
com.cognitect.transit.eq.hashArrayLike = function(a) {
  var b = 0;
  if (com.cognitect.transit.util.isArray(a)) {
    for (var c = 0;c < a.length;c++) {
      b = com.cognitect.transit.eq.hashCombine(b, com.cognitect.transit.eq.hashCode(a[c]));
    }
  } else {
    a.forEach && a.forEach(function(a, c) {
      b = com.cognitect.transit.eq.hashCombine(b, com.cognitect.transit.eq.hashCode(a));
    });
  }
  return b;
};
com.cognitect.transit.eq.hashCode = function(a) {
  if (null == a) {
    return 0;
  }
  switch(typeof a) {
    case "number":
      return a;
    case "boolean":
      return !0 === a ? 1 : 0;
    case "string":
      return com.cognitect.transit.eq.hashString(a);
    case "function":
      var b = a[com.cognitect.transit.eq.hashCodeProperty];
      b || (b = com.cognitect.transit.eq.hashCodeCounter, "undefined" != typeof Object.defineProperty ? Object.defineProperty(a, com.cognitect.transit.eq.hashCodeProperty, {value:b, enumerable:!1}) : a[com.cognitect.transit.eq.hashCodeProperty] = b, com.cognitect.transit.eq.hashCodeCounter++);
      return b;
    default:
      return a instanceof Date ? a.valueOf() : com.cognitect.transit.util.isArray(a) ? com.cognitect.transit.eq.hashArrayLike(a) : a.com$cognitect$transit$hashCode ? a.com$cognitect$transit$hashCode() : com.cognitect.transit.eq.hashMapLike(a);
  }
};
com.cognitect.transit.eq.extendToEQ = function(a, b) {
  a.com$cognitect$transit$hashCode = b.hashCode;
  a.com$cognitect$transit$equals = b.equals;
  return a;
};
com.cognitect.transit.types = {};
com.cognitect.transit.types.ITERATOR = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
com.cognitect.transit.types.TaggedValue = function(a, b) {
  this.tag = a;
  this.rep = b;
  this.hashCode = -1;
};
com.cognitect.transit.types.TaggedValue.prototype.toString = function() {
  return "[TaggedValue: " + this.tag + ", " + this.rep + "]";
};
com.cognitect.transit.types.TaggedValue.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.TaggedValue.prototype.equiv = com.cognitect.transit.types.TaggedValue.prototype.equiv;
com.cognitect.transit.types.TaggedValue.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue ? this.tag === a.tag && com.cognitect.transit.eq.equals(this.rep, a.rep) : !1;
};
com.cognitect.transit.types.TaggedValue.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCombine(com.cognitect.transit.eq.hashCode(this.tag), com.cognitect.transit.eq.hashCode(this.rep)));
  return this.hashCode;
};
com.cognitect.transit.types.taggedValue = function(a, b) {
  return new com.cognitect.transit.types.TaggedValue(a, b);
};
com.cognitect.transit.types.isTaggedValue = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue;
};
com.cognitect.transit.types.nullValue = function() {
  return null;
};
com.cognitect.transit.types.boolValue = function(a) {
  return "t" === a;
};
com.cognitect.transit.types.MAX_INT = goog.math.Long.fromString("9007199254740991");
com.cognitect.transit.types.MIN_INT = goog.math.Long.fromString("-9007199254740991");
com.cognitect.transit.types.intValue = function(a) {
  if ("number" === typeof a || a instanceof goog.math.Long) {
    return a;
  }
  a = goog.math.Long.fromString(a, 10);
  return a.greaterThan(com.cognitect.transit.types.MAX_INT) || a.lessThan(com.cognitect.transit.types.MIN_INT) ? a : a.toNumber();
};
goog.math.Long.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
goog.math.Long.prototype.equiv = goog.math.Long.prototype.equiv;
goog.math.Long.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof goog.math.Long && this.equals(a);
};
goog.math.Long.prototype.com$cognitect$transit$hashCode = function() {
  return this.toInt();
};
com.cognitect.transit.types.isInteger = function(a) {
  return a instanceof goog.math.Long ? !0 : "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10);
};
com.cognitect.transit.types.floatValue = function(a) {
  return parseFloat(a);
};
com.cognitect.transit.types.bigInteger = function(a) {
  return com.cognitect.transit.types.taggedValue("n", a);
};
com.cognitect.transit.types.isBigInteger = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "n" === a.tag;
};
com.cognitect.transit.types.bigDecimalValue = function(a) {
  return com.cognitect.transit.types.taggedValue("f", a);
};
com.cognitect.transit.types.isBigDecimal = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "f" === a.tag;
};
com.cognitect.transit.types.charValue = function(a) {
  return a;
};
com.cognitect.transit.types.Keyword = function(a) {
  this._name = a;
  this.hashCode = -1;
};
com.cognitect.transit.types.Keyword.prototype.toString = function() {
  return ":" + this._name;
};
com.cognitect.transit.types.Keyword.prototype.namespace = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(0, a) : null;
};
com.cognitect.transit.types.Keyword.prototype.name = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(a + 1, this._name.length) : this._name;
};
com.cognitect.transit.types.Keyword.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.Keyword.prototype.equiv = com.cognitect.transit.types.Keyword.prototype.equiv;
com.cognitect.transit.types.Keyword.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.Keyword && this._name == a._name;
};
com.cognitect.transit.types.Keyword.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCode(this._name));
  return this.hashCode;
};
com.cognitect.transit.types.keyword = function(a) {
  return new com.cognitect.transit.types.Keyword(a);
};
com.cognitect.transit.types.isKeyword = function(a) {
  return a instanceof com.cognitect.transit.types.Keyword;
};
com.cognitect.transit.types.Symbol = function(a) {
  this._name = a;
  this.hashCode = -1;
};
com.cognitect.transit.types.Symbol.prototype.namespace = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(0, a) : null;
};
com.cognitect.transit.types.Symbol.prototype.name = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(a + 1, this._name.length) : this._name;
};
com.cognitect.transit.types.Symbol.prototype.toString = function() {
  return this._name;
};
com.cognitect.transit.types.Symbol.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.Symbol.prototype.equiv = com.cognitect.transit.types.Symbol.prototype.equiv;
com.cognitect.transit.types.Symbol.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.Symbol && this._name == a._name;
};
com.cognitect.transit.types.Symbol.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCode(this._name));
  return this.hashCode;
};
com.cognitect.transit.types.symbol = function(a) {
  return new com.cognitect.transit.types.Symbol(a);
};
com.cognitect.transit.types.isSymbol = function(a) {
  return a instanceof com.cognitect.transit.types.Symbol;
};
com.cognitect.transit.types.hexFor = function(a, b, c) {
  var d = "";
  c = c || b + 1;
  for (var e = 8 * (7 - b), f = goog.math.Long.fromInt(255).shiftLeft(e);b < c;b++, e -= 8, f = f.shiftRightUnsigned(8)) {
    var g = a.and(f).shiftRightUnsigned(e).toString(16);
    1 == g.length && (g = "0" + g);
    d += g;
  }
  return d;
};
com.cognitect.transit.types.UUID = function(a, b) {
  this.high = a;
  this.low = b;
  this.hashCode = -1;
};
com.cognitect.transit.types.UUID.prototype.getLeastSignificantBits = function() {
  return this.low;
};
com.cognitect.transit.types.UUID.prototype.getMostSignificantBits = function() {
  return this.high;
};
com.cognitect.transit.types.UUID.prototype.toString = function() {
  var a, b = this.high, c = this.low;
  a = "" + (com.cognitect.transit.types.hexFor(b, 0, 4) + "-");
  a += com.cognitect.transit.types.hexFor(b, 4, 6) + "-";
  a += com.cognitect.transit.types.hexFor(b, 6, 8) + "-";
  a += com.cognitect.transit.types.hexFor(c, 0, 2) + "-";
  return a += com.cognitect.transit.types.hexFor(c, 2, 8);
};
com.cognitect.transit.types.UUID.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.UUID.prototype.equiv = com.cognitect.transit.types.UUID.prototype.equiv;
com.cognitect.transit.types.UUID.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.UUID && this.high.equals(a.high) && this.low.equals(a.low);
};
com.cognitect.transit.types.UUID.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCode(this.toString()));
  return this.hashCode;
};
com.cognitect.transit.types.UUIDfromString = function(a) {
  a = a.replace(/-/g, "");
  for (var b = null, c = null, d = c = 0, e = 24, f = 0, f = c = 0, e = 24;8 > f;f += 2, e -= 8) {
    c |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  d = 0;
  f = 8;
  for (e = 24;16 > f;f += 2, e -= 8) {
    d |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  b = goog.math.Long.fromBits(d, c);
  c = 0;
  f = 16;
  for (e = 24;24 > f;f += 2, e -= 8) {
    c |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  d = 0;
  for (e = f = 24;32 > f;f += 2, e -= 8) {
    d |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  c = goog.math.Long.fromBits(d, c);
  return new com.cognitect.transit.types.UUID(b, c);
};
com.cognitect.transit.types.uuid = function(a) {
  return com.cognitect.transit.types.UUIDfromString(a);
};
com.cognitect.transit.types.isUUID = function(a) {
  return a instanceof com.cognitect.transit.types.UUID;
};
com.cognitect.transit.types.date = function(a) {
  a = "number" === typeof a ? a : parseInt(a, 10);
  return new Date(a);
};
com.cognitect.transit.types.verboseDate = function(a) {
  return new Date(a);
};
Date.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof Date ? this.valueOf() === a.valueOf() : !1;
};
Date.prototype.com$cognitect$transit$hashCode = function() {
  return this.valueOf();
};
com.cognitect.transit.types.binary = function(a, b) {
  return b && !1 === b.preferBuffers || "undefined" == typeof Buffer ? "undefined" != typeof Uint8Array ? com.cognitect.transit.util.Base64ToUint8(a) : com.cognitect.transit.types.taggedValue("b", a) : new Buffer(a, "base64");
};
com.cognitect.transit.types.isBinary = function(a) {
  return "undefined" != typeof Buffer && a instanceof Buffer ? !0 : "undefined" != typeof Uint8Array && a instanceof Uint8Array ? !0 : a instanceof com.cognitect.transit.types.TaggedValue && "b" === a.tag;
};
com.cognitect.transit.types.uri = function(a) {
  return com.cognitect.transit.types.taggedValue("r", a);
};
com.cognitect.transit.types.isURI = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "r" === a.tag;
};
com.cognitect.transit.types.KEYS = 0;
com.cognitect.transit.types.VALUES = 1;
com.cognitect.transit.types.ENTRIES = 2;
com.cognitect.transit.types.TransitArrayMapIterator = function(a, b) {
  this.entries = a;
  this.type = b || com.cognitect.transit.types.KEYS;
  this.idx = 0;
};
com.cognitect.transit.types.TransitArrayMapIterator.prototype.next = function() {
  if (this.idx < this.entries.length) {
    var a = null, a = this.type === com.cognitect.transit.types.KEYS ? this.entries[this.idx] : this.type === com.cognitect.transit.types.VALUES ? this.entries[this.idx + 1] : [this.entries[this.idx], this.entries[this.idx + 1]], a = {value:a, done:!1};
    this.idx += 2;
    return a;
  }
  return {value:null, done:!0};
};
com.cognitect.transit.types.TransitArrayMapIterator.prototype.next = com.cognitect.transit.types.TransitArrayMapIterator.prototype.next;
com.cognitect.transit.types.TransitArrayMapIterator.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this;
};
com.cognitect.transit.types.TransitMapIterator = function(a, b) {
  this.map = a;
  this.type = b || com.cognitect.transit.types.KEYS;
  this.keys = this.map.getKeys();
  this.idx = 0;
  this.bucket = null;
  this.bucketIdx = 0;
};
com.cognitect.transit.types.TransitMapIterator.prototype.next = function() {
  if (this.idx < this.map.size) {
    null != this.bucket && this.bucketIdx < this.bucket.length || (this.bucket = this.map.map[this.keys[this.idx]], this.bucketIdx = 0);
    var a = null, a = this.type === com.cognitect.transit.types.KEYS ? this.bucket[this.bucketIdx] : this.type === com.cognitect.transit.types.VALUES ? this.bucket[this.bucketIdx + 1] : [this.bucket[this.bucketIdx], this.bucket[this.bucketIdx + 1]], a = {value:a, done:!1};
    this.idx++;
    this.bucketIdx += 2;
    return a;
  }
  return {value:null, done:!0};
};
com.cognitect.transit.types.TransitMapIterator.prototype.next = com.cognitect.transit.types.TransitMapIterator.prototype.next;
com.cognitect.transit.types.TransitMapIterator.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this;
};
com.cognitect.transit.types.mapEquals = function(a, b) {
  if (a instanceof com.cognitect.transit.types.TransitMap && com.cognitect.transit.types.isMap(b)) {
    if (a.size !== b.size) {
      return !1;
    }
    for (var c in a.map) {
      for (var d = a.map[c], e = 0;e < d.length;e += 2) {
        if (!com.cognitect.transit.eq.equals(d[e + 1], b.get(d[e]))) {
          return !1;
        }
      }
    }
    return !0;
  }
  if (a instanceof com.cognitect.transit.types.TransitArrayMap && com.cognitect.transit.types.isMap(b)) {
    if (a.size !== b.size) {
      return !1;
    }
    c = a._entries;
    for (e = 0;e < c.length;e += 2) {
      if (!com.cognitect.transit.eq.equals(c[e + 1], b.get(c[e]))) {
        return !1;
      }
    }
    return !0;
  }
  if (null != b && "object" === typeof b && (e = com.cognitect.transit.util.objectKeys(b), c = e.length, a.size === c)) {
    for (d = 0;d < c;d++) {
      var f = e[d];
      if (!a.has(f) || !com.cognitect.transit.eq.equals(b[f], a.get(f))) {
        return !1;
      }
    }
    return !0;
  }
  return !1;
};
com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD = 8;
com.cognitect.transit.types.ARRAY_MAP_THRESHOLD = 32;
com.cognitect.transit.types.ARRAY_MAP_ACCESS_THRESHOLD = 32;
com.cognitect.transit.types.print = function(a) {
  return null == a ? "null" : goog.isArray(a) ? "[" + a.toString() + "]" : goog.isString(a) ? '"' + a + '"' : a.toString();
};
com.cognitect.transit.types.printMap = function(a) {
  var b = 0, c = "TransitMap {";
  a.forEach(function(d, e) {
    c += com.cognitect.transit.types.print(e) + " => " + com.cognitect.transit.types.print(d);
    b < a.size - 1 && (c += ", ");
    b++;
  });
  return c + "}";
};
com.cognitect.transit.types.printSet = function(a) {
  var b = 0, c = "TransitSet {";
  a.forEach(function(d) {
    c += com.cognitect.transit.types.print(d);
    b < a.size - 1 && (c += ", ");
    b++;
  });
  return c + "}";
};
com.cognitect.transit.types.TransitArrayMap = function(a) {
  this._entries = a;
  this.backingMap = null;
  this.hashCode = -1;
  this.size = a.length / 2;
  this.accesses = 0;
};
com.cognitect.transit.types.TransitArrayMap.prototype.toString = function() {
  return com.cognitect.transit.types.printMap(this);
};
com.cognitect.transit.types.TransitArrayMap.prototype.inspect = function() {
  return this.toString();
};
com.cognitect.transit.types.TransitArrayMap.prototype.convert = function() {
  if (this.backingMap) {
    throw Error("Invalid operation, already converted");
  }
  if (this.size < com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD) {
    return !1;
  }
  this.accesses++;
  return this.accesses > com.cognitect.transit.types.ARRAY_MAP_ACCESS_THRESHOLD ? (this.backingMap = com.cognitect.transit.types.map(this._entries, !1, !0), this._entries = [], !0) : !1;
};
com.cognitect.transit.types.TransitArrayMap.prototype.clear = function() {
  this.hashCode = -1;
  this.backingMap ? this.backingMap.clear() : this._entries = [];
  this.size = 0;
};
com.cognitect.transit.types.TransitArrayMap.prototype.clear = com.cognitect.transit.types.TransitArrayMap.prototype.clear;
com.cognitect.transit.types.TransitArrayMap.prototype.keys = function() {
  return this.backingMap ? this.backingMap.keys() : new com.cognitect.transit.types.TransitArrayMapIterator(this._entries, com.cognitect.transit.types.KEYS);
};
com.cognitect.transit.types.TransitArrayMap.prototype.keys = com.cognitect.transit.types.TransitArrayMap.prototype.keys;
com.cognitect.transit.types.TransitArrayMap.prototype.keySet = function() {
  if (this.backingMap) {
    return this.backingMap.keySet();
  }
  for (var a = [], b = 0, c = 0;c < this._entries.length;b++, c += 2) {
    a[b] = this._entries[c];
  }
  return a;
};
com.cognitect.transit.types.TransitArrayMap.prototype.keySet = com.cognitect.transit.types.TransitArrayMap.prototype.keySet;
com.cognitect.transit.types.TransitArrayMap.prototype.entries = function() {
  return this.backingMap ? this.backingMap.entries() : new com.cognitect.transit.types.TransitArrayMapIterator(this._entries, com.cognitect.transit.types.ENTRIES);
};
com.cognitect.transit.types.TransitArrayMap.prototype.entries = com.cognitect.transit.types.TransitArrayMap.prototype.entries;
com.cognitect.transit.types.TransitArrayMap.prototype.values = function() {
  return this.backingMap ? this.backingMap.values() : new com.cognitect.transit.types.TransitArrayMapIterator(this._entries, com.cognitect.transit.types.VALUES);
};
com.cognitect.transit.types.TransitArrayMap.prototype.values = com.cognitect.transit.types.TransitArrayMap.prototype.values;
com.cognitect.transit.types.TransitArrayMap.prototype.forEach = function(a) {
  if (this.backingMap) {
    this.backingMap.forEach(a);
  } else {
    for (var b = 0;b < this._entries.length;b += 2) {
      a(this._entries[b + 1], this._entries[b]);
    }
  }
};
com.cognitect.transit.types.TransitArrayMap.prototype.forEach = com.cognitect.transit.types.TransitArrayMap.prototype.forEach;
com.cognitect.transit.types.TransitArrayMap.prototype.get = function(a, b) {
  if (this.backingMap) {
    return this.backingMap.get(a);
  }
  if (this.convert()) {
    return this.get(a);
  }
  for (var c = 0;c < this._entries.length;c += 2) {
    if (com.cognitect.transit.eq.equals(this._entries[c], a)) {
      return this._entries[c + 1];
    }
  }
  return b;
};
com.cognitect.transit.types.TransitArrayMap.prototype.get = com.cognitect.transit.types.TransitArrayMap.prototype.get;
com.cognitect.transit.types.TransitArrayMap.prototype.has = function(a) {
  if (this.backingMap) {
    return this.backingMap.has(a);
  }
  if (this.convert()) {
    return this.has(a);
  }
  for (var b = 0;b < this._entries.length;b += 2) {
    if (com.cognitect.transit.eq.equals(this._entries[b], a)) {
      return !0;
    }
  }
  return !1;
};
com.cognitect.transit.types.TransitArrayMap.prototype.has = com.cognitect.transit.types.TransitArrayMap.prototype.has;
com.cognitect.transit.types.TransitArrayMap.prototype.set = function(a, b) {
  this.hashCode = -1;
  if (this.backingMap) {
    this.backingMap.set(a, b), this.size = this.backingMap.size;
  } else {
    for (var c = 0;c < this._entries.length;c += 2) {
      if (com.cognitect.transit.eq.equals(this._entries[c], a)) {
        this._entries[c + 1] = b;
        return;
      }
    }
    this._entries.push(a);
    this._entries.push(b);
    this.size++;
    this.size > com.cognitect.transit.types.ARRAY_MAP_THRESHOLD && (this.backingMap = com.cognitect.transit.types.map(this._entries, !1, !0), this._entries = null);
  }
};
com.cognitect.transit.types.TransitArrayMap.prototype.set = com.cognitect.transit.types.TransitArrayMap.prototype.set;
com.cognitect.transit.types.TransitArrayMap.prototype["delete"] = function(a) {
  this.hashCode = -1;
  if (this.backingMap) {
    return a = this.backingMap["delete"](a), this.size = this.backingMap.size, a;
  }
  for (var b = 0;b < this._entries.length;b += 2) {
    if (com.cognitect.transit.eq.equals(this._entries[b], a)) {
      return a = this._entries[b + 1], this._entries.splice(b, 2), this.size--, a;
    }
  }
};
com.cognitect.transit.types.TransitArrayMap.prototype.clone = function() {
  var a = com.cognitect.transit.types.map();
  this.forEach(function(b, c) {
    a.set(c, b);
  });
  return a;
};
com.cognitect.transit.types.TransitArrayMap.prototype.clone = com.cognitect.transit.types.TransitArrayMap.prototype.clone;
com.cognitect.transit.types.TransitArrayMap.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this.entries();
};
com.cognitect.transit.types.TransitArrayMap.prototype.com$cognitect$transit$hashCode = function() {
  if (this.backingMap) {
    return this.backingMap.com$cognitect$transit$hashCode();
  }
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashMapLike(this));
  return this.hashCode;
};
com.cognitect.transit.types.TransitArrayMap.prototype.com$cognitect$transit$equals = function(a) {
  return this.backingMap ? com.cognitect.transit.types.mapEquals(this.backingMap, a) : com.cognitect.transit.types.mapEquals(this, a);
};
com.cognitect.transit.types.TransitMap = function(a, b, c) {
  this.map = b || {};
  this._keys = a || [];
  this.size = c || 0;
  this.hashCode = -1;
};
com.cognitect.transit.types.TransitMap.prototype.toString = function() {
  return com.cognitect.transit.types.printMap(this);
};
com.cognitect.transit.types.TransitMap.prototype.inspect = function() {
  return this.toString();
};
com.cognitect.transit.types.TransitMap.prototype.clear = function() {
  this.hashCode = -1;
  this.map = {};
  this._keys = [];
  this.size = 0;
};
com.cognitect.transit.types.TransitMap.prototype.clear = com.cognitect.transit.types.TransitMap.prototype.clear;
com.cognitect.transit.types.TransitMap.prototype.getKeys = function() {
  return null != this._keys ? this._keys : com.cognitect.transit.util.objectKeys(this.map);
};
com.cognitect.transit.types.TransitMap.prototype["delete"] = function(a) {
  this.hashCode = -1;
  this._keys = null;
  for (var b = com.cognitect.transit.eq.hashCode(a), c = this.map[b], d = 0;d < c.length;d += 2) {
    if (com.cognitect.transit.eq.equals(a, c[d])) {
      return a = c[d + 1], c.splice(d, 2), 0 === c.length && delete this.map[b], this.size--, a;
    }
  }
};
com.cognitect.transit.types.TransitMap.prototype.entries = function() {
  return new com.cognitect.transit.types.TransitMapIterator(this, com.cognitect.transit.types.ENTRIES);
};
com.cognitect.transit.types.TransitMap.prototype.entries = com.cognitect.transit.types.TransitMap.prototype.entries;
com.cognitect.transit.types.TransitMap.prototype.forEach = function(a) {
  for (var b = this.getKeys(), c = 0;c < b.length;c++) {
    for (var d = this.map[b[c]], e = 0;e < d.length;e += 2) {
      a(d[e + 1], d[e], this);
    }
  }
};
com.cognitect.transit.types.TransitMap.prototype.forEach = com.cognitect.transit.types.TransitMap.prototype.forEach;
com.cognitect.transit.types.TransitMap.prototype.get = function(a, b) {
  var c = com.cognitect.transit.eq.hashCode(a), c = this.map[c];
  if (null != c) {
    for (var d = 0;d < c.length;d += 2) {
      if (com.cognitect.transit.eq.equals(a, c[d])) {
        return c[d + 1];
      }
    }
  } else {
    return b;
  }
};
com.cognitect.transit.types.TransitMap.prototype.get = com.cognitect.transit.types.TransitMap.prototype.get;
com.cognitect.transit.types.TransitMap.prototype.has = function(a) {
  var b = com.cognitect.transit.eq.hashCode(a), b = this.map[b];
  if (null != b) {
    for (var c = 0;c < b.length;c += 2) {
      if (com.cognitect.transit.eq.equals(a, b[c])) {
        return !0;
      }
    }
  }
  return !1;
};
com.cognitect.transit.types.TransitMap.prototype.has = com.cognitect.transit.types.TransitMap.prototype.has;
com.cognitect.transit.types.TransitMap.prototype.keys = function() {
  return new com.cognitect.transit.types.TransitMapIterator(this, com.cognitect.transit.types.KEYS);
};
com.cognitect.transit.types.TransitMap.prototype.keys = com.cognitect.transit.types.TransitMap.prototype.keys;
com.cognitect.transit.types.TransitMap.prototype.keySet = function() {
  for (var a = this.getKeys(), b = [], c = 0;c < a.length;c++) {
    for (var d = this.map[a[c]], e = 0;e < d.length;e += 2) {
      b.push(d[e]);
    }
  }
  return b;
};
com.cognitect.transit.types.TransitMap.prototype.keySet = com.cognitect.transit.types.TransitMap.prototype.keySet;
com.cognitect.transit.types.TransitMap.prototype.set = function(a, b) {
  this.hashCode = -1;
  var c = com.cognitect.transit.eq.hashCode(a), d = this.map[c];
  if (null == d) {
    this._keys && this._keys.push(c), this.map[c] = [a, b], this.size++;
  } else {
    for (var c = !0, e = 0;e < d.length;e += 2) {
      if (com.cognitect.transit.eq.equals(b, d[e])) {
        c = !1;
        d[e] = b;
        break;
      }
    }
    c && (d.push(a), d.push(b), this.size++);
  }
};
com.cognitect.transit.types.TransitMap.prototype.set = com.cognitect.transit.types.TransitMap.prototype.set;
com.cognitect.transit.types.TransitMap.prototype.values = function() {
  return new com.cognitect.transit.types.TransitMapIterator(this, com.cognitect.transit.types.VALUES);
};
com.cognitect.transit.types.TransitMap.prototype.values = com.cognitect.transit.types.TransitMap.prototype.values;
com.cognitect.transit.types.TransitMap.prototype.clone = function() {
  var a = com.cognitect.transit.types.map();
  this.forEach(function(b, c) {
    a.set(c, b);
  });
  return a;
};
com.cognitect.transit.types.TransitMap.prototype.clone = com.cognitect.transit.types.TransitMap.prototype.clone;
com.cognitect.transit.types.TransitMap.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this.entries();
};
com.cognitect.transit.types.TransitMap.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashMapLike(this));
  return this.hashCode;
};
com.cognitect.transit.types.TransitMap.prototype.com$cognitect$transit$equals = function(a) {
  return com.cognitect.transit.types.mapEquals(this, a);
};
com.cognitect.transit.types.map = function(a, b, c) {
  a = a || [];
  b = !1 === b ? b : !0;
  if ((!0 !== c || !c) && a.length <= 2 * com.cognitect.transit.types.ARRAY_MAP_THRESHOLD) {
    if (b) {
      var d = a;
      a = [];
      for (b = 0;b < d.length;b += 2) {
        var e = !1;
        for (c = 0;c < a.length;c += 2) {
          if (com.cognitect.transit.eq.equals(a[c], d[b])) {
            a[c + 1] = d[b + 1];
            e = !0;
            break;
          }
        }
        e || (a.push(d[b]), a.push(d[b + 1]));
      }
    }
    return new com.cognitect.transit.types.TransitArrayMap(a);
  }
  var d = {}, e = [], f = 0;
  for (b = 0;b < a.length;b += 2) {
    c = com.cognitect.transit.eq.hashCode(a[b]);
    var g = d[c];
    if (null == g) {
      e.push(c), d[c] = [a[b], a[b + 1]], f++;
    } else {
      var h = !0;
      for (c = 0;c < g.length;c += 2) {
        if (com.cognitect.transit.eq.equals(g[c], a[b])) {
          g[c + 1] = a[b + 1];
          h = !1;
          break;
        }
      }
      h && (g.push(a[b]), g.push(a[b + 1]), f++);
    }
  }
  return new com.cognitect.transit.types.TransitMap(e, d, f);
};
com.cognitect.transit.types.isArrayMap = function(a) {
  return a instanceof com.cognitect.transit.types.TransitArrayMap;
};
com.cognitect.transit.types.isMap = function(a) {
  return a instanceof com.cognitect.transit.types.TransitArrayMap || a instanceof com.cognitect.transit.types.TransitMap;
};
com.cognitect.transit.types.TransitSet = function(a) {
  this.map = a;
  this.size = a.size;
};
com.cognitect.transit.types.TransitSet.prototype.toString = function() {
  return com.cognitect.transit.types.printSet(this);
};
com.cognitect.transit.types.TransitSet.prototype.inspect = function() {
  return this.toString();
};
com.cognitect.transit.types.TransitSet.prototype.add = function(a) {
  this.map.set(a, a);
  this.size = this.map.size;
};
com.cognitect.transit.types.TransitSet.prototype.add = com.cognitect.transit.types.TransitSet.prototype.add;
com.cognitect.transit.types.TransitSet.prototype.clear = function() {
  this.map = new com.cognitect.transit.types.TransitMap;
  this.size = 0;
};
com.cognitect.transit.types.TransitSet.prototype.clear = com.cognitect.transit.types.TransitSet.prototype.clear;
com.cognitect.transit.types.TransitSet.prototype["delete"] = function(a) {
  a = this.map["delete"](a);
  this.size = this.map.size;
  return a;
};
com.cognitect.transit.types.TransitSet.prototype.entries = function() {
  return this.map.entries();
};
com.cognitect.transit.types.TransitSet.prototype.entries = com.cognitect.transit.types.TransitSet.prototype.entries;
com.cognitect.transit.types.TransitSet.prototype.forEach = function(a, b) {
  var c = this;
  this.map.forEach(function(b, e, f) {
    a(e, c);
  });
};
com.cognitect.transit.types.TransitSet.prototype.forEach = com.cognitect.transit.types.TransitSet.prototype.forEach;
com.cognitect.transit.types.TransitSet.prototype.has = function(a) {
  return this.map.has(a);
};
com.cognitect.transit.types.TransitSet.prototype.has = com.cognitect.transit.types.TransitSet.prototype.has;
com.cognitect.transit.types.TransitSet.prototype.keys = function() {
  return this.map.keys();
};
com.cognitect.transit.types.TransitSet.prototype.keys = com.cognitect.transit.types.TransitSet.prototype.keys;
com.cognitect.transit.types.TransitSet.prototype.keySet = function() {
  return this.map.keySet();
};
com.cognitect.transit.types.TransitSet.prototype.keySet = com.cognitect.transit.types.TransitSet.prototype.keySet;
com.cognitect.transit.types.TransitSet.prototype.values = function() {
  return this.map.values();
};
com.cognitect.transit.types.TransitSet.prototype.values = com.cognitect.transit.types.TransitSet.prototype.values;
com.cognitect.transit.types.TransitSet.prototype.clone = function() {
  var a = com.cognitect.transit.types.set();
  this.forEach(function(b) {
    a.add(b);
  });
  return a;
};
com.cognitect.transit.types.TransitSet.prototype.clone = com.cognitect.transit.types.TransitSet.prototype.clone;
com.cognitect.transit.types.TransitSet.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this.values();
};
com.cognitect.transit.types.TransitSet.prototype.com$cognitect$transit$equals = function(a) {
  if (a instanceof com.cognitect.transit.types.TransitSet) {
    if (this.size === a.size) {
      return com.cognitect.transit.eq.equals(this.map, a.map);
    }
  } else {
    return !1;
  }
};
com.cognitect.transit.types.TransitSet.prototype.com$cognitect$transit$hashCode = function(a) {
  return com.cognitect.transit.eq.hashCode(this.map);
};
com.cognitect.transit.types.set = function(a) {
  a = a || [];
  for (var b = {}, c = [], d = 0, e = 0;e < a.length;e++) {
    var f = com.cognitect.transit.eq.hashCode(a[e]), g = b[f];
    if (null == g) {
      c.push(f), b[f] = [a[e], a[e]], d++;
    } else {
      for (var f = !0, h = 0;h < g.length;h += 2) {
        if (com.cognitect.transit.eq.equals(g[h], a[e])) {
          f = !1;
          break;
        }
      }
      f && (g.push(a[e]), g.push(a[e]), d++);
    }
  }
  return new com.cognitect.transit.types.TransitSet(new com.cognitect.transit.types.TransitMap(c, b, d));
};
com.cognitect.transit.types.isSet = function(a) {
  return a instanceof com.cognitect.transit.types.TransitSet;
};
com.cognitect.transit.types.quoted = function(a) {
  return com.cognitect.transit.types.taggedValue("'", a);
};
com.cognitect.transit.types.isQuoted = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "'" === a.tag;
};
com.cognitect.transit.types.list = function(a) {
  return com.cognitect.transit.types.taggedValue("list", a);
};
com.cognitect.transit.types.isList = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "list" === a.tag;
};
com.cognitect.transit.types.link = function(a) {
  return com.cognitect.transit.types.taggedValue("link", a);
};
com.cognitect.transit.types.isLink = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "link" === a.tag;
};
com.cognitect.transit.types.specialDouble = function(a) {
  switch(a) {
    case "-INF":
      return -Infinity;
    case "INF":
      return Infinity;
    case "NaN":
      return NaN;
    default:
      throw Error("Invalid special double value " + a);;
  }
};
com.cognitect.transit.handlers = {};
com.cognitect.transit.handlers.ctorGuid = 0;
com.cognitect.transit.handlers.ctorGuidProperty = "transit$guid$" + com.cognitect.transit.util.randomUUID();
com.cognitect.transit.handlers.typeTag = function(a) {
  if (null == a) {
    return "null";
  }
  if (a === String) {
    return "string";
  }
  if (a === Boolean) {
    return "boolean";
  }
  if (a === Number) {
    return "number";
  }
  if (a === Array) {
    return "array";
  }
  if (a === Object) {
    return "map";
  }
  var b = a[com.cognitect.transit.handlers.ctorGuidProperty];
  null == b && ("undefined" != typeof Object.defineProperty ? (b = ++com.cognitect.transit.handlers.ctorGuid, Object.defineProperty(a, com.cognitect.transit.handlers.ctorGuidProperty, {value:b, enumerable:!1})) : a[com.cognitect.transit.handlers.ctorGuidProperty] = b = ++com.cognitect.transit.handlers.ctorGuid);
  return b;
};
com.cognitect.transit.handlers.constructor = function(a) {
  return null == a ? null : a.constructor;
};
com.cognitect.transit.handlers.padZeros = function(a, b) {
  for (var c = a.toString(), d = c.length;d < b;d++) {
    c = "0" + c;
  }
  return c;
};
com.cognitect.transit.handlers.stringableKeys = function(a) {
  a = com.cognitect.transit.util.objectKeys(a);
  for (var b = 0;b < a.length;b++) {
  }
  return !0;
};
com.cognitect.transit.handlers.NilHandler = function() {
};
com.cognitect.transit.handlers.NilHandler.prototype.tag = function(a) {
  return "_";
};
com.cognitect.transit.handlers.NilHandler.prototype.rep = function(a) {
  return null;
};
com.cognitect.transit.handlers.NilHandler.prototype.stringRep = function(a) {
  return "null";
};
com.cognitect.transit.handlers.StringHandler = function() {
};
com.cognitect.transit.handlers.StringHandler.prototype.tag = function(a) {
  return "s";
};
com.cognitect.transit.handlers.StringHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.StringHandler.prototype.stringRep = function(a) {
  return a;
};
com.cognitect.transit.handlers.NumberHandler = function() {
};
com.cognitect.transit.handlers.NumberHandler.prototype.tag = function(a) {
  return "i";
};
com.cognitect.transit.handlers.NumberHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.NumberHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.IntegerHandler = function() {
};
com.cognitect.transit.handlers.IntegerHandler.prototype.tag = function(a) {
  return "i";
};
com.cognitect.transit.handlers.IntegerHandler.prototype.rep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.IntegerHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.BooleanHandler = function() {
};
com.cognitect.transit.handlers.BooleanHandler.prototype.tag = function(a) {
  return "?";
};
com.cognitect.transit.handlers.BooleanHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.BooleanHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.ArrayHandler = function() {
};
com.cognitect.transit.handlers.ArrayHandler.prototype.tag = function(a) {
  return "array";
};
com.cognitect.transit.handlers.ArrayHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.ArrayHandler.prototype.stringRep = function(a) {
  return null;
};
com.cognitect.transit.handlers.MapHandler = function() {
};
com.cognitect.transit.handlers.MapHandler.prototype.tag = function(a) {
  return "map";
};
com.cognitect.transit.handlers.MapHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.MapHandler.prototype.stringRep = function(a) {
  return null;
};
com.cognitect.transit.handlers.VerboseDateHandler = function() {
};
com.cognitect.transit.handlers.VerboseDateHandler.prototype.tag = function(a) {
  return "t";
};
com.cognitect.transit.handlers.VerboseDateHandler.prototype.rep = function(a) {
  return a.getUTCFullYear() + "-" + com.cognitect.transit.handlers.padZeros(a.getUTCMonth() + 1, 2) + "-" + com.cognitect.transit.handlers.padZeros(a.getUTCDate(), 2) + "T" + com.cognitect.transit.handlers.padZeros(a.getUTCHours(), 2) + ":" + com.cognitect.transit.handlers.padZeros(a.getUTCMinutes(), 2) + ":" + com.cognitect.transit.handlers.padZeros(a.getUTCSeconds(), 2) + "." + com.cognitect.transit.handlers.padZeros(a.getUTCMilliseconds(), 3) + "Z";
};
com.cognitect.transit.handlers.VerboseDateHandler.prototype.stringRep = function(a, b) {
  return b.rep(a);
};
com.cognitect.transit.handlers.DateHandler = function() {
};
com.cognitect.transit.handlers.DateHandler.prototype.tag = function(a) {
  return "m";
};
com.cognitect.transit.handlers.DateHandler.prototype.rep = function(a) {
  return a.valueOf();
};
com.cognitect.transit.handlers.DateHandler.prototype.stringRep = function(a) {
  return a.valueOf().toString();
};
com.cognitect.transit.handlers.DateHandler.prototype.getVerboseHandler = function(a) {
  return new com.cognitect.transit.handlers.VerboseDateHandler;
};
com.cognitect.transit.handlers.UUIDHandler = function() {
};
com.cognitect.transit.handlers.UUIDHandler.prototype.tag = function(a) {
  return "u";
};
com.cognitect.transit.handlers.UUIDHandler.prototype.rep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.UUIDHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.KeywordHandler = function() {
};
com.cognitect.transit.handlers.KeywordHandler.prototype.tag = function(a) {
  return ":";
};
com.cognitect.transit.handlers.KeywordHandler.prototype.rep = function(a) {
  return a._name;
};
com.cognitect.transit.handlers.KeywordHandler.prototype.stringRep = function(a, b) {
  return b.rep(a);
};
com.cognitect.transit.handlers.SymbolHandler = function() {
};
com.cognitect.transit.handlers.SymbolHandler.prototype.tag = function(a) {
  return "$";
};
com.cognitect.transit.handlers.SymbolHandler.prototype.rep = function(a) {
  return a._name;
};
com.cognitect.transit.handlers.SymbolHandler.prototype.stringRep = function(a, b) {
  return b.rep(a);
};
com.cognitect.transit.handlers.TaggedHandler = function() {
};
com.cognitect.transit.handlers.TaggedHandler.prototype.tag = function(a) {
  return a.tag;
};
com.cognitect.transit.handlers.TaggedHandler.prototype.rep = function(a) {
  return a.rep;
};
com.cognitect.transit.handlers.TaggedHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.TransitSetHandler = function() {
};
com.cognitect.transit.handlers.TransitSetHandler.prototype.tag = function(a) {
  return "set";
};
com.cognitect.transit.handlers.TransitSetHandler.prototype.rep = function(a) {
  var b = [];
  a.forEach(function(a, d) {
    b.push(a);
  });
  return com.cognitect.transit.types.taggedValue("array", b);
};
com.cognitect.transit.handlers.TransitSetHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.TransitArrayMapHandler = function() {
};
com.cognitect.transit.handlers.TransitArrayMapHandler.prototype.tag = function(a) {
  return "map";
};
com.cognitect.transit.handlers.TransitArrayMapHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.TransitArrayMapHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.TransitMapHandler = function() {
};
com.cognitect.transit.handlers.TransitMapHandler.prototype.tag = function(a) {
  return "map";
};
com.cognitect.transit.handlers.TransitMapHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.TransitMapHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.BufferHandler = function() {
};
com.cognitect.transit.handlers.BufferHandler.prototype.tag = function(a) {
  return "b";
};
com.cognitect.transit.handlers.BufferHandler.prototype.rep = function(a) {
  return a.toString("base64");
};
com.cognitect.transit.handlers.BufferHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.Uint8ArrayHandler = function() {
};
com.cognitect.transit.handlers.Uint8ArrayHandler.prototype.tag = function(a) {
  return "b";
};
com.cognitect.transit.handlers.Uint8ArrayHandler.prototype.rep = function(a) {
  return com.cognitect.transit.util.Uint8ToBase64(a);
};
com.cognitect.transit.handlers.Uint8ArrayHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.defaultHandlers = function(a) {
  a.set(null, new com.cognitect.transit.handlers.NilHandler);
  a.set(String, new com.cognitect.transit.handlers.StringHandler);
  a.set(Number, new com.cognitect.transit.handlers.NumberHandler);
  a.set(goog.math.Long, new com.cognitect.transit.handlers.IntegerHandler);
  a.set(Boolean, new com.cognitect.transit.handlers.BooleanHandler);
  a.set(Array, new com.cognitect.transit.handlers.ArrayHandler);
  a.set(Object, new com.cognitect.transit.handlers.MapHandler);
  a.set(Date, new com.cognitect.transit.handlers.DateHandler);
  a.set(com.cognitect.transit.types.UUID, new com.cognitect.transit.handlers.UUIDHandler);
  a.set(com.cognitect.transit.types.Keyword, new com.cognitect.transit.handlers.KeywordHandler);
  a.set(com.cognitect.transit.types.Symbol, new com.cognitect.transit.handlers.SymbolHandler);
  a.set(com.cognitect.transit.types.TaggedValue, new com.cognitect.transit.handlers.TaggedHandler);
  a.set(com.cognitect.transit.types.TransitSet, new com.cognitect.transit.handlers.TransitSetHandler);
  a.set(com.cognitect.transit.types.TransitArrayMap, new com.cognitect.transit.handlers.TransitArrayMapHandler);
  a.set(com.cognitect.transit.types.TransitMap, new com.cognitect.transit.handlers.TransitMapHandler);
  "undefined" != typeof Buffer && a.set(Buffer, new com.cognitect.transit.handlers.BufferHandler);
  "undefined" != typeof Uint8Array && a.set(Uint8Array, new com.cognitect.transit.handlers.Uint8ArrayHandler);
  return a;
};
com.cognitect.transit.handlers.Handlers = function() {
  this.handlers = {};
  com.cognitect.transit.handlers.defaultHandlers(this);
};
com.cognitect.transit.handlers.Handlers.prototype.get = function(a) {
  var b = null, b = "string" === typeof a ? this.handlers[a] : this.handlers[com.cognitect.transit.handlers.typeTag(a)];
  return null != b ? b : this.handlers["default"];
};
com.cognitect.transit.handlers.Handlers.prototype.get = com.cognitect.transit.handlers.Handlers.prototype.get;
com.cognitect.transit.handlers.validTag = function(a) {
  switch(a) {
    case "null":
    ;
    case "string":
    ;
    case "boolean":
    ;
    case "number":
    ;
    case "array":
    ;
    case "map":
      return !1;
  }
  return !0;
};
com.cognitect.transit.handlers.Handlers.prototype.set = function(a, b) {
  "string" === typeof a && com.cognitect.transit.handlers.validTag(a) ? this.handlers[a] = b : this.handlers[com.cognitect.transit.handlers.typeTag(a)] = b;
};
com.cognitect.transit.impl = {};
com.cognitect.transit.impl.decoder = {};
com.cognitect.transit.impl.decoder.Tag = function(a) {
  this.str = a;
};
com.cognitect.transit.impl.decoder.tag = function(a) {
  return new com.cognitect.transit.impl.decoder.Tag(a);
};
com.cognitect.transit.impl.decoder.isTag = function(a) {
  return a && a instanceof com.cognitect.transit.impl.decoder.Tag;
};
com.cognitect.transit.impl.decoder.isGroundHandler = function(a) {
  switch(a) {
    case "_":
    ;
    case "s":
    ;
    case "?":
    ;
    case "i":
    ;
    case "d":
    ;
    case "b":
    ;
    case "'":
    ;
    case "array":
    ;
    case "map":
      return !0;
  }
  return !1;
};
com.cognitect.transit.impl.decoder.Decoder = function(a) {
  this.options = a || {};
  this.handlers = {};
  for (var b in this.defaults.handlers) {
    this.handlers[b] = this.defaults.handlers[b];
  }
  for (b in this.options.handlers) {
    if (com.cognitect.transit.impl.decoder.isGroundHandler(b)) {
      throw Error('Cannot override handler for ground type "' + b + '"');
    }
    this.handlers[b] = this.options.handlers[b];
  }
  this.preferStrings = null != this.options.preferStrings ? this.options.preferStrings : this.defaults.preferStrings;
  this.preferBuffers = null != this.options.preferBuffers ? this.options.preferBuffers : this.defaults.preferBuffers;
  this.defaultHandler = this.options.defaultHandler || this.defaults.defaultHandler;
  this.mapBuilder = this.options.mapBuilder;
  this.arrayBuilder = this.options.arrayBuilder;
};
com.cognitect.transit.impl.decoder.Decoder.prototype.defaults = {handlers:{_:function(a, b) {
  return com.cognitect.transit.types.nullValue();
}, "?":function(a, b) {
  return com.cognitect.transit.types.boolValue(a);
}, b:function(a, b) {
  return com.cognitect.transit.types.binary(a, b);
}, i:function(a, b) {
  return com.cognitect.transit.types.intValue(a);
}, n:function(a, b) {
  return com.cognitect.transit.types.bigInteger(a);
}, d:function(a, b) {
  return com.cognitect.transit.types.floatValue(a);
}, f:function(a, b) {
  return com.cognitect.transit.types.bigDecimalValue(a);
}, c:function(a, b) {
  return com.cognitect.transit.types.charValue(a);
}, ":":function(a, b) {
  return com.cognitect.transit.types.keyword(a);
}, $:function(a, b) {
  return com.cognitect.transit.types.symbol(a);
}, r:function(a, b) {
  return com.cognitect.transit.types.uri(a);
}, z:function(a, b) {
  return com.cognitect.transit.types.specialDouble(a);
}, "'":function(a, b) {
  return a;
}, m:function(a, b) {
  return com.cognitect.transit.types.date(a);
}, t:function(a, b) {
  return com.cognitect.transit.types.verboseDate(a);
}, u:function(a, b) {
  return com.cognitect.transit.types.uuid(a);
}, set:function(a, b) {
  return com.cognitect.transit.types.set(a);
}, list:function(a, b) {
  return com.cognitect.transit.types.list(a);
}, link:function(a, b) {
  return com.cognitect.transit.types.link(a);
}, cmap:function(a, b) {
  return com.cognitect.transit.types.map(a, !1);
}}, defaultHandler:function(a, b) {
  return com.cognitect.transit.types.taggedValue(a, b);
}, preferStrings:!0, preferBuffers:!0};
com.cognitect.transit.impl.decoder.Decoder.prototype.decode = function(a, b, c, d) {
  if (null == a) {
    return null;
  }
  switch(typeof a) {
    case "string":
      return this.decodeString(a, b, c, d);
    case "object":
      return com.cognitect.transit.util.isArray(a) ? "^ " === a[0] ? this.decodeArrayHash(a, b, c, d) : this.decodeArray(a, b, c, d) : this.decodeHash(a, b, c, d);
  }
  return a;
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decode = com.cognitect.transit.impl.decoder.Decoder.prototype.decode;
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeString = function(a, b, c, d) {
  return com.cognitect.transit.caching.isCacheable(a, c) ? (a = this.parseString(a, b, !1), b && b.write(a, c), a) : com.cognitect.transit.caching.isCacheCode(a) ? b.read(a, c) : this.parseString(a, b, c);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeHash = function(a, b, c, d) {
  c = com.cognitect.transit.util.objectKeys(a);
  var e = c[0];
  d = 1 == c.length ? this.decode(e, b, !1, !1) : null;
  if (com.cognitect.transit.impl.decoder.isTag(d)) {
    return a = a[e], c = this.handlers[d.str], null != c ? c(this.decode(a, b, !1, !0), this) : com.cognitect.transit.types.taggedValue(d.str, this.decode(a, b, !1, !1));
  }
  if (this.mapBuilder) {
    if (c.length < 2 * com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD && this.mapBuilder.fromArray) {
      var f = [];
      for (d = 0;d < c.length;d++) {
        e = c[d], f.push(this.decode(e, b, !0, !1)), f.push(this.decode(a[e], b, !1, !1));
      }
      return this.mapBuilder.fromArray(f, a);
    }
    f = this.mapBuilder.init(a);
    for (d = 0;d < c.length;d++) {
      e = c[d], f = this.mapBuilder.add(f, this.decode(e, b, !0, !1), this.decode(a[e], b, !1, !1), a);
    }
    return this.mapBuilder.finalize(f, a);
  }
  f = [];
  for (d = 0;d < c.length;d++) {
    e = c[d], f.push(this.decode(e, b, !0, !1)), f.push(this.decode(a[e], b, !1, !1));
  }
  return com.cognitect.transit.types.map(f, !1);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeArrayHash = function(a, b, c, d) {
  if (this.mapBuilder) {
    if (a.length < 2 * com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD + 1 && this.mapBuilder.fromArray) {
      d = [];
      for (c = 1;c < a.length;c += 2) {
        d.push(this.decode(a[c], b, !0, !1)), d.push(this.decode(a[c + 1], b, !1, !1));
      }
      return this.mapBuilder.fromArray(d, a);
    }
    d = this.mapBuilder.init(a);
    for (c = 1;c < a.length;c += 2) {
      d = this.mapBuilder.add(d, this.decode(a[c], b, !0, !1), this.decode(a[c + 1], b, !1, !1), a);
    }
    return this.mapBuilder.finalize(d, a);
  }
  d = [];
  for (c = 1;c < a.length;c += 2) {
    d.push(this.decode(a[c], b, !0, !1)), d.push(this.decode(a[c + 1], b, !1, !1));
  }
  return com.cognitect.transit.types.map(d, !1);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeArray = function(a, b, c, d) {
  if (d) {
    var e = [];
    for (d = 0;d < a.length;d++) {
      e.push(this.decode(a[d], b, c, !1));
    }
    return e;
  }
  e = b && b.idx;
  if (2 === a.length && "string" === typeof a[0] && (d = this.decode(a[0], b, !1, !1), com.cognitect.transit.impl.decoder.isTag(d))) {
    return a = a[1], e = this.handlers[d.str], null != e ? e = e(this.decode(a, b, c, !0), this) : com.cognitect.transit.types.taggedValue(d.str, this.decode(a, b, c, !1));
  }
  b && e != b.idx && (b.idx = e);
  if (this.arrayBuilder) {
    if (32 >= a.length && this.arrayBuilder.fromArray) {
      e = [];
      for (d = 0;d < a.length;d++) {
        e.push(this.decode(a[d], b, c, !1));
      }
      return this.arrayBuilder.fromArray(e, a);
    }
    e = this.arrayBuilder.init(a);
    for (d = 0;d < a.length;d++) {
      e = this.arrayBuilder.add(e, this.decode(a[d], b, c, !1), a);
    }
    return this.arrayBuilder.finalize(e, a);
  }
  e = [];
  for (d = 0;d < a.length;d++) {
    e.push(this.decode(a[d], b, c, !1));
  }
  return e;
};
com.cognitect.transit.impl.decoder.Decoder.prototype.parseString = function(a, b, c) {
  if (a.charAt(0) === com.cognitect.transit.delimiters.ESC) {
    b = a.charAt(1);
    if (b === com.cognitect.transit.delimiters.ESC || b === com.cognitect.transit.delimiters.SUB || b === com.cognitect.transit.delimiters.RES) {
      return a.substring(1);
    }
    if (b === com.cognitect.transit.delimiters.TAG) {
      return com.cognitect.transit.impl.decoder.tag(a.substring(2));
    }
    c = this.handlers[b];
    return null == c ? this.defaultHandler(b, a.substring(2)) : c(a.substring(2), this);
  }
  return a;
};
com.cognitect.transit.impl.decoder.decoder = function(a) {
  return new com.cognitect.transit.impl.decoder.Decoder(a);
};
com.cognitect.transit.impl.reader = {};
com.cognitect.transit.impl.reader.JSONUnmarshaller = function(a) {
  this.decoder = new com.cognitect.transit.impl.decoder.Decoder(a);
};
com.cognitect.transit.impl.reader.JSONUnmarshaller.prototype.unmarshal = function(a, b) {
  return this.decoder.decode(JSON.parse(a), b);
};
com.cognitect.transit.impl.reader.Reader = function(a, b) {
  this.unmarshaller = a;
  this.options = b || {};
  this.cache = this.options.cache ? this.options.cache : new com.cognitect.transit.caching.ReadCache;
};
com.cognitect.transit.impl.reader.Reader.prototype.read = function(a) {
  a = this.unmarshaller.unmarshal(a, this.cache);
  this.cache.clear();
  return a;
};
com.cognitect.transit.impl.reader.Reader.prototype.read = com.cognitect.transit.impl.reader.Reader.prototype.read;
com.cognitect.transit.impl.writer = {};
com.cognitect.transit.impl.writer.escape = function(a) {
  if (0 < a.length) {
    var b = a.charAt(0);
    return b === com.cognitect.transit.delimiters.ESC || b === com.cognitect.transit.delimiters.SUB || b === com.cognitect.transit.delimiters.RES ? com.cognitect.transit.delimiters.ESC + a : a;
  }
  return a;
};
com.cognitect.transit.impl.writer.JSONMarshaller = function(a) {
  this.opts = a || {};
  this.preferStrings = null != this.opts.preferStrings ? this.opts.preferStrings : !0;
  this.objectBuilder = this.opts.objectBuilder || null;
  this.handlers = new com.cognitect.transit.handlers.Handlers;
  if (a = this.opts.handlers) {
    if (com.cognitect.transit.util.isArray(a) || !a.forEach) {
      throw Error('transit writer "handlers" option must be a map');
    }
    var b = this;
    a.forEach(function(a, d) {
      if (void 0 !== d) {
        b.handlers.set(d, a);
      } else {
        throw Error("Cannot create handler for JavaScript undefined");
      }
    });
  }
  this.handlerForForeign = this.opts.handlerForForeign;
  this.unpack = this.opts.unpack || function(a) {
    return com.cognitect.transit.types.isArrayMap(a) && null === a.backingMap ? a._entries : !1;
  };
  this.verbose = this.opts && this.opts.verbose || !1;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.handler = function(a) {
  var b = this.handlers.get(com.cognitect.transit.handlers.constructor(a));
  return null != b ? b : (a = a && a.transitTag) ? this.handlers.get(a) : null;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.registerHandler = function(a, b) {
  this.handlers.set(a, b);
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitNil = function(a, b) {
  return a ? this.emitString(com.cognitect.transit.delimiters.ESC, "_", "", a, b) : null;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitString = function(a, b, c, d, e) {
  a = a + b + c;
  return e ? e.write(a, d) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitBoolean = function(a, b, c) {
  return b ? this.emitString(com.cognitect.transit.delimiters.ESC, "?", a.toString()[0], b, c) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitInteger = function(a, b, c) {
  return Infinity === a ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "INF", b, c) : -Infinity === a ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "-INF", b, c) : isNaN(a) ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "NaN", b, c) : b || "string" === typeof a || a instanceof goog.math.Long ? this.emitString(com.cognitect.transit.delimiters.ESC, "i", a.toString(), b, c) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitDouble = function(a, b, c) {
  return b ? this.emitString(a.ESC, "d", a, b, c) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitBinary = function(a, b, c) {
  return this.emitString(com.cognitect.transit.delimiters.ESC, "b", a, b, c);
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitQuoted = function(a, b, c) {
  if (a.verbose) {
    a = {};
    var d = this.emitString(com.cognitect.transit.delimiters.ESC_TAG, "'", "", !0, c);
    a[d] = com.cognitect.transit.impl.writer.marshal(this, b, !1, c);
    return a;
  }
  return [this.emitString(com.cognitect.transit.delimiters.ESC_TAG, "'", "", !0, c), com.cognitect.transit.impl.writer.marshal(this, b, !1, c)];
};
com.cognitect.transit.impl.writer.emitObjects = function(a, b, c) {
  var d = [];
  if (com.cognitect.transit.util.isArray(b)) {
    for (var e = 0;e < b.length;e++) {
      d.push(com.cognitect.transit.impl.writer.marshal(a, b[e], !1, c));
    }
  } else {
    b.forEach(function(b, e) {
      d.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, c));
    });
  }
  return d;
};
com.cognitect.transit.impl.writer.emitArray = function(a, b, c, d) {
  return com.cognitect.transit.impl.writer.emitObjects(a, b, d);
};
com.cognitect.transit.impl.writer.isStringableKey = function(a, b) {
  if ("string" !== typeof b) {
    var c = a.handler(b);
    return c && 1 === c.tag(b).length;
  }
  return !0;
};
com.cognitect.transit.impl.writer.stringableKeys = function(a, b) {
  var c = a.unpack(b), d = !0;
  if (c) {
    for (var e = 0;e < c.length && (d = com.cognitect.transit.impl.writer.isStringableKey(a, c[e]), d);e += 2) {
    }
    return d;
  }
  if (b.keys && (c = b.keys(), e = null, c.next)) {
    for (e = c.next();!e.done;) {
      d = com.cognitect.transit.impl.writer.isStringableKey(a, e.value);
      if (!d) {
        break;
      }
      e = c.next();
    }
    return d;
  }
  if (b.forEach) {
    return b.forEach(function(b, c) {
      d = d && com.cognitect.transit.impl.writer.isStringableKey(a, c);
    }), d;
  }
  throw Error("Cannot walk keys of object type " + com.cognitect.transit.handlers.constructor(b).name);
};
com.cognitect.transit.impl.writer.isForeignObject = function(a) {
  if (a.constructor.transit$isObject) {
    return !0;
  }
  var b = a.constructor.toString(), b = b.substr(9), b = b.substr(0, b.indexOf("("));
  isObject = "Object" == b;
  "undefined" != typeof Object.defineProperty ? Object.defineProperty(a.constructor, "transit$isObject", {value:isObject, enumerable:!1}) : a.constructor.transit$isObject = isObject;
  return isObject;
};
com.cognitect.transit.impl.writer.emitMap = function(a, b, c, d) {
  var e = null, f = null, g = null, e = null;
  c = 0;
  if (b.constructor === Object || null != b.forEach || a.handlerForForeign && com.cognitect.transit.impl.writer.isForeignObject(b)) {
    if (a.verbose) {
      if (null != b.forEach) {
        if (com.cognitect.transit.impl.writer.stringableKeys(a, b)) {
          var h = {};
          b.forEach(function(b, c) {
            h[com.cognitect.transit.impl.writer.marshal(a, c, !0, !1)] = com.cognitect.transit.impl.writer.marshal(a, b, !1, d);
          });
        } else {
          e = a.unpack(b);
          f = [];
          g = a.emitString(com.cognitect.transit.delimiters.ESC_TAG, "cmap", "", !0, d);
          if (e) {
            for (;c < e.length;c += 2) {
              f.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !1, !1)), f.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
            }
          } else {
            b.forEach(function(b, c) {
              f.push(com.cognitect.transit.impl.writer.marshal(a, c, !1, !1));
              f.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, d));
            });
          }
          h = {};
          h[g] = f;
        }
      } else {
        for (e = com.cognitect.transit.util.objectKeys(b), h = {};c < e.length;c++) {
          h[com.cognitect.transit.impl.writer.marshal(a, e[c], !0, !1)] = com.cognitect.transit.impl.writer.marshal(a, b[e[c]], !1, d);
        }
      }
      return h;
    }
    if (null != b.forEach) {
      if (com.cognitect.transit.impl.writer.stringableKeys(a, b)) {
        e = a.unpack(b);
        h = ["^ "];
        if (e) {
          for (;c < e.length;c += 2) {
            h.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !0, d)), h.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
          }
        } else {
          b.forEach(function(b, c) {
            h.push(com.cognitect.transit.impl.writer.marshal(a, c, !0, d));
            h.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, d));
          });
        }
        return h;
      }
      e = a.unpack(b);
      f = [];
      g = a.emitString(com.cognitect.transit.delimiters.ESC_TAG, "cmap", "", !0, d);
      if (e) {
        for (;c < e.length;c += 2) {
          f.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !1, d)), f.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
        }
      } else {
        b.forEach(function(b, c) {
          f.push(com.cognitect.transit.impl.writer.marshal(a, c, !1, d));
          f.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, d));
        });
      }
      return [g, f];
    }
    h = ["^ "];
    for (e = com.cognitect.transit.util.objectKeys(b);c < e.length;c++) {
      h.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !0, d)), h.push(com.cognitect.transit.impl.writer.marshal(a, b[e[c]], !1, d));
    }
    return h;
  }
  if (null != a.objectBuilder) {
    return a.objectBuilder(b, function(b) {
      return com.cognitect.transit.impl.writer.marshal(a, b, !0, d);
    }, function(b) {
      return com.cognitect.transit.impl.writer.marshal(a, b, !1, d);
    });
  }
  c = com.cognitect.transit.handlers.constructor(b).name;
  e = Error("Cannot write " + c);
  e.data = {obj:b, type:c};
  throw e;
};
com.cognitect.transit.impl.writer.emitTaggedMap = function(a, b, c, d, e) {
  return a.verbose ? (d = {}, d[a.emitString(com.cognitect.transit.delimiters.ESC_TAG, b, "", !0, e)] = com.cognitect.transit.impl.writer.marshal(a, c, !1, e), d) : [a.emitString(com.cognitect.transit.delimiters.ESC_TAG, b, "", !0, e), com.cognitect.transit.impl.writer.marshal(a, c, !1, e)];
};
com.cognitect.transit.impl.writer.emitEncoded = function(a, b, c, d, e, f, g) {
  if (1 === c.length) {
    if ("string" === typeof d) {
      return a.emitString(com.cognitect.transit.delimiters.ESC, c, d, f, g);
    }
    if (f || a.preferStrings) {
      (d = a.verbose && b.getVerboseHandler()) ? (c = d.tag(e), d = d.stringRep(e, d)) : d = b.stringRep(e, b);
      if (null !== d) {
        return a.emitString(com.cognitect.transit.delimiters.ESC, c, d, f, g);
      }
      a = Error('Tag "' + c + '" cannot be encoded as string');
      a.data = {tag:c, rep:d, obj:e};
      throw a;
    }
  }
  return com.cognitect.transit.impl.writer.emitTaggedMap(a, c, d, f, g);
};
com.cognitect.transit.impl.writer.marshal = function(a, b, c, d) {
  var e = a.handler(b) || (a.handlerForForeign ? a.handlerForForeign(b, a.handlers) : null), f = e ? e.tag(b) : null, g = e ? e.rep(b) : null;
  if (null != e && null != f) {
    switch(f) {
      case "_":
        return a.emitNil(c, d);
      case "s":
        return a.emitString("", "", com.cognitect.transit.impl.writer.escape(g), c, d);
      case "?":
        return a.emitBoolean(g, c, d);
      case "i":
        return a.emitInteger(g, c, d);
      case "d":
        return a.emitDouble(g, c, d);
      case "b":
        return a.emitBinary(g, c, d);
      case "'":
        return a.emitQuoted(a, g, d);
      case "array":
        return com.cognitect.transit.impl.writer.emitArray(a, g, c, d);
      case "map":
        return com.cognitect.transit.impl.writer.emitMap(a, g, c, d);
      default:
        return com.cognitect.transit.impl.writer.emitEncoded(a, e, f, g, b, c, d);
    }
  } else {
    throw a = com.cognitect.transit.handlers.constructor(b).name, c = Error("Cannot write " + a), c.data = {obj:b, type:a}, c;
  }
};
com.cognitect.transit.impl.writer.maybeQuoted = function(a, b) {
  var c = a.handler(b) || (a.handlerForForeign ? a.handlerForForeign(b, a.handlers) : null);
  if (null != c) {
    return 1 === c.tag(b).length ? com.cognitect.transit.types.quoted(b) : b;
  }
  var c = com.cognitect.transit.handlers.constructor(b).name, d = Error("Cannot write " + c);
  d.data = {obj:b, type:c};
  throw d;
};
com.cognitect.transit.impl.writer.marshalTop = function(a, b, c, d) {
  return JSON.stringify(com.cognitect.transit.impl.writer.marshal(a, com.cognitect.transit.impl.writer.maybeQuoted(a, b), c, d));
};
com.cognitect.transit.impl.writer.Writer = function(a, b) {
  this._marshaller = a;
  this.options = b || {};
  this.cache = !1 === this.options.cache ? null : this.options.cache ? this.options.cache : new com.cognitect.transit.caching.WriteCache;
};
com.cognitect.transit.impl.writer.Writer.prototype.marshaller = function() {
  return this._marshaller;
};
com.cognitect.transit.impl.writer.Writer.prototype.marshaller = com.cognitect.transit.impl.writer.Writer.prototype.marshaller;
com.cognitect.transit.impl.writer.Writer.prototype.write = function(a, b) {
  var c = null, c = b || {}, d = c.asMapKey || !1, e = this._marshaller.verbose ? !1 : this.cache, c = !1 === c.marshalTop ? com.cognitect.transit.impl.writer.marshal(this._marshaller, a, d, e) : com.cognitect.transit.impl.writer.marshalTop(this._marshaller, a, d, e);
  null != this.cache && this.cache.clear();
  return c;
};
com.cognitect.transit.impl.writer.Writer.prototype.write = com.cognitect.transit.impl.writer.Writer.prototype.write;
com.cognitect.transit.impl.writer.Writer.prototype.register = function(a, b) {
  this._marshaller.registerHandler(a, b);
};
com.cognitect.transit.impl.writer.Writer.prototype.register = com.cognitect.transit.impl.writer.Writer.prototype.register;
var TRANSIT_DEV = !0, TRANSIT_NODE_TARGET = !0, TRANSIT_BROWSER_TARGET = !1, TRANSIT_BROWSER_AMD_TARGET = !1;
com.cognitect.transit.reader = function(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    var c = new com.cognitect.transit.impl.reader.JSONUnmarshaller(b);
    return new com.cognitect.transit.impl.reader.Reader(c, b);
  }
  throw Error("Cannot create reader of type " + a);
};
com.cognitect.transit.writer = function(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    "json-verbose" === a && (null == b && (b = {}), b.verbose = !0);
    var c = new com.cognitect.transit.impl.writer.JSONMarshaller(b);
    return new com.cognitect.transit.impl.writer.Writer(c, b);
  }
  c = Error('Type must be "json"');
  c.data = {type:a};
  throw c;
};
com.cognitect.transit.makeWriteHandler = function(a) {
  var b = function() {
  };
  b.prototype.tag = a.tag;
  b.prototype.rep = a.rep;
  b.prototype.stringRep = a.stringRep;
  b.prototype.getVerboseHandler = a.getVerboseHandler;
  return new b;
};
com.cognitect.transit.makeBuilder = function(a) {
  var b = function() {
  };
  b.prototype.init = a.init;
  b.prototype.add = a.add;
  b.prototype.finalize = a.finalize;
  b.prototype.fromArray = a.fromArray;
  return new b;
};
com.cognitect.transit.date = com.cognitect.transit.types.date;
com.cognitect.transit.integer = com.cognitect.transit.types.intValue;
com.cognitect.transit.isInteger = com.cognitect.transit.types.isInteger;
com.cognitect.transit.uuid = com.cognitect.transit.types.uuid;
com.cognitect.transit.isUUID = com.cognitect.transit.types.isUUID;
com.cognitect.transit.bigInt = com.cognitect.transit.types.bigInteger;
com.cognitect.transit.isBigInt = com.cognitect.transit.types.isBigInteger;
com.cognitect.transit.bigDec = com.cognitect.transit.types.bigDecimalValue;
com.cognitect.transit.isBigDec = com.cognitect.transit.types.isBigDecimal;
com.cognitect.transit.keyword = com.cognitect.transit.types.keyword;
com.cognitect.transit.isKeyword = com.cognitect.transit.types.isKeyword;
com.cognitect.transit.symbol = com.cognitect.transit.types.symbol;
com.cognitect.transit.isSymbol = com.cognitect.transit.types.isSymbol;
com.cognitect.transit.binary = com.cognitect.transit.types.binary;
com.cognitect.transit.isBinary = com.cognitect.transit.types.isBinary;
com.cognitect.transit.uri = com.cognitect.transit.types.uri;
com.cognitect.transit.isURI = com.cognitect.transit.types.isURI;
com.cognitect.transit.map = com.cognitect.transit.types.map;
com.cognitect.transit.isMap = com.cognitect.transit.types.isMap;
com.cognitect.transit.set = com.cognitect.transit.types.set;
com.cognitect.transit.isSet = com.cognitect.transit.types.isSet;
com.cognitect.transit.list = com.cognitect.transit.types.list;
com.cognitect.transit.isList = com.cognitect.transit.types.isList;
com.cognitect.transit.quoted = com.cognitect.transit.types.quoted;
com.cognitect.transit.isQuoted = com.cognitect.transit.types.isQuoted;
com.cognitect.transit.tagged = com.cognitect.transit.types.taggedValue;
com.cognitect.transit.isTaggedValue = com.cognitect.transit.types.isTaggedValue;
com.cognitect.transit.link = com.cognitect.transit.types.link;
com.cognitect.transit.isLink = com.cognitect.transit.types.isLink;
com.cognitect.transit.hash = com.cognitect.transit.eq.hashCode;
com.cognitect.transit.hashMapLike = com.cognitect.transit.eq.hashMapLike;
com.cognitect.transit.hashArrayLike = com.cognitect.transit.eq.hashArrayLike;
com.cognitect.transit.equals = com.cognitect.transit.eq.equals;
com.cognitect.transit.extendToEQ = com.cognitect.transit.eq.extendToEQ;
com.cognitect.transit.mapToObject = function(a) {
  var b = {};
  a.forEach(function(a, d) {
    if ("string" !== typeof d) {
      throw Error("Cannot convert map with non-string keys");
    }
    b[d] = a;
  });
  return b;
};
com.cognitect.transit.objectToMap = function(a) {
  var b = com.cognitect.transit.map(), c;
  for (c in a) {
    a.hasOwnProperty(c) && b.set(c, a[c]);
  }
  return b;
};
com.cognitect.transit.decoder = com.cognitect.transit.impl.decoder.decoder;
com.cognitect.transit.readCache = com.cognitect.transit.caching.readCache;
com.cognitect.transit.writeCache = com.cognitect.transit.caching.writeCache;
com.cognitect.transit.UUIDfromString = com.cognitect.transit.types.UUIDfromString;
com.cognitect.transit.randomUUID = com.cognitect.transit.util.randomUUID;
com.cognitect.transit.stringableKeys = com.cognitect.transit.impl.writer.stringableKeys;
TRANSIT_BROWSER_TARGET && (goog.exportSymbol("transit.reader", com.cognitect.transit.reader), goog.exportSymbol("transit.writer", com.cognitect.transit.writer), goog.exportSymbol("transit.makeBuilder", com.cognitect.transit.makeBuilder), goog.exportSymbol("transit.makeWriteHandler", com.cognitect.transit.makeWriteHandler), goog.exportSymbol("transit.date", com.cognitect.transit.types.date), goog.exportSymbol("transit.integer", com.cognitect.transit.types.intValue), goog.exportSymbol("transit.isInteger", 
com.cognitect.transit.types.isInteger), goog.exportSymbol("transit.uuid", com.cognitect.transit.types.uuid), goog.exportSymbol("transit.isUUID", com.cognitect.transit.types.isUUID), goog.exportSymbol("transit.bigInt", com.cognitect.transit.types.bigInteger), goog.exportSymbol("transit.isBigInt", com.cognitect.transit.types.isBigInteger), goog.exportSymbol("transit.bigDec", com.cognitect.transit.types.bigDecimalValue), goog.exportSymbol("transit.isBigDec", com.cognitect.transit.types.isBigDecimal), 
goog.exportSymbol("transit.keyword", com.cognitect.transit.types.keyword), goog.exportSymbol("transit.isKeyword", com.cognitect.transit.types.isKeyword), goog.exportSymbol("transit.symbol", com.cognitect.transit.types.symbol), goog.exportSymbol("transit.isSymbol", com.cognitect.transit.types.isSymbol), goog.exportSymbol("transit.binary", com.cognitect.transit.types.binary), goog.exportSymbol("transit.isBinary", com.cognitect.transit.types.isBinary), goog.exportSymbol("transit.uri", com.cognitect.transit.types.uri), 
goog.exportSymbol("transit.isURI", com.cognitect.transit.types.isURI), goog.exportSymbol("transit.map", com.cognitect.transit.types.map), goog.exportSymbol("transit.isMap", com.cognitect.transit.types.isMap), goog.exportSymbol("transit.set", com.cognitect.transit.types.set), goog.exportSymbol("transit.isSet", com.cognitect.transit.types.isSet), goog.exportSymbol("transit.list", com.cognitect.transit.types.list), goog.exportSymbol("transit.isList", com.cognitect.transit.types.isList), goog.exportSymbol("transit.quoted", 
com.cognitect.transit.types.quoted), goog.exportSymbol("transit.isQuoted", com.cognitect.transit.types.isQuoted), goog.exportSymbol("transit.tagged", com.cognitect.transit.types.taggedValue), goog.exportSymbol("transit.isTaggedValue", com.cognitect.transit.types.isTaggedValue), goog.exportSymbol("transit.link", com.cognitect.transit.types.link), goog.exportSymbol("transit.isLink", com.cognitect.transit.types.isLink), goog.exportSymbol("transit.hash", com.cognitect.transit.eq.hashCode), goog.exportSymbol("transit.hashMapLike", 
com.cognitect.transit.eq.hashMapLike), goog.exportSymbol("transit.hashArrayLike", com.cognitect.transit.eq.hashArrayLike), goog.exportSymbol("transit.equals", com.cognitect.transit.eq.equals), goog.exportSymbol("transit.extendToEQ", com.cognitect.transit.eq.extendToEQ), goog.exportSymbol("transit.mapToObject", com.cognitect.transit.mapToObject), goog.exportSymbol("transit.objectToMap", com.cognitect.transit.objectToMap), goog.exportSymbol("transit.decoder", com.cognitect.transit.impl.decoder.decoder), 
goog.exportSymbol("transit.UUIDfromString", com.cognitect.transit.types.UUIDfromString), goog.exportSymbol("transit.randomUUID", com.cognitect.transit.util.randomUUID), goog.exportSymbol("transit.stringableKeys", com.cognitect.transit.impl.writer.stringableKeys), goog.exportSymbol("transit.readCache", com.cognitect.transit.caching.readCache), goog.exportSymbol("transit.writeCache", com.cognitect.transit.caching.writeCache));
TRANSIT_NODE_TARGET && (module.exports = {reader:com.cognitect.transit.reader, writer:com.cognitect.transit.writer, makeBuilder:com.cognitect.transit.makeBuilder, makeWriteHandler:com.cognitect.transit.makeWriteHandler, date:com.cognitect.transit.types.date, integer:com.cognitect.transit.types.intValue, isInteger:com.cognitect.transit.types.isInteger, uuid:com.cognitect.transit.types.uuid, isUUID:com.cognitect.transit.types.isUUID, bigInt:com.cognitect.transit.types.bigInteger, isBigInt:com.cognitect.transit.types.isBigInteger, 
bigDec:com.cognitect.transit.types.bigDecimalValue, isBigDec:com.cognitect.transit.types.isBigDecimal, keyword:com.cognitect.transit.types.keyword, isKeyword:com.cognitect.transit.types.isKeyword, symbol:com.cognitect.transit.types.symbol, isSymbol:com.cognitect.transit.types.isSymbol, binary:com.cognitect.transit.types.binary, isBinary:com.cognitect.transit.types.isBinary, uri:com.cognitect.transit.types.uri, isURI:com.cognitect.transit.types.isURI, map:com.cognitect.transit.types.map, isMap:com.cognitect.transit.types.isMap, 
set:com.cognitect.transit.types.set, isSet:com.cognitect.transit.types.isSet, list:com.cognitect.transit.types.list, isList:com.cognitect.transit.types.isList, quoted:com.cognitect.transit.types.quoted, isQuoted:com.cognitect.transit.types.isQuoted, tagged:com.cognitect.transit.types.taggedValue, isTaggedValue:com.cognitect.transit.types.isTaggedValue, link:com.cognitect.transit.types.link, isLink:com.cognitect.transit.types.isLink, hash:com.cognitect.transit.eq.hashCode, hashArrayLike:com.cognitect.transit.eq.hashArrayLike, 
hashMapLike:com.cognitect.transit.eq.hashMapLike, equals:com.cognitect.transit.eq.equals, extendToEQ:com.cognitect.transit.eq.extendToEQ, mapToObject:com.cognitect.transit.mapToObject, objectToMap:com.cognitect.transit.objectToMap, decoder:com.cognitect.transit.impl.decoder.decoder, UUIDfromString:com.cognitect.transit.types.UUIDfromString, randomUUID:com.cognitect.transit.util.randomUUID, stringableKeys:com.cognitect.transit.impl.writer.stringableKeys, readCache:com.cognitect.transit.caching.readCache, 
writeCache:com.cognitect.transit.caching.writeCache});



/***/ },
/* 237 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_237__;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenStore = exports.types = exports.createInstance = undefined;

var _sdk = __webpack_require__(88);

var _sdk2 = _interopRequireDefault(_sdk);

var _types = __webpack_require__(24);

var types = _interopRequireWildcard(_types);

var _browser_cookie_store = __webpack_require__(47);

var _browser_cookie_store2 = _interopRequireDefault(_browser_cookie_store);

var _express_cookie_store = __webpack_require__(87);

var _express_cookie_store2 = _interopRequireDefault(_express_cookie_store);

var _memory_store = __webpack_require__(48);

var _memory_store2 = _interopRequireDefault(_memory_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createInstance = function createInstance(config) {
  return new _sdk2.default(config);
};

// Export token stores
var tokenStore = {
  memoryStore: _memory_store2.default,
  browserCookieStore: _browser_cookie_store2.default,
  expressCookieStore: _express_cookie_store2.default
};

/* eslint-disable import/prefer-default-export */
exports.createInstance = createInstance;
exports.types = types;
exports.tokenStore = tokenStore;

/***/ }
/******/ ])
});
;