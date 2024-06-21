import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { GoGift } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import RewardsTier from "./RewardsTier.jsx/RewardsTier";
import AddOns from "./AddOns/AddOns";
import Item from "./Item/Item";

const Rewards = ({project}) => {
  return (
    <>
    <Box mt={"30px"}>
      <Tabs>
        <TabList display="flex" flexDirection={["column", null, "row"]}>
          <Tab fontSize={"20px"}>
            <Box mr={"5px"} p={"7px"} borderRadius={"50%"} bg={"orange"}>
              <GoGift color="" size={"15px"} />
            </Box>
            Reward tiers
          </Tab>
          <Tab fontSize={"20px"}>
            <Box mr={"10px"}>
              <FaPlus size={"15px"} />
            </Box>
            Add-ons
          </Tab>
          <Tab fontSize={"20px"}>
            <Box mr={"10px"}>
              <TfiMenuAlt size={"15px"} />
            </Box>
            Items
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RewardsTier project={project}/>
          </TabPanel>
          <TabPanel>
          <AddOns/>
          </TabPanel>
          <TabPanel>
          <Item/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </>
  );
};

export default Rewards;
