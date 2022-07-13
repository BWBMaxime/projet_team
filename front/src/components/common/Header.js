import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
        <img src="https://car-n-co.fr/wp-content/uploads/2019/01/carnco-Logo_Noir.png.png" className="mx-5" width={150} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item m-4 h5">
              <a className="nav-link " href="#">Home</a>
            </li>
            <li className="nav-item m-4 h5" >
              <a className="nav-link" href="#">Devis</a>
            </li>
            <li className="nav-item m-4 h5">
              <a className="nav-link" href="#">Stocks</a>
            </li>
            <li className="nav-item m-4 h5">
              <a className="nav-link" href="#">Gestion Utilisateurs</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* si page login on affiche jsute le logo || user = admin */}
      {/* si user == patron*/}
      {/*si user == commercial */}
      {/* si user == magasinier*/}
    </>
  );
}

export default Header;