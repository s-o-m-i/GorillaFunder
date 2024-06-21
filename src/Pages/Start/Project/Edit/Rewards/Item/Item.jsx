import { Box, Button, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaImage } from "react-icons/fa";

const Item = () => {
const [addnewitem,setaddnewitem] = useState(false)
  return (
    <>
    {!addnewitem && (
      <Box mt={"30px"} textAlign={"start"}>
        <Flex justifyContent={"space-between"}>
          <Text>
            Including items in your rewards and add-ons makes it easy for
            backers to understand <br /> and compare your offerings. An item can
            be anything you plan to offer your backers.
            <br /> Some examples include playing cards, a digital copy of a
            book, a ticket to a play, or
            <br /> even a thank-you in your documentary.
          </Text>
          <Button
          onClick={()=>setaddnewitem(true)}
            width={"170px"}
            colorScheme="orange"
            fontSize={"17px"}
            fontWeight={500}
            size={"lg"}
            
          >
            <FaPlus size={"15px"} />
            New Item
          </Button>
        </Flex>

        <Text
          mt={"20px"}
          fontSize={""}
          fontWeight={""}
          color={"orange"}
          textDecoration={"underline"}
        >
          Learn about creating items
        </Text>

        <Flex p={"20px"} mt={"20px"} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"14px"} fontWeight={""} color={""}>
            DETAILS
          </Text>
          <Text fontSize={"14px"} fontWeight={""} color={""}>
            INCLUDED IN
          </Text>
          <Text fontSize={"14px"} fontWeight={""} color={""}>
            IMAGE
          </Text>
        </Flex>

<Box p={"20px"} border={"1px solid rgba(0,0,0,0.1)"} mt={"20px"}>
        <Flex  alignItems={"center"} justifyContent={"space-between"}>
<Text>Item</Text>
<Box>
<Text fontSize={""} mt={""}>Rewards</Text>
<Text fontSize={""} mt={"10px"}>Add-ons</Text>

</Box>
<Text>Image</Text>
        </Flex>

<Flex mt={"40px "} borderTop={"1px solid rgba(0,0,0,0.1)"} justifyContent={"end"}>
<Flex alignItems={"center"} gap={"20px"}>
  <Text fontSize={""}>Edit</Text>
  <Text fontSize={""}>Delete</Text>
</Flex>
</Flex>

      </Box>
      </Box>

    )}
    {addnewitem && (
      <>
      <Box textAlign={"start"}>
        <Text fontSize={"35px"}>
        Add a new item
        </Text>

        <Box mt={"50px"}>
        {/* <Flex alignItems={"center"}> */}
        <Grid templateColumns={{base:"1fr",lg:"1fr 2fr"}} gap={"20px"}>
          <GridItem colSpan={{base:"1fr"}}>
          <Box>
        <Text fontSize={"18px"} fontWeight={""}>
        Item title
        </Text>
        <Text fontSize={""} color={"#656969"}>
        Add a title that quickly and clearly <br/> describes this item
        </Text>
        </Box>
          </GridItem>
          <GridItem colSpan={{base:"1fr"}}>
          <Input
                        mt={"10px"}
                        type="text"
                        placeholder="Digital photo"
                        size="md"
                      />
          </GridItem>
        </Grid>
      

        <Grid mt={"30px"} templateColumns={{base:"1fr",lg:"1fr 2fr"}} gap={"20px"}>
          <GridItem colSpan={{base:"1fr"}}>
          <Box>
        <Text fontSize={"15px"} fontWeight={""}>
        Item image (optional)
        </Text>
        <Text fontSize={""} color={"#656969"}>
        Add a picture of your item to help backers <br/> understand exactly what comes with their <br/> rewards.
        </Text>
        </Box>
          </GridItem>
          <GridItem colSpan={{base:"1fr"}}>
          <Box border={"1px solid rgba(0,0,0,0.1)"} p={"40px"} bg={"#FBFBFA"}>
                <Flex justifyContent={"center"} mb={"30px"}>
                  <Box
                    borderRadius={"50%"}
                    bg={"white"}
                    p={"20px"}
                    boxShadow={"1px 1px 10px gray"}
                  >
                    <FaImage size={"30px"} />
                  </Box>
                </Flex>
                <Text
                  fontSize={""}
                  textAlign={"center"}
                  fontWeight={""}
                  color={""}
                >
                  Drop a image here or select a file
                </Text>
                <Text
                  fontSize={"14px"}
                  textAlign={"center"}
                  fontWeight={""}
                  mt={"5px"}
                  color={"#656E72"}
                >
                  It must be a JPG,PNG,GIF or WEBP,no larger than 50 MB.
                </Text>
              </Box>
          </GridItem>
        </Grid>

       
        {/* </Flex> */}
        </Box>

      </Box>
      </>
    )}
    </>
  );
};

export default Item;
