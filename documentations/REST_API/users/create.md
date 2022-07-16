## **Create Users**

Service permettant de créer de nouveaux utilisateurs, seuls les utilisateurs dont le profil est "admin" ou "patron" sont autorisés à utiliser ce service.

**URL**

    /api/users

**Method:**

`POST`

**Auth required :**  OUI

**Required:**
- **Data Params (HEADER)**
    ```json
      Authorization:  [access_token]
    ```

- **Data Params (BODY)**
    ```json
      {
        login: "login",
        password: "password",
        lastName: "lastName",
        firstName: "firstName",
        profil: "profil",
        active: "active"
      }
    ```

**Response:**
- **Success Response:**

    - **Code:** 200 <br />
      **Content:**

    ```json
      {
          "message": "Utilisateur ajouté avec succès",
          "code": "UC4"
      }
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body
  
    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'UC1'
        }
    ```
**OR**
- **Code:** 500 Internal Server Error  <br />
 
  - **Content:**
  ```json
        {
          error: [erreur BDD],
          code: 'UC2'
        }
  ```
**OR**
- **Code:**  404 NOT FOUND <br />

  - **Content:**
  ```json
        {
          error: "Impossible de créer un utilisateur",
          code: 'UC3'
        }
  ```
**OR**
- **Code:**  404 NOT FOUND <br />

  - **Content:**
  ```json
        {
          error: "Utilisateur déjà inscrit",
          code: 'UC5'
        }
  ```
**OR**
- **Code:**  403 Forbidden <br />
  l'utilisateur n'a pas les droits liés à son profil pour créer des utilisateurs. Seuls les profils "admin" et "patron" peuvent créer des utilisateurs

  - **Content:**
  ```json
       {
         error: "Accès refusé pour ce profil utilisateur",
         code: 'UC6'
       }
  ```
**OR**
- **Code:**  401 Unauthorized <br />
  
  - **Content:**    
  ```json
      {
        error: 'Besoin d’un jeton',
        code: 'JC1'
      }
  ```
**OR**
- **Code:**  401 Unauthorized <br />

  - **Content:**
  ```json
      {
        error: 'Jeton défectueux',
        code: 'JC2'
      }
  ```





