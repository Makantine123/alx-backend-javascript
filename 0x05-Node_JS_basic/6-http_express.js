/* Script creates HTTP server using Nodes HHTP module */

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>
  `);
});

app.listen(port, () => {
});

module.exports = app;
