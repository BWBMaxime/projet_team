## **Récupérer le client par id**

Service permettant de récupérer les informations d"un client.

**URL**

/api/customers/:id

**Method:**

`GET`

**Auth required :** OUI

**Required:**

- **Data Params (HEADER)**

```json
  "Authorization":  "[access_token]"
```

**Response:**

- **Success Response:**

- **Code:** 200 <br />
  **Content:**

```json
{
  "_id": "_id",
  "lastName": "LastName",
  "firstName": "FirstName",
  "email": "contact@customer.fr",
  "address": {
    "zipCode": 00000,
    "city": "City"
  },
  "mobile": "0612345678"
}
```

```json

```

- **Error Response:**

- **Code:** 401 UNAUTHORIZED <br />
  Les paramètres ne sont pas envoyés dans le body

- **Content:**

```json
{
  "error": "Accès refusé",
  "code": "CUBI1"
}
```

**OR**

- **Code:** 404 NOT FOUND <br />

      - **Content:**

  ```json
  {
    "error": "Impossible de trouver le client demandé.",
    "code": "CUBI2"
  }
  ```

  **OR**

- **Code:** 401 Unauthorized <br />

  - **Content:**

  ```json
  {
    "error": "Besoin d’un jeton",
    "code": "JC1"
  }
  ```

**OR**

- **Code:** 401 Unauthorized <br />

  - **Content:**

  ```json
  {
    "error": "Jeton défectueux",
    "code": "JC2"
  }
  ```
