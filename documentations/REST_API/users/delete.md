## **Delete Users**

Service permettant de supprimer un utilisateur, seuls les utilisateurs dont le profil est "admin" ou "patron" sont autorisés à utiliser ce service.

**URL**

    /api/users/:id

**Method:**

`DELETE`

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
     {
        message: 'l’utilisateur à été supprimé',
        code: 'UD3'
     }
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body

    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'UD1'
        }
    ```
**OR**
- **Code:**  404 NOT FOUND<br />

    - **Content:**
  ```json
        {
          error: 'Impossible de supprimer l’utilisateur',
          code: 'UU2'
        }
  ```
**OR**
- **Code:**  401 Unauthorized<br />
  l'utilisateur n'as pas les droits liés à son profil pour modifier des utilisateurs. Seuls les profils "admin" et "patron" peuvent modifier des utilisateurs
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





