import "../css/App.css";
import FormLogin from "./forms/FormLogin";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import TableDevis from "../components/table/TableDevis";
import Table from "../components/table/Table";
import { useState ,createContext } from "react";
import Services from "../services/Services";
export const CarNCoContext = createContext();

const App = () => {
    const [user, setUser] = useState([]);
    class handleCarNCoContext {
        static handleClickLogOut = (e)=>{
            console.log('handleClickLogout');
            setUser([]);
        };

        static openToast(type,timer,message){
            console.log('openToast');
            alert(message);

        }

        static handleClickSubmitLogin = (e) => {
            e.preventDefault();
            Services.login(e.target.login.value,e.target.password.value)
                .then(result => {
                        //console.log('(1) Inside result:', result.access_token)
                        setUser(result);
                        this.openToast('success','15',`Bienvenue `+result['firstName']+' '+result['lastName'] )
                    }
                )
                .catch(error => {
                        console.error(error.response.data.error);
                        this.openToast('error','15',error.response.data.error)
                    }
                )
        }

    };
  return (
      <CarNCoContext.Provider value={handleCarNCoContext}>
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
                              return <div>Admin</div>
                          case "commercial":
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