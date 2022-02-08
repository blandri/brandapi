"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _comment = _interopRequireDefault(require("../models/comment"));

var commentService = /*#__PURE__*/function () {
  function commentService() {
    (0, _classCallCheck2["default"])(this, commentService);
  }

  (0, _createClass2["default"])(commentService, null, [{
    key: "createComment",
    value: function () {
      var _createComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var com;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _comment["default"])(data);

              case 2:
                com = _context.sent;
                return _context.abrupt("return", com.save());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createComment(_x) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
    }()
  }, {
    key: "getComment",
    value: function () {
      var _getComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(articleId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _comment["default"].find({
                  articleId: articleId
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getComment(_x2) {
        return _getComment.apply(this, arguments);
      }

      return getComment;
    }()
  }]);
  return commentService;
}();

exports.commentService = commentService;