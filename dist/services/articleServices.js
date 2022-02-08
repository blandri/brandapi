"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleServices = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _article = _interopRequireDefault(require("../models/article"));

//import the model you need to access
var ArticleServices = /*#__PURE__*/function () {
  function ArticleServices() {
    (0, _classCallCheck2["default"])(this, ArticleServices);
  }

  (0, _createClass2["default"])(ArticleServices, null, [{
    key: "createArticle",
    value: function () {
      var _createArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return data.save();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createArticle(_x) {
        return _createArticle.apply(this, arguments);
      }

      return createArticle;
    }()
  }, {
    key: "getAllArticles",
    value: function () {
      var _getAllArticles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var articles;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _article["default"].find();

              case 2:
                articles = _context2.sent;
                return _context2.abrupt("return", articles);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllArticles() {
        return _getAllArticles.apply(this, arguments);
      }

      return getAllArticles;
    }()
  }, {
    key: "getArticle",
    value: function () {
      var _getArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var article;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _article["default"].findOne({
                  _id: id
                });

              case 2:
                article = _context3.sent;
                return _context3.abrupt("return", article);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getArticle(_x2) {
        return _getArticle.apply(this, arguments);
      }

      return getArticle;
    }()
  }, {
    key: "updateArticle",
    value: function () {
      var _updateArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, data) {
        var article;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _article["default"].findOne({
                  _id: id
                });

              case 2:
                article = _context4.sent;

                if (data.title) {
                  article.title = data.title;
                }

                if (data.content) {
                  article.content = data.content;
                }

                if (data.image) {
                  article.image = data.image;
                }

                _context4.next = 8;
                return article.save();

              case 8:
                return _context4.abrupt("return", article);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateArticle(_x3, _x4) {
        return _updateArticle.apply(this, arguments);
      }

      return updateArticle;
    }()
  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _article["default"].deleteOne({
                  _id: id
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteArticle(_x5) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);
  return ArticleServices;
}();

exports.ArticleServices = ArticleServices;