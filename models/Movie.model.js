const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  //structure goes here
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
