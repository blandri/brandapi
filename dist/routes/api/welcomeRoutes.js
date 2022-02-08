"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _welcome = require("../../controllers/welcome.controller");

var route = _express["default"].Router();

route.get('/', _welcome.welcome);
var _default = route;
exports["default"] = _default;