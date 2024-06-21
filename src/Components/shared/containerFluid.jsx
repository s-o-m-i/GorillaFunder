import { Box } from "@chakra-ui/react";
import React from "react";

const FluidContainer = ({ children, style }) => {
  return (
    <Box
      maxWidth="100%"
      width="100%"
      mx="auto"
      sx={style}
      px={{ base: "2", sm: "4", md: "6" }} // Adjust padding as needed
    >
      {children}
    </Box>
  );
};

export default FluidContainer;
