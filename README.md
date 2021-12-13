# APIRest with Nodejs, Express and mongoDB

En este ejemplo vamos a crear una api-rest para un crud de productos con autenticacion usando NODEJS, EXPRESS Y como base de datos MongoDB

## Getting started

As a `prerequisite` I need to have [NodeJS](https://nodejs.org) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) installed.

### 1. Download example and install dependencies

Download this example:

```
curl -L -o api-edge.tar.gz https://github.com/tenondecrpc/edge-api/zip/refs/heads/master
```

Install yarn dependencies:

```
cd api-edge
yarn install
```

<details><summary><strong>Alternative:</strong> Clone the entire repo</summary>

Clone this repository:

```
git clone https://github.com/Carlos199/api-edge.git
```

Install yarn dependencies:

```
cd api-edge
yarn install
```

</details>

### 2. Start the REST API server

```
yarn dev
```

The server is now running on `http://localhost:3000`. You can send the API requests implemented in `app.js`.

### 2. Create docker migrate

Run the following command to create your SQLite database file. This also creates the `User` table that is defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

![Screenshot](postman.png)

```
yarn docker-migrate
```

### 3. Testing the endpoints

The tests are located in the `__tests__` folder. In these you will find tests handled for cases if a same user is added twice and also to check if the users added are obtained correctly.

The tests can be run using:

```
yarn docker-test
```

## Documentation

The documentation is available in the `resources` folder, containing the files for postman and swagger
Example: [Swagger Doc](https://app.swaggerhub.com/apis-docs/tenondecrpc/edge-api/1.0.0)
