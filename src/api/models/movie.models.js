const mongoose = require('mongoose');

// obtener esquema de mongoose.

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
title: {type: String, required: true},
director: {type: String, required: true},
year: {type: String, required: true},
genre: {type: String, required: true},
id: {type: String, required: true}

},{
    timestamps: true,
}
  
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;