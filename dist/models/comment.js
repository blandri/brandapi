"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var commentSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  articleId: String,
  created_on: {
    type: Date,
    "default": Date.now
  }
});

var Comment = _mongoose["default"].model('Comment', commentSchema);

var _default = Comment;
exports["default"] = _default;