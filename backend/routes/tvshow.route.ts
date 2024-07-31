import express from "express";
import { getSimilarTvShows, getTrendingTvShow, getTvShowDetails, getTvShowsByCategoryName, getTvShowTrailer } from "../controllers/tvshow.controller";


const tvShowRoutes = express.Router();

tvShowRoutes.get("/trending", getTrendingTvShow);
tvShowRoutes.get("/:tvShowId/trailer", getTvShowTrailer);
tvShowRoutes.get("/:tvShowId/details", getTvShowDetails);
tvShowRoutes.get("/:tvShowId/similar", getSimilarTvShows);
tvShowRoutes.get("/:categoryName", getTvShowsByCategoryName);

export { tvShowRoutes };
