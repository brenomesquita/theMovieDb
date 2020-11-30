require('dotenv').config();

const express = require('express');
const routes = require('./api/routes');

const app = express();
app.use(express.json());

const { SERVER_PORT, DB_HOST, API_KEY } = process.env;

routes(app, API_KEY);

// internal server error midware
app.use((err, _req, res, _next) => res.status(500).json({ message: 'internal error' }));

app.listen(SERVER_PORT, DB_HOST, () => console.log(`Port: ${SERVER_PORT}, Host: ${DB_HOST}`));
