const FormClient = () => {
    return (
        <>
            <section className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center h-100 ">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <h3 className="m-4">Création/Modification client</h3>
                        <form className="row justify-content-center">
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" className="form-control" id="clientLastName" placeholder="Dupont" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prénom">Prénom</label>
                                <input type="text" className="form-control" id="clientFirstName" placeholder="Jean" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adresse">Adresse</label>
                                <input type="text" className="form-control" id="clientAdress" placeholder="8 rue de l'inconnu" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="code postal">Code postal</label>
                                <input type="text" className="form-control" id="clientZipCode" placeholder="5555" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Ville</label>
                                <input type="text" className="form-control" id="clientCity" placeholder="Paris" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="téléphone">Téléphone</label>
                                <input type="text" className="form-control" id="clientMobile" placeholder="0606060606" />
                            </div>
                            <input className="btn btn-success m-4 w-50" value="Créer la fiche client" type="submit" />
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FormClient;