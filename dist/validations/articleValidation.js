"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userValideation = exports.commentValidation = exports.articleValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _response = _interopRequireDefault(require("express/lib/response"));

var _articleSchema = require("./articleSchema");

var articleValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var tit, cont;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _articleSchema.articleSchema.validate(req.body);

          case 2:
            tit = _context.sent;
            _context.next = 5;
            return _articleSchema.articleSchema.validate(req.body);

          case 5:
            cont = _context.sent;

            if (tit.error) {
              res.json({
                error: 1,
                message: tit.error.details[0].message
              });
            } else if (cont.error) {
              res.json({
                error: 1,
                message: cont.error.details[0].message
              });
            } else {
              next();
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function articleValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.articleValidation = articleValidation;

var userValideation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var emeli, pass;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _articleSchema.userSchema.validate(req.body);

          case 2:
            emeli = _context2.sent;
            _context2.next = 5;
            return _articleSchema.userSchema.validate(req.body);

          case 5:
            pass = _context2.sent;

            if (emeli.error) {
              res.json({
                error: 1,
                message: emeli.error.details[0].message
              });
            } else if (pass.error) {
              res.json({
                error: 1,
                message: pass.error.details[0].message
              });
            } else {
              next();
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userValideation(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.userValideation = userValideation;

var commentValidation = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var name, comment;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _articleSchema.commentSchema.validate(req.body);

          case 2:
            name = _context3.sent;
            _context3.next = 5;
            return _articleSchema.commentSchema.validate(req.body);

          case 5:
            comment = _context3.sent;

            if (name.error) {
              _response["default"].json({
                error: 1,
                message: name.error.details[0].message
              });
            } else if (comment.error) {
              _response["default"].json({
                error: 1,
                message: comment.error.details[0].message
              });
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function commentValidation() {
    return _ref3.apply(this, arguments);
  };
}();

exports.commentValidation = commentValidation;