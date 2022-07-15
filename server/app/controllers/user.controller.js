import { User } from "../models/index.js";
import {extractBearerToken} from "../utils/jwt.js"
import jwt from "jsonwebtoken";
import { SECRET_KEY_JWT } from "../config/config.js";


export class UserController {
  static login = (req, res) => {
    let login = req.body.login;
    let password = req.body.password;


    const token = jwt.sign({
      id: '62d11fa14bffa6eec663d186'
    }, SECRET_KEY_JWT, { expiresIn: '3 hours' })

    console.log({ access_token: token })
    return res.json({ access_token: 'bearer '+token })
  }



  static register = (req, res) => {
    console.log('register')
    //console.log(req.body);

    if (!req.body) {
      res.status(400).send({ message: "No content in body" });
      return;
    }
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization);
    const decoded = jwt.decode(token, { complete: false })
    console.log('decoded token',decoded.id);
    User.findById(decoded.id, (err, data) => {
      console.log(decoded.id);
      if (err) {
        res.status(403).send({
          error: "Acces denied user not found",
        });
      } else {
        console.log(`dataUser ${data}`);
        if(data.profil == "admin" || data.profil == "patron"){
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
              res.status(500).send({ message: err.message || "Unable to create user" });
            } else {
              res.status(200).send(data);
            }
          });
        }
        else{
          res.status(403).send({
            error: "Acces denied for the profil user",
          });
        }
        console.log(data.profil);
       // res.send(data);
      }
    });
  }





    static create = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "No content in body" });
    }
    let uuid = crypto.randomUUID();
    const newUser = {
      login: req.body.login,
      uuid: uuid,
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
