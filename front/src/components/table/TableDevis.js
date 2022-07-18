import FormDevis from "../forms/FormDevis";
import { useState } from "react";

const TableDevis = () => {
    const [show, setShow] = useState(false);
    const [creation, setCreation] = useState();

    const handleClickShowModal = (test)=>{
        setCreation(test);
        setShow(true);
    }
    const handleClickCloseModal= ()=>{
        setShow(false);
    }

    const handleClickAddDevis = (e)=>{
        e.preventDefault();
        setShow(false);
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between ">
                    <h3 className="m-4">Gestion des devis</h3>
                    <button className="btn btn-primary m-4" onClick={()=>{handleClickShowModal(true)}} >Crée un devis</button>
                </div>
                <div className="bg-danger opacity-75">
                    <h3 className="text-white">Très urgent</h3>
                </div>
                <table className="table mb-5 border border-2">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Priorité</th>
                            <th scope="col">Marque</th>
                            <th scope="col">Modèle</th>
                            <th scope="col">Commercial</th>
                            <th scope="col">Client</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1" onClick={()=>{handleClickShowModal(false)}}>&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="bg-warning opacity-75">
                    <h3 className="text-white">Urgent</h3>
                </div>
                <table className="table mb-5">
                    <thead className="thead">
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Priorité</th>
                            <th scope="col">Marque</th>
                            <th scope="col">Modèle</th>
                            <th scope="col">Commercial</th>
                            <th scope="col">Client</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="bg-info opacity-50">
                    <h3 className="text-white">Normal</h3>
                </div>
                <table className="table mb-5">
                    <thead className="thead">
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Priorité</th>
                            <th scope="col">Marque</th>
                            <th scope="col">Modèle</th>
                            <th scope="col">Commercial</th>
                            <th scope="col">Client</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="bg-secondary opacity-75">
                    <h3 className="text-white">Non prioritaire</h3>
                </div>
                <table className="table">
                    <thead className="thead">
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Priorité</th>
                            <th scope="col">Marque</th>
                            <th scope="col">Modèle</th>
                            <th scope="col">Commercial</th>
                            <th scope="col">Client</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                        <td>28/02/2022</td>
                            <td>Hight</td>
                            <td>Peugeot</td>
                            <td>508</td>
                            <td>Geoffrey</td>
                            <td>Bernard</td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <FormDevis show={show} handleClickCloseModal={handleClickCloseModal} handleClickAddDevis={handleClickAddDevis} creation={creation}/>
        </>
    );
}

export default TableDevis;