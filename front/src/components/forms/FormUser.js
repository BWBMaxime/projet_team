import { Modal } from "react-bootstrap";
const FormUser = (props) => {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClickCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.creation === true ?("Créer"):("Modifier")} un utilisateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="formUser" onSubmit={props.creation === true ?((e) => {props.handleClickAddUser(e)}):( (e) => {props.handleClickUpdateUser(e, props.userInfo[0]._id) })}>
                        <div className="form-group">
                            <label className="mb-2" htmlFor="email">Email :</label>
                            <input  required type="email" className="form-control" id="userEmail" placeholder="Dupont@dupont.fr" defaultValue={props.creation == false?(`${props.userInfo[0].login}`) :("")}/>
                        </div>
                        <div className="form-group">
                            <label className="mb-2" htmlFor="password">Password :</label>
                            {props.creation == true ?(
                                <input  required type="password" className="form-control" id="userPassword" placeholder="***"  />
                            ): (
                                <input type="password" className="form-control" id="userPassword" placeholder="***"   />
                            )}
        
                        </div>
                        <div className="form-group">
                            <label className="mb-2" htmlFor="nom">Nom :</label>
                            <input  required type="text" className="form-control" id="userLastName" placeholder="Dupont"  defaultValue={props.creation == false?(`${props.userInfo[0].lastName}`) :("")}/>
                        </div>
                        <div className="form-group">
                            <label className="mb-2 mt-2" htmlFor="prénom">Prénom :</label>
                            <input  required type="text" className="form-control" id="userFirstName" placeholder="Jean" defaultValue={props.creation == false?(`${props.userInfo[0].firstName}`) :("")} />
                        </div>
                        <div className="form-group">
                            <label className="mb-2 mt-2" htmlFor="profil">Profil :</label>
                            <select required defaultValue={props.creation == false?(`${props.userInfo[0].profil}`) :("")} className="form-control" id="profilUser">
                                {props.creation == true ? (<option value="">Selectionner un profil</option>):("")}
                                <option value="patron">Patron</option>
                                <option value="admin">Admin</option>
                                <option value="commercial">Commercial</option>
                                <option value="magasinier">Magasinier</option>
                            </select>
                        </div>
                        <div>
                            <label className="form-check-label mt-3" htmlFor="active">Active</label>
                            <input className="form-check-input mx-4 mt-4" defaultChecked={props.creation == false ? (props.userInfo[0].active == true ?(true) :(false)):("")} type="checkbox" id="active" value="option1" />
                        </div>
                        <input className="btn btn-success m-4 w-50" value={props.creation === true ?("Créer utilisateur"):("Modifier utilisateur")} type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormUser;