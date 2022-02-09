"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentControll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _comment = _interopRequireDefault(require("../models/comment"));

var _commentServices = require("../services/commentServices");

var commentControll = /*#__PURE__*/function () {
  function commentControll() {
    (0, _classCallCheck2["default"])(this, commentControll);
  }

  (0, _createClass2["default"])(commentControll, [{
    key: "createComment",
    value: function () {
      var _createComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var data, comm;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                data = new _comment["default"]({
                  articleId: req.params.articleid,
                  name: req.body.name,
                  comment: req.body.comment
                });
                _context.next = 4;
                return _commentServices.commentService.createComment(data);

              case 4:
                comm = _context.sent;
                res.send(comm);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                res.status(204).send({
                  error: 'failed to create'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function createComment(_x, _x2) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
    }()
  }, {
    key: "getComment",
    value: function () {
      var _getComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var comm;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _commentServices.commentService.getComment(req.params.articleid);

              case 3:
                comm = _context2.sent;
                res.send(comm);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.status(401).send({
                  error: 'no comments sent yet'
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getComment(_x3, _x4) {
        return _getComment.apply(this, arguments);
      }

      return getComment;
    }()
  }]);
  return commentControll;
}();

exports.commentControll = commentControll;