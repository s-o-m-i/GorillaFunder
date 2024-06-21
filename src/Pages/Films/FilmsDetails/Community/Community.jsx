import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const Community = () => {
  return (
    <>
      <Box py={"100px"}>
        <Text fontSize={"20px"}>162 people are supporting Jay Craven</Text>
      </Box>
      <Divider />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Text pt={"50px"} fontSize={"20px"}>
            Where Backers Come From <br /> Top Cities
          </Text>
          <Divider />
          <Box p={"40px"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>

            <Box
              mt={{ base: "15px", lg: "10px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>
            <Box
              mt={{ base: "15px", lg: "10px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>
            <Box
              mt={{ base: "15px", lg: "10px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>
            <Box
              mt={{ base: "15px", lg: "10px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>
            <Box
              mt={{ base: "15px", lg: "10px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>
            <Box
              mt={{ base: "15px", lg: "10px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Text fontSize={""} color={"blue"}>
                  New York{" "}
                </Text>
                <Text fontSize={"12px"} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "5px", lg: "0" }} fontSize={"12px"}>
                14 backers{" "}
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Text pt={"50px"} fontSize={"20px"}>
            Where Backers Come From <br /> Top Cities
          </Text>
          <Divider />
          <Box p={"40px"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box>
                <Text fontSize={""} color={"blue"}>
                  United States
                </Text>
              </Box>
              <Text mt={{ base: "10px", lg: "0" }} fontSize={"12px"}>
                157 backers{" "}
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>


      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} border={"1px solid #DCDEDD"} p={"30px"}>
      <GridItem colSpan={{base:"1fr"}} pb={{base:"20px",lg:"0"}} borderBottom={{base:"2px solid #DCDEDD",lg:"0px solid #000"}} borderRight={{base:"0px solid #000",lg:"1px solid #DCDEDD"}}>
        <Box>
            <Text fontSize={"15px"} fontWeight={"500"}>New Backers</Text>
            <Text fontSize={"60px"} py={"35px"}>47</Text>
            <Text>backers had never backed a project on GorillaFunder before</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={{base:"1fr"}}>
      <Box mt={{base:"20px",lg:"0"}}>
            <Text fontSize={"15px"} fontWeight={"500"}>Returning Backers</Text>
            <Text fontSize={"60px"} py={"35px"}>115</Text>
         
            <Text>backers had backed a project on GorillaFunder before</Text>
        </Box>
      </GridItem>
      </Grid>
    </>
  );
};

export default Community;
