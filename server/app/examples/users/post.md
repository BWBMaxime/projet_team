## **Create User**

Create user and returns last inserted id.

- **URL**

  /users

- **Method:**

  `POST`

- **Auth required**

  YES

- **URL Params**

  **Required:**

  None

- **Data Params**

```json
{
  "login": "user1",
  "password": "pass1",
  "lastName": "Lastname1",
  "firstName": "Firstname1",
  "profil": "role1",
  "active": true
}
```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "acknowledged": true, "insertedId": "{new Id}" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Unable to " }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

- **Sample Call:**

```javascript
axios.post('/users', {
  login: 'user1',
  password: 'pass1',
  lastName: 'Lastname1',
  firstName: 'Firstname1',
  profil: 'role1',
  active: true
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
# This will return an array
```
