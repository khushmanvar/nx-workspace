/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 766:
/*!****************************!*\
  !*** ./checkout/server.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



__webpack_require__.e(/*! import() */ 225).then(__webpack_require__.bind(__webpack_require__, /*! ./src/main.server */ 225));

/***/ }),

/***/ 852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ (function(module) {

module.exports = require("async_hooks");

/***/ }),

/***/ 4300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ (function(module) {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ (function(module) {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ (function(module) {

module.exports = require("events");

/***/ }),

/***/ 7147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ (function(module) {

module.exports = require("http");

/***/ }),

/***/ 5687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ (function(module) {

module.exports = require("https");

/***/ }),

/***/ 1808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ (function(module) {

module.exports = require("net");

/***/ }),

/***/ 7561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ (function(module) {

module.exports = require("node:fs");

/***/ }),

/***/ 3977:
/*!***********************************!*\
  !*** external "node:fs/promises" ***!
  \***********************************/
/***/ (function(module) {

module.exports = require("node:fs/promises");

/***/ }),

/***/ 9411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ (function(module) {

module.exports = require("node:path");

/***/ }),

/***/ 1041:
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ (function(module) {

module.exports = require("node:url");

/***/ }),

/***/ 2037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 1017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 3477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ (function(module) {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ (function(module) {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ (function(module) {

module.exports = require("string_decoder");

/***/ }),

/***/ 9512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ (function(module) {

module.exports = require("timers");

/***/ }),

/***/ 6224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ (function(module) {

module.exports = require("tty");

/***/ }),

/***/ 7310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ (function(module) {

module.exports = require("url");

/***/ }),

/***/ 3837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

module.exports = require("util");

/***/ }),

/***/ 9796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ (function(module) {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"52":"c95da4652076c8da","140":"71541e4f75beca29","164":"a12ac321c4a11119","165":"50fd74fbb0589c9c","186":"aa45bcbbde652daf","189":"49464f0da37e8d0e","198":"c4cc0515de20dfd6","225":"97ee3e22d6cbe850","326":"09548b6bec14dbaa","378":"a62ac7c97f18ebbd","480":"9fb56a429747754e","493":"f09b6c1007280e55","501":"b686aaedbd82963a","570":"633ab1f96df72187","575":"6ea6a653e4dd668f","691":"544d7d454bd2c8ae","699":"7f20f37de6a07ebf","839":"26ad8811f77767ec","857":"a4aec29e0e580c76","860":"9f80981178d828bf","937":"2c3d6d21ffb4b430","947":"d3d65d39adaff62c","987":"1f173d0971cfef03","999":"cbb9259deca14511"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "checkout";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@angular/animations/browser", "17.0.5", function() { return __webpack_require__.e(570).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/animations/fesm2022/browser.mjs */ 570); }; }); });
/******/ 					register("@angular/animations", "17.0.5", function() { return __webpack_require__.e(501).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/animations/fesm2022/animations.mjs */ 2501); }; }); });
/******/ 					register("@angular/common/http", "17.0.5", function() { return __webpack_require__.e(860).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/common/fesm2022/http.mjs */ 4860); }; }); });
/******/ 					register("@angular/common", "17.0.5", function() { return __webpack_require__.e(575).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/common/fesm2022/common.mjs */ 6575); }; }); });
/******/ 					register("@angular/core/primitives/signals", "17.0.5", function() { return __webpack_require__.e(186).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/core/fesm2022/primitives/signals.mjs */ 8186); }; }); });
/******/ 					register("@angular/core", "17.0.5", function() { return __webpack_require__.e(699).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/core/fesm2022/core.mjs */ 1699); }; }); });
/******/ 					register("@angular/platform-browser/animations", "17.0.5", function() { return __webpack_require__.e(987).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/platform-browser/fesm2022/animations.mjs */ 4987); }; }); });
/******/ 					register("@angular/platform-browser", "17.0.5", function() { return __webpack_require__.e(480).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs */ 6480); }; }); });
/******/ 					register("@angular/platform-server", "17.0.5", function() { return __webpack_require__.e(493).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/platform-server/fesm2022/platform-server.mjs */ 8493); }; }); });
/******/ 					register("@angular/router", "17.0.5", function() { return __webpack_require__.e(947).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/router/fesm2022/router.mjs */ 7947); }; }); });
/******/ 					register("@angular/ssr", "17.0.5", function() { return __webpack_require__.e(839).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@angular/ssr/fesm2022/ssr.mjs */ 5839); }; }); });
/******/ 					register("cors", "2.8.5", function() { return __webpack_require__.e(52).then(function() { return function() { return __webpack_require__(/*! ./node_modules/cors/lib/index.js */ 4052); }; }); });
/******/ 					register("express", "4.18.2", function() { return __webpack_require__.e(691).then(function() { return function() { return __webpack_require__(/*! ./node_modules/express/index.js */ 8691); }; }); });
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	!function() {
/******/ 		var parseVersion = function(str) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=function(p){return p.split(".").map((function(p){return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = function(a, b) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = function(range) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = function(range, version) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = function(scopeName, key) {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = function(scope, key) {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce(function(a, b) {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = function(scope, key) {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce(function(a, b) {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = function(scope, key, version, requiredVersion) {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingleton = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = function(scope, key, requiredVersion) {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce(function(a, b) {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = function(scope, scopeName, key, requiredVersion) {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map(function(key) {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warn = function(msg) {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var warnInvalidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = function(entry) {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = function(fn) { return function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		}; };
/******/ 		
/******/ 		var load = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			1902: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/common", [2,17,0,0], function() { return __webpack_require__.e(198).then(function() { return function() { return __webpack_require__(/*! @angular/common */ 6575); }; }); }); },
/******/ 			2002: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/core", [2,17,0,0], function() { return __webpack_require__.e(699).then(function() { return function() { return __webpack_require__(/*! @angular/core */ 1699); }; }); }); },
/******/ 			2634: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/platform-server", [2,17,0,0], function() { return __webpack_require__.e(493).then(function() { return function() { return __webpack_require__(/*! @angular/platform-server */ 8493); }; }); }); },
/******/ 			5855: function() { return loadStrictSingletonVersionCheckFallback("default", "express", [2,4,18,2], function() { return __webpack_require__.e(691).then(function() { return function() { return __webpack_require__(/*! express */ 8691); }; }); }); },
/******/ 			7694: function() { return loadStrictSingletonVersionCheckFallback("default", "cors", [2,2,8,5], function() { return __webpack_require__.e(52).then(function() { return function() { return __webpack_require__(/*! cors */ 4052); }; }); }); },
/******/ 			7937: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/ssr", [2,17,0,0], function() { return __webpack_require__.e(326).then(function() { return function() { return __webpack_require__(/*! @angular/ssr */ 5839); }; }); }); },
/******/ 			8192: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/router", [2,17,0,0], function() { return __webpack_require__.e(164).then(function() { return function() { return __webpack_require__(/*! @angular/router */ 7947); }; }); }); },
/******/ 			8555: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser", [2,17,0,0], function() { return __webpack_require__.e(937).then(function() { return function() { return __webpack_require__(/*! @angular/platform-browser */ 6480); }; }); }); },
/******/ 			6139: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/animations", [2,17,0,0], function() { return __webpack_require__.e(999).then(function() { return function() { return __webpack_require__(/*! @angular/animations */ 2501); }; }); }); },
/******/ 			1633: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/core/primitives/signals", [2,17,0,0], function() { return __webpack_require__.e(186).then(function() { return function() { return __webpack_require__(/*! @angular/core/primitives/signals */ 8186); }; }); }); },
/******/ 			6463: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/animations/browser", [2,17,0,0], function() { return __webpack_require__.e(189).then(function() { return function() { return __webpack_require__(/*! @angular/animations/browser */ 570); }; }); }); },
/******/ 			6055: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/common/http", [2,17,0,0], function() { return __webpack_require__.e(857).then(function() { return function() { return __webpack_require__(/*! @angular/common/http */ 4860); }; }); }); },
/******/ 			2679: function() { return loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser/animations", [2,17,0,0], function() { return __webpack_require__.e(140).then(function() { return function() { return __webpack_require__(/*! @angular/platform-browser/animations */ 4987); }; }); }); }
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"140": [
/******/ 				6463
/******/ 			],
/******/ 			"189": [
/******/ 				6139
/******/ 			],
/******/ 			"225": [
/******/ 				1902,
/******/ 				2002,
/******/ 				2634,
/******/ 				5855,
/******/ 				7694,
/******/ 				7937,
/******/ 				8192,
/******/ 				8555
/******/ 			],
/******/ 			"480": [
/******/ 				1902,
/******/ 				2002,
/******/ 				6055
/******/ 			],
/******/ 			"493": [
/******/ 				1902,
/******/ 				2002,
/******/ 				2679,
/******/ 				6055,
/******/ 				8555
/******/ 			],
/******/ 			"501": [
/******/ 				1902,
/******/ 				2002
/******/ 			],
/******/ 			"570": [
/******/ 				2002,
/******/ 				6139
/******/ 			],
/******/ 			"575": [
/******/ 				2002
/******/ 			],
/******/ 			"699": [
/******/ 				1633
/******/ 			],
/******/ 			"839": [
/******/ 				2634
/******/ 			],
/******/ 			"860": [
/******/ 				1902,
/******/ 				2002
/******/ 			],
/******/ 			"937": [
/******/ 				6055
/******/ 			],
/******/ 			"947": [
/******/ 				1902,
/******/ 				2002,
/******/ 				8555
/******/ 			],
/******/ 			"987": [
/******/ 				1902,
/******/ 				2002,
/******/ 				6463,
/******/ 				8555
/******/ 			],
/******/ 			"999": [
/******/ 				1902
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = function(chunkId, promises) {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach(function(id) {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = function(factory) {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = function(error) {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// load script equivalent for server side
/******/ 		__webpack_require__.l = function(url,callback,chunkId) {
/******/ 				if(!globalThis.__remote_scope__) {
/******/ 					// create a global scope for container, similar to how remotes are set on window in the browser
/******/ 					globalThis.__remote_scope__ = {
/******/ 					_config: {},
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				  function executeLoad(url, callback, name) {
/******/ 				    if (!name) {
/******/ 				      throw new Error('__webpack_require__.l name is required for ' + url);
/******/ 				    }
/******/ 				    if (typeof globalThis.__remote_scope__[name] !== 'undefined') return callback(globalThis.__remote_scope__[name]);
/******/ 				    // if its a worker or node
/******/ 				    if (typeof process !== 'undefined') {
/******/ 				      const vm = require('vm');
/******/ 				      (globalThis.webpackChunkLoad || globalThis.fetch || require("node-fetch"))(url).then(function (res) {
/******/ 				        return res.text();
/******/ 				      }).then(function (scriptContent) {
/******/ 				        try {
/******/ 				         const m = require('module');
/******/ 		
/******/ 				         const remoteCapsule = vm.runInThisContext(m.wrap(scriptContent), 'node-federation-loader-' + name + '.vm')
/******/ 				         const exp = {};
/******/ 				         let remote = {exports:{}};
/******/ 				         remoteCapsule(exp,require,remote,'node-federation-loader-' + name + '.vm',__dirname);
/******/ 				         remote = remote.exports || remote;
/******/ 				          globalThis.__remote_scope__[name] = remote[name] || remote;
/******/ 				          globalThis.__remote_scope__._config[name] = url;
/******/ 				          callback(globalThis.__remote_scope__[name])
/******/ 				        } catch (e) {
/******/ 				          console.error('executeLoad hit catch block', e);
/******/ 				          e.target = {src: url};
/******/ 				          callback(e);
/******/ 				        }
/******/ 				      }).catch((e) => {
/******/ 				        e.target = {src: url};
/******/ 				        callback(e);
/******/ 				      });
/******/ 				    } else {
/******/ 				      fetch(url).then(function (res) {
/******/ 				        return res.text();
/******/ 				      }).then(function (scriptContent) {
/******/ 				        try {
/******/ 				          const remote = eval('let module = {};' + scriptContent + '\nmodule.exports')
/******/ 				          globalThis.__remote_scope__[name] = remote[name] || remote;
/******/ 				          globalThis.__remote_scope__._config[name] = url;
/******/ 				          callback(globalThis.__remote_scope__[name])
/******/ 				        } catch (e) {
/******/ 				          console.error('executeLoad hit catch block',e);
/******/ 				          e.target = {src: url};
/******/ 				          callback(e);
/******/ 				        }
/******/ 				      });
/******/ 				    }
/******/ 				  }
/******/ 				executeLoad(url,callback,chunkId)
/******/ 		}
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(async function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = typeof process !== "undefined" ? require('path').join(__dirname, "" + __webpack_require__.u(chunkId)) : false;
/******/ 							var fs = typeof process !== "undefined" ? require('fs') : false;
/******/ 							if(fs && fs.existsSync(filename)) {
/******/ 		
/******/ 								fs.readFile(filename, 'utf-8', function(err, content) {
/******/ 									if(err) return reject(err);
/******/ 									var chunk = {};
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							} else {
/******/ 		
/******/ 								  function loadScript(url, cb, chunkID) {
/******/ 								    var url;
/******/ 								    var cb = arguments[arguments.length - 1];
/******/ 								    if (typeof cb !== "function") {
/******/ 								      throw new Error("last argument should be a function");
/******/ 								    }
/******/ 								    if (arguments.length === 2) {
/******/ 								      url = arguments[0];
/******/ 								    } else if (arguments.length === 3) {
/******/ 								      url = new URL(arguments[1], arguments[0]).toString();
/******/ 								    } else {
/******/ 								      throw new Error("invalid number of arguments");
/******/ 								    }
/******/ 								    if (globalThis.webpackChunkLoad) {
/******/ 								      globalThis.webpackChunkLoad(url).then(function (resp) {
/******/ 								        return resp.text();
/******/ 								      }).then(function (rawData) {
/******/ 								        cb(null, rawData);
/******/ 								      }).catch(function (err) {
/******/ 								        console.error('Federated Chunk load failed', err);
/******/ 								        return cb(err)
/******/ 								      });
/******/ 								    } else if (typeof process !== 'undefined') {
/******/ 								      //TODO https support
/******/ 								      let request = (url.startsWith('https') ? require('https') : require('http')).get(url, function (resp) {
/******/ 								        if (resp.statusCode === 200) {
/******/ 								          let rawData = '';
/******/ 								          resp.setEncoding('utf8');
/******/ 								          resp.on('data', chunk => {
/******/ 								            rawData += chunk;
/******/ 								          });
/******/ 								          resp.on('end', () => {
/******/ 								            cb(null, rawData);
/******/ 								          });
/******/ 								        } else {
/******/ 								          cb(resp);
/******/ 								        }
/******/ 								      });
/******/ 								      request.on('error', error => {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    } else {
/******/ 								      fetch(url).then(function (resp) {
/******/ 								        return resp.text();
/******/ 								      }).then(function (rawData) {
/******/ 								        cb(null, rawData);
/******/ 								      }).catch(function (err) {
/******/ 								        console.error('Federated Chunk load failed', err);
/******/ 								        return cb(err)
/******/ 								      })
/******/ 								    }
/******/ 								  }
/******/ 		
/******/ 		
/******/ 								var remotes = {};
/******/ 									if(!globalThis.__remote_scope__) {
/******/ 										// create a global scope for container, similar to how remotes are set on window in the browser
/******/ 										globalThis.__remote_scope__ = {
/******/ 										_config: {},
/******/ 										}
/******/ 									}
/******/ 								const remoteRegistry = globalThis.__remote_scope__._config
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 								var requestedRemote = remoteRegistry["checkout"]
/******/ 		
/******/ 								if(typeof requestedRemote === 'function'){
/******/ 								                    requestedRemote = await requestedRemote()
/******/ 								                  }
/******/ 		
/******/ 		
/******/ 								var scriptUrl = new URL(requestedRemote);
/******/ 		
/******/ 								var chunkName = __webpack_require__.u(chunkId);
/******/ 		
/******/ 		
/******/ 								                        var getBasenameFromUrl = (url) => {
/******/ 								                          const urlParts = url.split('/');
/******/ 								                          return urlParts[urlParts.length - 1];
/******/ 								                        };
/******/ 								                        var fileToReplace = typeof process !== "undefined" ? require('path').basename(scriptUrl.pathname) : getBasenameFromUrl(scriptUrl.pathname);
/******/ 								scriptUrl.pathname = scriptUrl.pathname.replace(fileToReplace, chunkName);
/******/ 		
/******/ 								loadScript(scriptUrl.toString(), function(err, content) {
/******/ 		
/******/ 									if(err) {console.error('error loading remote chunk', scriptUrl.toString(),'got',content); return reject(err);}
/******/ 									var chunk = {};
/******/ 									if(typeof process !== 'undefined') {
/******/ 									try {
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									} catch (e) {
/******/ 									console.error('runInThisContext threw', e)
/******/ 									}
/******/ 									} else {
/******/ 									eval('(function(exports, require, __dirname, __filename) {' + content + '\n})')(chunk, __webpack_require__, '.', chunkName);
/******/ 									}
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							}
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(766);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map