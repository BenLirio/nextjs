webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/ReviewsInterface.js":
/*!**********************************!*\
  !*** ./data/ReviewsInterface.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var ReviewsInterface =
/*#__PURE__*/
function () {
  function ReviewsInterface() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReviewsInterface);

    this.reviews = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReviewsInterface, [{
    key: "addReview",
    value: function addReview(_ref) {
      var authorLastName = _ref.authorLastName,
          createdDate = _ref.createdDate,
          authorFirstName = _ref.authorFirstName,
          rating = _ref.rating,
          id = _ref.id,
          text = _ref.text,
          title = _ref.title;

      if (!!(authorFirstName && authorLastName && rating && id && text && title)) {
        var name = authorFirstName + ' ' + authorLastName;
        var key = id;
        var review = {
          title: title,
          text: text
        };
        this.reviews.push(new Review(key, name, text));
      }
    }
  }]);

  return ReviewsInterface;
}();

var Review = function Review(key, name, text) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Review);

  this.key = key;
  this.name = name;
  this.text = text;
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewsInterface);

/***/ })

})
//# sourceMappingURL=index.js.c6688341820a902cec6b.hot-update.js.map