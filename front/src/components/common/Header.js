import { useContext } from "react";
import { CarNCoContext } from "../App";

const Header = (props) => {
  const onClickLogOut = useContext(CarNCoContext).handleClickLogOut;
  const linkComponent = useContext(CarNCoContext).linkComponent;

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
          {(()=>{
            switch (props.user['profil']) {
              case "patron":
                return (
                  <ul className="navbar-nav">
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="vehicule" ? "nav-link active" : "nav-link")} href="#"  onClick={()=> {linkComponent('vehicule')}}>Véhicules</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="devis" ? "nav-link active" : "nav-link")} href="#"  onClick={()=> {linkComponent('devis')}}>Devis</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="client" ? "nav-link active" : "nav-link")}  href="#"  onClick={()=> {linkComponent('client')}}>Clients</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="user" ? "nav-link active" : "nav-link")}  href="#"  onClick={()=> {linkComponent('user')}}>Utilisateurs</a>
                    </li>
                  </ul>
                )
              console.log("props.viewComponent 2",props.viewComponent)
              case "commercial":
                return (
                  <ul className="navbar-nav">

                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="vehicule" ? "nav-link active" : "nav-link")} href="#"  onClick={()=> {linkComponent('vehicule')}}>Véhicules</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="devis" ? "nav-link active" : "nav-link")} href="#"  onClick={()=> {linkComponent('devis')}}>Devis</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="client" ? "nav-link active" : "nav-link")}  href="#"  onClick={()=> {linkComponent('client')}}>Clients</a>
                    </li>

                  </ul>  
                )
              case "magasinier":
                return (
                  <ul className="navbar-nav">
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="vehicule" ? "nav-link active" : "nav-link")} href="#"  onClick={()=> {linkComponent('vehicule')}}>Véhicules</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className={(props.viewComponent=="devis" ? "nav-link active" : "nav-link")} href="#"  onClick={()=> {linkComponent('devis')}}>Devis</a>
                    </li>
                  </ul>  
                )
            }
          })()}
          <button  className="btn btn-warning me-5" onClick={(e) => {onClickLogOut(e)}}>Logout</button>
        </div>
      </nav>
    </>
  );
}
export default Header;