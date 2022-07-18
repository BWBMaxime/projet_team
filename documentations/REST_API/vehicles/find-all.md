## **Find all Vehicles**

Service permettant de récupérer tous les véhicules présents en BDD.

**URL**

    /api/vehicles

**Method:**

`GET`

**Auth required :**  OUI

**Required:**
- **Data Params (HEADER)**
    ```json
      Authorization:  [access_token]
    ```

**Response:**
- **Success Response:**

    - **Code:** 200 <br />
      **Content:**

    ```json
    [
      {
        "_id": "62d412491c81d900cbadd7dd",
        "brand": "Peugeot 2",
        "color": "bleu 2",
        "model": "508",
        "type": "break",
        "year": "2016",
        "price": "20000",
        "statut": "stock",
        "images": [
            "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAmADIDASIAAhEBAxEB/8QAGwAAAwEBAAMAAAAAAAAAAAAAAAUGBwgCAwT/xAAwEAACAQQBAwIDBgcAAAAAAAABAgMABAURIQYSQSIxE1FhFDJxgaGxFSNikcHR4f/EABkBAQADAQEAAAAAAAAAAAAAAAQBAwUCBv/EACgRAAIBAgIJBQAAAAAAAAAAAAECAAMRBBMSISIjMUFRUqEUFXGB4f/aAAwDAQACEQMRAD8A13LWSPLKh0Ib1Sh/pk1wf0/SpjG4a6LLL3xqVYhlIO9g6NXkkAurdoidE8qfkfBqEzHWeMxLzzP3yJ7uU0AWHB7fnsiulKqdqVFWcbIju4v0ltVx5i/mRsFfuAA0nJ/Gs4wN7N1nd3wgw9j/AAVGaJrmWMIw+Q2B7ne/3r7sz1J05lZYL9ku4L9F7IWYAoVblgQD77A/KnvSEuMiwqW+LdCDIzzjWiZG9yR+Q0fpVFdlZtRiKCPTU3X8ijqLCT3M1q1sYZJIGJZpvQ6k6HGuNcf31UR1/wBMSCylyV/NPcFNLpI0PYvgDj258DfNa3cajftulIBGg45BpJ1jNbNYQQpNEe9y59Q8f9NGZlQaZl6IajBOs5xF7YRgILaLS8DcfP7UVq5xkZJPaKKj19Hs8mI9tfv8ToCBgy870Ro6rEetOhsvZ4l0t7Y3irIp+JECwK93vocg8jj8a3GO3jgwFtd7PxJGI1vgjn/VI+oM9PibW0ktLUXMk8rJosR2gAnfFMdQ4BPKZ1Oo1Mm3Oc+ZnGXeLmWW+hlto37hEskZHPHA3zWmdB9N3Ngr3dxNGyXMCdoUnfvvf0Ip5lL6PM27SZpnsba0i+0GSGZkA3rfcde30pFj+ucPAMfjLq+jZ5UZIbuFu6NgDwG1yp0dA+dUYpbWIo12a4I4zwyVxfwZS6QzQMrfeik9Hf4Vkb2B+hGvrUZedTzXWQGPmxzRXAkSJI2TRZCD3E+NDg7q062dYbKFzqeJwWR4zv08c7HipEmOyc3jTJd3UoAVk9lGuAKoxNYHYtLsHQK7wn6jUY2y164lLeTvzRUJL1XIJXHYeGNFCyHmhnDrOgJc5dTY22tXZfhRfd0uj+dLs3cn4GMZi2gzHjzsAf5oorbJ1Tz44yH68glyN5aW1jIbdhG8nxS5HqQqeVHB4PnzUZ1RjIvsi22ORY8lBPC7XrHtaZZVYju0ONEeKKKMpOZb5iWG6vKroJZXxKYvIFZHSASpIm+FLEa587r2ZvBvAYba3eJBOwUMBzsnWzRRQq4Aqm0ZhnYpa8cR9D9OpGqtjRIygAu0z7b6nRooorjTbrIsJ//Z"
          ]
      },
      {
        "_id": "62d415792c7abb9a5d503395",
        "brand": "Peugeot 5",
        "color": "rouge",
        "model": "508",
        "type": "break",
        "year": "2016",
        "price": "20000",
        "statut": "stock",
        "images": []
      },
    ]
    ```
- **Error Response:**

    - **Code:** 401 UNAUTHORIZED <br />
      les paramètres ne sont pas envoyés dans le body

    - **Content:**
    ```json
        {
          error: "Accès refusé",
          code: 'VFA1'
        }
    ```
**OR**
- **Code:** 404 NOT FOUND   <br />

    - **Content:**
  ```json
        {
          error: "Impossible de récupérer les données du stock",
          code: 'VFA2'
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






