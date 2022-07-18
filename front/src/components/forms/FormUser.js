import { Modal } from "react-bootstrap";
const FormUser = (props) => {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClickCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.creation === true ?("Créer"):("Modifier")} un utilisateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {props.handleClickAddUser(e) }}>
                        <div className="form-group">
                            <label className="mb-2" htmlFor="nom">Nom :</label>
                            <input type="text" className="form-control" id="userLastName" placeholder="Dupont" />
                        </div>
                        <div className="form-group">
                            <label className="mb-2 mt-2" htmlFor="prénom">Prénom :</label>
                            <input type="text" className="form-control" id="userFirstName" placeholder="Jean" />
                        </div>
                        <div className="form-group">
                            <label className="mb-2 mt-2" htmlFor="profil">Profil :</label>
                            <select className="form-control" id="profilUser">
                                <option>Séléctionné un rôle</option>
                                <option value="patron">Patron</option>
                                <option value="admin">Admin</option>
                                <option value="commercial">Commercial</option>
                                <option value="magasinier">Magasinier</option>
                            </select>
                        </div>
                        <div>
                            <label className="form-check-label mt-3" htmlFor="active">Active</label>
                            <input className="form-check-input mx-4 mt-4" type="checkbox" id="active" value="option1" />
                        </div>
                        <input className="btn btn-success m-4 w-50" value={props.creation === true ?("Créer utilisateur"):("Modifier utilisateur")} type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormUser;