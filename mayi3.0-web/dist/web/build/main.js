'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('source-map-support/register');
module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var start = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this = this;

      var app, host, port, config, nuxt, builder;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
              host = process.env.HOST || '127.0.0.1';
              port = process.env.PORT || 3000;

              // Import and Set Nuxt.js options

              config = __webpack_require__(3);

              config.dev = !(app.env === 'production');

              // Instantiate nuxt.js
              nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

              // Build in development

              if (!config.dev) {
                _context2.next = 10;
                break;
              }

              builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
              _context2.next = 10;
              return builder.build();

            case 10:

              app.use(function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return next();

                        case 2:
                          ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                          return _context.abrupt('return', new Promise(function (resolve, reject) {
                            ctx.res.on('close', resolve);
                            ctx.res.on('finish', resolve);
                            nuxt.render(ctx.req, ctx.res, function (promise) {
                              // nuxt.render passes a rejected promise into callback on error.
                              promise.then(resolve).catch(reject);
                            });
                          }));

                        case 4:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x, _x2) {
                  return _ref2.apply(this, arguments);
                };
              }());

              app.listen(port, host);
              console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function start() {
      return _ref.apply(this, arguments);
    };
  }();

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);

  start();

  /***/
},
/* 1 */
/***/function (module, exports) {

  module.exports = require("koa");

  /***/
},
/* 2 */
/***/function (module, exports) {

  module.exports = require("nuxt");

  /***/
},
/* 3 */
/***/function (module, exports) {

  module.exports = {
    head: {
      title: 'N2EX',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1' }, { hid: 'description', name: 'description', content: 'N2ex' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' }]
    },
    css: ['~assets/css/main.css', '~assets/font/material-icons.css', 'muse-ui/dist/muse-ui.css', 'muse-ui/dist/theme-carbon.css'],
    loading: {
      color: '#ff4081'
    },
    modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/component-cache'],
    axios: {
      baseURL: 'https://proxy-oagpwnbkpe.now.sh',
      credentials: false,
      proxyHeaders: false
    },
    plugins: [{ src: '~plugins/muse-ui.js', ssr: true }, '~plugins/filters.js']
  };

  /***/
}]
/******/);
//# sourceMappingURL=main.map
//# sourceMappingURL=main.js.map