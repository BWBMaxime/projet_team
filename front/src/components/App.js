import "../css/App.css";
import FormLogin from "./forms/FormLogin";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import TableDevis from "../components/table/TableDevis";
import Table from "../components/table/Table";
import Grid from "../components/grid/Vehicles";
import TableClient from "./table/TableClient";

import ValidToast from "./common/Toast";
import Loader from "./common/Loader";
import Vehicles from "../components/grid/Vehicles";
import { useState, createContext } from "react";
import Services from "../services/Services";
import FormClient from "./forms/FormClient";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FormDevis from "./forms/FormDevis";

export const CarNCoContext = createContext();

const App = () => {
  const [user, setUser] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showToast, setShowToast] = useState([false]);
  const [viewLoader, setViewLoader] = useState(false);
  const [listVehicles, setListVehicles] = useState([]);
  const [showformvehicule, setShowformvehicule] = useState(false);
  const [formDatavehicule, setFormDatavehicule] = useState(null);
  const [selectedImageVehicule, setSelectedImageVehicule] = useState([]);
  const [showFormClient, setShowFormClient] = useState(false);
  const [showFormClientByCommande, setShowFormClientByCommande] = useState(false);
  const [etapeFormDevisDataClient, setEtapeFormDevisDataClient] = useState(false);
  const [etapeFormDevisDataVehicle, setEtapeFormDevisDataVehicle] = useState(false);
  const [objectModifyDevis, setObjectModifyDevis] = useState(false);
  const [listCustomers, setListCustomers] = useState([]);
  const [showformDevis, setShowformDevis] = useState(false);
  const [etapeFormDevis, setEtapeFormDevis] = useState(0);
  const [viewComponent, setViewComponent] = useState("");

  class handleCarNCoContext {
    static handleClickLogOut = (e) => {
      console.log("handleClickLogout");
      setUser([]);
    };

    static linkComponent(componentName) {
      console.log(componentName);
      setViewComponent(componentName);
    }

    static getUser() {
      return user;
    }

    static openToast(type, delay, message, code = null) {
      if (code == "JC1" || code == "JC2") {
        this.handleClickLogOut();
      }
      setShowToast([true, type, delay, message]);
      setTimeout(() => {
        this.closeToast();
      }, delay);
    }

    static closeToast() {
      setShowToast([false, "", "", ""]);
    }

    static showLoader() {
      setViewLoader(true);
    }

    static hideLoader() {
      setViewLoader(false);
    }

    //*************** BEGIN USER ******************//
    static handleClickSubmitLogin = (e) => {
      e.preventDefault();
      this.showLoader();
      Services.login(e.target.login.value, e.target.password.value)
        .then((result) => {
          setUser(result);
          this.openToast(
            "success",
            "3000",
            `Bienvenue ` + result["firstName"] + " " + result["lastName"]
          );

          console.log("result.profil", result.profil);
          switch (result.profil) {
            case "patron":
              return setViewComponent("vehicule");
            case "admin":
              return setViewComponent("user");
            case "commercial":
              return setViewComponent("vehicule");
            case "magasinier":
              return setViewComponent("vehicule");
          }
          setTimeout(this.hideLoader, 1000);
        })
        .catch((error) => {
          this.openToast(
            "danger",
            "3000",
            error.response.data.error,
            error.response.data.code
          );
          setTimeout(this.hideLoader, 1000);
        });
    };
    //*************** END USER ******************//

    //*************** BEGIN VEHICLE ******************//
    static getAllVehicle = () => {
      this.showLoader();
      Services.getVehicles(user["access_token"])
        .then((result) => {
          setListVehicles(result);
          setTimeout(this.hideLoader, 1000);
        })
        .catch((error) => {
          this.openToast(
            "danger",
            "3000",
            error.response.data.error,
            error.response.data.code
          );
          setTimeout(this.hideLoader, 1000);
        });
    };

    static handleClickdeleteVehicle = (idVehicle) => {
      this.showLoader();

      console.log("delete idVehicle", idVehicle);
      Services.deleteVehicles(idVehicle, user["access_token"])
        .then((result) => {
          this.getAllVehicle();
          setTimeout(this.hideLoader, 1000);
        })
        .catch((error) => {
          this.openToast(
            "danger",
            "3000",
            error.response.data.error,
            error.response.data.code
          );
          setTimeout(this.hideLoader, 1000);
        });
    };

    static saveVehicle = (e, idVehicle = null) => {
      e.preventDefault();
      const formData = {
        brand: e.target.brand.value,
        color: e.target.color.value,
        model: e.target.model.value,
        type: e.target.type.value,
        year: e.target.year.value,
        price: e.target.price.value,
        statut: e.target.statut.value,
        image: this.getListeImageVehicles(),
      };
      this.showLoader();
      Services.saveVehicle(idVehicle, formData, user["access_token"])
        .then((result) => {
          this.getAllVehicle();
          setTimeout(this.hideLoader, 1000);
          this.closeFormVehicule();
        })
        .catch((error) => {
          this.openToast(
            "danger",
            "3000",
            error.response.data.error,
            error.response.data.code
          );
          setTimeout(this.hideLoader, 1000);
        });
    };

    static openFormVehicule = (e, formData = null) => {
      if (formData == null) {
        setSelectedImageVehicule([]);
      } else {
        setSelectedImageVehicule(formData.images);
      }
      setFormDatavehicule(formData);
      setShowformvehicule(true);
    };

    static vehicleFileChange = (e) => {
      console.log("vehicleFileChange", e);
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        this.updateListeImage.bind(reader.result),
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    static updateListeImage = (reader) => {
      let imageSrcData = reader["srcElement"]["result"];
      /*
            let copySelectedImageVehicule=[...selectedImageVehicule];
            copySelectedImageVehicule.push(imageSrcData);
            */
      setSelectedImageVehicule([imageSrcData]);
    };

    static getListeImageVehicles = () => {
      return selectedImageVehicule;
    };

    static setListeImageVehicles = (listImages) => {
      setSelectedImageVehicule(listImages);
    };

    static closeFormVehicule() {
      setFormDatavehicule(null);
      setShowformvehicule(false);
    }
    //*************** END VEHICLE ******************//

    //**************START CLIENT *******/
    static getAllCustomers = () => {
      // this.showLoader();
      Services.getCustomers(user["access_token"])
        .then((result) => {
          setListCustomers(result);
          // setTimeout(this.hideLoader, 1000);
        })
        .catch((error) => {
          // this.openToast(
          //   "danger",
          //   "3000",
          //   error.response.data.error,
          //   error.response.data.code
          // );
          // setTimeout(this.hideLoader, 1000);
        });
    };

    static handleClickCloseModalClient = () => {
      setShowFormClient(false);
    };

    static handleClickAddCustomers = (e) => {
      e.preventDefault();
      const formData = {
        lastName: e.target.clientLastName.value,
        firstName: e.target.clientFirstName.value,
        email: e.target.clientEmail.value,
        address: {
          zipCode: e.target.clientZipCode.value,
          city: e.target.clientCity.value,
        },
        mobile: e.target.clientMobile.value,
      };
      Services.addCustomer(formData, user["access_token"]).then((result) => {
        if (showFormClientByCommande == true) {

          this.handleClickNextClientByCommande(result);
        }
        this.getAllCustomers();
      });
      this.handleClickCloseModalClient();
    };

    //***************** BEGIN COMMANDE*******************//
    static handleSubmitFormCommande(e,_id){
      e.preventDefault();
      this.showLoader();
      let formData={
          "user": {
            "login": e.target.user.value,
          },
          "status": e.target.statutcommande.value,
            "vehicle": {
              "brand": e.target.brand.value,
              "color": e.target.color.value,
              "model": e.target.model.value,
              "type": e.target.type.value,
              "year": e.target.year.value,
              "price": e.target.price.value,
              "statut": e.target.statut.value,
              "images": this.getListeImageVehicles()
        },
          "customer": {
              "email": e.target.email.value
        }
      }
      if(_id!=null){
        formData._id=_id
        Services.updateCommande(user["access_token"],formData,_id)
            .then((result) => {
              setTimeout(this.hideLoader, 1000);
              this.openToast(
                  "success",
                  "3000",
                  result["message"]
              );
            })
            .catch((error) => {
              setTimeout(this.hideLoader, 1000);
              this.toast(
                  "danger",
                  "3000",
                  error.response.data.error,
                  error.response.data.code
              );
            })
      }
      else {
        Services.createCommande(user["access_token"],formData)
            .then((result) => {
              setTimeout(this.hideLoader, 1000);
              console.log(result)
              this.openToast(
                  "success",
                  "3000",
                  result["message"]
              );
            })
            .catch((error) => {
              setTimeout(this.hideLoader, 1000);
              this.toast(
                  "danger",
                  "3000",
                  error.response.data.error,
                  error.response.data.code
              );
            })
      }
    }

    static handleClickOpenNewClientByCommande = (byCommande) => {
      setShowFormClient(true);
      setShowFormClientByCommande(true);
    };

    static handleClickOpenFormCommandeByVehicule = (e, object) => {
      console.log(object);
      setShowFormClientByCommande(true);
      setEtapeFormDevisDataClient(false);
      setEtapeFormDevisDataVehicle(object);
      setEtapeFormDevis(1);
      e.preventDefault();
      setShowformDevis(true);
     };

    static handleClickNextClientByCommande(objet) {
      console.log('handleClickNextClientByCommande');
      setShowformDevis(true);
      setEtapeFormDevis(2);
      setEtapeFormDevisDataClient(objet);
    }

    static handleClickShowModalDevis = (e, etape) => {
      console.log("handleClickShowModalDevis");
      e.preventDefault();
      setObjectModifyDevis(false);
      setShowformDevis(true);
      setEtapeFormDevis(etape);
    };

    static handleClickShowModalModifyDevis = (e,object) => {
    console.log("handleClickShowModalModifyDevis");
    console.log(object)
    e.preventDefault();
    setObjectModifyDevis(object);

    setEtapeFormDevisDataVehicle(false);
    setEtapeFormDevisDataClient(false)
    setShowformDevis(true);
    setEtapeFormDevis(2);
  }

  static handleClickHideModalDevis() {
      console.log('handleClickHideModalDevis');
      setEtapeFormDevisDataVehicle(false);
      setEtapeFormDevis(0);
      setShowformDevis(false);
    }

    static getCustomers() {
      console.log("getCustomers");
      Services.getCustomers(user["access_token"])
        .then((result) => {
          setCustomers(result);
        })
        .catch((error) => {
          this.toast(
            "danger",
            "3000",
            error.response.data.error,
            error.response.data.code
          );
        });
    }

    static getDataCustomers() {
      return customers;
    }

    //***************  END COMMANDE *************************//
  }

  return (
    <CarNCoContext.Provider value={handleCarNCoContext}>
      <Loader show={viewLoader} />
      <ValidToast
        show={showToast[0]}
        type={showToast[1]}
        delay={showToast[2]}
        message={showToast[3]}
      />
      {!user["access_token"] ? (
        <>
          <FormLogin />
        </>
      ) : (
        <>
          <Header user={user} viewComponent={viewComponent} />
          {(() => {
            switch (user["profil"]) {
              case "patron":
                switch (viewComponent) {
                  case "vehicule":
                    return (
                      <>
                        <Grid
                          ListVehicles={listVehicles}
                          showformvehicule={showformvehicule}
                          formDatavehicule={formDatavehicule}
                        />
                      </>
                    );
                  case "devis":
                    return (
                      <>
                        <TableDevis />
                      </>
                    );
                  case "user":
                    return (
                      <>
                        <Table />
                      </>
                    );
                  case "client":
                    return (
                      <>
                        <Table />
                      </>
                    );
                }

              case "admin":
                switch (viewComponent) {
                  case "user":
                    return (
                      <>
                        <Table showComponent={viewComponent == "user"} />
                      </>
                    );
                }
              case "commercial":
                switch (viewComponent) {
                  case "vehicule":
                    return (
                      <>
                        {
/*
                          <Grid
                              ListVehicles={listVehicles}
                              showformvehicule={showformvehicule}
                              formDatavehicule={formDatavehicule}
                          />
  */
                        }


                      </>
                    );
                  case "devis":
                    return (
                      <>
                        <TableDevis />
                      </>
                    );
                  case "client":
                    return (
                      <>
                        <Table />
                      </>
                    );
                }

              case "magasinier":
                switch (viewComponent) {
                  case "vehicule":
                    return (
                      <>
                        <Grid
                          ListVehicles={listVehicles}
                          showformvehicule={showformvehicule}
                          formDatavehicule={formDatavehicule}
                        />
                      </>
                    );
                  case "devis":
                    return (
                      <>
                        <TableDevis />
                      </>
                    );
                }
            }
          })()}
          <FormClient
            show={showFormClient}
            showFormClientByCommande={showFormClientByCommande}
          />
          <Footer />
        </>
      )}
      <FormDevis show={showformDevis} etapeFormDevis={etapeFormDevis} etapeFormDevisDataClient={etapeFormDevisDataClient} etapeFormDevisDataVehicle={etapeFormDevisDataVehicle}  objectModifyDevis={objectModifyDevis}/>
    </CarNCoContext.Provider>
  );
};

export default App;
