## **Find all Users**

Service permettant de récupérer tous les utilisateurs présents en BDD,  seuls les utilisateurs dont le profil est "admin" ou "patron" sont autorisés à utiliser ce service.

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

**Response:**
- **Success Response:**

    - **Code:** 200 <br />
      **Content:**

    ```json
    [
        {
          "_id": "62cece7df362b00959e32083",
          "login": "maxlemax",
          "lastName": "GUICHEAU",
          "firstName": "Maxime",
          "profil": "commercial",
          "active": true
        },
        {
          "_id": "62d00faa2394ae7b2e1f323a",
          "login": "maxarrow",
          "lastName": "Brignon",
          "firstName": "Maxime",
          "profil": "commercial",
          "active": true
      }
    ]
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body

    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'UF1'
        }
    ```
**OR**
- **Code:** 404 NOT FOUND   <br />

    - **Content:**
  ```json
        {
          error: "Impossible de récupérer les données utilisateur",
          code: 'UF2'
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
- **Code:**  401 Unauthorized <br />
  l'utilisateur n'as pas les droits liés à son profil pour créer des utilisateurs. Seuls les profils "admin" et "patron" peuvent recupérer la liste des utilisateurs.

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






