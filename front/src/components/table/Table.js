import FormUser from "../forms/FormUser";
import { useContext, useState } from "react";
import Services from "../../services/Services";
// import {createContext } from "react";
import { CarNCoContext } from "../App";

const Table = () => {
    const getUser = useContext(CarNCoContext).getUser;

    const [show, setShow] = useState(false);
    const [creation, setCreation] = useState();
    const [users, setusers] = useState();

    const onClickShowModal = (test)=>{
        setCreation(test);
        setShow(true);
    }
    const handleClickCloseModal= ()=>{
        setShow(false);
    }

    const handleClickAddUser = (e)=>{
        e.preventDefault();
        const lastName  = e.target.userLastName.value;
        const firstName  = e.target.userFirstName.value;
        const profilUser  = e.target.profilUser.value;
        const active  = e.target.active.checked;
        setShow(false);
    }

    const listeUsers = ()=>{
           return Services.getUsers(getUser().access_token);
    };


    return (
        <>

            {/* Exemple gestion utilisateur */}
            <div className="container w-75">
                <div className="d-flex justify-content-between ">
                    <h3 className="m-4">Gestion des utilisateurs</h3>
                    <button className="btn btn-primary m-4" onClick={()=>{onClickShowModal(true)}}>Crée un utilisateurs</button>
                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Profil</th>
                            <th>Active</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>PETAIN</th>
                            <td>Geoffrais</td>
                            <td>Admin</td>
                            <td><input type="checkbox" /></td>
                            <td>
                                <button className="btn btn-secondary text-white m-1" onClick={()=>{onClickShowModal(false)}}>&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                            <th>GUICHON</th>
                            <td>Maxime</td>
                            <td>Admin</td>
                            <td><input type="checkbox" /></td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                            <th>ROJAS</th>
                            <td>Célia</td>
                            <td>Admin</td>
                            <td><input type="checkbox" /></td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <FormUser creation={creation} show={show} onClickShowModal={onClickShowModal} handleClickCloseModal={handleClickCloseModal} handleClickAddUser={handleClickAddUser}/>
        </>
    );
}

export default Table;