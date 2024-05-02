// Server

import AppRoutes from './routes/index';

const express = require('express');

const app = express();
const port = 1245;

app.use('/', AppRoutes);
app.use('/students', AppRoutes);
app.use('/students/:major', AppRoutes);
app.listen(port);

export default app;
