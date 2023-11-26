const express = require('express');

const app = express();
const port = 12345;

app.get('/', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plaon');
  response.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
