const axios = require('axios');
const { notFound } = require('../Errors ');

module.exports = async (API_KEY, movieId) => {
  const { data: movieResponse } = await axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    .catch((err) => err);
  if (!movieResponse) return notFound('Not Found');
  const { data: translationsResponse } = await axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${API_KEY}`);
  return { ...movieResponse, ...translationsResponse };
};
