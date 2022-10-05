import { DefaultTheme } from "@react-navigation/native";
import axios from "axios";
import qs from "qs"
import { APP_KEY, BASE_URL } from "./api_config";


export const getTV = async filter => {
    //const url='https://api.themoviedb.org/3/search/movie?api_key=588ea67959e8108a6c7da127dea9de0b&language=en-US&page=1&include_adult=false'
    try {


        console.log(filter)

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${filter}?api_key=${APP_KEY}`)

        console.log('RESPONSE', response.data.results)
        const TV = response.data.results

        console.log(response.data.results)
        return TV
    }
    catch (error) {
        throw error
    }
}
