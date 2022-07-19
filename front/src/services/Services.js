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



}

