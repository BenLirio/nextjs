webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/reviewInterface.js":
/*!*********************************!*\
  !*** ./data/reviewInterface.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _this = undefined;

/* harmony default export */ __webpack_exports__["default"] = (Review = function Review(_ref) {
  var authorLastName = _ref.authorLastName,
      createdDate = _ref.createdDate,
      authorFirstName = _ref.authorFirstName,
      rating = _ref.rating,
      id = _ref.id,
      text = _ref.text,
      title = _ref.title;
  _this._authorLastName = authorLastName;
  _this._createdDate = createdDate;
  _this._rating = rating;
  _this._id = id;
  _this._text = text;
  _this._title = title;
  _this._authorFirstName = authorFirstName;
});

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

Review.review = function () {
  return {
    title: this._title,
    text: this._text
  };
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false

})
//# sourceMappingURL=index.js.8223d39e703ef328501c.hot-update.js.map