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
                      return res.data;
                });

        }

}

