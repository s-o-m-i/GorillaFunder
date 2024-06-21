import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { RemindMeModal } from "../../../../Components/RemindMeModal/RemindMeModal";

const FAQ = () => {
  return (
    <>
      <Box mb={"100px"} textAlign={"start"}>
        <Heading mt={"30px"} fontSize={"2xl"} fontWeight={"normal"}>Frequently Asked Questions</Heading>
        <Text mt={"20px"}>
          Looks like there aren't any frequently asked questions yet. Ask the
          project creator directly.
        </Text>
        <RemindMeModal faq={"faq"}/>
        
      </Box>
    </>
  );
};

export default FAQ;
