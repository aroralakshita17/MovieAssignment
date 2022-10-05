import { Center, Container, HStack, VStack } from "native-base";
import { useState, useEffect } from "react";
import { FormControl } from "native-base";
import { getSearch } from '../../services/search'
import Form from '../forms/Form'
import Load from "../layouts/Load";
import MoviesList from "../lists/MoviesList";
import DropdownSearch from "./DropdownSearch";

const MoviesListContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState(null)
    const [movie, setMovie] = useState([])
    const [dropValue, setDropValue] = useState("")



    //to fetch the movies
    const fetchMovies = () => {

        getSearch(name, dropValue).then(movie => {
            setMovie(movie)
        })

    }

    const handleChange = name => {
        setName(name)
    }



    const handleDropdownValue = (value) => {

        setDropValue(value)
    }

    // console.log('description',name)
    return (
        <Container>
            <Center px={2}>


                <Form fetchMovies={fetchMovies} onInputChange={handleChange} />

                <DropdownSearch handleDropdownValue={handleDropdownValue} />
                {isLoading ? <Load></Load> : <MoviesList movie={movie} navigation={navigation}></MoviesList>}


            </Center>
        </Container>
    )
}
export default MoviesListContainer