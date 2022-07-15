"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _index = require("../models/index.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserController = /*#__PURE__*/_createClass(function UserController() {
  _classCallCheck(this, UserController);
});

exports.UserController = UserController;

_defineProperty(UserController, "create", function (req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "No content in body"
    });
  }

  var newUser = {
    login: req.body.login,
    password: req.body.password,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    profil: req.body.profil,
    active: req.body.active
  };

  _index.User.create(newUser, function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Unable to create user"
      });
    } else {
      res.send(data);
    }
  });
});

_defineProperty(UserController, "findAll", function (req, res) {
  _index.User.findAll(function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Unable to fetch user data"
      });
    } else {
      res.send(data);
    }
  });
});

_defineProperty(UserController, "findByQuery", function (req, res) {
  _index.User.findById(req.params.id, function (err, data) {
    console.log(req.params.id);

    if (err) {
      res.status(500).send({
        message: err.message || "Unable to find user with id ".concat(data)
      });
    } else {
      console.log("dataUser ".concat(data));
      res.send(data);
    }
  });
});

_defineProperty(UserController, "deleteById", function (req, res) {
  _index.User.deleteById(req.params.id, function (err, data) {
    console.log(req.params.id);

    if (err) {
      res.status(500).send({
        message: err.message || "Unable to delete user with id ".concat(req.params.id)
      });
    } else {
      res.send("User deleted");
    }
  });
});

_defineProperty(UserController, "update", function (req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "No content in body"
    });
  }

  var userUpdated = {
    login: req.body.login,
    password: req.body.password,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    profil: req.body.profil,
    active: req.body.active
  };

  _index.User.updateById(req.params.id, userUpdated, function (err, data) {
    console.log(req.params.id);

    if (err) {
      res.status(500).send("Unable to update user ".concat(req.params.id));
    } else {
      res.send("User ".concat(req.params.id, " updated"));
    }
  });
});