# API Documentation - '/books' Routes

This documentation provides information about the API routes for managing books. These routes allow you to perform CRUD (Create, Read, Update, Delete) operations on book resources.

## API Endpoints

1. Create a Book

- HTTP Method: POST

- Endpoint: /

- Request Body:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2023
}
```

- Response (HTTP 201 Created):

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2023
}
```

- Response (HTTP 400 Bad Request):

```json
{
  "error": "Send all required fields: title, author, publishedYear"
}
```

2. Get All Books

- HTTP Method: GET

- Endpoint: /

- Response (HTTP 200 OK):

```json
{
  "count": 3,
  "data": [
    {
      "_id": "1",
      "title": "Book Title 1",
      "author": "Author Name 1",
      "publishedYear": 2022
    },
    {
      "_id": "2",
      "title": "Book Title 2",
      "author": "Author Name 2",
      "publishedYear": 2021
    },
    {
      "_id": "3",
      "title": "Book Title 3",
      "author": "Author Name 3",
      "publishedYear": 2023
    }
  ]
}
```

3. Get a Book by ID

- HTTP Method: GET

- Endpoint: /:id

- Response (HTTP 200 OK):

```json
{
  "_id": "1",
  "title": "Book Title 1",
  "author": "Author Name 1",
  "publishedYear": 2022
}
```

- Response (HTTP 404 Not Found):

```json
{
  "error": "Book not found"
}
```

4. Update a Book by ID

- HTTP Method: PUT

- Endpoint: /:id

- Request Body:

```json
{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "publishedYear": 2023
}
```

- Response (HTTP 204 No Content):

```json
{
  "message": "Book updated successfully"
}
```

- Response (HTTP 400 Bad Request):

```json
{
  "error": "Send all required fields: title, author, publishedYear"
}
```

- Response (HTTP 404 Not Found):

```json
{
  "error": "Book not found"
}
```

5. Delete a Book by ID

- HTTP Method: DELETE

- Endpoint: /:id

- Response (HTTP 204 No Content):

```json
{
  "message": "Book deleted successfully"
}
```

- Response (HTTP 404 Not Found):

```json
{
  "error": "Book not found"
}
```

## Error Handling

If an error occurs during any operation, the API will respond with an HTTP 500 Internal Server Error along with an error message in the following format:

```json
{
  "error": "Error message"
}
```

## Conclusion

This API allows you to manage books, including creating, retrieving, updating, and deleting book resources.
