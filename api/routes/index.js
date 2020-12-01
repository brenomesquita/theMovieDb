const { Model } = require('../DetailsAndTranslations/model');
const { Service } = require('../DetailsAndTranslations/service');
const { Controller } = require('../DetailsAndTranslations/controller');
const verifyAuthentication = require('../../ Middlewares/verifyAuthentication');

const connection = require('../DetailsAndTranslations/connection');

module.exports = async (app, API_KEY, movieApi, DB_URL) => {
  // connection with mongoDb.
  const db = await connection(DB_URL);
  // dependency inversion.
  const model = Model(db);
  const service = Service(model);
  const controller = Controller(service, API_KEY, movieApi);

  app.get('/:id', controller.getMovieFromApiController);
  app.post('/:id', verifyAuthentication, controller.insertIntoDbController);
  app.get('/database/:id', controller.getMovieFromDbController);

  // error Middleware.
  app.use((err, _req, res, _next) => {
    const { message, status } = err;
    if (status < 500) return res.status(status).json({ message });
    return res.status(500).send('Something broke!');
  });
};
