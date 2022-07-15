import { ObjectId } from "mongodb";
import { connection, usersData } from "./db.js";

export class User {
  constructor(user) {
    this.login = user.login;
    this.password = user.password;
    this.lastName = user.lastName;
    this.firstName = user.firstName;
    this.profil = user.profil;
    this.active = user.active;
  }

  static create = (newUser, result) => {
    //try {
    usersData.insertOne(newUser, function (err, res) {
      if (err) throw result(err, null);
      console.log("1 document inserted");
      result(null, res);
    });
    /*} finally {
      connection.close();
    }*/
  };

  static findByLogin = (login, result) => {
    try {
      const options = {
        projection: { login: 0, firstName: 1, lastName: 1 },
      };
      const user = usersData
          .findOne({
            login: login,
          })
          .then((user) => result(null, user));
    } catch (e) {
      console.log(`error ${e}`);
      result(e, null);
    } /* finally {
      connection.close();
    }*/
  };

  static findById = (userId, result) => {
    try {
      const options = {
        projection: { _id: 0, firstName: 1, lastName: 1 },
      };
      const user = usersData
        .findOne({
          _id: ObjectId(userId),
        })
        .then((user) => result(null, user));
    } catch (e) {
      console.log(`error ${e}`);
      result(e, null);
    } /* finally {
      connection.close();
    }*/
  };

  static findAll = (result) => {
    //try {
    let userCursor = usersData.find({});
    let users = userCursor.toArray((err, res) => {
      if (err) {
        console.log(`error: ${err}`);
        result(err, null);
        return;
      } else {
        console.log(`Users list ${res}`);
        result(null, res);
      }
    });
    /*} finally {
      connection.close();
    }*/
  };

  static updateById = (userId, userUpdated, result) => {
    var myquery = { _id: ObjectId(userId) };
    try {
      usersData.updateOne(myquery, { $set: userUpdated }, function (err, res) {
        if (err) result(err, null);
        console.log("Users updated");
        result(null, res);
      });
    } catch (e) {
      console.log(e.message || "Unable to update user");
    } /* finally {
      connection.close();
    }*/
  };

  static deleteById = (userId, result) => {
    var myquery = { _id: ObjectId(userId) };
    try {
      usersData.deleteOne(myquery, (err, res) => {
        if (err) result(err, null);
        console.log("User deleted");
        result(err, res);
      });
    } catch (e) {
      console.log(e.message || "Unable to delete user");
    } /* finally {
      connection.close();
    }*/
  };
}
