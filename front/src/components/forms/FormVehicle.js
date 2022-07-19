import {  useContext } from "react";
import { Modal } from "react-bootstrap";
import {CarNCoContext} from "../App";

const FormVehicle = (props) => {
    const OnclickCloseFormVehicule = useContext(CarNCoContext).closeFormVehicule;
    const submitVehicle = useContext(CarNCoContext).saveVehicle;

   let params=(props.formDatavehicule ? props.formDatavehicule._id : null);

   console.log(params)


    return (
        <>
            <Modal show={props.show} onHide={OnclickCloseFormVehicule} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.formDatavehicule == null ? ("Ajouter") : ("Modifier")} un véhicule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row justify-content-center" onSubmit={(e) =>{ submitVehicle(e,params)}}>
                        <div className="form-group">
                            <label htmlFor="Marque">Marque</label>
                            <input type="text" className="form-control" id="brand" name="brand" placeholder="Peugeot" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.brand : "")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Modele">Modele</label>
                            <input type="text" className="form-control" id="model" name="model" placeholder="ex :Punto" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.model : "")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <input type="text" className="form-control" id="type" name="type" placeholder="ex: break, coupé, ex..." defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.type : "")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Année">Année</label>
                            <input type="text" className="form-control" id="year" name="year" placeholder="ex: 2001"  defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.year : "")}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="color">Couleur</label>
                            <input type="text" className="form-control" id="color" name="color" placeholder="ex: Blanche" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.color : "")}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Prix</label>
                            <input type="text" className="form-control" id="price" name="price" placeholder="10" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.price : "")}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Statut</label>
                            <select name="statut" className="form-control" defaultValue={(props.formDatavehicule!=null ? props.formDatavehicule.statut : "")}>
                                <option value="all">Choisissez un statut</option>
                                <option value="stock">En stock</option>
                                <option value="vendu">Vendu</option>
                                <option value="reserve">Reservé</option>
                            </select>
                        </div>

                        <div className="row">
                            <label htmlFor="vehicleImg">Photo du véhicule</label>
                            <input className="mb-3" type="file" />
                            <img className="w-50"  alt="" />
                        </div>
                        <input className="btn btn-success m-4 w-50" value={props.formDatavehicule === null ? ("Ajouter un véhicule") : ("Modifier un véhicule")} type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormVehicle;