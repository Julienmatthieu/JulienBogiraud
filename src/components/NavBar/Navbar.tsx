import { HStack, Image } from "@chakra-ui/react";
import jmb from "../../assets/Jmbsmall.png";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={jmb} boxSize="60px" borderRadius={5}></Image>
      <SearchInput onSearch={() => console.log("Search")}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
