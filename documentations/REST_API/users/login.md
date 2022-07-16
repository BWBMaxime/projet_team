## **Login**

Authentification de l'utilisateur, l'API Retourne un JWT (json web token) permettant ensuite d'accéder aux autres services de l'API selon les droits accordés au profil de l'utilisateur identifié.

 **URL**

    /api/users/login

 **Method:**

  `POST`

**Auth required :**  NON

  **Required:**


- **Data Params (BODY)**
 
    ```json
    {
      login: "login",
      password: "password"
    }
    ```
  
**Response:**
- **Success Response:**

    - **Code:** 200 <br />
      **Content:**

    ```json
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc5MDIxMDMsImV4cCI6MTY1NzkxMjkwM30.5JP9wLbUfXLDj988Gm-dwOyOjpB6BFKcE4f0IKh8T8w",
      "lastName": "dsfsdfsdf",
      "firstName": "zerzerzer",
      "profil": "admin"
    }
    ```
- **Error Response:**

    - **Code:** 404 NOT FOUND <br />
      **Content:** 
    ```json
        {
        error: "Impossible de trouver l’utilisateur",
        code: 'UL1'
        }
    ```

**OR**


- **Code:** 401 UNAUTHORIZED <br />
**Content:** 
    ```json
      {
        error: "Votre compte n'est pas activé",
        code: 'UL2'
      }
    ```
**OR**

- **Code:** 401 UNAUTHORIZED <br />
**Content:**
    ```json
    {
      error: "Login et/ou mot de passe invalide",
      code: 'UL3'
    }
    ```
**OR**

- **Code:** 401 UNAUTHORIZED <br />
  **Content:**
    ```json
    {
      error: "Login et/ou mot de passe invalide",
      code: 'UL4'
    }
    ```


