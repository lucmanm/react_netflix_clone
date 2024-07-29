import express from "express";
import { getMovieByCategoryName, getMovieDetails, getMovieTrailer, getSimilarMovies, getTrendingMovies } from "../controllers/movie.controller";


const router = express.Router();

router.get("/trending", getTrendingMovies);
router.get("/:movieId/trailer", getMovieTrailer);
router.get("/:movieId/details", getMovieDetails);
router.get("/:movieId/similar", getSimilarMovies);
router.get("/:categoryName", getMovieByCategoryName);

export default router;
