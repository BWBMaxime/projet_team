import { Modal } from "react-bootstrap";
const FormDevis = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClickCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title> {props.creation === true? ("Créer"):("Modifier")} un devis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={(e)=>{props.handleClickAddDevis(e)}}>
                            <div className="form-group">
                                <label htmlFor="Client">Client</label>
                                <input type="text" className="form-control" id="clientLastName" placeholder="Dupont" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Brand">Marque</label>
                                <input type="text" className="form-control" id="brand" placeholder="Renault" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Modele">Modele</label>
                                <input type="text" className="form-control" id="modele" placeholder="Punto 2001" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Couleur</label>
                                <input type="text" className="form-control" id="color" placeholder="Blanche" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type</label>
                                <input type="text" className="form-control" id="type" placeholder="Pot de yaourt" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="years">Date</label>
                                <input type="date" className="form-control" id="years" placeholder="28/11/2020" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Prix</label>
                                <input type="text" className="form-control" id="price" placeholder="10" />
                            </div>
                            <input className="btn btn-success m-4 w-50" value={props.creation === true? ("Créer un devis"):("Modifier un devis")} type="submit" />
                        </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormDevis;