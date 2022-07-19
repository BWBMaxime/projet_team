import React from 'react'
import axios from 'axios';

export default class Services  {
        static urlServer = 'http://localhost:4000';

        static login = (login,password)  => {
                const urlService = this.urlServer+"/api/users/login";
                const formData = {
                        login:login,
                        password: password,
                }

                return axios.post(urlService, formData).then((res) => {
                        // console.log(res.data)
                      return res.data;
                });

        }

        static getUsers = (accessToken)  => {
                const urlService = this.urlServer+"/api/users";
                
                return axios.get(urlService, {
                        headers:{
                                "Authorization":accessToken,
                        }
                }).then((res)=>{
                        console.log(res.data)
                        return res.data
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


}

