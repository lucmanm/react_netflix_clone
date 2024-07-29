import { error } from "console";
import { ENV_VARS } from "../config/envVariables";

export const getMovies = async (path: string | null) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`
        }
    };

    const response = await fetch(`${ENV_VARS.TMBD_DOMAIN_KEY}${path}`, options)

    if (!response.ok) {
        throw new Error("ERROR_FETCH_MOVIES")
    }
    return await response.json()
}