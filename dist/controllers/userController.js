"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _userServices = require("../services/userServices");

var _user = _interopRequireDefault(require("../models/user"));

var _password = require("../helpers/password");

var _jwtFunctions = require("../helpers/jwtFunctions");

var userController = /*#__PURE__*/function () {
  function userController() {
    (0, _classCallCheck2["default"])(this, userController);
  }

  (0, _createClass2["default"])(userController, [{
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var exist, data, usr;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _userServices.userExist)(req.body.email);

              case 3:
                exist = _context.sent;

                if (!exist) {
                  _context.next = 8;
                  break;
                }

                res.status(208).send({
                  error: 'the user already exists'
                });
                _context.next = 19;
                break;

              case 8:
                _context.t0 = _user["default"];
                _context.t1 = req.body.email;
                _context.next = 12;
                return (0, _password.hashPassword)(req.body.password);

              case 12:
                _context.t2 = _context.sent;
                _context.t3 = {
                  email: _context.t1,
                  password: _context.t2
                };
                data = new _context.t0(_context.t3);
                _context.next = 17;
                return _userServices.userServices.createUser(data);

              case 17:
                usr = _context.sent;
                res.status(201).send(usr);

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t4 = _context["catch"](0);
                res.status(406);
                res.send({
                  error: 'failed to sign you up'
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 21]]);
      }));

      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "Login",
    value: function () {
      var _Login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var exist, valid, token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _userServices.userExist)(req.body.email);

              case 3:
                exist = _context2.sent;
                _context2.next = 6;
                return (0, _password.comparePassword)(req.body.password, exist.password);

              case 6:
                valid = _context2.sent;

                if (!(exist && valid)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 10;
                return (0, _jwtFunctions.generateToken)({
                  _id: exist.id
                });

              case 10:
                token = _context2.sent;
                res.send({
                  status: 200,
                  message: 'Logged in successfully',
                  accessToken: token
                });
                _context2.next = 15;
                break;

              case 14:
                res.status(401).send({
                  error: 'invalid credentials'
                });

              case 15:
                _context2.next = 20;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                res.status(401).send({
                  error: 'invalid credentials'
                });

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }));

      function Login(_x3, _x4) {
        return _Login.apply(this, arguments);
      }

      return Login;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var usr;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _userServices.userServices.getUsers();

              case 3:
                usr = _context3.sent;
                res.send(usr);
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                res.status(204).send({
                  error: 'no users'
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function getUser(_x5, _x6) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }]);
  return userController;
}();

exports.userController = userController;