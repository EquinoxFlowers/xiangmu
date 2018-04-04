'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Axios.prototype cannot be modified
var axiosExtra = {
  setHeader: function setHeader(name, value) {
    var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'common';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (Array.isArray(scopes) ? scopes : [scopes])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var scope = _step.value;

        if (!value) {
          delete this.defaults.headers[scope][name];
          return;
        }
        this.defaults.headers[scope][name] = value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  setToken: function setToken(token, type) {
    var scopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'common';

    var value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest: function onRequest(fn) {
    this.interceptors.request.use(function (config) {
      return fn(config) || config;
    });
  },
  onResponse: function onResponse(fn) {
    this.interceptors.response.use(function (response) {
      return fn(response) || response;
    });
  },
  onRequestError: function onRequestError(fn) {
    this.interceptors.request.use(undefined, function (error) {
      return fn(error) || Promise.reject(error);
    });
  },
  onResponseError: function onResponseError(fn) {
    this.interceptors.response.use(undefined, function (error) {
      return fn(error) || Promise.reject(error);
    });
  },
  onError: function onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  }
};

// Request helpers ($get, $post, ...)

var _loop = function _loop(method) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(function (res) {
      return res && res.data;
    });
  };
};

var _arr = ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch'];
for (var _i = 0; _i < _arr.length; _i++) {
  var method = _arr[_i];
  _loop(method);
}

var extendAxiosInstance = function extendAxiosInstance(axios) {
  for (var key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

var setupProgress = function setupProgress(axios, ctx) {
  if (process.server) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  var noopLoading = {
    finish: function finish() {},
    start: function start() {},
    fail: function fail() {},
    set: function set() {}
  };

  var $loading = function $loading() {
    return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : noopLoading;
  };

  var currentRequests = 0;

  axios.onRequest(function (config) {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });

  axios.onResponse(function (response) {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });

  axios.onError(function (error) {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;
    $loading().fail();
    $loading().finish();
  });

  var onProgress = function onProgress(e) {
    var progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

exports.default = function (ctx, inject) {
  var axiosOptions = {
    // baseURL
    baseURL: process.browser ? 'https://proxy-oagpwnbkpe.now.sh' : process.env._AXIOS_BASE_URL_ || 'https://proxy-oagpwnbkpe.now.sh',

    // Create fresh objects for all default header scopes
    // Axios creates only one which is shared across SSR requests!
    // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      },
      delete: {},
      get: {},
      head: {},
      post: {},
      put: {},
      patch: {}
    }

    // Create new axios instance
  };var axios = _axios2.default.create(axiosOptions);

  // Extend axios proto
  extendAxiosInstance(axios);

  // Setup interceptors


  setupProgress(axios, ctx);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
};
//# sourceMappingURL=axios.js.map