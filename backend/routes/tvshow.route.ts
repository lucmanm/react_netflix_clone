import express from "express";
import { getSimilarTvShows, getTrendingTvShow, getTvShowDetails, getTvShowsByCategoryName, getTvShowTrailer } from "../controllers/tvshow.controller";


const router = express.Router();

router.get("/trending", getTrendingTvShow);
router.get("/:tvShowId/trailer", getTvShowTrailer);
router.get("/:tvShowId/details", getTvShowDetails);
router.get("/:tvShowId/similar", getSimilarTvShows);
router.get("/:categoryName", getTvShowsByCategoryName);

export default router;
