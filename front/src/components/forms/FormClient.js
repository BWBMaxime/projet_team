import { Modal } from "react-bootstrap";
import { useContext } from "react";
import { CarNCoContext } from "../App";

const FormClient = (props) => {
    const handleClickCloseModalClient = useContext(CarNCoContext).handleClickCloseModalClient;
    const handleClickAddCustomers = useContext(CarNCoContext).handleClickAddCustomers;

    return (
        <>
            <Modal show={props.show} onHide={handleClickCloseModalClient} >
                <Modal.Header closeButton>
                    <Modal.Title>Créer un client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e)=>{handleClickAddCustomers(e)}}>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input required type="text" className="form-control" id="clientLastName" placeholder="Dupont" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prénom">Prénom</label>
                            <input required type="text" className="form-control" id="clientFirstName" placeholder="Jean" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prénom">Email</label>
                            <input required type="email" className="form-control" id="clientEmail" placeholder="Jean@test.fr" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="adresse">Adresse</label>
                            <input required type="text" className="form-control" id="clientAdress" placeholder="8 rue de l'inconnu" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code postal">Code postal</label>
                            <input required type="text" className="form-control" id="clientZipCode" placeholder="5555" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ville">Ville</label>
                            <input required type="text" className="form-control" id="clientCity" placeholder="Paris" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="téléphone">Téléphone</label>
                            <input required type="text" className="form-control" id="clientMobile" placeholder="0606060606" />
                        </div>
                        <input className="btn btn-success m-4 w-50" value="Créer la fiche client" type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormClient;