## **Show all Users**

Returns json data about a every users.

- **URL**

  /users

- **Method:**

  `GET`

- **Auth required**

  YES

- **URL Params**

  **Required:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

```json
[
  {
    "login": "user1",
    "password": "pass1",
    "lastName": "Lastname1",
    "firstName": "Firstname1",
    "profil": "role1",
    "active": true
  },
  {
    "login": "user2",
    "password": "pass2",
    "lastName": "Lastname2",
    "firstName": "Firstname2",
    "profil": "role2",
    "active": true
  }
]
```

- **Error Response:**

  - **Code:** 500 NOT FOUND <br />
    **Content:** `{ error : "Unable to fetch users data" }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

- **Sample Call:**

```javascript
axios.get('/users')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
# This will return an array
```
