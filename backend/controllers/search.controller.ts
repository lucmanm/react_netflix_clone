import { Request, Response } from "express";
import { statusResponse } from "../lib/controller-response";
import { getMovies } from "../services/tmdb.service";
import { User } from "../models/user.model";

type ExtendRequest = Request & {
  user?: typeof User
}
export async function searchPersonMovie(req: ExtendRequest, res: Response) {
  try {
    const { query } = req.params
    const response = await getMovies(`/search/person?query=${query}&include_adult=false&language=en-US&page=1`)

    if (response.results.length === 0) {
      return res.status(404).send(null)
    }

    //TODO: typescript error
    // @ts-ignore

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistroy: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: Date.now()
        }
      }
    })

    res.status(200).json({ success: true, result: response.results })

  } catch (error) {
    console.log("ERROR_CONTROLLER_SEARCH_PERSON_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_SEARCH_PERSON_MOVIE")
  }
}

export async function searchMovie(req: ExtendRequest, res: Response) {
  try {

    const { query } = req.params
    const response = await getMovies(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)

    if (response.results.length === 0) {
      return res.status(404).send(null)
    }
    //TODO: typescript error
    // @ts-ignore
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistroy: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "movie",
          createdAt: Date.now()
        }
      }
    })

    res.status(200).json({ success: true, result: response.results })

  } catch (error) {
    console.log("ERROR_CONTROLLER_SEARCH_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_SEARCH_MOVIE")
  }
}

export async function searchTv(req: ExtendRequest, res: Response) {
  try {

    const { query } = req.params
    const response = await getMovies(`/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)

    if (response.results.length === 0) {
      return res.status(404).send(null)
    }
    //TODO: typescript error
    // @ts-ignore
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistroy: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].name,
          searchType: "tvshow",
          createdAt: Date.now()
        }
      }
    })

    res.status(200).json({ success: true, result: response.results })

  } catch (error) {
    console.log("ERROR_CONTROLLER_SEARCH_MOVIE", error);
    statusResponse(res, 400, "ERROR_CONTROLLER_SEARCH_MOVIE")
  }
}

export async function getHistory(req: ExtendRequest, res: Response) {
  try {
    //TODO: typescript error
    // @ts-ignore
    res.status(200).json({ success: true, content: req.user.searchHistroy })

  } catch (error) {
    console.log("INTERNAL_SERVER_ERRPR", error);
    statusResponse(res, 500, "INTERNAL_SERVER_ERRPR")
  }
}
export async function deleteMovieFromHistory(req: ExtendRequest, res: Response) {
  try {
    const { id } = req.params
    //TODO: typescript error
    // @ts-ignore
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistroy: { id }
      }
    })
    res.status(200).json({ success: true, message: "Removed Succsfully" })

  } catch (error) {
    console.log("INTERNAL_SERVER_ERRPR", error);
    statusResponse(res, 500, "INTERNAL_SERVER_ERRPR")
  }
}
