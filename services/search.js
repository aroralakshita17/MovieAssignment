import { DefaultTheme } from "@react-navigation/native";
import axios from "axios";
import qs from "qs"
import { APP_KEY, BASE_URL } from "./api_config";


export const getSearch = async (moviename, filter) => {

    try {

        console.log(moviename, filter)


        const response = await axios.get(`https://api.themoviedb.org/3/search/${filter}?api_key=${APP_KEY}&query=${moviename}`)

        console.log('RESPONSE', response)
        const movies = response.data.results
        return movies
    }
    catch (error) {
        throw error
    }
}
