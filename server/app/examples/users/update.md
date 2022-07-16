## **Create Users**

Service permetant de modifier un utilisateur, seul les utilisateurs dont le profil "admin" et "patron" sont autorisés à utiliser ce service.

**URL**

    /api/users/:id

**Method:**

`PUT`

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
           message: "Les données de l'utilisateur ont été mis à jour avec succès",
           code: 'UU3'
      }
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body
  
    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'UU1'
        }
    ```
**OR**
- **Code:** 500 Internal Server Error  <br />
 
  - **Content:**
  ```json
        {
          error: "Impossible de mettre à jour les données de l’utilisateur",
          code: 'UU2'
        }
  ```
**OR**
- **Code:**  401 Unauthorized<br />
  l'utilisateur n'as pas les droits liés à son profil pour modifier des utilisateurs. Seul les profils "admin" et "patron" peuvent modifier des utilisateurs
  - **Content:**
  ```json
        {
            error: "Accès refusé pour ce profil utilisateur",
            code: 'UU4'
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





