import { Vehicle } from "../models/index.js";

export class VehicleController {
  static findById = (req, res) => {
    Vehicle.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de trouver le véhicule demandé.",
          code: "VF2",
        });
      } else {
        res.send(data);
      }
    });
  };

  static findAll = (req, res) => {
    Vehicle.findAll((err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de récupérer les données du stock",
          code: "VF2",
        });
      } else {
        res.send(data);
      }
    });
  };

  static create = (req, res) => {
    const newVehicle = {
      brand: req.body.brand,
      color: req.body.color,
      model: req.body.model,
      type: req.body.type,
      year: req.body.year,
      price: req.body.price,
    };
    Vehicle.create(newVehicle, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Impossible de créer le véhicule",
          code: "VC2",
        });
      } else {
        res.status(200).send({
          message: "Véhitule ajouté avec succès",
          code: "VC4",
        });
      }
    });
  };

  static update = (req, res) => {
    const newVehicleValues = {
      brand: req.body.brand,
      color: req.body.color,
      model: req.body.model,
      type: req.body.type,
      year: req.body.year,
      price: req.body.price,
    };
    Vehicle.updateById(req.params.id, newVehicleValues, (err, data) => {
      if (err) {
        res.status(404).send({
          message: "Impossible de mettre à jour les données du véhicule.",
          code: "VU2",
        });
      } else {
        res.status(200).send({
          message: "Les données du véhicule ont été mis à jour avec succès.",
          code: "VU3",
        });
      }
    });
  };

  static deleteById = (req, res) => {
    Vehicle.deleteById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
          message: "Impossible de supprimer le véhicule.",
          code: "VD2",
        });
      } else {
        res.status(200).send({
          message: "Le véhicule à été supprimé avec succès",
          code: "VD3",
        });
      }
    });
  };
}
