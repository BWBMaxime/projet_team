const Table = () => {
    return (
        <>
            {/* Exemple gestion utilisateur */}
            <div className="container">
                <div className="d-flex">
                    <h3 className="m-4">Gestion des utilisateurs</h3>
                    <button className="btn btn-primary m-4">Crée un utilisateurs</button>
                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Profil</th>
                            <th>Active</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>PETAIN</th>
                            <td>Geoffrais</td>
                            <td>Admin</td>
                            <td><input type="checkbox" /></td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                            <th>GUICHON</th>
                            <td>Maxime</td>
                            <td>Admin</td>
                            <td><input type="checkbox" /></td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                        <tr>
                            <th>ROJAS</th>
                            <td>Célia</td>
                            <td>Admin</td>
                            <td><input type="checkbox" /></td>
                            <td>
                                <button className="btn btn-secondary text-white m-1">&#9998;</button>
                                <button className="btn btn-danger text-white m-1">&#10008;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;