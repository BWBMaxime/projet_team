import React, { useState, useEffect,useContext } from 'react';
import {CarNCoContext} from "../App";

const TableDevis = (props) => {
    const onClickShowModalDevis = useContext(CarNCoContext).handleClickShowModalDevis;

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
                                <button className="btn btn-secondary text-white m-1" onClick={(e) => {
                                    onClickShowModalDevis(e, false)
                                }}>&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>
           </>
        );

}

export default TableDevis;