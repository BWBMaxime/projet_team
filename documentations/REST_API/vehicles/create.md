## **Create Vehicles**

Service permettant de créer des vehicules.

**URL**

    /api/vehicles

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
            name:"geoffrey",
            brand: "Peugeot",
            color: 'jaune',
            model: "508",
            type: "break",
            year: "2016",
            price: "20 000",
            statut: "stock",
            image: [image encode base64, image encode base64]
     }
    ```

**Response:**
- **Success Response:**

    - **Code:** 200 <br />
      **Content:**

    ```json
     {
        message: "Véhicule ajouté avec succès",
        code: "VC4",
     }
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body

    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'VC1'
        }
    ```
**OR**
- **Code:** 500 Internal Server Error  <br />

    - **Content:**
  ```json
        {
          error: "Problème lors de l'upload de(s) image(s)",
          code: "VC2",
        }
  ```
**OR**
- **Code:**  500 Internal Server Error <br />

    - **Content:**
  ```json
        {
            message: "Impossible de créer le véhicule",
            code: "VC3",
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


**Exemple Axios:**
  ```json
      const url = "http://localhost:4000/api/vehicles";
      const token=[access_token]
    
      const formData = {
          name:"geoffrey 5",
          brand: "Peugeot 5",
          color: 'jaune',
          model: "508",
          type: "break",
          year: "2016",
          price: "20000",
          statut: "stock",
          image: [data_image_base64, data_image_base64, data_image_base64]
      }

      axios.post(url, formData, {
        headers: {
        'Authorization': token
        },
      }).then((res) => {
          console.log(res);
      });
  ```




