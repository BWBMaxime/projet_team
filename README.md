# projet_team

Projet 2022_M05 | Gestion de ventes de véhicules

## REST API for projet_team

### API URL

- Get all users

`GET` /users

```bash
    curl "http://localhost:3000/users"
    # This will return an array
```

Return:

```json
[
  {
    "_id": "{id}",
    "login": "user1",
    "password": "pass1",
    "lastName": "Lastname1",
    "firstName": "Firstname1",
    "profil": "role1",
    "active": true
  }
]
```

- Get user by id

`GET` /users/{id}

```bash
    curl "http://localhost:3000/users/{id}"
    # This will return an object
```

Return:

```json
{
  "_id": "{id}",
  "login": "user1",
  "password": "pass1",
  "lastName": "Lastname1",
  "firstName": "Firstname1",
  "profil": "role1",
  "active": true
}
```

- Create user

`POST` /users

```bash
    curl -X POST -H "Content-Type: application/json" -d '{ "login": "user1", "password": "pass1", "lastName": "Lastname1", "firstName": "Firstname1", "profil": "role1", "active": true}' http://localhost:3000/users
    # This will create a user and return his id
```

Return:

```json
{ "acknowledged": true, "insertedId": "{new Id}" }
```

- Update user

`PUT` /users/{id}

```bash
    curl -X PUT -H "Content-Type: application/json" -d '{ "login": "user1", "password": "pass1", "lastName": "Lastname1", "firstName": "Firstname1", "profil": "role1", "active": true}' http://localhost:3000/users/{id}
    # This will create a user and return his id
```

Return:

```json
    User 62d02fb3509a8a74ee8ee2e6 updated
```

- Delete user
  DELETE

```bash
    curl -X DELETE "http://localhost:3000/users/{id}"
    # This will delete an object
```

Return:

```json
    User deleted
```
