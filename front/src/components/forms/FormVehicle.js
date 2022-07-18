import { useState } from "react";
import { Modal } from "react-bootstrap";

const FormVehicle = (props) => {
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };
    return (
        <>
            <Modal show={props.show} onHide={props.handleClickCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.creation === true ? ("Ajouter") : ("Modifier")} un véhicule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row justify-content-center">
                        <div className="form-group">
                            <label htmlFor="Marque">Marque</label>
                            <input type="text" className="form-control" id="marque" placeholder="Peugeot" defaultValue={props.creation == false ?("test"):("")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Année">Année</label>
                            <input type="text" className="form-control" id="years" placeholder="2001" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Modele">Modele</label>
                            <input type="text" className="form-control" id="modele" placeholder="Punto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Couleur</label>
                            <input type="text" className="form-control" id="color" placeholder="Blanche" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <input type="text" className="form-control" id="type" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Prix</label>
                            <input type="text" className="form-control" id="price" placeholder="10" />
                        </div>
                        <div className="row">
                            <label htmlFor="vehicleImg">Photo du véhicule</label>
                            <input className="mb-3" type="file" onChange={onImageChange} />
                            <img className="w-50" src={img} alt="" />
                        </div>
                        <input className="btn btn-success m-4 w-50" value={props.creation === true ? ("Ajouter un véhicule") : ("Modifier un véhicule")} type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormVehicle;