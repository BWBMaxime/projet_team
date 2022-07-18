import "../css/App.css";
import FormLogin from "./forms/FormLogin";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import TableDevis from "../components/table/TableDevis";
import Table from "../components/table/Table";
import { useState ,createContext } from "react";
import Services from "../services/Services";
import ValidToast from "./toasts/ValidToast";
export const CarNCoContext = createContext();

const App = () => {
    const [user, setUser] = useState([]);
    const [toast, setToast] = useState([]);
    class handleCarNCoContext {
        static handleClickLogOut = (e)=>{
            console.log('handleClickLogout');
            setUser([]);
        };

        static openToast(type,delay,message){
          setToast([true,type,delay,message])
        }

        static handleClickSubmitLogin = (e) => {
            e.preventDefault();
            Services.login(e.target.login.value,e.target.password.value)
                .then(result => {
                        //console.log('(1) Inside result:', result.access_token)
                        setUser(result);
                        this.openToast('success','3000',`Bienvenue `+result['firstName']+' '+result['lastName'] )
                    }
                )
                .catch(error => {
                        console.error(error.response.data.error);
                       
                        this.openToast('error','3000',error.response.data.error)
                    }
                )
        }

    };
  return (
      <CarNCoContext.Provider value={handleCarNCoContext}>
          {!user['access_token'] ? (
              <>
              <ValidToast show={toast} />
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
                              return <div>Admin</div>
                          case "commercial":
                              return <Table />
                          case "magasinier":
                              return <Table />
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