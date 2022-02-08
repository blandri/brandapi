"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _articleController = require("../../controllers/articleController");

var _multer = _interopRequireDefault(require("multer"));

var _articleValidation = require("../../validations/articleValidation");

var _fileUpload = require("../../helpers/fileUpload");

var _authenticate = require("../../middleware/authenticate");

var articleController = new _articleController.ArticleController();

var route = _express["default"].Router();

var storage = _multer["default"].diskStorage({});

var uploads = (0, _multer["default"])({
  storage: storage,
  fileFilter: _fileUpload.fileFilter
});
route.get('/', articleController.getAllArticles);
route.post('/', _authenticate.authenticate, uploads.single('image'), _articleValidation.articleValidation, articleController.createArticle);
route.get('/:id', articleController.getArticle);
route.patch('/:id', _authenticate.authenticate, uploads.single('image'), articleController.updateArticle);
route["delete"]('/:id', articleController.deleteArticle);
var _default = route;
exports["default"] = _default;