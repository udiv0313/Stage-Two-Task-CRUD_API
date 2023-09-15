# Stage Two Task CRUD API

## Express API with MongoDB

This is a simple Express.js API project that interacts with a MongoDB database to perform CRUD (Create, Read, Update, Delete) operations on a "Person" entity. Below, you'll find instructions on how to set up and use this API.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- MongoDB
- Postman or a similar API testing tool

## Getting Started

1. Clone this repository to your local machine.

2. Navigate to the project directory using your terminal.

3. Install the project dependencies by running the following command:

4. Create a `.env` file in the project root directory and configure the following environment variables:
- PORT = process.env.PORT || 3002
- MONGO_URL = your_mongodb_connection_string

Replace `your_mongodb_connection_string` with your MongoDB connection string.

5. Start the server by running:

 ```
 npm run dev
 ```
 
The API will be available at `http://localhost:3002`.

## API Endpoints

### 1. Create a new person

- **Endpoint**: `POST /api`
- **Request Body**: JSON object with the `name` property.
- **Example Request**:

```json
POST http://localhost:3002/api
{
 "name": "Victor Malik"
}
```

- **Response**: The newly created person object with an id.
- **Example**:

```Json
{
  "id": 1,
  "name": "Victor Malik"
}
```

### 2. Fetch details of a person by ID 
- **Endpoint**: GET /api/:id
- **Example**: 
```bash
GET http://localhost:3002/api/1
```
- **Response**:  The person object with the specified 'id'
- **Example**:

```Json
{
  "id": 1,
  "name": "Victor Malik"
}
```

### 3. Fetch details of a person by name 
- **Endpoint**: GET /api?name={name}
- **Example**: 
```bash
GET http://localhost:3002/api?name=John Doe

```

- **Response**:  The person object with the specified 'id'
- **Example**:

```Json
{
  "id": 1,
  "name": "Victor Malik"
}
```

### 4. Update details of an existing person by ID
- **ndpoint**: GET /api/:id
- **Request Body**: JSON object with the properties to be updated.
- **Example**: 

```json
PUT http://localhost:3002/api/1
{
  "name": "Updated Name"
}

```

- **Response**:  The updated person object
- **Example**:

```Json
{
  "id": 1,
  "name": "Updated Name"
}
```

### 5. Remove a person by ID

- **Endpoint**: DELETE /api/:id
- **Example**: 

```bash
Endpoint: DELETE /api/:id
```

- **Response**: Success Message.
- **Example**:

```Json
{
  "message": "Person deleted successfully"
}
```

## Error Handling

- If a requested person is not found, the API will return a 404 status code with an error message.
- If there are validation errors in the request, the API will return a 400 status code with details about the validation errors.
- If any other errors occur during the request processing, the API will return a 500 status code with an "Internal server error" message.

## Conclusion

This Express.js API provides basic functionality to manage "Person" entities in a MongoDB database. You can use the provided endpoints to create, retrieve, update, and delete person records. Make sure to configure the MongoDB connection string in the `.env` file before using the API. 
