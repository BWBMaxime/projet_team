import { useContext } from "react";
import { CarNCoContext } from "../App";

const Header = (props) => {
  const onClickLogOut = useContext(CarNCoContext).handleClickLogOut;
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
                    <li className="nav-item m-4 h5" >
                      <a className="nav-link" href="#">Les utilisateurs</a>
                    </li>
                    <li className="nav-item m-4 h5" >
                      <a className="nav-link" href="#">Les devis</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className="nav-link" href="#">Les clients</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className="nav-link" href="#">Stock Véhicules</a>
                    </li>
                  </ul>   
                )

              case "commercial":
                return (
                  <ul className="navbar-nav">
                    <li className="nav-item m-4 h5" >
                      <a className="nav-link" href="#">Les devis</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className="nav-link" href="#">Les clients</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className="nav-link" href="#">Stock Véhicules</a>
                    </li>
                  </ul>  
                )
              case "magasinier":
                return (
                  <ul className="navbar-nav">
                    <li className="nav-item m-4 h5">
                      <a className="nav-link" href="#">Les Devis</a>
                    </li>
                    <li className="nav-item m-4 h5">
                      <a className="nav-link" href="#">Stock Véhicule</a>
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