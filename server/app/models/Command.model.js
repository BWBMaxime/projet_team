import { ObjectId } from "mongodb";
import { CommandsData, CustomersData, UsersData, VehiclesData } from "./db.js";

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
    CommandsData.insertOne(newCommand, (err, res) => {
      if (err) throw result(err, null);
      console.log(newCommand.customer);
      CustomersData.updateOne(
        { email: newCommand.customer },
        { $push: { commands: newCommand._id.toString() } },
        (err, res) => {
          if (err) result(err, null);
          newCommand.customer = newCommand.customer._id;
          console.log("Commande ajoutée customer");
          UsersData.updateOne(
            { login: newCommand.user },
            { $push: { commands: newCommand._id.toString() } },
            (err, res) => {
              if (err) result(err, null);
              newCommand.user = newCommand.user._id;
              console.log("Commande ajoutée user");
              VehiclesData.updateOne(
                { _id: ObjectId(newCommand.vehicle) },
                { $set: { command: newCommand._id.toString() } },
                (err, res) => {
                  if (err) result(err, null);
                  console.log("Commande ajoutée au véhicule");
                }
              );
            }
          );
        }
      );

      result(null, res);
    });
    /*} finally {
      connection.close();
    }*/
  };

  static findById = (commandId, result) => {
    try {
      CommandsData.aggregate([
        { $match: { _id: ObjectId(commandId) } },
        { $limit: 1 },
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
        { $addFields: { command_id: { $toString: "$_id" } } },
        {
          $lookup: {
            from: "vehicle",
            localField: "command_id",
            foreignField: "command",
            as: "vehicle",
          },
        },
        { $unwind: "$vehicle" },
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
      /*CommandsData.findOne({
        _id: ObjectId(commandId),
      }).then((command) => result(null, command));*/
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
      { $addFields: { command_id: { $toString: "$_id" } } },
      {
        $lookup: {
          from: "vehicle",
          localField: "command_id",
          foreignField: "command",
          as: "vehicle",
        },
      },
      { $unwind: "$vehicle" },
      { $project: { command_id: 0 } },
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
      console.log(commandUpdated.vehicle._id);
      VehiclesData.updateOne(
        { _id: ObjectId(commandUpdated.vehicle._id) },
        {
          $set: {
            brand: commandUpdated.vehicle.brand,
            color: commandUpdated.vehicle.color,
            model: commandUpdated.vehicle.model,
            type: commandUpdated.vehicle.type,
            year: commandUpdated.vehicle.year,
            price: commandUpdated.vehicle.price,
            statut: commandUpdated.vehicle.statut,
            images: commandUpdated.vehicle.images,
          },
        },
        (err, res) => {
          if (err) result(err, null);
          console.log(res);
          console.log("Commande ajoutée au véhicule");
          commandUpdated.vehicle = commandUpdated.vehicle._id;
          CommandsData.updateOne(
            myquery,
            { $set: commandUpdated },
            function (err, res) {
              if (err) result(err, null);
              console.log("Commands updated");
              result(null, res);
            }
          );
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
