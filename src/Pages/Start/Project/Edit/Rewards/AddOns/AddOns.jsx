import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewAddOns from "./NewAddOns/NewAddOns";

const AddOns = () => {
  const [newaddon,setnewaddon] = useState(false)
  return (
    <>

    {!newaddon && (

      <Box mt={"30px"} textAlign={"start"}>
        <Flex justifyContent={"space-between"}>
          <Text>
          Add-ons are optional rewards backers can add to their pledges—accessories, game <br/> expansion packs, movie posters, copies of an earlier publication—that complement <br/> their chosen reward tier.
          </Text>
          <Button
          onClick={()=>setnewaddon(true)}
            width={"170px"}
            colorScheme="orange"
            fontSize={"17px"}
            fontWeight={500}
            size={"lg"}
            
          >
            <FaPlus size={"15px"} />
       New add-on
          </Button>
        </Flex>

        <Text
          mt={"20px"}
          fontSize={""}
          fontWeight={""}
          color={"orange"}
          textDecoration={"underline"}
        >
          Learn about creating and managing rewards
        </Text>
      </Box>

    )}

    {newaddon && (
<NewAddOns/>
    )}
    </>
  );
};

export default AddOns;
