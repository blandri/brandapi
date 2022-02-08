"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleController = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ArticleController = /*#__PURE__*/function () {
  function ArticleController() {
    (0, _classCallCheck2["default"])(this, ArticleController);
  }

  (0, _createClass2["default"])(ArticleController, [{
    key: "createArticle",
    value: // TODO Don't access database from this file you only needs
    function createArticle(req, res, next) {}
  }, {
    key: "getAllArticles",
    value: function getAllArticles(req, res, next) {
      res.status(200).json({
        status: 200,
        message: 'this will return all articles',
        data: ''
      });
    }
  }, {
    key: "getArticle",
    value: function getArticle(req, res, next) {}
  }, {
    key: "updateArticle",
    value: function updateArticle(req, res, next) {}
  }, {
    key: "deleteArticle",
    value: function deleteArticle(req, res, next) {}
  }]);
  return ArticleController;
}();

exports.ArticleController = ArticleController;