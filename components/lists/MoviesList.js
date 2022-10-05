import { FlatList } from "native-base"
import MovieCard from "../ListItems/MovieCard"

const MoviesList = props => {
        const { navigation, movie } = props
        return (
                <FlatList
                        data={movie}
                        renderItem={({ item }) => (
                                <MovieCard
                                        title={item.title}
                                        image={item.poster_path}

                                        url={item.url}
                                        release_date={item.release_date}
                                        popularity={item.popularity}
                                        navigation={navigation}
                                />



                                // ></MovieCard>
                        )}

                ></FlatList>
        )
}
export default MoviesList