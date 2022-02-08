"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var schema = _mongoose["default"].Schema({
  date: String,
  title: String,
  content: String,
  image: String
});

module.exports = _mongoose["default"].model('Post', schema);