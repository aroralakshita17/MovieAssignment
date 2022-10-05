import { useState } from "react";
import { FormControl, HStack, Select } from "native-base";
import { Center } from "native-base";
import { Box } from "native-base"

const Dropdown = (props) => {
  const { handleValue } = props
  const [filter, setFilter] = useState("popular");


  return <Center>

    <Box maxW="300" mt={7} px={70}>


      <Select selectedValue={filter} minWidth="200" _selectedItem={{
        bg: "teal.600",
        //   endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => {
        setFilter(itemValue)
        handleValue(itemValue)
      }}>



        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />

      </Select>


    </Box>

  </Center>;
};
export default Dropdown