import React from "react";
import { Box, Grid, Text, Button, GridItem, Flex, Select, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";

import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useState } from "react";
import { RemindMeModal } from "../../../../Components/RemindMeModal/RemindMeModal";

const Campaign = () => {
  // const [cards, setcards] = useState([
  const [cards] = useState([
    {
      heading: "Film Buff",
      price: "$25",
      desc: "YOUR DONATION COVERS a day’s breakfast, lunch and dinner for our production designer. DONORS GET a signed letter of thanks from the director.",
      backersValue: "20",
      button: "25",
      totalItems: "1",
      items: "Letter",
      estimatedDelivery: "Jun 2024",
    },
    {
      heading: "Aficionado",
      price: "$85",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Marquee Star",
      price: "$160",
      desc: "YOUR DONATION COVERS the cost of our stunt coordinator for an hour on set. DONOR RECEIVES a DVD and/or streaming link to the finished film, souvenir playbill, a letter of thanks from the director, and two tickets to a regular Major Barbara film screening.",
      backersValue: "41",
      button: "20",
      totalItems: "3 ",
      items: "DVD/Stream, Letter, Tickets",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Script Supervisor",
      price: "$270",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Key Grip - With End Credit",
      price: "$365",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Gaffer – with End Credit",
      price: "$565",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Art Director – with End Credit",
      price: "$730",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Prop Master – with End Credit",
      price: "$950",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Maestro – with End Credit",
      price: "$730",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Underwriter – with End Credit",
      price: "$730",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Angel – with End Credit",
      price: "$730",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
    {
      heading: "Mogul – with End Credit",
      price: "$730",
      desc: "YOUR DONATION COVERS the cost of a spent artillery shell used to decorate Andrew Undershaft’s lavish office in his arms factory. DONOR RECEIVES a DVD and/or streaming link to the finished film, and a letter of thanks from the director.",
      backersValue: "41",
      button: "85",
      totalItems: "2 ",
      items: "DVD/Stream, Letter",
      estimatedDelivery: "Jul 2024",
    },
  ]);
  return (
    <>
      <Grid
        mt={"30px"}
        width="100%"
        templateColumns={{ base: "1fr", lg: "1fr 4fr 2fr" }}
      >
        <GridItem colSpan={{ base: "1fr" }}>
          <Box textAlign={"start"}>
            <Text
              fontWeight={"bold"}
              fontSize={""}
              mt={"10px"}
              pl={"10px"}
              cursor={"pointer"}
              borderLeft={"5px solid orange"}
            >
              Story
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={""}
              mt={"10px"}
              pl={"10px"}
              cursor={"pointer"}
              borderLeft={"5px solid orange"}
            >
              Our Story
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize={""}
              mt={"10px"}
              pl={"10px"}
              cursor={"pointer"}
              borderLeft={"5px solid orange"}
            >
              Risks
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box
            textAlign={"start"}
            maxH={"100vh"}
            overflowY="auto"
            ml={"50px"}
            bg={""}
            css={{
              "&::-webkit-scrollbar": {
                width: "0px",
                background:
                  "transparent" /* Optional: background color of the scrollbar track */,
              },
            }}
          >
            <Text mb={"30px"} fontSize={"25px"}>
              Story
            </Text>
            <img width={"530px"} src="/images/majorbarbara.avif" alt="" />
            <Text mt={"30px"} fontSize={""}>
              Welcome to our GorillaFunder Campaign for Our New Film, Major
              Barbara!
            </Text>
            <Text mt={"30px"} fontSize={""}>
              A sly comedy of too little and too much.
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Produced by Kingdom County Productions and Semester Cinema
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Based on the satirical Tony-winning play by George Bernard Shaw.
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Directed by Jay Craven
            </Text>
            <Text mt={"30px"} fontSize={""}>
              PLEASE NOTE THAT ALL DONORS WILL RECEIVE AN ADDED PERK - TWO FREE
              TICKETS TO SEE OUR RECENTLY COMPLETED FILM, LOST NATION - ON TOUR
              STARTING IN JULY!
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Here’s how it works:
            </Text>
            <Text mt={"30px"} fontSize={""}>
              If we raise $65,000 or more by May 23rd, we'll receive your pledge
              and immediately put it to use in support of our production and
              completion of our new feature film, Major Barbara.
            </Text>
            <Text mt={"30px"} fontSize={""}>
              This is an ambitious goal - but it's what we need to complete our
              film on schedule and move into post-production.
            </Text>
            <Text mt={"30px"} fontSize={""}>
              You can play a leading role!
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Donors get cool rewards – like Opening Night Premiere tickets,
              Major Barbara T-shirts, movie posters, illustrated playbills,
              Agnes Varda, Rear Window, Alexander Hamilton or Jane Austen socks,
              Maya Deren baseball cap, and copies of the screenplay used during
              production – signed by director/screenwriter Jay Craven. Other
              perks include passes to the Middlebury New Filmmakers Film
              Festival, tickets to shows in the KCP Presents performance series,
              dinner with the director – AND your name in the film credits (for
              donors of $365 or more).s
            </Text>
            <Box mt={"30px"}>
              <img src="/images/duoshirts.avif" alt="" />
            </Box>
            <Text mt={"30px"} fontSize={""}>
              Your contribution is put immediately to work, to pay rentals for
              necessary camera, sound and lighting equipment, hire first-class
              talent, and pay our professional crew to create powerful
              performances and a distinctive world and look for our film. And
              not only will your donation substantially contribute to the
              production of our film; it will also enable 45 students from 10
              colleges to have this transformative learning opportunity and
              hands-on experience, working on a film set.
            </Text>
            <Text mt={"30px"} fontSize={""}>
              It’s all or nothing! GorillaFunder will only charge your credit card
              if we meet or surpass that goal. If we don’t reach our goal, we
              get nothing. So, we’re working hard to enlist people who support
              this relevant, timely, and funny film!
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Does this sound like fun? And hard work? It is.
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Donations are tax-deductible—Kingdom County Productions is a 501 ©
              3 arts non-profit. And if you have any questions about the
              campaign, the film, Kingdom County Productions or Semester Cinema,
              contact Jay Craven (jcraven1590@gmail.com).
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Please donate what you can today. Every dollar makes a difference!
              And share our GorillaFunder link with friends, family, and loved
              ones. It will take a village (plus an island) to make Major
              Barbara!
            </Text>
            <Text mt={"30px"} fontSize={""}>
              Thank you!
            </Text>
            <Text my={"30px"} fontSize={"25px"} fontWeight={"bold"}>
              OUR STORY
            </Text>
            <img src="/images/ourStoryFirstImg.avif" alt="" />
            <Text mt={"30px"} fontSize={""}>
              Sara Haider as Major Barbara{" "}
            </Text>
            <img src="/images/ourStorySecondImg.avif" alt="" />
            <Text mt={"30px"} fontSize={""}>
              Xander Berkeley as Andrew Undershaft
            </Text>
            <Text mt={"30px"} fontSize={""}></Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box
            p={"20px"}
            pt={"50px"}
            overflowY={"auto"}
            maxH={"100vh"}
            bg={""}
            color={""}
          >
            <Box
              p={"20px"}
              position={"relative"}
              textAlign={"start"}
              border={"1px solid gray"}
            >
              <Box
                position={"absolute"}
                top={"-50px"}
                left={"-10px"}
                width={"72px"}
                borderRadius={"50%"}
              >
                <img
                  width={"100%"}
                  style={{ borderRadius: "50%" }}
                  height={"100%"}
                  src="/images/jaycraven.avif"
                  alt=""
                />
              </Box>
              <Text mt={"45px"} fontSize={""}>
                Jay Craven
              </Text>
              <Text mt={"10px"} fontSize={""}>
                2 created - 1 backed
              </Text>

              <Text mt={"30px"} fontSize={""}>
                MAJOR BARBARA is Jay Craven's 11th feature film - and his sixth
                through the Semester Cinema project where 30 professionals
              </Text>
              <Flex alignItems={"center"} gap={"5px"}>
                <Text mt={""} fontSize={""}>
                  mentor and...
                </Text>
                <RemindMeModal seeMore={"seeMore"} />
              </Flex>
            </Box>

            <Text mt={"20px"} textAlign={"start"} fontSize={"25px"}>
              Support
            </Text>

            <Box
              p={"20px"}
              position={"relative"}
              textAlign={"start"}
              border={"1px solid gray"}
            >
              <Text mt={""} textAlign={"start"} fontSize={""}>
                Make a pledge without a reward
              </Text>
              <Text mt={"20px"} textAlign={"start"} fontSize={""}>
                Pledge amount
              </Text>
              <InputGroup>
                <InputLeftAddon>US$</InputLeftAddon>
                <Input type="tel" placeholder="$$$$" />
              </InputGroup>

              <Box
                backgroundImage={
                  " -webkit-linear-gradient(top, #DBE7FF, #FFF2EC)"
                }
                p={"20px"}
                mt={"15px"}
              >
                <Text mt={""}>Back it because you believe in it.</Text>
                <Text mt={"20px"}>
                  Support the project for no reward, just because it speaks to
                  you.
                </Text>
              </Box>
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
            </Box>

            <Text mt={"20px"} textAlign={"start"} fontSize={"25px"}>
              Available rewards
            </Text>
         

            {cards.map((e, i) => {
              return (
                <>
                  <Box
                    my={"20px"}
                    p={"20px"}
                    position={"relative"}
                    textAlign={"start"}
                    border={"1px solid gray"}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Text fontWeight={"bold"}>{e.heading}</Text>
                      <Text>{e.price}</Text>
                    </Box>
                    <Text fontSize={"14px"}>{e.desc}</Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      mt={"20px"}
                    >
                      <Box>
                        <Text fontSize={"12px"}>Backers</Text>
                        <Text fontSize={"12px"}>{e.backersValue}</Text>
                      </Box>
                      <Box>
                        <Text fontSize={"12px"}>Ships to</Text>
                        <Text fontSize={"12px"}>Anywhere in the world</Text>
                      </Box>
                    </Box>
                    <Text mt={"20px"} fontSize={"12px"}>
                      Estimated delivery
                    </Text>
                    <Text fontSize={"12px"}> {e.estimatedDelivery}</Text>

                    <Text mt={"20px"} fontSize={"12px"}>
                      {e.totalItems} item included
                    </Text>
                    <Text fontSize={"12px"}>
                      {e.items}
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
                        <Popover placement='top-start'>
  <PopoverTrigger>
  <Button
                          borderRadius={"5px"}
                          colorScheme="orange"
                          width="100%"
                        >
                          Pledge US${e.button}
                        </Button>
  </PopoverTrigger>
  <PopoverContent>
  
   
    <PopoverCloseButton />
    <PopoverBody>
    <Box>


<Text mt={"20px"} textAlign={"start"} fontSize={""}>
Shipping destination
  </Text>
<Select placeholder='United States'>
<option value='option1'>Iran</option>
<option value='option2'>Gaza</option>
<option value='option3'>Palestine</option>
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

  {/* <Text fontSize={""} textDecoration={"underline"} mt={"10px"}>Cancel</Text> */}
</Box>
    </PopoverBody>
  </PopoverContent>
</Popover>
                      </Box>
                    </Text>
                  </Box>
                </>
              );
            })}


          

          
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Campaign;
