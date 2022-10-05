import { useState } from "react";
import { Select } from "native-base";
import { Center } from "native-base";
import { Box } from "native-base"
const DropdownSearch = (props) => {
  const { handleDropdownValue } = props
  const [filter, setFilter] = useState("multi");
  return <Center>
    <Box maxW="300">
      <Select selectedValue={filter} minWidth="200" _selectedItem={{
        bg: "teal.600",
        //   endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => {
        setFilter(itemValue)
        handleDropdownValue(itemValue)
      }}>
        <Select.Item label="movie" value="movie" />
        <Select.Item label="multi" value="multi" />
        <Select.Item label="tv" value="tv" />


      </Select>

    </Box>
  </Center>;
};
export default DropdownSearch