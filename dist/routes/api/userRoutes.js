"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../../models/user"));

var _userController = require("../../controllers/userController");

var _articleValidation = require("../../validations/articleValidation");

var route = _express["default"].Router();

route.get('/all', function (req, res, next) {
  new _userController.userController().getUser(req, res);
});
route.post('/register', _articleValidation.userValideation, function (req, res, next) {
  new _userController.userController().createUser(req, res);
});
route.post('/login', _articleValidation.userValideation, function (req, res, next) {
  new _userController.userController().Login(req, res);
});
var _default = route;
exports["default"] = _default;