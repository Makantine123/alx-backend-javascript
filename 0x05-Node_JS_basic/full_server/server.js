// Server

const express = require('express');

const AppRoutes = require('./routes/index');

const app = express();
const port = 1245;

app.use(AppRoutes).listen((port), () => {
  console.log('Server Running');
});

module.exports = app;
