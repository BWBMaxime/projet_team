import { Customer } from "../models/index.js";

export class CustomerController {
  static findById = (req, res) => {
    Customer.findById(req.params.id, (err, data) => {
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
    Customer.findAll((err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de récupérer les données des clients",
          code: "CF2",
        });
      } else {
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
    const newCustomer = {
      lastName: customer.lastName,
      firstName: customer.firstName,
      address: customer.address,
      mobile: customer.mobile,
    };
    Customer.create(newCustomer, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Impossible de créer le client",
          code: "CC2",
        });
      } else {
        res.status(200).send({
          message: "Véhitule ajouté avec succès",
          code: "CC4",
        });
      }
    });
  };

  static update = (req, res) => {
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: "CF1",
      });
    }
    const newCustomer = {
      lastName: customer.lastName,
      firstName: customer.firstName,
      address: customer.address,
      mobile: customer.mobile,
    };
    Customer.updateById(req.params.id, newCustomerValues, (err, data) => {
      if (err) {
        res.status(404).send({
          message: "Impossible de mettre à jour les données du client.",
          code: "CU2",
        });
      } else {
        res.status(200).send({
          message: "Les données du client ont été mis à jour avec succès.",
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
    Customer.deleteById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
          message: "Impossible de supprimer le client.",
          code: "CD2",
        });
      } else {
        res.status(200).send({
          message: "Le client à été supprimé avec succès",
          code: "CD3",
        });
      }
    });
  };
}
