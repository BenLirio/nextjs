webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_Home_FeatureImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/FeatureImage */ "./components/Home/FeatureImage.js");
/* harmony import */ var _components_Home_Features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Features */ "./components/Home/Features.js");
/* harmony import */ var _components_Home_RateABiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/RateABiz */ "./components/Home/RateABiz.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_rating_local__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/rating_local */ "./data/rating_local.js");
/* harmony import */ var _components_Home_About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/About */ "./components/Home/About.js");

var _jsxFileName = "/Users/ben/Documents/sei/tmp/nextjs/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var API_URL = 'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json';
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {},
    full: {
      gridColumn: 'full-start / full-end'
    },
    center: {
      gridColumn: 'center-start / center-end'
    },
    featureImage: {
      height: '60vh'
    },
    features: {
      height: '30vw'
    },
    rateABiz: {
      height: 500
    },
    about: {
      height: 800
    },
    cta: {
      background: theme.palette.secondary.light,
      height: 200
    },
    maps: {
      background: theme.palette.primary.light,
      height: 400
    }
  };
});
function Index(_ref) {
  var reviews = _ref.reviews,
      stats = _ref.stats;
  var classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.featureImage, classes.full),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_Home_FeatureImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.features, classes.center),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_Home_Features__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.rateABiz, classes.full),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_Home_RateABiz__WEBPACK_IMPORTED_MODULE_7__["default"], {
    reviews: reviews,
    stats: stats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.about, classes.center),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_components_Home_About__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cta, classes.full),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.maps, classes.center),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
}

Index.getInitialProps = function _callee() {
  var reviews, stats;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const res = await fetch(API_URL)
          // const { reviews, stats } = await res.json()
          reviews = _data_rating_local__WEBPACK_IMPORTED_MODULE_9__["default"].reviews, stats = _data_rating_local__WEBPACK_IMPORTED_MODULE_9__["default"].stats;
          return _context.abrupt("return", {
            reviews: reviews,
            stats: stats
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=index.js.b7aa7d80af02b5a1c4b0.hot-update.js.map