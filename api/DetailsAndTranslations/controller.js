const getMovieFromApiController = (service, API_KEY, movieApi) => async (req, res, next) => {
  // Get movies information from api.
  // All users can get this information.
  const { id } = req.params;

  const movieObject = await service.getMovieFromApiService(API_KEY, id, movieApi);
  if (movieObject.error) return next(movieObject);

  return res.status(200).json(movieObject);
};

const insertIntoDbController = (service, API_KEY, movieApi) => async (req, res, next) => {
  // Insert movies information into the database.
  // Only allowed users should insert values into our db.
  const { id } = req.params;
  const movieObject = await service.getMovieFromApiService(API_KEY, id, movieApi);
  if (movieObject.error) return next(movieObject);

  const movieInserted = await service.InserIntoDbService(movieObject);
  if (movieInserted.error) return next(movieInserted);

  return res.status(200).json(movieInserted);
};

const getMovieFromDbController = (service) => async (req, res, next) => {
  // Get movies information From the database.
  const { id } = req.params;
  const databaseResponse = await service.getMovieFromDbService(id);
  if (databaseResponse.error) return next(databaseResponse);

  return res.status(200).json(databaseResponse);
};

const Controller = (service, API_KEY, movieApi) => ({
  getMovieFromApiController: getMovieFromApiController(service, API_KEY, movieApi),
  insertIntoDbController: insertIntoDbController(service, API_KEY, movieApi),
  getMovieFromDbController: getMovieFromDbController(service),
});

module.exports = { Controller };
