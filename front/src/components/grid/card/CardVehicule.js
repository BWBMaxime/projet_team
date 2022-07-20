import {useContext, useState } from "react";
import {CarNCoContext} from "../../App";

const CardVehicle = (props) => {
    const onClickdeleteVehicle = useContext(CarNCoContext).handleClickdeleteVehicle;
    const OnclickOpenFormVehicule = useContext(CarNCoContext).openFormVehicule;
    let vignetteStyle = {
        backgroundImage: `url(${props.vehicle.images[0]})`,
    };
    let idCarousel='#'+props.vehicle._id;
    return (
        <>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0  p-2">
                <div className="card shadow-lg border-0 h-100" >
                    {
                        (
                            (props.vehicle.statut=="reserve" || props.vehicle.statut=="vendu")
                        &&
                        <div className="ruban left "><span className={props.vehicle.statut}>{props.vehicle.statut}</span></div>
                        )
                    }
                    <div className="card-body p-4 ">
                                    {
                                        props.vehicle.images.map((image,imageIndex) => {
                                                return (
                                                            <div className="card-vehicles   img-fluid d-block mx-auto mb-3" style={{backgroundImage: `url(${image})`}}></div>
                                                        )
                                            }
                                        )
                                    }
                        <h5 className="d-flex justify-content-between"> <span className="text-dark"> {props.vehicle.brand} {props.vehicle.model}  </span></h5>
                        <span>
                            <u>Année:</u> {props.vehicle.year} <br/>
                            <u>Type:</u> {props.vehicle.type} <br/>
                            <u>Statut:</u> {props.vehicle.statut}



                        </span>
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