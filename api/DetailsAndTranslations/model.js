const InserIntoDbModel = (db) => (movieObject) => db
  .collection('MyMovieDb').insertOne(movieObject).catch((err) => err);

const findMovieModel = (db) => (id) => db
  .collection('MyMovieDb').find({ id }).toArray();

const Model = (db) => ({
  InserIntoDbModel: InserIntoDbModel(db),
  findMovieModel: findMovieModel(db),
});

module.exports = { Model };
