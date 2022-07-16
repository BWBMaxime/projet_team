const FormDevis = () => {
    return (
        <>
            <section className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center h-100 ">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <form className="row justify-content-center">
                            <h3 className="m-4">Création/Modification Devis</h3>
                            <div className="form-group">
                                <label htmlFor="Client">Client</label>
                                <input type="text" className="form-control" id="clientLastName" placeholder="Dupont" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Brand">Marque</label>
                                <input type="text" className="form-control" id="brand" placeholder="Renault" />
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
                                <input type="text" className="form-control" id="type" placeholder="Pot de yaourt" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="years">Date</label>
                                <input type="date" className="form-control" id="years" placeholder="28/11/2020" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Prix</label>
                                <input type="text" className="form-control" id="price" placeholder="10" />
                            </div>
                            <input className="btn btn-success m-4 w-50" value="Créer le devis" type="submit" />
                        </form>

                    </div>
                </div>
            </section>

        </>
    );
}

export default FormDevis;