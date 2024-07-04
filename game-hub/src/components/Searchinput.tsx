import { Input, InputGroup, InputLeftElement, filter } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Searchinput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search Games.." variant="filled" />
    </InputGroup>
  );
};

export default Searchinput;
