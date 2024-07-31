import express from "express";
import { getSimilarTvShows, getTrendingTvShow, getTvShowDetails, getTvShowsByCategoryName, getTvShowTrailer } from "../controllers/search.controller";


const searchRoutes = express.Router();

searchRoutes.get("/trending", getTrendingTvShow);
searchRoutes.get("/:tvShowId/trailer", getTvShowTrailer);
searchRoutes.get("/:tvShowId/details", getTvShowDetails);
searchRoutes.get("/:tvShowId/similar", getSimilarTvShows);
searchRoutes.get("/:categoryName", getTvShowsByCategoryName);

export { searchRoutes };
