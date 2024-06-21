import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaLock } from "react-icons/fa";

const Promotion = () => {
  return (
    <Box textAlign={"start"}>
      <Box py={"50px"}>
        <Text textAlign={"center"} fontSize={"30px"}>
          Prepare for launch
        </Text>
        <Text
          mt={"15px"}
          textAlign={"center"}
          fontSize={"20px"}
          color={"#656969"}
        >
          Get ready to promote your project.
        </Text>
      </Box>
      <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Project URL</Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              We'll use your current project title to generate a URL. Even if
              you change the title later, the URL will stay the same. Your
              project page won't go live until you launch.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
            <FaLock />

            <Text mt={"20px"} fontWeight={"500"} fontSize={"18px"}>
              You can’t generate your URL until you’ve submitted for review.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Pre-launch page</Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              Your project title, subtitle, and category from the Basics section
              will automatically appear on this page. Potential backers will be
              able to find it on GorillaFunder, but you should share your
              pre-launch page with everyone to create excitement and attention
              around your project before you launch it.
            </Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              Download social badges and GorillaFunder logos while you prepare to
              launch your project. You can add these to the graphics you create
              for social media promotion.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
            <Text mt={""} fontWeight={"500"} fontSize={"18px"}>
              Inactive
            </Text>
            <Divider my={"20px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
            <Flex alignItems={"center"}>
              <Text>0 people are following your project</Text>
            </Flex>
          </Box>

          <Button
            mt={"10px"}
            w={"100%"}
            colorScheme="orange"
            fontSize={"14px"}
            fontWeight={500}

          >
            Activate my page
          </Button>
          <Text fontSize={""} mt={"10px"}>
            You can’t activate your page until we’ve approved your project.
          </Text>
        </GridItem>
      </Grid>

      <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Custom referral tags</Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              Generate custom referral tags so you can create unique, trackable
              links for marketing initiatives outside of GorillaFunder.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Input mt={"10px"} type="text" placeholder="Insert Label" size="md" />
          <Button
            mt={"10px"}
            w={"100%"}
            colorScheme="orange"
            fontSize={"14px"}
            fontWeight={500}

          >
            Generate Tag
          </Button>
        </GridItem>
      </Grid>


      <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Google Analytics</Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              This powerful tool offers insights into your project's performance, including the number of visitors to your page, where they came from, and how many of them convert to pledges. Enter a tracking ID or API secret to connect your project.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Text>Tracking ID</Text>
          <Input mt={"10px"} type="text" placeholder="Insert Label" size="md" />
          <Text mt={"20px"}>API secret</Text>
          <Input mt={"10px"} type="text" placeholder="Insert Label" size="md" />
          <Button
            mt={"10px"}
            w={"100%"}
            colorScheme="orange"
            fontSize={"14px"}
            fontWeight={500}

          >
            Saved
          </Button>
        </GridItem>
      </Grid>


      <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Meta Pixel</Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              Meta Pixel (formerly Facebook Pixel) is a tool for measuring the effectiveness of advertising on Facebook and Instagram. Add a Pixel ID to track whether you’re reaching audiences you care about before and during your campaign.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Text>Pixel ID
          </Text>
          <Input mt={"10px"} type="text" placeholder="123456789123456789" size="md" />
          <Button
            mt={"10px"}
            w={"100%"}
            colorScheme="orange"
            fontSize={"14px"}
            fontWeight={500}

          >
            Save
          </Button>
        </GridItem>
      </Grid>



      <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Meta Conversions API Access Token</Text>
            <Text
              w={{ base: "100%", lg: "400px" }}
              mt={"10px"}
              color={"#656969"}
              fontSize={""}
            >
              The Meta Conversions API works alongside the Meta Pixel, creating a direct and more reliable events connection between GorillaFunder and Meta. Add an Access Token to connect GorillaFunder to your Meta Events Manager.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Text>Access Token
          </Text>
          <Input mt={"10px"} type="text" placeholder="" size="md" />
          <Button
            mt={"10px"}
            w={"100%"}
            colorScheme="orange"
            fontSize={"14px"}
            fontWeight={500}

          >
            Save
          </Button>
        </GridItem>
      </Grid>

    </Box>
  );
};

export default Promotion;
