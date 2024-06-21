import React from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { Box, Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import FluidContainer from "../../../Components/shared/containerFluid";
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const Project = () => {
  return (
    <>
      <Navbar />
      <FluidContainer>
        <Box>
          <Text mt={"80px"} fontSize={"35px"} textAlign={"start"}>
            Film & Video Project
          </Text>
          <Text fontSize={"15px"} mt={"10px"} textAlign={"start"}>
            by David Lynch
          </Text>
          <Box textAlign={"start"} my={"30px"}>
            <Link to={"/film/826"}>
              <Button
                colorScheme="orange"
                fontSize={"14px"}
                fontWeight={500}

              >
                <IoEyeSharp style={{ marginRight: "10px" }} />
                Preview
              </Button>
            </Link>
            <Link to={"/edit"}>
              <Button
                colorScheme="gray"
                fontSize={"14px"}
                fontWeight={500}
                ml={5}
              >
                <MdEdit style={{ marginRight: "10px" }} />
                Edit Project
              </Button>
            </Link>
          </Box>
          <Text fontSize={"23px"} textAlign={"start"}>
            Project Status
          </Text>
        </Box>
        {/* gray box */}
        <Box
          bg={"gray.50"}
          border={"1px solid rgba(0,0,0,0.2)"}
          mt={"20px"}
          py={"80px"}
          width={"100%"}
        >
          <Container>
            <Flex mb={"30px"} justifyContent={"center"}>
              <FaHeart size={"50px"} color="orange" />
            </Flex>
            <Text fontSize={"25px"} fontWeight={"500"}>
              Take a moment to review our
              <br /> rules
            </Text>

            <Text
              fontSize={"17px"}
              mt={"20px"}
              fontWeight={""}
              textAlign={"center"}
            >
              Here are five rules every GorillaFunder project must follow.
            </Text>

            <Flex
              alignItems={"center"}
              mt={"40px"}
              justifyContent={""}
              gap={"40px"}
            >
              <Text color={"gray.300"} fontSize={"40px"}>
                1
              </Text>
              <Text fontSize={"17px"} fontWeight={""}>
                Projects must create something to share with others.
              </Text>
            </Flex>

            <Flex
              alignItems={"center"}
              mt={"40px"}
              justifyContent={""}
              gap={"40px"}
            >
              <Text color={"gray.300"} fontSize={"40px"}>
                2
              </Text>
              <Text fontSize={"17px"} fontWeight={""} textAlign={"start"}>
                Projects must be honest and clearly presented.
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              mt={"40px"}
              justifyContent={""}
              gap={"40px"}
            >
              <Text color={"gray.300"} fontSize={"40px"}>
                3
              </Text>
              <Text fontSize={"17px"} fontWeight={""} textAlign={"start"}>
                Projects can't fundraise for charity.
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              mt={"40px"}
              justifyContent={""}
              gap={"40px"}
            >
              <Text color={"gray.300"} fontSize={"40px"}>
                4
              </Text>
              <Text fontSize={"17px"} fontWeight={""} textAlign={"start"}>
                Projects can't offer equity.
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              mt={"40px"}
              justifyContent={""}
              gap={"40px"}
            >
              <Text color={"gray.300"} fontSize={"40px"}>
                5
              </Text>
              <Text fontSize={"17px"} fontWeight={""} textAlign={"start"}>
                Projects can't involve prohibited items.
              </Text>
            </Flex>
            <Button
              mt={"15px"}
              //   onClick={onOpen}
              colorScheme="orange"
              width={"200px"}
              fontSize={"14px"}
              fontWeight={500}

            >
              Got it
            </Button>
            <Text mt={"20px"} fontSize={""} textDecoration={"underline"}>
              Read more about our rules.
            </Text>
          </Container>
        </Box>

        <Box>
          <Text mt={"80px"} textAlign={"start"} fontSize={"25px"}>
            Project overview
          </Text>

          <Box mt={"25px"} bg={"gray.50"} border={"1px solid rgba(0,0,0,0.2)"}>
            <Link to={"/edit"}>


              <Flex
                px={"20px"}
                py={"30px"}
                alignItems={"center"}
                gap={"20px"}
                borderBottom={"1px solid gray"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"40px"}
                  height={"40px"}
                  borderRadius={"50%"}
                  border={"5px solid gray"}
                  p={"5px"}
                >
                  <FaCheck />
                </Flex>
                <Box textAlign={"start"}>
                  <Text fontWeight={"bold"} fontSize={"20px"}>
                    Basics
                  </Text>
                  <Text fontSize={""} color={"gray.500"}>
                    Name your project, upload an image or video, and establish
                    your campaign details.
                  </Text>
                </Box>
              </Flex>
            </Link>

            <Flex
              px={"20px"}
              py={"30px"}
              alignItems={"center"}
              gap={"20px"}
              borderBottom={"1px solid gray"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                w={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                border={"5px solid gray"}
                p={"5px"}
              >
                <FaCheck />
              </Flex>
              <Box textAlign={"start"}>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Rewards
                </Text>
                <Text fontSize={""} color={"gray.500"}>
                  Set your rewards and shipping costs.
                </Text>
              </Box>
            </Flex>
            <Flex
              px={"20px"}
              py={"30px"}
              alignItems={"center"}
              gap={"20px"}
              borderBottom={"1px solid gray"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                w={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                border={"5px solid gray"}
                p={"5px"}
              >
                <FaCheck />
              </Flex>
              <Box textAlign={"start"}>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Story
                </Text>
                <Text fontSize={""} color={"gray.500"}>
                  Add a detailed project description and convey your risks and challenges.
                </Text>
              </Box>
            </Flex>
            <Flex
              px={"20px"}
              py={"30px"}
              alignItems={"center"}
              gap={"20px"}
              borderBottom={"1px solid gray"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                w={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                border={"5px solid gray"}
                p={"5px"}
              >
                <FaCheck />
              </Flex>
              <Box textAlign={"start"}>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  People
                </Text>
                <Text fontSize={""} color={"gray.500"}>
                  Edit your GorillaFunder profile and add collaborators.
                </Text>

              </Box>
            </Flex>
            <Flex
              px={"20px"}
              py={"30px"}
              alignItems={"center"}
              gap={"20px"}
              borderBottom={"1px solid gray"}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                w={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                border={"5px solid gray"}
                p={"5px"}
              >
                <FaCheck />
              </Flex>
              <Box textAlign={"start"}>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Payment
                </Text>
                <Text fontSize={""} color={"gray.500"}>
                  Verify details and link a bank account.
                </Text>
                <Text fontSize={"13px"} mt={"5px"} color={"blue"}>
                  This may take up to 3 business days to complete.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex alignItems={"center"} gap={"20px"} mt={"20px"}>
          <Box bg={"gray.200"} w={"12px"} h={"12px"} borderRadius={"50%"}></Box>
          <Text fontSize={""}>Submit your project for review</Text>
        </Flex>

        <Flex
          mt={"25px"}
          px={"20px"}
          py={"30px"}
          alignItems={"center"}
          gap={"20px"}
          border={"1px solid rgba(0,0,0,0.2)"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            border={"5px solid gray"}
            p={"5px"}
          >
            <FaCheck />
          </Flex>
          <Box textAlign={"start"}>
            <Text fontWeight={"bold"} fontSize={"20px"}>
              Project review
            </Text>
            <Text fontSize={""} color={"gray.500"}>
              We’ll check to make sure it follows our rules and guidelines.
            </Text>
            <Text fontSize={"13px"} mt={"5px"} color={"blue"}>
              Please allow 1-3 business days for a response.
            </Text>
          </Box>
        </Flex>

        <Flex alignItems={"center"} gap={"20px"} mt={"20px"}>
          <Box bg={"gray.200"} w={"12px"} h={"12px"} borderRadius={"50%"}></Box>
          <Text fontSize={""}>Prepare for your lunch</Text>
        </Flex>

        <Flex
          mt={"25px"}
          px={"20px"}
          py={"30px"}
          alignItems={"center"}
          gap={"20px"}
          border={"1px solid rgba(0,0,0,0.2)"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            border={"5px solid gray"}
            p={"5px"}
          >
            <FaCheck />
          </Flex>
          <Box textAlign={"start"}>
            <Text fontWeight={"bold"} fontSize={"20px"}>
              Promotion
            </Text>
            <Text fontSize={""} color={"gray.500"}>
              Generate a project URL and activate your pre-launch page.
            </Text>

          </Box>
        </Flex>

        <Flex alignItems={"center"} gap={"20px"} mt={"20px"}>
          <Box bg={"gray.200"} w={"12px"} h={"12px"} borderRadius={"50%"}></Box>
          <Text fontSize={""}>Launch</Text>
        </Flex>

        <Divider my={"20px"} />
        <Text textAlign={"start"} fontSize={"25px"} mb={"15px"}>
          Support
        </Text>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={"20px"}
          mb={"50px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            w={"100%"}
            pb={"60px"}
            px={"30px"}
            pt={"30px"}
            bg={""}
            border={"1px solid rgba(0,0,0,0.2)"}
          >
            <Flex alignItems={"center"} gap={"10px"}>
              <Text textAlign={"start"} fontSize={"20px"}>
                Creator Resources
              </Text>
              <FaLongArrowAltRight />
            </Flex>
            <Text textAlign={"start"} mt={"10px"} fontSize={""}>
              Learn about everything from shipping to communicatng with backers.
            </Text>
          </Box>

          <Box
            w={"100%"}
            pb={"60px"}
            px={"30px"}
            pt={"30px"}
            bg={""}
            border={"1px solid rgba(0,0,0,0.2)"}
          >
            <Flex alignItems={"center"} gap={"10px"}>
              <Text textAlign={"start"} fontSize={"20px"}>
                Creator Questions
              </Text>
              <FaLongArrowAltRight />
            </Flex>
            <Text textAlign={"start"} mt={"10px"} fontSize={""}>
              Learn about everything from shipping to communicatng with backers.
            </Text>
          </Box>
        </Flex>

        <Divider my={"30px"} />

        <Flex _hover={{ bg: "gray.50" }} cursor={"pointer"} p={"10px"} w={"fit-content"} gap={"10px"} alignItems={"center"}>
          <RiDeleteBinLine size={"20px"} />
          <Text>Delete project</Text>

        </Flex>
      </FluidContainer>
      <Footer />
    </>
  );
};

export default Project;
