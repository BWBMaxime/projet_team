"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _index = require("../controllers/index.js");

var _jwt = require("../utils/jwt.js");

var router = function router(app) {
  app.get("/users", _jwt.checkTokenMiddleware, _index.UserController.findAll);
  app.get("/users/:id", _jwt.checkTokenMiddleware, _index.UserController.findByQuery);
  app.post("/users", _jwt.checkTokenMiddleware, _index.UserController.create);
  app.put("/users/:id", _jwt.checkTokenMiddleware, _index.UserController.update);
  app["delete"]("/users/:id", _jwt.checkTokenMiddleware, _index.UserController.deleteById);
};

exports.router = router;