const FormDevis = () => {
    return (
        <>
            <div className="container">
                <h3 className="m-4">Création/Modification Devis</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="Client">Client</label>
                        <input type="text" className="form-control" id="clientLastName" placeholder="Dupont" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Brand">Brand</label>
                        <input type="text" className="form-control" id="brand" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Modele">Modele</label>
                        <input type="text" className="form-control" id="modele" placeholder="Punto 2001" />
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
                        <label htmlFor="years">Date</label>
                        <input type="text" className="form-control" id="years" placeholder="28/11/2020" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Prix</label>
                        <input type="text" className="form-control" id="price" placeholder="10" />
                    </div>
                    <button className="btn btn-success m-4">Crée le devis</button>
                </form>
            </div>

        </>
    );
}

export default FormDevis;