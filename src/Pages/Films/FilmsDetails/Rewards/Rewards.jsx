import React, { useState } from "react";
import {
  Box,
  Grid,
  Text,
  Button,
  GridItem,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
} from "@chakra-ui/react";

const Rewards = () => {
  const [showPledge, setShowPledge] = useState(false);
  const [showPledgeAfricandio, setShowPledgeAfricandio] = useState(false);
  return (
    <>
      <Box>
        <Grid
          mt={"30px"}
          width="100%"
          templateColumns={{ base: "1fr", lg: "1fr 3fr" }}
          gap={6}
        >
          <GridItem colSpan={{ base: 1, lg: 1 }}>
            <Box>
              <Text fontSize={"20px"} textAlign={"start"}>
                Available rewards
              </Text>
              <Box mt={"20px"} maxH={"92vh"} overflowY={"auto"}>
                <Box
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Film Buff</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Aficionado</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Marquee Star</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <a href="#scriptsupervisor" className="supervisor">
                    {" "}
                    <Text fontWeight={"bold"}>Script Supervisor</Text>
                  </a>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Key Grip - With End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Gaffer – with End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>
                    Art Director – with End Credit
                  </Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Prop Master – with End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Maestro – with End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Underwriter – with End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Angel – with End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>

                <Box
                  mt={"15px"}
                  borderLeft={"5px solid orange"}
                  pl={"10px"}
                  textAlign={"start"}
                >
                  <Text fontWeight={"bold"}>Mogul – with End Credit</Text>
                  <Text color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
                    $25{" "}
                    <span style={{ fontWeight: "normal", color: "gray" }}>
                      1 item included
                    </span>
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 1 }}>
            <Box
              //   px={"30px"}
              maxH={"100vh"}
              overflowY={"auto"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "0px",
                  background:
                    "transparent" /* Optional: background color of the scrollbar track */,
                },
              }}
            >
              <Grid
                mt={"30px"}
                width="100%"
                gap={6}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              >
                <GridItem colSpan={{ base: 1 }}>
                  <Box
                    p={"20px"}
                    position={"relative"}
                    textAlign={"start"}
                    border={"1px solid gray"}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text fontWeight={"bold"}>Film Buff</Text>
                      <Text>$25</Text>
                    </Box>
                    <Text fontSize={"14px"}></Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      mt={"20px"}
                    >
                      <Box>
                        <Text fontSize={"12px"}>Backers</Text>
                        <Text fontSize={"12px"}>20</Text>
                      </Box>
                      <Box>
                        <Text fontSize={"12px"}>Ships to</Text>
                        <Text fontSize={"12px"}>Anywhere in the world</Text>
                      </Box>
                    </Box>
                    <Text mt={"20px"} fontSize={"12px"}>
                      Estimated delivery
                    </Text>
                    <Text fontSize={"12px"}>Jun 2024 </Text>

                    <Box
                      width={"100%"}
                      mt={"15px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"10px"}
                    >
                      <Button borderRadius={"5px"} width="100%">
                        Details
                      </Button>
                      {!showPledge && (
                      <Button
                      onClick={()=>setShowPledge(true)}
                        borderRadius={"5px"}
                        colorScheme="orange"
                        width="100%"
                      >
                        Pledge US$25
                      </Button>

                      )}
                    </Box>
                    {/* extent box */}
                    {showPledge && (
                    <Box>
                      <Text mt={"20px"} textAlign={"start"} fontSize={""}>
                        Shipping destination
                      </Text>
                      <Select placeholder="United States">
                        <option value="option1">Iran</option>
                        <option value="option2">Gaza</option>
                        <option value="option3">Palestine</option>
                      </Select>

                      <Text mt={"20px"} textAlign={"start"} fontSize={""}>
                        Pledge amount
                      </Text>
                      <InputGroup>
                        <InputLeftAddon>US$</InputLeftAddon>
                        <Input type="tel" placeholder="$$$$" />
                      </InputGroup>
                      <a href="https://stripe.com/">
                      <Button
                        mt={"25px"}
                        borderRadius={"5px"}
                        colorScheme="orange"
                        width="100%"
                      >
                        Continue
                      </Button>
                      </a>

                      <Text cursor={"pointer"} textAlign={'center'} onClick={()=>setShowPledge(false)} fontSize={""} textDecoration={"underline"} mt={"10px"}>Cancel</Text>
                    </Box>

                    )}
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1 }}>
                  <Box textAlign={"start"}>
                    <Text>
                      YOUR DONATION COVERS a day’s breakfast, lunch and dinner
                      for our production designer. DONORS GET a signed letter of
                      thanks from the director.
                    </Text>
                    <Text mt={"25px"}>1 item included</Text>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        Letter
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>


              <Grid
                mt={"30px"}
                width="100%"
                gap={6}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              >
                <GridItem colSpan={{ base: 1 }}>
                  <Box
                    p={"20px"}
                    position={"relative"}
                    textAlign={"start"}
                    border={"1px solid gray"}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text fontWeight={"bold"}>Aficionado</Text>
                      <Text>$25</Text>
                    </Box>
                    <Text fontSize={"14px"}></Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      mt={"20px"}
                    >
                      <Box>
                        <Text fontSize={"12px"}>Backers</Text>
                        <Text fontSize={"12px"}>20</Text>
                      </Box>
                      <Box>
                        <Text fontSize={"12px"}>Ships to</Text>
                        <Text fontSize={"12px"}>Anywhere in the world</Text>
                      </Box>
                    </Box>
                    <Text mt={"20px"} fontSize={"12px"}>
                      Estimated delivery
                    </Text>
                    <Text fontSize={"12px"}>Jun 2024 </Text>

                    <Box
                      width={"100%"}
                      mt={"15px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"10px"}
                    >
                      <Button borderRadius={"5px"} width="100%">
                        Details
                      </Button>
                      {!showPledgeAfricandio && (
                      <Button
                      onClick={()=>setShowPledgeAfricandio(true)}
                        borderRadius={"5px"}
                        colorScheme="orange"
                        width="100%"
                      >
                        Pledge US$25
                      </Button>

                      )}
                    </Box>
                    {/* extent box */}
                    {showPledgeAfricandio && (
                    <Box>
                      <Text mt={"20px"} textAlign={"start"} fontSize={""}>
                        Shipping destination
                      </Text>
                      <Select placeholder="United States">
                        <option value="option1">Iran</option>
                        <option value="option2">Gaza</option>
                        <option value="option3">Palestine</option>
                      </Select>

                      <Text mt={"20px"} textAlign={"start"} fontSize={""}>
                        Pledge amount
                      </Text>
                      <InputGroup>
                        <InputLeftAddon>US$</InputLeftAddon>
                        <Input type="tel" placeholder="$$$$" />
                      </InputGroup>
                      <a href="https://stripe.com/">
                      <Button
                        mt={"25px"}
                        
                        colorScheme="orange"
                        width="100%"
                      >
                        Continue
                      </Button>
                      </a>

                      <Text cursor={"pointer"} textAlign={'center'} onClick={()=>setShowPledgeAfricandio(false)} fontSize={""} textDecoration={"underline"} mt={"10px"}>Cancel</Text>
                    </Box>

                    )}
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1 }}>
                  <Box textAlign={"start"}>
                    <Text>
                      YOUR DONATION COVERS the cost of a spent artillery shell
                      used to decorate Andrew Undershaft’s lavish office in his
                      arms factory. DONOR RECEIVES a DVD and/or streaming link
                      to the finished film, and a letter of thanks from the
                      director.
                    </Text>
                    <Text mt={"25px"}>1 item included</Text>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        DVD/Stream
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        Letter
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
              <Grid
                mt={"30px"}
                width="100%"
                gap={6}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              >
                <GridItem colSpan={{ base: 1 }}>
                  <Box
                    p={"20px"}
                    position={"relative"}
                    textAlign={"start"}
                    border={"1px solid gray"}
                    maxH={"230px"}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text fontWeight={"bold"}>Marquee Star</Text>
                      <Text>$25</Text>
                    </Box>
                    <Text fontSize={"14px"}></Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      mt={"20px"}
                    >
                      <Box>
                        <Text fontSize={"12px"}>Backers</Text>
                        <Text fontSize={"12px"}>20</Text>
                      </Box>
                      <Box>
                        <Text fontSize={"12px"}>Ships to</Text>
                        <Text fontSize={"12px"}>Anywhere in the world</Text>
                      </Box>
                    </Box>
                    <Text mt={"20px"} fontSize={"12px"}>
                      Estimated delivery
                    </Text>
                    <Text fontSize={"12px"}>Jun 2024 </Text>

                    <Box
                      width={"100%"}
                      mt={"15px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"10px"}
                    >
                      <Button borderRadius={"5px"} width="100%">
                        Details
                      </Button>
                      <Button
                        borderRadius={"5px"}
                        colorScheme="orange"
                        width="100%"
                      >
                        Pledge US$25
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1 }}>
                  <Box textAlign={"start"}>
                    <Text>
                      YOUR DONATION COVERS the cost of a spent artillery shell
                      used to decorate Andrew Undershaft’s lavish office in his
                      arms factory. DONOR RECEIVES a DVD and/or streaming link
                      to the finished film, and a letter of thanks from the
                      director.
                    </Text>
                    <Text mt={"25px"}>1 item included</Text>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        DVD/Stream
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:3
                      </Text>
                    </Box>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        Letter
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        Tickets
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
              <Grid
                mt={"30px"}
                width="100%"
                gap={6}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              >
                <GridItem colSpan={{ base: 1 }}>
                  <Box
                    p={"20px"}
                    position={"relative"}
                    textAlign={"start"}
                    border={"1px solid gray"}
                    maxH={"230px"}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text fontWeight={"bold"}>Script Supervisor</Text>
                      <Text>$25</Text>
                    </Box>
                    <Text fontSize={"14px"}></Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      mt={"20px"}
                    >
                      <Box>
                        <Text fontSize={"12px"}>Backers</Text>
                        <Text fontSize={"12px"}>20</Text>
                      </Box>
                      <Box>
                        <Text fontSize={"12px"}>Ships to</Text>
                        <Text fontSize={"12px"}>Anywhere in the world</Text>
                      </Box>
                    </Box>
                    <Text mt={"20px"} fontSize={"12px"}>
                      Estimated delivery
                    </Text>
                    <Text fontSize={"12px"}>Jun 2024 </Text>

                    <Box
                      width={"100%"}
                      mt={"15px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"10px"}
                    >
                      <Button borderRadius={"5px"} width="100%">
                        Details
                      </Button>
                      <Button
                        borderRadius={"5px"}
                        colorScheme="orange"
                        width="100%"
                      >
                        Pledge US$25
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1 }}>
                  <Box textAlign={"start"}>
                    <Text>
                      YOUR DONATION COVERS the cost of a spent artillery shell
                      used to decorate Andrew Undershaft’s lavish office in his
                      arms factory. DONOR RECEIVES a DVD and/or streaming link
                      to the finished film, and a letter of thanks from the
                      director.
                    </Text>
                    <Text mt={"25px"}>1 item included</Text>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        DVD/Stream
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:3
                      </Text>
                    </Box>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        Letter
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        Tickets
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                    <Box mt={"10px"} border={"1px solid black"} p={"15px"}>
                      <Text mt={""} fontWeight={""} fontSize={""}>
                        T-shirts
                      </Text>
                      <Text mt={"5px"} fontWeight={""} fontSize={"12px"}>
                        Quantity:1
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Rewards;
