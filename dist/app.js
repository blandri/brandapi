"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

require("dotenv/config");

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
var mode = process.env.NODE_ENV || "development";

try {
  if (mode === "development") {
    _mongoose["default"].connect(process.env.DEVELOPMENT_DB, {
      useNewUrlParser: true
    }).then(function (res) {
      console.log("DEV DB CONNECTED");
    });
  } else if (mode === "test") {
    _mongoose["default"].connect(process.env.TEST_DB, {
      useNewUrlParser: true
    }).then(function (res) {
      console.log("TEST DB CONNECTED");
    });
  } else if (mode === "production") {
    _mongoose["default"].connect(process.env.PRODUCTION_DB, {
      useNewUrlParser: true
    }).then(function (res) {
      console.log("PROD DB CONNECTED");
    });
  }

  app.use(_express["default"].json());
  app.use((0, _cors["default"])());
  app.use((0, _morgan["default"])("dev"));
  app.get("/", function (req, res) {
    res.json({
      message: "Welcome to the API"
    });
  });
  app.use("/api/v1/", _index["default"]);
  app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
  app.use("*", function (req, res, next) {
    res.status(404).json({
      error: "NOT FOUND"
    });
  });
  app.listen(port, function () {
    console.log("The server is running on port ".concat(port));
  });
} catch (error) {
  console.log(error);
}

var _default = app;
exports["default"] = _default;