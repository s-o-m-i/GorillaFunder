import React from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Progress,
  Button,
} from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import "./FilmsDetails.css";
import {
  FaCode,
  FaCompass,
  FaEnvelope,
  FaFacebook,
  FaHeart,
  FaRegBookmark,
  FaTwitter,
} from "react-icons/fa6";

import { IoLocationSharp } from "react-icons/io5";
import FluidContainer from "../../../Components/shared/containerFluid";
import { TiMessages } from "react-icons/ti";
import { AiFillNotification } from "react-icons/ai";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  GridItem,
} from "@chakra-ui/react";
import Campaign from "./Campaign/Campaign";
import Rewards from "./Rewards/Rewards";
import FAQ from "./FAQ/FAQ";
import Comments from "./Comments/Comments";
import Community from "./Community/Community";
import Updates from "./Updates/Updates";
import { RemindMeModal } from "../../../Components/RemindMeModal/RemindMeModal";
import { Link } from "react-router-dom";

const FilmsDetailsComponent = () => {
  return (
    <Box>
      <Navbar logoLevel={"2"} />
      <Container maxW="container.lg" py={{ base: 8, md: 12 }}>
        <Heading as="h1" size="xl" mb={1}>
          Llamas with Hats: Epilogue
        </Heading>
        <Text mb={8}>
          A new ending for the animated series about two llamas who wear hats.
        </Text>
        {/* Video or image section */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mb={8}>
          <Box>
            {/* Video or image */}
            <Box
              overflow={"hidden"}
              bg="gray.200"
              h={{ base: "240px", md: "460px" }}
              w="100%"
              borderRadius={{ base: "md", md: "lg" }}
              mb={{ base: 4, md: 0 }}
            >
              <img
                width={"100%"}
                height={"100%"}
                src="/images/majorbarbara.avif"
                alt=""
              />
            </Box>
          </Box>
          <Box>
            {/* Funding details */}
            <Box textAlign={{ md: "left" }} mt={10}>
              <Progress colorScheme="orange" size="sm" value={50} mb={2} />
              <Text fontSize="30px" color="orange.500" fontWeight="bold" mb={1}>
                US$ 213,296
              </Text>
              <Text fontSize="sm" color="#656969" mb={4}>
                pledged of US$ 22,000 goal
              </Text>
              <Text className="backers-count">4,055</Text>
              <Text className="film-backers" mb={10}>
                backers
              </Text>

              <Text className="backers-count">17</Text>
              <Text className="film-backers" mb={10}>
                hours to go
              </Text>
<Link to={"/category"}>

              <Button colorScheme="orange" width="100%">
                Back this Project
              </Button>
</Link>

              <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                <Button
                  colorScheme="gray"
                  width="100%"
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  <FaRegBookmark style={{ marginRight: "10px" }} />
                  Remind Me
                </Button>
                <Box display={"flex"} gap={10} ml="10px" alignItems="center">
                  {/* Facebook, Twitter, Email and Code icon from react-icons */}
                  <FaFacebook size={"20px"} color="#39579a" />

                  <FaTwitter size={"20px"} color="#00abf0" />

                  <FaEnvelope size={"20px"} color="#656969" />

                  <FaCode size={"20px"} color="#656969" />
                </Box>
              </Grid>
            </Box>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <Box display={"flex"} fontSize={"14px"} fontWeight={500}>
              <Box className="project-we-love">
                <FaHeart />
              </Box>
              <Text position={"relative"} top={"3px"}>
                Project We Love
              </Text>
            </Box>
            <Box display={"flex"} fontSize={"14px"} fontWeight={500}>
              <Box className="project-animation">
                <FaCompass />
              </Box>
              <Text position={"relative"} top={"3px"}>
                Animation
              </Text>
            </Box>
            <Box display={"flex"} fontSize={"14px"} fontWeight={500}>
              <Box className=" project-animation">
                <IoLocationSharp />
              </Box>
              <Text position={"relative"} top={"3px"}>
                Orlando, FL
              </Text>
            </Box>
          </Grid>
        </Grid>

        {/* Project updates */}
      </Container>
      <FluidContainer style={{ background: "#e9842947" }}>
        <Container maxW="container.lg" py={{ base: 8, md: 12 }}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 8, lg: 1 }}>
              <Box display={"flex"} fontSize={"14px"} fontWeight={500}>
                <Box className="project-we-love" mt={1}>
                  <IoLocationSharp />
                </Box>
                <Text textAlign={"left"} ml="40px" width={"300px"}>
                  GorillaFunder connects creators with backers to fund projects.
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 8, lg: 1 }}>
              <Box display={"flex"} fontSize={"14px"} fontWeight={500}>
                <Box className="project-we-love" mt={1}>
                  <TiMessages />
                </Box>
                <Text textAlign={"left"} ml="40px" width={"300px"}>
                  Rewards aren’t guaranteed, but creators must regularly update
                  backers.
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 8, lg: 1 }}>
              <Box display={"flex"} fontSize={"14px"} fontWeight={500}>
                <Box className="project-we-love" mt={1}>
                  <AiFillNotification />
                </Box>
                <Text textAlign={"left"} ml="40px" width={"300px"}>
                  You’re only charged if the project meets its funding goal by
                  the campaign deadline.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </FluidContainer>

      <Tabs position="relative" variant="unstyled" mt={"20px"} mx={"20px"}>
        <TabList display="flex" flexDirection={["column", null, "row"]}>
          <Tab>Campaign</Tab>
          <Tab>Rewards</Tab>
          <Tab>FAQ</Tab>
          <Tab>Updates</Tab>
          <Tab>Comments</Tab>
          <Tab>Community</Tab>

          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            ml={"auto"}
            gap={4}
            w={{ base: "100%", md: "30%" }}
          >
          <Link to="/category">
            <Button
              colorScheme="orange"
              width="100%"
              fontSize={"14px"}
              fontWeight={500}

            >
              Back this project
            </Button>
</Link>
            <RemindMeModal remindMe={"remindMe"} />
          </Box>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Campaign />
          </TabPanel>
          <TabPanel>
            <Rewards />
          </TabPanel>
          <TabPanel>
            <FAQ />
          </TabPanel>
          <TabPanel>
            <Updates />
          </TabPanel>
          <TabPanel>
            <Comments />
          </TabPanel>
          <TabPanel>
            <Community />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Footer />
    </Box>
  );
};

export default FilmsDetailsComponent;
