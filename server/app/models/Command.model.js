import { ObjectId } from "mongodb";
import { CommandsData } from "./db.js";

export class Command {
  constructor(command) {
    this.user = command.user;
    this.client = command.client;
    this.date = command.date;
    this.status = command.status;
    this.vehicle = command.vehicle;
  }

  static create = (newCommand, result) => {
    //try {
    CommandsData.insertOne(newCommand, function (err, res) {
      if (err) throw result(err, null);
      console.log("1 document inserted");
      result(null, res);
    });
    /*} finally {
      connection.close();
    }*/
  };

  static findById = (commandId, result) => {
    try {
      CommandsData.findOne({
        _id: ObjectId(commandId),
      }).then((command) => result(null, command));
    } catch (e) {
      console.log(`error ${e}`);
      result(e, null);
    } /* finally {
      connection.close();
    }*/
  };

  static findAll = (result) => {
    //try {
    //let commandCursor = CommandsData.find({});
    CommandsData.aggregate([
      {
        $lookup: {
          from: "user",
          localField: "user",
          foreignField: "login",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      { $project: { "user.password": 0 } },
      {
        $lookup: {
          from: "customer",
          localField: "customer",
          foreignField: "email",
          as: "customer",
        },
      },
      { $unwind: "$customer" },
      {
        $lookup: {
          from: "vehicle",
          localField: "vehicle",
          foreignField: "serialNumber",
          as: "vehicle",
        },
      },
      { $unwind: "$vehicle" },
      /*{
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{ $arrayElemAt: ["$fromUsers", 0] }, "$$ROOT"],
          },
        },
      },*/
      //      { $project: { fromUsers: 0 } },
    ]).toArray((err, res) => {
      if (err) {
        console.log(`error: ${err}`);
        result(err, null);
        return;
      } else {
        console.log(res);
        result(null, res);
      }
    });
    /*} finally {
      connection.close();
    }*/
  };

  static updateById = (commandId, commandUpdated, result) => {
    const myquery = { _id: ObjectId(commandId) };
    try {
      CommandsData.updateOne(
        myquery,
        { $set: commandUpdated },
        function (err, res) {
          if (err) result(err, null);
          console.log("Commands updated");
          result(null, res);
        }
      );
    } catch (e) {
      console.log(e.message || "Unable to update Command");
    } /* finally {
      connection.close();
    }*/
  };

  static deleteById = (commandId, result) => {
    const myquery = { _id: ObjectId(commandId) };
    try {
      CommandsData.deleteOne(myquery, (err, res) => {
        if (err) result(err, null);
        console.log("Command deleted");
        result(err, res);
      });
    } catch (e) {
      console.log(e.message || "Unable to delete Command");
    } /* finally {
      connection.close();
    }*/
  };
}
