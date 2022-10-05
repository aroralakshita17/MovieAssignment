import { NavigationContainer } from "@react-navigation/native"
import { Box, Button, Center, Divider, Heading, Image, Text, HStack, VStack } from "native-base"
const MovieCard = props => {
    const { navigation, image, popularity, title, release_date, uri, overview } = props

    return (
        <Box mb={10} my={10}>
            <HStack space={0} >


                <Box>
                    <Image alt={title} size='xl' resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }}></Image>
                </Box>
                <VStack space={0}>

                    <Heading size='sm'>
                        {title}
                    </Heading>
                    <Text>
                        Popularity :{popularity}
                    </Text>
                    <Text>
                        Release Date: {release_date}
                    </Text>



                    <Box>

                        <Button variant='ghost' backgroundColor={"#87CEEB"} color={"#fff"} onPress={
                            () => { navigation.navigate('Content', { image, popularity, title, release_date, uri, overview }) }

                        }><Text color={"#fff"}>More Details</Text></Button>
                    </Box>
                </VStack>

            </HStack>
        </Box>

    )
}
export default MovieCard