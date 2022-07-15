"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersData = exports.database = exports.connection = void 0;

var _mongodb = require("mongodb");

var _dbConfig = require("../config/db.config.js");

var connection = new _mongodb.MongoClient(_dbConfig.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: _mongodb.ServerApiVersion.v1
});
exports.connection = connection;
var database = connection.db("projet_team_db");
exports.database = database;
var usersData = database.collection("user");
exports.usersData = usersData;