import FormUser from "../forms/FormUser";
import { useContext, useEffect, useState } from "react";
import Services from "../../services/Services";
import { CarNCoContext } from "../App";

const Table = (props) => {
    const getUser = useContext(CarNCoContext).getUser;
    const toast = useContext(CarNCoContext).openToast;
    const loader = useContext(CarNCoContext).showLoader;
    const hideLoader = useContext(CarNCoContext).hideLoader;

    const [show, setShow] = useState(false);
    const [creation, setCreation] = useState();
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const onClickShowModal = (isCreated, id) => {
        setCreation(isCreated);
        setShow(true);
        if (id !== undefined) {
            const users_copy = [...users];
            const userInfo_copy = users_copy.filter(user => {
                return id == user._id;
            })
            setUserInfo(userInfo_copy);
        }
    }
    const handleClickCloseModal = () => {
        setShow(false);
    }

    const getAllUsers = () => {
        Services.getUsers(getUser().access_token)
            .then(result => {
                setUsers(result);
                setTimeout(hideLoader, 1000);
            }
            )
            .catch(error => {
                setTimeout(hideLoader, 1000);
            }
            )
    }

    const handleChangeToggle = (e, id) => {
        const active = e.target.checked == true ? true : false;
        const users_copy = [...users];
        const userInfo_copy = users_copy.filter(user => {
            return id == user._id;
        })
        Services.updateUserToggle(id, userInfo_copy[0].login, userInfo_copy[0].lastName, userInfo_copy[0].firstName, userInfo_copy[0].profil, active, getUser().access_token);

    }

    const handleClickUpdateUser = (e, id) => {
        e.preventDefault();
        const email = e.target.userEmail.value;
        const password = e.target.userPassword.value;
        const lastName = e.target.userLastName.value;
        const firstName = e.target.userFirstName.value;
        const profilUser = e.target.profilUser.value;
        const active = e.target.active.checked == true ? true : false;
        loader();
        if (password == "") {
            Services.updateUserToggle(id, email, lastName, firstName, profilUser, active, getUser().access_token)
                .then(res => {
                    toast('success', '3000', `Utilisateur Modifié`);
                    setTimeout(hideLoader, 1000);
                    getAllUsers();
                })
                .catch(error => {
                    toast('danger', '3000', error.response.data.error, error.response.data.code);
                    setTimeout(hideLoader, 1000);
                }
                )
        } else {
            Services.updateUser(id, email, password, lastName, firstName, profilUser, active, getUser().access_token)
                .then(res => {
                    toast('success', '3000', `Utilisateur Modifié`);
                    setTimeout(hideLoader, 1000);
                    getAllUsers();
                })
                .catch(error => {
                    toast('danger', '3000', error.response.data.error, error.response.data.code);
                    setTimeout(hideLoader, 1000);
                }
                )
        }
        setShow(false);
    }

    const handleClickAddUser = (e) => {
        e.preventDefault();
        const email = e.target.userEmail.value;
        const password = e.target.userPassword.value;
        const lastName = e.target.userLastName.value;
        const firstName = e.target.userFirstName.value;
        const profilUser = e.target.profilUser.value;
        const active = e.target.active.checked == true ? true : false;
        loader();
        Services.addUser(email, password, lastName, firstName, profilUser, active, getUser().access_token)
            .then(res => {
                toast('success', '3000', `Utilisateur Ajouté`);
                setTimeout(hideLoader, 1000);
                getAllUsers();
            })
            .catch(error => {
                toast('danger', '3000', error.response.data.error, error.response.data.code);
                setTimeout(hideLoader, 1000);
            }
            )
        setShow(false);
    }

    const handleClickDeleteUser = (id) => {
        if (window.confirm("Voulez vous vraiment faire la suppression?")) {
            loader();
            Services.deleteUser(id, getUser().access_token)
                .then(res => {
                    toast('success', '3000', `Utilisateur supprimé`);
                    setTimeout(hideLoader, 1000);
                    getAllUsers();
                })
                .catch(error => {
                    toast('danger', '3000', error.response.data.error, error.response.data.code);
                    setTimeout(hideLoader, 1000);
                }
            )
        }
    }

    useEffect(() => {
        loader();
            Services.getUsers(getUser().access_token)
                .then(result => {
                        setUsers(result);
                        setTimeout(hideLoader, 1000);
                    }
                )
                .catch(error => {
                        toast('danger', '3000', error.response.data.error, error.response.data.code);
                        setTimeout(hideLoader, 1000);
                    }
                )

    }, [])

    return (
            <>
                <div className="container w-75">
                    <div className="d-flex justify-content-between ">
                        <h3 className="m-4">Gestion des utilisateurs</h3>
                        <button className="btn btn-primary m-4" onClick={() => {
                            onClickShowModal(true)
                        }}>Créer un utilisateurs
                        </button>
                    </div>

                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Roles</th>
                            <th>Active</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user =>
                            <tr key={user.login}>
                                <th>{user.lastName}</th>
                                <td>{user.firstName}</td>
                                <td>{user.profil}</td>
                                <td><label className="switch">
                                    <input className="check" defaultChecked={user.active == true ? (true) : (false)}
                                           type="checkbox" onChange={(e) => {
                                        handleChangeToggle(e, user._id)
                                    }}/>
                                    <span className="slider "></span>
                                </label>
                                </td>
                                <td>
                                    <button className="btn btn-secondary text-white m-1" onClick={() => {
                                        onClickShowModal(false, user._id)
                                    }}>&#9998;</button>
                                    <button className="btn btn-danger text-white m-1" onClick={() => {
                                        handleClickDeleteUser(user._id)
                                    }}>&#10008;</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <FormUser creation={creation} show={show} onClickShowModal={onClickShowModal}
                          handleClickCloseModal={handleClickCloseModal} handleClickAddUser={handleClickAddUser}
                          handleClickUpdateUser={handleClickUpdateUser} userInfo={userInfo}/>
            </>
        );

}

export default Table;