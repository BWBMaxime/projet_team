import "../css/App.css";
//Component
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import TableDevis from "../components/table/TableDevis";
import CardVehicule from "../components/table/CardVehicule";
import Table from "../components/table/Table";

import FormLogin from "./forms/FormLogin";
import FormUser from "./forms/FormUser";
import FormDevis from "./forms/FormDevis";
import FormClient from "./forms/FormClient";
import FormVehicle from "./forms/FormVehicle";
//----------
import { useState, createContext } from "react";
import Data from "../services/Data";
import { useEffect } from 'react';

export const CarNCoContext = createContext();

const App = () => {

  useEffect(() => {
    try {
      async function getToken() {
        await Data.getToken();
      }
      getToken();
    } catch (error) {
      console.error(`Erreur attrapée dans App`, error);
    }
  }, [])

  const [is_logged, setIsLogged] = useState(false);
  const [user, setUser] = useState("commercial");


  const handleClickSubmitFormLogin = async (e) => {
    e.preventDefault();
    const email = e.target.typeEmail.value;
    const pwd = e.target.typePassword.value;
    try {
      setIsLogged(true);
      await Data.getUser(email, pwd);
      setIsLogged(true);
    } catch (error) {
      console.error("Erreur attrapée dans handleSubmitLogin", error);
      setIsLogged(false);
    }
  }

  class handleContext {

   static handleClickLogout2 = (e)=>{
    setIsLogged(false);
    }

  }
  return (
    <>
    <Header/>
    <FormLogin />
    <FormUser />
    <FormDevis />
    <FormClient />
    <FormVehicle/>
    <TableDevis />
    <CardVehicule />
    <Table />
    <Footer/>
    </>
  );
}
     {/* TODO :
          TOAST for gestion erreur
          ajustement des tableaux
          gestion taille d image
          Version Mobile des tableaux
        */}
export default App;