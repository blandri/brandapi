"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleServices = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// import the model you need to access
var ArticleServices = /*#__PURE__*/function () {
  function ArticleServices() {
    (0, _classCallCheck2["default"])(this, ArticleServices);
  }

  (0, _createClass2["default"])(ArticleServices, [{
    key: "createArticle",
    value: function createArticle(data) {}
  }, {
    key: "getAllArticles",
    value: function getAllArticles() {}
  }, {
    key: "getArticle",
    value: function getArticle(id) {}
  }, {
    key: "updateArticle",
    value: function updateArticle(id) {}
  }, {
    key: "deleteArticle",
    value: function deleteArticle(id) {}
  }]);
  return ArticleServices;
}();

exports.ArticleServices = ArticleServices;