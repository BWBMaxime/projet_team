import {User} from "../models/index.js";
import {extractBearerToken} from "../utils/jwt.js"
import jwt from "jsonwebtoken";
import {SECRET_KEY_JWT} from "../config/config.js";
import bcrypt from "bcrypt";


export class UserController {

    static login = (req, res) => {
        User.findByLogin(req.body.login, (err, data) => {
            if (err) {
                return res.status(404).send({
                    // error: err.message || `Unable to find user with id ${data.id}`,
                    error: "Impossible de trouver l’utilisateur",
                    code: 'UL1'
                });
            } else {
                if (data != null) {
                    if (bcrypt.compareSync(req.body.password, data.password)) {
                        //identifié
                        if (data.active) {
                            //compte activé
                            const token = jwt.sign({id: data.id}, SECRET_KEY_JWT, {expiresIn: '3 hours'});
                            return res.json(
                                {
                                    access_token: token,
                                    lastName: data.lastName,
                                    firstName: data.firstName,
                                    profil: data.profil
                                });
                        } else {
                            //compte non actif
                            return res.status(401).send({
                                error: "Votre compte n'est pas activé",
                                code: 'UL2'
                            });
                        }
                    } else {
                        return res.status(401).send({
                            error: "Login et/ou mot de passe invalide",
                            code: 'UL3'
                        });
                    }
                } else {
                    return res.status(401).send({
                        error: "Login et/ou mot de passe invalide",
                        code: 'UL4'
                    });
                }
            }
        });
    }

    static create = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(401).send({
                error: "Accès refusé",
                code: 'UC1'
            });
        }
        if (this.isManagerUser) {
            User.findByLogin(req.body.login, (err, data) => {
                if (err) {
                    return res.status(404).send({
                        // error: err.message || `Unable to find user with id ${data.id}`,
                        error: "Impossible de trouver l’utilisateur",
                        code: 'UC2'
                    });
                } else {
                    if (data == null) {
                        const newUser = {
                            login: req.body.login,
                            password: this.passwordCrypt(req.body.password),
                            lastName: req.body.lastName,
                            firstName: req.body.firstName,
                            profil: req.body.profil,
                            active: req.body.active,
                        };
                        User.create(newUser, (err, data) => {
                            if (err) {
                                return res.status(404).send({
                                    //error: err.message || "Unable to create user"
                                    error: "Impossible de créer un utilisateur",
                                    code: 'UC3'
                                });
                            } else {
                                return res.status(200).send({
                                    message: "Utilisateur ajouté avec succés",
                                    code: 'UC4'
                                });
                            }
                        });
                    } else {
                        return res.status(404).send({
                            error: "Utilisateur déjà inscrit",
                            code: 'UC5'
                        });
                    }
                }
            });
        } else {
            return res.status(403).send({
                error: "Accès refusé pour ce profil utilisateur",
                code: 'UC6'
            });
        }
    }

    static update = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(401).send({
                error: "Accès refusé",
                code: 'UU1'
            });
        }
        if (this.isManagerUser) {
            const userUpdated = {
                login: req.body.login,
                password: this.passwordCrypt(req.body.password),
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                profil: req.body.profil,
                active: req.body.active,
            };
            User.updateById(req.params.id, userUpdated, (err, data) => {
                if (err) {
                    //res.status(500).send(`Unable to update user ${req.params.id}`);
                    return res.status(404).send({
                        error: "Impossible de mettre à jour les données de l’utilisateur",
                        code: 'UU2'
                    });
                } else {
                    return res.status(200).send({
                        error: "Les données de l'utilisateur ont été mis à jour avec succès",
                        code: 'UU3'
                    });
                }
            });
        } else {
            return res.status(401).send({
                error: "Accès refusé pour ce profil utilisateur",
                code: 'UU4'
            });
        }
    };

    static findAll = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(401).send({
                error: "Accès refusé",
                code: 'UF1'
            });
        }
        if (this.isManagerUser) {
            User.findAll((err, data) => {
                if (err) {
                    /*res.status(500).send({message: err.message || "Unable to fetch user data"});*/
                    return res.status(404).send({
                        error: "Impossible de récupérer les données utilisateur",
                        code: 'UF2'
                    });
                } else {
                    let dataSecure = data.map((datamap, index) => {
                        delete datamap.password
                        return datamap;
                    });
                    res.send(dataSecure);
                }
            });
        } else {
            return res.status(401).send({
                error: "Accès refusé pour ce profil utilisateur",
                code: 'UF3'
            });
        }
    };

    static deleteById = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(403).send({
                error: "Accès refusé",
                code: 'UD1'
            });
        }
        if (this.isManagerUser) {
            User.deleteById(req.params.id, (err, data) => {
                console.log('delete', req.params.id);
                if (err) {
                    /*res.status(500).send({message:err.message || `Unable to delete user with id ${req.params.id}`,});*/
                    return res.status(404).send({
                        error: 'Impossible de supprimer l’utilisateur',
                        code: 'UD2'
                    });
                } else {
                    return res.status(200).send({
                        message: 'l’utilisateur à été supprimer',
                        code: 'UD3'
                    });
                }
            });
        } else {
            return res.status(401).send({
                error: "Accès refusé",
                code: 'UF3'
            });
        }
    };

    static findById = (req, res) => {
        if (!req.body) {
            // return res.status(403).send({message: "No content in body"});
            return res.status(401).send({
                error: "Accès refusé",
                code: 'UF1'
            });
        }
        if (this.isManagerUser) {
            User.findById(req.params.id, (err, data) => {
                console.log(req.params.id);
                if (err) {
                    //res.status(500).send({ message: err.message || `Unable to find user with id ${data}`,});
                    res.status(404).send({
                        error: "Impossible de trouver l’utilisateur",
                        code: 'UF2'
                    });
                } else {
                    delete data.password
                    res.send(data);
                }
            });
        } else {
            return res.status(401).send({
                error: "Accès refusé",
                code: 'UF3'
            });
        }
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

    static passwordCrypt(password) {
        return bcrypt.hashSync(password, 10);
    }

}
