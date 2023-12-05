"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 6959:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: function() { return /* binding */ COMPLETE_NOTIFICATION; },
/* harmony export */   createNotification: function() { return /* binding */ createNotification; },
/* harmony export */   errorNotification: function() { return /* binding */ errorNotification; },
/* harmony export */   nextNotification: function() { return /* binding */ nextNotification; }
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 2235:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: function() { return /* binding */ Observable; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 8559);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 1523);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 4373);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 2476);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 5445);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 2602);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 575);







class Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
      const {
        operator,
        source
      } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: value => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
    return this;
  }
  pipe(...operations) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 8559:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: function() { return /* binding */ EMPTY_OBSERVER; },
/* harmony export */   SafeSubscriber: function() { return /* binding */ SafeSubscriber; },
/* harmony export */   Subscriber: function() { return /* binding */ Subscriber; }
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 2602);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 1523);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 5445);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 6929);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 2707);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 6959);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 8411);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 575);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 1523:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: function() { return /* binding */ EMPTY_SUBSCRIPTION; },
/* harmony export */   Subscription: function() { return /* binding */ Subscription; },
/* harmony export */   isSubscription: function() { return /* binding */ isSubscription; }
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 2602);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 101);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 5559);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 5445:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/config.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; }
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 6231:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/from.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   from: function() { return /* binding */ from; }
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ 5535);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 384);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}

/***/ }),

/***/ 384:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: function() { return /* binding */ fromArrayLike; },
/* harmony export */   fromAsyncIterable: function() { return /* binding */ fromAsyncIterable; },
/* harmony export */   fromInteropObservable: function() { return /* binding */ fromInteropObservable; },
/* harmony export */   fromIterable: function() { return /* binding */ fromIterable; },
/* harmony export */   fromPromise: function() { return /* binding */ fromPromise; },
/* harmony export */   fromReadableStreamLike: function() { return /* binding */ fromReadableStreamLike; },
/* harmony export */   innerFrom: function() { return /* binding */ innerFrom; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 1287);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 3972);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2235);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 7808);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 5235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 2614);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 9449);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 401);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 2602);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 6929);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 4373);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 4980:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: function() { return /* binding */ of; }
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 5506);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 6231);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
}

/***/ }),

/***/ 5678:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: function() { return /* binding */ OperatorSubscriber; },
/* harmony export */   createOperatorSubscriber: function() { return /* binding */ createOperatorSubscriber; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 8559);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 9877:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/concatMap.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatMap: function() { return /* binding */ concatMap; }
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeMap */ 2607);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 2602);


function concatMap(project, resultSelector) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector) ? (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(project, resultSelector, 1) : (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(project, 1);
}

/***/ }),

/***/ 4520:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/filter.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: function() { return /* binding */ filter; }
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 7474:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/finalize.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finalize: function() { return /* binding */ finalize; }
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}

/***/ }),

/***/ 9736:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: function() { return /* binding */ map; }
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

/***/ }),

/***/ 8164:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeInternals: function() { return /* binding */ mergeInternals; }
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 384);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 9701);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

/***/ }),

/***/ 2607:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeMap: function() { return /* binding */ mergeMap; }
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 9736);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ 8164);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 2602);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent));
}

/***/ }),

/***/ 2704:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeOn: function() { return /* binding */ observeOn; }
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 9701);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}

/***/ }),

/***/ 2499:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeOn: function() { return /* binding */ subscribeOn; }
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}

/***/ }),

/***/ 1891:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/switchMap.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchMap: function() { return /* binding */ switchMap; }
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}

/***/ }),

/***/ 3738:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/tap.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tap: function() { return /* binding */ tap; }
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 2602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ 204);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}

/***/ }),

/***/ 8297:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleArray: function() { return /* binding */ scheduleArray; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2235);

function scheduleArray(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

/***/ }),

/***/ 6679:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleAsyncIterable: function() { return /* binding */ scheduleAsyncIterable; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2235);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 9701);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

/***/ }),

/***/ 7695:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleIterable: function() { return /* binding */ scheduleIterable; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2235);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ 6691);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 2602);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 9701);




function scheduleIterable(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let iterator;
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}

/***/ }),

/***/ 5158:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleObservable: function() { return /* binding */ scheduleObservable; }
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 2704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 2499);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 2147:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schedulePromise: function() { return /* binding */ schedulePromise; }
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 2704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 2499);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 9405:
/*!*************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleReadableStreamLike: function() { return /* binding */ scheduleReadableStreamLike; }
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 6679);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 401);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

/***/ }),

/***/ 5535:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduled: function() { return /* binding */ scheduled; }
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ 5158);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ 2147);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ 8297);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ 7695);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 6679);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ 7808);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ 3972);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 1287);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ 9449);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ 5235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ 2614);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 401);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ 9405);













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
      return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
      return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
      return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
      return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
      return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}

/***/ }),

/***/ 8411:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: function() { return /* binding */ timeoutProvider; }
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 6691:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: function() { return /* binding */ getSymbolIterator; },
/* harmony export */   iterator: function() { return /* binding */ iterator; }
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 4373:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: function() { return /* binding */ observable; }
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 101:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: function() { return /* binding */ UnsubscriptionError; }
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 1566);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 5506:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/args.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popNumber: function() { return /* binding */ popNumber; },
/* harmony export */   popResultSelector: function() { return /* binding */ popResultSelector; },
/* harmony export */   popScheduler: function() { return /* binding */ popScheduler; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ 7426);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

/***/ }),

/***/ 5559:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: function() { return /* binding */ arrRemove; }
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 1566:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: function() { return /* binding */ createErrorClass; }
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 575:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: function() { return /* binding */ captureError; },
/* harmony export */   errorContext: function() { return /* binding */ errorContext; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 5445);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 9701:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: function() { return /* binding */ executeSchedule; }
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 204:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: function() { return /* binding */ identity; }
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 1287:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: function() { return /* binding */ isArrayLike; }
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 5235:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: function() { return /* binding */ isAsyncIterable; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 2602:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: function() { return /* binding */ isFunction; }
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 7808:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: function() { return /* binding */ isInteropObservable; }
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 4373);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 9449:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: function() { return /* binding */ isIterable; }
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 6691);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 3972:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: function() { return /* binding */ isPromise; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 401:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: function() { return /* binding */ isReadableStreamLike; },
/* harmony export */   readableStreamLikeToAsyncGenerator: function() { return /* binding */ readableStreamLikeToAsyncGenerator; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 2602);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 7426:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: function() { return /* binding */ isScheduler; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}

/***/ }),

/***/ 4114:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: function() { return /* binding */ hasLift; },
/* harmony export */   operate: function() { return /* binding */ operate; }
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 2602);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 2707:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: function() { return /* binding */ noop; }
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 2476:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: function() { return /* binding */ pipe; },
/* harmony export */   pipeFromArray: function() { return /* binding */ pipeFromArray; }
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 204);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 6929:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: function() { return /* binding */ reportUnhandledError; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 5445);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 8411);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 2614:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: function() { return /* binding */ createInvalidObservableTypeError; }
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 4860:
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/http.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchBackend: function() { return /* binding */ FetchBackend; },
/* harmony export */   HTTP_INTERCEPTORS: function() { return /* binding */ HTTP_INTERCEPTORS; },
/* harmony export */   HttpBackend: function() { return /* binding */ HttpBackend; },
/* harmony export */   HttpClient: function() { return /* binding */ HttpClient; },
/* harmony export */   HttpClientJsonpModule: function() { return /* binding */ HttpClientJsonpModule; },
/* harmony export */   HttpClientModule: function() { return /* binding */ HttpClientModule; },
/* harmony export */   HttpClientXsrfModule: function() { return /* binding */ HttpClientXsrfModule; },
/* harmony export */   HttpContext: function() { return /* binding */ HttpContext; },
/* harmony export */   HttpContextToken: function() { return /* binding */ HttpContextToken; },
/* harmony export */   HttpErrorResponse: function() { return /* binding */ HttpErrorResponse; },
/* harmony export */   HttpEventType: function() { return /* binding */ HttpEventType; },
/* harmony export */   HttpFeatureKind: function() { return /* binding */ HttpFeatureKind; },
/* harmony export */   HttpHandler: function() { return /* binding */ HttpHandler; },
/* harmony export */   HttpHeaderResponse: function() { return /* binding */ HttpHeaderResponse; },
/* harmony export */   HttpHeaders: function() { return /* binding */ HttpHeaders; },
/* harmony export */   HttpParams: function() { return /* binding */ HttpParams; },
/* harmony export */   HttpRequest: function() { return /* binding */ HttpRequest; },
/* harmony export */   HttpResponse: function() { return /* binding */ HttpResponse; },
/* harmony export */   HttpResponseBase: function() { return /* binding */ HttpResponseBase; },
/* harmony export */   HttpUrlEncodingCodec: function() { return /* binding */ HttpUrlEncodingCodec; },
/* harmony export */   HttpXhrBackend: function() { return /* binding */ HttpXhrBackend; },
/* harmony export */   HttpXsrfTokenExtractor: function() { return /* binding */ HttpXsrfTokenExtractor; },
/* harmony export */   JsonpClientBackend: function() { return /* binding */ JsonpClientBackend; },
/* harmony export */   JsonpInterceptor: function() { return /* binding */ JsonpInterceptor; },
/* harmony export */   provideHttpClient: function() { return /* binding */ provideHttpClient; },
/* harmony export */   withFetch: function() { return /* binding */ withFetch; },
/* harmony export */   withInterceptors: function() { return /* binding */ withInterceptors; },
/* harmony export */   withInterceptorsFromDi: function() { return /* binding */ withInterceptorsFromDi; },
/* harmony export */   withJsonpSupport: function() { return /* binding */ withJsonpSupport; },
/* harmony export */   withNoXsrfProtection: function() { return /* binding */ withNoXsrfProtection; },
/* harmony export */   withRequestsMadeViaParent: function() { return /* binding */ withRequestsMadeViaParent; },
/* harmony export */   withXsrfConfiguration: function() { return /* binding */ withXsrfConfiguration; },
/* harmony export */   "ɵHTTP_ROOT_INTERCEPTOR_FNS": function() { return /* binding */ HTTP_ROOT_INTERCEPTOR_FNS; },
/* harmony export */   "ɵHttpInterceptingHandler": function() { return /* binding */ HttpInterceptorHandler; },
/* harmony export */   "ɵHttpInterceptorHandler": function() { return /* binding */ HttpInterceptorHandler; },
/* harmony export */   "ɵPRIMARY_HTTP_BACKEND": function() { return /* binding */ PRIMARY_HTTP_BACKEND; },
/* harmony export */   "ɵwithHttpTransferCache": function() { return /* binding */ withHttpTransferCache; }
/* harmony export */ });
/* harmony import */ var _home_khush_test_org_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9877);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1902);

/**
 * @license Angular v17.0.5
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */








/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
class HttpHandler {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {}

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */
    this.lazyUpdate = null;
    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');
          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);
            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else if (typeof Headers !== 'undefined' && headers instanceof Headers) {
      this.headers = new Map();
      headers.forEach((values, name) => {
        this.setHeaderEntries(name, values);
      });
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = new Map();
        Object.entries(headers).forEach(([name, values]) => {
          this.setHeaderEntries(name, values);
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */
  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */
  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;
        if (typeof value === 'string') {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;
      case 'd':
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter(value => toDelete.indexOf(value) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  setHeaderEntries(name, values) {
    const headerValues = (Array.isArray(values) ? values : [values]).map(value => value.toString());
    const key = name.toLowerCase();
    this.headers.set(key, headerValues);
    this.maybeSetNormalizedName(name, key);
  }
  /**
   * @internal
   */
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
}
/**
 * Verifies that the headers object has the right shape: the values
 * must be either strings, numbers or arrays. Throws an error if an invalid
 * header value is present.
 */
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === 'string' || typeof value === 'number') && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. ` + `Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}
function paramParser(rawParams, codec) {
  const map = new Map();
  if (rawParams.length > 0) {
    // The `window.location.search` can be used while creating an instance of the `HttpParams` class
    // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
    // may start with the `?` char, so we strip it if it's present.
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }
  return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */
const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key];
        // convert the values to strings
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */
  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */
  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */
  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */
  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key);
      // `a: ['1']` produces `'a=1'`
      // `b: []` produces `''`
      // `c: ['1', '2']` produces `'c=1&c=2'`
      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    })
    // filter out empty values because `b: []` produces `''`
    // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
    .filter(param => param !== '').join('&');
  }
  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;
          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base.splice(idx, 1);
              }
              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
}

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
class HttpContextToken {
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }
}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */
class HttpContext {
  constructor() {
    this.map = new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys() {
    return this.map.keys();
  }
}

/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;
    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */
    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     *
     * Note: The `FetchBackend` doesn't support progress report on uploads.
     */
    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */
    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */
    this.responseType = 'json';
    this.method = method.toUpperCase();
    // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.
    let options;
    // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.
    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    }
    // If options have been passed, interpret them.
    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      // Override default response type of 'json' if one is provided.
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      // Override headers if they're provided.
      if (!!options.headers) {
        this.headers = options.headers;
      }
      if (!!options.context) {
        this.context = options.context;
      }
      if (!!options.params) {
        this.params = options.params;
      }
      // We do want to assign transferCache even if it's falsy (false is valid value)
      this.transferCache = options.transferCache;
    }
    // If no headers have been passed in, construct a new HttpHeaders instance.
    if (!this.headers) {
      this.headers = new HttpHeaders();
    }
    // If no context have been passed in, construct a new HttpContext instance.
    if (!this.context) {
      this.context = new HttpContext();
    }
    // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      const params = this.params.toString();
      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        const qIdx = url.indexOf('?');
        // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.
        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */
  serializeBody() {
    // If no body is present, no need to serialize it.
    if (this.body === null) {
      return null;
    }
    // Check whether the body is already in a serialized form. If so,
    // it can just be returned directly.
    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body) || typeof this.body === 'string') {
      return this.body;
    }
    // Check whether the body is an instance of HttpUrlEncodedParams.
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    // Check whether the body is an object or array, and serialize with JSON if so.
    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    // Fall back on toString() for everything else.
    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */
  detectContentTypeHeader() {
    // An empty body has no content type.
    if (this.body === null) {
      return null;
    }
    // FormData bodies rely on the browser's content type assignment.
    if (isFormData(this.body)) {
      return null;
    }
    // Blobs usually have their own content type. If it doesn't, then
    // no type can be inferred.
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    // Array buffers have unknown contents and thus no type can be inferred.
    if (isArrayBuffer(this.body)) {
      return null;
    }
    // Technically, strings could be a form of JSON data, but it's safe enough
    // to assume they're plain strings.
    if (typeof this.body === 'string') {
      return 'text/plain';
    }
    // `HttpUrlEncodedParams` has its own content-type.
    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    // Arrays, objects, boolean and numbers will be encoded as JSON.
    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return 'application/json';
    }
    // No type could be inferred.
    return null;
  }
  clone(update = {}) {
    // For method, url, and responseType, take the current value unless
    // it is overridden in the update hash.
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    // The body is somewhat special - a `null` value in update.body means
    // whatever current body is present is being overridden with an empty
    // body, whereas an `undefined` value in update.body implies no
    // override.
    const body = update.body !== undefined ? update.body : this.body;
    // Carefully handle the boolean options to differentiate between
    // `false` and `undefined` in the update args.
    const withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
    const reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress;
    // Headers and params may be appended to if `setHeaders` or
    // `setParams` are used.
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    // Pass on context if needed
    const context = update.context ?? this.context;
    // Check whether the caller has asked to add headers.
    if (update.setHeaders !== undefined) {
      // Set every requested header.
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    }
    // Check whether the caller has asked to set params.
    if (update.setParams) {
      // Set every requested param.
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    }
    // Finally, construct the new HttpRequest using the pieces from above.
    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials
    });
  }
}

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   *
   * Note: The `FetchBackend` doesn't support progress report on uploads.
   */
  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */
  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */
  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */
  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */
  HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200 /* HttpStatusCode.Ok */, defaultStatusText = 'OK') {
    // If the hash has values passed, use them to initialize the response.
    // Otherwise use the default values.
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    // Cache the ok value to avoid defining a getter.
    this.ok = this.status >= 200 && this.status < 300;
  }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */
  clone(update = {}) {
    // Perform a straightforward initialization of the new HttpHeaderResponse,
    // overriding the current parameters with new ones if given.
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== undefined ? init.body : null;
  }
  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
  constructor(init) {
    // Initialize with a default status of 0 / Unknown Error.
    super(init, 0, 'Unknown Error');
    this.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */
    this.ok = false;
    // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
}

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    transferCache: options.transferCache
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/tour-of-heroes/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/understanding-communicating-with-http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
class HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */
  request(first, url, options = {}) {
    let req;
    // First, check whether the primary argument is an instance of `HttpRequest`.
    if (first instanceof HttpRequest) {
      // It is. The other arguments must be undefined (per the signatures) and can be
      // ignored.
      req = first;
    } else {
      // It's a string, so it represents a URL. Construct a request based on it,
      // and incorporate the remaining arguments (assuming `GET` unless a method is
      // provided.
      // Figure out the headers.
      let headers = undefined;
      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      }
      // Sort out parameters.
      let params = undefined;
      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      }
      // Construct the request.
      req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || 'json',
        withCredentials: options.withCredentials,
        transferCache: options.transferCache
      });
    }
    // Start with an Observable.of() the initial request, and run the handler (which
    // includes all interceptors) inside a concatMap(). This way, the handler runs
    // inside an Observable chain, which causes interceptors to be re-run on every
    // subscription (this also makes retries re-run the handler, including interceptors).
    const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(req => this.handler.handle(req)));
    // If coming via the API signature which accepts a previously constructed HttpRequest,
    // the only option is to get the event stream. Otherwise, return the event stream if
    // that is what was requested.
    if (first instanceof HttpRequest || options.observe === 'events') {
      return events$;
    }
    // The requested stream contains either the full response or the body. In either
    // case, the first step is to filter the event stream to extract a stream of
    // responses(s).
    const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof HttpResponse));
    // Decide which stream to return.
    switch (options.observe || 'body') {
      case 'body':
        // The requested stream is the body. Map the response stream to the response
        // body. This could be done more simply, but a misbehaving interceptor might
        // transform the response body into a different format and ignore the requested
        // responseType. Guard against this by validating that the response is of the
        // requested type.
        switch (req.responseType) {
          case 'arraybuffer':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
              // Validate that the body is an ArrayBuffer.
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error('Response is not an ArrayBuffer.');
              }
              return res.body;
            }));
          case 'blob':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
              // Validate that the body is a Blob.
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error('Response is not a Blob.');
              }
              return res.body;
            }));
          case 'text':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
              // Validate that the body is a string.
              if (res.body !== null && typeof res.body !== 'string') {
                throw new Error('Response is not a string.');
              }
              return res.body;
            }));
          case 'json':
          default:
            // No validation needed for JSON responses, as they can be of any type.
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.body));
        }
      case 'response':
        // The response stream was requested directly, so return it.
        return res$;
      default:
        // Guard against new future observe types being added.
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */
  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  get(url, options = {}) {
    return this.request('GET', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */
  head(url, options = {}) {
    return this.request('HEAD', url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */
  jsonp(url, callbackParam) {
    return this.request('JSONP', url, {
      params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json'
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */
  options(url, options = {}) {
    return this.request('OPTIONS', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  patch(url, body, options = {}) {
    return this.request('PATCH', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */
  post(url, body, options = {}) {
    return this.request('POST', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */
  put(url, body, options = {}) {
    return this.request('PUT', url, addBody(options, body));
  }
  static #_ = this.ɵfac = function HttpClient_Factory(t) {
    return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpHandler));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpClient,
    factory: HttpClient.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClient, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: HttpHandler
  }], null);
})();
const XSSI_PREFIX$1 = /^\)\]\}',?\n/;
const REQUEST_URL_HEADER = `X-Request-URL`;
/**
 * Determine an appropriate URL for the response, by checking either
 * response url or the X-Request-URL header.
 */
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  // stored as lowercase in the map
  const xRequestUrl = REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
/**
 * Uses `fetch` to send requests to a backend server.
 *
 * This `FetchBackend` requires the support of the
 * [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) which is available on all
 * supported browsers and on Node.js v18 or later.
 *
 * @see {@link HttpHandler}
 *
 * @publicApi
 */
class FetchBackend {
  constructor() {
    // We need to bind the native fetch to its context or it will throw an "illegal invocation"
    this.fetchImpl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(FetchFactory, {
      optional: true
    })?.fetch ?? fetch.bind(globalThis);
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  }
  handle(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
      const aborter = new AbortController();
      this.doRequest(request, aborter.signal, observer).then(noop, error => observer.error(new HttpErrorResponse({
        error
      })));
      return () => aborter.abort();
    });
  }
  doRequest(request, signal, observer) {
    var _this = this;
    return (0,_home_khush_test_org_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const init = _this.createRequestInit(request);
      let response;
      try {
        const fetchPromise = _this.fetchImpl(request.urlWithParams, {
          signal,
          ...init
        });
        // Make sure Zone.js doesn't trigger false-positive unhandled promise
        // error in case the Promise is rejected synchronously. See function
        // description for additional information.
        silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
        // Send the `Sent` event before awaiting the response.
        observer.next({
          type: HttpEventType.Sent
        });
        response = yield fetchPromise;
      } catch (error) {
        observer.error(new HttpErrorResponse({
          error,
          status: error.status ?? 0,
          statusText: error.statusText,
          url: request.urlWithParams,
          headers: error.headers
        }));
        return;
      }
      const headers = new HttpHeaders(response.headers);
      const statusText = response.statusText;
      const url = getResponseUrl$1(response) ?? request.urlWithParams;
      let status = response.status;
      let body = null;
      if (request.reportProgress) {
        observer.next(new HttpHeaderResponse({
          headers,
          status,
          statusText,
          url
        }));
      }
      if (response.body) {
        // Read Progress
        const contentLength = response.headers.get('content-length');
        const chunks = [];
        const reader = response.body.getReader();
        let receivedLength = 0;
        let decoder;
        let partialText;
        // We have to check whether the Zone is defined in the global scope because this may be called
        // when the zone is nooped.
        const reqZone = typeof Zone !== 'undefined' && Zone.current;
        // Perform response processing outside of Angular zone to
        // ensure no excessive change detection runs are executed
        // Here calling the async ReadableStreamDefaultReader.read() is responsible for triggering CD
        yield _this.ngZone.runOutsideAngular( /*#__PURE__*/(0,_home_khush_test_org_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          while (true) {
            const {
              done,
              value
            } = yield reader.read();
            if (done) {
              break;
            }
            chunks.push(value);
            receivedLength += value.length;
            if (request.reportProgress) {
              partialText = request.responseType === 'text' ? (partialText ?? '') + (decoder ??= new TextDecoder()).decode(value, {
                stream: true
              }) : undefined;
              const reportProgress = () => observer.next({
                type: HttpEventType.DownloadProgress,
                total: contentLength ? +contentLength : undefined,
                loaded: receivedLength,
                partialText
              });
              reqZone ? reqZone.run(reportProgress) : reportProgress();
            }
          }
        }));
        // Combine all chunks.
        const chunksAll = _this.concatChunks(chunks, receivedLength);
        try {
          const contentType = response.headers.get('Content-Type') ?? '';
          body = _this.parseBody(request, chunksAll, contentType);
        } catch (error) {
          // Body loading or parsing failed
          observer.error(new HttpErrorResponse({
            error,
            headers: new HttpHeaders(response.headers),
            status: response.status,
            statusText: response.statusText,
            url: getResponseUrl$1(response) ?? request.urlWithParams
          }));
          return;
        }
      }
      // Same behavior as the XhrBackend
      if (status === 0) {
        status = body ? 200 /* HttpStatusCode.Ok */ : 0;
      }
      // ok determines whether the response will be transmitted on the event or
      // error channel. Unsuccessful status codes (not 2xx) will always be errors,
      // but a successful status code can still result in an error if the user
      // asked for JSON data and the body cannot be parsed as such.
      const ok = status >= 200 && status < 300;
      if (ok) {
        observer.next(new HttpResponse({
          body,
          headers,
          status,
          statusText,
          url
        }));
        // The full body has been received and delivered, no further events
        // are possible. This request is complete.
        observer.complete();
      } else {
        observer.error(new HttpErrorResponse({
          error: body,
          headers,
          status,
          statusText,
          url
        }));
      }
    })();
  }
  parseBody(request, binContent, contentType) {
    switch (request.responseType) {
      case 'json':
        // stripping the XSSI when present
        const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, '');
        return text === '' ? null : JSON.parse(text);
      case 'text':
        return new TextDecoder().decode(binContent);
      case 'blob':
        return new Blob([binContent], {
          type: contentType
        });
      case 'arraybuffer':
        return binContent.buffer;
    }
  }
  createRequestInit(req) {
    // We could share some of this logic with the XhrBackend
    const headers = {};
    const credentials = req.withCredentials ? 'include' : undefined;
    // Setting all the requested headers.
    req.headers.forEach((name, values) => headers[name] = values.join(','));
    // Add an Accept header if one isn't present already.
    headers['Accept'] ??= 'application/json, text/plain, */*';
    // Auto-detect the Content-Type header if one isn't present already.
    if (!headers['Content-Type']) {
      const detectedType = req.detectContentTypeHeader();
      // Sometimes Content-Type detection fails.
      if (detectedType !== null) {
        headers['Content-Type'] = detectedType;
      }
    }
    return {
      body: req.serializeBody(),
      method: req.method,
      headers,
      credentials
    };
  }
  concatChunks(chunks, totalLength) {
    const chunksAll = new Uint8Array(totalLength);
    let position = 0;
    for (const chunk of chunks) {
      chunksAll.set(chunk, position);
      position += chunk.length;
    }
    return chunksAll;
  }
  static #_ = this.ɵfac = function FetchBackend_Factory(t) {
    return new (t || FetchBackend)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FetchBackend,
    factory: FetchBackend.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FetchBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
/**
 * Abstract class to provide a mocked implementation of `fetch()`
 */
class FetchFactory {}
function noop() {}
/**
 * Zone.js treats a rejected promise that has not yet been awaited
 * as an unhandled error. This function adds a noop `.then` to make
 * sure that Zone.js doesn't throw an error if the Promise is rejected
 * synchronously.
 */
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
/**
 * Constructs a `ChainedInterceptorFn` which adapts a legacy `HttpInterceptor` to the
 * `ChainedInterceptorFn` interface.
 */
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
/**
 * Constructs a `ChainedInterceptorFn` which wraps and invokes a functional interceptor in the given
 * injector.
 */
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  // clang-format off
  return (initialRequest, finalHandlerFn) => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(injector, () => interceptorFn(initialRequest, downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)));
  // clang-format on
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(ngDevMode ? 'HTTP_INTERCEPTORS' : '');
/**
 * A multi-provided token of `HttpInterceptorFn`s.
 */
const HTTP_INTERCEPTOR_FNS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(ngDevMode ? 'HTTP_INTERCEPTOR_FNS' : '');
/**
 * A multi-provided token of `HttpInterceptorFn`s that are only set in root.
 */
const HTTP_ROOT_INTERCEPTOR_FNS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(ngDevMode ? 'HTTP_ROOT_INTERCEPTOR_FNS' : '');
/**
 * A provider to set a global primary http backend. If set, it will override the default one
 */
const PRIMARY_HTTP_BACKEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(ngDevMode ? 'PRIMARY_HTTP_BACKEND' : '');
/**
 * Creates an `HttpInterceptorFn` which lazily initializes an interceptor chain from the legacy
 * class-based interceptors and runs the request through it.
 */
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      // Note: interceptors are wrapped right-to-left so that final execution order is
      // left-to-right. That is, if `interceptors` is the array `[a, b, c]`, we want to
      // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
      // out.
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵInitialRenderPendingTasks"]);
    const taskId = pendingTasks.add();
    return chain(req, handler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => pendingTasks.remove(taskId)));
  };
}
let fetchBackendWarningDisplayed = false;
/** Internal function to reset the flag in tests */
function resetFetchBackendWarningFlag() {
  fetchBackendWarningDisplayed = false;
}
class HttpInterceptorHandler extends HttpHandler {
  constructor(backend, injector) {
    super();
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
    this.pendingTasks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵInitialRenderPendingTasks"]);
    // Check if there is a preferred HTTP backend configured and use it if that's the case.
    // This is needed to enable `FetchBackend` globally for all HttpClient's when `withFetch`
    // is used.
    const primaryHttpBackend = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(PRIMARY_HTTP_BACKEND, {
      optional: true
    });
    this.backend = primaryHttpBackend ?? backend;
    // We strongly recommend using fetch backend for HTTP calls when SSR is used
    // for an application. The logic below checks if that's the case and produces
    // a warning otherwise.
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && !fetchBackendWarningDisplayed) {
      const isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
      if (isServer && !(this.backend instanceof FetchBackend)) {
        fetchBackendWarningDisplayed = true;
        injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"]).warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵformatRuntimeError"])(2801 /* RuntimeErrorCode.NOT_USING_FETCH_BACKEND_IN_SSR */, 'Angular detected that `HttpClient` is not configured ' + 'to use `fetch` APIs. It\'s strongly recommended to ' + 'enable `fetch` for applications that use Server-Side Rendering ' + 'for better performance and compatibility. ' + 'To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` ' + 'call at the root of the application.'));
      }
    }
  }
  handle(initialRequest) {
    if (this.chain === null) {
      const dedupedInterceptorFns = Array.from(new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])]));
      // Note: interceptors are wrapped right-to-left so that final execution order is
      // left-to-right. That is, if `dedupedInterceptorFns` is the array `[a, b, c]`, we want to
      // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
      // out.
      this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
    }
    const taskId = this.pendingTasks.add();
    return this.chain(initialRequest, downstreamRequest => this.backend.handle(downstreamRequest)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.pendingTasks.remove(taskId)));
  }
  static #_ = this.ɵfac = function HttpInterceptorHandler_Factory(t) {
    return new (t || HttpInterceptorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpInterceptorHandler,
    factory: HttpInterceptorHandler.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpInterceptorHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: HttpBackend
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector
  }], null);
})();

// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
/**
 * When a pending <script> is unsubscribed we'll move it to this document, so it won't be
 * executed.
 */
let foreignDocument;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
// Error text given when a request is passed to the JsonpClientBackend that has
// headers set
const JSONP_ERR_HEADERS_NOT_SUPPORTED = 'JSONP requests do not support headers.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }
  return {};
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see {@link HttpHandler}
 * @see {@link HttpXhrBackend}
 *
 * @publicApi
 */
class JsonpClientBackend {
  constructor(callbackMap, document) {
    this.callbackMap = callbackMap;
    this.document = document;
    /**
     * A resolved promise that can be used to schedule microtasks in the event handlers.
     */
    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */
  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */
  handle(req) {
    // Firstly, check both the method and response type. If either doesn't match
    // then the request was improperly routed here and cannot be handled.
    if (req.method !== 'JSONP') {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== 'json') {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    }
    // Check the request headers. JSONP doesn't support headers and
    // cannot set any that were supplied.
    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    }
    // Everything else happens inside the Observable boundary.
    return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
      // The first step to make a request is to generate the callback name, and replace the
      // callback placeholder in the URL with the name. Care has to be taken here to ensure
      // a trailing &, if matched, gets inserted back into the URL in the correct place.
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
      // Construct the <script> tag and point it at the URL.
      const node = this.document.createElement('script');
      node.src = url;
      // A JSONP request requires waiting for multiple callbacks. These variables
      // are closed over and track state across those callbacks.
      // The response object, if one has been received, or null otherwise.
      let body = null;
      // Whether the response callback has been called.
      let finished = false;
      // Set the response callback in this.callbackMap (which will be the window
      // object in the browser. The script being loaded via the <script> tag will
      // eventually call this callback.
      this.callbackMap[callback] = data => {
        // Data has been received from the JSONP script. Firstly, delete this callback.
        delete this.callbackMap[callback];
        // Set state to indicate data was received.
        body = data;
        finished = true;
      };
      // cleanup() is a utility closure that removes the <script> from the page and
      // the response callback from the window. This logic is used in both the
      // success, error, and cancellation paths, so it's extracted out for convenience.
      const cleanup = () => {
        // Remove the <script> tag if it's still on the page.
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        // Remove the response callback from the callbackMap (window object in the
        // browser).
        delete this.callbackMap[callback];
      };
      // onLoad() is the success callback which runs after the response callback
      // if the JSONP script loads successfully. The event itself is unimportant.
      // If something went wrong, onLoad() may run without the response callback
      // having been invoked.
      const onLoad = event => {
        // We wrap it in an extra Promise, to ensure the microtask
        // is scheduled after the loaded endpoint has executed any potential microtask itself,
        // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
        this.resolvedPromise.then(() => {
          // Cleanup the page.
          cleanup();
          // Check whether the response callback has run.
          if (!finished) {
            // It hasn't, something went wrong with the request. Return an error via
            // the Observable error path. All JSONP errors have status 0.
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: 'JSONP Error',
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          }
          // Success. body either contains the response body or null if none was
          // returned.
          observer.next(new HttpResponse({
            body,
            status: 200 /* HttpStatusCode.Ok */,
            statusText: 'OK',
            url
          }));
          // Complete the stream, the response is over.
          observer.complete();
        });
      };
      // onError() is the error callback, which runs if the script returned generates
      // a Javascript error. It emits the error via the Observable error channel as
      // a HttpErrorResponse.
      const onError = error => {
        cleanup();
        // Wrap the error in a HttpErrorResponse.
        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: 'JSONP Error',
          url
        }));
      };
      // Subscribe to both the success (load) and error events on the <script> tag,
      // and add it to the page.
      node.addEventListener('load', onLoad);
      node.addEventListener('error', onError);
      this.document.body.appendChild(node);
      // The request has now been successfully sent.
      observer.next({
        type: HttpEventType.Sent
      });
      // Cancellation handler.
      return () => {
        if (!finished) {
          this.removeListeners(node);
        }
        // And finally, clean up the page.
        cleanup();
      };
    });
  }
  removeListeners(script) {
    // Issue #34818
    // Changing <script>'s ownerDocument will prevent it from execution.
    // https://html.spec.whatwg.org/multipage/scripting.html#execute-the-script-block
    if (!foreignDocument) {
      foreignDocument = this.document.implementation.createHTMLDocument();
    }
    foreignDocument.adoptNode(script);
  }
  static #_ = this.ɵfac = function JsonpClientBackend_Factory(t) {
    return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JsonpClientBackend,
    factory: JsonpClientBackend.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JsonpClientBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: JsonpCallbackContext
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
    }]
  }], null);
})();
/**
 * Identifies requests with the method JSONP and shifts them to the `JsonpClientBackend`.
 */
function jsonpInterceptorFn(req, next) {
  if (req.method === 'JSONP') {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(JsonpClientBackend).handle(req);
  }
  // Fall through for normal HTTP requests.
  return next(req);
}
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see {@link HttpInterceptor}
 *
 * @publicApi
 */
class JsonpInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param initialRequest The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(initialRequest, next) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(this.injector, () => jsonpInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
  }
  static #_ = this.ɵfac = function JsonpInterceptor_Factory(t) {
    return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JsonpInterceptor,
    factory: JsonpInterceptor.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JsonpInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector
  }], null);
})();
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }
  return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see {@link HttpHandler}
 * @see {@link JsonpClientBackend}
 *
 * @publicApi
 */
class HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */
  handle(req) {
    // Quick check to give a better error message when a user attempts to use
    // HttpClient.jsonp() without installing the HttpClientJsonpModule
    if (req.method === 'JSONP') {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](-2800 /* RuntimeErrorCode.MISSING_JSONP_MODULE */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
    }
    // Check whether this factory has a special function to load an XHR implementation
    // for various non-browser environments. We currently limit it to only `ServerXhr`
    // class, which needs to load an XHR implementation.
    const xhrFactory = this.xhrFactory;
    const source = xhrFactory.ɵloadImpl ? (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(xhrFactory.ɵloadImpl()) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => {
      // Everything happens on Observable subscription.
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
        // Start by setting up the XHR object with request method, URL, and withCredentials
        // flag.
        const xhr = xhrFactory.build();
        xhr.open(req.method, req.urlWithParams);
        if (req.withCredentials) {
          xhr.withCredentials = true;
        }
        // Add all the requested headers.
        req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
        // Add an Accept header if one isn't present already.
        if (!req.headers.has('Accept')) {
          xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
        }
        // Auto-detect the Content-Type header if one isn't present already.
        if (!req.headers.has('Content-Type')) {
          const detectedType = req.detectContentTypeHeader();
          // Sometimes Content-Type detection fails.
          if (detectedType !== null) {
            xhr.setRequestHeader('Content-Type', detectedType);
          }
        }
        // Set the responseType if one was requested.
        if (req.responseType) {
          const responseType = req.responseType.toLowerCase();
          // JSON responses need to be processed as text. This is because if the server
          // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
          // xhr.response will be null, and xhr.responseText cannot be accessed to
          // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
          // is parsed by first requesting text and then applying JSON.parse.
          xhr.responseType = responseType !== 'json' ? responseType : 'text';
        }
        // Serialize the request body if one is present. If not, this will be set to null.
        const reqBody = req.serializeBody();
        // If progress events are enabled, response headers will be delivered
        // in two events - the HttpHeaderResponse event and the full HttpResponse
        // event. However, since response headers don't change in between these
        // two events, it doesn't make sense to parse them twice. So headerResponse
        // caches the data extracted from the response whenever it's first parsed,
        // to ensure parsing isn't duplicated.
        let headerResponse = null;
        // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
        // state, and memoizes it into headerResponse.
        const partialFromXhr = () => {
          if (headerResponse !== null) {
            return headerResponse;
          }
          const statusText = xhr.statusText || 'OK';
          // Parse headers from XMLHttpRequest - this step is lazy.
          const headers = new HttpHeaders(xhr.getAllResponseHeaders());
          // Read the response URL from the XMLHttpResponse instance and fall back on the
          // request URL.
          const url = getResponseUrl(xhr) || req.url;
          // Construct the HttpHeaderResponse and memoize it.
          headerResponse = new HttpHeaderResponse({
            headers,
            status: xhr.status,
            statusText,
            url
          });
          return headerResponse;
        };
        // Next, a few closures are defined for the various events which XMLHttpRequest can
        // emit. This allows them to be unregistered as event listeners later.
        // First up is the load event, which represents a response being fully available.
        const onLoad = () => {
          // Read response state from the memoized partial data.
          let {
            headers,
            status,
            statusText,
            url
          } = partialFromXhr();
          // The body will be read out if present.
          let body = null;
          if (status !== 204 /* HttpStatusCode.NoContent */) {
            // Use XMLHttpRequest.response if set, responseText otherwise.
            body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
          }
          // Normalize another potential bug (this one comes from CORS).
          if (status === 0) {
            status = !!body ? 200 /* HttpStatusCode.Ok */ : 0;
          }
          // ok determines whether the response will be transmitted on the event or
          // error channel. Unsuccessful status codes (not 2xx) will always be errors,
          // but a successful status code can still result in an error if the user
          // asked for JSON data and the body cannot be parsed as such.
          let ok = status >= 200 && status < 300;
          // Check whether the body needs to be parsed as JSON (in many cases the browser
          // will have done that already).
          if (req.responseType === 'json' && typeof body === 'string') {
            // Save the original body, before attempting XSSI prefix stripping.
            const originalBody = body;
            body = body.replace(XSSI_PREFIX, '');
            try {
              // Attempt the parse. If it fails, a parse error should be delivered to the
              // user.
              body = body !== '' ? JSON.parse(body) : null;
            } catch (error) {
              // Since the JSON.parse failed, it's reasonable to assume this might not have
              // been a JSON response. Restore the original body (including any XSSI prefix)
              // to deliver a better error response.
              body = originalBody;
              // If this was an error request to begin with, leave it as a string, it
              // probably just isn't JSON. Otherwise, deliver the parsing error to the user.
              if (ok) {
                // Even though the response status was 2xx, this is still an error.
                ok = false;
                // The parse error contains the text of the body that failed to parse.
                body = {
                  error,
                  text: body
                };
              }
            }
          }
          if (ok) {
            // A successful response is delivered on the event stream.
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url: url || undefined
            }));
            // The full body has been received and delivered, no further events
            // are possible. This request is complete.
            observer.complete();
          } else {
            // An unsuccessful request is delivered on the error channel.
            observer.error(new HttpErrorResponse({
              // The error in this case is the response body (error from the server).
              error: body,
              headers,
              status,
              statusText,
              url: url || undefined
            }));
          }
        };
        // The onError callback is called when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc. These are actual errors, and are
        // transmitted on the error channel.
        const onError = error => {
          const {
            url
          } = partialFromXhr();
          const res = new HttpErrorResponse({
            error,
            status: xhr.status || 0,
            statusText: xhr.statusText || 'Unknown Error',
            url: url || undefined
          });
          observer.error(res);
        };
        // The sentHeaders flag tracks whether the HttpResponseHeaders event
        // has been sent on the stream. This is necessary to track if progress
        // is enabled since the event will be sent on only the first download
        // progress event.
        let sentHeaders = false;
        // The download progress event handler, which is only registered if
        // progress events are enabled.
        const onDownProgress = event => {
          // Send the HttpResponseHeaders event if it hasn't been sent already.
          if (!sentHeaders) {
            observer.next(partialFromXhr());
            sentHeaders = true;
          }
          // Start building the download progress event to deliver on the response
          // event stream.
          let progressEvent = {
            type: HttpEventType.DownloadProgress,
            loaded: event.loaded
          };
          // Set the total number of bytes in the event if it's available.
          if (event.lengthComputable) {
            progressEvent.total = event.total;
          }
          // If the request was for text content and a partial response is
          // available on XMLHttpRequest, include it in the progress event
          // to allow for streaming reads.
          if (req.responseType === 'text' && !!xhr.responseText) {
            progressEvent.partialText = xhr.responseText;
          }
          // Finally, fire the event.
          observer.next(progressEvent);
        };
        // The upload progress event handler, which is only registered if
        // progress events are enabled.
        const onUpProgress = event => {
          // Upload progress events are simpler. Begin building the progress
          // event.
          let progress = {
            type: HttpEventType.UploadProgress,
            loaded: event.loaded
          };
          // If the total number of bytes being uploaded is available, include
          // it.
          if (event.lengthComputable) {
            progress.total = event.total;
          }
          // Send the event.
          observer.next(progress);
        };
        // By default, register for load and error events.
        xhr.addEventListener('load', onLoad);
        xhr.addEventListener('error', onError);
        xhr.addEventListener('timeout', onError);
        xhr.addEventListener('abort', onError);
        // Progress events are only enabled if requested.
        if (req.reportProgress) {
          // Download progress is always enabled if requested.
          xhr.addEventListener('progress', onDownProgress);
          // Upload progress depends on whether there is a body to upload.
          if (reqBody !== null && xhr.upload) {
            xhr.upload.addEventListener('progress', onUpProgress);
          }
        }
        // Fire the request, and notify the event stream that it was fired.
        xhr.send(reqBody);
        observer.next({
          type: HttpEventType.Sent
        });
        // This is the return from the Observable function, which is the
        // request cancellation handler.
        return () => {
          // On a cancellation, remove all registered event listeners.
          xhr.removeEventListener('error', onError);
          xhr.removeEventListener('abort', onError);
          xhr.removeEventListener('load', onLoad);
          xhr.removeEventListener('timeout', onError);
          if (req.reportProgress) {
            xhr.removeEventListener('progress', onDownProgress);
            if (reqBody !== null && xhr.upload) {
              xhr.upload.removeEventListener('progress', onUpProgress);
            }
          }
          // Finally, abort the in-flight request.
          if (xhr.readyState !== xhr.DONE) {
            xhr.abort();
          }
        };
      });
    }));
  }
  static #_ = this.ɵfac = function HttpXhrBackend_Factory(t) {
    return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.XhrFactory));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpXhrBackend,
    factory: HttpXhrBackend.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpXhrBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.XhrFactory
  }], null);
})();
const XSRF_ENABLED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('XSRF_ENABLED');
const XSRF_DEFAULT_COOKIE_NAME = 'XSRF-TOKEN';
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('XSRF_COOKIE_NAME', {
  providedIn: 'root',
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
const XSRF_DEFAULT_HEADER_NAME = 'X-XSRF-TOKEN';
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('XSRF_HEADER_NAME', {
  providedIn: 'root',
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = '';
    this.lastToken = null;
    /**
     * @internal for testing
     */
    this.parseCount = 0;
  }
  getToken() {
    if (this.platform === 'server') {
      return null;
    }
    const cookieString = this.doc.cookie || '';
    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵparseCookieValue"])(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }
    return this.lastToken;
  }
  static #_ = this.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
    return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](XSRF_COOKIE_NAME));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpXsrfCookieExtractor,
    factory: HttpXsrfCookieExtractor.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [XSRF_COOKIE_NAME]
    }]
  }], null);
})();
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  // Skip both non-mutating requests and absolute URLs.
  // Non-mutating requests don't require a token, and absolute URLs require special handling
  // anyway as the cookie set
  // on our origin is not the same as the token expected by another origin.
  if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_ENABLED) || req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
    return next(req);
  }
  const token = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpXsrfTokenExtractor).getToken();
  const headerName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_HEADER_NAME);
  // Be careful not to overwrite an existing header of the same name.
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  intercept(initialRequest, next) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(this.injector, () => xsrfInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
  }
  static #_ = this.ɵfac = function HttpXsrfInterceptor_Factory(t) {
    return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpXsrfInterceptor,
    factory: HttpXsrfInterceptor.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector
  }], null);
})();

/**
 * Identifies a particular kind of `HttpFeature`.
 *
 * @publicApi
 */
var HttpFeatureKind;
(function (HttpFeatureKind) {
  HttpFeatureKind[HttpFeatureKind["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind[HttpFeatureKind["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind[HttpFeatureKind["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind[HttpFeatureKind["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind[HttpFeatureKind["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind[HttpFeatureKind["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
  HttpFeatureKind[HttpFeatureKind["Fetch"] = 6] = "Fetch";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
/**
 * Configures Angular's `HttpClient` service to be available for injection.
 *
 * By default, `HttpClient` will be configured for injection with its default options for XSRF
 * protection of outgoing requests. Additional configuration options can be provided by passing
 * feature functions to `provideHttpClient`. For example, HTTP interceptors can be added using the
 * `withInterceptors(...)` feature.
 *
 * <div class="alert is-helpful">
 *
 * It's strongly recommended to enable
 * [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for applications that use
 * Server-Side Rendering for better performance and compatibility. To enable `fetch`, add
 * `withFetch()` feature to the `provideHttpClient()` call at the root of the application:
 *
 * ```
 * provideHttpClient(withFetch());
 * ```
 *
 * </div>
 *
 * @see {@link withInterceptors}
 * @see {@link withInterceptorsFromDi}
 * @see {@link withXsrfConfiguration}
 * @see {@link withNoXsrfProtection}
 * @see {@link withJsonpSupport}
 * @see {@link withRequestsMadeViaParent}
 * @see {@link withFetch}
 */
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map(f => f.ɵkind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : '');
    }
  }
  const providers = [HttpClient, HttpXhrBackend, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }, {
    provide: XSRF_ENABLED,
    useValue: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }];
  for (const feature of features) {
    providers.push(...feature.ɵproviders);
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeEnvironmentProviders)(providers);
}
/**
 * Adds one or more functional-style HTTP interceptors to the configuration of the `HttpClient`
 * instance.
 *
 * @see {@link HttpInterceptorFn}
 * @see {@link provideHttpClient}
 * @publicApi
 */
function withInterceptors(interceptorFns) {
  return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map(interceptorFn => {
    return {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: interceptorFn,
      multi: true
    };
  }));
}
const LEGACY_INTERCEPTOR_FN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('LEGACY_INTERCEPTOR_FN');
/**
 * Includes class-based interceptors configured using a multi-provider in the current injector into
 * the configured `HttpClient` instance.
 *
 * Prefer `withInterceptors` and functional interceptors instead, as support for DI-provided
 * interceptors may be phased out in a later release.
 *
 * @see {@link HttpInterceptor}
 * @see {@link HTTP_INTERCEPTORS}
 * @see {@link provideHttpClient}
 */
function withInterceptorsFromDi() {
  // Note: the legacy interceptor function is provided here via an intermediate token
  // (`LEGACY_INTERCEPTOR_FN`), using a pattern which guarantees that if these providers are
  // included multiple times, all of the multi-provider entries will have the same instance of the
  // interceptor function. That way, the `HttpINterceptorHandler` will dedup them and legacy
  // interceptors will not run multiple times.
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
/**
 * Customizes the XSRF protection for the configuration of the current `HttpClient` instance.
 *
 * This feature is incompatible with the `withNoXsrfProtection` feature.
 *
 * @see {@link provideHttpClient}
 */
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== undefined) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== undefined) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
/**
 * Disables XSRF protection in the configuration of the current `HttpClient` instance.
 *
 * This feature is incompatible with the `withXsrfConfiguration` feature.
 *
 * @see {@link provideHttpClient}
 */
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
/**
 * Add JSONP support to the configuration of the current `HttpClient` instance.
 *
 * @see {@link provideHttpClient}
 */
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
/**
 * Configures the current `HttpClient` instance to make requests via the parent injector's
 * `HttpClient` instead of directly.
 *
 * By default, `provideHttpClient` configures `HttpClient` in its injector to be an independent
 * instance. For example, even if `HttpClient` is configured in the parent injector with
 * one or more interceptors, they will not intercept requests made via this instance.
 *
 * With this option enabled, once the request has passed through the current injector's
 * interceptors, it will be delegated to the parent injector's `HttpClient` chain instead of
 * dispatched directly, and interceptors in the parent configuration will be applied to the request.
 *
 * If there are several `HttpClient` instances in the injector hierarchy, it's possible for
 * `withRequestsMadeViaParent` to be used at multiple levels, which will cause the request to
 * "bubble up" until either reaching the root level or an `HttpClient` which was not configured with
 * this option.
 *
 * @see {@link provideHttpClient}
 * @developerPreview
 */
function withRequestsMadeViaParent() {
  return makeHttpFeature(HttpFeatureKind.RequestsMadeViaParent, [{
    provide: HttpBackend,
    useFactory: () => {
      const handlerFromParent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpHandler, {
        skipSelf: true,
        optional: true
      });
      if (ngDevMode && handlerFromParent === null) {
        throw new Error('withRequestsMadeViaParent() can only be used when the parent injector also configures HttpClient');
      }
      return handlerFromParent;
    }
  }]);
}
/**
 * Configures the current `HttpClient` instance to make requests using the fetch API.
 *
 * This `FetchBackend` requires the support of the Fetch API which is available on all evergreen
 * browsers and on NodeJS from v18 onward.
 *
 * Note: The Fetch API doesn't support progress report on uploads.
 *
 * @publicApi
 */
function withFetch() {
  if ((typeof ngDevMode === 'undefined' || ngDevMode) && typeof fetch !== 'function') {
    // TODO: Create a runtime error
    // TODO: Use ENVIRONMENT_INITIALIZER to contextualize the error message (browser or server)
    throw new Error('The `withFetch` feature of HttpClient requires the `fetch` API to be available. ' + 'If you run the code in a Node environment, make sure you use Node v18.10 or later.');
  }
  return makeHttpFeature(HttpFeatureKind.Fetch, [FetchBackend, {
    provide: HttpBackend,
    useExisting: FetchBackend
  }, {
    provide: PRIMARY_HTTP_BACKEND,
    useExisting: FetchBackend
  }]);
}

/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [withNoXsrfProtection().ɵproviders]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */
  static withOptions(options = {}) {
    return {
      ngModule: HttpClientXsrfModule,
      providers: withXsrfConfiguration(options).ɵproviders
    };
  }
  static #_ = this.ɵfac = function HttpClientXsrfModule_Factory(t) {
    return new (t || HttpClientXsrfModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HttpClientXsrfModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [HttpXsrfInterceptor, {
      provide: HTTP_INTERCEPTORS,
      useExisting: HttpXsrfInterceptor,
      multi: true
    }, {
      provide: HttpXsrfTokenExtractor,
      useClass: HttpXsrfCookieExtractor
    }, withXsrfConfiguration({
      cookieName: XSRF_DEFAULT_COOKIE_NAME,
      headerName: XSRF_DEFAULT_HEADER_NAME
    }).ɵproviders, {
      provide: XSRF_ENABLED,
      useValue: true
    }]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).ɵproviders, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {
  static #_ = this.ɵfac = function HttpClientModule_Factory(t) {
    return new (t || HttpClientModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HttpClientModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [provideHttpClient(withInterceptorsFromDi())]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * @publicApi
 */
class HttpClientJsonpModule {
  static #_ = this.ɵfac = function HttpClientJsonpModule_Factory(t) {
    return new (t || HttpClientJsonpModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HttpClientJsonpModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [withJsonpSupport().ɵproviders]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [withJsonpSupport().ɵproviders]
    }]
  }], null, null);
})();

/**
 * Keys within cached response data structure.
 */
const BODY = 'b';
const HEADERS = 'h';
const STATUS = 's';
const STATUS_TEXT = 'st';
const URL = 'u';
const RESPONSE_TYPE = 'rt';
const CACHE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(ngDevMode ? 'HTTP_TRANSFER_STATE_CACHE_OPTIONS' : '');
/**
 * A list of allowed HTTP methods to cache.
 */
const ALLOWED_METHODS = ['GET', 'HEAD'];
function transferCacheInterceptorFn(req, next) {
  const {
    isCacheActive,
    ...globalOptions
  } = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CACHE_OPTIONS);
  const {
    transferCache: requestOptions,
    method: requestMethod
  } = req;
  // In the following situations we do not want to cache the request
  if (!isCacheActive ||
  // POST requests are allowed either globally or at request level
  requestMethod === 'POST' && !globalOptions.includePostRequests && !requestOptions || requestMethod !== 'POST' && !ALLOWED_METHODS.includes(requestMethod) || requestOptions === false ||
  //
  globalOptions.filter?.(req) === false) {
    return next(req);
  }
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const storeKey = makeCacheKey(req);
  const response = transferState.get(storeKey, null);
  let headersToInclude = globalOptions.includeHeaders;
  if (typeof requestOptions === 'object' && requestOptions.includeHeaders) {
    // Request-specific config takes precedence over the global config.
    headersToInclude = requestOptions.includeHeaders;
  }
  if (response) {
    const {
      [BODY]: undecodedBody,
      [RESPONSE_TYPE]: responseType,
      [HEADERS]: httpHeaders,
      [STATUS]: status,
      [STATUS_TEXT]: statusText,
      [URL]: url
    } = response;
    // Request found in cache. Respond using it.
    let body = undecodedBody;
    switch (responseType) {
      case 'arraybuffer':
        body = new TextEncoder().encode(undecodedBody).buffer;
        break;
      case 'blob':
        body = new Blob([undecodedBody]);
        break;
    }
    // We want to warn users accessing a header provided from the cache
    // That HttpTransferCache alters the headers
    // The warning will be logged a single time by HttpHeaders instance
    let headers = new HttpHeaders(httpHeaders);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      // Append extra logic in dev mode to produce a warning when a header
      // that was not transferred to the client is accessed in the code via `get`
      // and `has` calls.
      headers = appendMissingHeadersDetection(req.url, headers, headersToInclude ?? []);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new HttpResponse({
      body,
      headers,
      status,
      statusText,
      url
    }));
  }
  // Request not found in cache. Make the request and cache it.
  return next(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(event => {
    if (event instanceof HttpResponse) {
      transferState.set(storeKey, {
        [BODY]: event.body,
        [HEADERS]: getFilteredHeaders(event.headers, headersToInclude),
        [STATUS]: event.status,
        [STATUS_TEXT]: event.statusText,
        [URL]: event.url || '',
        [RESPONSE_TYPE]: req.responseType
      });
    }
  }));
}
function getFilteredHeaders(headers, includeHeaders) {
  if (!includeHeaders) {
    return {};
  }
  const headersMap = {};
  for (const key of includeHeaders) {
    const values = headers.getAll(key);
    if (values !== null) {
      headersMap[key] = values;
    }
  }
  return headersMap;
}
function makeCacheKey(request) {
  // make the params encoded same as a url so it's easy to identify
  const {
    params,
    method,
    responseType,
    url
  } = request;
  const encodedParams = params.keys().sort().map(k => `${k}=${params.getAll(k)}`).join('&');
  const key = method + '.' + responseType + '.' + url + '?' + encodedParams;
  const hash = generateHash(key);
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)(hash);
}
/**
 * A method that returns a hash representation of a string using a variant of DJB2 hash
 * algorithm.
 *
 * This is the same hashing logic that is used to generate component ids.
 */
function generateHash(value) {
  let hash = 0;
  for (const char of value) {
    hash = Math.imul(31, hash) + char.charCodeAt(0) << 0;
  }
  // Force positive number hash.
  // 2147483647 = equivalent of Integer.MAX_VALUE.
  hash += 2147483647 + 1;
  return hash.toString();
}
/**
 * Returns the DI providers needed to enable HTTP transfer cache.
 *
 * By default, when using server rendering, requests are performed twice: once on the server and
 * other one on the browser.
 *
 * When these providers are added, requests performed on the server are cached and reused during the
 * bootstrapping of the application in the browser thus avoiding duplicate requests and reducing
 * load time.
 *
 */
function withHttpTransferCache(cacheOptions) {
  return [{
    provide: CACHE_OPTIONS,
    useFactory: () => {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵperformanceMarkFeature"])('NgHttpTransferCache');
      return {
        isCacheActive: true,
        ...cacheOptions
      };
    }
  }, {
    provide: HTTP_ROOT_INTERCEPTOR_FNS,
    useValue: transferCacheInterceptorFn,
    multi: true,
    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState, CACHE_OPTIONS]
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: () => {
      const appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
      const cacheState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CACHE_OPTIONS);
      return () => {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵwhenStable"])(appRef).then(() => {
          cacheState.isCacheActive = false;
        });
      };
    }
  }];
}
/**
 * This function will add a proxy to an HttpHeader to intercept calls to get/has
 * and log a warning if the header entry requested has been removed
 */
function appendMissingHeadersDetection(url, headers, headersToInclude) {
  const warningProduced = new Set();
  return new Proxy(headers, {
    get(target, prop) {
      const value = Reflect.get(target, prop);
      const methods = new Set(['get', 'has', 'getAll']);
      if (typeof value !== 'function' || !methods.has(prop)) {
        return value;
      }
      return headerName => {
        // We log when the key has been removed and a warning hasn't been produced for the header
        const key = (prop + ':' + headerName).toLowerCase(); // e.g. `get:cache-control`
        if (!headersToInclude.includes(headerName) && !warningProduced.has(key)) {
          warningProduced.add(key);
          const truncatedUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵtruncateMiddle"])(url);
          // TODO: create Error guide for this warning
          console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵformatRuntimeError"])(2802 /* RuntimeErrorCode.HEADERS_ALTERED_BY_TRANSFER_CACHE */, `Angular detected that the \`${headerName}\` header is accessed, but the value of the header ` + `was not transferred from the server to the client by the HttpTransferCache. ` + `To include the value of the \`${headerName}\` header for the \`${truncatedUrl}\` request, ` + `use the \`includeHeaders\` list. The \`includeHeaders\` can be defined either ` + `on a request level by adding the \`transferCache\` parameter, or on an application ` + `level by adding the \`httpCacheTransfer.includeHeaders\` argument to the ` + `\`provideClientHydration()\` call. `));
        }
        // invoking the original method
        return value.apply(target, [headerName]);
      };
    }
  });
}

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3918:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ 2321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: function() { return /* binding */ __addDisposableResource; },
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __disposeResources: function() { return /* binding */ __disposeResources; },
/* harmony export */   __esDecorate: function() { return /* binding */ __esDecorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __propKey: function() { return /* binding */ __propKey; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __runInitializers: function() { return /* binding */ __runInitializers; },
/* harmony export */   __setFunctionName: function() { return /* binding */ __setFunctionName; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

};
;
//# sourceMappingURL=860.bfb58d85177fdf6c.js.map