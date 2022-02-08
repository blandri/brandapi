"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _article = _interopRequireDefault(require("../models/article"));

var _articleServices = require("../services/articleServices");

var _fileUpload = require("../helpers/fileUpload");

var ArticleController = /*#__PURE__*/function () {
  function ArticleController() {
    (0, _classCallCheck2["default"])(this, ArticleController);
  }

  (0, _createClass2["default"])(ArticleController, [{
    key: "createArticle",
    value: // TODO Don't access database from this file you only needs
    function () {
      var _createArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var data, article;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _fileUpload.uploadFile)(req);

              case 3:
                req.body.image = _context.sent;
                data = new _article["default"]({
                  title: req.body.title,
                  content: req.body.content,
                  image: req.body.image
                });
                _context.next = 7;
                return _articleServices.ArticleServices.createArticle(data);

              case 7:
                article = _context.sent;
                res.status(201).send(article);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                res.status(204);
                res.send({
                  error: 'No article created'
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function createArticle(_x, _x2, _x3) {
        return _createArticle.apply(this, arguments);
      }

      return createArticle;
    }()
  }, {
    key: "getAllArticles",
    value: function () {
      var _getAllArticles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var articles;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _articleServices.ArticleServices.getAllArticles();

              case 3:
                articles = _context2.sent;
                res.send(articles);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.status(204).send({
                  error: 'no articles here'
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getAllArticles(_x4, _x5, _x6) {
        return _getAllArticles.apply(this, arguments);
      }

      return getAllArticles;
    }()
  }, {
    key: "getArticle",
    value: function () {
      var _getArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var article;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _articleServices.ArticleServices.getArticle(req.params.id);

              case 3:
                article = _context3.sent;
                res.send(article);
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                res.status(404).send({
                  error: 'Error! try again'
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function getArticle(_x7, _x8, _x9) {
        return _getArticle.apply(this, arguments);
      }

      return getArticle;
    }()
  }, {
    key: "updateArticle",
    value: function () {
      var _updateArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
        var data, article;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _fileUpload.uploadFile)(req);

              case 3:
                req.body.image = _context4.sent;
                data = {};

                if (req.body.title) {
                  data['title'] = req.body.title;
                }

                if (req.body.content) {
                  data['content'] = req.body.content;
                }

                if (req.body.image) {
                  data['image'] = req.file.image;
                }

                _context4.next = 10;
                return _articleServices.ArticleServices.updateArticle(req.params.id, data);

              case 10:
                article = _context4.sent;
                res.status(201).send(article);
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);
                res.status(204).send({
                  error: "Article doesn't exist!"
                });

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 14]]);
      }));

      function updateArticle(_x10, _x11, _x12) {
        return _updateArticle.apply(this, arguments);
      }

      return updateArticle;
    }()
  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _articleServices.ArticleServices.deleteArticle(req.params.id);

              case 3:
                res.status(202).send({
                  message: "deleted successfully"
                });
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                res.status(204, 'no article').send({
                  error: "Article doesn't exist!"
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function deleteArticle(_x13, _x14, _x15) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);
  return ArticleController;
}();

exports.ArticleController = ArticleController;