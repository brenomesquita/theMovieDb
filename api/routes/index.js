const movieApi = require('../../service/theMovieApi');

module.exports = (app, API_KEY) => {
  app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const movieObject = await movieApi(API_KEY, id);
    res.status(200).json(movieObject);
  });
  app.post('/', (_req, res) => {
    res.send('insert movie into db');
  });
};
