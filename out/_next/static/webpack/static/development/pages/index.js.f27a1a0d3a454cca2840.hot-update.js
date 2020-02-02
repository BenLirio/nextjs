webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/About.js":
/*!**********************************!*\
  !*** ./components/Home/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/ben/Documents/sei/tmp/nextjs/components/Home/About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      background: theme.palette.grey[200],
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '[text-start img1-start]1fr[text-end img3-start] 1fr[img2-start img1-end] 1fr[img3-end img2-end]',
      gridGap: '2rem'
    },
    aboutText: {
      gridRow: 'text-start / text-end'
    },
    aboutImage1: {
      background: theme.palette.primary.light,
      gridRow: 'img1-start / img1-end'
    },
    aboutImage2: {
      background: theme.palette.primary.light,
      gridRow: 'img2-start / img2-end',
      gridColumn: '2 / 3'
    },
    aboutImage3: {
      background: theme.palette.primary.light,
      gridColumn: '1',
      gridRow: 'img3-start / img3-end'
    }
  };
});

var About = function About() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: classes.aboutText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Healthy Smile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni necessitatibus dolores beatae, cumque placeat consequuntur rem quod harum esse ab natus reprehenderit similique! Porro accusamus, magnam alias quaerat expedita voluptatum quod ipsum eos modi provident. Minima consectetur eius animi!")), __jsx("div", {
    className: classes.aboutImage1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: classes.aboutImage2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    className: classes.aboutImage3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.f27a1a0d3a454cca2840.hot-update.js.map