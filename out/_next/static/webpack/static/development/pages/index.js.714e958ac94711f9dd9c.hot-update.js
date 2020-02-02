webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/reviewInterface.js":
/*!*********************************!*\
  !*** ./data/reviewInterface.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Review; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var Review =
/*#__PURE__*/
function () {
  function Review(_ref) {
    var authorLastName = _ref.authorLastName,
        createdDate = _ref.createdDate,
        authorFirstName = _ref.authorFirstName,
        rating = _ref.rating,
        id = _ref.id,
        text = _ref.text,
        title = _ref.title;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Review);

    this._authorLastName = authorLastName;
    this._createdDate = createdDate;
    this._rating = rating;
    this._id = id;
    this._text = text;
    this._title = title;
    this._authorFirstName = authorFirstName;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Review, [{
    key: "isValid",
    value: function isValid() {
      return !!(this._authorFirstName && this._authorLastName && this._rating && this._id && this._text && this._title);
    }
  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "name",
    get: function get() {
      return "".concat(this._authorFirstName, " ").concat(this._authorLastName);
    }
  }, {
    key: "rating",
    get: function get() {
      return Math.round(this._rating);
    }
  }, {
    key: "review",
    get: function get() {
      return {
        title: this._title,
        text: this._text
      };
    }
  }]);

  return Review;
}();



/***/ })

})
//# sourceMappingURL=index.js.714e958ac94711f9dd9c.hot-update.js.map