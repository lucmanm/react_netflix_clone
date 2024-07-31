import { Request, Response } from "express";
import { statusResponse } from "../lib/controller-response";
import { getMovies } from "../services/tmdb.service";

export async function getTrendingTvShow(req: Request, res: Response) {
  try {
    const data = await getMovies("/trending/tv/day?language=en-US")
    res.json({
      success: true,
      results: data.results
    })
  } catch (error) {
    console.log("ERROR_CONTROLLER_TRENDING_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_TRENDING_MOVIE")
  }
}

export async function getTvShowTrailer(req: Request, res: Response) {
  const { tvShowId } = req.params

  try {
    const data = await getMovies(`/tv/${tvShowId}/videos?language=en-US`)

    res.json({
      success: true,
      result: data.results
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_TRAILER_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_TRAILER_MOVIE")
  }
}

export async function getTvShowDetails(req: Request, res: Response) {
  const { tvShowId } = req.params

  try {
    const data = await getMovies(`/tv/${tvShowId}?language=en-US`)
    res.json({
      success: true,
      result: data
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_MOVIE_DETAILS", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_MOVIE_DETAILS")
  }
}

export async function getSimilarTvShows(req: Request, res: Response) {
  const { tvShowId } = req.params

  try {

    const data = await getMovies(`/tv/${tvShowId}/similar?language=en-US&page=1`)
    res.json({
      success: true,
      results: data.results
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_SIMILAR_MOVIES", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_SIMILAR_MOVIES")
  }
}

export async function getTvShowsByCategoryName(req: Request, res: Response) {
  const { categoryName } = req.params

  try {

    const data = await getMovies(`/tv/${categoryName}?language=en-US&page=1`)
    res.json({
      success: true,
      results: data.results
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_MOVIE_LISTS", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_MOVIE_LISTS")
  }
}