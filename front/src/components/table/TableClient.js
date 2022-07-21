import { useContext, useEffect, useState } from "react";
import { CarNCoContext } from "../App";

const TableClient = (props) => {
    const handleClickOpenNewClientByCommande = useContext(CarNCoContext).handleClickOpenNewClientByCommande;
    const getAllCustomers = useContext(CarNCoContext).getAllCustomers;
    const handleClickDeleteCustomer = useContext(CarNCoContext).handleClickDeleteCustomer;

    const listCustomers=[];

    useEffect(() => {
        getAllCustomers();
    },[]);


    return (
        <>
            <div className="container w-75">
                <div className="d-flex justify-content-between ">
                    <h3 className="m-4">Gestion des Clients</h3>
                    <button className="btn btn-primary m-4" onClick={()=>{handleClickOpenNewClientByCommande(false,false,null)}}>Créer un Client</button>
                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Mobile</th>
                            <th>Adress</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listCustomers.map(customer =>
                            <tr key={customer._id}>
                                <th>{customer.lastName}</th>
                                <td>{customer.firstName}</td>
                                <td>{customer.mobile}</td>
                                <td className="d-flex flex-column">
                                    <div>{customer.address.street?(`${customer.address.street}`):("")} </div>
                                    <div>{customer.address.zipCode},{customer.address.city}</div>
                                </td>
                                <td>{customer.email}</td> 
                                <td>
                                    <button className="btn btn-secondary text-white m-1" onClick = {()=>{handleClickOpenNewClientByCommande(false,true,customer._id)}}>&#9998;</button>
                                    <button className="btn btn-danger text-white m-1" onClick={()=>{handleClickDeleteCustomer(customer._id)}} >&#10008;</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableClient;