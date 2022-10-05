import { Ionicons } from "@expo/vector-icons";
import { Button, Center, FormControl, HStack, Icon, Input, VStack } from "native-base";
import { useState } from "react";




const Form = props => {
    const { fetchMovies, onInputChange } = props

    const [formData, setData] = useState({})

    const onSubmit = () => {
        fetchMovies()
    }
    return (

        <VStack space={3} width='100%' px={8} py={4}>

            <FormControl isRequired />
            <Center>
                <FormControl.Label>Search Movie/TV show Name</FormControl.Label>
                <Input placeholder="i.e James Bond,CSI"
                    variant='filled'
                    bg='gray.200'
                    width='100%'
                    onChangeText={value => {
                        onInputChange(value)
                        setData({ ...formData, name: value })

                    }}
                    px={3}
                    InputLeftElement={<Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />}
                    />}
                />
            </Center>
            {/* <Dropdown /> */}
            <FormControl.Label>Choose Search Type</FormControl.Label>

            <HStack width='100%' space={2}>

                {/* <Dropdown /> */}
                <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>Search</Button>

            </HStack>
        </VStack>
    )
}

export default Form