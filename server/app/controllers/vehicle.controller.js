import { Vehicle } from "../models/index.js";
import {WIDTH_RESIZE_IMAGE_VEHICLE} from "../config/config.js";
import sharp from "sharp";

export class VehicleController {

  static create  = (req, res) => {
    if (!req.body) {
      return res.status(401).send({
        error: "Accès refusé",
        code: 'VC1'
      });
    }
    let listeImagesUpload = [];
    if(req.body.image.length>0) {
      console.log("resize",WIDTH_RESIZE_IMAGE_VEHICLE)
      req.body.image.map((image, imageIndex) => {
        let parts = image.split(';');
        let mimType = parts[0].split(':')[1];
        let imageData = parts[1].split(',')[1];
        let img = new Buffer(imageData, 'base64');
        sharp(img)
            .resize({width: WIDTH_RESIZE_IMAGE_VEHICLE})
            .toBuffer()
            .then(resizedImageBuffer => {
              let resizedImageData = resizedImageBuffer.toString('base64');
              let resizedBase64 = `data:${mimType};base64,${resizedImageData}`;
              listeImagesUpload.push(resizedBase64);
              if (req.body.image.length - 1 == imageIndex) {
                this.saveData(req,res, listeImagesUpload);
              }
            })
            .catch(error => {
              console.log('error', error)
              res.status(500).send({
                error: "Problème lors de l'upload de(s) image(s)",
                code: "VC2",
              });
            });
      })
    }
    else{
      this.saveData(req,res,listeImagesUpload);
    }
}

  static saveData = (req,res,listImage) => {
      console.log('de',listImage);
      const newVehicle = {
        brand: req.body.brand,
        color: req.body.color,
        model: req.body.model,
        type: req.body.type,
        year: req.body.year,
        price: req.body.price,
        statut: req.body.statut,
        images: listImage
      };
      Vehicle.create(newVehicle, (err, data) => {
        if (err) {
          res.status(500).send({
            message: "Impossible de créer le véhicule",
            code: "VC3",
          });
        } else {
          res.status(200).send({
            message: "Véhicule ajouté avec succès",
            code: "VC4",
          });
        }
      });
    }

  static update = (req, res) => {
    //console.log(req);
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: 'VU1'
      });
    }
    let listeImagesUpload = [];
    if(req.body.image.length>0) {
      req.body.image.map((image, imageIndex) => {
        let parts = image.split(';');
        let mimType = parts[0].split(':')[1];
        let imageData = parts[1].split(',')[1];
        let img = new Buffer(imageData, 'base64');
        sharp(img)
            .resize({width: WIDTH_RESIZE_IMAGE_VEHICLE})
            .toBuffer()
            .then(resizedImageBuffer => {
              let resizedImageData = resizedImageBuffer.toString('base64');
              let resizedBase64 = `data:${mimType};base64,${resizedImageData}`;
              listeImagesUpload.push(resizedBase64);
              if (req.body.image.length - 1 == imageIndex) {
                this.saveUpdateData(req,res, listeImagesUpload);
              }
            })
            .catch(error => {
              res.status(500).send({
                message: "Problème lors de l'upload de(s) image(s)",
                code: "VU2",
              });
            });
      })
    }
    else{
      this.saveUpdateData(req,res,listeImagesUpload);
    }
  };

  static saveUpdateData = (req,res,listImage) => {
    console.log('de',listImage);
    const newVehicleValues = {
      brand: req.body.brand,
      color: req.body.color,
      model: req.body.model,
      type: req.body.type,
      year: req.body.year,
      price: req.body.price,
      statut: req.body.statut,
      images: listImage
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
  }

  static findById = (req, res) => {
    if (!req.body) {
      return res.status(401).send({
        error: "Accès refusé",
        code: 'VBI1'
      });
    }
    Vehicle.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de trouver le véhicule demandé.",
          code: "VBI2",
        });
      } else {
        res.status(200).send(data);
      }
    });
  };

  static findAll = (req, res) => {
    if (!req.body) {
      return res.status(401).send({
        error: "Accès refusé",
        code: 'VFA1'
      });
    }
    Vehicle.findAll((err, data) => {
      if (err) {
        res.status(404).send({
          error: "Impossible de récupérer les données du stock",
          code: "VF2",
        });
      } else {
        res.status(200).send(data)
      }
    });
  };

  static deleteById = (req, res) => {
    if (!req.body) {
      // return res.status(403).send({message: "No content in body"});
      return res.status(401).send({
        error: "Accès refusé",
        code: 'VD1'
      });
    }
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
