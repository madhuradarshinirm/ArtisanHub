// api/index.js

// This function handles incoming HTTP requests
module.exports = (request, response) => {
  response.status(200).send('Hello, this is my API!');
};