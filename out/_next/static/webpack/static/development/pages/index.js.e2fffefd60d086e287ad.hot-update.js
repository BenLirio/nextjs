webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/reviewInterface.js":
/*!*********************************!*\
  !*** ./data/reviewInterface.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Review = function Review(_ref) {
  var authorLastName = _ref.authorLastName,
      createdDate = _ref.createdDate,
      authorFirstName = _ref.authorFirstName,
      rating = _ref.rating,
      id = _ref.id,
      text = _ref.text,
      title = _ref.title;
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

Review.review = function () {
  return {
    title: this._title,
    text: this._text
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ })

})
//# sourceMappingURL=index.js.e2fffefd60d086e287ad.hot-update.js.map