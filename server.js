require('dotenv').config();

const express = require('express');
const routes = require('./api/routes');
const movieApi = require('./service/theMovieApi');

const app = express();
app.use(express.json());

const { SERVER_PORT, DB_HOST, API_KEY, DB_URL } = process.env;

// injecting dependencies to routes folder.
routes(app, API_KEY, movieApi, DB_URL);

app.listen(SERVER_PORT, DB_HOST, () => console.log(`Port: ${SERVER_PORT}, Host: ${DB_HOST}`));
