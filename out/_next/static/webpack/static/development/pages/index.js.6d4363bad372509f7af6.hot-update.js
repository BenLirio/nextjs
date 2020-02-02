webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/Cta.js":
/*!********************************!*\
  !*** ./components/Home/Cta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/ben/Documents/sei/tmp/nextjs/components/Home/Cta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'grid',
      alignItems: 'center',
      height: '100%',
      gridTemplateColumns: theme.grid.template.columns
    },
    button: {
      gridColumn: 'col-start 8 / col-end 8'
    },
    text: {
      gridColumn: 'col-start 1 / col-end 4'
    }
  };
});

var Cta = function Cta() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.text,
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Try today"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classes.button,
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Try now"));
};

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ })

})
//# sourceMappingURL=index.js.6d4363bad372509f7af6.hot-update.js.map