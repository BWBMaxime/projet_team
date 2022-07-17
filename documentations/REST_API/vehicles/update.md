## **Update Vehicles**

Service permettant de mettre à jour un vehicules.

**URL**

    /api/vehicles/:id

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
        message: "Les données du véhicule ont été mis à jour avec succès.",
        code: "VU4"
     }
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body

    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'VU1'
        }
    ```
**OR**
- **Code:** 500 Internal Server Error  <br />

    - **Content:**
  ```json
        {
          error: "Problème lors de l'upload de(s) image(s)",
          code: "VU3",
        }
  ```
**OR**
- **Code:**  500 Internal Server Error <br />

    - **Content:**
  ```json
        {
            message: "Impossible de mettre à jour les données du véhicule.",
            code: "VU2",
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
      const url = "http://localhost:4000/api/vehicles/[id vehicule]";
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

      axios.put(url, formData, {
        headers: {
        'Authorization': token
        },
      }).then((res) => {
          console.log(res);
      });
  ```




