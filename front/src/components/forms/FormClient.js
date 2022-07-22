import { Modal } from "react-bootstrap";
import { useContext } from "react";
import { CarNCoContext } from "../App";

const FormClient = (props) => {
    const handleClickCloseModalClient = useContext(CarNCoContext).handleClickCloseModalClient;
    const handleClickAddCustomers = useContext(CarNCoContext).handleClickAddCustomers;
    const formDataCustomer = props.isUpdateCustomer== true? props.formDataCustomer[0] : "";
    const handleClickUpdateCustomer = useContext(CarNCoContext).handleClickUpdateCustomer;
console.log(props);
    return (
        <>
            <Modal show={props.show} onHide={handleClickCloseModalClient} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.isUpdateCustomer == false ?("Créer un"):("Modifier le")} client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={props.isUpdateCustomer == false ?((e)=>{handleClickAddCustomers(e)}):((e)=>{handleClickUpdateCustomer(e, formDataCustomer._id)})}>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input required type="text" className="form-control" id="clientLastName" placeholder="Dupont" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.lastName):("")} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prénom">Prénom</label>
                            <input required type="text" className="form-control" id="clientFirstName" placeholder="Jean" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.firstName):("")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="prénom">Email</label>
                            <input required type="email" className="form-control" id="clientEmail" placeholder="Jean@test.fr" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.email):("")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="adresse">Adresse</label>
                            <input required type="text" className="form-control" id="clientStreet" placeholder="8 rue de l'inconnu" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.address["street"]):("")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="code postal">Code postal</label>
                            <input required type="text" className="form-control" id="clientZipCode" placeholder="5555" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.address["zipCode"]):("")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ville">Ville</label>
                            <input required type="text" className="form-control" id="clientCity" placeholder="Paris" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.address["city"]):("")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="téléphone">Téléphone</label>
                            <input required type="text" className="form-control" id="clientMobile" placeholder="0606060606" defaultValue={props.isUpdateCustomer == true ?(formDataCustomer.mobile):("")} pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"/>
                        </div>
                        <input className="btn btn-success m-4 w-50" value={props.isUpdateCustomer == false ?("Créer"): ("Modifier")} type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormClient;