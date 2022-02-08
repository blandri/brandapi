"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = exports.commentSchema = exports.articleSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

var articleSchema = _joi["default"].object({
  title: _joi["default"].string().max(90).min(3).required(),
  content: _joi["default"].string().min(10).required().messages({
    'string.empty': 'content must not be empty',
    'string.max.base': 'content should be 10 characters long'
  })
});

exports.articleSchema = articleSchema;

var userSchema = _joi["default"].object({
  email: _joi["default"].string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'fr']
    }
  }).messages({
    'string.empty': 'content must not be empty',
    'string.tlds.base': 'emails allowed are .com and .fr',
    'string.minDomainSegments.base': 'email not valid'
  }),
  password: _joi["default"].string().min(3)
});

exports.userSchema = userSchema;

var commentSchema = _joi["default"].object({
  name: _joi["default"].string().min(3),
  comment: _joi["default"].string()
});

exports.commentSchema = commentSchema;