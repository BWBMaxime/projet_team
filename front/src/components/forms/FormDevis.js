import { Modal } from "react-bootstrap";
import React, { useState, useEffect,useContext } from 'react';
import {CarNCoContext} from "../App";
import Services from "../../services/Services";
import CardVehicle from "../grid/card/CardVehicule";

const FormDevis = (props) => {
    const [dataVehicle, setDataVehicle] = useState([]);
    const getUser = useContext(CarNCoContext).getUser;
    const getCustomers = useContext(CarNCoContext).getCustomers;
    const getDataCustomers = useContext(CarNCoContext).getDataCustomers;
    const onClickShowModalDevis = useContext(CarNCoContext).handleClickShowModalDevis;
    const onClickHideModalDevis = useContext(CarNCoContext).handleClickHideModalDevis;
    const onClickOpenNewClientByCommande2 = useContext(CarNCoContext).handleClickOpenNewClientByCommande2;
    const onSubmitFormCommande = useContext(CarNCoContext).handleSubmitFormCommande;

    const handleFileChange = useContext(CarNCoContext).vehicleFileChange;
    let getListeImages = useContext(CarNCoContext).getListeImageVehicles;
    let setListeImageVehicles = useContext(CarNCoContext).setListeImageVehicles;
    let params=(props.formDatavehicule ? props.formDatavehicule._id : null);

    let statusCommande = '';
    let customer = '';



    if(props.objectModifyDevis) {
        //MODIFICATION COMMANDE//
        let statusCommande = 'en cours';
        let customer = props.objectModifyDevis.customer;
    }



   if(props.etapeFormDevisDataClient){
       console.log('etapeFormDevisDataClient',props.etapeFormDevisDataClient.client.email)
       let statusCommande = 'en cours';
       let customer = props.objectModifyDevis.client;
   }


    useEffect(() => {
        if(props.objectModifyDevis){
            console.log(props.objectModifyDevis.vehicle.images);
            setListeImageVehicles([props.objectModifyDevis.vehicle.images])
        }
        else{
            setListeImageVehicles([])
        }
    },[]);




    useEffect(() => {
        getCustomers();
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
                                <button className="btn btn-primary" onClick={(e)=>{onClickOpenNewClientByCommande2(e,)}}>Nouveau client</button>
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
                        <Modal.Title>{((props.objectModifyDevis) ? "Modifier le devis" : "Créer un devis")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(e) => {
                            onSubmitFormCommande(e,(props.objectModifyDevis ? props.objectModifyDevis._id : null))
                        }}>
                            <input type="hidden" id="user" name="user" disabled className="form-control" value={(props.objectModifyDevis ? props.objectModifyDevis.user.login  : getUser()["login"])} />
                            <input type="hidden" name="statutcommande" value={(props.objectModifyDevis ? props.objectModifyDevis.status  : "en cours")} />

                            <div className="form-group">
                                <label htmlFor="Client">Client</label>
                                {
                                    (props.etapeFormDevisDataClient
                                        ?
                                        <>
                                            <input type="hidden" id="email" name="email" disabled className="form-control" value={props.etapeFormDevisDataClient.client.email} />
                                            <input type="text" id="emailfake" name="emailfake" disabled className="form-control" value={props.etapeFormDevisDataClient.client.firstName+' '+props.etapeFormDevisDataClient.client.lastName} />

                                        </>
                                        :
                                            <><select required className="form-control" id="email"  disabled={(props.etapeFormDevisDataClient || props.objectModifyDevis )} name="email" defaultValue={(props.objectModifyDevis && props.objectModifyDevis.customer.email)}>
                                                <option value="">Séléctionner un client</option>
                                                {
                                                    getDataCustomers().map((customer, indexcustomer) => <option
                                                        value={customer.email}>{customer.firstName} {customer.lastName}</option>)
                                                }
                                            </select></>
                                    )
                                }
                            </div>

                        <div className="form-group">

                            <input type="hidden"  className="form-control" id="idVehicule" name="idVehicule"  defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule._id : (props.objectModifyDevis ? props.objectModifyDevis.vehicle._id:''))} />
                            <label htmlFor="Marque">Marque</label>
                            <input type="text" required  disabled={props.etapeFormDevisDataVehicle} required className="form-control" id="brand" name="brand" placeholder="Peugeot" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.brand : (props.objectModifyDevis ? props.objectModifyDevis.vehicle.brand:''))} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Modele">Modele</label>
                            <input type="text" required  disabled={props.etapeFormDevisDataVehicle} className="form-control" id="model" name="model" placeholder="ex :Punto" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.model : (props.objectModifyDevis ? props.objectModifyDevis.vehicle.model:''))}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select  id="type" name="type"className="form-control" required  disabled={props.etapeFormDevisDataVehicle} defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.type : (props.objectModifyDevis ? props.objectModifyDevis.vehicle.type:''))}>
                                <option value="">Choisissez un type de véhicule</option>
                                <option value="Berline">Berline</option>
                                <option value="Break">Break</option>
                                <option value="Cabriolet">Cabriolet</option>
                                <option value="Monospace">Monospace</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Année">Année</label>
                            <input type="number" required  disabled={props.etapeFormDevisDataVehicle} className="form-control" id="year" name="year" placeholder="ex: 2001"  defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.year : (props.objectModifyDevis ? props.objectModifyDevis.vehicle.year:''))}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="color">Couleur</label>
                            <input type="text" required  disabled={props.etapeFormDevisDataVehicle} className="form-control" id="color" name="color" placeholder="ex: Blanche" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.color : (props.objectModifyDevis ? props.objectModifyDevis.vehicle.color:''))}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Prix</label>
                            <input type="number" required className="form-control" id="price" name="price" placeholder="10" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.price : (props.objectModifyDevis ? props.objectModifyDevis.vehicle.price:''))}/>
                        </div>

                        <div className="form-group visually-hidden">
                            <label htmlFor="price">Statut</label>
                            <select name="statut" className="form-control"  required defaultValue="reserve">
                                <option value="reserve">Reservé</option>
                            </select>
                        </div>


                        <div className="row">
                            <label htmlFor="vehicleImg">Photo du véhicule</label>
                            <input name="images" required={getListeImages().length==0 }  className="mb-3" type="file"   onChange={handleFileChange}  />
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