## **Login**

Retourne un JWT (json web token)

 **URL**

  /api/login

 **Method:**

  `POST`

**Auth required**

  NON

  **Required:**


- **Data Params**
 
```json
{
  login: "login",
  password: "password"
}
```

- **Success Response:**

    - **Code:** 200 <br />
      **Content:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc5MDIxMDMsImV4cCI6MTY1NzkxMjkwM30.5JP9wLbUfXLDj988Gm-dwOyOjpB6BFKcE4f0IKh8T8w",
  "lastName": "dsfsdfsdf",
  "firstName": "zerzerzer",
  "profil": "admin"
}
```
- **Error Response:**

    - **Code:** 404 NOT FOUND <br />
      **Content:** 
```json
{
error: "Impossible de trouver l’utilisateur",
code: 'UL1'
}
```

  OR

  - **Code:** 401 UNAUTHORIZED <br />
```json
{
  error: "Votre compte n'est pas activé",
  code: 'UL2'
}
```
OR

- **Code:** 401 UNAUTHORIZED <br />
```json
{
  error: "Login et/ou mot de passe invalide",
  code: 'UL3'
}
```
OR

- **Code:** 401 UNAUTHORIZED <br />
```json
{
  error: "Login et/ou mot de passe invalide",
  code: 'UL4'
}
```


