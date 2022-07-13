import "../css/App.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Table from "../components/table/Table";
import FormLogin from "./forms/FormLogin";
import { useState, createContext } from "react";
import Data from "../services/Data";
import { useEffect } from 'react';

export const CarNCoContext = createContext();

const App = () => {
  
  useEffect (() => {
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
  const [user, setUser] = useState("admin");


  const handleClickSubmitFormLogin = async (e) => {
    e.preventDefault();
    const email = e.target.typeEmail.value;
    const pwd = e.target.typePassword.value;
    try {
      setIsLogged(true);
      // Appel de getUser
      await Data.getUser(email, pwd);
      setIsLogged(true);
      // Appel de getTerms
    } catch (error) {
      console.error("Erreur attrapée dans handleSubmitLogin", error);
      setIsLogged(false);
    }
  }
  
  return (
    <>
      {!is_logged ? (
        <FormLogin handleClickSubmitFormLogin={handleClickSubmitFormLogin} />
      ) : (
        <div className="container-fluid">
          {/* <CarNCoContext.Provider value={}/> */}
          <Header user={user} />
            {user === "admin" ? (
              <Table/>
            ) : user=== "patron"(
              <div> patron</div>
            )}
          {/* <CarNCoContext.Provider /> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;