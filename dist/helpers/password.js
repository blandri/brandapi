"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.comparePassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../models/user"));

var salt = _bcrypt["default"].genSaltSync(10, 'b');

var hashPassword = function hashPassword(plainPassword) {
  var hash = _bcrypt["default"].hashSync(plainPassword, salt);

  return hash;
};

exports.hashPassword = hashPassword;

var comparePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(plainPassword, hash) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = _bcrypt["default"].compareSync(plainPassword, hash);
            return _context.abrupt("return", result);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function comparePassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.comparePassword = comparePassword;