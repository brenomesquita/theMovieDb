const axios = require('axios');

module.exports = async (API_KEY, movieId) => {
  const { data: movieResponse } = await axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const { data: translationsResponse } = await axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${API_KEY}`);
  return { ...movieResponse, ...translationsResponse };
};
