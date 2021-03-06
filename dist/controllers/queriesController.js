"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuerryController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _query = _interopRequireDefault(require("../models/query"));

var _querryServices = require("../services/querryServices");

var QuerryController = /*#__PURE__*/function () {
  function QuerryController() {
    (0, _classCallCheck2["default"])(this, QuerryController);
  }

  (0, _createClass2["default"])(QuerryController, [{
    key: "createQuerry",
    value: function () {
      var _createQuerry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var data, Querr;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                data = new _query["default"]({
                  email: req.body.email,
                  message: req.body.message
                });
                _context.next = 4;
                return _querryServices.QuerryServices.createQuerry(data);

              case 4:
                Querr = _context.sent;
                res.status(201).send(Querr);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                res.status(204).send({
                  error: 'no Querry created yet'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function createQuerry(_x, _x2) {
        return _createQuerry.apply(this, arguments);
      }

      return createQuerry;
    }()
  }, {
    key: "getAllQuerry",
    value: function () {
      var _getAllQuerry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var querry;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _querryServices.QuerryServices.getAllQuerry();

              case 3:
                querry = _context2.sent;
                res.send(querry);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.status(204).send({
                  error: 'no querries here'
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getAllQuerry(_x3, _x4) {
        return _getAllQuerry.apply(this, arguments);
      }

      return getAllQuerry;
    }()
  }]);
  return QuerryController;
}();

exports.QuerryController = QuerryController;