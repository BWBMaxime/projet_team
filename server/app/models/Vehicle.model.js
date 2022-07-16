import { ObjectId } from "mongodb";
import { VehiclesData } from "./db.js";

export class Vehicle {
  constructor(vehicle) {
    this.brand = vehicle.brand;
    this.color = vehicle.color;
    this.model = vehicle.model;
    this.type = vehicle.type;
    this.year = vehicle.year;
    this.price = vehicle.price;
  }

  static create = (newVehicle, result) => {
    VehiclesData.insertOne(newVehicle, (err, res) => {
      if (err) throw result(err, null);
      result(null, res);
    });
  };

  static findById = (vehicleId, result) => {
    VehiclesData.findOne({ _id: ObjectId(vehicleId) })
      .then((VehiclesData) => result(null, VehiclesData))
      .catch((err) => result(err, null));
  };

  static findByQuery = (vehicleQuery, result) => {
    const vehiclesList = VehiclesData.find(vehicleQuery);
    vehiclesList.toArray((err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  };

  static findAll = (result) => {
    const vehiculesList = VehiclesData.find({});
    vehiculesList.toArray((err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  };

  static updateById = (vehicleId, vehicleUpdated, result) => {
    const myQuery = { _id: ObjectId(vehicleId) };
    VehiclesData.updateOne(myQuery, { $set: vehicleUpdated }, (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  };

  static deleteById = (vehicleId, result) => {
    VehiclesData.deleteOne({ _id: ObjectId(vehicleId) }, (err, res) => {
      if (err) result(err, null);
      result(null, err);
    });
  };
}
