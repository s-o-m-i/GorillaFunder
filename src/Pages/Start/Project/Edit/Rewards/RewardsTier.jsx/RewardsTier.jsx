import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewReward from "./NewReward/NewReward";

const RewardsTier = ({project}) => {
    const [newreward,setnewreward] = useState(false)
  return (
    <>

    {!newreward && (
      <Box mt={"30px"} textAlign={"start"}>
        <Flex justifyContent={"space-between"}>
          <Text>
            Most creators offer 3-10 reward tiers, which can be physical items
            or special <br />
            experiences. Make sure to set reasonable backer expectations.
          </Text>
          <Button
          onClick={()=>setnewreward(true)}
            width={"170px"}
            colorScheme="orange"
            fontSize={"17px"}
            fontWeight={500}
            size={"lg"}
            
          >
            <FaPlus size={"15px"} />
            New Reward
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

    {newreward && <NewReward project={project}/>}
    </>
  );
};

export default RewardsTier;
