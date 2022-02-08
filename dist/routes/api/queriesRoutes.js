"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _queriesController = require("../../controllers/queriesController");

var route = _express["default"].Router();

route.post('/', new _queriesController.QuerryController().createQuerry);
route.get('/id:', new _queriesController.QuerryController().getQuerry);
var _default = route;
exports["default"] = _default;