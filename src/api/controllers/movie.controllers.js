const Movie = require("../models/movie.models");

const getMovie = async (req, res) => {
  try {
    const allMovie = await Movie.find();
    return res.status(200).json(allMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const allMovie = await Movie.find({ id: id });

    return res.status(200).json(allMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovie = async (req, res) => {
  try {
    console.log(req.body);
    const { title, director, genre, year, id } = req.body;
    const newMovie = new Movie({ title, director, genre, year, id });

    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMovie = async (req, res) => {
  try {
    const {id} = req.params;
    const putMovie = new Movie(req.body);
    putMovie._id = id;

    const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
    if (!updateMovie){
      return res.status(404).json({"message": "movie not found"});
    }

    return res.status(200).json(updateMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteMovie = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteMovie = await Movie.findByIdAndDelete(id);
    if (!deleteMovie){
      return res.status(404).json({"message": "movie not found"});
    }
    return res.status(200).json(deleteMovie);
  } catch (error) {
    
  }
  res.send("este es mi delete");
};

module.exports = { getMovie, postMovie, putMovie, deleteMovie, getMovieById };
