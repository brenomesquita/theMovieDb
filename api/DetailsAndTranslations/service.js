const { badRequest, conflict, notFound } = require('../../Errors ');
const schema = require('./schema');

const verifyInt = (value) => {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return badRequest('Invalid entries. Try again.');
};

const getMovieFromApiService = (API_KEY, id, movieApi) => {
  verifyInt(id);
  return movieApi(API_KEY, id);
};

const InserIntoDbService = (model) => async (movieObject) => {
  const my = await schema.validate(movieObject);
  if (my.error !== undefined) return badRequest('Invalid entries. Try again.');
  const modelResponse = await model.InserIntoDbModel(movieObject);
  if (modelResponse.code === 11000) return conflict('Value already exists!!');
  return modelResponse.ops[0];
};

const getMovieFromDbService = (model) => async (id) => {
  const idInteger = verifyInt(id);
  const modelResponse = await model.findMovieModel(idInteger);
  if (modelResponse.length === 0) return notFound('Value don\'t exists!!');
  return modelResponse;
};

const Service = (model) => ({
  getMovieFromApiService,
  InserIntoDbService: InserIntoDbService(model),
  getMovieFromDbService: getMovieFromDbService(model),
});

module.exports = { Service };
