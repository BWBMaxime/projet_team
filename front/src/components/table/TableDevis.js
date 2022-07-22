import FormDevis from "../forms/FormDevis";
import Services from "../../services/Services";
import { CarNCoContext } from "../App";

import { useEffect, useState } from "react";
import { useContext } from "react";

const TableDevis = () => {
    //*****************start context****************
    const getUser = useContext(CarNCoContext).getUser;
    const hideLoader = useContext(CarNCoContext).hideLoader;
    const loader = useContext(CarNCoContext).showLoader;
    const onClickShowModalDevis = useContext(CarNCoContext).handleClickShowModalDevis;
    const onClickShowModalModifyDevis = useContext(CarNCoContext).handleClickShowModalModifyDevis;

    const setStateDevis = useContext(CarNCoContext).setStateDevis;

    //*****************end context****************

    //*****************start state****************
    const [show, setShow] = useState(false);
    const [creation, setCreation] = useState();
    const [commands, setCommands] = useState([]);
    //*****************end state ****************

    //*****************start modal ****************

    const handleClickShowModal = (isCreated) => {
        setCreation(isCreated);
        setShow(true);
    };
    const handleClickCloseModal = () => {
        setShow(false);
    };

    const handleClickAddDevis = (e) => {
        e.preventDefault();
        setShow(false);
    };
    //*****************end modal ****************

    //*****************start event ****************
    const changeStatutDevis = (e, id) => {
        loader();

        const commands_copy = [...commands];

        let commandInfo_copy = commands_copy.filter((command) => {
            return id == command._id;
        });
        switch (getUser().profil) {
            case "commercial":
            case "patron":
                if (e.target.getAttribute("value") == "Valider") {
                    commandInfo_copy[0].status = "validée";
                    commandInfo_copy[0].vehicle.statut = "valide";
                    //MaJ status vehicle
                    e.target.setAttribute("value", "Annuler");
                    e.target.classList.remove("btn-success");
                    e.target.classList.add("btn-danger");
                    Services.updateStatusCommand(
                        id,
                        getUser().access_token,
                        commandInfo_copy[0]
                    );
                }
                if (e.target.getAttribute("value") == "Annuler") {
                    commandInfo_copy[0].status = "en cours";
                    commandInfo_copy[0].vehicle.statut= "reserve";
                    e.target.setAttribute("value", "Valider");
                    e.target.classList.remove("btn-danger");
                    e.target.classList.add("btn-success");
                    Services.updateStatusCommand(
                        id,
                        getUser().access_token,
                        commandInfo_copy[0]
                    );
                }
                break;
            case "magasinier":
                if (e.target.getAttribute("value") == "Commander") {
                    commandInfo_copy[0].status = "commandée";
                    commandInfo_copy[0].vehicle.statut = "commande";
                    e.target.setAttribute("value", "Décommander");
                    e.target.classList.remove("btn-success");
                    e.target.classList.add("btn-danger");
                    //création d'un bouton terminer qui change le statut en cloturé
                    Services.updateStatusCommand(
                        id,
                        getUser().access_token,
                        commandInfo_copy[0]
                    );
                }
                if (e.target.getAttribute("value") == "Décommander") {
                    commandInfo_copy[0].status = "validée";
                    commandInfo_copy[0].vehicle.statut = "vendu";
                    e.target.setAttribute("value", "Commander");
                    e.target.classList.remove("btn-danger");
                    e.target.classList.add("btn-success");
                    Services.updateStatusCommand(
                        id,
                        getUser().access_token,
                        commandInfo_copy[0]
                    );
                }
        }
        Services.getCommands(getUser().access_token)
            .then((result) => {
                const result_copy = [...result];
                result_copy.forEach((command) => {
                    command.date = new Date(command.date).toLocaleDateString("fr-FR");
                });
                setCommands(result_copy);

                setStateDevis();

                setTimeout(hideLoader, 1000);
            })
            .catch((error) => {

                setStateDevis();


                setTimeout(hideLoader, 1000);
            });
    };

    const deleteDevis = (e, id) => {
        if (window.confirm("Voulez vous vraiment faire la suppression?")) {
            loader();
            Services.deleteCommand(id, getUser().access_token)
                .then((res) => {
                    Services.getCommands(getUser().access_token)
                        .then((result) => {
                            setTimeout(hideLoader, 1000);
                            const result_copy = [...result];

                            result_copy.forEach((command) => {
                                command.date = new Date(command.date).toLocaleDateString(
                                    "fr-FR"
                                );
                            });
                            setCommands(result_copy);
                        })
                        .catch((error) => {
                            setTimeout(hideLoader, 1000);
                        });
                })
                .catch((error) => {
                    setTimeout(hideLoader, 1000);
                });
        }
    };
    //*****************end event ****************

    useEffect(() => {
        loader();
        Services.getCommands(getUser().access_token)
            .then((result) => {
                console.log('result',result)
                const result_copy = [...result];
                console.log('result_copy',result_copy);
                result_copy.forEach((command) => {
                    command.date = new Date(command.date).toLocaleDateString("fr-FR");
                });
                setTimeout(hideLoader, 1000);
                setCommands(result_copy);
            })
            .catch((error) => {
                setTimeout(hideLoader, 1000);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between ">
                    <h3 className="m-4">Gestion des devis</h3>
                    <button className="btn btn-primary m-4" onClick={(e) => {
                        onClickShowModalDevis(e, 1)
                    }}>Créer un devis
                    </button>
                </div>
                <div className="bg-secondary opacity-75">
                    <h3 className="text-white">Non prioritaire</h3>
                </div>
                <table className="table">
                    <thead className="thead">
                    <tr>
                        <th>Date</th>
                        <th>Priorité</th>
                        <th>Marque</th>
                        <th>Modèle</th>
                        <th>Commercial</th>
                        <th>Client</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {commands.map(
                        (command) =>
                            (((getUser().profil == "patron" ||
                                        getUser().profil == "commercial") &&
                                    (command.status == "en cours" ||
                                        command.status == "validée")) ||
                                (getUser().profil == "magasinier" &&
                                    (command.status == "validée" ||
                                        command.status == "commandée"))) && (
                                <tr key={command._id}>
                                    <th className="border">{command.date}</th>
                                    <th className="border">{command.status}</th>
                                    <th className="border">{command.vehicle.brand}</th>
                                    <th className="border">{command.vehicle.model}</th>
                                    <th className="border">
                                        {command.user.lastName + " " + command.user.firstName}
                                    </th>
                                    <th className="border">
                                        {command.customer.lastName +
                                            " " +
                                            command.customer.firstName}
                                    </th>

                                    <td className="border">
                                        {/* "btn btn-success text-white m-1" */}
                                        <input
                                            id="btnStatusDevis"
                                            type="button"
                                            className={
                                                getUser().profil == "magasinier"
                                                    ? command.status == "validée"
                                                        ? "btn btn-success text-white m-1"
                                                        : "btn btn-danger text-white m-1"
                                                    : command.status == "en cours"
                                                        ? "btn btn-success text-white m-1"
                                                        : "btn btn-danger text-white m-1"
                                            }
                                            defaultValue={
                                                getUser().profil == "magasinier"
                                                    ? command.status == "validée"
                                                        ? "Commander"
                                                        : "Décommander"
                                                    : command.status == "en cours"
                                                        ? "Valider"
                                                        : "Annuler"
                                            }
                                            onClick={(e) => {
                                                changeStatutDevis(e, command._id);
                                            }}
                                        />
                                    </td>
                                    <td className="border">
                                        <button className="btn btn-secondary text-white m-1" onClick={(e) =>{onClickShowModalModifyDevis(e,command)}}>
                                            &#9998;
                                        </button>
                                        <button
                                            className="btn btn-danger text-white m-1"
                                            onClick={(e) => {
                                                deleteDevis(e, command._id);
                                            }}
                                        >
                                            &#10008;
                                        </button>
                                    </td>
                                </tr>
                            )
                    )}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default TableDevis;
