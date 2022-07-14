import { User } from "../models/index.js";

export class UserController {
  static create = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "No content in body" });
    }

    const newUser = {
      login: req.body.login,
      password: req.body.password,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      profil: req.body.profil,
      active: req.body.active,
    };
    User.create(newUser, (err, data) => {
      if (err) {
        res
          .status(500)
          .send({ message: err.message || "Unable to create user" });
      } else {
        res.send(data);
      }
    });
  };

  static findAll = (req, res) => {
    User.findAll((err, data) => {
      if (err) {
        res
          .status(500)
          .send({ message: err.message || "Unable to fetch user data" });
      } else {
        res.send(data);
      }
    });
  };

  static findByQuery = (req, res) => {
    User.findById(req.params.id, (err, data) => {
      console.log(req.params.id);
      if (err) {
        res.status(500).send({
          message: err.message || `Unable to find user with id ${data}`,
        });
      } else {
        console.log(`dataUser ${data}`);
        res.send(data);
      }
    });
  };

  static deleteById = (req, res) => {
    User.deleteById(req.params.id, (err, data) => {
      console.log(req.params.id);
      if (err) {
        res.status(500).send({
          message:
            err.message || `Unable to delete user with id ${req.params.id}`,
        });
      } else {
        res.send(`User deleted`);
      }
    });
  };

  static update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "No content in body" });
    }

    const userUpdated = {
      login: req.body.login,
      password: req.body.password,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      profil: req.body.profil,
      active: req.body.active,
    };

    User.updateById(req.params.id, userUpdated, (err, data) => {
      console.log(req.params.id);
      if (err) {
        res.status(500).send(`Unable to update user ${req.params.id}`);
      } else {
        res.send(`User ${req.params.id} updated`);
      }
    });
  };
}
