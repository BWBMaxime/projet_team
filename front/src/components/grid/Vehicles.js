import React, { useState, useEffect,useContext } from 'react';
import {CarNCoContext} from "../App";
import FormVehicle from "../forms/FormVehicle";
import CardVehicle from "./card/CardVehicule";
import Services from "../../services/Services";

const Vehicles = (props) => {
    const getAllVehicle = useContext(CarNCoContext).getAllVehicle;
    const OnclickOpenFormVehicule = useContext(CarNCoContext).openFormVehicule;
    let listVehicles=[];
    useEffect(() => {
        getAllVehicle();
    },[]);

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap">
                    <h3 className="m-4">Gestion du stock</h3>
                    <button className="btn btn-primary m-4" onClick={()=>{OnclickOpenFormVehicule(null)}}>Ajouter un Véhicule</button>
                </div>
                <div className="d-flex flex-wrap">
                    {
                        props.ListVehicles.map((vehicle,indexVehicle) => <CardVehicle vehicle={vehicle} key={indexVehicle}> </CardVehicle>)
                    }
                </div>
            </div>
            <FormVehicle  show={props.showformvehicule}  formDatavehicule={props.formDatavehicule}  />
        </>
    );
}

export default Vehicles;