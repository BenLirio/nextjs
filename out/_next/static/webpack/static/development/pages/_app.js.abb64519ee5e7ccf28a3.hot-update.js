webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");


var _test;



var value = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var unit = 'px';
var step = 5; // Create a theme instance.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  grid: {
    template: {
      test: (_test = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_test, "@media (min-width:".concat(value.xs).concat(unit, ")"), {
        background: '#000',
        gridTemplateColumns: "[full-start]16px repeat(4,[col-start]1fr[col-end]) 16px[full-end]"
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_test, "@media (min-width:".concat(value.sm).concat(unit, ")"), {
        background: '#f00'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_test, "@media (min-width:".concat(value.md).concat(unit, ")"), {
        background: '#0f0'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_test, "@media (min-width:".concat(value.lg).concat(unit, ")"), {
        background: '#00f'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_test, "@media (min-width:".concat(value.xl).concat(unit, ")"), {
        background: '#ff0'
      }), _test),
      columns: '[full-start] 1fr [center-start] repeat(8, [col-start] 8rem [col-end]) [center-end] 1fr [full-end]'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=_app.js.abb64519ee5e7ccf28a3.hot-update.js.map