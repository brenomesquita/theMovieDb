const { MongoClient } = require('mongodb');

const createUniqueIndex = (collection, field) => collection.createIndex(field, { unique: true });

module.exports = (DB_URL) =>
  MongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async (connection) => {
      const db = connection.db('theMovieDb');
      const myMovieDe = db.collection('MyMovieDb');
      await createUniqueIndex(myMovieDe, { id: 1 });
      return db;
    })
    .catch(() => {
      process.exit(1);
    });
