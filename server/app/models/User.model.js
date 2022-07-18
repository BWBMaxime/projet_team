import { ObjectId } from "mongodb";
import { connection, UsersData } from "./db.js";

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
    UsersData.insertOne(newUser, function (err, res) {
      console.log(`create ${err}`);
      if (err) {
        if (err.code == 11000 && err.message.indexOf("login_1 dup") > -1) {
          result({ kind: "duplicate_login" }, null);
          return;
        } else {
          result(err, null);
          return;
        }
      } else {
        console.log("1 document inserted");
        result(null, res);
        return;
      }
    });
    /*} finally {
      connection.close();
    }*/
  };

  static findByLogin = (login, result) => {
    try {
      const user = UsersData.findOne({
        login: login,
      }).then((user) => result(null, user));
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
        projection: { password: 0 },
      };
      const user = UsersData.findOne({
        _id: ObjectId(userId),
      }).then((user) => result(null, user));
    } catch (e) {
      console.log(`error ${e}`);
      result(e, null);
    } /* finally {
      connection.close();
    }*/
  };

  static findAll = (result) => {
    //try {
    const options = {
      projection: { password: 0 },
    };
    let userCursor = UsersData.find({}, options);
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
    const myquery = { _id: ObjectId(userId) };
    try {
      UsersData.updateOne(myquery, { $set: userUpdated }, function (err, res) {
        if (err) {
          if (err.code == 11000 && err.message.indexOf("login_1 dup") > -1) {
            console.log("ici");
            result({ kind: "duplicate_login" }, null);
            return;
          }
          result(err, null);
          return;
        } else {
          console.log("Users updated");
          result(null, res);
          return;
        }
      });
    } catch (e) {
      console.log(e.message || "Unable to update user");
    } /* finally {
      connection.close();
    }*/
  };

  static deleteById = (userId, result) => {
    const myquery = { _id: ObjectId(userId) };
    try {
      UsersData.deleteOne(myquery, (err, res) => {
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
