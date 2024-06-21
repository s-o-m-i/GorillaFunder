import { Flex, Heading,  Select, Text, Link, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import SubNavbar from "./SubNavbar";

const ABOUT = ["About us", "Our charter", "Stats", "Press", "Jobs"];

const SUPPORT = [
  "Help Center",
  "Our Rules",
  "Creator Resources",
  "Forward Funds",
  "Brand assets",
];

const MOREFROM = [
  "Newsletters",
  "GorillaFunder Magazine",
  "The Creative Independent",
  "The GorillaFunder Blog",
  "Mobile apps",
  "Research",
];

const subfooter = [
  "Trust & Safety",
  "Terms of Use",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility Statement",
  "CA Notice of Consent",
];

const Footer = () => {
  const flexDirFooter = useBreakpointValue({ base: "column", md: "row" });
  const paddingFooter = useBreakpointValue({ base: "5vh 12vw", md: "2vh 12vw" });
  const paddingLinks = useBreakpointValue({ base: "1vh 0", md: "1vh 0" });
  // const imageWidth = useBreakpointValue({ base: "10vw", md: "4vw" });
  const textFontSize = useBreakpointValue({ base: "xs", md: "sm" });

  return (
    <>
      <SubNavbar />
      <Flex
        w="100%"
        p={paddingFooter}
        justifyContent="space-evenly"
        textAlign="left"
        fontSize="sm"
        flexWrap="wrap"
        flexDirection={flexDirFooter}
      >
        <Flex flexDirection="column" m={paddingLinks}>
          <Heading as="h4" size="xs" m="1vh 0">
            ABOUT
          </Heading>
          {ABOUT?.map((ele) => (
            <Link to="/" key={ele} mb="1vh" fontSize={textFontSize}>
              {ele}
            </Link>
          ))}
        </Flex>
        <Flex flexDirection="column" m={paddingLinks}>
          <Heading as="h4" size="xs" m="1vh 0">
            SUPPORT
          </Heading>
          {SUPPORT?.map((ele) => (
            <Link to="/" key={ele} mb="1vh" fontSize={textFontSize}>
              {ele}
            </Link>
          ))}
        </Flex>
        <Flex flexDirection="column" m={paddingLinks}>
          <Heading as="h4" size="xs" m="1vh 0">
            MORE FROM GorillaFunder
          </Heading>
          {MOREFROM?.map((ele) => (
            <Link to="/" key={ele} mb="1vh" fontSize={textFontSize}>
              {ele}
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex
        w="100%"
        justifyContent="space-between"
        textAlign="left"
        alignItems="center"
        fontSize="sm"
        p={paddingFooter}
        flexDirection={flexDirFooter}
      >
        <Flex gap={useBreakpointValue({ base: "1vw", md: "2vw" })} p={paddingLinks}>
          {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/GorillaFunder-logo-k-color.svg/1796px-GorillaFunder-logo-k-color.svg.png"
            w={imageWidth}
            h="auto"
          /> */}
          <Text fontSize={textFontSize}>Gorilla Funder © {new Date().getFullYear()} </Text>
        </Flex>
        <Flex gap={useBreakpointValue({ base: "1vw", md: "2vw" })} p={paddingLinks}>
          <Select placeholder="English" w="auto" fontSize={textFontSize}>
            <option value="Spanish">Spanish</option>
            <option value="Chinese">Chinese</option>
            <option value="Deutsch">Deutsch</option>
          </Select>
          <Select placeholder="$ US Dollar (USD)" w="auto" fontSize={textFontSize}>
            <option value="EUR">€ Euro (EUR)</option>
            <option value="AUD">$ Australian Dollar (AUD)</option>
            <option value="GBP">£ Pound Sterling (GBP)</option>
            <option value="JPY">¥ Japanese Yen (JPY)</option>
          </Select>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        p={paddingFooter}
        justifyContent="space-evenly"
        borderWidth="1px"
        fontSize="sm"
        flexDirection={flexDirFooter}
      >
        {subfooter?.map((ele) => (
          <Link to="/" key={ele} mb={paddingLinks}>
            {ele}
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default Footer;
