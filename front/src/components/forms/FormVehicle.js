const FormVehicle = () => {
    return (
        <>
            <div className="container">
                <h3 className="m-4">Création/Modification Véhicule</h3>
                <form>
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
                    <form className="container">
                        <div class="form-group row">
                            <label for="photo du vehicule">Photos du véhicule</label>
                            <input type="file" class="form-control-file" id="photoVehicle"/>
                        </div>
                    </form>
                    <button className="btn btn-success m-4">Crée le devis</button>
                </form>
            </div>

        </>
    );
}

export default FormVehicle;