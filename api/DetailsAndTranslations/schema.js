const Joi = require('joi');

const schema = Joi.object({
  adult: Joi.boolean().allow(null).allow(''),
  backdrop_path: Joi.string().allow(null).allow(''),
  belongs_to_collection: Joi.object({
    id: Joi.number().allow(null).allow(''),
    name: Joi.string().allow(null).allow(''),
    poster_path: Joi.string().allow(null).allow(''),
    backdrop_path: Joi.string().allow(null).allow(''),
  }).allow(null),
  budget: Joi.number().allow(null).allow(''),
  genres: Joi.array().items({
    id: Joi.number().allow(null).allow(''),
    name: Joi.string().allow(null).allow(''),
  }),
  homepage: Joi.string().allow(null).allow(''),
  id: Joi.number().allow(null).allow(''),
  imdb_id: Joi.string().allow(null).allow(''),
  original_language: Joi.string().allow(null).allow(''),
  original_title: Joi.string().allow(null).allow(''),
  overview: Joi.string().allow(null).allow(''),
  popularity: Joi.number().allow(null).allow(''),
  poster_path: Joi.string().allow(null).allow(''),
  production_companies: Joi.array().items({
    id: Joi.number().allow(null).allow(''),
    logo_path: Joi.string().allow(null).allow(''),
    name: Joi.string().allow(null).allow(''),
    origin_country: Joi.string().allow(null).allow(''),
  }),
  production_countries: Joi.array().items({
    iso_3166_1: Joi.string().allow(null).allow(''),
    name: Joi.string().allow(null).allow(''),
  }),
  release_date: Joi.string().allow(null).allow(''),
  revenue: Joi.number().allow(null).allow(''),
  runtime: Joi.number().allow(null).allow(''),
  spoken_languages: Joi.array().items({
    english_name: Joi.string().allow(null).allow(''),
    iso_639_1: Joi.string().allow(null).allow(''),
    name: Joi.string().allow(null).allow(''),
  }),
  status: Joi.string().allow(null).allow(''),
  tagline: Joi.string().allow(null).allow(''),
  title: Joi.string().allow(null).allow(''),
  video: Joi.boolean().allow(null).allow(''),
  vote_average: Joi.number().allow(null).allow(''),
  vote_count: Joi.number().allow(null).allow(''),
  translations: Joi.array().items({
    iso_3166_1: Joi.string().allow(null).allow(''),
    iso_639_1: Joi.string().allow(null).allow(''),
    name: Joi.string().allow(null).allow(''),
    english_name: Joi.string().allow(null).allow(''),
    data: Joi.object({
      homepage: Joi.string().allow(null).allow(''),
      overview: Joi.string().allow(null).allow(''),
      runtime: Joi.number().allow(null).allow(''),
      tagline: Joi.string().allow(null).allow(''),
      title: Joi.string().allow(null).allow(''),
    }),
  }),
});

module.exports = schema;
