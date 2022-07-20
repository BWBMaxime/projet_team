## **Find all Customers**

Service permettant de récupérer tous les clients présents en BDD.

**URL**

/api/customers

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
[
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
  },
  {
    "_id": "_id",
    "lastName": "LastName2",
    "firstName": "FirstName2",
    "email": "contact2@customer.fr",
    "address": {
      "zipCode": 00001,
      "city": "City2"
    },
    "mobile": "0634567891"
  }
]
```

- **Error Response:**

- **Code:** 401 UNAUTHORIZED <br />
  Les paramètres ne sont pas envoyés dans le body

- **Content:**

```json
{
  "error": "Accès refusé",
  "code": "CUA1"
}
```

**OR**

- **Code:** 404 NOT FOUND <br />

  - **Content:**

  ```json
  {
    "error": "Impossible de récupérer les données clients",
    "code": "CUA2"
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
