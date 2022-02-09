"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuerryServices = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _response = _interopRequireDefault(require("express/lib/response"));

var _query = _interopRequireDefault(require("../models/query"));

var QuerryServices = /*#__PURE__*/function () {
  function QuerryServices() {
    (0, _classCallCheck2["default"])(this, QuerryServices);
  }

  (0, _createClass2["default"])(QuerryServices, null, [{
    key: "createQuerry",
    value: function () {
      var _createQuerry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
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

      function createQuerry(_x) {
        return _createQuerry.apply(this, arguments);
      }

      return createQuerry;
    }()
  }, {
    key: "getAllQuerry",
    value: function () {
      var _getAllQuerry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var querries;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _query["default"].find();

              case 2:
                querries = _context2.sent;
                return _context2.abrupt("return", querries);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllQuerry() {
        return _getAllQuerry.apply(this, arguments);
      }

      return getAllQuerry;
    }()
  }, {
    key: "getQuerry",
    value: function () {
      var _getQuerry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var querry;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _query["default"].find({
                  _id: id
                });

              case 2:
                querry = _context3.sent;
                return _context3.abrupt("return", querry);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getQuerry() {
        return _getQuerry.apply(this, arguments);
      }

      return getQuerry;
    }()
  }]);
  return QuerryServices;
}();

exports.QuerryServices = QuerryServices;