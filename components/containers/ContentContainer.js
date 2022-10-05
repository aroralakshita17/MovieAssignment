import { Box, Center } from "native-base"
import { Heading } from "native-base"
import { Image, Text } from "react-native-svg"

const ContentContainer = ({ navigation, route }) => {
    const { image, popularity, title, release_date, uri, overview } = route.params
    // console.log(popularity)
    // console.log(overview)
    // console.log(release_date)
    return (
        <Box>

            <Center>
                <Heading py={20}>
                    {title}
                </Heading>
            </Center>
            <Image alt={title} size='2xl' resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }}></Image>


            <Text >
                {overview}
            </Text>
            <Text>
                Popularity :{popularity}
            </Text>

            <Text>
                Release Date: {release_date}
            </Text>

        </Box>





    )

}

export default ContentContainer