const FormUser = () => {
    return (
        <>
            <section className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center h-100 ">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <form className="row justify-content-center">
                            <h3 className="m-4">Création/Modification utilisateur</h3>
                            <div className="form-group">
                                <label className="mb-2" htmlFor="nom">Nom :</label>
                                <input type="text" className="form-control" id="userLastName" placeholder="Dupont" />
                            </div>
                            <div className="form-group">
                                <label className="mb-2 mt-2" htmlFor="prénom">Prénom :</label>
                                <input type="text" className="form-control" id="userFirstName" placeholder="Jean" />
                            </div>
                            <div class="form-group">
                                <label className="mb-2 mt-2"  htmlFor="profil">Profil :</label>
                                <select class="form-control" id="profilUser">
                                    <option>Séléctionné un rôle</option>
                                    <option value="patron">Patron</option>
                                    <option value="admin">Admin</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="magasinier">Magasinier</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-check-label mt-3" htmlFor="active">Active</label>
                                <input className="form-check-input mx-4 mt-4" type="checkbox" id="active" value="option1" />
                            </div>
                            <input className="btn btn-success m-4 w-50" value="Créer l'utilisateur" type="submit" />
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}

export default FormUser;