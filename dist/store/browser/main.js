import * as __WEBPACK_EXTERNAL_MODULE_http_localhost_4201_remoteEntry_mjs_ba8924b6__ from "http://localhost:4201/remoteEntry.mjs";
import * as __WEBPACK_EXTERNAL_MODULE_http_localhost_4202_remoteEntry_mjs_0a529f60__ from "http://localhost:4202/remoteEntry.mjs";
/******/ var __webpack_modules__ = ({

/***/ 1729:
/*!***************************!*\
  !*** ./store/src/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("store_src_bootstrap_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ 6019)).catch(err => console.error(err));

/***/ }),

/***/ 8272:
/*!********************************************************!*\
  !*** external "http://localhost:4201/remoteEntry.mjs" ***!
  \********************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_http_localhost_4201_remoteEntry_mjs_ba8924b6__;

/***/ }),

/***/ 4974:
/*!********************************************************!*\
  !*** external "http://localhost:4202/remoteEntry.mjs" ***!
  \********************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_http_localhost_4202_remoteEntry_mjs_0a529f60__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	var dataWebpackPrefix = "store:";
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			script.timeout = 120;
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 			script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 	
/******/ 			script.src = __webpack_require__.tu(url);
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		}
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/remotes loading */
/******/ (() => {
/******/ 	var chunkMapping = {
/******/ 		"webpack_container_remote_checkout_Routes": [
/******/ 			3495
/******/ 		],
/******/ 		"webpack_container_remote_product_Routes": [
/******/ 			5063
/******/ 		]
/******/ 	};
/******/ 	var idToExternalAndNameMapping = {
/******/ 		"3495": [
/******/ 			"default",
/******/ 			"./Routes",
/******/ 			4974
/******/ 		],
/******/ 		"5063": [
/******/ 			"default",
/******/ 			"./Routes",
/******/ 			8272
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				var getScope = __webpack_require__.R;
/******/ 				if(!getScope) getScope = [];
/******/ 				var data = idToExternalAndNameMapping[id];
/******/ 				if(getScope.indexOf(data) >= 0) return;
/******/ 				getScope.push(data);
/******/ 				if(data.p) return promises.push(data.p);
/******/ 				var onError = (error) => {
/******/ 					if(!error) error = new Error("Container missing");
/******/ 					if(typeof error.message === "string")
/******/ 						error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 					__webpack_require__.m[id] = () => {
/******/ 						throw error;
/******/ 					}
/******/ 					data.p = 0;
/******/ 				};
/******/ 				var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 					try {
/******/ 						var promise = fn(arg1, arg2);
/******/ 						if(promise && promise.then) {
/******/ 							var p = promise.then((result) => (next(result, d)), onError);
/******/ 							if(first) promises.push(data.p = p); else return p;
/******/ 						} else {
/******/ 							return next(promise, d, first);
/******/ 						}
/******/ 					} catch(error) {
/******/ 						onError(error);
/******/ 					}
/******/ 				}
/******/ 				var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 				var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 				var onFactory = (factory) => {
/******/ 					data.p = 1;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var uniqueName = "store";
/******/ 		var register = (name, version, factory, eager) => {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = (id) => {
/******/ 			var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("@angular/common/http", "17.0.5", () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_of_js-node_modules_rxjs_dist_esm_inter-56567f"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_common_fesm2022_http_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2022/http.mjs */ 4860))))));
/******/ 				register("@angular/common", "17.0.5", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-node_modules_angular_common_fesm2022_common_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2022/common.mjs */ 6575))))));
/******/ 				register("@angular/core/primitives/signals", "17.0.5", () => (__webpack_require__.e("node_modules_angular_core_fesm2022_primitives_signals_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/primitives/signals.mjs */ 8186))))));
/******/ 				register("@angular/core", "17.0.5", () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_of_js-node_modules_rxjs_dist_esm_inter-56567f"), __webpack_require__.e("node_modules_angular_core_fesm2022_core_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/core.mjs */ 1699))))));
/******/ 				register("@angular/platform-browser", "17.0.5", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_platform-browser_fesm2022_platform-browser_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs */ 6480))))));
/******/ 				register("@angular/router", "17.0.5", () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_of_js-node_modules_rxjs_dist_esm_inter-56567f"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_router_fesm2022_router_mjs"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/router/fesm2022/router.mjs */ 7947))))));
/******/ 				initExternal(4974);
/******/ 				initExternal(8272);
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types policy */
/******/ (() => {
/******/ 	var policy;
/******/ 	__webpack_require__.tt = () => {
/******/ 		// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 		if (policy === undefined) {
/******/ 			policy = {
/******/ 				createScriptURL: (url) => (url)
/******/ 			};
/******/ 			if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 				policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 			}
/******/ 		}
/******/ 		return policy;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types script url */
/******/ (() => {
/******/ 	__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ (() => {
/******/ 	var parseVersion = (str) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 	}
/******/ 	var versionLt = (a, b) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 	}
/******/ 	var rangeToString = (range) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 	}
/******/ 	var satisfy = (range, version) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 	}
/******/ 	var ensureExistence = (scopeName, key) => {
/******/ 		var scope = __webpack_require__.S[scopeName];
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		return scope;
/******/ 	};
/******/ 	var findVersion = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var findSingletonVersionKey = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		return Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 		}, 0);
/******/ 	};
/******/ 	var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 		return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 	};
/******/ 	var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var findValidVersion = (scope, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			if (!satisfy(requiredVersion, b)) return a;
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 			"Available versions: " + Object.keys(versions).map((key) => {
/******/ 			return key + " from " + versions[key].from;
/******/ 		}).join(", ");
/******/ 	};
/******/ 	var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var entry = findValidVersion(scope, key, requiredVersion);
/******/ 		if(entry) return get(entry);
/******/ 		throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var warn = (msg) => {
/******/ 		if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 	};
/******/ 	var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var get = (entry) => {
/******/ 		entry.loaded = 1;
/******/ 		return entry.get()
/******/ 	};
/******/ 	var init = (fn) => (function(scopeName, a, b, c) {
/******/ 		var promise = __webpack_require__.I(scopeName);
/******/ 		if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 		return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 	});
/******/ 	
/******/ 	var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findVersion(scope, key));
/******/ 	});
/******/ 	var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 	});
/******/ 	var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getValidVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 		return entry ? get(entry) : fallback();
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		2002: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core", [2,17,0,0], () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_of_js-node_modules_rxjs_dist_esm_inter-56567f"), __webpack_require__.e("node_modules_angular_core_fesm2022_core_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/core */ 1699))))))),
/******/ 		1902: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common", [2,17,0,0], () => (__webpack_require__.e("default-node_modules_angular_common_fesm2022_common_mjs").then(() => (() => (__webpack_require__(/*! @angular/common */ 6575))))))),
/******/ 		8555: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser", [2,17,0,0], () => (__webpack_require__.e("default-node_modules_angular_platform-browser_fesm2022_platform-browser_mjs").then(() => (() => (__webpack_require__(/*! @angular/platform-browser */ 6480))))))),
/******/ 		8192: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/router", [2,17,0,0], () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_of_js-node_modules_rxjs_dist_esm_inter-56567f"), __webpack_require__.e("default-node_modules_angular_router_fesm2022_router_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/router */ 7947))))))),
/******/ 		1633: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core/primitives/signals", [2,17,0,0], () => (__webpack_require__.e("node_modules_angular_core_fesm2022_primitives_signals_mjs").then(() => (() => (__webpack_require__(/*! @angular/core/primitives/signals */ 8186))))))),
/******/ 		6055: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common/http", [2,17,0,0], () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_of_js-node_modules_rxjs_dist_esm_inter-56567f"), __webpack_require__.e("default-node_modules_angular_common_fesm2022_http_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/common/http */ 4860))))))),
/******/ 		9183: () => (loadFallback("default", "checkout/Routes", () => (__webpack_require__.e("webpack_container_remote_checkout_Routes").then(() => (() => (__webpack_require__(/*! checkout/Routes */ 3495))))))),
/******/ 		4217: () => (loadFallback("default", "product/Routes", () => (__webpack_require__.e("webpack_container_remote_product_Routes").then(() => (() => (__webpack_require__(/*! product/Routes */ 5063)))))))
/******/ 	};
/******/ 	// no consumes in initial chunks
/******/ 	var chunkMapping = {
/******/ 		"default-webpack_sharing_consume_default_angular_core_angular_core": [
/******/ 			2002
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_common_angular_common": [
/******/ 			1902
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser": [
/******/ 			8555
/******/ 		],
/******/ 		"store_src_bootstrap_ts": [
/******/ 			8192
/******/ 		],
/******/ 		"node_modules_angular_core_fesm2022_core_mjs": [
/******/ 			1633
/******/ 		],
/******/ 		"default-node_modules_angular_platform-browser_fesm2022_platform-browser_mjs": [
/******/ 			6055
/******/ 		],
/******/ 		"webpack_sharing_consume_default_checkout_Routes_checkout_Routes": [
/******/ 			9183
/******/ 		],
/******/ 		"webpack_sharing_consume_default_product_Routes_product_Routes": [
/******/ 			4217
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 				var onFactory = (factory) => {
/******/ 					installedModules[id] = 0;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				var onError = (error) => {
/******/ 					delete installedModules[id];
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						throw error;
/******/ 					}
/******/ 				};
/******/ 				try {
/******/ 					var promise = moduleToHandlerMapping[id]();
/******/ 					if(promise.then) {
/******/ 						promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 					} else onFactory(promise);
/******/ 				} catch(e) { onError(e); }
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(!/^(default\-webpack_sharing_consume_default_angular_(co(mmon_angular_common|re_angular_core)|platform\-browser_angular_platform\-browser)|webpack_(container_remote_(checkou|produc)t_Routes|sharing_consume_default_(checkout_Routes_checkou|product_Routes_produc)t_Routes))$/.test(chunkId)) {
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkstore"] = self["webpackChunkstore"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__(1729);
/******/ 

//# sourceMappingURL=main.js.map