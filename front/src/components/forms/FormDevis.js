import { Modal } from "react-bootstrap";
import React, { useState, useEffect,useContext } from 'react';
import {CarNCoContext} from "../App";
import Services from "../../services/Services";
import CardVehicle from "../grid/card/CardVehicule";

const FormDevis = (props) => {
    const getUser = useContext(CarNCoContext).getUser;
    const getDataCustomers = useContext(CarNCoContext).getDataCustomers;

    const toast = useContext(CarNCoContext).openToast;
    const loader = useContext(CarNCoContext).showLoader;
    const hideLoader = useContext(CarNCoContext).hideLoader;
    const onClickShowModalDevis = useContext(CarNCoContext).handleClickShowModalDevis;
    const onClickHideModalDevis = useContext(CarNCoContext).handleClickHideModalDevis;
    const onClickOpenNewClientByCommande = useContext(CarNCoContext).handleClickOpenNewClientByCommande;
    const OnclickCloseFormVehicule = useContext(CarNCoContext).closeFormVehicule;
    const handleFileChange = useContext(CarNCoContext).vehicleFileChange;
    const submitVehicle = useContext(CarNCoContext).saveVehicle;
    let getListeImages = useContext(CarNCoContext).getListeImageVehicles;
    let params=(props.formDatavehicule ? props.formDatavehicule._id : null);

    useEffect(() => {
        getDataCustomers();

    }, [])



    if(props.etapeFormDevis===1) {
        return (
            <>
                <Modal show={props.show} onHide={onClickHideModalDevis}>
                    <Modal.Header closeButton >
                        <Modal.Title>Créer un devis</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="d-flex justify-content-around">
                                <button className="btn btn-primary" onClick={(e)=>{onClickOpenNewClientByCommande(e)}}>Nouveau client</button>
                                <button  className="btn btn-primary" onClick={(e)=>{onClickShowModalDevis(e,2)}}>Client déjà existant</button>
                            </div>
                   </Modal.Body>
                </Modal>
            </>
        );
    }
    else{




        return (
            <>
                <Modal show={props.show} onHide={onClickHideModalDevis}>
                    <Modal.Header closeButton >
                        <Modal.Title>Créer un devis</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(e) => {
                            props.handleClickAddDevis(e)
                        }}>
                            <div className="form-group">
                                <label htmlFor="Client">Client</label>
                                <select required className="form-control" id="brand" name="brand">
                                    <option>Séléctionner un client</option>
                                    {
                                        getDataCustomers().map((customer, indexcustomer) => <option value={customer._id}>{customer.firstName} {customer.lastName}</option>)
                                    }
                                </select>
                            </div>

                        <div className="form-group">
                            <label htmlFor="Marque">Marque</label>
                            <input type="text" required className="form-control" id="brand" name="brand" placeholder="Peugeot" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.brand : "")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Modele">Modele</label>
                            <input type="text" required className="form-control" id="model" name="model" placeholder="ex :Punto" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.model : "")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select  id="type" name="type"className="form-control" required defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.type : "")}>
                                <option value="">Choisissez un type de véhicule</option>
                                <option value="Berline">Berline</option>
                                <option value="Break">Break</option>
                                <option value="Cabriolet">Cabriolet</option>
                                <option value="Monospace">Monospace</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Année">Année</label>
                            <input type="number" required className="form-control" id="year" name="year" placeholder="ex: 2001"  defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.year : "")}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="color">Couleur</label>
                            <input type="text" required className="form-control" id="color" name="color" placeholder="ex: Blanche" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.color : "")}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Prix</label>
                            <input type="number" required className="form-control" id="price" name="price" placeholder="10" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.price : "")}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Statut</label>
                            <select name="statut" className="form-control" required defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.statut : "")}>
                                <option value="">Choisissez un statut</option>
                                <option value="stock">En stock</option>
                                <option value="vendu">Vendu</option>
                                <option value="reserve">Reservé</option>
                            </select>
                        </div>
                        <div className="row">
                            <label htmlFor="vehicleImg">Photo du véhicule</label>
                            <input required={getListeImages().length==0 } className="mb-3" type="file"   onChange={handleFileChange}  />
                            <div className="d-flex flex-wrap">
                                {
                                    getListeImages().map((image,imageIndex) =>
                                        <div className="card-vehicles-form img-fluid d-block mx-auto mb-3"  style={{backgroundImage: `url(${image})`}}></div>
                                    )
                                }
                            </div>
                        </div>
                            <input className="btn btn-success m-4 w-50" value="Créer la commande" type="submit" />
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        );


    }
}

export default FormDevis;