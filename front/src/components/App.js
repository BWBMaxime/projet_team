import "../css/App.css";
import FormLogin from "./forms/FormLogin";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import TableDevis from "../components/table/TableDevis";
import Table from "../components/table/Table";
import Grid from "../components/grid/Vehicles";

import ValidToast from "./common/Toast";
import Loader from "./common/Loader";
import Vehicles from "../components/grid/Vehicles"
import {useState, createContext} from "react";
import Services from "../services/Services";


export const CarNCoContext = createContext();

const App = () => {
    const [user, setUser] = useState([]);
    const [showToast, setShowToast] = useState([false]);
    const [viewLoader, setViewLoader] = useState(false);
    const [listVehicles, setListVehicles] = useState([]);
    const [showformvehicule, setShowformvehicule] = useState(false);
    const [formDatavehicule, setFormDatavehicule] = useState(null);
    const [selectedImageVehicule, setSelectedImageVehicule] = useState([]);


    class handleCarNCoContext {
        static handleClickLogOut = (e) => {
            console.log('handleClickLogout');
            setUser([]);
        };

        static getUser() {
            return user;
        }

        static openToast(type, delay, message, code = null) {
            if (code == 'JC1' || code == 'JC2') {
                this.handleClickLogOut();
            }
            setShowToast([true, type, delay, message]);
            setTimeout(() => {
                this.closeToast();
            }, delay)
        }

        static closeToast() {
            setShowToast([false, '', '', '']);
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
                .then(result => {
                        setUser(result);
                        this.openToast('success', '3000', `Bienvenue ` + result['firstName'] + ' ' + result['lastName']);
                        setTimeout(this.hideLoader, 1000);
                    }
                )
                .catch(error => {
                        this.openToast('danger', '3000', error.response.data.error, error.response.data.code);
                        setTimeout(this.hideLoader, 1000);
                    }
                )
        }
        //*************** END USER ******************//

        //*************** BEGIN VEHICLE ******************//
        static getAllVehicle = () => {
            console.log('getAllVehicle');
            this.showLoader();
            Services.getVehicles(user['access_token'])
                .then(result => {
                        setListVehicles(result);
                        setTimeout(this.hideLoader, 1000);
                    }
                )
                .catch(error => {
                        this.openToast('danger', '3000', error.response.data.error, error.response.data.code);
                        setTimeout(this.hideLoader, 1000);
                    }
                )
        }

        static  handleClickdeleteVehicle = (idVehicle) => {
            this.showLoader();
            Services.deleteVehicles(idVehicle, user['access_token']).then(result => {
                    this.getAllVehicle();
                    setTimeout(this.hideLoader, 1000);
                }
            )
                .catch(error => {
                        this.openToast('danger', '3000', error.response.data.error, error.response.data.code);
                        setTimeout(this.hideLoader, 1000);
                    }
                )
        }

        static saveVehicle= (e,idVehicle=null) => {
            e.preventDefault()
            const formData = {
                brand:e.target.brand.value,
                color: e.target.color.value,
                model: e.target.model.value,
                type: e.target.type.value,
                year: e.target.year.value,
                price: e.target.price.value,
                statut: e.target.statut.value,
                image: this.getListeImageVehicles()
            }
            this.showLoader();
            Services.saveVehicle(idVehicle,formData, user['access_token'])
                .then(result => {
                    this.getAllVehicle();
                    setTimeout(this.hideLoader, 1000);
                    this.closeFormVehicule();
                    }
                )
                .catch(error => {
                        this.openToast('danger', '3000', error.response.data.error, error.response.data.code);
                        setTimeout(this.hideLoader, 1000);
                    }
                );


        }

        static openFormVehicule = (formData=null) => {
            if(formData==null){
                setSelectedImageVehicule([]);
            }
            else{
                setSelectedImageVehicule(formData.images);
            }
            setFormDatavehicule(formData);
            setShowformvehicule(true);
        }

        static vehicleFileChange = (e) =>{
            console.log('vehicleFileChange',e)
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();
            reader.addEventListener("load", this.updateListeImage.bind(reader.result), false);
            if (file) {
                reader.readAsDataURL(file);
            }
        }

        static updateListeImage = (reader) => {
            let imageSrcData=reader["srcElement"]['result']
            /*
            let copySelectedImageVehicule=[...selectedImageVehicule];
            copySelectedImageVehicule.push(imageSrcData);
            */

            setSelectedImageVehicule([imageSrcData]);
        }

        static getListeImageVehicles = () => {
           return selectedImageVehicule;
        }
        static setListeImageVehicles = (listImages) => {
            setSelectedImageVehicule(listImages);
        }
        static closeFormVehicule(){
            setFormDatavehicule(null);
            setShowformvehicule(false)
        }
        //*************** END VEHICLE ******************//
    };

    return (
        <CarNCoContext.Provider value={handleCarNCoContext}>
            <Loader show={viewLoader}/>
            <ValidToast show={showToast[0]} type={showToast[1]} delay={showToast[2]} message={showToast[3]}/>
            {!user['access_token'] ? (
                <>
                    <FormLogin/>
                </>
            ) : (
                <>
                    <Header user={user}/>
                    {(() => {
                        switch (user['profil']) {
                            case "patron":
                                return <TableDevis/>
                            case "admin":
                                return <Table view={"tableUser"}/>
                            case "commercial":
//                              return <Table view={"tableDevis"}/>
                                return <Grid  ListVehicles={listVehicles} showformvehicule={showformvehicule} formDatavehicule={formDatavehicule}/>
                            case "magasinier":
                                return <Vehicles/>
                        }
                    })()}
                    <Footer/>
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
        */
}
export default App;