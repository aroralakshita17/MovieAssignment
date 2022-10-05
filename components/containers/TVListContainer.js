import { Center, Container } from "native-base";
import { useState, useEffect } from "react";
import { FormControl } from "native-base";
import { getMovies } from '../../services/movies'
import Form from '../forms/Form'
import Load from "../layouts/Load";
import DropdownTV from "./DropdownTV";
import MoviesList from "../lists/MoviesList";
import TVContainer from "./TVContainer";
import { getTV } from "../../services/tv";

const TVListContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState(null)
    const [movie, setMovie] = useState([])
    const [dropValue, setDropValue] = useState("")


    useEffect(() => {


        getTV(dropValue).then(movie => {
            setMovie(movie)

        })
    }
        , [dropValue])

    const handleChange = name => {
        setName(name)
    }



    const handleValue = (value) => {
        setDropValue(value)
    }

    // console.log('description',name)
    return (
        <Container>
            <Center px={2}>


                <DropdownTV handleValue={handleValue} />
                {isLoading ? <Load></Load> : <MoviesList movie={movie} navigation={navigation}></MoviesList>}

            </Center>
        </Container>
    )
}
export default TVListContainer