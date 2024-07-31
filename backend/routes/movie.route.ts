import express from "express";
import { getMovieByCategoryName, getMovieDetails, getMovieTrailer, getSimilarMovies, getTrendingMovies } from "../controllers/movie.controller";


const movieRoutes = express.Router();

movieRoutes.get("/trending", getTrendingMovies);
movieRoutes.get("/:movieId/trailer", getMovieTrailer);
movieRoutes.get("/:movieId/details", getMovieDetails);
movieRoutes.get("/:movieId/similar", getSimilarMovies);
movieRoutes.get("/:categoryName", getMovieByCategoryName);

export { movieRoutes };
