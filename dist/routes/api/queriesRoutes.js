"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var route = _express["default"].Router();

route.get('/', function (req, res, next) {
  res.status(200).json({
    status: 200,
    message: "this will return all queries",
    data: ""
  });
});
var _default = route;
exports["default"] = _default;