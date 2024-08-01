import express from "express";
import { deleteMovieFromHistory, getHistory, searchMovie, searchPersonMovie, searchTv } from "../controllers/search.controller";


const searchRoutes = express.Router();

searchRoutes.get("/person/:query", searchPersonMovie);
searchRoutes.get("/movie/:query", searchMovie);
searchRoutes.get("/tvshow/:query", searchTv);

searchRoutes.get("/history", getHistory);
searchRoutes.delete("/history/:id", deleteMovieFromHistory);

export { searchRoutes };
