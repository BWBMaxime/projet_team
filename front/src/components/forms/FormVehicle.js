import { useState } from "react";


const FormVehicle = () => {
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };
    return (
        <>
            <section className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center h-100 ">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <form className="row justify-content-center">
                            <h3 className="m-4">Création/Modification Véhicule</h3>
                            <div className="form-group">
                                <label htmlFor="Marque">Marque</label>
                                <input type="text" className="form-control" id="marque" placeholder="Peugeot" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Année">Année</label>
                                <input type="text" className="form-control" id="years" placeholder="2001" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Modele">Modele</label>
                                <input type="text" className="form-control" id="modele" placeholder="Punto" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Couleur</label>
                                <input type="text" className="form-control" id="color" placeholder="Blanche" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type</label>
                                <input type="text" className="form-control" id="type" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Prix</label>
                                <input type="text" className="form-control" id="price" placeholder="10" />
                            </div>
                            <div className="row">
                                <label htmlFor="vehicleImg">Photo du véhicule</label>
                                <input className="mb-3" type="file" onChange={onImageChange} />
                                <img className="w-50" src={img} alt="" />
                            </div>
                            <input className="btn btn-success m-4 w-50" value="Créer le véhicule" type="submit" />
                        </form>

                    </div>
                </div>
            </section>

        </>
    );
}

export default FormVehicle;