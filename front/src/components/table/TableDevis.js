const TableDevis = () => {
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default TableDevis;