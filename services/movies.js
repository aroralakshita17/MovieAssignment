import { DefaultTheme } from "@react-navigation/native";
import axios from "axios";
import qs from "qs"
import { APP_KEY, BASE_URL } from "./api_config";
export const getMovies = async (filter) => {

    try {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${filter}?api_key=${APP_KEY}`)

        console.log('RESPONSE', response.data.results)
        const movies = response.data.results
        return movies
    }
    catch (error) {
        throw error
    }
}
