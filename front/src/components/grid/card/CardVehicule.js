import {useContext, useState } from "react";
import {CarNCoContext} from "../../App";

const CardVehicle = (props) => {
    const onClickdeleteVehicle = useContext(CarNCoContext).handleClickdeleteVehicle;
    const OnclickOpenFormVehicule = useContext(CarNCoContext).openFormVehicule;

    return (
        <>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0  p-2">
                <div className="card shadow-lg border-0 h-100" >
                    <div className="card-body p-4 "><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fiat_PuntoPic.12.jpg/1200px-Fiat_PuntoPic.12.jpg" alt="" className=" img-fluid d-block mx-auto mb-3" />
                        <h5 className="d-flex justify-content-between"> <a href="#" className="text-dark"> {props.vehicle.brand} {props.vehicle.model} {props.vehicle.year}</a>
                        </h5>
                        <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary text-white m-2" onClick={()=>{OnclickOpenFormVehicule(props.vehicle)}}>&#9998;</button>
                        <button className="btn btn-danger text-white m-2"  onClick={()=>{onClickdeleteVehicle(props.vehicle._id)}}>&#10008;</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardVehicle;