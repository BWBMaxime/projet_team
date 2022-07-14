import { useContext } from "react";
import { CarNCoContext } from "../App";

const Header = (props) => {

  const handleClickLogout = useContext(CarNCoContext).handleClickLogout2;
  // console.log(useContext(CarNCoContext));
  return (
    <>
    {/* pour tous */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
        <img src="https://car-n-co.fr/wp-content/uploads/2019/01/carnco-Logo_Noir.png.png" className="mx-5" width={150} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         {/*end*/}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        {/* test1 ? test1 vrai : test2 ? test2 vrai : test2 faux */}
          {props.user === "commercial" ? (    
            <ul className="navbar-nav">
              <li className="nav-item m-4 h5" >
                <a className="nav-link" href="#">Devis</a>
              </li>
              <li className="nav-item m-4 h5">
                <a className="nav-link" href="#">Liste Client</a>
              </li>
              <li className="nav-item m-4 h5">
                <a className="nav-link" href="#">Stock Véhicule</a>
              </li>
              <li className="nav-item m-4 h5">
                <a className="nav-link" href="#">Validation Devis</a>
              </li>
            </ul>       
          )
           : (
            <div> header magsinier </div>
          )
        }
         
           {/* pour tous */}
          <button onClick={(e)=>handleClickLogout(e)} className="btn btn-warning" >Logout</button>
           {/* end*/}
        </div>
      </nav>
      {/* 
      tous deconexion/ logos
      admin = juste onglet deconexion
      patron = gestion utilisateur/devis/stock/clients
      magasinier = stock/devis
      commercial = client/devis/ stock*/}
  
    </>
  );
}

export default Header;