const FormUser = () => {
    return (
        <>
            <div className="container ">
                <form >
                <h3 className="m-4">Création/Modification utilisateur</h3>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" className="form-control" id="userLastName" placeholder="Dupont" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prénom">Prénom</label>
                        <input type="text" className="form-control" id="userFirstName" placeholder="Jean" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="profil">Profil</label>
                        <select class="form-control" id="profilUser">
                            <option>Patron</option>
                            <option>Admin</option>
                            <option>Commercial</option>
                            <option>Magasinier</option>
                        </select>
                    </div>
                    <div className="form-check form-check-inline w-100">
                        <label className="form-check-label m-4" htmlFor="inlineCheckbox1">Active</label>
                        <input className="form-check-input m-4" type="checkbox" id="inlineCheckbox1" value="option1" />
                    </div>
                    <button className="btn btn-success m-4">Créer utilisateur</button>
                </form>
            </div>
        </>
    );
}

export default FormUser;