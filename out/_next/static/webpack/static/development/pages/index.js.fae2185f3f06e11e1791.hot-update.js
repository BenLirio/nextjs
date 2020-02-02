webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/RateABiz.js":
/*!*************************************!*\
  !*** ./components/Home/RateABiz.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/ben/Documents/sei/tmp/nextjs/components/Home/RateABiz.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
//https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {}
  };
});

var RateABiz = function RateABiz(_ref) {
  var reviews = _ref.reviews,
      stats = _ref.stats;
  var classes = useStyles();
  console.log('reviews.length', reviews.length);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, reviews.map(function (review) {
    return __jsx("div", {
      key: review.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, review.authorFirstName);
  }));
};

RateABiz.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('test');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RateABiz);

/***/ })

})
//# sourceMappingURL=index.js.fae2185f3f06e11e1791.hot-update.js.map