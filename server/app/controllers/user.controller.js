import {User} from "../models/index.js";
import {extractBearerToken} from "../utils/jwt.js"
import jwt from "jsonwebtoken";
import {SECRET_KEY_JWT} from "../config/config.js";


export class UserController {

    static login = (req, res) => {
        let login = req.body.login;
        let password = req.body.password;
        User.findByLogin(req.body.login, (err, data) => {
            if (err) {
                return res.status(200).send({
                    // error: err.message || `Unable to find user with id ${data.id}`,
                    error: "Impossible de trouver l’utilisateur"
                });
            } else {
                if (data != null) {
                    if (data.password == password) {
                        //identifié
                        if (data.active) {
                            //compte activé
                            const token = jwt.sign({id: data.id}, SECRET_KEY_JWT, {expiresIn: '3 hours'});
                            return res.json(
                                {
                                    access_token: 'bearer ' + token,
                                    lastName: data.lastName,
                                    firstName: data.firstName,
                                    profil: data.profil
                                });
                        } else {
                            //compte non actif
                            return res.status(200).send({
                                error: "Votre compte n'est pas activé",
                            });
                        }
                    } else {
                        return res.status(200).send({
                            error: "Login et/ou mot de passe invalide",
                        });
                    }
                } else {
                    return res.status(200).send({
                        error: "Login et/ou mot de passe invalide",
                    });
                }
            }
        });
    }

    static create = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(403).send({error: "Accès refusé"});
        }
        if(this.isManagerUser) {
            User.findByLogin(req.body.login, (err, data) => {
                if (err) {
                    return res.status(200).send({
                        // error: err.message || `Unable to find user with id ${data.id}`,
                        error: "Impossible de trouver l’utilisateur"
                    });
                } else {
                    if (data == null) {
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
                                return res.status(200).send({
                                    //error: err.message || "Unable to create user"
                                    error: "Impossible de créer un utilisateur"
                                });
                            } else {
                                return res.status(200).send({
                                    message: "Utilisateur ajouté avec succés",
                                });
                            }
                        });
                    } else {
                        return res.status(200).send({
                            error: "Utilisateur déjà inscrit",
                        });
                    }
                }
            });
        }
        else{
            return res.status(403).send({
                error: "Accès refusé pour ce profil utilisateur",
            });
        }
    }

    static update = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(403).send({error: "Accès refusé"});
        }
        if(this.isManagerUser) {
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
                    //res.status(500).send(`Unable to update user ${req.params.id}`);
                    return res.status(403).send({
                        error: "Impossible de mettre à jour les données de l’utilisateur",
                    });
                } else {
                    return res.status(403).send({
                        error: "Les données de l'utilisateur ont été mis à jour avec succès",
                    });

                }
            });
        }
    };


    static findAll = (req, res) => {
        User.findAll((err, data) => {
            if (err) {
                res
                    .status(500)
                    .send({message: err.message || "Unable to fetch user data"});
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



    static isManagerUser() {
        const token = req.headers.authorization && extractBearerToken(req.headers.authorization);
        const decoded = jwt.decode(token, {complete: false})
        User.findById(decoded.id, (err, data) => {
            if (err) {
                return false;
            } else {
                if (data.profil == "admin" || data.profil == "patron") {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }




}
