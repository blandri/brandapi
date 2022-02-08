"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var querrySchema = _mongoose["default"].Schema({
  email: String,
  message: String,
  location: {
    type: String,
    "default": 'Rwanda'
  }
});

var Querry = _mongoose["default"].model('Querry', querrySchema);

var _default = Querry;
exports["default"] = _default;