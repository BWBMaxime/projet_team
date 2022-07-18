import FormVehicle from "../forms/FormVehicle";
import { useState } from "react";

const Footer = () => {
    const [show, setShow] = useState(false);
    const [creation, setCreation] = useState();

    const handleClickShowModal = (ifCreate)=>{
        setCreation(ifCreate);
        setShow(true);
    }
    const handleClickCloseModal= ()=>{
        setShow(false);
    }

    const handleClickAddVehicle = (e)=>{
        e.preventDefault();
        setShow(false);
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap">
                    <h3 className="m-4">Gestion du stock</h3>
                    <button className="btn btn-primary m-4" onClick={()=>{handleClickShowModal(true)}}>Ajouter un Véhicule</button>
                </div>
                <div className="row pb-5 mb-4 ">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0  ">
                        <div className="card shadow-lg border-0 h-100" >
                            <div className="card-body p-4 "><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fiat_PuntoPic.12.jpg/1200px-Fiat_PuntoPic.12.jpg" alt="" className=" img-fluid d-block mx-auto mb-3" />
                                <h5 className="d-flex justify-content-between"> <a href="#" className="text-dark">Punto 2001</a>

                                </h5>
                                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-secondary text-white m-2" onClick={()=>{handleClickShowModal(false)}}>&#9998;</button>
                                <button className="btn btn-danger text-white m-2" >&#10008;</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="card shadow-lg border-0 h-100">
                            <div className="card-body p-4"><img src="https://i.ytimg.com/vi/lQhSmOqUW3Y/maxresdefault.jpg" alt="" className=" img-fluid d-block mx-auto mb-3" />
                                <h5 className="d-flex justify-content-between"> <a href="#" className="text-dark">La Peel P50</a>

                                </h5>
                                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-secondary text-white m-2">&#9998;</button>
                                <button className="btn btn-danger text-white m-2">&#10008;</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="card shadow-lg border-0 h-100" >
                            <div className="card-body p-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGA4VVvo75Zf51_dewnodBSH8lQweVfIilQ&usqp=CAU" alt="" className=" img-fluid d-block mx-auto mb-3" />
                                <h5 className="d-flex justify-content-between"> <a href="#" className="text-dark">Epic TUK TUK</a>

                                </h5>
                                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-secondary text-white m-2">&#9998;</button>
                                <button className="btn btn-danger text-white m-2">&#10008;</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="card shadow-lg border-0 h-100" >
                            <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-4_vgfjy9.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                                <h5 className="d-flex justify-content-between"> <a href="#" className="text-dark">BM Double-pieds</a>

                                </h5>
                                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.orem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-secondary text-white m-2">&#9998;</button>
                                <button className="btn btn-danger text-white m-2">&#10008;</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FormVehicle handleClickCloseModal={handleClickCloseModal} show={show} handleClickAddVehicle={handleClickAddVehicle} creation={creation}/>

        </>
    );
}

export default Footer;