## **Delete Users**

Service permettant de supprimer un véhicule.

**URL**

    /api/vehicles/:id

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
        message: 'Le véhicule à été supprimé avec succès',
        code: 'VD3'
     }
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body

    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'VD1'
        }
    ```
**OR**
- **Code:**  404 NOT FOUND<br />

    - **Content:**
  ```json
        {
          error: 'Impossible de supprimer le véhicule.',
          code: 'VD2'
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





