"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var articleSchema = _mongoose["default"].Schema({
  author: {
    type: String,
    "default": 'Landry'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: String,
  likes: {
    type: Number,
    "default": 0
  },
  created_on: {
    type: Date,
    "default": Date.now
  }
});

var Article = _mongoose["default"].model('Article', articleSchema);

var _default = Article;
exports["default"] = _default;