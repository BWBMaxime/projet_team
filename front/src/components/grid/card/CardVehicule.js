import {useContext, useState } from "react";
import {CarNCoContext} from "../../App";

const CardVehicle = (props) => {
    const onClickdeleteVehicle = useContext(CarNCoContext).handleClickdeleteVehicle;
    const OnclickOpenFormVehicule = useContext(CarNCoContext).openFormVehicule;
    const OnclickOpenFormCommandeByVehicule = useContext(CarNCoContext).handleClickOpenFormCommandeByVehicule


    /*let vignetteStyle = {
        backgroundImage: `url(${props.vehicle.images[0]})`,
    };*/
    let idCarousel='#'+props.vehicle._id;

    console.log(props.vehicle.statut);
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
                                    {/*
                                        props.vehicle.images.map((image,imageIndex) => {
                                                return (
                                                            <div key={imageIndex} className="card-vehicles   img-fluid d-block mx-auto mb-3" style={{backgroundImage: `url(${image})`}}></div>
                                                        )
                                            }
                                        )
                                        */}
                        <h5 className="d-flex justify-content-between"> <span className="text-dark"> {props.vehicle.brand} {props.vehicle.model}  </span></h5>
                        <span>
                            <u>Année:</u> {props.vehicle.year} <br/>
                            <u>Type:</u> {props.vehicle.type} <br/>
                            <u>Statut:</u> {props.vehicle.statut}



                        </span>
                    </div>
                    <div className="d-flex justify-content-end">
                        {
                            (
                                props.vehicle.statut=="stock"
                                    &&
                            <button className="btn btn-primary text-white m-2" onClick={(e)=>{OnclickOpenFormCommandeByVehicule(e,props.vehicle._id)}}>Faire un devis</button>

                            )
                        }


                        <button className="btn btn-secondary text-white m-2" onClick={(e)=>{OnclickOpenFormVehicule(e,props.vehicle)}}>&#9998;</button>
                        <button className="btn btn-danger text-white m-2"  onClick={()=>{onClickdeleteVehicle(props.vehicle._id)}}>&#10008;</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardVehicle;