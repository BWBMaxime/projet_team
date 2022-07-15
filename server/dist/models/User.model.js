"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongodb = require("mongodb");

var _db = require("./db.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = /*#__PURE__*/_createClass(function User(user) {
  _classCallCheck(this, User);

  this.login = user.login;
  this.password = user.password;
  this.lastName = user.lastName;
  this.firstName = user.firstName;
  this.profil = user.profil;
  this.active = user.active;
});

exports.User = User;

_defineProperty(User, "create", function (newUser, result) {
  //try {
  _db.usersData.insertOne(newUser, function (err, res) {
    if (err) throw result(err, null);
    console.log("1 document inserted");
    result(null, res);
  });
  /*} finally {
    connection.close();
  }*/

});

_defineProperty(User, "findById", function (userId, result) {
  try {
    var options = {
      projection: {
        _id: 0,
        firstName: 1,
        lastName: 1
      }
    };

    var user = _db.usersData.findOne({
      _id: (0, _mongodb.ObjectId)(userId)
    }).then(function (user) {
      return result(null, user);
    });
  } catch (e) {
    console.log("error ".concat(e));
    result(e, null);
  }
  /* finally {
  connection.close();
  }*/

});

_defineProperty(User, "findAll", function (result) {
  //try {
  var userCursor = _db.usersData.find({});

  var users = userCursor.toArray(function (err, res) {
    if (err) {
      console.log("error: ".concat(err));
      result(err, null);
      return;
    } else {
      console.log("Users list ".concat(res));
      result(null, res);
    }
  });
  /*} finally {
    connection.close();
  }*/
});

_defineProperty(User, "updateById", function (userId, userUpdated, result) {
  var myquery = {
    _id: (0, _mongodb.ObjectId)(userId)
  };

  try {
    _db.usersData.updateOne(myquery, {
      $set: userUpdated
    }, function (err, res) {
      if (err) result(err, null);
      console.log("Users updated");
      result(null, res);
    });
  } catch (e) {
    console.log(e.message || "Unable to update user");
  }
  /* finally {
  connection.close();
  }*/

});

_defineProperty(User, "deleteById", function (userId, result) {
  var myquery = {
    _id: (0, _mongodb.ObjectId)(userId)
  };

  try {
    _db.usersData.deleteOne(myquery, function (err, res) {
      if (err) result(err, null);
      console.log("User deleted");
      result(err, res);
    });
  } catch (e) {
    console.log(e.message || "Unable to delete user");
  }
  /* finally {
  connection.close();
  }*/

});