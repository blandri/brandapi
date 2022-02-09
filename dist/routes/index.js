"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _welcomeRoutes = _interopRequireDefault(require("./api/welcomeRoutes"));

var _articleRoutes = _interopRequireDefault(require("./api/articleRoutes"));

var _queriesRoutes = _interopRequireDefault(require("./api/queriesRoutes"));

var _userRoutes = _interopRequireDefault(require("./api/userRoutes"));

var _commentRoutes = _interopRequireDefault(require("./api/commentRoutes"));

var routes = _express["default"].Router();

routes.use('/', _welcomeRoutes["default"]);
routes.use('/articles', _articleRoutes["default"]);
routes.use('/queries', _queriesRoutes["default"]);
routes.use('/user', _userRoutes["default"]);
routes.use('/comment', _commentRoutes["default"]);
var _default = routes;
exports["default"] = _default;