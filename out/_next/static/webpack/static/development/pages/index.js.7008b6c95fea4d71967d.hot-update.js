webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/reviewInterface.js":
/*!*********************************!*\
  !*** ./data/reviewInterface.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var Reviews =
/*#__PURE__*/
function () {
  function Reviews() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reviews);

    this.reviews = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reviews, [{
    key: "addReview",
    value: function addReview(_ref) {
      var authorLastName = _ref.authorLastName,
          createdDate = _ref.createdDate,
          authorFirstName = _ref.authorFirstName,
          rating = _ref.rating,
          id = _ref.id,
          text = _ref.text,
          title = _ref.title;
    }
  }]);

  return Reviews;
}();

var Review = function Review(_ref2) {
  var authorLastName = _ref2.authorLastName,
      createdDate = _ref2.createdDate,
      authorFirstName = _ref2.authorFirstName,
      rating = _ref2.rating,
      id = _ref2.id,
      text = _ref2.text,
      title = _ref2.title;
  this._authorLastName = authorLastName;
  this._createdDate = createdDate;
  this._rating = rating;
  this._id = id;
  this._text = text;
  this._title = title;
  this._authorFirstName = authorFirstName;
};

Review.prototype.isValid = function () {
  return !!(this._authorFirstName && this._authorLastName && this._rating && this._id && this._text && this._title);
};

Review.prototype.name = function () {
  return "".concat(this._authorFirstName, " ").concat(this._authorLastName);
};

Review.prototype.rating = function () {
  return Math.round(this._rating);
};

Review.prototype.id = function () {
  return this._id;
};

Review.prototype.review = function () {
  return {
    title: this._title,
    text: this._text
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ })

})
//# sourceMappingURL=index.js.7008b6c95fea4d71967d.hot-update.js.map