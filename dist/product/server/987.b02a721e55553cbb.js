"use strict";
exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 4987:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2022/animations.mjs ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_MODULE_TYPE: function() { return /* reexport safe */ _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE; },
/* harmony export */   BrowserAnimationsModule: function() { return /* binding */ BrowserAnimationsModule; },
/* harmony export */   NoopAnimationsModule: function() { return /* binding */ NoopAnimationsModule; },
/* harmony export */   provideAnimations: function() { return /* binding */ provideAnimations; },
/* harmony export */   provideNoopAnimations: function() { return /* binding */ provideNoopAnimations; },
/* harmony export */   "ɵInjectableAnimationEngine": function() { return /* binding */ InjectableAnimationEngine; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2002);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 8555);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations/browser */ 6463);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1902);
/**
 * @license Angular v17.0.5
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */








class InjectableAnimationEngine extends _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationEngine"] {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer, appRef) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static #_ = this.ɵfac = function InjectableAnimationEngine_Factory(t) {
    return new (t || InjectableAnimationEngine)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__.AnimationDriver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationStyleNormalizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InjectableAnimationEngine,
    factory: InjectableAnimationEngine.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InjectableAnimationEngine, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
    }]
  }, {
    type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__.AnimationDriver
  }, {
    type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationStyleNormalizer"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵWebAnimationsStyleNormalizer"]();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationRendererFactory"](renderer, engine, zone);
}
const SHARED_ANIMATION_PROVIDERS = [{
  provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationStyleNormalizer"],
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationEngine"],
  useClass: InjectableAnimationEngine
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone]
}];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
const BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__.AnimationDriver,
  useFactory: () => new _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__["ɵWebAnimationsDriver"]()
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
  useValue: 'BrowserAnimations'
}, ...SHARED_ANIMATION_PROVIDERS];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__.AnimationDriver,
  useClass: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_2__.NoopAnimationDriver
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE,
  useValue: 'NoopAnimations'
}, ...SHARED_ANIMATION_PROVIDERS];

/**
 * Exports `BrowserModule` with additional [dependency-injection providers](guide/glossary#provider)
 * for use with animations. See [Animations](guide/animations).
 * @publicApi
 */
class BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static #_ = this.ɵfac = function BrowserAnimationsModule_Factory(t) {
    return new (t || BrowserAnimationsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BrowserAnimationsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserAnimationsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
/**
 * Returns the set of [dependency-injection providers](guide/glossary#provider)
 * to enable animations in an application. See [animations guide](guide/animations)
 * to learn more about animations in Angular.
 *
 * @usageNotes
 *
 * The function is useful when you want to enable animations in an application
 * bootstrapped using the `bootstrapApplication` function. In this scenario there
 * is no need to import the `BrowserAnimationsModule` NgModule at all, just add
 * providers returned by this function to the `providers` list as show below.
 *
 * ```typescript
 * bootstrapApplication(RootComponent, {
 *   providers: [
 *     provideAnimations()
 *   ]
 * });
 * ```
 *
 * @publicApi
 */
function provideAnimations() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideAnimations` call results in app code.
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
/**
 * A null player that must be imported to allow disabling of animations.
 * @publicApi
 */
class NoopAnimationsModule {
  static #_ = this.ɵfac = function NoopAnimationsModule_Factory(t) {
    return new (t || NoopAnimationsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NoopAnimationsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopAnimationsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
/**
 * Returns the set of [dependency-injection providers](guide/glossary#provider)
 * to disable animations in an application. See [animations guide](guide/animations)
 * to learn more about animations in Angular.
 *
 * @usageNotes
 *
 * The function is useful when you want to bootstrap an application using
 * the `bootstrapApplication` function, but you need to disable animations
 * (for example, when running tests).
 *
 * ```typescript
 * bootstrapApplication(RootComponent, {
 *   providers: [
 *     provideNoopAnimations()
 *   ]
 * });
 * ```
 *
 * @publicApi
 */
function provideNoopAnimations() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideNoopAnimations` call results in app code.
  return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}

/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation browser package.
 */

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

};
;
//# sourceMappingURL=987.b02a721e55553cbb.js.map