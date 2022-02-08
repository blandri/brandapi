"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes"));

require("dotenv/config");

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
var mode = process.env.NODE_ENV || 'development';

var server = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(mode === 'development')) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return _mongoose["default"].connect('mongodb://127.0.0.1:27017/devdb', {
              useNewUrlParser: true
            });

          case 4:
            _context.next = 14;
            break;

          case 6:
            if (!(mode === 'test')) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return _mongoose["default"].connect('mongodb://127.0.0.1:27017/testdb', {
              useNewUrlParser: true
            });

          case 9:
            _context.next = 14;
            break;

          case 11:
            if (!(mode === 'production')) {
              _context.next = 14;
              break;
            }

            _context.next = 14;
            return _mongoose["default"].connect('mongodb+srv://landry:mongodb@cluster0.2qprh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/proddb', {
              useNewUrlParser: true
            });

          case 14:
            app.use(_express["default"].json());
            app.use('/api/v1/', _routes["default"]);
            app.listen(port, function () {
              console.log("The server is running on port ".concat(port));
            });
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function server() {
    return _ref.apply(this, arguments);
  };
}();

server();