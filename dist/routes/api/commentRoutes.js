"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentController = require("../../controllers/commentController");

var _articleValidation = require("../../validations/articleValidation");

var route = _express["default"].Router();

var commentsController = new _commentController.commentControll();
route.post('/:articleid', _articleValidation.commentValidation, commentsController.createComment);
route.get('/:articleid', _articleValidation.commentValidation, commentsController.getComment);
var _default = route;
exports["default"] = _default;