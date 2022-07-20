## **Création client**

Service permettant de créer des clients.

**URL**

/api/customers

**Method:**

`POST`

**Auth required :** OUI

**Required:**

- **Data Params (HEADER)**

```json
  "Authorization":  "[access_token]"
```

- **Data Params (BODY)**

```json
{
  "lastName": "LastName",
  "firstName": "FirstName",
  "email": "em@il.fr",
  "address": {
    "zipCode": 00000,
    "city": "City"
  },
  "mobile": 0000000000
}
```

**Response:**

- **Success Response:**

- **Code:** 200 <br />
  **Content:**

```json
{
  "message": "Client ajouté avec succès",
  "code": "CUC4"
}
```

- **Error Response:**

- **Code:** 401 UNAUTHORIZED <br />
  Les paramètres ne sont pas envoyés dans le body

- **Content:**

```json
{
  "error": "Accès refusé",
  "code": "CUC1"
}
```

**OR**

- **Code:** 500 Internal Server Error <br />

- **Content:**

```json
{
  "message": "Impossible de créer le client",
  "code": "CUC3"
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

**Exemple Axios:**

```js
const url = "http://localhost:4000/api/customers";
const token = [access_token];

const formData = {
  lastName: "LastName",
  firstName: "FirstName",
  email: "em@il.fr"
  address: {
    zipCode: 00000,
    city: "City",
  },
  mobile: 0000000000,
};

axios
  .post(url, formData, {
    headers: {
      Authorization: token,
    },
  })
  .then((res) => {
    console.log(res);
  });
```
