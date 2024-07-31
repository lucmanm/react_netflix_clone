import { Request, Response } from "express";
import { statusResponse } from "../lib/controller-response";
import { getMovies } from "../services/tmdb.service";

export async function getTrendingMovies(req: Request, res: Response) {
  try {
    const data = await getMovies("/trending/movie/day?language=en-US")
    res.json({
      success: true,
      results: data.results
    })
  } catch (error) {
    console.log("ERROR_CONTROLLER_TRENDING_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_TRENDING_MOVIE")
  }
}

export async function getMovieTrailer(req: Request, res: Response) {
  const { movieId } = req.params

  try {
    const data = await getMovies(`/movie/${movieId}/videos?language=en-US`)

    res.json({
      success: true,
      result: data.results
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_TRAILER_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_TRAILER_MOVIE")
  }
}

export async function getMovieDetails(req: Request, res: Response) {
  const { movieId } = req.params

  try {
    const data = await getMovies(`/movie/${movieId}?language=en-US`)
    res.json({
      success: true,
      result: data
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_MOVIE_DETAILS", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_MOVIE_DETAILS")
  }
}

export async function getSimilarMovies(req: Request, res: Response) {
  const { movieId } = req.params

  try {

    const data = await getMovies(`/movie/${movieId}/similar?language=en-US&page=1`)
    res.json({
      success: true,
      results: data.results
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_SIMILAR_MOVIES", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_SIMILAR_MOVIES")
  }
}

export async function getMovieByCategoryName(req: Request, res: Response) {
  const { categoryName } = req.params

  try {

    const data = await getMovies(`/movie/${categoryName}?language=en-US&page=1`)
    res.json({
      success: true,
      results: data.results
    })

  } catch (error) {
    console.log("ERROR_CONTROLLER_MOVIE_LISTS", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_MOVIE_LISTS")
  }
}