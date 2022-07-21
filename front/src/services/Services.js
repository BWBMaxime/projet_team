import React from "react";
import axios from "axios";

export default class Services {
  static urlServer = "http://localhost:4000";

  //***********BEGIN VEHICLE*****************/
  static login = (login, password) => {
    const urlService = this.urlServer + "/api/users/login";
    const formData = {
      login: login,
      password: password,
    };

    return axios.post(urlService, formData).then((res) => {
      // console.log(res.data)
      return res.data;
    });
  };

  static getUsers = (accessToken) => {
    const urlService = this.urlServer + "/api/users";
    return axios
      .get(urlService, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        // console.log(res.data)
        return res.data;
      });
  };
  //***********END VEHICLE*****************/

  //***********BEGIN VEHICLE*****************/
  static getVehicles = (accessToken) => {
    const urlService = this.urlServer + "/api/vehicles";

    return axios
      .get(urlService, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  };

        static getUsers = (access_token)  => {
                const urlService = this.urlServer+"/api/users";
                return axios.get(urlService, {
                        headers:{
                                "Authorization":access_token,
                        }
                }).then((res)=>{
                        // console.log(res.data)
                        return res.data
                })

        }

        static deleteUser = (id, access_token) =>{
                const urlService = this.urlServer+"/api/users/"+id;
                return axios.delete(urlService, {
                        headers:{
                                "Authorization":access_token,
                        }
                }).then((res)=>{
                        console.log('supp okay')
                })
        }

        static addUser = (login,password,lastName,firstName,profil,active,access_token)=>{
                const urlService = this.urlServer+"/api/users";
                const formData = {
                        login:login,
                        password: password,
                        lastName : lastName,
                        firstName : firstName,
                        profil: profil,
                        active: active,
                }
                console.log('formdatacreate',formData);
                return axios.post(urlService, formData,{
                        headers:{
                                "Authorization":access_token,
                        }
                        
                }).then((res)=>{
                        console.log('Ajout effectué dans la BDD')
                })
        }

        static updateUser = (id,login,password,lastName,firstName,profil,active,access_token)=>{
                const urlService = this.urlServer+"/api/users/"+id;
                const formData = {
                        login:login,
                        password: password,
                        lastName : lastName,
                        firstName : firstName,
                        profil: profil,
                        active: active,
                }
                console.log('formdata',formData);

                return axios.put(urlService, formData,{
                        headers:{
                                "Authorization":access_token,
                        }
                        
                }).then((res)=>{
                        console.log('Modification effectué dans la BDD')
                })
        }

        
        static updateUserToggle = (id,login,lastName,firstName,profil,active,access_token)=>{
                const urlService = this.urlServer+"/api/users/"+id;
                const formData = {
                        login:login,
                        lastName : lastName,
                        firstName : firstName,
                        profil: profil,
                        active: active,
                }

                return axios.put(urlService, formData,{
                        headers:{
                                "Authorization":access_token,
                        }
                        
                }).then((res)=>{
                        console.log('Modification effectué dans la BDD')
                })
        }

    //***********BEGIN VEHICLE*****************/
    static getVehicles = (accessToken)  => {
        const urlService = this.urlServer+"/api/vehicles";

        return axios.get(urlService, {
            headers:{
                "Authorization":accessToken,
            }
        }).then((res)=>{
            console.log(res.data)
            return res.data
        })
    }

    static deleteVehicles = (idVehicle,accessToken)  => {
        const urlService = this.urlServer+"/api/vehicles/"+idVehicle;
        return axios.delete(urlService, {
            headers:{
                "Authorization":accessToken,
            }
        }).then((res)=>{
            return res.data
        })
    }

    static getOneVehicle = (idVehicle,accessToken)  => {
        const urlService = this.urlServer+"/api/vehicles/"+idVehicle;
        return axios.get(urlService, {
            headers:{
                "Authorization":accessToken,
            }
        }).then((res)=>{
            return res.data
        })
    }

    static saveVehicle = (idVehicle,formData,accessToken)  => {
        if(idVehicle==null){
            //CREATION
            const urlService = this.urlServer+"/api/vehicles/";
            return axios.post(urlService, formData, {
                headers: {
                    'Authorization': accessToken
                },
            }).then((res) => {
                return res.data
            });

        }
        else{
            //UPDATE
            const urlService = this.urlServer+"/api/vehicles/"+idVehicle;
            return axios.put(urlService, formData, {
                headers: {
                    'Authorization': accessToken
                },
            }).then((res) => {
                return res.data
            });
        }
    }
    //***********END VEHICLE*****************/

    static getCustomer = (accessToken)  => {
        const urlService = this.urlServer+"/api/customers/";
        return axios.get(urlService, {
            headers:{
                "Authorization":accessToken,
            }
        }).then((res)=>{
            return res.data
        })
    }

}
