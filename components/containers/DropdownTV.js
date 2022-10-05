import { useState } from "react";
import { Select } from "native-base";
import { Center } from "native-base";
import { FormControl } from "native-base";
import { Box } from "native-base"
const DropdownTV = (props) => {
  const { handleValue } = props
  const [filter, setFilter] = useState("popular");
  return <Center>
    <Box maxW="300" px={88} py={4} >
      <Select selectedValue={filter} minWidth="200" _selectedItem={{
        bg: "teal.600",
      }} mt={1} onValueChange={itemValue => {
        setFilter(itemValue)
        handleValue(itemValue)

        console.log(itemValue)
      }}>
        <Select.Item label="airing today" value="airing_today" />
        <Select.Item label="on the air" value="on_the_air" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />

      </Select>

    </Box>
  </Center>;
};
export default DropdownTV