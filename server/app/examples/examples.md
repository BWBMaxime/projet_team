# REST API PROJET_TEAM EXAMPLES

These examples describe all functionnalities of our REST API with all parameters needed and all returns

## Open Endpoints

Open endpoints require no Authentication.

- - [Login](users/login.md) : `POST /api/users/login`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from the Login view above.

### Users related

Each endpoint manipulates or displays information related to the User. Token is provided with the request:




- [Create User](users/create.md) : `GET /api/users`
<!--
- [Show user](users/getId.md) : `GET /api/users/:id`
- [Create user](users/post.md) : `POST /api/users`
- [Update user](users/put.md) : `PUT /api/users/:id`
- [Delete user](users/delete.md) : `DELETE /api/users/:id`
-->
