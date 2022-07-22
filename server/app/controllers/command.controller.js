import { Command, Vehicle } from "../models/index.js";

export class CommandController {
  static findById = (req, res) => {
    Command.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de trouver le client demandé.",
          code: "CF2",
        });
      } else {
        res.send(data);
      }
    });
  };

  static findAll = (req, res) => {
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: "CF1",
      });
    }
    Command.findAll((err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de récupérer les données des commandes",
          code: "CF2",
        });
      } else {
        console.log(data);
        res.send(data);
      }
    });
  };

  static create = (req, res) => {
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: "CF1",
      });
    }
    const newCommand = {
      user: req.body.user.login,
      customer: req.body.customer.email,
      date: `${new Date()}`,
      status: req.body.status,
      vehicle: req.body.vehicle,
    };
    console.log(newCommand);

    if (!("_id" in newCommand.vehicle)) {
      Vehicle.create(newCommand.vehicle, (err, data) => {
        if (err) {
          res.status(500).send({
            message: "Impossible de créer le véhicule associé",
            code: "CV1",
          });
        }
        newCommand.vehicle = data.insertedId.toString();

        Command.create(newCommand, (err, data) => {
          if (err) {
            res.status(500).send({
              message: "Impossible de créer la commande",
              code: "CC2",
            });
          } else {
            res.status(200).send({
              message: "Commande ajouté avec succès",
              code: "CC4",
            });
          }
        });
      });
    }
  };

  static update = (req, res) => {
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: "CF1",
      });
    }
    const newValuesCommand = {
      user: req.body.user.login,
      customer: req.body.customer.email,
      date: req.body.date,
      status: req.body.status,
      vehicle: req.body.vehicle,
    };

    Command.updateById(req.params.id, newValuesCommand, (err, data) => {
      if (err) {
        res.status(404).send({
          message: "Impossible de mettre à jour les données de la commande.",
          code: "CU2",
        });
      } else {
        res.status(200).send({
          message: "Les données de la commande ont été mis à jour avec succès.",
          code: "CU3",
        });
      }
    });
  };

  static deleteById = (req, res) => {
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: "CF1",
      });
    }
    Command.deleteById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
          message: "Impossible de supprimer la commande.",
          code: "CD2",
        });
      } else {
        res.status(200).send({
          message: "La commande à été supprimé avec succès",
          code: "CD3",
        });
      }
    });
  };
}
