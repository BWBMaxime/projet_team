export default class Data  {
        static url_server = 'https://coopernet.fr';
        static token = "";
        static user = null;
      
        /**
         * Va chercher le token qui permet de communiquer avec le serveur
         * @returns promise
         */
        static getToken = () => {
          console.log(`Dans getToken`);
          return fetch(`${this.url_server}/session/token/`)
            .then((response) => {
              if (response.status !== 200) { 
                throw new Error("Le serveur n'a pas répondu correctement");
              } else return response.text(); 
            })
            .then((token) => {
              this.token = token;
              
            });
        }
      
        /**
         * Va chercher les données de l'utilisateur en fonction d'un login et mdp
         * @param {String} login 
         * @param {String} pwd 
         * @returns promise
         */
        static getUser = (login, pwd) => {
          console.log("dans getUser", this.token);
          //console.log(login, pwd, this.token);
          // utilisation de fetch
          return fetch(this.url_server + "/user/login?_format=json", {
            credentials: "same-origin",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": this.token
            },
            body: JSON.stringify({
              name: login,
              pass: pwd
            })
          })
            .then(response => response.json())
            .then(data => {
              if (data.current_user === undefined) {
                console.log("Erreur de login");
                throw new Error("Erreur de data : ", data);
              } else {
                console.log("user", data.current_user);
                this.user = {};
                this.user.uid = data.current_user.uid;
                this.user.uname = data.current_user.name;
                this.user.upwd = pwd;
              }
            });
        }
          
}

