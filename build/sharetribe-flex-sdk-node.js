(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("jsonwebtoken"));
	else if(typeof define === 'function' && define.amd)
		define(["axios", "jsonwebtoken"], factory);
	else if(typeof exports === 'object')
		exports["sharetribeSdk"] = factory(require("axios"), require("jsonwebtoken"));
	else
		root["sharetribeSdk"] = factory(root["axios"], root["jsonwebtoken"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__70__, __WEBPACK_EXTERNAL_MODULE__71__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 178);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(23);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(37);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(42);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// transit-js 0.8.877
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
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

var COMPILED = !0, goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function(a, b, c, d) {
  a = a.split(".");
  d = d || goog.global;
  a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
  for (var e; a.length && (e = a.shift());) {
    if (a.length || void 0 === b) {
      d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {};
    } else {
      if (!c && goog.isObject(b) && goog.isObject(d[e])) {
        for (var f in b) {
          b.hasOwnProperty(f) && (d[e][f] = b[f]);
        }
      } else {
        d[e] = b;
      }
    }
  }
};
goog.define = function(a, b) {
  if (!COMPILED) {
    var c = goog.global.CLOSURE_UNCOMPILED_DEFINES, d = goog.global.CLOSURE_DEFINES;
    c && void 0 === c.nodeType && Object.prototype.hasOwnProperty.call(c, a) ? b = c[a] : d && void 0 === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) && (b = d[a]);
  }
  return b;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.provide cannot be used within a module.");
  }
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b, c) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var d = a; (d = d.substring(0, d.lastIndexOf("."))) && !goog.getObjectByName(d);) {
      goog.implicitNamespaces_[d] = !0;
    }
  }
  goog.exportPath_(a, b, c);
};
goog.getScriptNonce = function(a) {
  if (a && a != goog.global) {
    return goog.getScriptNonce_(a.document);
  }
  null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
  return goog.cspNonce_;
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.cspNonce_ = null;
goog.getScriptNonce_ = function(a) {
  return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if ("string" !== typeof a || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInGoogModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
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
    if (a in goog.loadedModules_) {
      return goog.loadedModules_[a].exports;
    }
    if (!goog.implicitNamespaces_[a]) {
      return a = goog.getObjectByName(a), null != a ? a : null;
    }
  }
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
  if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) {
    return !0;
  }
  var a = goog.global.$jscomp;
  return a ? "function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath() : !1;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.declareModuleId = function(a) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw Error("goog.declareModuleId may only be called from within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw Error("goog.declareModuleId may only be called once per module.");
    }
    if (a in goog.loadedModules_) {
      throw Error('Module with namespace "' + a + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    goog.moduleLoaderState_.moduleName = a;
  } else {
    var b = goog.global.$jscomp;
    if (!b || "function" != typeof b.getCurrentModulePath) {
      throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    }
    b = b.require(b.getCurrentModulePath());
    goog.loadedModules_[a] = {exports:b, type:goog.ModuleType.ES6, moduleId:a};
  }
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && null != goog.getObjectByName(a);
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  a = a.split(".");
  b = b || goog.global;
  for (var c = 0; c < a.length; c++) {
    if (b = b[a[c]], null == b) {
      return null;
    }
  }
  return b;
};
goog.addDependency = function(a, b, c, d) {
  !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d);
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
    if (goog.isProvided_(a)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(a);
      }
    } else {
      if (goog.ENABLE_DEBUG_LOADER) {
        var b = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;
        try {
          goog.debugLoader_.load_(a);
        } finally {
          goog.moduleLoaderState_ = b;
        }
      }
    }
    return null;
  }
};
goog.requireType = function(a) {
  return {};
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.instance_ = void 0;
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
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRANSPILE_TO_LANGUAGE = "";
goog.TRANSPILER = "transpile.js";
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.hasBadLetScoping = null;
goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:!1, type:goog.ModuleType.GOOG};
    var c = {}, d = c;
    if ("function" === typeof a) {
      d = a.call(void 0, d);
    } else {
      if ("string" === typeof a) {
        d = goog.loadModuleFromSource_.call(void 0, d, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = goog.moduleLoaderState_.moduleName;
    if ("string" === typeof e && e) {
      goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(e, d, c !== d) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof d && null != d && Object.seal(d), goog.loadedModules_[e] = {exports:d, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
    } else {
      throw Error('Invalid module name "' + e + '"');
    }
  } finally {
    goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function(a, b) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(b));
  return a;
};
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0; b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  try {
    var b = new goog.global.XMLHttpRequest;
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return null;
  }
};
goog.transpile_ = function(a, b, c) {
  var d = goog.global.$jscomp;
  d || (goog.global.$jscomp = d = {});
  var e = d.transpile;
  if (!e) {
    var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
    if (g) {
      (function() {
        (0,eval)(g + "\n//# sourceURL=" + f);
      }).call(goog.global);
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      d = goog.global.$jscomp;
      e = d.transpile;
    }
  }
  e || (e = d.transpile = function(h, k) {
    goog.logToConsole_(k + " requires transpilation but no transpiler was found.");
    return h;
  });
  return e(a, b, c);
};
goog.typeOf = function(a) {
  var b = typeof a;
  return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if ("function" === typeof a.clone) {
      return a.clone();
    }
    b = "array" == b ? [] : {};
    for (var c in a) {
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
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
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
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = function() {
  return Date.now();
};
goog.globalEval = function(a) {
  (0,eval)(a);
};
goog.getCssName = function(a, b) {
  if ("." == String(a).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  }
  var c = function(e) {
    return goog.cssNameMapping_[e] || e;
  }, d = function(e) {
    e = e.split("-");
    for (var f = [], g = 0; g < e.length; g++) {
      f.push(c(e[g]));
    }
    return f.join("-");
  };
  d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(e) {
    return e;
  };
  a = b ? a + "-" + d(b) : d(a);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b, c) {
  c && c.html && (a = a.replace(/</g, "&lt;"));
  c && c.unescapeHtmlEntities && (a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  b && (a = a.replace(/\{\$([^}]+)}/g, function(d, e) {
    return null != b && e in b ? b[e] : d;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, !0, c);
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
  a.base = function(d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) {
      g[h - 2] = arguments[h];
    }
    return b.prototype[e].apply(d, g);
  };
};
goog.scope = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.scope is not supported within a module.");
  }
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
  return goog.defineClass.SEAL_CLASS_INSTANCES ? function() {
    var c = a.apply(this, arguments) || this;
    c[goog.UID_PROPERTY_] = c[goog.UID_PROPERTY_];
    return c;
  } : a;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.identity_ = function(a) {
  return a;
};
goog.createTrustedTypesPolicy = function(a) {
  var b = null, c = goog.global.trustedTypes;
  if (!c || !c.createPolicy) {
    return b;
  }
  try {
    b = c.createPolicy(a, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch (d) {
    goog.logToConsole_(d.message);
  }
  return b;
};
!COMPILED && goog.DEPENDENCIES_ENABLED && (goog.isEdge_ = function() {
  return !!(goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "").match(/Edge\/(\d+)(\.\d)*/i);
}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return null != a && "write" in a;
}, goog.isDocumentLoading_ = function() {
  var a = goog.global.document;
  return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState;
}, goog.findBasePath_ = function() {
  if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      var a = goog.global.document, b = a.currentScript;
      a = b ? [b] : a.getElementsByTagName("SCRIPT");
      for (b = a.length - 1; 0 <= b; --b) {
        var c = a[b].src, d = c.lastIndexOf("?");
        d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.findBasePath_(), goog.Transpiler = function() {
  this.requiresTranspilation_ = null;
  this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
}, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
  function a(f, g) {
    e ? d[f] = !0 : g() ? (c = f, d[f] = !1) : e = d[f] = !0;
  }
  function b(f) {
    try {
      return !!eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(f));
    } catch (g) {
      return !1;
    }
  }
  var c = "es3", d = {es3:!1}, e = !1;
  a("es5", function() {
    return b("[1,].length==1");
  });
  a("es6", function() {
    return goog.isEdge_() ? !1 : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  a("es7", function() {
    return b("2**3==8");
  });
  a("es8", function() {
    return b("async()=>1,1");
  });
  a("es9", function() {
    return b("({...rest}={}),1");
  });
  a("es_2019", function() {
    return b('let r;try{throw 0}catch{r="\u2029"};r');
  });
  a("es_2020", function() {
    return b("null?.x??1");
  });
  a("es_next", function() {
    return !1;
  });
  return {target:c, map:d};
}, goog.Transpiler.prototype.needsTranspile = function(a, b) {
  if ("always" == goog.TRANSPILE) {
    return !0;
  }
  if ("never" == goog.TRANSPILE) {
    return !1;
  }
  if (!this.requiresTranspilation_) {
    var c = this.createRequiresTranspilation_();
    this.requiresTranspilation_ = c.map;
    this.transpilationTarget_ = this.transpilationTarget_ || c.target;
  }
  if (a in this.requiresTranspilation_) {
    return this.requiresTranspilation_[a] ? !0 : !goog.inHtmlDocument_() || "es6" != b || "noModule" in goog.global.document.createElement("script") ? !1 : !0;
  }
  throw Error("Unknown language mode: " + a);
}, goog.Transpiler.prototype.transpile = function(a, b) {
  return goog.transpile_(a, b, this.transpilationTarget_);
}, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function(a) {
  return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.DebugLoader_ = function() {
  this.dependencies_ = {};
  this.idToPath_ = {};
  this.written_ = {};
  this.loadingDeps_ = [];
  this.depsToLoad_ = [];
  this.paused_ = !1;
  this.factory_ = new goog.DependencyFactory(goog.transpiler_);
  this.deferredCallbacks_ = {};
  this.deferredQueue_ = [];
}, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
  function c() {
    d && (goog.global.setTimeout(d, 0), d = null);
  }
  var d = b;
  if (a.length) {
    b = [];
    for (var e = 0; e < a.length; e++) {
      var f = this.getPathFromDeps_(a[e]);
      if (!f) {
        throw Error("Unregonized namespace: " + a[e]);
      }
      b.push(this.dependencies_[f]);
    }
    f = goog.require;
    var g = 0;
    for (e = 0; e < a.length; e++) {
      f(a[e]), b[e].onLoad(function() {
        ++g == a.length && c();
      });
    }
  } else {
    c();
  }
}, goog.DebugLoader_.prototype.loadClosureDeps = function() {
  this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1));
  this.loadDeps_();
}, goog.DebugLoader_.prototype.requested = function(a, b) {
  (a = this.getPathFromDeps_(a)) && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) && (b = this.deferredCallbacks_[a]) && (delete this.deferredCallbacks_[a], b());
}, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
  this.factory_ = a;
}, goog.DebugLoader_.prototype.load_ = function(a) {
  if (this.getPathFromDeps_(a)) {
    var b = this, c = [], d = function(e) {
      var f = b.getPathFromDeps_(e);
      if (!f) {
        throw Error("Bad dependency path or symbol: " + e);
      }
      if (!b.written_[f]) {
        b.written_[f] = !0;
        e = b.dependencies_[f];
        for (f = 0; f < e.requires.length; f++) {
          goog.isProvided_(e.requires[f]) || d(e.requires[f]);
        }
        c.push(e);
      }
    };
    d(a);
    a = !!this.depsToLoad_.length;
    this.depsToLoad_ = this.depsToLoad_.concat(c);
    this.paused_ || a || this.loadDeps_();
  } else {
    goog.logToConsole_("goog.require could not find: " + a);
  }
}, goog.DebugLoader_.prototype.loadDeps_ = function() {
  for (var a = this, b = this.paused_; this.depsToLoad_.length && !b;) {
    (function() {
      var c = !1, d = a.depsToLoad_.shift(), e = !1;
      a.loading_(d);
      var f = {pause:function() {
        if (c) {
          throw Error("Cannot call pause after the call to load.");
        }
        b = !0;
      }, resume:function() {
        c ? a.resume_() : b = !1;
      }, loaded:function() {
        if (e) {
          throw Error("Double call to loaded.");
        }
        e = !0;
        a.loaded_(d);
      }, pending:function() {
        for (var g = [], h = 0; h < a.loadingDeps_.length; h++) {
          g.push(a.loadingDeps_[h]);
        }
        return g;
      }, setModuleState:function(g) {
        goog.moduleLoaderState_ = {type:g, moduleName:"", declareLegacyNamespace:!1};
      }, registerEs6ModuleExports:function(g, h, k) {
        k && (goog.loadedModules_[k] = {exports:h, type:goog.ModuleType.ES6, moduleId:k || ""});
      }, registerGoogModuleExports:function(g, h) {
        goog.loadedModules_[g] = {exports:h, type:goog.ModuleType.GOOG, moduleId:g};
      }, clearModuleState:function() {
        goog.moduleLoaderState_ = null;
      }, defer:function(g) {
        if (c) {
          throw Error("Cannot register with defer after the call to load.");
        }
        a.defer_(d, g);
      }, areDepsLoaded:function() {
        return a.areDepsLoaded_(d.requires);
      }};
      try {
        d.load(f);
      } finally {
        c = !0;
      }
    })();
  }
  b && this.pause_();
}, goog.DebugLoader_.prototype.pause_ = function() {
  this.paused_ = !0;
}, goog.DebugLoader_.prototype.resume_ = function() {
  this.paused_ && (this.paused_ = !1, this.loadDeps_());
}, goog.DebugLoader_.prototype.loading_ = function(a) {
  this.loadingDeps_.push(a);
}, goog.DebugLoader_.prototype.loaded_ = function(a) {
  for (var b = 0; b < this.loadingDeps_.length; b++) {
    if (this.loadingDeps_[b] == a) {
      this.loadingDeps_.splice(b, 1);
      break;
    }
  }
  for (b = 0; b < this.deferredQueue_.length; b++) {
    if (this.deferredQueue_[b] == a.path) {
      this.deferredQueue_.splice(b, 1);
      break;
    }
  }
  if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
    for (; this.deferredQueue_.length;) {
      this.requested(this.deferredQueue_.shift(), !0);
    }
  }
  a.loaded();
}, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
  for (var b = 0; b < a.length; b++) {
    var c = this.getPathFromDeps_(a[b]);
    if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) {
      return !1;
    }
  }
  return !0;
}, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
  return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null;
}, goog.DebugLoader_.prototype.defer_ = function(a, b) {
  this.deferredCallbacks_[a.path] = b;
  this.deferredQueue_.push(a.path);
}, goog.LoadController = function() {
}, goog.LoadController.prototype.pause = function() {
}, goog.LoadController.prototype.resume = function() {
}, goog.LoadController.prototype.loaded = function() {
}, goog.LoadController.prototype.pending = function() {
}, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
}, goog.LoadController.prototype.setModuleState = function(a) {
}, goog.LoadController.prototype.clearModuleState = function() {
}, goog.LoadController.prototype.defer = function(a) {
}, goog.LoadController.prototype.areDepsLoaded = function() {
}, goog.Dependency = function(a, b, c, d, e) {
  this.path = a;
  this.relativePath = b;
  this.provides = c;
  this.requires = d;
  this.loadFlags = e;
  this.loaded_ = !1;
  this.loadCallbacks_ = [];
}, goog.Dependency.prototype.getPathName = function() {
  var a = this.path, b = a.indexOf("://");
  0 <= b && (a = a.substring(b + 3), b = a.indexOf("/"), 0 <= b && (a = a.substring(b + 1)));
  return a;
}, goog.Dependency.prototype.onLoad = function(a) {
  this.loaded_ ? a() : this.loadCallbacks_.push(a);
}, goog.Dependency.prototype.loaded = function() {
  this.loaded_ = !0;
  var a = this.loadCallbacks_;
  this.loadCallbacks_ = [];
  for (var b = 0; b < a.length; b++) {
    a[b]();
  }
}, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a) {
  var b = Math.random().toString(32);
  goog.Dependency.callbackMap_[b] = a;
  return b;
}, goog.Dependency.unregisterCallback_ = function(a) {
  delete goog.Dependency.callbackMap_[a];
}, goog.Dependency.callback_ = function(a, b) {
  if (a in goog.Dependency.callbackMap_) {
    for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++) {
      d.push(arguments[e]);
    }
    c.apply(void 0, d);
  } else {
    throw Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
  }
}, goog.Dependency.prototype.load = function(a) {
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
  } else {
    if (goog.inHtmlDocument_()) {
      var b = goog.global.document;
      if ("complete" == b.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
        if (/\bdeps.js$/.test(this.path)) {
          a.loaded();
          return;
        }
        throw Error('Cannot write "' + this.path + '" after document load');
      }
      var c = goog.getScriptNonce();
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
        var d = function(h) {
          h.readyState && "complete" != h.readyState ? h.onload = d : (goog.Dependency.unregisterCallback_(e), a.loaded());
        };
        var e = goog.Dependency.registerCallback_(d);
        c = c ? ' nonce="' + c + '"' : "";
        var f = '<script src="' + this.path + '"' + c + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e + '">\x3c/script>';
        f += "<script" + c + ">";
        f = goog.Dependency.defer_ ? f + ("document.getElementById('script-" + e + "').onload = function() {\n  goog.Dependency.callback_('" + e + "', this);\n};\n") : f + ("goog.Dependency.callback_('" + e + "', document.getElementById('script-" + e + "'));");
        f += "\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(f) : f);
      } else {
        var g = b.createElement("script");
        g.defer = goog.Dependency.defer_;
        g.async = !1;
        c && (g.nonce = c);
        goog.DebugLoader_.IS_OLD_IE_ ? (a.pause(), g.onreadystatechange = function() {
          if ("loaded" == g.readyState || "complete" == g.readyState) {
            a.loaded(), a.resume();
          }
        }) : g.onload = function() {
          g.onload = null;
          a.loaded();
        };
        g.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(g);
      }
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
    }
  }
}, goog.Es6ModuleDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
  function b(l, n) {
    var m = "", p = goog.getScriptNonce();
    p && (m = ' nonce="' + p + '"');
    l = n ? '<script type="module" crossorigin' + m + ">" + n + "\x3c/script>" : '<script type="module" crossorigin src="' + l + '"' + m + ">\x3c/script>";
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(l) : l);
  }
  function c(l, n) {
    var m = d.createElement("script");
    m.defer = !0;
    m.async = !1;
    m.type = "module";
    m.setAttribute("crossorigin", !0);
    var p = goog.getScriptNonce();
    p && (m.nonce = p);
    n ? m.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(n) : n : m.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(l) : l;
    d.head.appendChild(m);
  }
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
  } else {
    if (goog.inHtmlDocument_()) {
      var d = goog.global.document, e = this;
      if (goog.isDocumentLoading_()) {
        var f = b;
        goog.Dependency.defer_ = !0;
      } else {
        f = c;
      }
      var g = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(g);
        a.setModuleState(goog.ModuleType.ES6);
      });
      f(void 0, 'goog.Dependency.callback_("' + g + '")');
      f(this.path, void 0);
      var h = goog.Dependency.registerCallback_(function(l) {
        goog.Dependency.unregisterCallback_(h);
        a.registerEs6ModuleExports(e.path, l, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
      var k = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(k);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + k + '")');
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
    }
  }
}, goog.TransformedDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
  this.contents_ = null;
  this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a) {
  function b() {
    e.contents_ = goog.loadFileSync_(e.path);
    e.contents_ && (e.contents_ = e.transform(e.contents_), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path));
  }
  function c() {
    e.lazyFetch_ && b();
    if (e.contents_) {
      f && a.setModuleState(goog.ModuleType.ES6);
      try {
        var n = e.contents_;
        e.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(n));
        if (f) {
          var m = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        f && a.clearModuleState();
      }
      f && goog.global.$jscomp.require.ensure([e.getPathName()], function() {
        a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), m);
      });
      a.loaded();
    }
  }
  function d() {
    var n = goog.global.document, m = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(m);
      c();
    }), p = goog.getScriptNonce();
    p = "<script" + (p ? ' nonce="' + p + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + m + '");') + "\x3c/script>";
    n.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(p) : p);
  }
  var e = this;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
  } else {
    var f = this.loadFlags.module == goog.ModuleType.ES6;
    this.lazyFetch_ || b();
    var g = 1 < a.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
    g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
    if (h || g) {
      a.defer(function() {
        c();
      });
    } else {
      var k = goog.global.document;
      h = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
      if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
        goog.Dependency.defer_ = !0;
        a.pause();
        var l = k.onreadystatechange;
        k.onreadystatechange = function() {
          "interactive" == k.readyState && (k.onreadystatechange = l, c(), a.resume());
          "function" === typeof l && l.apply(void 0, arguments);
        };
      } else {
        !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c();
      }
    }
  }
}, goog.TransformedDependency.prototype.transform = function(a) {
}, goog.TranspiledDependency = function(a, b, c, d, e, f) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
  this.transpiler = f;
}, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a) {
  return this.transpiler.transpile(a, this.getPathName());
}, goog.PreTranspiledEs6ModuleDependency = function(a, b, c, d, e) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
  return a;
}, goog.GoogModuleDependency = function(a, b, c, d, e, f, g) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
  this.needsTranspile_ = f;
  this.transpiler_ = g;
}, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a) {
  this.needsTranspile_ && (a = this.transpiler_.transpile(a, this.getPathName()));
  return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a, b, c, d) {
  b = b || [];
  a = a.replace(/\\/g, "/");
  var e = goog.normalizePath_(goog.basePath + a);
  d && "boolean" !== typeof d || (d = d ? {module:goog.ModuleType.GOOG} : {});
  c = this.factory_.createDependency(e, a, b, c, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
  this.dependencies_[e] = c;
  for (c = 0; c < b.length; c++) {
    this.idToPath_[b[c]] = e;
  }
  this.idToPath_[a] = e;
}, goog.DependencyFactory = function(a) {
  this.transpiler = a;
}, goog.DependencyFactory.prototype.createDependency = function(a, b, c, d, e, f) {
  return e.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a, b, c, d, e, f, this.transpiler) : f ? new goog.TranspiledDependency(a, b, c, d, e, this.transpiler) : e.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e) : new goog.Es6ModuleDependency(a, b, c, d, e) : new goog.Dependency(a, b, c, d, e);
}, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function() {
  goog.debugLoader_.loadClosureDeps();
}, goog.setDependencyFactory = function(a) {
  goog.debugLoader_.setDependencyFactory(a);
}, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a, b) {
  goog.debugLoader_.bootstrap(a, b);
});
if (!COMPILED) {
  var isChrome87 = !1;
  try {
    isChrome87 = eval(goog.global.trustedTypes.emptyScript) !== goog.global.trustedTypes.emptyScript;
  } catch (a) {
  }
  goog.CLOSURE_EVAL_PREFILTER_ = goog.global.trustedTypes && isChrome87 && goog.createTrustedTypesPolicy("goog#base#devonly#eval") || {createScript:goog.identity_};
}
;goog.object = {};
goog.object.forEach = function(a, b, c) {
  for (const d in a) {
    b.call(c, a[d], d, a);
  }
};
goog.object.filter = function(a, b, c) {
  const d = {};
  for (const e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e]);
  }
  return d;
};
goog.object.map = function(a, b, c) {
  const d = {};
  for (const e in a) {
    d[e] = b.call(c, a[e], e, a);
  }
  return d;
};
goog.object.some = function(a, b, c) {
  for (const d in a) {
    if (b.call(c, a[d], d, a)) {
      return !0;
    }
  }
  return !1;
};
goog.object.every = function(a, b, c) {
  for (const d in a) {
    if (!b.call(c, a[d], d, a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.getCount = function(a) {
  let b = 0;
  for (const c in a) {
    b++;
  }
  return b;
};
goog.object.getAnyKey = function(a) {
  for (const b in a) {
    return b;
  }
};
goog.object.getAnyValue = function(a) {
  for (const b in a) {
    return a[b];
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b);
};
goog.object.getValues = function(a) {
  const b = [];
  let c = 0;
  for (const d in a) {
    b[c++] = a[d];
  }
  return b;
};
goog.object.getKeys = function(a) {
  const b = [];
  let c = 0;
  for (const d in a) {
    b[c++] = d;
  }
  return b;
};
goog.object.getValueByKeys = function(a, b) {
  var c = goog.isArrayLike(b);
  const d = c ? b : arguments;
  for (c = c ? 0 : 1; c < d.length; c++) {
    if (null == a) {
      return;
    }
    a = a[d[c]];
  }
  return a;
};
goog.object.containsKey = function(a, b) {
  return null !== a && b in a;
};
goog.object.containsValue = function(a, b) {
  for (const c in a) {
    if (a[c] == b) {
      return !0;
    }
  }
  return !1;
};
goog.object.findKey = function(a, b, c) {
  for (const d in a) {
    if (b.call(c, a[d], d, a)) {
      return d;
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return (b = goog.object.findKey(a, b, c)) && a[b];
};
goog.object.isEmpty = function(a) {
  for (const b in a) {
    return !1;
  }
  return !0;
};
goog.object.clear = function(a) {
  for (const b in a) {
    delete a[b];
  }
};
goog.object.remove = function(a, b) {
  let c;
  (c = b in a) && delete a[b];
  return c;
};
goog.object.add = function(a, b, c) {
  if (null !== a && b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c);
};
goog.object.get = function(a, b, c) {
  return null !== a && b in a ? a[b] : c;
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
  for (const c in a) {
    if (!(c in b) || a[c] !== b[c]) {
      return !1;
    }
  }
  for (const c in b) {
    if (!(c in a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.clone = function(a) {
  const b = {};
  for (const c in a) {
    b[c] = a[c];
  }
  return b;
};
goog.object.unsafeClone = function(a) {
  if (!a || "object" !== typeof a) {
    return a;
  }
  if ("function" === typeof a.clone) {
    return a.clone();
  }
  const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
  for (const c in a) {
    b[c] = goog.object.unsafeClone(a[c]);
  }
  return b;
};
goog.object.transpose = function(a) {
  const b = {};
  for (const c in a) {
    b[a[c]] = c;
  }
  return b;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (let f = 0; f < goog.object.PROTOTYPE_FIELDS_.length; f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
goog.object.create = function(a) {
  const b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  const c = {};
  for (let d = 0; d < b; d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
goog.object.createSet = function(a) {
  const b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  const c = {};
  for (let d = 0; d < b; d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
goog.object.createImmutableView = function(a) {
  let b = a;
  Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
  return b;
};
goog.object.isImmutableView = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
goog.object.getAllPropertyNames = function(a, b, c) {
  if (!a) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return goog.object.getKeys(a);
  }
  const d = {};
  for (; a && (a !== Object.prototype || b) && (a !== Function.prototype || c);) {
    const e = Object.getOwnPropertyNames(a);
    for (let f = 0; f < e.length; f++) {
      d[e[f]] = !0;
    }
    a = Object.getPrototypeOf(a);
  }
  return goog.object.getKeys(d);
};
goog.object.getSuperClass = function(a) {
  return (a = Object.getPrototypeOf(a.prototype)) && a.constructor;
};
var com = {cognitect:{}};
com.cognitect.transit = {};
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
  for (var b, c, d = 0, e = com.cognitect.transit.util.chars, f = ""; a.charAt(d | 0) || (e = "=", d % 1); f += e.charAt(63 & b >> 8 - d % 1 * 8)) {
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
  for (var b = 0, c, d, e = 0, f = ""; d = a.charAt(e++); ~d && (c = b % 4 ? 64 * c + d : d, b++ % 4) ? f += String.fromCharCode(255 & c >> (-2 * b & 6)) : 0) {
    d = com.cognitect.transit.util.chars.indexOf(d);
  }
  return f;
};
com.cognitect.transit.util.Uint8ToBase64 = function(a) {
  for (var b = 0, c = a.length, d = "", e; b < c;) {
    e = a.subarray(b, Math.min(b + 32768, c)), d += String.fromCharCode.apply(null, e), b += 32768;
  }
  return com.cognitect.transit.util.btoa(d);
};
com.cognitect.transit.util.Base64ToUint8 = function(a) {
  a = com.cognitect.transit.util.atob(a);
  for (var b = a.length, c = new Uint8Array(b), d = 0; d < b; d++) {
    var e = a.charCodeAt(d);
    c[d] = e;
  }
  return c;
};
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
    b = a.charAt(0);
    a = a.charAt(1);
    return b === com.cognitect.transit.delimiters.ESC ? ":" === a || "$" === a || "#" === a : !1;
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
  return com.cognitect.transit.caching.isCacheable(a, b) ? (this.cacheSize === com.cognitect.transit.caching.MAX_CACHE_SIZE ? (this.clear(), this.gen = 0, this.cache = {}) : this.idx === com.cognitect.transit.caching.MAX_CACHE_ENTRIES && this.clear(), b = this.cache[a], null == b ? (this.cache[a] = [com.cognitect.transit.caching.idxToCode(this.idx), this.gen], this.idx++, a) : b[1] != this.gen ? (b[1] = this.gen, b[0] = com.cognitect.transit.caching.idxToCode(this.idx), this.idx++, a) : b[0]) : a;
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
        for (var c = 0; c < a.length; c++) {
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
      c = 0;
      var d = com.cognitect.transit.util.objectKeys(b).length, e;
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
  for (var c = b = 0; c < a.length; ++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  com.cognitect.transit.eq.stringCodeCacheSize++;
  com.cognitect.transit.eq.stringCodeCacheSize >= com.cognitect.transit.eq.STR_CACHE_MAX && (com.cognitect.transit.eq.stringCodeCache = {}, com.cognitect.transit.eq.stringCodeCacheSize = 1);
  return com.cognitect.transit.eq.stringCodeCache[a] = b;
};
com.cognitect.transit.eq.hashMapLike = function(a) {
  var b = 0;
  if (null != a.forEach) {
    a.forEach(function(g, h, k) {
      b = (b + (com.cognitect.transit.eq.hashCode(h) ^ com.cognitect.transit.eq.hashCode(g))) % 4503599627370496;
    });
  } else {
    for (var c = com.cognitect.transit.util.objectKeys(a), d = 0; d < c.length; d++) {
      var e = c[d], f = a[e];
      b = (b + (com.cognitect.transit.eq.hashCode(e) ^ com.cognitect.transit.eq.hashCode(f))) % 4503599627370496;
    }
  }
  return b;
};
com.cognitect.transit.eq.hashArrayLike = function(a) {
  var b = 0;
  if (com.cognitect.transit.util.isArray(a)) {
    for (var c = 0; c < a.length; c++) {
      b = com.cognitect.transit.eq.hashCombine(b, com.cognitect.transit.eq.hashCode(a[c]));
    }
  } else {
    a.forEach && a.forEach(function(d, e) {
      b = com.cognitect.transit.eq.hashCombine(b, com.cognitect.transit.eq.hashCode(d));
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
goog.debug = {};
function module$contents$goog$debug$Error_DebugError(a, b) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, module$contents$goog$debug$Error_DebugError);
  } else {
    const c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  b && (this.cause = b);
  this.reportErrorToServer = !0;
}
goog.inherits(module$contents$goog$debug$Error_DebugError, Error);
module$contents$goog$debug$Error_DebugError.prototype.name = "CustomError";
goog.debug.Error = module$contents$goog$debug$Error_DebugError;
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  module$contents$goog$debug$Error_DebugError.call(this, goog.asserts.subs_(a, b));
  this.messagePattern = a;
};
goog.inherits(goog.asserts.AssertionError, module$contents$goog$debug$Error_DebugError);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
  throw a;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_ = function(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
    c += a[e] + (e < b.length ? b[e] : "%s");
  }
  return c + a[d];
};
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else {
    a && (e += ": " + a, f = b);
  }
  a = new goog.asserts.AssertionError("" + e, f || []);
  goog.asserts.errorHandler_(a);
};
goog.asserts.setErrorHandler = function(a) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertExists = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && null == a && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.fail = function(a, b) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && "number" !== typeof a && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && "string" !== typeof a && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && "function" !== typeof a && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !Array.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof a && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertElement = function(a, b, c) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
};
goog.asserts.assertFinite = function(a, b, c) {
  !goog.asserts.ENABLE_ASSERTS || "number" == typeof a && isFinite(a) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.getType_ = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
goog.reflect = {};
goog.reflect.object = function(a, b) {
  return b;
};
goog.reflect.objectProperty = function(a, b) {
  return a;
};
goog.reflect.sinkValue = function(a) {
  goog.reflect.sinkValue[" "](a);
  return a;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(a, b) {
  try {
    return goog.reflect.sinkValue(a[b]), !0;
  } catch (c) {
  }
  return !1;
};
goog.reflect.cache = function(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
};
goog.math = {};
class module$contents$goog$math$Long_Long {
  constructor(a, b) {
    this.low_ = a | 0;
    this.high_ = b | 0;
  }
  toInt() {
    return this.low_;
  }
  toNumber() {
    return this.high_ * module$contents$goog$math$Long_TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
  }
  isSafeInteger() {
    var a = this.high_ >> 21;
    return 0 == a || -1 == a && !(0 == this.low_ && -2097152 == this.high_);
  }
  toString(a) {
    a = a || 10;
    if (2 > a || 36 < a) {
      throw Error("radix out of range: " + a);
    }
    if (this.isSafeInteger()) {
      var b = this.toNumber();
      return 10 == a ? "" + b : b.toString(a);
    }
    b = 14 - (a >> 2);
    var c = Math.pow(a, b), d = module$contents$goog$math$Long_Long.fromBits(c, c / module$contents$goog$math$Long_TWO_PWR_32_DBL_);
    c = this.div(d);
    d = Math.abs(this.subtract(c.multiply(d)).toNumber());
    var e = 10 == a ? "" + d : d.toString(a);
    e.length < b && (e = "0000000000000".substr(e.length - b) + e);
    d = c.toNumber();
    return (10 == a ? d : d.toString(a)) + e;
  }
  getHighBits() {
    return this.high_;
  }
  getLowBits() {
    return this.low_;
  }
  getLowBitsUnsigned() {
    return this.low_ >>> 0;
  }
  getNumBitsAbs() {
    if (this.isNegative()) {
      return this.equals(module$contents$goog$math$Long_Long.getMinValue()) ? 64 : this.negate().getNumBitsAbs();
    }
    for (var a = 0 != this.high_ ? this.high_ : this.low_, b = 31; 0 < b && 0 == (a & 1 << b); b--) {
    }
    return 0 != this.high_ ? b + 33 : b + 1;
  }
  isZero() {
    return 0 == this.low_ && 0 == this.high_;
  }
  isNegative() {
    return 0 > this.high_;
  }
  isOdd() {
    return 1 == (this.low_ & 1);
  }
  equals(a) {
    return this.low_ == a.low_ && this.high_ == a.high_;
  }
  notEquals(a) {
    return !this.equals(a);
  }
  lessThan(a) {
    return 0 > this.compare(a);
  }
  lessThanOrEqual(a) {
    return 0 >= this.compare(a);
  }
  greaterThan(a) {
    return 0 < this.compare(a);
  }
  greaterThanOrEqual(a) {
    return 0 <= this.compare(a);
  }
  compare(a) {
    return this.high_ == a.high_ ? this.low_ == a.low_ ? 0 : this.getLowBitsUnsigned() > a.getLowBitsUnsigned() ? 1 : -1 : this.high_ > a.high_ ? 1 : -1;
  }
  negate() {
    var a = ~this.low_ + 1 | 0;
    return module$contents$goog$math$Long_Long.fromBits(a, ~this.high_ + !a | 0);
  }
  add(a) {
    var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = a.high_ >>> 16, f = a.high_ & 65535, g = a.low_ >>> 16;
    a = (this.low_ & 65535) + (a.low_ & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    b = (d >>> 16) + (b + e) & 65535;
    return module$contents$goog$math$Long_Long.fromBits((g & 65535) << 16 | a & 65535, b << 16 | d & 65535);
  }
  subtract(a) {
    return this.add(a.negate());
  }
  multiply(a) {
    if (this.isZero()) {
      return this;
    }
    if (a.isZero()) {
      return a;
    }
    var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = this.low_ & 65535, f = a.high_ >>> 16, g = a.high_ & 65535, h = a.low_ >>> 16;
    a = a.low_ & 65535;
    var k = e * a;
    var l = (k >>> 16) + d * a;
    var n = l >>> 16;
    l = (l & 65535) + e * h;
    n += l >>> 16;
    n += c * a;
    var m = n >>> 16;
    n = (n & 65535) + d * h;
    m += n >>> 16;
    n = (n & 65535) + e * g;
    m = m + (n >>> 16) + (b * a + c * h + d * g + e * f) & 65535;
    return module$contents$goog$math$Long_Long.fromBits((l & 65535) << 16 | k & 65535, m << 16 | n & 65535);
  }
  div(a) {
    if (a.isZero()) {
      throw Error("division by zero");
    }
    if (this.isNegative()) {
      if (this.equals(module$contents$goog$math$Long_Long.getMinValue())) {
        if (a.equals(module$contents$goog$math$Long_Long.getOne()) || a.equals(module$contents$goog$math$Long_Long.getNegOne())) {
          return module$contents$goog$math$Long_Long.getMinValue();
        }
        if (a.equals(module$contents$goog$math$Long_Long.getMinValue())) {
          return module$contents$goog$math$Long_Long.getOne();
        }
        var b = this.shiftRight(1).div(a).shiftLeft(1);
        if (b.equals(module$contents$goog$math$Long_Long.getZero())) {
          return a.isNegative() ? module$contents$goog$math$Long_Long.getOne() : module$contents$goog$math$Long_Long.getNegOne();
        }
        var c = this.subtract(a.multiply(b));
        return b.add(c.div(a));
      }
      return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
    }
    if (this.isZero()) {
      return module$contents$goog$math$Long_Long.getZero();
    }
    if (a.isNegative()) {
      return a.equals(module$contents$goog$math$Long_Long.getMinValue()) ? module$contents$goog$math$Long_Long.getZero() : this.div(a.negate()).negate();
    }
    var d = module$contents$goog$math$Long_Long.getZero();
    for (c = this; c.greaterThanOrEqual(a);) {
      b = Math.max(1, Math.floor(c.toNumber() / a.toNumber()));
      var e = Math.ceil(Math.log(b) / Math.LN2);
      e = 48 >= e ? 1 : Math.pow(2, e - 48);
      for (var f = module$contents$goog$math$Long_Long.fromNumber(b), g = f.multiply(a); g.isNegative() || g.greaterThan(c);) {
        b -= e, f = module$contents$goog$math$Long_Long.fromNumber(b), g = f.multiply(a);
      }
      f.isZero() && (f = module$contents$goog$math$Long_Long.getOne());
      d = d.add(f);
      c = c.subtract(g);
    }
    return d;
  }
  modulo(a) {
    return this.subtract(this.div(a).multiply(a));
  }
  not() {
    return module$contents$goog$math$Long_Long.fromBits(~this.low_, ~this.high_);
  }
  and(a) {
    return module$contents$goog$math$Long_Long.fromBits(this.low_ & a.low_, this.high_ & a.high_);
  }
  or(a) {
    return module$contents$goog$math$Long_Long.fromBits(this.low_ | a.low_, this.high_ | a.high_);
  }
  xor(a) {
    return module$contents$goog$math$Long_Long.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_);
  }
  shiftLeft(a) {
    a &= 63;
    if (0 == a) {
      return this;
    }
    var b = this.low_;
    return 32 > a ? module$contents$goog$math$Long_Long.fromBits(b << a, this.high_ << a | b >>> 32 - a) : module$contents$goog$math$Long_Long.fromBits(0, b << a - 32);
  }
  shiftRight(a) {
    a &= 63;
    if (0 == a) {
      return this;
    }
    var b = this.high_;
    return 32 > a ? module$contents$goog$math$Long_Long.fromBits(this.low_ >>> a | b << 32 - a, b >> a) : module$contents$goog$math$Long_Long.fromBits(b >> a - 32, 0 <= b ? 0 : -1);
  }
  shiftRightUnsigned(a) {
    a &= 63;
    if (0 == a) {
      return this;
    }
    var b = this.high_;
    return 32 > a ? module$contents$goog$math$Long_Long.fromBits(this.low_ >>> a | b << 32 - a, b >>> a) : 32 == a ? module$contents$goog$math$Long_Long.fromBits(b, 0) : module$contents$goog$math$Long_Long.fromBits(b >>> a - 32, 0);
  }
  static fromInt(a) {
    var b = a | 0;
    goog.asserts.assert(a === b, "value should be a 32-bit integer");
    return -128 <= b && 128 > b ? module$contents$goog$math$Long_getCachedIntValue_(b) : new module$contents$goog$math$Long_Long(b, 0 > b ? -1 : 0);
  }
  static fromNumber(a) {
    return 0 < a ? a >= module$contents$goog$math$Long_TWO_PWR_63_DBL_ ? module$contents$goog$math$Long_Long.getMaxValue() : new module$contents$goog$math$Long_Long(a, a / module$contents$goog$math$Long_TWO_PWR_32_DBL_) : 0 > a ? a <= -module$contents$goog$math$Long_TWO_PWR_63_DBL_ ? module$contents$goog$math$Long_Long.getMinValue() : (new module$contents$goog$math$Long_Long(-a, -a / module$contents$goog$math$Long_TWO_PWR_32_DBL_)).negate() : module$contents$goog$math$Long_Long.getZero();
  }
  static fromBits(a, b) {
    return new module$contents$goog$math$Long_Long(a, b);
  }
  static fromString(a, b) {
    if ("-" == a.charAt(0)) {
      return module$contents$goog$math$Long_Long.fromString(a.substring(1), b).negate();
    }
    var c = parseInt(a, b || 10);
    if (c <= module$contents$goog$math$Long_MAX_SAFE_INTEGER_) {
      return new module$contents$goog$math$Long_Long(c % module$contents$goog$math$Long_TWO_PWR_32_DBL_ | 0, c / module$contents$goog$math$Long_TWO_PWR_32_DBL_ | 0);
    }
    if (0 == a.length) {
      throw Error("number format error: empty string");
    }
    if (0 <= a.indexOf("-")) {
      throw Error('number format error: interior "-" character: ' + a);
    }
    b = b || 10;
    if (2 > b || 36 < b) {
      throw Error("radix out of range: " + b);
    }
    c = module$contents$goog$math$Long_Long.fromNumber(Math.pow(b, 8));
    for (var d = module$contents$goog$math$Long_Long.getZero(), e = 0; e < a.length; e += 8) {
      var f = Math.min(8, a.length - e), g = parseInt(a.substring(e, e + f), b);
      8 > f ? (f = module$contents$goog$math$Long_Long.fromNumber(Math.pow(b, f)), d = d.multiply(f).add(module$contents$goog$math$Long_Long.fromNumber(g))) : (d = d.multiply(c), d = d.add(module$contents$goog$math$Long_Long.fromNumber(g)));
    }
    return d;
  }
  static isStringInRange(a, b) {
    b = b || 10;
    if (2 > b || 36 < b) {
      throw Error("radix out of range: " + b);
    }
    b = "-" == a.charAt(0) ? module$contents$goog$math$Long_MIN_VALUE_FOR_RADIX_[b] : module$contents$goog$math$Long_MAX_VALUE_FOR_RADIX_[b];
    return a.length < b.length ? !0 : a.length == b.length && a <= b ? !0 : !1;
  }
  static getZero() {
    return module$contents$goog$math$Long_ZERO_;
  }
  static getOne() {
    return module$contents$goog$math$Long_ONE_;
  }
  static getNegOne() {
    return module$contents$goog$math$Long_NEG_ONE_;
  }
  static getMaxValue() {
    return module$contents$goog$math$Long_MAX_VALUE_;
  }
  static getMinValue() {
    return module$contents$goog$math$Long_MIN_VALUE_;
  }
  static getTwoPwr24() {
    return module$contents$goog$math$Long_TWO_PWR_24_;
  }
}
goog.math.Long = module$contents$goog$math$Long_Long;
const module$contents$goog$math$Long_IntCache_ = {};
function module$contents$goog$math$Long_getCachedIntValue_(a) {
  return goog.reflect.cache(module$contents$goog$math$Long_IntCache_, a, function(b) {
    return new module$contents$goog$math$Long_Long(b, 0 > b ? -1 : 0);
  });
}
const module$contents$goog$math$Long_MAX_VALUE_FOR_RADIX_ = "  111111111111111111111111111111111111111111111111111111111111111 2021110011022210012102010021220101220221 13333333333333333333333333333333 1104332401304422434310311212 1540241003031030222122211 22341010611245052052300 777777777777777777777 67404283172107811827 9223372036854775807 1728002635214590697 41a792678515120367 10b269549075433c37 4340724c6c71dc7a7 160e2ad3246366807 7fffffffffffffff 33d3d8307b214008 16agh595df825fa7 ba643dci0ffeehh 5cbfjia3fh26ja7 2heiciiie82dh97 1adaibb21dckfa7 i6k448cf4192c2 acd772jnc9l0l7 64ie1focnn5g77 3igoecjbmca687 27c48l5b37oaop 1bk39f3ah3dmq7 q1se8f0m04isb hajppbc1fc207 bm03i95hia437 7vvvvvvvvvvvv 5hg4ck9jd4u37 3tdtk1v8j6tpp 2pijmikexrxp7 1y2p0ij32e8e7".split(" "), 
module$contents$goog$math$Long_MIN_VALUE_FOR_RADIX_ = "  -1000000000000000000000000000000000000000000000000000000000000000 -2021110011022210012102010021220101220222 -20000000000000000000000000000000 -1104332401304422434310311213 -1540241003031030222122212 -22341010611245052052301 -1000000000000000000000 -67404283172107811828 -9223372036854775808 -1728002635214590698 -41a792678515120368 -10b269549075433c38 -4340724c6c71dc7a8 -160e2ad3246366808 -8000000000000000 -33d3d8307b214009 -16agh595df825fa8 -ba643dci0ffeehi -5cbfjia3fh26ja8 -2heiciiie82dh98 -1adaibb21dckfa8 -i6k448cf4192c3 -acd772jnc9l0l8 -64ie1focnn5g78 -3igoecjbmca688 -27c48l5b37oaoq -1bk39f3ah3dmq8 -q1se8f0m04isc -hajppbc1fc208 -bm03i95hia438 -8000000000000 -5hg4ck9jd4u38 -3tdtk1v8j6tpq -2pijmikexrxp8 -1y2p0ij32e8e8".split(" "), 
module$contents$goog$math$Long_MAX_SAFE_INTEGER_ = 9007199254740991, module$contents$goog$math$Long_TWO_PWR_32_DBL_ = 4294967296, module$contents$goog$math$Long_TWO_PWR_63_DBL_ = 0x7fffffffffffffff, module$contents$goog$math$Long_ZERO_ = module$contents$goog$math$Long_Long.fromBits(0, 0), module$contents$goog$math$Long_ONE_ = module$contents$goog$math$Long_Long.fromBits(1, 0), module$contents$goog$math$Long_NEG_ONE_ = module$contents$goog$math$Long_Long.fromBits(-1, -1), module$contents$goog$math$Long_MAX_VALUE_ = 
module$contents$goog$math$Long_Long.fromBits(4294967295, 2147483647), module$contents$goog$math$Long_MIN_VALUE_ = module$contents$goog$math$Long_Long.fromBits(0, 2147483648), module$contents$goog$math$Long_TWO_PWR_24_ = module$contents$goog$math$Long_Long.fromBits(16777216, 0);
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
com.cognitect.transit.types.MAX_INT = module$contents$goog$math$Long_Long.fromString("9007199254740991");
com.cognitect.transit.types.MIN_INT = module$contents$goog$math$Long_Long.fromString("-9007199254740991");
com.cognitect.transit.types.intValue = function(a) {
  if ("number" === typeof a || a instanceof module$contents$goog$math$Long_Long) {
    return a;
  }
  a = module$contents$goog$math$Long_Long.fromString(a, 10);
  return a.greaterThan(com.cognitect.transit.types.MAX_INT) || a.lessThan(com.cognitect.transit.types.MIN_INT) ? a : a.toNumber();
};
module$contents$goog$math$Long_Long.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
module$contents$goog$math$Long_Long.prototype.equiv = module$contents$goog$math$Long_Long.prototype.equiv;
module$contents$goog$math$Long_Long.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof module$contents$goog$math$Long_Long && this.equals(a);
};
module$contents$goog$math$Long_Long.prototype.com$cognitect$transit$hashCode = function() {
  return this.toInt();
};
com.cognitect.transit.types.isInteger = function(a) {
  return a instanceof module$contents$goog$math$Long_Long ? !0 : "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10);
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
  for (var e = 8 * (7 - b), f = module$contents$goog$math$Long_Long.fromInt(255).shiftLeft(e); b < c; b++, e -= 8, f = f.shiftRightUnsigned(8)) {
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
  var a = this.high, b = this.low;
  var c = com.cognitect.transit.types.hexFor(a, 0, 4) + "-";
  c += com.cognitect.transit.types.hexFor(a, 4, 6) + "-";
  c += com.cognitect.transit.types.hexFor(a, 6, 8) + "-";
  c += com.cognitect.transit.types.hexFor(b, 0, 2) + "-";
  return c += com.cognitect.transit.types.hexFor(b, 2, 8);
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
  var b, c;
  var d = b = 0;
  for (c = 24; 8 > d; d += 2, c -= 8) {
    b |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  var e = 0;
  d = 8;
  for (c = 24; 16 > d; d += 2, c -= 8) {
    e |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  var f = module$contents$goog$math$Long_Long.fromBits(e, b);
  b = 0;
  d = 16;
  for (c = 24; 24 > d; d += 2, c -= 8) {
    b |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  e = 0;
  for (c = d = 24; 32 > d; d += 2, c -= 8) {
    e |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  a = module$contents$goog$math$Long_Long.fromBits(e, b);
  return new com.cognitect.transit.types.UUID(f, a);
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
  return b && !1 === b.preferBuffers || "undefined" == typeof goog.global.Buffer ? "undefined" != typeof Uint8Array ? com.cognitect.transit.util.Base64ToUint8(a) : com.cognitect.transit.types.taggedValue("b", a) : new goog.global.Buffer(a, "base64");
};
com.cognitect.transit.types.isBinary = function(a) {
  return "undefined" != typeof goog.global.Buffer && a instanceof goog.global.Buffer ? !0 : "undefined" != typeof Uint8Array && a instanceof Uint8Array ? !0 : a instanceof com.cognitect.transit.types.TaggedValue && "b" === a.tag;
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
    var a = {value:this.type === com.cognitect.transit.types.KEYS ? this.entries[this.idx] : this.type === com.cognitect.transit.types.VALUES ? this.entries[this.idx + 1] : [this.entries[this.idx], this.entries[this.idx + 1]], done:!1};
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
    var a = {value:this.type === com.cognitect.transit.types.KEYS ? this.bucket[this.bucketIdx] : this.type === com.cognitect.transit.types.VALUES ? this.bucket[this.bucketIdx + 1] : [this.bucket[this.bucketIdx], this.bucket[this.bucketIdx + 1]], done:!1};
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
      for (var d = a.map[c], e = 0; e < d.length; e += 2) {
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
    a = a._entries;
    for (e = 0; e < a.length; e += 2) {
      if (!com.cognitect.transit.eq.equals(a[e + 1], b.get(a[e]))) {
        return !1;
      }
    }
    return !0;
  }
  if (null != b && "object" === typeof b && (e = com.cognitect.transit.util.objectKeys(b), c = e.length, a.size === c)) {
    for (d = 0; d < c; d++) {
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
  return null == a ? "null" : "array" === goog.typeOf(a) ? "[" + a.toString() + "]" : "string" === goog.typeOf(a) ? '"' + a + '"' : a.toString();
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
  for (var a = [], b = 0, c = 0; c < this._entries.length; b++, c += 2) {
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
    for (var b = 0; b < this._entries.length; b += 2) {
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
  for (var c = 0; c < this._entries.length; c += 2) {
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
  for (var b = 0; b < this._entries.length; b += 2) {
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
    for (var c = 0; c < this._entries.length; c += 2) {
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
    return a = this.backingMap.delete(a), this.size = this.backingMap.size, a;
  }
  for (var b = 0; b < this._entries.length; b += 2) {
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
  for (var b = com.cognitect.transit.eq.hashCode(a), c = this.map[b], d = 0; d < c.length; d += 2) {
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
  for (var b = this.getKeys(), c = 0; c < b.length; c++) {
    for (var d = this.map[b[c]], e = 0; e < d.length; e += 2) {
      a(d[e + 1], d[e], this);
    }
  }
};
com.cognitect.transit.types.TransitMap.prototype.forEach = com.cognitect.transit.types.TransitMap.prototype.forEach;
com.cognitect.transit.types.TransitMap.prototype.get = function(a, b) {
  var c = com.cognitect.transit.eq.hashCode(a);
  c = this.map[c];
  if (null != c) {
    for (b = 0; b < c.length; b += 2) {
      if (com.cognitect.transit.eq.equals(a, c[b])) {
        return c[b + 1];
      }
    }
  } else {
    return b;
  }
};
com.cognitect.transit.types.TransitMap.prototype.get = com.cognitect.transit.types.TransitMap.prototype.get;
com.cognitect.transit.types.TransitMap.prototype.has = function(a) {
  var b = com.cognitect.transit.eq.hashCode(a);
  b = this.map[b];
  if (null != b) {
    for (var c = 0; c < b.length; c += 2) {
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
  for (var a = this.getKeys(), b = [], c = 0; c < a.length; c++) {
    for (var d = this.map[a[c]], e = 0; e < d.length; e += 2) {
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
    c = !0;
    for (var e = 0; e < d.length; e += 2) {
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
      for (b = 0; b < d.length; b += 2) {
        var e = !1;
        for (c = 0; c < a.length; c += 2) {
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
  d = {};
  e = [];
  var f = 0;
  for (b = 0; b < a.length; b += 2) {
    c = com.cognitect.transit.eq.hashCode(a[b]);
    var g = d[c];
    if (null == g) {
      e.push(c), d[c] = [a[b], a[b + 1]], f++;
    } else {
      var h = !0;
      for (c = 0; c < g.length; c += 2) {
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
  a = this.map.delete(a);
  this.size = this.map.size;
  return a;
};
com.cognitect.transit.types.TransitSet.prototype.entries = function() {
  return this.map.entries();
};
com.cognitect.transit.types.TransitSet.prototype.entries = com.cognitect.transit.types.TransitSet.prototype.entries;
com.cognitect.transit.types.TransitSet.prototype.forEach = function(a, b) {
  var c = this;
  this.map.forEach(function(d, e, f) {
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
  for (var b = {}, c = [], d = 0, e = 0; e < a.length; e++) {
    var f = com.cognitect.transit.eq.hashCode(a[e]), g = b[f];
    if (null == g) {
      c.push(f), b[f] = [a[e], a[e]], d++;
    } else {
      f = !0;
      for (var h = 0; h < g.length; h += 2) {
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
      throw Error("Invalid special double value " + a);
  }
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
    case "s":
    case "?":
    case "i":
    case "d":
    case "b":
    case "'":
    case "array":
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
      for (d = 0; d < c.length; d++) {
        e = c[d], f.push(this.decode(e, b, !0, !1)), f.push(this.decode(a[e], b, !1, !1));
      }
      return this.mapBuilder.fromArray(f, a);
    }
    f = this.mapBuilder.init(a);
    for (d = 0; d < c.length; d++) {
      e = c[d], f = this.mapBuilder.add(f, this.decode(e, b, !0, !1), this.decode(a[e], b, !1, !1), a);
    }
    return this.mapBuilder.finalize(f, a);
  }
  f = [];
  for (d = 0; d < c.length; d++) {
    e = c[d], f.push(this.decode(e, b, !0, !1)), f.push(this.decode(a[e], b, !1, !1));
  }
  return com.cognitect.transit.types.map(f, !1);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeArrayHash = function(a, b, c, d) {
  if (this.mapBuilder) {
    if (a.length < 2 * com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD + 1 && this.mapBuilder.fromArray) {
      d = [];
      for (c = 1; c < a.length; c += 2) {
        d.push(this.decode(a[c], b, !0, !1)), d.push(this.decode(a[c + 1], b, !1, !1));
      }
      return this.mapBuilder.fromArray(d, a);
    }
    d = this.mapBuilder.init(a);
    for (c = 1; c < a.length; c += 2) {
      d = this.mapBuilder.add(d, this.decode(a[c], b, !0, !1), this.decode(a[c + 1], b, !1, !1), a);
    }
    return this.mapBuilder.finalize(d, a);
  }
  d = [];
  for (c = 1; c < a.length; c += 2) {
    d.push(this.decode(a[c], b, !0, !1)), d.push(this.decode(a[c + 1], b, !1, !1));
  }
  return com.cognitect.transit.types.map(d, !1);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeArray = function(a, b, c, d) {
  if (d) {
    var e = [];
    for (d = 0; d < a.length; d++) {
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
      for (d = 0; d < a.length; d++) {
        e.push(this.decode(a[d], b, c, !1));
      }
      return this.arrayBuilder.fromArray(e, a);
    }
    e = this.arrayBuilder.init(a);
    for (d = 0; d < a.length; d++) {
      e = this.arrayBuilder.add(e, this.decode(a[d], b, c, !1), a);
    }
    return this.arrayBuilder.finalize(e, a);
  }
  e = [];
  for (d = 0; d < a.length; d++) {
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
  a = a.toString();
  for (var c = a.length; c < b; c++) {
    a = "0" + a;
  }
  return a;
};
com.cognitect.transit.handlers.stringableKeys = function(a) {
  a = com.cognitect.transit.util.objectKeys(a);
  for (var b = 0; b < a.length; b++) {
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
  a.forEach(function(c, d) {
    b.push(c);
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
  a.set(module$contents$goog$math$Long_Long, new com.cognitect.transit.handlers.IntegerHandler);
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
  "undefined" != typeof goog.global.Buffer && a.set(goog.global.Buffer, new com.cognitect.transit.handlers.BufferHandler);
  "undefined" != typeof Uint8Array && a.set(Uint8Array, new com.cognitect.transit.handlers.Uint8ArrayHandler);
  return a;
};
com.cognitect.transit.handlers.Handlers = function() {
  this.handlers = {};
  com.cognitect.transit.handlers.defaultHandlers(this);
};
com.cognitect.transit.handlers.Handlers.prototype.get = function(a) {
  a = "string" === typeof a ? this.handlers[a] : this.handlers[com.cognitect.transit.handlers.typeTag(a)];
  return null != a ? a : this.handlers["default"];
};
com.cognitect.transit.handlers.Handlers.prototype.get = com.cognitect.transit.handlers.Handlers.prototype.get;
com.cognitect.transit.handlers.validTag = function(a) {
  switch(a) {
    case "null":
    case "string":
    case "boolean":
    case "number":
    case "array":
    case "map":
      return !1;
  }
  return !0;
};
com.cognitect.transit.handlers.Handlers.prototype.set = function(a, b) {
  "string" === typeof a && com.cognitect.transit.handlers.validTag(a) ? this.handlers[a] = b : this.handlers[com.cognitect.transit.handlers.typeTag(a)] = b;
};
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
  this.transform = this.opts.transform || null;
  this.handlers = new com.cognitect.transit.handlers.Handlers;
  if (a = this.opts.handlers) {
    if (com.cognitect.transit.util.isArray(a) || !a.forEach) {
      throw Error('transit writer "handlers" option must be a map');
    }
    var b = this;
    a.forEach(function(c, d) {
      if (void 0 !== d) {
        b.handlers.set(d, c);
      } else {
        throw Error("Cannot create handler for JavaScript undefined");
      }
    });
  }
  this.handlerForForeign = this.opts.handlerForForeign;
  this.unpack = this.opts.unpack || function(c) {
    return com.cognitect.transit.types.isArrayMap(c) && null === c.backingMap ? c._entries : !1;
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
  return Infinity === a ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "INF", b, c) : -Infinity === a ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "-INF", b, c) : isNaN(a) ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "NaN", b, c) : b || "string" === typeof a || a instanceof module$contents$goog$math$Long_Long ? this.emitString(com.cognitect.transit.delimiters.ESC, "i", a.toString(), b, c) : a;
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
    for (var e = 0; e < b.length; e++) {
      d.push(com.cognitect.transit.impl.writer.marshal(a, b[e], !1, c));
    }
  } else {
    b.forEach(function(f, g) {
      d.push(com.cognitect.transit.impl.writer.marshal(a, f, !1, c));
    });
  }
  return d;
};
com.cognitect.transit.impl.writer.emitArray = function(a, b, c, d) {
  return com.cognitect.transit.impl.writer.emitObjects(a, b, d);
};
com.cognitect.transit.impl.writer.isStringableKey = function(a, b) {
  return "string" !== typeof b ? (a = a.handler(b)) && 1 === a.tag(b).length : !0;
};
com.cognitect.transit.impl.writer.stringableKeys = function(a, b) {
  var c = a.unpack(b), d = !0;
  if (c) {
    for (b = 0; b < c.length && (d = com.cognitect.transit.impl.writer.isStringableKey(a, c[b]), d); b += 2) {
    }
    return d;
  }
  if (b.keys) {
    c = b.keys();
    var e = null;
    if (c.next) {
      for (e = c.next(); !e.done;) {
        d = com.cognitect.transit.impl.writer.isStringableKey(a, e.value);
        if (!d) {
          break;
        }
        e = c.next();
      }
      return d;
    }
  }
  if (b.forEach) {
    return b.forEach(function(f, g) {
      d = d && com.cognitect.transit.impl.writer.isStringableKey(a, g);
    }), d;
  }
  throw Error("Cannot walk keys of object type " + com.cognitect.transit.handlers.constructor(b).name);
};
com.cognitect.transit.impl.writer.isForeignObject = function(a) {
  if (a.constructor.transit$isObject) {
    return !0;
  }
  var b = a.constructor.toString();
  b = b.substr(9);
  b = b.substr(0, b.indexOf("("));
  b = "Object" == b;
  "undefined" != typeof Object.defineProperty ? Object.defineProperty(a.constructor, "transit$isObject", {value:b, enumerable:!1}) : a.constructor.transit$isObject = b;
  return b;
};
com.cognitect.transit.impl.writer.emitMap = function(a, b, c, d) {
  var e = null, f = null, g = null;
  e = null;
  c = 0;
  if (b.constructor === Object || null != b.forEach || a.handlerForForeign && com.cognitect.transit.impl.writer.isForeignObject(b)) {
    if (a.verbose) {
      if (null != b.forEach) {
        if (com.cognitect.transit.impl.writer.stringableKeys(a, b)) {
          var h = {};
          b.forEach(function(k, l) {
            h[com.cognitect.transit.impl.writer.marshal(a, l, !0, !1)] = com.cognitect.transit.impl.writer.marshal(a, k, !1, d);
          });
        } else {
          e = a.unpack(b);
          f = [];
          g = a.emitString(com.cognitect.transit.delimiters.ESC_TAG, "cmap", "", !0, d);
          if (e) {
            for (; c < e.length; c += 2) {
              f.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !1, !1)), f.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
            }
          } else {
            b.forEach(function(k, l) {
              f.push(com.cognitect.transit.impl.writer.marshal(a, l, !1, !1));
              f.push(com.cognitect.transit.impl.writer.marshal(a, k, !1, d));
            });
          }
          h = {};
          h[g] = f;
        }
      } else {
        for (e = com.cognitect.transit.util.objectKeys(b), h = {}; c < e.length; c++) {
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
          for (; c < e.length; c += 2) {
            h.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !0, d)), h.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
          }
        } else {
          b.forEach(function(k, l) {
            h.push(com.cognitect.transit.impl.writer.marshal(a, l, !0, d));
            h.push(com.cognitect.transit.impl.writer.marshal(a, k, !1, d));
          });
        }
        return h;
      }
      e = a.unpack(b);
      f = [];
      g = a.emitString(com.cognitect.transit.delimiters.ESC_TAG, "cmap", "", !0, d);
      if (e) {
        for (; c < e.length; c += 2) {
          f.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !1, d)), f.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
        }
      } else {
        b.forEach(function(k, l) {
          f.push(com.cognitect.transit.impl.writer.marshal(a, l, !1, d));
          f.push(com.cognitect.transit.impl.writer.marshal(a, k, !1, d));
        });
      }
      return [g, f];
    }
    h = ["^ "];
    for (e = com.cognitect.transit.util.objectKeys(b); c < e.length; c++) {
      h.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !0, d)), h.push(com.cognitect.transit.impl.writer.marshal(a, b[e[c]], !1, d));
    }
    return h;
  }
  if (null != a.objectBuilder) {
    return a.objectBuilder(b, function(k) {
      return com.cognitect.transit.impl.writer.marshal(a, k, !0, d);
    }, function(k) {
      return com.cognitect.transit.impl.writer.marshal(a, k, !1, d);
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
  null !== a.transform && (b = a.transform(b));
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
  a = a.handler(b) || (a.handlerForForeign ? a.handlerForForeign(b, a.handlers) : null);
  if (null != a) {
    return 1 === a.tag(b).length ? com.cognitect.transit.types.quoted(b) : b;
  }
  a = com.cognitect.transit.handlers.constructor(b).name;
  var c = Error("Cannot write " + a);
  c.data = {obj:b, type:a};
  throw c;
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
  b = b || {};
  var c = b.asMapKey || !1, d = this._marshaller.verbose ? !1 : this.cache;
  a = !1 === b.marshalTop ? com.cognitect.transit.impl.writer.marshal(this._marshaller, a, c, d) : com.cognitect.transit.impl.writer.marshalTop(this._marshaller, a, c, d);
  null != this.cache && this.cache.clear();
  return a;
};
com.cognitect.transit.impl.writer.Writer.prototype.write = com.cognitect.transit.impl.writer.Writer.prototype.write;
com.cognitect.transit.impl.writer.Writer.prototype.register = function(a, b) {
  this._marshaller.registerHandler(a, b);
};
com.cognitect.transit.impl.writer.Writer.prototype.register = com.cognitect.transit.impl.writer.Writer.prototype.register;
var TRANSIT_DEV = !0, TRANSIT_NODE_TARGET = !0, TRANSIT_BROWSER_TARGET = !1, TRANSIT_BROWSER_AMD_TARGET = !1;
com.cognitect.transit.reader = function(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    return a = new com.cognitect.transit.impl.reader.JSONUnmarshaller(b), new com.cognitect.transit.impl.reader.Reader(a, b);
  }
  throw Error("Cannot create reader of type " + a);
};
com.cognitect.transit.writer = function(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    return "json-verbose" === a && (null == b && (b = {}), b.verbose = !0), a = new com.cognitect.transit.impl.writer.JSONMarshaller(b), new com.cognitect.transit.impl.writer.Writer(a, b);
  }
  b = Error('Type must be "json"');
  b.data = {type:a};
  throw b;
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
  a.forEach(function(c, d) {
    if ("string" !== typeof d) {
      throw Error("Cannot convert map with non-string keys");
    }
    b[d] = c;
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



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(72),
    getValue = __webpack_require__(77);

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(170),
    findIndex = __webpack_require__(171);

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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    getRawTag = __webpack_require__(73),
    objectToString = __webpack_require__(74);

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


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseUpdate = __webpack_require__(176),
    castFunction = __webpack_require__(177);

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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isLength = __webpack_require__(31);

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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(25);

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


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    getPrototype = __webpack_require__(152),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(36),
    baseIteratee = __webpack_require__(18),
    baseMap = __webpack_require__(167),
    isArray = __webpack_require__(1);

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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(80),
    baseKeys = __webpack_require__(86),
    isArrayLike = __webpack_require__(13);

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


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(89),
    baseMatchesProperty = __webpack_require__(133),
    identity = __webpack_require__(8),
    isArray = __webpack_require__(1),
    property = __webpack_require__(139);

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


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(91),
    listCacheDelete = __webpack_require__(92),
    listCacheGet = __webpack_require__(93),
    listCacheHas = __webpack_require__(94),
    listCacheSet = __webpack_require__(95);

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


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(32);

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


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(109);

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


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(24),
    toKey = __webpack_require__(14);

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


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(35),
    stringToPath = __webpack_require__(134),
    toString = __webpack_require__(58);

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


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(39),
    baseForOwn = __webpack_require__(44),
    baseIteratee = __webpack_require__(18);

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


/***/ }),
/* 27 */
/***/ (function(module, exports) {

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


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(82),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 30 */
/***/ (function(module, exports) {

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
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

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


/***/ }),
/* 32 */
/***/ (function(module, exports) {

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


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(101),
    mapCacheDelete = __webpack_require__(108),
    mapCacheGet = __webpack_require__(110),
    mapCacheHas = __webpack_require__(111),
    mapCacheSet = __webpack_require__(112);

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


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(25);

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


/***/ }),
/* 36 */
/***/ (function(module, exports) {

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


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(142),
    castPath = __webpack_require__(24),
    isIndex = __webpack_require__(30),
    isObject = __webpack_require__(7),
    toKey = __webpack_require__(14);

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

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

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


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(146);

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


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(40);

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


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObject = __webpack_require__(7);

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


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

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


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(78),
    keys = __webpack_require__(17);

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


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(83);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(84),
    baseUnary = __webpack_require__(48),
    nodeUtil = __webpack_require__(85);

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


/***/ }),
/* 48 */
/***/ (function(module, exports) {

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


/***/ }),
/* 49 */
/***/ (function(module, exports) {

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


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19),
    stackClear = __webpack_require__(96),
    stackDelete = __webpack_require__(97),
    stackGet = __webpack_require__(98),
    stackHas = __webpack_require__(99),
    stackSet = __webpack_require__(100);

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


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(113),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(53),
    arraySome = __webpack_require__(116),
    cacheHas = __webpack_require__(54);

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
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
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


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(34),
    setCacheAdd = __webpack_require__(114),
    setCacheHas = __webpack_require__(115);

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


/***/ }),
/* 54 */
/***/ (function(module, exports) {

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


/***/ }),
/* 55 */
/***/ (function(module, exports) {

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


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

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


/***/ }),
/* 57 */
/***/ (function(module, exports) {

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


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    arrayMap = __webpack_require__(36),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(25);

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


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(137),
    hasPath = __webpack_require__(138);

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


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(148);

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


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(149),
    shortOut = __webpack_require__(151);

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


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(64),
    baseIsNaN = __webpack_require__(155),
    strictIndexOf = __webpack_require__(156);

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


/***/ }),
/* 64 */
/***/ (function(module, exports) {

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


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(143),
    flatRest = __webpack_require__(145);

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


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(153),
    baseRest = __webpack_require__(158),
    isArrayLikeObject = __webpack_require__(159);

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


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(59),
    castSlice = __webpack_require__(160),
    charsEndIndex = __webpack_require__(162),
    stringToArray = __webpack_require__(163),
    toString = __webpack_require__(58),
    trimmedEndIndex = __webpack_require__(65);

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
    return string.slice(0, trimmedEndIndex(string) + 1);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

  return castSlice(strSymbols, 0, end).join('');
}

module.exports = trimEnd;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

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


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__70__;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__71__;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isMasked = __webpack_require__(75),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(43);

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


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12);

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


/***/ }),
/* 74 */
/***/ (function(module, exports) {

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


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(76);

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


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

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


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(79);

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


/***/ }),
/* 79 */
/***/ (function(module, exports) {

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


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(81),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(45),
    isIndex = __webpack_require__(30),
    isTypedArray = __webpack_require__(47);

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


/***/ }),
/* 81 */
/***/ (function(module, exports) {

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


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 83 */
/***/ (function(module, exports) {

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


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isLength = __webpack_require__(31),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(42);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)(module)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(87),
    nativeKeys = __webpack_require__(88);

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


/***/ }),
/* 87 */
/***/ (function(module, exports) {

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


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(49);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(90),
    getMatchData = __webpack_require__(132),
    matchesStrictComparable = __webpack_require__(57);

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


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(50),
    baseIsEqual = __webpack_require__(51);

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


/***/ }),
/* 91 */
/***/ (function(module, exports) {

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


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19);

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


/***/ }),
/* 97 */
/***/ (function(module, exports) {

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


/***/ }),
/* 98 */
/***/ (function(module, exports) {

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


/***/ }),
/* 99 */
/***/ (function(module, exports) {

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


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19),
    Map = __webpack_require__(33),
    MapCache = __webpack_require__(34);

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


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(102),
    ListCache = __webpack_require__(19),
    Map = __webpack_require__(33);

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


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(103),
    hashDelete = __webpack_require__(104),
    hashGet = __webpack_require__(105),
    hashHas = __webpack_require__(106),
    hashSet = __webpack_require__(107);

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


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

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


/***/ }),
/* 104 */
/***/ (function(module, exports) {

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


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

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


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

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


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

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


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

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


/***/ }),
/* 109 */
/***/ (function(module, exports) {

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


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

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


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

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


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

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


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(50),
    equalArrays = __webpack_require__(52),
    equalByTag = __webpack_require__(117),
    equalObjects = __webpack_require__(121),
    getTag = __webpack_require__(127),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(45),
    isTypedArray = __webpack_require__(47);

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


/***/ }),
/* 114 */
/***/ (function(module, exports) {

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


/***/ }),
/* 115 */
/***/ (function(module, exports) {

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


/***/ }),
/* 116 */
/***/ (function(module, exports) {

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


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    Uint8Array = __webpack_require__(118),
    eq = __webpack_require__(32),
    equalArrays = __webpack_require__(52),
    mapToArray = __webpack_require__(119),
    setToArray = __webpack_require__(120);

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


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

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


/***/ }),
/* 120 */
/***/ (function(module, exports) {

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


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(122);

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
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
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


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(123),
    getSymbols = __webpack_require__(124),
    keys = __webpack_require__(17);

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


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(55),
    isArray = __webpack_require__(1);

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


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(125),
    stubArray = __webpack_require__(126);

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


/***/ }),
/* 125 */
/***/ (function(module, exports) {

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


/***/ }),
/* 126 */
/***/ (function(module, exports) {

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


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(128),
    Map = __webpack_require__(33),
    Promise = __webpack_require__(129),
    Set = __webpack_require__(130),
    WeakMap = __webpack_require__(131),
    baseGetTag = __webpack_require__(10),
    toSource = __webpack_require__(43);

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


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(56),
    keys = __webpack_require__(17);

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


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(51),
    get = __webpack_require__(0),
    hasIn = __webpack_require__(60),
    isKey = __webpack_require__(35),
    isStrictComparable = __webpack_require__(56),
    matchesStrictComparable = __webpack_require__(57),
    toKey = __webpack_require__(14);

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


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(135);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

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
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(136);

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


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(34);

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


/***/ }),
/* 137 */
/***/ (function(module, exports) {

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


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(24),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(30),
    isLength = __webpack_require__(31),
    toKey = __webpack_require__(14);

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


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(140),
    basePropertyDeep = __webpack_require__(141),
    isKey = __webpack_require__(35),
    toKey = __webpack_require__(14);

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


/***/ }),
/* 140 */
/***/ (function(module, exports) {

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


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(23);

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


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(39),
    eq = __webpack_require__(32);

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


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(144),
    hasIn = __webpack_require__(60);

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


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(23),
    baseSet = __webpack_require__(37),
    castPath = __webpack_require__(24);

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


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(38),
    overRest = __webpack_require__(61),
    setToString = __webpack_require__(62);

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


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(55),
    isFlattenable = __webpack_require__(147);

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


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    isArguments = __webpack_require__(29),
    isArray = __webpack_require__(1);

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


/***/ }),
/* 148 */
/***/ (function(module, exports) {

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


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(150),
    defineProperty = __webpack_require__(40),
    identity = __webpack_require__(8);

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


/***/ }),
/* 150 */
/***/ (function(module, exports) {

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


/***/ }),
/* 151 */
/***/ (function(module, exports) {

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


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(49);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(53),
    arrayIncludes = __webpack_require__(154),
    arrayIncludesWith = __webpack_require__(157),
    arrayMap = __webpack_require__(36),
    baseUnary = __webpack_require__(48),
    cacheHas = __webpack_require__(54);

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


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(63);

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


/***/ }),
/* 155 */
/***/ (function(module, exports) {

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


/***/ }),
/* 156 */
/***/ (function(module, exports) {

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


/***/ }),
/* 157 */
/***/ (function(module, exports) {

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


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(8),
    overRest = __webpack_require__(61),
    setToString = __webpack_require__(62);

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


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(13),
    isObjectLike = __webpack_require__(6);

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


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(161);

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


/***/ }),
/* 161 */
/***/ (function(module, exports) {

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


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(63);

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


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(164),
    hasUnicode = __webpack_require__(165),
    unicodeToArray = __webpack_require__(166);

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


/***/ }),
/* 164 */
/***/ (function(module, exports) {

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


/***/ }),
/* 165 */
/***/ (function(module, exports) {

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


/***/ }),
/* 166 */
/***/ (function(module, exports) {

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


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(168),
    isArrayLike = __webpack_require__(13);

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


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(44),
    createBaseEach = __webpack_require__(169);

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


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(13);

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


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(18),
    isArrayLike = __webpack_require__(13),
    keys = __webpack_require__(17);

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


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(64),
    baseIteratee = __webpack_require__(18),
    toInteger = __webpack_require__(172);

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


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(173);

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


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(174);

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


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(175),
    isObject = __webpack_require__(7),
    isSymbol = __webpack_require__(25);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

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
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(65);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(23),
    baseSet = __webpack_require__(37);

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


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(8);

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


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createInstance", function() { return /* binding */ src_createInstance; });
__webpack_require__.d(__webpack_exports__, "createMultitenantInstance", function() { return /* binding */ src_createMultitenantInstance; });
__webpack_require__.d(__webpack_exports__, "types", function() { return /* reexport */ types_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "tokenStore", function() { return /* binding */ src_tokenStore; });
__webpack_require__.d(__webpack_exports__, "transit", function() { return /* binding */ src_transit; });
__webpack_require__.d(__webpack_exports__, "util", function() { return /* binding */ util; });

// NAMESPACE OBJECT: ./src/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "UUID", function() { return UUID; });
__webpack_require__.d(types_namespaceObject, "LatLng", function() { return LatLng; });
__webpack_require__.d(types_namespaceObject, "LatLngBounds", function() { return LatLngBounds; });
__webpack_require__.d(types_namespaceObject, "Money", function() { return Money; });
__webpack_require__.d(types_namespaceObject, "BigDecimal", function() { return BigDecimal; });
__webpack_require__.d(types_namespaceObject, "toType", function() { return toType; });
__webpack_require__.d(types_namespaceObject, "replacer", function() { return replacer; });
__webpack_require__.d(types_namespaceObject, "reviver", function() { return reviver; });

// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(26);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(2);
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(0);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(66);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(15);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);

// EXTERNAL MODULE: ./node_modules/lodash/without.js
var without = __webpack_require__(67);
var without_default = /*#__PURE__*/__webpack_require__.n(without);

// EXTERNAL MODULE: ./node_modules/lodash/trimEnd.js
var trimEnd = __webpack_require__(68);
var trimEnd_default = /*#__PURE__*/__webpack_require__.n(trimEnd);

// CONCATENATED MODULE: ./src/utils.js




function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 Null-safe version of Object.entries
 */
var entries = function entries(obj) {
  if (obj == null) {
    return [];
  }

  return Object.entries(obj);
};
/**
   Take URL and remove the trailing slashes.

   Example:

   ```
   trimEndSlash("http://www.api.com") => "http://www.api.com"
   trimEndSlash("http://www.api.com/") => "http://www.api.com"
   trimEndSlash("http://www.api.com//") => "http://www.api.com"
   ```
 */

var utils_trimEndSlash = function trimEndSlash(url) {
  return trimEnd_default()(url, '/');
};
var utils_fnPath = function fnPath(path) {
  return without_default()(path.split('/'), '').map(function (part) {
    return part.replace(/_\w/g, function (m) {
      return m[1].toUpperCase();
    });
  });
};
var formData = function formData(params) {
  return entries(params).reduce(function (pairs, entry) {
    var _entry = _slicedToArray(entry, 2),
        k = _entry[0],
        v = _entry[1];

    pairs.push("".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v)));
    return pairs;
  }, []).join('&');
};
/**
   Serialize a single attribute in an object query parameter.
*/

var utils_serializeAttribute = function serializeAttribute(attribute) {
  if (isPlainObject_default()(attribute)) {
    throw new Error('Nested object in query parameter.');
  } else if (Array.isArray(attribute)) {
    return attribute.join(',');
  } else {
    return attribute;
  }
};
/**
   Serializes an object into a Sharetribe API query parameter value format. Null and
   undefined object attributes are dropped.

   Example:

   {
     a: 'foo',
     b: '150',
     c: null,
     d: ['foo', 'bar'],
   }

   =>

   'a:foo;b:150;d:foo,bar'
*/


var utils_objectQueryString = function objectQueryString(obj) {
  if (!isPlainObject_default()(obj)) {
    throw new Error('Parameter not an object.');
  }

  return Object.entries(obj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        v = _ref2[1];

    return v !== null && v !== undefined;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    return "".concat(k, ":").concat(utils_serializeAttribute(v));
  }).join(';');
};
/**
   Compute longest common path prefix for an array of path parts separated by "/".
   The input array must be sorted lexically.
*/

var longestPathPrefix = function longestPathPrefix(sortedPathParts) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (sortedPathParts.length === 0) {
    return '';
  }

  if (sortedPathParts.length === 1) {
    var comps = sortedPathParts[0];

    if (comps.length === 1) {
      return '';
    }

    var path = comps.slice(0, comps.length - 1).join('/');
    return "".concat(path, "/");
  }

  var l = sortedPathParts.length,
      first = sortedPathParts[0],
      last = sortedPathParts[l - 1];

  var _first = _toArray(first),
      firstCurrent = _first[0],
      firstRest = _first.slice(1);

  var _last = _toArray(last),
      lastCurrent = _last[0],
      lastRest = _last.slice(1);

  if (firstRest.length > 0 && lastRest.length > 0 && firstCurrent === lastCurrent) {
    return longestPathPrefix([firstRest, lastRest], "".concat(result).concat(firstCurrent, "/"));
  }

  return result;
};
/**
   Provided a list of paths, e.g. [content/page.json, content/init.json],
   return a canonical structure for those paths, which consists of a
   common prefix and a list of sorted relative paths, e.g.:
     {
       pathPrefix: 'content/',
       relativePaths: ['init.json', 'translations.json']
     }
*/


var canonicalAssetPaths = function canonicalAssetPaths(paths) {
  var sortedPaths = _toConsumableArray(new Set(paths)).map(function (p) {
    return p[0] === '/' ? p.slice(1) : p;
  }).sort();

  var sortedPathParts = _toConsumableArray(sortedPaths).map(function (p) {
    return p.split('/');
  });

  var pathPrefix = longestPathPrefix(sortedPathParts);
  var prefixLength = pathPrefix.length;
  var relativePaths = sortedPaths.map(function (p) {
    return p.substring(prefixLength);
  });
  return {
    pathPrefix: pathPrefix,
    relativePaths: relativePaths
  };
};
var consoleAvailable = typeof console !== 'undefined';
var deprecated = function deprecated(msg, disable) {
  /* eslint-disable no-console */

  /* eslint-disable no-undef */
  if (consoleAvailable && console.warn && !disable) {
    console.warn(msg);
  }
};
// CONCATENATED MODULE: ./src/endpoints.js
/**
   List of Marketplace API endpoints

   All Marketplace API endpoints will create a new function to SDK. The SDK
   function name is derived from the path by camel-casing it, e.g.
   `current_user/change_password` becomes `sdk.currentUser.changePassword(...)`.

   Fields:
   - path: URL path to the endpoint
   - method: HTTP method

 */
var marketplaceApi = [{
  path: 'marketplace/show',
  method: 'get'
}, {
  path: 'users/show',
  method: 'get'
}, {
  path: 'current_user/show',
  method: 'get'
}, {
  path: 'current_user/create',
  method: 'post'
}, {
  path: 'current_user/create_with_idp',
  method: 'post'
}, {
  path: 'current_user/update_profile',
  method: 'post'
}, {
  path: 'current_user/change_email',
  method: 'post'
}, {
  path: 'current_user/change_password',
  method: 'post'
}, {
  path: 'current_user/delete',
  method: 'post'
}, {
  path: 'current_user/verify_email',
  method: 'post'
}, {
  path: 'current_user/send_verification_email',
  method: 'post'
}, {
  path: 'current_user/create_stripe_account',
  method: 'post'
}, {
  path: 'current_user/update_stripe_account',
  method: 'post'
}, {
  path: 'current_user/delete_stripe_account',
  method: 'post'
}, {
  path: 'password_reset/request',
  method: 'post'
}, {
  path: 'password_reset/reset',
  method: 'post'
}, {
  path: 'listings/show',
  method: 'get'
}, {
  path: 'own_listings/show',
  method: 'get'
}, {
  path: 'listings/query',
  method: 'get'
}, {
  path: 'own_listings/query',
  method: 'get'
}, {
  path: 'listings/search',
  method: 'get'
}, {
  path: 'own_listings/create',
  method: 'post'
}, {
  path: 'own_listings/create_draft',
  method: 'post'
}, {
  path: 'own_listings/publish_draft',
  method: 'post'
}, {
  path: 'own_listings/discard_draft',
  method: 'post'
}, {
  path: 'own_listings/update',
  method: 'post'
}, {
  path: 'own_listings/open',
  method: 'post'
}, {
  path: 'own_listings/close',
  method: 'post'
}, {
  path: 'own_listings/add_image',
  method: 'post'
}, {
  path: 'availability_exceptions/create',
  method: 'post'
}, {
  path: 'availability_exceptions/delete',
  method: 'post'
}, {
  path: 'availability_exceptions/query',
  method: 'get'
}, {
  path: 'images/upload',
  method: 'post',
  multipart: true
}, {
  path: 'transactions/initiate',
  method: 'post'
}, {
  path: 'transactions/initiate_speculative',
  method: 'post'
}, {
  path: 'transactions/transition',
  method: 'post'
}, {
  path: 'transactions/transition_speculative',
  method: 'post'
}, {
  path: 'transactions/query',
  method: 'get'
}, {
  path: 'transactions/show',
  method: 'get'
}, {
  path: 'process_transitions/query',
  method: 'get'
}, {
  path: 'bookings/query',
  method: 'get'
}, {
  path: 'messages/query',
  method: 'get'
}, {
  path: 'messages/send',
  method: 'post'
}, {
  path: 'reviews/query',
  method: 'get'
}, {
  path: 'reviews/show',
  method: 'get'
}, {
  path: 'timeslots/query',
  method: 'get'
}, {
  path: 'stripe_account/create',
  method: 'post'
}, {
  path: 'stripe_account/fetch',
  method: 'get'
}, {
  path: 'stripe_account/update',
  method: 'post'
}, {
  path: 'stripe_account_links/create',
  method: 'post'
}, {
  path: 'stripe_persons/create',
  method: 'post'
}, {
  path: 'stripe_setup_intents/create',
  method: 'post'
}, {
  path: 'stripe_customer/create',
  method: 'post'
}, {
  path: 'stripe_customer/add_payment_method',
  method: 'post'
}, {
  path: 'stripe_customer/delete_payment_method',
  method: 'post'
}, {
  path: 'stock_adjustments/query',
  method: 'get'
}, {
  path: 'stock_adjustments/create',
  method: 'post'
}, {
  path: 'stock/compare_and_set',
  method: 'post'
}, {
  path: 'sitemap_data/query_listings',
  method: 'get'
}, {
  path: 'sitemap_data/query_assets',
  method: 'get'
}];
/**
   List of Auth API endpoints

   Auth API endpoints do _not_ create SDK functions the same way Marketplace API
   endpoints do. Instead, there are special SDK functions like `sdk.login()` and
   `sdk.logout()` that call these Auth API endpoints.

   In addition, some of the interceptors will also call these endpoints
   internally. For example, if a request fails due to expired access token,
   SDK's auth interceptors will call `token` endpoints to refresh the token.

   Fields:
   - path: URL path to the endpoint
   - method: HTTP method
 */

var authApi = [{
  path: 'token',
  method: 'post'
}, {
  path: 'revoke',
  method: 'post'
}, {
  path: 'auth_with_idp',
  method: 'post'
}];
/**
   List of Assets API endpoints

   Assets API endpoints do _not_ create SDK functions the same way Marketplace API
   endpoints do. Instead, there are special SDK functions like `sdk.assetByAlias()` and
   `sdk.assetByVersion()` that call these Assets API endpoints.

   Fields:
   - pathFn: Function that takes path params, and returns URL.
     Lodash's `template` function is used for templating.
   - method: HTTP method
   - name: Endpoint name. Other APIs (Marketplace and Auth) derive the name from
     the `path`, but since Assets API uses path params we can't trivially derive
     the name from path.

 */

var assetsApi = [{
  pathFn: function pathFn(_ref) {
    var clientId = _ref.clientId,
        version = _ref.version,
        assetPath = _ref.assetPath;
    return "pub/".concat(clientId, "/v/").concat(version, "/").concat(assetPath);
  },
  method: 'get',
  name: 'byVersion'
}, {
  pathFn: function pathFn(_ref2) {
    var clientId = _ref2.clientId,
        alias = _ref2.alias,
        assetPath = _ref2.assetPath;
    return "pub/".concat(clientId, "/a/").concat(alias, "/").concat(assetPath);
  },
  method: 'get',
  name: 'byAlias'
}];
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var lodash_map = __webpack_require__(16);
var map_default = /*#__PURE__*/__webpack_require__.n(lodash_map);

// EXTERNAL MODULE: ./node_modules/lodash/compact.js
var compact = __webpack_require__(27);
var compact_default = /*#__PURE__*/__webpack_require__.n(compact);

// CONCATENATED MODULE: ./src/types.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-underscore-dangle: ["error", { "allow": ["_sdkType"] }] */

/**
   UUID type
   @constructor
   @param {string} uuid - UUID represented as string
 */
var UUID = function UUID(uuid) {
  _classCallCheck(this, UUID);

  this._sdkType = this.constructor._sdkType;
  this.uuid = uuid;
};
UUID._sdkType = 'UUID';
var LatLng = function LatLng(lat, lng) {
  _classCallCheck(this, LatLng);

  this._sdkType = this.constructor._sdkType;
  this.lat = lat;
  this.lng = lng;
};
LatLng._sdkType = 'LatLng';
var LatLngBounds = function LatLngBounds(ne, sw) {
  _classCallCheck(this, LatLngBounds);

  this._sdkType = this.constructor._sdkType;
  this.ne = ne;
  this.sw = sw;
};
LatLngBounds._sdkType = 'LatLngBounds';
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

var Money = function Money(amount, currency) {
  _classCallCheck(this, Money);

  this._sdkType = this.constructor._sdkType;
  this.amount = amount;
  this.currency = currency;
};
Money._sdkType = 'Money';
/**
  Type to represent arbitrary precision decimal value.

  It's recommended to use a library such as decimal.js to make decimal
  calculations.
*/

var BigDecimal = function BigDecimal(value) {
  _classCallCheck(this, BigDecimal);

  this._sdkType = this.constructor._sdkType;
  this.value = value;
};
BigDecimal._sdkType = 'BigDecimal';
var toType = function toType(value) {
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
}; //
// JSON replacer
//
// Deprecated
//
// The _sdkType field is added to the type object itself,
// so the use of replacer is not needed. The function exists purely
// for backwards compatibility. We don't want to remove it in case
// applications are using it.
//

var replacer = function replacer(key, value) {
  return value;
}; //
// JSON reviver
//

var reviver = function reviver(key, value) {
  return toType(value);
};
// CONCATENATED MODULE: ./src/params_serializer.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


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

var UNKNOWN_TYPE = 'unknown-type';
/**
 * Serialize a single value. May be called recursively in case of array value.
 */

var params_serializer_serializeValue = function serializeValue(value) {
  var v;

  if (value instanceof UUID) {
    v = value.uuid;
  } else if (value instanceof LatLng) {
    v = "".concat(value.lat, ",").concat(value.lng);
  } else if (value instanceof LatLngBounds) {
    v = "".concat(value.ne.lat, ",").concat(value.ne.lng, ",").concat(value.sw.lat, ",").concat(value.sw.lng);
  } else if (Array.isArray(value)) {
    v = value.map(serializeValue);
  } else if (value instanceof Date) {
    v = value.toISOString();
  } else if (value == null) {
    v = value;
  } else if (_typeof(value) !== 'object') {
    v = value;
  } else {
    throw new Error(UNKNOWN_TYPE);
  }

  return v;
};
/**
 * Take `key` and `value` and return a key-value tuple where
 * key and value are stringified.
 *
 * TODO Consider moving this function closer to the type definitions,
 * maybe in types.js file(?).
 */


var serialize = function serialize(key, value) {
  var v;

  try {
    v = params_serializer_serializeValue(value);
  } catch (e) {
    if (e && e.message === UNKNOWN_TYPE) {
      throw new Error("Don't know how to serialize query parameter '".concat(key, "': ").concat(value));
    } else {
      throw e;
    }
  } // Ignore null and undefined values


  if (v == null) {
    return null;
  }

  return [key, encode(v)];
};

var params_serializer_paramsSerializer = function paramsSerializer(params) {
  return compact_default()(map_default()(params, function (value, key) {
    var serialized = serialize(key, value);

    if (serialized) {
      return serialized.join('=');
    }

    return null;
  })).join('&');
};

/* harmony default export */ var params_serializer = (params_serializer_paramsSerializer);
// CONCATENATED MODULE: ./src/interceptors/add_auth_header.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_auth_header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constructAuthHeader = function constructAuthHeader(authToken) {
  /* eslint-disable camelcase */
  var token_type = authToken.token_type && authToken.token_type.toLowerCase();

  switch (token_type) {
    case 'bearer':
      return "Bearer ".concat(authToken.access_token);

    default:
      throw new Error("Unknown token type: ".concat(token_type));
  }
  /* eslint-enable camelcase */

};
/**
   Read `authToken` from `ctx`. Then construct Authorize header and add it to `headers`.

   Changes to `ctx`:

   - Add `headers.Authorize`
 */


var AddAuthHeader =
/*#__PURE__*/
function () {
  function AddAuthHeader() {
    add_auth_header_classCallCheck(this, AddAuthHeader);
  }

  _createClass(AddAuthHeader, [{
    key: "enter",
    value: function enter(ctx) {
      var authToken = ctx.authToken,
          _ctx$headers = ctx.headers,
          headers = _ctx$headers === void 0 ? {} : _ctx$headers;

      if (!authToken) {
        return ctx;
      }

      var authHeaders = {
        Authorization: constructAuthHeader(authToken)
      };
      return _objectSpread({}, ctx, {
        headers: _objectSpread({}, headers, {}, authHeaders)
      });
    }
  }]);

  return AddAuthHeader;
}();


// CONCATENATED MODULE: ./src/context_runner.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function context_runner_slicedToArray(arr, i) { return context_runner_arrayWithHoles(arr) || context_runner_iterableToArrayLimit(arr, i) || context_runner_nonIterableRest(); }

function context_runner_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function context_runner_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function context_runner_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function context_runner_toConsumableArray(arr) { return context_runner_arrayWithoutHoles(arr) || context_runner_iterableToArray(arr) || context_runner_nonIterableSpread(); }

function context_runner_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function context_runner_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function context_runner_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function context_runner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function context_runner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { context_runner_ownKeys(source, true).forEach(function (key) { context_runner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { context_runner_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function context_runner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEBUG = false;

var resolve = function resolve(ctx) {
  return Promise.resolve(ctx);
};

var buildCtx = function buildCtx() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middleware = arguments.length > 1 ? arguments[1] : undefined;
  return context_runner_objectSpread({}, params, {
    enterQueue: context_runner_toConsumableArray(middleware).reverse(),
    leaveStack: []
  });
};

var tryExecuteMw = function tryExecuteMw(ctx, mw, stage) {
  /* eslint-disable no-console */

  /* eslint-disable no-undef */
  if (DEBUG) {
    if (mw[stage]) {
      console.log("Executing ".concat(mw.constructor.name, "#").concat(stage));
    }
  }
  /* eslint-enable no-console */

  /* eslint-enable no-undef */


  return resolve(ctx).then(mw[stage] || resolve)["catch"](function (error) {
    var errorCtx = error.ctx || ctx;
    return Promise.resolve(context_runner_objectSpread({}, errorCtx, {
      error: error,
      errorMiddleware: mw.constructor.name,
      errorStage: stage
    }));
  });
};

var nextMw = function nextMw(ctx) {
  var leaveStack = context_runner_toConsumableArray(ctx.leaveStack);

  var enterQueue = context_runner_toConsumableArray(ctx.enterQueue);

  var mw;
  var type;

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

  return [context_runner_objectSpread({}, ctx, {
    enterQueue: enterQueue,
    leaveStack: leaveStack
  }), mw, type];
};

var executeCtx = function executeCtx(ctx) {
  var _nextMw = nextMw(ctx),
      _nextMw2 = context_runner_slicedToArray(_nextMw, 3),
      newCtx = _nextMw2[0],
      mw = _nextMw2[1],
      type = _nextMw2[2];

  if (mw) {
    return tryExecuteMw(newCtx, mw, type).then(executeCtx);
  }

  if (newCtx.error) {
    var error = newCtx.error,
        errorCtx = _objectWithoutProperties(newCtx, ["error"]);

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

/* harmony default export */ var context_runner = (contextRunner);
// CONCATENATED MODULE: ./src/interceptors/save_token.js
function save_token_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function save_token_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { save_token_ownKeys(source, true).forEach(function (key) { save_token_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { save_token_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function save_token_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function save_token_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function save_token_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function save_token_createClass(Constructor, protoProps, staticProps) { if (protoProps) save_token_defineProperties(Constructor.prototype, protoProps); if (staticProps) save_token_defineProperties(Constructor, staticProps); return Constructor; }

/**
   On `leave` phase, take `authToken` from `ctx` and save it to tokenStore.

   Stores also the `isLoggedInAs` alongside with the auth token.

   Changes to `ctx`:

   - None
*/
var SaveToken =
/*#__PURE__*/
function () {
  function SaveToken() {
    save_token_classCallCheck(this, SaveToken);
  }

  save_token_createClass(SaveToken, [{
    key: "leave",
    value: function leave(ctx) {
      var authToken = ctx.authToken,
          tokenStore = ctx.tokenStore,
          isLoggedInAs = ctx.isLoggedInAs;

      if (tokenStore) {
        return Promise.resolve().then(function () {
          return tokenStore.setToken(save_token_objectSpread({}, authToken, {
            isLoggedInAs: isLoggedInAs
          }));
        }).then(function () {
          return ctx;
        });
      }

      return ctx;
    }
  }]);

  return SaveToken;
}();


// CONCATENATED MODULE: ./src/interceptors/add_auth_token_response.js
function add_auth_token_response_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_auth_token_response_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_auth_token_response_ownKeys(source, true).forEach(function (key) { add_auth_token_response_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_auth_token_response_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_auth_token_response_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_auth_token_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_auth_token_response_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_auth_token_response_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_auth_token_response_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_auth_token_response_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Take `authToken` from `res` and add it to `ctx` top-level.

   Changes to `ctx`:

   - add `authToken` (from res)
*/
var AddAuthTokenResponse =
/*#__PURE__*/
function () {
  function AddAuthTokenResponse() {
    add_auth_token_response_classCallCheck(this, AddAuthTokenResponse);
  }

  add_auth_token_response_createClass(AddAuthTokenResponse, [{
    key: "leave",
    value: function leave(ctx) {
      var authToken = ctx.res.data;
      return add_auth_token_response_objectSpread({}, ctx, {
        authToken: authToken
      });
    }
  }]);

  return AddAuthTokenResponse;
}();


// CONCATENATED MODULE: ./src/interceptors/retry_with_refresh_token.js
function retry_with_refresh_token_toConsumableArray(arr) { return retry_with_refresh_token_arrayWithoutHoles(arr) || retry_with_refresh_token_iterableToArray(arr) || retry_with_refresh_token_nonIterableSpread(); }

function retry_with_refresh_token_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function retry_with_refresh_token_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function retry_with_refresh_token_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function retry_with_refresh_token_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function retry_with_refresh_token_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { retry_with_refresh_token_ownKeys(source, true).forEach(function (key) { retry_with_refresh_token_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { retry_with_refresh_token_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function retry_with_refresh_token_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function retry_with_refresh_token_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function retry_with_refresh_token_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function retry_with_refresh_token_createClass(Constructor, protoProps, staticProps) { if (protoProps) retry_with_refresh_token_defineProperties(Constructor.prototype, protoProps); if (staticProps) retry_with_refresh_token_defineProperties(Constructor, staticProps); return Constructor; }




/**
   Retries with a fresh password token.


   `enter`: Save current `enterQueue` to `retryQueue` and save current `attempts` count

   `error`: Try to fetch new password token. If successful, save it to `ctx`

   Changes to `ctx`:

   - add `anonTokenRetry`
   - add `authToken`
 */

var retry_with_refresh_token_RetryWithRefreshToken =
/*#__PURE__*/
function () {
  function RetryWithRefreshToken() {
    retry_with_refresh_token_classCallCheck(this, RetryWithRefreshToken);
  }

  retry_with_refresh_token_createClass(RetryWithRefreshToken, [{
    key: "enter",
    value: function enter(enterCtx) {
      var enterQueue = enterCtx.enterQueue,
          _enterCtx$refreshToke = enterCtx.refreshTokenRetry;
      _enterCtx$refreshToke = _enterCtx$refreshToke === void 0 ? {} : _enterCtx$refreshToke;
      var _enterCtx$refreshToke2 = _enterCtx$refreshToke.attempts,
          attempts = _enterCtx$refreshToke2 === void 0 ? 0 : _enterCtx$refreshToke2;
      return retry_with_refresh_token_objectSpread({}, enterCtx, {
        refreshTokenRetry: {
          retryQueue: [].concat(retry_with_refresh_token_toConsumableArray(enterQueue), [new RetryWithRefreshToken()]),
          attempts: attempts + 1
        }
      });
    }
  }, {
    key: "error",
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
        return context_runner([new SaveToken(), new AddAuthTokenResponse()].concat(retry_with_refresh_token_toConsumableArray(endpointInterceptors.auth.token)))({
          params: {
            client_id: clientId,
            grant_type: 'refresh_token',
            refresh_token: authToken.refresh_token
          },
          tokenStore: tokenStore
        }).then(function (_ref) {
          var newAuthToken = _ref.authToken;
          return retry_with_refresh_token_objectSpread({}, errorCtx, {
            authToken: newAuthToken,
            enterQueue: retryQueue,
            error: null
          });
        })["catch"](function (e) {
          return retry_with_refresh_token_objectSpread({}, errorCtx, {
            refreshTokenRetry: {
              retryQueue: retryQueue,
              attempts: attempts,
              res: e.response
            }
          });
        });
      }

      return errorCtx;
    }
  }]);

  return RetryWithRefreshToken;
}();


// CONCATENATED MODULE: ./src/interceptors/retry_with_anon_token.js
function retry_with_anon_token_toConsumableArray(arr) { return retry_with_anon_token_arrayWithoutHoles(arr) || retry_with_anon_token_iterableToArray(arr) || retry_with_anon_token_nonIterableSpread(); }

function retry_with_anon_token_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function retry_with_anon_token_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function retry_with_anon_token_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function retry_with_anon_token_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function retry_with_anon_token_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { retry_with_anon_token_ownKeys(source, true).forEach(function (key) { retry_with_anon_token_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { retry_with_anon_token_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function retry_with_anon_token_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function retry_with_anon_token_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function retry_with_anon_token_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function retry_with_anon_token_createClass(Constructor, protoProps, staticProps) { if (protoProps) retry_with_anon_token_defineProperties(Constructor.prototype, protoProps); if (staticProps) retry_with_anon_token_defineProperties(Constructor, staticProps); return Constructor; }




/**
   Retries with a fresh anon token.

   `enter`: Save current `enterQueue` to `retryQueue` and save current `attempts` count

   `error`: Try to fetch new anon token. If successful, save it to `ctx`

   Changes to `ctx`:

   - add `anonTokenRetry`
   - add `authToken`
 */

var retry_with_anon_token_RetryWithAnonToken =
/*#__PURE__*/
function () {
  function RetryWithAnonToken() {
    retry_with_anon_token_classCallCheck(this, RetryWithAnonToken);
  }

  retry_with_anon_token_createClass(RetryWithAnonToken, [{
    key: "enter",
    value: function enter(enterCtx) {
      var enterQueue = enterCtx.enterQueue,
          _enterCtx$anonTokenRe = enterCtx.anonTokenRetry;
      _enterCtx$anonTokenRe = _enterCtx$anonTokenRe === void 0 ? {} : _enterCtx$anonTokenRe;
      var _enterCtx$anonTokenRe2 = _enterCtx$anonTokenRe.attempts,
          attempts = _enterCtx$anonTokenRe2 === void 0 ? 0 : _enterCtx$anonTokenRe2;
      return retry_with_anon_token_objectSpread({}, enterCtx, {
        anonTokenRetry: {
          retryQueue: [].concat(retry_with_anon_token_toConsumableArray(enterQueue), [new RetryWithAnonToken()]),
          attempts: attempts + 1
        }
      });
    }
  }, {
    key: "error",
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
        return context_runner([new SaveToken(), new AddAuthTokenResponse()].concat(retry_with_anon_token_toConsumableArray(endpointInterceptors.auth.token)))({
          params: {
            client_id: clientId,
            grant_type: 'client_credentials',
            scope: 'public-read'
          },
          tokenStore: tokenStore
        }).then(function (_ref) {
          var authToken = _ref.authToken;
          return retry_with_anon_token_objectSpread({}, errorCtx, {
            authToken: authToken,
            enterQueue: retryQueue,
            error: null
          });
        });
      }

      return errorCtx;
    }
  }]);

  return RetryWithAnonToken;
}();


// CONCATENATED MODULE: ./src/interceptors/clear_token_after_revoke.js


function clear_token_after_revoke_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function clear_token_after_revoke_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { clear_token_after_revoke_ownKeys(source, true).forEach(function (key) { clear_token_after_revoke_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { clear_token_after_revoke_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function clear_token_after_revoke_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clear_token_after_revoke_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clear_token_after_revoke_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clear_token_after_revoke_createClass(Constructor, protoProps, staticProps) { if (protoProps) clear_token_after_revoke_defineProperties(Constructor.prototype, protoProps); if (staticProps) clear_token_after_revoke_defineProperties(Constructor, staticProps); return Constructor; }

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
var clear_token_after_revoke_ClearTokenAfterRevoke =
/*#__PURE__*/
function () {
  function ClearTokenAfterRevoke() {
    clear_token_after_revoke_classCallCheck(this, ClearTokenAfterRevoke);
  }

  clear_token_after_revoke_createClass(ClearTokenAfterRevoke, [{
    key: "leave",
    value: function leave(ctx) {
      return ClearTokenAfterRevoke.clearTokenAndResque(ctx);
    }
  }, {
    key: "error",
    value: function error(ctx) {
      var _ref = ctx.res || {},
          status = _ref.status;

      var retryStatus = get_default()(ctx, ['refreshTokenRetry', 'res', 'status']);

      if (status === 401 && retryStatus === 401) {
        return ClearTokenAfterRevoke.clearTokenAndResque(ctx);
      }

      return ctx;
    }
  }], [{
    key: "clearTokenAndResque",
    value: function clearTokenAndResque(ctx) {
      var tokenStore = ctx.tokenStore;

      if (tokenStore) {
        return Promise.resolve().then(tokenStore.removeToken).then(function () {
          return clear_token_after_revoke_objectSpread({}, ctx, {
            error: null
          });
        });
      }

      return clear_token_after_revoke_objectSpread({}, ctx, {
        error: null
      });
    }
  }]);

  return ClearTokenAfterRevoke;
}();


// CONCATENATED MODULE: ./src/interceptors/fetch_refresh_token_for_revoke.js
function fetch_refresh_token_for_revoke_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function fetch_refresh_token_for_revoke_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetch_refresh_token_for_revoke_ownKeys(source, true).forEach(function (key) { fetch_refresh_token_for_revoke_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetch_refresh_token_for_revoke_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetch_refresh_token_for_revoke_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetch_refresh_token_for_revoke_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetch_refresh_token_for_revoke_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetch_refresh_token_for_revoke_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetch_refresh_token_for_revoke_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetch_refresh_token_for_revoke_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Fetch `refresh_token` from `authToken` in `ctx`. If
   `refresh_token` doesn't exist, clear the `enterQueue`, because we
   don't need to revoke the refresh token we don't have.

   Changes to `ctx`:

   - Add `params.token`
   - Clear `enterQueue` (if no need to revoke)
*/
var FetchRefreshTokenForRevoke =
/*#__PURE__*/
function () {
  function FetchRefreshTokenForRevoke() {
    fetch_refresh_token_for_revoke_classCallCheck(this, FetchRefreshTokenForRevoke);
  }

  fetch_refresh_token_for_revoke_createClass(FetchRefreshTokenForRevoke, [{
    key: "enter",
    value: function enter(ctx) {
      var _ctx$authToken = ctx.authToken;
      _ctx$authToken = _ctx$authToken === void 0 ? {} : _ctx$authToken;
      var token = _ctx$authToken.refresh_token;

      if (token) {
        return fetch_refresh_token_for_revoke_objectSpread({}, ctx, {
          params: {
            token: token
          }
        });
      } // No need to call `revoke` endpoint, because we don't have
      // refresh_token.
      // Clear the enterQueue


      return fetch_refresh_token_for_revoke_objectSpread({}, ctx, {
        enterQueue: []
      });
    }
  }]);

  return FetchRefreshTokenForRevoke;
}();


// CONCATENATED MODULE: ./src/interceptors/fetch_auth_token_from_api.js
function fetch_auth_token_from_api_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function fetch_auth_token_from_api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetch_auth_token_from_api_ownKeys(source, true).forEach(function (key) { fetch_auth_token_from_api_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetch_auth_token_from_api_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetch_auth_token_from_api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetch_auth_token_from_api_toConsumableArray(arr) { return fetch_auth_token_from_api_arrayWithoutHoles(arr) || fetch_auth_token_from_api_iterableToArray(arr) || fetch_auth_token_from_api_nonIterableSpread(); }

function fetch_auth_token_from_api_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function fetch_auth_token_from_api_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function fetch_auth_token_from_api_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function fetch_auth_token_from_api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetch_auth_token_from_api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetch_auth_token_from_api_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetch_auth_token_from_api_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetch_auth_token_from_api_defineProperties(Constructor, staticProps); return Constructor; }




/**
   If there's no `authToken` stored to the `ctx`, try to fetch new auth token from the API.

   Changes to the `ctx`:

   - add `authToken`
*/

var fetch_auth_token_from_api_FetchAuthTokenFromApi =
/*#__PURE__*/
function () {
  function FetchAuthTokenFromApi() {
    fetch_auth_token_from_api_classCallCheck(this, FetchAuthTokenFromApi);
  }

  fetch_auth_token_from_api_createClass(FetchAuthTokenFromApi, [{
    key: "enter",
    value: function enter(ctx) {
      var tokenStore = ctx.tokenStore,
          authToken = ctx.authToken,
          endpointInterceptors = ctx.endpointInterceptors,
          clientId = ctx.clientId;

      if (authToken) {
        return ctx;
      }

      return context_runner([new SaveToken(), new AddAuthTokenResponse()].concat(fetch_auth_token_from_api_toConsumableArray(endpointInterceptors.auth.token)))({
        params: {
          client_id: clientId,
          grant_type: 'client_credentials',
          scope: 'public-read'
        },
        tokenStore: tokenStore
      }).then(function (_ref) {
        var newAuthToken = _ref.authToken;
        return fetch_auth_token_from_api_objectSpread({}, ctx, {
          authToken: newAuthToken
        });
      });
    }
  }]);

  return FetchAuthTokenFromApi;
}();


// CONCATENATED MODULE: ./src/interceptors/fetch_auth_token_from_store.js
function fetch_auth_token_from_store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function fetch_auth_token_from_store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetch_auth_token_from_store_ownKeys(source, true).forEach(function (key) { fetch_auth_token_from_store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetch_auth_token_from_store_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetch_auth_token_from_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetch_auth_token_from_store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetch_auth_token_from_store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetch_auth_token_from_store_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetch_auth_token_from_store_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetch_auth_token_from_store_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Fetches the auth token from tokenStore and adds it to the context.

   Changes to `ctx`:

   - add `authToken`

 */
var FetchAuthTokenFromStore =
/*#__PURE__*/
function () {
  function FetchAuthTokenFromStore() {
    fetch_auth_token_from_store_classCallCheck(this, FetchAuthTokenFromStore);
  }

  fetch_auth_token_from_store_createClass(FetchAuthTokenFromStore, [{
    key: "enter",
    value: function enter(enterCtx) {
      var tokenStore = enterCtx.tokenStore;

      if (!tokenStore) {
        return enterCtx;
      }

      return Promise.resolve().then(tokenStore.getToken).then(function (storedToken) {
        if (storedToken) {
          return fetch_auth_token_from_store_objectSpread({}, enterCtx, {
            authToken: storedToken
          });
        }

        return enterCtx;
      });
    }
  }]);

  return FetchAuthTokenFromStore;
}();


// CONCATENATED MODULE: ./src/interceptors/add_client_id_to_params.js
function add_client_id_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_client_id_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_client_id_to_params_ownKeys(source, true).forEach(function (key) { add_client_id_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_client_id_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_client_id_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_client_id_to_params_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = add_client_id_to_params_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function add_client_id_to_params_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function add_client_id_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_client_id_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_client_id_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_client_id_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_client_id_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Read `clientId` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.clientId`
 */
var AddClientIdToParams =
/*#__PURE__*/
function () {
  function AddClientIdToParams() {
    add_client_id_to_params_classCallCheck(this, AddClientIdToParams);
  }

  add_client_id_to_params_createClass(AddClientIdToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var clientId = _ref.clientId,
          params = _ref.params,
          ctx = add_client_id_to_params_objectWithoutProperties(_ref, ["clientId", "params"]);

      return add_client_id_to_params_objectSpread({}, ctx, {
        clientId: clientId,
        params: add_client_id_to_params_objectSpread({}, params, {
          client_id: clientId
        })
      });
    }
  }]);

  return AddClientIdToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_client_secret_to_params.js
function add_client_secret_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_client_secret_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_client_secret_to_params_ownKeys(source, true).forEach(function (key) { add_client_secret_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_client_secret_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_client_secret_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_client_secret_to_params_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = add_client_secret_to_params_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function add_client_secret_to_params_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function add_client_secret_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_client_secret_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_client_secret_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_client_secret_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_client_secret_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Read `clientSecret` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.client_secret`
 */
var AddClientSecretToParams =
/*#__PURE__*/
function () {
  function AddClientSecretToParams() {
    add_client_secret_to_params_classCallCheck(this, AddClientSecretToParams);
  }

  add_client_secret_to_params_createClass(AddClientSecretToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var clientSecret = _ref.clientSecret,
          params = _ref.params,
          ctx = add_client_secret_to_params_objectWithoutProperties(_ref, ["clientSecret", "params"]);

      if (!clientSecret) {
        throw new Error('SDK instance is missing the clientSecret config.');
      }

      return add_client_secret_to_params_objectSpread({}, ctx, {
        clientSecret: clientSecret,
        params: add_client_secret_to_params_objectSpread({}, params, {
          client_secret: clientSecret
        })
      });
    }
  }]);

  return AddClientSecretToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_subject_token_to_params.js
function add_subject_token_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_subject_token_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_subject_token_to_params_ownKeys(source, true).forEach(function (key) { add_subject_token_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_subject_token_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_subject_token_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_subject_token_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_subject_token_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_subject_token_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_subject_token_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_subject_token_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Read `authToken.access_token` from `ctx` and adds it as
   `subject_token` in params

   Changes to `ctx`:

   - add `params.subject_token`

 */
var AddSubjectTokenToParams =
/*#__PURE__*/
function () {
  function AddSubjectTokenToParams() {
    add_subject_token_to_params_classCallCheck(this, AddSubjectTokenToParams);
  }

  add_subject_token_to_params_createClass(AddSubjectTokenToParams, [{
    key: "enter",
    value: function enter(ctx) {
      var authToken = ctx.authToken,
          params = ctx.params;

      if (authToken && authToken.access_token) {
        return add_subject_token_to_params_objectSpread({}, ctx, {
          params: add_subject_token_to_params_objectSpread({}, params, {
            subject_token: authToken.access_token
          })
        });
      }

      return ctx;
    }
  }]);

  return AddSubjectTokenToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_is_logged_in_as_to_context_from_params.js
function add_is_logged_in_as_to_context_from_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_is_logged_in_as_to_context_from_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_is_logged_in_as_to_context_from_params_ownKeys(source, true).forEach(function (key) { add_is_logged_in_as_to_context_from_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_is_logged_in_as_to_context_from_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_is_logged_in_as_to_context_from_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_is_logged_in_as_to_context_from_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_is_logged_in_as_to_context_from_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_is_logged_in_as_to_context_from_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_is_logged_in_as_to_context_from_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_is_logged_in_as_to_context_from_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   See if `code` is passed as a parameter and if yes, store isLoggedInAs true to
   context.

   Changes to `ctx`:

   - add `isLoggedInAs`

   Deprecated: login as user should use loginAs method.
 */
var AddIsLoggedInAsToContextFromParams =
/*#__PURE__*/
function () {
  function AddIsLoggedInAsToContextFromParams() {
    add_is_logged_in_as_to_context_from_params_classCallCheck(this, AddIsLoggedInAsToContextFromParams);
  }

  add_is_logged_in_as_to_context_from_params_createClass(AddIsLoggedInAsToContextFromParams, [{
    key: "enter",
    value: function enter(ctx) {
      var code = ctx.params.code;

      if (code) {
        return add_is_logged_in_as_to_context_from_params_objectSpread({}, ctx, {
          isLoggedInAs: !!code
        });
      }

      return ctx;
    }
  }]);

  return AddIsLoggedInAsToContextFromParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_is_logged_in_as_to_context.js
function add_is_logged_in_as_to_context_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_is_logged_in_as_to_context_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_is_logged_in_as_to_context_ownKeys(source, true).forEach(function (key) { add_is_logged_in_as_to_context_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_is_logged_in_as_to_context_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_is_logged_in_as_to_context_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_is_logged_in_as_to_context_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_is_logged_in_as_to_context_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_is_logged_in_as_to_context_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_is_logged_in_as_to_context_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_is_logged_in_as_to_context_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Add isLoggedInAs true to context.

   Changes to `ctx`:

   - add `isLoggedInAs`
 */
var AddIsLoggedInAsToContext =
/*#__PURE__*/
function () {
  function AddIsLoggedInAsToContext() {
    add_is_logged_in_as_to_context_classCallCheck(this, AddIsLoggedInAsToContext);
  }

  add_is_logged_in_as_to_context_createClass(AddIsLoggedInAsToContext, [{
    key: "enter",
    value: function enter(ctx) {
      return add_is_logged_in_as_to_context_objectSpread({}, ctx, {
        isLoggedInAs: true
      });
    }
  }]);

  return AddIsLoggedInAsToContext;
}();


// CONCATENATED MODULE: ./src/interceptors/add_grant_type_to_params.js
function add_grant_type_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_grant_type_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_grant_type_to_params_ownKeys(source, true).forEach(function (key) { add_grant_type_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_grant_type_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_grant_type_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_grant_type_to_params_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = add_grant_type_to_params_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function add_grant_type_to_params_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function add_grant_type_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_grant_type_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_grant_type_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_grant_type_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_grant_type_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   See what credentials (`username`, `password`, and `authorizationCode`) are
   passed in params and set the grant_type based on those.

   Changes to `ctx`:

   - add `params.grant_type`
 */


var add_grant_type_to_params_AddGrantTypeToParams =
/*#__PURE__*/
function () {
  function AddGrantTypeToParams() {
    add_grant_type_to_params_classCallCheck(this, AddGrantTypeToParams);
  }

  add_grant_type_to_params_createClass(AddGrantTypeToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = add_grant_type_to_params_objectWithoutProperties(_ref, ["params"]);

      var username = params.username,
          password = params.password,
          code = params.code;

      if (username && password) {
        return add_grant_type_to_params_objectSpread({}, ctx, {
          params: add_grant_type_to_params_objectSpread({
            grant_type: 'password'
          }, params)
        });
      }

      if (code) {
        deprecated('Using sdk.login to login as a user is deprecated. Use sdk.loginAs instead.', ctx.disableDeprecationWarnings);
        return add_grant_type_to_params_objectSpread({}, ctx, {
          params: add_grant_type_to_params_objectSpread({
            grant_type: 'authorization_code'
          }, params)
        });
      }

      return add_grant_type_to_params_objectSpread({}, ctx, {
        params: add_grant_type_to_params_objectSpread({}, params)
      });
    }
  }]);

  return AddGrantTypeToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_authorization_code_grant_type_to_params.js
function add_authorization_code_grant_type_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_authorization_code_grant_type_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_authorization_code_grant_type_to_params_ownKeys(source, true).forEach(function (key) { add_authorization_code_grant_type_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_authorization_code_grant_type_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_authorization_code_grant_type_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_authorization_code_grant_type_to_params_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = add_authorization_code_grant_type_to_params_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function add_authorization_code_grant_type_to_params_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function add_authorization_code_grant_type_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_authorization_code_grant_type_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_authorization_code_grant_type_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_authorization_code_grant_type_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_authorization_code_grant_type_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Add `authorization_code` value to `params.grantType`

   Changes to `ctx`:

   - Add `authorization_code` value to `params.grantType`
 */
var AddAuthorizationCodeGrantTypeToParams =
/*#__PURE__*/
function () {
  function AddAuthorizationCodeGrantTypeToParams() {
    add_authorization_code_grant_type_to_params_classCallCheck(this, AddAuthorizationCodeGrantTypeToParams);
  }

  add_authorization_code_grant_type_to_params_createClass(AddAuthorizationCodeGrantTypeToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = add_authorization_code_grant_type_to_params_objectWithoutProperties(_ref, ["params"]);

      return add_authorization_code_grant_type_to_params_objectSpread({}, ctx, {
        params: add_authorization_code_grant_type_to_params_objectSpread({
          grant_type: 'authorization_code'
        }, params)
      });
    }
  }]);

  return AddAuthorizationCodeGrantTypeToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_token_exchange_grant_type_to_params.js
function add_token_exchange_grant_type_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_token_exchange_grant_type_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_token_exchange_grant_type_to_params_ownKeys(source, true).forEach(function (key) { add_token_exchange_grant_type_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_token_exchange_grant_type_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_token_exchange_grant_type_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_token_exchange_grant_type_to_params_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = add_token_exchange_grant_type_to_params_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function add_token_exchange_grant_type_to_params_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function add_token_exchange_grant_type_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_token_exchange_grant_type_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_token_exchange_grant_type_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_token_exchange_grant_type_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_token_exchange_grant_type_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Add "token_exchange" as the `grant_type` in `params`

   Changes to `ctx`:

   - add `params.grant_type`
 */
var AddTokenExchangeGrantTypeToParams =
/*#__PURE__*/
function () {
  function AddTokenExchangeGrantTypeToParams() {
    add_token_exchange_grant_type_to_params_classCallCheck(this, AddTokenExchangeGrantTypeToParams);
  }

  add_token_exchange_grant_type_to_params_createClass(AddTokenExchangeGrantTypeToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = add_token_exchange_grant_type_to_params_objectWithoutProperties(_ref, ["params"]);

      return add_token_exchange_grant_type_to_params_objectSpread({}, ctx, {
        params: add_token_exchange_grant_type_to_params_objectSpread({}, params, {
          grant_type: 'token_exchange'
        })
      });
    }
  }]);

  return AddTokenExchangeGrantTypeToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_scope_to_params.js
function add_scope_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_scope_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_scope_to_params_ownKeys(source, true).forEach(function (key) { add_scope_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_scope_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_scope_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_scope_to_params_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = add_scope_to_params_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function add_scope_to_params_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function add_scope_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_scope_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_scope_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_scope_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_scope_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Set the scope for a token request based on the params.

   Changes to `ctx`:

   - add `params.scope`
 */
var AddScopeToParams =
/*#__PURE__*/
function () {
  function AddScopeToParams() {
    add_scope_to_params_classCallCheck(this, AddScopeToParams);
  }

  add_scope_to_params_createClass(AddScopeToParams, [{
    key: "enter",
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = add_scope_to_params_objectWithoutProperties(_ref, ["params"]);

      var username = params.username,
          password = params.password;

      if (username && password) {
        return add_scope_to_params_objectSpread({}, ctx, {
          params: add_scope_to_params_objectSpread({
            scope: 'user'
          }, params)
        });
      }

      return add_scope_to_params_objectSpread({}, ctx, {
        params: add_scope_to_params_objectSpread({}, params)
      });
    }
  }]);

  return AddScopeToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/auth_info.js
function auth_info_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_info_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_info_ownKeys(source, true).forEach(function (key) { auth_info_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_info_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_info_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function auth_info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function auth_info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function auth_info_createClass(Constructor, protoProps, staticProps) { if (protoProps) auth_info_defineProperties(Constructor.prototype, protoProps); if (staticProps) auth_info_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Reads current authentication token from the tokenStore and returns
   the following information:

   - scopes: list of scopes associated with the access token in store
   - isAnonymous: boolean value indicating if the access token only grants
     access to publicly read data from API
   - isLoggedInAs: boolean value indicating that the operator has logged in as
     a marketplace user

   Changes to `ctx`:

   - add `res`

*/
var AuthInfo =
/*#__PURE__*/
function () {
  function AuthInfo() {
    auth_info_classCallCheck(this, AuthInfo);
  }

  auth_info_createClass(AuthInfo, [{
    key: "enter",
    value: function enter(ctx) {
      var tokenStore = ctx.tokenStore;

      if (tokenStore) {
        return Promise.resolve().then(tokenStore.getToken).then(function (storedToken) {
          if (storedToken) {
            var tokenScope = storedToken.scope;
            var isLoggedInAs = storedToken.isLoggedInAs;

            if (tokenScope) {
              var scopes = tokenScope.split(' ');

              var _isAnonymous = tokenScope === 'public-read'; // Deprecated attribute, maintained here for client implementations
              // that rely on this attribute


              var _grantType = _isAnonymous ? 'client_credentials' : 'refresh_token';

              return auth_info_objectSpread({}, ctx, {
                res: {
                  scopes: scopes,
                  isAnonymous: _isAnonymous,
                  grantType: _grantType,
                  isLoggedInAs: !!isLoggedInAs
                }
              });
            } // Support old tokens that are stored in the client's token store
            // and possibly do not have the scope attribute


            var isAnonymous = !storedToken.refresh_token;
            var grantType = isAnonymous ? 'client_credentials' : 'refresh_token';
            return auth_info_objectSpread({}, ctx, {
              res: {
                isAnonymous: isAnonymous,
                grantType: grantType,
                isLoggedInAs: !!isLoggedInAs
              }
            });
          }

          return auth_info_objectSpread({}, ctx, {
            res: {}
          });
        });
      }

      return auth_info_objectSpread({}, ctx, {
        res: {}
      });
    }
  }]);

  return AuthInfo;
}();


// CONCATENATED MODULE: ./src/interceptors/multipart_request.js


function multipart_request_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function multipart_request_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { multipart_request_ownKeys(source, true).forEach(function (key) { multipart_request_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { multipart_request_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function multipart_request_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function multipart_request_slicedToArray(arr, i) { return multipart_request_arrayWithHoles(arr) || multipart_request_iterableToArrayLimit(arr, i) || multipart_request_nonIterableRest(); }

function multipart_request_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function multipart_request_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function multipart_request_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function multipart_request_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = multipart_request_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function multipart_request_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function multipart_request_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function multipart_request_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function multipart_request_createClass(Constructor, protoProps, staticProps) { if (protoProps) multipart_request_defineProperties(Constructor.prototype, protoProps); if (staticProps) multipart_request_defineProperties(Constructor, staticProps); return Constructor; }


/**
   Takes `params` from `ctx` and converts to `FormData`

   Changes to `ctx`:

   - Modify `ctx.params`
 */

var multipart_request_MultipartRequest =
/*#__PURE__*/
function () {
  function MultipartRequest() {
    multipart_request_classCallCheck(this, MultipartRequest);
  }

  multipart_request_createClass(MultipartRequest, [{
    key: "enter",
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = multipart_request_objectWithoutProperties(_ref, ["params"]);

      if (isPlainObject_default()(params)) {
        /* eslint-disable no-undef */
        if (typeof FormData === 'undefined') {
          throw new Error("Don't know how to create multipart request from Object, when the FormData is undefined");
        }

        var formDataObj = entries(params).reduce(function (fd, entry) {
          var _entry = multipart_request_slicedToArray(entry, 2),
              key = _entry[0],
              val = _entry[1];

          fd.append(key, val);
          return fd;
        }, new FormData());
        /* eslint-enable no-undef */

        return multipart_request_objectSpread({
          params: formDataObj
        }, ctx);
      }

      return multipart_request_objectSpread({
        params: params
      }, ctx);
    }
  }]);

  return MultipartRequest;
}();


// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(7);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);

// EXTERNAL MODULE: ./node_modules/lodash/flatten.js
var flatten = __webpack_require__(38);
var flatten_default = /*#__PURE__*/__webpack_require__.n(flatten);

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(9);
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ./node_modules/lodash/fromPairs.js
var fromPairs = __webpack_require__(69);
var fromPairs_default = /*#__PURE__*/__webpack_require__.n(fromPairs);

// EXTERNAL MODULE: ./node_modules/lodash/identity.js
var identity = __webpack_require__(8);
var identity_default = /*#__PURE__*/__webpack_require__.n(identity);

// EXTERNAL MODULE: ./node_modules/transit-js/transit.js
var transit = __webpack_require__(4);
var transit_default = /*#__PURE__*/__webpack_require__.n(transit);

// CONCATENATED MODULE: ./src/serializer.js







function serializer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { serializer_typeof = function _typeof(obj) { return typeof obj; }; } else { serializer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return serializer_typeof(obj); }

function serializer_toConsumableArray(arr) { return serializer_arrayWithoutHoles(arr) || serializer_iterableToArray(arr) || serializer_nonIterableSpread(); }

function serializer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function serializer_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function serializer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function serializer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function serializer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { serializer_ownKeys(source, true).forEach(function (key) { serializer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { serializer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function serializer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function serializer_slicedToArray(arr, i) { return serializer_arrayWithHoles(arr) || serializer_iterableToArrayLimit(arr, i) || serializer_nonIterableRest(); }

function serializer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function serializer_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function serializer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint no-underscore-dangle: ["error", { "allow": ["_sdkType"] }] */



/**
   Composes two readers (sdk type and app type) so that:

  ```
  class MyCustomUuid {
    constructor(uuid) {
      this.myUuid = uuid;
    }
  }

  const sdkTypeReader = {
     sdkType: UUID,
     reader: v => new UUID(v),
  };

  const appTypeReader = {
     sdkType: UUID,

     // type of reader function: UUID -> MyCustomUuid
     reader: v => new MyCustomUuid(v.uuid),
  }

  Composition creates a new reader:

  {
     sdkType: UUID,
     reader: v => new MyCustomUuid(new UUID(v))
  }
  ```
 */

var serializer_composeReader = function composeReader(sdkTypeReader, appTypeReader) {
  var sdkTypeReaderFn = sdkTypeReader.reader;
  var appTypeReaderFn = appTypeReader ? appTypeReader.reader : identity_default.a;
  return function (rep) {
    return appTypeReaderFn(sdkTypeReaderFn(rep));
  };
};
/**
   Type map from Transit tags to type classes
 */


var typeMap = {
  u: UUID,
  geo: LatLng,
  mn: Money,
  f: BigDecimal
};
/**
   List of SDK type readers
 */

var sdkTypeReaders = [{
  sdkType: UUID,
  reader: function reader(rep) {
    return new UUID(rep);
  }
}, {
  sdkType: LatLng,
  reader: function reader(_ref) {
    var _ref2 = serializer_slicedToArray(_ref, 2),
        lat = _ref2[0],
        lng = _ref2[1];

    return new LatLng(lat, lng);
  }
}, {
  sdkType: Money,
  reader: function reader(_ref3) {
    var _ref4 = serializer_slicedToArray(_ref3, 2),
        amount = _ref4[0],
        currency = _ref4[1];

    return new Money(amount, currency);
  }
}, {
  sdkType: BigDecimal,
  reader: function reader(rep) {
    return new BigDecimal(rep);
  }
}];
/**
   List of SDK type writers
 */

var sdkTypeWriters = [{
  sdkType: UUID,
  writer: function writer(v) {
    return v.uuid;
  }
}, {
  sdkType: LatLng,
  writer: function writer(v) {
    return [v.lat, v.lng];
  }
}, {
  sdkType: Money,
  writer: function writer(v) {
    return [v.amount, v.currency];
  }
}, {
  sdkType: BigDecimal,
  writer: function writer(v) {
    return v.value;
  }
}];
/**
   Take `appTypeReaders` param and construct a list of read handlers
   from `appTypeReaders`, `sdkTypeReaders` and `typeMap`.
*/

var serializer_constructReadHandlers = function constructReadHandlers(appTypeReaders) {
  return fromPairs_default()(map_default()(typeMap, function (typeClass, tag) {
    var sdkTypeReader = find_default()(sdkTypeReaders, function (r) {
      return r.sdkType === typeClass;
    });

    var appTypeReader = find_default()(appTypeReaders, function (r) {
      return r.sdkType === typeClass;
    });

    return [tag, serializer_composeReader(sdkTypeReader, appTypeReader)];
  }));
};

var writeHandlers = flatten_default()(map_default()(typeMap, function (typeClass, _tag) {
  var sdkTypeWriter = find_default()(sdkTypeWriters, function (w) {
    return w.sdkType === typeClass;
  });

  var handler = transit_default.a.makeWriteHandler({
    tag: function tag() {
      return _tag;
    },
    rep: sdkTypeWriter.writer
  });
  return [typeClass, handler];
}));
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
  finalize: identity_default.a
};
var serializer_reader = function reader() {
  var appTypeReaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var handlers = serializer_constructReadHandlers(appTypeReaders);
  return transit_default.a.reader('json', {
    handlers: serializer_objectSpread({}, handlers, {
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
var MapHandler = [Object, transit_default.a.makeWriteHandler({
  tag: function tag() {
    return 'map';
  },
  rep: function rep(v) {
    return entries(v).reduce(function (map, entry) {
      var _entry = serializer_slicedToArray(entry, 2),
          key = _entry[0],
          val = _entry[1];

      map.set(transit_default.a.keyword(key), val);
      return map;
    }, transit_default.a.map());
  }
})];
var serializer_writer = function writer() {
  var appTypeWriters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var verbose = opts.verbose;
  var transitType = verbose ? 'json-verbose' : 'json';
  return transit_default.a.writer(transitType, {
    handlers: transit_default.a.map([].concat(serializer_toConsumableArray(writeHandlers), MapHandler)),
    // Use transform to transform app types to sdk types before sdk
    // types are encoded by transit.
    transform: function transform(v) {
      // Check _.isObject for two reasons:
      // 1. _.isObject makes sure the value is not null, so the null check can be omitted in the canHandle implementation
      // 2. Perf. No need to run canHandle for primitives
      if (isObject_default()(v)) {
        if (v._sdkType) {
          return toType(v);
        }

        var appTypeWriter = find_default()(appTypeWriters, function (w) {
          return (// Check if the value is an application type instance
            w.appType && v instanceof w.appType || // ...or if the canHandle returns true.
            w.canHandle && w.canHandle(v)
          );
        });

        if (appTypeWriter) {
          return appTypeWriter.writer(v);
        }
      }

      return v;
    },
    // This is only needed for the REPL
    // TODO This could be stripped out for production build
    handlerForForeign: function handlerForForeign(x, handlers) {
      if (Array.isArray(x)) {
        return handlers.get('array');
      }

      if (serializer_typeof(x) === 'object') {
        return handlers.get('map');
      }

      return null;
    }
  });
};
var createTransitConverters = function createTransitConverters() {
  var typeHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var opts = arguments.length > 1 ? arguments[1] : undefined;

  var _typeHandlers$reduce = typeHandlers.reduce(function (memo, handler) {
    var r = {
      sdkType: handler.sdkType || // DEPRECATED Use handler.sdkType instead of handler.type
      handler.type,
      reader: handler.reader
    };
    var w = {
      sdkType: handler.sdkType || // DEPRECATED Use handler.sdkType instead of handler.type
      handler.type,
      appType: handler.appType || // DEPRECATED Use handler.appType instead of handler.customType
      handler.customType,
      canHandle: handler.canHandle,
      writer: handler.writer
    };
    memo.readers.push(r);
    memo.writers.push(w);
    return memo;
  }, {
    readers: [],
    writers: []
  }),
      readers = _typeHandlers$reduce.readers,
      writers = _typeHandlers$reduce.writers;

  return {
    reader: serializer_reader(readers),
    writer: serializer_writer(writers, opts)
  };
};
var read = function read(str) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$typeHandlers = opts.typeHandlers,
      typeHandlers = _opts$typeHandlers === void 0 ? [] : _opts$typeHandlers;
  var converters = createTransitConverters(typeHandlers);
  return converters.reader.read(str);
};
var write = function write(data) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$typeHandlers2 = opts.typeHandlers,
      typeHandlers = _opts$typeHandlers2 === void 0 ? [] : _opts$typeHandlers2,
      _opts$verbose = opts.verbose,
      verbose = _opts$verbose === void 0 ? false : _opts$verbose;
  var converters = createTransitConverters(typeHandlers, {
    verbose: verbose
  });
  return converters.writer.write(data);
};
// CONCATENATED MODULE: ./src/interceptors/transit_request.js
function transit_request_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function transit_request_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { transit_request_ownKeys(source, true).forEach(function (key) { transit_request_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { transit_request_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function transit_request_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function transit_request_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = transit_request_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function transit_request_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function transit_request_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function transit_request_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function transit_request_createClass(Constructor, protoProps, staticProps) { if (protoProps) transit_request_defineProperties(Constructor.prototype, protoProps); if (staticProps) transit_request_defineProperties(Constructor, staticProps); return Constructor; }


/**
   Transit encode the request
 */

var transit_request_TransitRequest =
/*#__PURE__*/
function () {
  function TransitRequest() {
    transit_request_classCallCheck(this, TransitRequest);
  }

  transit_request_createClass(TransitRequest, [{
    key: "enter",
    value: function enter(ctx) {
      var params = ctx.params,
          _ctx$headers = ctx.headers,
          headers = _ctx$headers === void 0 ? {} : _ctx$headers,
          typeHandlers = ctx.typeHandlers,
          transitVerbose = ctx.transitVerbose,
          restCtx = transit_request_objectWithoutProperties(ctx, ["params", "headers", "typeHandlers", "transitVerbose"]);

      if (headers['Content-Type'] === 'application/transit+json') {
        return ctx;
      }

      var _createTransitConvert = createTransitConverters(typeHandlers, {
        verbose: transitVerbose
      }),
          writer = _createTransitConvert.writer;

      return transit_request_objectSpread({
        params: writer.write(params),
        headers: transit_request_objectSpread({}, headers, {
          'Content-Type': 'application/transit+json'
        }),
        typeHandlers: typeHandlers,
        transitVerbose: transitVerbose
      }, restCtx);
    }
  }]);

  return TransitRequest;
}();


// EXTERNAL MODULE: ./node_modules/lodash/update.js
var update = __webpack_require__(11);
var update_default = /*#__PURE__*/__webpack_require__.n(update);

// CONCATENATED MODULE: ./src/interceptors/transit_response.js


function transit_response_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function transit_response_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { transit_response_ownKeys(source, true).forEach(function (key) { transit_response_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { transit_response_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function transit_response_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function transit_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function transit_response_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function transit_response_createClass(Constructor, protoProps, staticProps) { if (protoProps) transit_response_defineProperties(Constructor.prototype, protoProps); if (staticProps) transit_response_defineProperties(Constructor, staticProps); return Constructor; }



var isTransit = function isTransit(res) {
  var headers = res.headers || {};
  var contentType = headers['content-type'] || '';
  return contentType.startsWith('application/transit+json');
};
/**
   Transit encode the response
 */


var transit_response_TransitResponse =
/*#__PURE__*/
function () {
  function TransitResponse() {
    transit_response_classCallCheck(this, TransitResponse);
  }

  transit_response_createClass(TransitResponse, [{
    key: "error",
    value: function error(ctx) {
      var _createTransitConvert = createTransitConverters(ctx.typeHandlers),
          reader = _createTransitConvert.reader;

      if (!ctx.error.response) {
        return ctx;
      }

      if (!isTransit(ctx.error.response)) {
        return ctx;
      }

      return update_default()(transit_response_objectSpread({}, ctx), 'error.response.data', function (data) {
        return reader.read(data);
      });
    }
  }, {
    key: "leave",
    value: function leave(ctx) {
      var _createTransitConvert2 = createTransitConverters(ctx.typeHandlers),
          reader = _createTransitConvert2.reader;

      if (!ctx.res) {
        return ctx;
      }

      if (!isTransit(ctx.res)) {
        return ctx;
      }

      return update_default()(transit_response_objectSpread({}, ctx), 'res.data', function (data) {
        return reader.read(data);
      });
    }
  }]);

  return TransitResponse;
}();


// CONCATENATED MODULE: ./src/interceptors/format_http_response.js


function format_http_response_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function format_http_response_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { format_http_response_ownKeys(source, true).forEach(function (key) { format_http_response_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { format_http_response_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function format_http_response_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function format_http_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function format_http_response_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function format_http_response_createClass(Constructor, protoProps, staticProps) { if (protoProps) format_http_response_defineProperties(Constructor.prototype, protoProps); if (staticProps) format_http_response_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Takes `ctx` with HTTP `res` in it and strips internals (e.g. headers, config) and
 * returns only those values that we want the SDK function to return.
 *
 * Should be only used with SDK functions that do HTTP request (e.g. not with AuthInfo)
 */
var format_http_response_FormatHttpResponse =
/*#__PURE__*/
function () {
  function FormatHttpResponse() {
    format_http_response_classCallCheck(this, FormatHttpResponse);
  }

  format_http_response_createClass(FormatHttpResponse, [{
    key: "error",
    value: function error(ctx) {
      if (!ctx.error.response) {
        return ctx;
      }

      return update_default()(format_http_response_objectSpread({}, ctx), 'error.response', function (_ref) {
        var status = _ref.status,
            statusText = _ref.statusText,
            data = _ref.data;
        return {
          status: status,
          statusText: statusText,
          data: data
        };
      });
    }
  }, {
    key: "leave",
    value: function leave(ctx) {
      if (!ctx.res) {
        // Some cases, SDK tries to be smart and not call API endpoint if it's not
        // needed. For example, `logout` does not call token revoke endpoint if
        // the user is not logged in.
        // In those cases, there's no `res` in `ctx`
        return ctx;
      }

      return update_default()(format_http_response_objectSpread({}, ctx), 'res', function (_ref2) {
        var status = _ref2.status,
            statusText = _ref2.statusText,
            data = _ref2.data;
        return {
          status: status,
          statusText: statusText,
          data: data
        };
      });
    }
  }]);

  return FormatHttpResponse;
}();


// CONCATENATED MODULE: ./src/interceptors/rename_idp_params_for_auth.js
function rename_idp_params_for_auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function rename_idp_params_for_auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rename_idp_params_for_auth_ownKeys(source, true).forEach(function (key) { rename_idp_params_for_auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rename_idp_params_for_auth_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function rename_idp_params_for_auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function rename_idp_params_for_auth_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = rename_idp_params_for_auth_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function rename_idp_params_for_auth_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function rename_idp_params_for_auth_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rename_idp_params_for_auth_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rename_idp_params_for_auth_createClass(Constructor, protoProps, staticProps) { if (protoProps) rename_idp_params_for_auth_defineProperties(Constructor.prototype, protoProps); if (staticProps) rename_idp_params_for_auth_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Renames IdP related auth parameters to use snake case.

   Changes to `ctx`:

   Update following param names, if they exist:

   - change `ctx.params.idpId` to `ctx.params.idp_id`
   - change `ctx.params.idpClientId` to `ctx.params.idp_client_id`
   - change `ctx.params.idpToken` to `ctx.params.idp_token`
*/
var RenameIdpParamsForAuth =
/*#__PURE__*/
function () {
  function RenameIdpParamsForAuth() {
    rename_idp_params_for_auth_classCallCheck(this, RenameIdpParamsForAuth);
  }

  rename_idp_params_for_auth_createClass(RenameIdpParamsForAuth, [{
    key: "enter",
    value: function enter(_ref) {
      var params = _ref.params,
          ctx = rename_idp_params_for_auth_objectWithoutProperties(_ref, ["params"]);

      var idpId = params.idpId,
          idpClientId = params.idpClientId,
          idpToken = params.idpToken,
          rest = rename_idp_params_for_auth_objectWithoutProperties(params, ["idpId", "idpClientId", "idpToken"]);

      var idpIdObj = idpId ? {
        idp_id: idpId
      } : null;
      var idpClientIdObj = idpClientId ? {
        idp_client_id: idpClientId
      } : null;
      var idpTokenObj = idpToken ? {
        idp_token: idpToken
      } : null;
      return rename_idp_params_for_auth_objectSpread({}, ctx, {
        params: rename_idp_params_for_auth_objectSpread({}, idpIdObj, {}, idpClientIdObj, {}, idpTokenObj, {}, rest)
      });
    }
  }]);

  return RenameIdpParamsForAuth;
}();


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(70);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/version.js
// Update this when updating package.json
var sdkVersion = '1.21.0';
/* harmony default export */ var src_version = (sdkVersion);
// CONCATENATED MODULE: ./src/runtime.js

/* global window, process */

var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var nodeVersion = typeof process !== 'undefined' && typeof process.versions !== 'undefined' ? process.versions.node : ''; // User-Agent string for the SDK
// Only server-side, as modifying browser UA string causes
// side effects.

var userAgent = "sharetribe-flex-sdk-js/".concat(src_version);

if (isBrowser) {
  userAgent = null;
} else if (!isBrowser && nodeVersion !== '') {
  userAgent = "".concat(userAgent, " (node/").concat(nodeVersion, ")");
}

var sdkUserAgentString = userAgent;

// CONCATENATED MODULE: ./src/interceptors/endpoint_request.js
function endpoint_request_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = endpoint_request_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function endpoint_request_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function endpoint_request_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function endpoint_request_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { endpoint_request_ownKeys(source, true).forEach(function (key) { endpoint_request_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { endpoint_request_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function endpoint_request_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // GET requests: `params` includes query params. `queryParams` will be ignored
// POST requests: `params` includes body params. `queryParams` includes URL query params

var endpoint_request_doRequest = function doRequest(_ref) {
  var _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$queryParams = _ref.queryParams,
      queryParams = _ref$queryParams === void 0 ? {} : _ref$queryParams,
      httpOpts = _ref.httpOpts;
  var _httpOpts$method = httpOpts.method,
      method = _httpOpts$method === void 0 ? 'get' : _httpOpts$method,
      headers = httpOpts.headers;
  var data = null;
  var query = null;

  if (method.toLowerCase() === 'post') {
    data = params;
    query = queryParams;
  } else {
    query = params; // leave `data` null
  }

  var headersWithUa = sdkUserAgentString ? endpoint_request_objectSpread({}, headers, {
    'User-Agent': sdkUserAgentString
  }) : headers;

  var req = endpoint_request_objectSpread({}, httpOpts, {
    headers: headersWithUa,
    method: method,
    data: data,
    params: query
  });

  return external_axios_default.a.request(req);
};
/**
   Creates a list of endpoint interceptors that call the endpoint with the
   given parameters.
*/


var endpointRequest = function endpointRequest(_ref2) {
  var method = _ref2.method,
      url = _ref2.url,
      urlTemplate = _ref2.urlTemplate,
      httpOpts = _ref2.httpOpts;

  var httpOptsHeaders = httpOpts.headers,
      restHttpOpts = endpoint_request_objectWithoutProperties(httpOpts, ["headers"]);

  return {
    enter: function enter(ctx) {
      var params = ctx.params,
          queryParams = ctx.queryParams,
          pathParams = ctx.pathParams,
          headers = ctx.headers,
          perRequestOpts = ctx.perRequestOpts;
      return endpoint_request_doRequest({
        params: params,
        queryParams: queryParams,
        httpOpts: endpoint_request_objectSpread({}, perRequestOpts, {
          method: method || 'get',
          // Merge additional headers
          headers: endpoint_request_objectSpread({}, httpOptsHeaders, {}, headers)
        }, restHttpOpts, {
          url: url || urlTemplate(pathParams)
        })
      }).then(function (res) {
        return endpoint_request_objectSpread({}, ctx, {
          res: res
        });
      })["catch"](function (error) {
        var errorCtx = endpoint_request_objectSpread({}, ctx, {
          res: error.response
        }); // eslint-disable-next-line no-param-reassign


        error.ctx = errorCtx;
        throw error;
      });
    }
  };
};

/* harmony default export */ var endpoint_request = (endpointRequest);
// CONCATENATED MODULE: ./src/detect.js
function detect_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { detect_typeof = function _typeof(obj) { return typeof obj; }; } else { detect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return detect_typeof(obj); }

/**

   Collection of functions for detecting browser/server capabilities.

 */

/* eslint-disable import/prefer-default-export */

/* eslint-disable no-undef */
var hasBrowserCookies = function hasBrowserCookies() {
  return (typeof document === "undefined" ? "undefined" : detect_typeof(document)) === 'object' && typeof document.cookie === 'string';
};
// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(28);
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./src/browser_cookie_store.js
function browser_cookie_store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function browser_cookie_store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { browser_cookie_store_ownKeys(source, true).forEach(function (key) { browser_cookie_store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { browser_cookie_store_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function browser_cookie_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var generateKey = function generateKey(cookieId, namespace) {
  return "".concat(namespace, "-").concat(cookieId, "-token");
};

var browser_cookie_store_createStore = function createStore(_ref) {
  var clientId = _ref.clientId,
      cookieId = _ref.cookieId,
      secure = _ref.secure;
  var expiration = 30; // 30 days

  var namespace = 'st';
  var key = generateKey(clientId || cookieId, namespace);

  var getToken = function getToken() {
    return js_cookie_default.a.getJSON(key);
  };

  var setToken = function setToken(tokenData) {
    var secureFlag = secure ? {
      secure: true
    } : {};
    js_cookie_default.a.set(key, tokenData, browser_cookie_store_objectSpread({
      expires: expiration
    }, secureFlag));
  };

  var removeToken = function removeToken() {
    js_cookie_default.a.remove(key);
  };

  return {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken
  };
};

/* harmony default export */ var browser_cookie_store = (browser_cookie_store_createStore);
// CONCATENATED MODULE: ./src/memory_store.js
var memory_store_createStore = function createStore() {
  var memo;

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

/* harmony default export */ var memory_store = (memory_store_createStore);
// CONCATENATED MODULE: ./src/token_store.js



/* eslint-disable import/prefer-default-export */

var token_store_createDefaultTokenStore = function createDefaultTokenStore(tokenStore, clientId, secure) {
  if (hasBrowserCookies()) {
    return browser_cookie_store({
      clientId: clientId,
      secure: secure
    });
  } // Token store was not given and we can't use browser cookie store.
  // Default to in-memory store.


  return memory_store();
};
// CONCATENATED MODULE: ./src/sdk_context_runner.js


function sdk_context_runner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sdk_context_runner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sdk_context_runner_ownKeys(source, true).forEach(function (key) { sdk_context_runner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sdk_context_runner_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sdk_context_runner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formatError = function formatError(e) {
  /* eslint-disable no-param-reassign */
  if (e.response) {
    Object.assign(e, e.response);
    delete e.response;
  }

  if (e.ctx) {
    // Remove context `ctx` from the error response.
    //
    // `ctx` is SDK internal and shouldn't be exposed as a part of the
    // SDK public API. It can be added in the response for debugging
    // purposes, if needed.
    delete e.ctx;
  }

  if (e.config) {
    // Remove Axios config `config` from the error response.
    //
    // Axios attaches a config object to the error. This objects contains the
    // configuration that was used when error occured.
    //
    // `config` is SDK internal and shouldn't be exposed as a part of the
    // SDK public API. It can be added in the response for debugging
    // purposes, if needed.
    delete e.config;
  }

  throw e;
  /* eslint-enable no-param-reassign */
};

var sdk_context_runner_createSdkFnContextRunner = function createSdkFnContextRunner(_ref) {
  var params = _ref.params,
      queryParams = _ref.queryParams,
      pathParams = _ref.pathParams,
      perRequestOpts = _ref.perRequestOpts,
      ctx = _ref.ctx,
      interceptors = _ref.interceptors;
  return context_runner(compact_default()(interceptors))(sdk_context_runner_objectSpread({}, ctx, {
    params: params,
    queryParams: queryParams,
    pathParams: pathParams,
    perRequestOpts: perRequestOpts
  })).then(function (_ref2) {
    var res = _ref2.res;
    return res;
  })["catch"](formatError);
};

/* harmony default export */ var sdk_context_runner = (sdk_context_runner_createSdkFnContextRunner);
// CONCATENATED MODULE: ./src/sdk.js





function sdk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sdk_toConsumableArray(arr) { return sdk_arrayWithoutHoles(arr) || sdk_iterableToArray(arr) || sdk_nonIterableSpread(); }

function sdk_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function sdk_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function sdk_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function sdk_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = sdk_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function sdk_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function sdk_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sdk_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sdk_ownKeys(source, true).forEach(function (key) { sdk_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sdk_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sdk_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































/* eslint-disable class-methods-use-this */

var defaultSdkConfig = {
  clientId: null,
  clientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  assetCdnBaseUrl: 'https://cdn.st-api.com',
  typeHandlers: [],
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null,
  transitVerbose: false,
  disableDeprecationWarnings: false
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

var createHeaders = function createHeaders(transitVerbose) {
  if (transitVerbose) {
    return {
      'X-Transit-Verbose': 'true',
      Accept: 'application/transit+json'
    };
  }

  return {
    Accept: 'application/transit+json'
  };
};

var apis = {
  api: function api(_ref) {
    var baseUrl = _ref.baseUrl,
        version = _ref.version,
        adapter = _ref.adapter,
        httpAgent = _ref.httpAgent,
        httpsAgent = _ref.httpsAgent,
        transitVerbose = _ref.transitVerbose;
    return {
      headers: createHeaders(transitVerbose),
      baseURL: "".concat(baseUrl, "/").concat(version),
      transformRequest: function transformRequest(v) {
        return v;
      },
      transformResponse: function transformResponse(v) {
        return v;
      },
      adapter: adapter,
      paramsSerializer: params_serializer,
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
      baseURL: "".concat(baseUrl, "/").concat(version, "/"),
      transformRequest: [function (data) {
        return formData(data);
      }],
      // using default transformRequest, which can handle JSON and fallback to plain
      // test if JSON parsing fails
      adapter: adapter,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
  },
  assets: function assets(_ref3) {
    var assetCdnBaseUrl = _ref3.assetCdnBaseUrl,
        version = _ref3.version,
        adapter = _ref3.adapter,
        httpAgent = _ref3.httpAgent,
        httpsAgent = _ref3.httpsAgent;
    return {
      headers: {
        Accept: 'application/json'
      },
      baseURL: "".concat(assetCdnBaseUrl, "/").concat(version),
      adapter: adapter,
      paramsSerializer: params_serializer,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
  }
};
var authenticateInterceptors = [new FetchAuthTokenFromStore(), new fetch_auth_token_from_api_FetchAuthTokenFromApi(), new retry_with_anon_token_RetryWithAnonToken(), new retry_with_refresh_token_RetryWithRefreshToken(), new AddAuthHeader()];
var loginInterceptors = [new AddClientIdToParams(), new add_grant_type_to_params_AddGrantTypeToParams(), new AddIsLoggedInAsToContextFromParams(), new AddScopeToParams(), new SaveToken(), new AddAuthTokenResponse()];
var loginAsInterceptors = [new AddClientIdToParams(), new AddAuthorizationCodeGrantTypeToParams(), new AddIsLoggedInAsToContext(), new SaveToken(), new AddAuthTokenResponse()];
var logoutInterceptors = [new FetchAuthTokenFromStore(), new clear_token_after_revoke_ClearTokenAfterRevoke(), new retry_with_refresh_token_RetryWithRefreshToken(), new AddAuthHeader(), new FetchRefreshTokenForRevoke()];
var exchangeTokenInterceptors = [new FetchAuthTokenFromStore(), new retry_with_refresh_token_RetryWithRefreshToken(), new AddClientIdToParams(), new AddClientSecretToParams(), new AddSubjectTokenToParams(), new AddTokenExchangeGrantTypeToParams()];
var sdk_authWithIdpInterceptors = [new AddClientIdToParams(), new AddClientSecretToParams(), new RenameIdpParamsForAuth(), new SaveToken(), new AddAuthTokenResponse()];

var sdk_allowedPerRequestOpts = function allowedPerRequestOpts(opts) {
  return pick_default()(opts, ['onUploadProgress']);
};

var sdk_createSdkPostFn = function createSdkPostFn(sdkFnParams) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var perRequestOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return sdk_context_runner(sdk_objectSpread({
      params: params,
      queryParams: queryParams,
      perRequestOpts: sdk_allowedPerRequestOpts(perRequestOpts)
    }, sdkFnParams));
  };
};

var sdk_createSdkGetFn = function createSdkGetFn(sdkFnParams) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return sdk_context_runner(sdk_objectSpread({
      params: params
    }, sdkFnParams));
  };
};
/**
   Creates a new SDK function.

   'sdk function' is a function that will be attached to the SDK instance.
   These functions will be part of the SDK's public interface.

   It's meant to used by the user of the SDK.
 */


var createSdkFn = function createSdkFn(_ref4) {
  var method = _ref4.method,
      sdkFnParams = sdk_objectWithoutProperties(_ref4, ["method"]);

  if (method && method.toLowerCase() === 'post') {
    return sdk_createSdkPostFn(sdkFnParams);
  }

  return sdk_createSdkGetFn(sdkFnParams);
};
/**
   List of Marketplace API SDK methods that will be part of the SDKs public interface.
   The list is created from the `marketplaceApiEndpoints` list.

   The resulting objects in the list will have following fields:

   - method (String): get or post
   - path (String | Array): The function name and path. I.e. if the path is `listings.show`,
     then there will be a public SDK method `sdk.listings.show`
   - interceptors: List of interceptors.
 */


var sdk_marketplaceApiSdkFns = function marketplaceApiSdkFns(marketplaceApiEndpointInterceptors, ctx) {
  return marketplaceApi.map(function (_ref5) {
    var path = _ref5.path,
        method = _ref5.method;
    var fnPath = utils_fnPath(path);
    var fn = createSdkFn({
      method: method,
      ctx: ctx,
      interceptors: [new format_http_response_FormatHttpResponse()].concat(authenticateInterceptors, sdk_toConsumableArray(get_default()(marketplaceApiEndpointInterceptors, fnPath) || []))
    });
    return {
      path: fnPath,
      fn: fn
    };
  });
};

var sdk_createAuthApiSdkFn = function createAuthApiSdkFn(_ref6) {
  var ctx = _ref6.ctx,
      interceptors = _ref6.interceptors;
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return sdk_context_runner({
      params: params,
      ctx: ctx,
      interceptors: interceptors
    });
  };
};
/**
   List of SDK methods that are not derived from the endpoints.
 */


var sdk_authApiSdkFns = function authApiSdkFns(authApiEndpointInterceptors, ctx) {
  return [{
    path: 'login',
    fn: sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [new format_http_response_FormatHttpResponse()].concat(loginInterceptors, sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'token')))
    })
  }, {
    path: 'loginAs',
    fn: sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [new format_http_response_FormatHttpResponse()].concat(loginAsInterceptors, sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'token')))
    })
  }, {
    path: 'logout',
    fn: sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [new format_http_response_FormatHttpResponse()].concat(logoutInterceptors, sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'revoke')))
    })
  }, {
    path: 'exchangeToken',
    fn: sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [].concat(exchangeTokenInterceptors, sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'token')))
    })
  }, {
    path: 'authInfo',
    fn: sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [new AuthInfo()]
    })
  }, {
    path: 'loginWithIdp',
    fn: sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [].concat(sdk_authWithIdpInterceptors, sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'authWithIdp')))
    })
  }];
};

var sdk_assetsApiSdkFns = function assetsApiSdkFns(assetsEndpointInterceptors, ctx) {
  return [{
    path: 'assetByAlias',
    fn: function fn(_ref7) {
      var path = _ref7.path,
          alias = _ref7.alias;

      if (!path) {
        throw new Error('Missing mandatory parameter `path`');
      }

      if (!alias) {
        throw new Error('Missing mandatory parameter `alias`');
      }

      return sdk_context_runner({
        ctx: ctx,
        pathParams: {
          clientId: ctx.clientId,
          alias: alias || 'latest',
          assetPath: path[0] === '/' ? path.slice(1) : path
        },
        interceptors: [new format_http_response_FormatHttpResponse()].concat(sdk_toConsumableArray(get_default()(assetsEndpointInterceptors, 'byAlias')))
      });
    }
  }, {
    path: 'assetByVersion',
    fn: function fn(_ref8) {
      var path = _ref8.path,
          version = _ref8.version;

      if (!version) {
        throw new Error('Missing mandatory parameter `version`');
      }

      if (!version) {
        throw new Error('Missing mandatory parameter `version`');
      }

      return sdk_context_runner({
        ctx: ctx,
        pathParams: {
          clientId: ctx.clientId,
          version: version,
          assetPath: path[0] === '/' ? path.slice(1) : path
        },
        interceptors: [new format_http_response_FormatHttpResponse()].concat(sdk_toConsumableArray(get_default()(assetsEndpointInterceptors, 'byVersion')))
      });
    }
  }, {
    path: 'assetsByAlias',
    fn: function fn(_ref9) {
      var paths = _ref9.paths,
          alias = _ref9.alias;

      if (!paths) {
        throw new Error('Missing mandatory parameter `paths`');
      }

      if (paths.length === 0) {
        throw new Error('`paths` must not be empty');
      }

      if (!alias) {
        throw new Error('Missing mandatory parameter `alias`');
      }

      var _canonicalAssetPaths = canonicalAssetPaths(paths),
          pathPrefix = _canonicalAssetPaths.pathPrefix,
          relativePaths = _canonicalAssetPaths.relativePaths;

      return sdk_context_runner({
        ctx: ctx,
        params: {
          assets: relativePaths
        },
        pathParams: {
          clientId: ctx.clientId,
          alias: alias,
          assetPath: pathPrefix
        },
        interceptors: [new format_http_response_FormatHttpResponse()].concat(sdk_toConsumableArray(get_default()(assetsEndpointInterceptors, 'byAlias')))
      });
    }
  }, {
    path: 'assetsByVersion',
    fn: function fn(_ref10) {
      var paths = _ref10.paths,
          version = _ref10.version;

      if (!paths) {
        throw new Error('Missing mandatory parameter `paths`');
      }

      if (paths.length === 0) {
        throw new Error('`paths` must not be empty');
      }

      if (!version) {
        throw new Error('Missing mandatory parameter `version`');
      }

      var _canonicalAssetPaths2 = canonicalAssetPaths(paths),
          pathPrefix = _canonicalAssetPaths2.pathPrefix,
          relativePaths = _canonicalAssetPaths2.relativePaths;

      return sdk_context_runner({
        ctx: ctx,
        params: {
          assets: relativePaths
        },
        pathParams: {
          clientId: ctx.clientId,
          version: version,
          assetPath: pathPrefix
        },
        interceptors: [new format_http_response_FormatHttpResponse()].concat(sdk_toConsumableArray(get_default()(assetsEndpointInterceptors, 'byVersion')))
      });
    }
  }];
}; // const logAndReturn = (data) => {
//   console.log(data);
//   return data;
// };
// Take SDK configurations, do transformation and return.


var sdk_transformSdkConfig = function transformSdkConfig(_ref11) {
  var baseUrl = _ref11.baseUrl,
      tokenStore = _ref11.tokenStore,
      sdkConfig = sdk_objectWithoutProperties(_ref11, ["baseUrl", "tokenStore"]);

  return sdk_objectSpread({}, sdkConfig, {
    baseUrl: utils_trimEndSlash(baseUrl),
    tokenStore: tokenStore || token_store_createDefaultTokenStore(tokenStore, sdkConfig.clientId, !!sdkConfig.secure)
  });
}; // Validate SDK configurations, throw an error if invalid, otherwise return.


var sdk_validateSdkConfig = function validateSdkConfig(sdkConfig) {
  if (!sdkConfig.clientId) {
    throw new Error('clientId must be provided');
  }

  if (!sdkConfig.baseUrl) {
    throw new Error('baseUrl must be provided');
  }

  if (!sdkConfig.assetCdnBaseUrl) {
    throw new Error('assetCdnBaseUrl must be provided');
  }
  /* global console */


  if (isBrowser && sdkConfig.clientSecret && !sdkConfig.dangerouslyAllowClientSecretInBrowser) {
    /* eslint-disable no-console */
    console.warn('Security warning! You are using client secret in a browser. This may expose the client secret to the public.');
    console.warn('If you know what you are doing and you have secured the website by other means (e.g. HTTP basic auth), you should set the SDK configuration `dangerouslyAllowClientSecretInBrowser` to `true` to dismiss this warning.');
    console.warn('In the future SDK versions, we may change this warning to an error causing the site not to work properly, unless `dangerouslyAllowClientSecretInBrowser` is set');
    /* eslint-enable no-console */
  }

  return sdkConfig;
};

var sdk_createMarketplaceApiEndpointInterceptors = function createMarketplaceApiEndpointInterceptors(httpOpts) {
  return (// Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    //
    marketplaceApi.reduce(function (acc, _ref12) {
      var path = _ref12.path,
          method = _ref12.method,
          multipart = _ref12.multipart;
      var fnPath = utils_fnPath(path);
      var url = "api/".concat(path);
      var requestFormatInterceptors = [];

      if (method === 'post' && multipart) {
        requestFormatInterceptors = [new multipart_request_MultipartRequest()];
      } else if (method === 'post') {
        requestFormatInterceptors = [new transit_request_TransitRequest()];
      } else {
        requestFormatInterceptors = [];
      }

      return set_default()(acc, fnPath, [new transit_response_TransitResponse()].concat(sdk_toConsumableArray(requestFormatInterceptors), [endpoint_request({
        method: method,
        url: url,
        httpOpts: httpOpts
      })]));
    }, {})
  );
};

var sdk_createAuthApiEndpointInterceptors = function createAuthApiEndpointInterceptors(httpOpts) {
  return (// Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    //
    authApi.reduce(function (acc, _ref13) {
      var path = _ref13.path,
          method = _ref13.method;
      var fnPath = utils_fnPath(path);
      var url = "auth/".concat(path);
      return set_default()(acc, fnPath, [endpoint_request({
        method: method,
        url: url,
        httpOpts: httpOpts
      })]);
    }, {})
  );
};

var sdk_createAssetsApiEndpointInterceptors = function createAssetsApiEndpointInterceptors(httpOpts) {
  return (// Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    //
    assetsApi.reduce(function (acc, _ref14) {
      var pathFn = _ref14.pathFn,
          method = _ref14.method,
          name = _ref14.name;

      var urlTemplate = function urlTemplate(pathParams) {
        return "assets/".concat(pathFn(pathParams));
      };

      return set_default()(acc, name, [endpoint_request({
        method: method,
        urlTemplate: urlTemplate,
        httpOpts: httpOpts
      })]);
    }, {})
  );
};

var sdk_SharetribeSdk =
/**
   Instantiates a new SharetribeSdk instance.
   The constructor assumes the config options have been
   already validated.
 */
function SharetribeSdk(userSdkConfig) {
  var _this = this;

  sdk_classCallCheck(this, SharetribeSdk);

  // Transform and validation SDK configurations
  var sdkConfig = sdk_validateSdkConfig(sdk_transformSdkConfig(sdk_objectSpread({}, defaultSdkConfig, {}, userSdkConfig))); // Instantiate API configs

  var apiConfigs = mapValues_default()(apis, function (apiConfig) {
    return apiConfig(sdkConfig);
  });

  var marketplaceApiEndpointInterceptors = sdk_createMarketplaceApiEndpointInterceptors(apiConfigs.api);
  var authApiEndpointInterceptors = sdk_createAuthApiEndpointInterceptors(apiConfigs.auth);
  var assetsApiEndpointInterceptors = sdk_createAssetsApiEndpointInterceptors(apiConfigs.assets);
  var allEndpointInterceptors = {
    api: marketplaceApiEndpointInterceptors,
    auth: authApiEndpointInterceptors,
    assets: assetsApiEndpointInterceptors
  };
  var ctx = {
    tokenStore: sdkConfig.tokenStore,
    endpointInterceptors: allEndpointInterceptors,
    clientId: sdkConfig.clientId,
    clientSecret: sdkConfig.clientSecret,
    typeHandlers: sdkConfig.typeHandlers,
    transitVerbose: sdkConfig.transitVerbose,
    disableDeprecationWarnings: sdkConfig.disableDeprecationWarnings
  }; // Assign SDK functions to 'this'

  sdk_marketplaceApiSdkFns(marketplaceApiEndpointInterceptors, ctx).forEach(function (_ref15) {
    var path = _ref15.path,
        fn = _ref15.fn;
    return set_default()(_this, path, fn);
  });
  sdk_authApiSdkFns(authApiEndpointInterceptors, ctx).forEach(function (_ref16) {
    var path = _ref16.path,
        fn = _ref16.fn;
    return set_default()(_this, path, fn);
  });
  sdk_assetsApiSdkFns(assetsApiEndpointInterceptors, ctx).forEach(function (_ref17) {
    var path = _ref17.path,
        fn = _ref17.fn;
    return set_default()(_this, path, fn);
  });
};


// CONCATENATED MODULE: ./src/interceptors/add_multitenant_auth_token_response.js
function add_multitenant_auth_token_response_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_multitenant_auth_token_response_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_multitenant_auth_token_response_ownKeys(source, true).forEach(function (key) { add_multitenant_auth_token_response_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_multitenant_auth_token_response_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_multitenant_auth_token_response_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_multitenant_auth_token_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_multitenant_auth_token_response_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_multitenant_auth_token_response_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_multitenant_auth_token_response_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_multitenant_auth_token_response_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Take token data from `res` and add it to `ctx` top-level.
   Make sure to include only the necessary keys.

   Changes to `ctx`:

   - add `authToken`
*/
var AddMultitenantAuthTokenResponse =
/*#__PURE__*/
function () {
  function AddMultitenantAuthTokenResponse() {
    add_multitenant_auth_token_response_classCallCheck(this, AddMultitenantAuthTokenResponse);
  }

  add_multitenant_auth_token_response_createClass(AddMultitenantAuthTokenResponse, [{
    key: "leave",

    /* eslint camelcase: "off" */
    value: function leave(ctx) {
      var _ctx$res$data = ctx.res.data,
          access_token = _ctx$res$data.access_token,
          token_type = _ctx$res$data.token_type,
          expires_in = _ctx$res$data.expires_in,
          scope = _ctx$res$data.scope;
      return add_multitenant_auth_token_response_objectSpread({}, ctx, {
        authToken: {
          access_token: access_token,
          token_type: token_type,
          expires_in: expires_in,
          scope: scope
        }
      });
    }
  }]);

  return AddMultitenantAuthTokenResponse;
}();


// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(71);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// CONCATENATED MODULE: ./src/interceptors/add_multitenant_client_secret_token_to_ctx.js
function add_multitenant_client_secret_token_to_ctx_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_multitenant_client_secret_token_to_ctx_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_multitenant_client_secret_token_to_ctx_ownKeys(source, true).forEach(function (key) { add_multitenant_client_secret_token_to_ctx_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_multitenant_client_secret_token_to_ctx_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_multitenant_client_secret_token_to_ctx_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_multitenant_client_secret_token_to_ctx_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_multitenant_client_secret_token_to_ctx_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_multitenant_client_secret_token_to_ctx_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_multitenant_client_secret_token_to_ctx_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_multitenant_client_secret_token_to_ctx_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Read `multitenantClientSecret` and `hostname` from `ctx`. Then construct a
   signed JWT and add it to the context for use later in the interceptor chain.

   Changes to `ctx`:

   - Add `multitenantClientSecretToken`
*/

var signingOpts = {
  algorithm: 'HS256',
  expiresIn: 60 // seconds, should be enough for possible clock skew, but not too long

};

var add_multitenant_client_secret_token_to_ctx_AddMultitenantClientSecretTokenToCtx =
/*#__PURE__*/
function () {
  function AddMultitenantClientSecretTokenToCtx() {
    add_multitenant_client_secret_token_to_ctx_classCallCheck(this, AddMultitenantClientSecretTokenToCtx);
  }

  add_multitenant_client_secret_token_to_ctx_createClass(AddMultitenantClientSecretTokenToCtx, [{
    key: "enter",
    value: function enter(ctx) {
      var multitenantClientSecret = ctx.multitenantClientSecret,
          hostname = ctx.hostname;
      var multitenantClientSecretToken = external_jsonwebtoken_default.a.sign({
        hostname: hostname
      }, multitenantClientSecret, signingOpts);
      return add_multitenant_client_secret_token_to_ctx_objectSpread({}, ctx, {
        multitenantClientSecretToken: multitenantClientSecretToken
      });
    }
  }]);

  return AddMultitenantClientSecretTokenToCtx;
}();


// CONCATENATED MODULE: ./src/interceptors/add_multitenant_client_secret_to_params.js
function add_multitenant_client_secret_to_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_multitenant_client_secret_to_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_multitenant_client_secret_to_params_ownKeys(source, true).forEach(function (key) { add_multitenant_client_secret_to_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_multitenant_client_secret_to_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_multitenant_client_secret_to_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_multitenant_client_secret_to_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_multitenant_client_secret_to_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_multitenant_client_secret_to_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_multitenant_client_secret_to_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_multitenant_client_secret_to_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Read `multitenantClientSecretToken` from `ctx` and add it as `client_secret`
   to `params`.

   Changes to `ctx`:

   - add `params.client_secret`
*/
var AddMultitenantClientSecretToParams =
/*#__PURE__*/
function () {
  function AddMultitenantClientSecretToParams() {
    add_multitenant_client_secret_to_params_classCallCheck(this, AddMultitenantClientSecretToParams);
  }

  add_multitenant_client_secret_to_params_createClass(AddMultitenantClientSecretToParams, [{
    key: "enter",
    value: function enter(ctx) {
      var multitenantClientSecretToken = ctx.multitenantClientSecretToken,
          _ctx$params = ctx.params,
          params = _ctx$params === void 0 ? {} : _ctx$params;
      return add_multitenant_client_secret_to_params_objectSpread({}, ctx, {
        params: add_multitenant_client_secret_to_params_objectSpread({}, params, {
          client_secret: multitenantClientSecretToken
        })
      });
    }
  }]);

  return AddMultitenantClientSecretToParams;
}();


// CONCATENATED MODULE: ./src/interceptors/add_multitenant_token_exchange_params.js


function add_multitenant_token_exchange_params_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_multitenant_token_exchange_params_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_multitenant_token_exchange_params_ownKeys(source, true).forEach(function (key) { add_multitenant_token_exchange_params_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_multitenant_token_exchange_params_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_multitenant_token_exchange_params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_multitenant_token_exchange_params_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_multitenant_token_exchange_params_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_multitenant_token_exchange_params_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_multitenant_token_exchange_params_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_multitenant_token_exchange_params_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Add required fields to `params` for multitenant token exchange request.
   It fetches the `access_token` from the `tokenStore`, which is used as the 
   `subject_token` in the request params. 

   Throws if `tokenStore` doesn't have a valid user token.

   Changes to `ctx`:

   - add `params.scope`
   - add `params.grant_type`
   - add `params.subject_token`
*/
var add_multitenant_token_exchange_params_AddMultitenantTokenExchangeParams =
/*#__PURE__*/
function () {
  function AddMultitenantTokenExchangeParams() {
    add_multitenant_token_exchange_params_classCallCheck(this, AddMultitenantTokenExchangeParams);
  }

  add_multitenant_token_exchange_params_createClass(AddMultitenantTokenExchangeParams, [{
    key: "enter",
    value: function enter(ctx) {
      var tokenStore = ctx.tokenStore;
      return Promise.resolve().then(tokenStore.getToken).then(function (storedToken) {
        // throw if no token is found
        if (!storedToken || !storedToken.access_token) {
          throw new Error('No access token found in store');
        } // throw if token has invalid scope


        var scopes = storedToken.scope.split(' ');

        if (!find_default()(scopes, function (scope) {
          return scope === 'user';
        })) {
          throw new Error('Access token scope not supported');
        }

        return add_multitenant_token_exchange_params_objectSpread({}, ctx, {
          params: add_multitenant_token_exchange_params_objectSpread({}, ctx.params, {
            scope: 'trusted:user',
            grant_type: 'multitenant_token_exchange',
            subject_token: storedToken.access_token
          })
        });
      });
    }
  }]);

  return AddMultitenantTokenExchangeParams;
}();


// CONCATENATED MODULE: ./src/interceptors/format_multitenant_http_response.js
function format_multitenant_http_response_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function format_multitenant_http_response_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { format_multitenant_http_response_ownKeys(source, true).forEach(function (key) { format_multitenant_http_response_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { format_multitenant_http_response_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function format_multitenant_http_response_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function format_multitenant_http_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function format_multitenant_http_response_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function format_multitenant_http_response_createClass(Constructor, protoProps, staticProps) { if (protoProps) format_multitenant_http_response_defineProperties(Constructor.prototype, protoProps); if (staticProps) format_multitenant_http_response_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Takes `ctx` with HTTP `res` in it and strips token data from multitenant API
 * responses, leaving only `client_data`, which the SDK caller needs.
 */
var FormatMultitenantHttpResponse =
/*#__PURE__*/
function () {
  function FormatMultitenantHttpResponse() {
    format_multitenant_http_response_classCallCheck(this, FormatMultitenantHttpResponse);
  }

  format_multitenant_http_response_createClass(FormatMultitenantHttpResponse, [{
    key: "leave",
    value: function leave(ctx) {
      var res = ctx.res;

      if (!res) {
        return ctx;
      }

      return format_multitenant_http_response_objectSpread({}, ctx, {
        res: format_multitenant_http_response_objectSpread({}, res, {
          data: {
            client_data: res.data.client_data
          }
        })
      });
    }
  }]);

  return FormatMultitenantHttpResponse;
}();


// CONCATENATED MODULE: ./src/interceptors/add_multitenant_auth_header.js
function add_multitenant_auth_header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_multitenant_auth_header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_multitenant_auth_header_ownKeys(source, true).forEach(function (key) { add_multitenant_auth_header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_multitenant_auth_header_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_multitenant_auth_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_multitenant_auth_header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_multitenant_auth_header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_multitenant_auth_header_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_multitenant_auth_header_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_multitenant_auth_header_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Read `multitenantClientSecretToken` from `ctx` and add it to Authorization
   header.

   Changes to `ctx`:

   - Add `headers.Authorization`
 */
var AddMultitenantAuthHeader =
/*#__PURE__*/
function () {
  function AddMultitenantAuthHeader() {
    add_multitenant_auth_header_classCallCheck(this, AddMultitenantAuthHeader);
  }

  add_multitenant_auth_header_createClass(AddMultitenantAuthHeader, [{
    key: "enter",
    value: function enter(ctx) {
      var multitenantClientSecretToken = ctx.multitenantClientSecretToken,
          _ctx$headers = ctx.headers,
          headers = _ctx$headers === void 0 ? {} : _ctx$headers;
      var authHeaders = {
        Authorization: "Bearer ".concat(multitenantClientSecretToken)
      };
      return add_multitenant_auth_header_objectSpread({}, ctx, {
        headers: add_multitenant_auth_header_objectSpread({}, headers, {}, authHeaders)
      });
    }
  }]);

  return AddMultitenantAuthHeader;
}();


// CONCATENATED MODULE: ./src/interceptors/add_multitenant_auth_with_idp_response.js
function add_multitenant_auth_with_idp_response_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_multitenant_auth_with_idp_response_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_multitenant_auth_with_idp_response_ownKeys(source, true).forEach(function (key) { add_multitenant_auth_with_idp_response_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_multitenant_auth_with_idp_response_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_multitenant_auth_with_idp_response_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function add_multitenant_auth_with_idp_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add_multitenant_auth_with_idp_response_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function add_multitenant_auth_with_idp_response_createClass(Constructor, protoProps, staticProps) { if (protoProps) add_multitenant_auth_with_idp_response_defineProperties(Constructor.prototype, protoProps); if (staticProps) add_multitenant_auth_with_idp_response_defineProperties(Constructor, staticProps); return Constructor; }

/**
   Take token data from `res` and add it to `ctx` top-level.
   Make sure to include only the necessary keys.

   Changes to `ctx`:

   - add `authToken`
*/
var AddMultitenantAuthWithIdpResponse =
/*#__PURE__*/
function () {
  function AddMultitenantAuthWithIdpResponse() {
    add_multitenant_auth_with_idp_response_classCallCheck(this, AddMultitenantAuthWithIdpResponse);
  }

  add_multitenant_auth_with_idp_response_createClass(AddMultitenantAuthWithIdpResponse, [{
    key: "leave",

    /* eslint camelcase: "off" */
    value: function leave(ctx) {
      var _ctx$res$data = ctx.res.data,
          access_token = _ctx$res$data.access_token,
          refresh_token = _ctx$res$data.refresh_token,
          token_type = _ctx$res$data.token_type,
          expires_in = _ctx$res$data.expires_in,
          scope = _ctx$res$data.scope;
      return add_multitenant_auth_with_idp_response_objectSpread({}, ctx, {
        authToken: {
          access_token: access_token,
          refresh_token: refresh_token,
          token_type: token_type,
          expires_in: expires_in,
          scope: scope
        }
      });
    }
  }]);

  return AddMultitenantAuthWithIdpResponse;
}();


// CONCATENATED MODULE: ./src/multitenant_sdk.js




function multitenant_sdk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function multitenant_sdk_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = multitenant_sdk_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function multitenant_sdk_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function multitenant_sdk_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function multitenant_sdk_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { multitenant_sdk_ownKeys(source, true).forEach(function (key) { multitenant_sdk_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { multitenant_sdk_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function multitenant_sdk_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function multitenant_sdk_toConsumableArray(arr) { return multitenant_sdk_arrayWithoutHoles(arr) || multitenant_sdk_iterableToArray(arr) || multitenant_sdk_nonIterableSpread(); }

function multitenant_sdk_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function multitenant_sdk_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function multitenant_sdk_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

















/* eslint-disable class-methods-use-this */

var multitenant_sdk_defaultSdkConfig = {
  hostname: null,
  multitenantClientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null
};
var multitenantAuthApi = [{
  path: 'token',
  method: 'post'
}, {
  path: 'client_data',
  method: 'get'
}, {
  path: 'auth_with_idp',
  method: 'post'
}];
var multitenant_sdk_apis = {
  auth: function auth(_ref) {
    var baseUrl = _ref.baseUrl,
        version = _ref.version,
        adapter = _ref.adapter,
        httpAgent = _ref.httpAgent,
        httpsAgent = _ref.httpsAgent;
    return {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      baseURL: "".concat(baseUrl, "/").concat(version, "/"),
      transformRequest: [function (data) {
        return formData(data);
      }],
      adapter: adapter,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
  }
};

var multitenant_sdk_tokenInterceptors = function tokenInterceptors(authApiEndpointInterceptors) {
  return [new format_http_response_FormatHttpResponse(), new FormatMultitenantHttpResponse(), new add_multitenant_client_secret_token_to_ctx_AddMultitenantClientSecretTokenToCtx(), new AddMultitenantClientSecretToParams(), new SaveToken(), new AddMultitenantAuthTokenResponse()].concat(multitenant_sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'token')));
};

var multitenant_sdk_clientDataInterceptors = function clientDataInterceptors(authApiEndpointInterceptors) {
  return [new format_http_response_FormatHttpResponse(), new add_multitenant_client_secret_token_to_ctx_AddMultitenantClientSecretTokenToCtx(), new AddMultitenantAuthHeader()].concat(multitenant_sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'clientData')));
};

var multitenant_sdk_tokenAndClientDataInterceptor = function tokenAndClientDataInterceptor(authApiEndpointInterceptors) {
  return {
    enter: function enter(ctx) {
      var tokenStore = ctx.tokenStore;
      return Promise.resolve().then(tokenStore.getToken).then(function (storedToken) {
        // If there's a token with any access, it's only necessary
        // to fetch the client data. Else, we request a token and
        // the response will also contain the client data.
        // We don't need to distinguish between token scopes.
        if (storedToken) {
          return context_runner(multitenant_sdk_clientDataInterceptors(authApiEndpointInterceptors))(ctx).then(function (newCtx) {
            var res = newCtx.res;
            return multitenant_sdk_objectSpread({}, newCtx, {
              res: multitenant_sdk_objectSpread({}, res, {
                data: {
                  client_data: res.data
                }
              })
            });
          });
        }

        return context_runner(multitenant_sdk_tokenInterceptors(authApiEndpointInterceptors))(multitenant_sdk_objectSpread({}, ctx, {
          params: {
            grant_type: 'multitenant_client_credentials'
          }
        }));
      });
    }
  };
};

var multitenant_sdk_authWithIdpInterceptors = function authWithIdpInterceptors(authApiEndpointInterceptors) {
  return [new format_http_response_FormatHttpResponse(), new add_multitenant_client_secret_token_to_ctx_AddMultitenantClientSecretTokenToCtx(), new AddMultitenantClientSecretToParams(), new RenameIdpParamsForAuth(), new SaveToken(), new AddMultitenantAuthWithIdpResponse()].concat(multitenant_sdk_toConsumableArray(get_default()(authApiEndpointInterceptors, 'authWithIdp')));
};

var multitenant_sdk_createAuthApiSdkFn = function createAuthApiSdkFn(_ref2) {
  var ctx = _ref2.ctx,
      interceptors = _ref2.interceptors;
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return sdk_context_runner({
      params: params,
      ctx: ctx,
      interceptors: interceptors
    });
  };
};
/**
   List of auth-related SDK methods
 */


var multitenant_sdk_authApiSdkFns = function authApiSdkFns(authApiEndpointInterceptors, ctx) {
  return [{
    path: 'clientData',
    fn: multitenant_sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [multitenant_sdk_tokenAndClientDataInterceptor(authApiEndpointInterceptors)]
    })
  }, {
    path: 'tokenExchange',
    fn: multitenant_sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: [new add_multitenant_token_exchange_params_AddMultitenantTokenExchangeParams()].concat(multitenant_sdk_toConsumableArray(multitenant_sdk_tokenInterceptors(authApiEndpointInterceptors)))
    })
  }, {
    path: 'loginWithIdp',
    fn: multitenant_sdk_createAuthApiSdkFn({
      ctx: ctx,
      interceptors: multitenant_sdk_authWithIdpInterceptors(authApiEndpointInterceptors)
    })
  }];
}; // Take SDK configurations, do transformation and return.


var multitenant_sdk_transformSdkConfig = function transformSdkConfig(_ref3) {
  var baseUrl = _ref3.baseUrl,
      tokenStore = _ref3.tokenStore,
      sdkConfig = multitenant_sdk_objectWithoutProperties(_ref3, ["baseUrl", "tokenStore"]);

  return multitenant_sdk_objectSpread({}, sdkConfig, {
    baseUrl: utils_trimEndSlash(baseUrl),
    tokenStore: tokenStore || memory_store()
  });
}; // Validate SDK configurations, throw an error if invalid, otherwise return.


var multitenant_sdk_validateSdkConfig = function validateSdkConfig(sdkConfig) {
  if (!sdkConfig.hostname) {
    throw new Error('hostname must be provided');
  }

  if (!sdkConfig.multitenantClientSecret) {
    throw new Error('multitenantClientSecret must be provided');
  }

  if (!sdkConfig.baseUrl) {
    throw new Error('baseUrl must be provided');
  }

  if (isBrowser) {
    throw new Error('Using the multitenant SDK in browser is not allowed.');
  }

  return sdkConfig;
};

var multitenant_sdk_createAuthApiEndpointInterceptors = function createAuthApiEndpointInterceptors(httpOpts) {
  return (// Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    //
    multitenantAuthApi.reduce(function (acc, _ref4) {
      var path = _ref4.path,
          method = _ref4.method;
      var fnPath = utils_fnPath(path);
      var url = "auth/multitenant/".concat(path);
      return set_default()(acc, fnPath, [endpoint_request({
        method: method,
        url: url,
        httpOpts: httpOpts
      })]);
    }, {})
  );
};

var multitenant_sdk_MultitenantSharetribeSdk =
/**
   Instantiates a new MultitenantSharetribeSdk instance.
   The constructor assumes the config options have been
   already validated.
 */
function MultitenantSharetribeSdk(userSdkConfig) {
  var _this = this;

  multitenant_sdk_classCallCheck(this, MultitenantSharetribeSdk);

  // Transform and validation SDK configurations
  var sdkConfig = multitenant_sdk_validateSdkConfig(multitenant_sdk_transformSdkConfig(multitenant_sdk_objectSpread({}, multitenant_sdk_defaultSdkConfig, {}, userSdkConfig))); // Instantiate API configs

  var apiConfigs = mapValues_default()(multitenant_sdk_apis, function (apiConfig) {
    return apiConfig(sdkConfig);
  });

  var authApiEndpointInterceptors = multitenant_sdk_createAuthApiEndpointInterceptors(apiConfigs.auth);
  var allEndpointInterceptors = {
    auth: authApiEndpointInterceptors
  };
  var ctx = {
    endpointInterceptors: allEndpointInterceptors,
    multitenantClientSecret: sdkConfig.multitenantClientSecret,
    hostname: sdkConfig.hostname,
    tokenStore: sdkConfig.tokenStore
  }; // Assign SDK functions to 'this'

  multitenant_sdk_authApiSdkFns(authApiEndpointInterceptors, ctx).forEach(function (_ref5) {
    var path = _ref5.path,
        fn = _ref5.fn;
    return set_default()(_this, path, fn);
  });
};


// CONCATENATED MODULE: ./src/express_cookie_store.js
function express_cookie_store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function express_cookie_store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { express_cookie_store_ownKeys(source, true).forEach(function (key) { express_cookie_store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { express_cookie_store_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function express_cookie_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express_cookie_store_generateKey = function generateKey(cookieId, namespace) {
  return "".concat(namespace, "-").concat(cookieId, "-token");
};

var express_cookie_store_createStore = function createStore(_ref) {
  var clientId = _ref.clientId,
      cookieId = _ref.cookieId,
      req = _ref.req,
      res = _ref.res,
      secure = _ref.secure;
  var expiration = 180; // 180 days

  var namespace = 'st';
  var key = express_cookie_store_generateKey(clientId || cookieId, namespace); // A mutable variable containing the current token.
  // When a `setToken` is called, the current token will be
  // stored to this variable. `getToken` will read subsequent
  // calls from this variable.

  var currentToken;

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
    var secureFlag = secure ? {
      secure: true
    } : {}; // Manually stringify tokenData.
    // Express supports passing object to `res.cookie` which will be then automatically
    // JSON stringified. However, we CAN NOT use it, because it seems to output invalid JSON
    // with a "j" tag in front of the content (`"j:{ ...json here... }`). Because we want
    // to read that cookie also in browser, we don't want to produce invalid JSON.

    res.cookie(key, JSON.stringify(tokenData), express_cookie_store_objectSpread({
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

/* harmony default export */ var express_cookie_store = (express_cookie_store_createStore);
// CONCATENATED MODULE: ./src/index.js









var src_createInstance = function createInstance(config) {
  return new sdk_SharetribeSdk(config);
};

var src_createMultitenantInstance = function createMultitenantInstance(config) {
  return new multitenant_sdk_MultitenantSharetribeSdk(config);
}; // Export token stores


var src_tokenStore = {
  memoryStore: memory_store,
  browserCookieStore: browser_cookie_store,
  expressCookieStore: express_cookie_store
}; // Export Transit serialization helpers

var src_transit = {
  read: read,
  write: write
}; // Export util functions

var util = {
  objectQueryString: utils_objectQueryString
};
/* eslint-disable import/prefer-default-export */



/***/ })
/******/ ]);
});