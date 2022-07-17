# REST API PROJET_TEAM 

Déscription de toutes les fonctionnalités de notre API REST avec tous les paramètres nécessaires et tous les retours

## Point d'entrée

Point d'entrée pour authentification

- [Login](users/login.md) : `POST /api/users/login`

## Services nécessitant une authentification

Services nécessitant qu'un jeton valide soit inclus dans l'en-tête de la demande. Le jeton est acquis à partir de l'authentification 'login'

**USERS:**

<u>Liste des profils utilisateurs :</u> "admin", "patron", "client", "commercial", "magasinier"

- [Create User](users/create.md) : `POST /api/users`
- [Update User](users/create.md) : `PUT /api/users/:id`
- [Find All User](users/find-all.md) : `GET /api/users`
- [Delete User](users/delete.md) : `DELETE /api/users/:id`
- [Find By Id](users/find-by-id.md) : `GET /api/users/:id`

**VEHICLES:**
- [Create Vehicle](vehicles/create.md) : `POST /api/vehicles`
- [Update Vehicle](vehicles/update.md) : `PUT /api/vehicles/:id`
- [Find All Vehicle](vehicles/find-all.md) : `GET /api/vehicles/`
- [Delete Vehicle](vehicles/delete.md) : `DELETE /api/vehicles/:id`
- [Find By Id](vehicles/find-by-id.md) : `GET /api/vehicles/:id`

**CUSTOMER:**


