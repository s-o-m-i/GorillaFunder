import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const SubNavbar = () => {
  const fontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const padding = useBreakpointValue({ base: "2vh 5vw", md: "2vh 12vw" });
  const handleUrl = (url) => {
    console.log(url);
  }

  return (
    <Flex
      w="100%"
      p={padding}
      justifyContent="space-evenly"
      borderWidth="1px"
      fontSize={fontSize}
      flexDirection={flexDirection}
      flexWrap="wrap"
    >
      <Link
         to={{
          pathname: "/films",
          search: `?category=Action`,
        }}
        onClick={() => {
          handleUrl("Action");
        }}
      >
        Action
      </Link>
      <Link
         to={{
    pathname: "/films",
    search: `?category=Animation`,
  }}
        onClick={() => {
          handleUrl("Animation");
        }}
      >
        Animation
      </Link>
      <Link
         to={{
    pathname: "/films",
    search: `?category=Comedy`,
  }}
        onClick={() => {
          handleUrl("Comedy");
        }}
      >
        Comedy
      </Link>
      <Link
         to={{
    pathname: "/films",
    search: `?category=Documentary`,
  }}
        onClick={() => {
          handleUrl("Documentary");
        }}
      >
        Documentary
      </Link>
      <Link
         to={{
    pathname: "/films",
    search: `?category=Drama`,
  }}
        onClick={() => {
          handleUrl("Drama");
        }}
      >
        Drama
      </Link>
      <Link
         to={{
    pathname: "/films",
    search: `?category=Experimental`,
  }}
        onClick={() => {
          handleUrl("Experimental");
        }}
      >
        Experimental
      </Link>
      <Link
         to={{
    pathname: "/films",
    search: `?category=Family`,
  }}
        onClick={() => {
          handleUrl("Family");
        }}
      >
        Family
      </Link>
      {/* <Link
         to={{
    pathname: "/films",
    search: `?category=More`,
  }}
        onClick={() => {
          handleUrl("More");
        }}
      >
        More
      </Link> */}

      <Menu isLazy>
  <MenuButton
  
    // px={4}
    // py={2}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    // _hover={{ bg: 'gray.400' }}
    // _expanded={{ bg: 'blue.400' }}
    // _focus={{ boxShadow: 'outline' }}
  >
      More
    {/* <ChevronDownIcon /> */}
  </MenuButton>
  <MenuList minWidth='100vw'>
  <Flex alignItems={"center"} px={"60px"} justifyContent={"space-around"}>
  <Box>
    <MenuItem>Comics</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Crafts</MenuItem>
    {/* <MenuDivider /> */}
    <MenuItem>Journalism</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Technology</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Theater</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Photography</MenuItem>
    </Box>
  <Box>
    <MenuItem>Comics</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Crafts</MenuItem>
    {/* <MenuDivider /> */}
    <MenuItem>Journalism</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Technology</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Theater</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Photography</MenuItem>
    </Box>
  <Box>
    <MenuItem>Comics</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Crafts</MenuItem>
    {/* <MenuDivider /> */}
    <MenuItem>Journalism</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Technology</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Theater</MenuItem>
     {/* <MenuDivider /> */}
    <MenuItem>Photography</MenuItem>
    </Box>
    </Flex>
  </MenuList>
</Menu>

    </Flex>
  );
};

export default SubNavbar;
