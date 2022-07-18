import "../css/App.css";
import FormLogin from "./forms/FormLogin";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import TableDevis from "../components/table/TableDevis";
import Table from "../components/table/Table";
import ValidToast from "./common/validToast";
import Vehicles from "../components/grid/Vehicles"
import { useState ,createContext } from "react";
import Services from "../services/Services";

export const CarNCoContext = createContext();

const App = () => {
    const [user, setUser] = useState([]);
    const [showToast, setShowToast] = useState([false]);
    class handleCarNCoContext {
        static handleClickLogOut = (e)=>{
            console.log('handleClickLogout');
            setUser([]);
        };

        static openToast(type,delay,message){
            setShowToast([true,type,delay,message]);
            setTimeout(() => {
                this.closeToast();
            }, delay)

        }

        static closeToast(){
            setShowToast([false,'','','']);
        }


        static handleClickSubmitLogin = (e) => {
            e.preventDefault();
            Services.login(e.target.login.value,e.target.password.value)
                .then(result => {
                        setUser(result);
                        this.openToast('success','3000',`Bienvenue `+result['firstName']+' '+result['lastName'] )
                    }
                )
                .catch(error => {
                        this.openToast('danger','3000',error.response.data.error)
                    }
                )
        }

    };
  return (
      <CarNCoContext.Provider value={handleCarNCoContext}>
          <ValidToast show={showToast[0]} type={showToast[1]} delay={showToast[2]}  message={showToast[3]}  />
          {!user['access_token'] ? (
              <>

              <FormLogin/>
              </>
          ) : (
              <>
              <Header user={user}  />
                  {(() => {
                      switch (user['profil']) {
                          case "patron":
                              return <TableDevis />
                          case "admin":
                              return <Table view={"tableUser"} />
                          case "commercial":
                              return <Table view={"tableDevis"}/>
                          case "magasinier":
                              return <Vehicles />
                      }
                  })()}
              <Footer />
              </>
          )
          }
      </CarNCoContext.Provider>
  );
}
     {/* TODO :
          TOAST for gestion erreur
          ajustement des tableaux
          gestion taille d image
          Version Mobile des tableaux
        */}
export default App;