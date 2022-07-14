const FormClient = () => {
    return (
        <>
            <div className="container">
                <h3 className="m-4">Création/Modification client</h3>
                <form>
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
                    <button className="btn btn-success m-4">Crée la fiche client</button>
                </form>
            </div>

        </>
    );
}

export default FormClient;