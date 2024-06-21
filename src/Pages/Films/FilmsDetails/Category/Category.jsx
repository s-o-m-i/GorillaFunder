import React, { useState } from "react";
import Navbar from "../../../../Components/Navbar";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import FluidContainer from "../../../../Components/shared/containerFluid";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Category = () => {
  // const [faq, setfaq] = useState("zero");
  const [faq] = useState("zero");
  const [faqone, setfaqone] = useState(false);
  const [pledgeReward, setPledgeReward] = useState(false);

  const handleClickFaq = (e) => {
    setfaqone(!faqone);
  };
  return (
    <>
      <Navbar logoLevel={"2"} />
      <Box py={"50px"}>
        <Text fontSize={"35px"} fontWeight={""}>
          Beverly Bunny - indie animated feature film
        </Text>
        <Text fontSize={""} fontWeight={""}>
          by Jacob Kafka
        </Text>
      </Box>

      <FluidContainer>
      <Box px={{base:"0",lg:"100px"}}>
        <Breadcrumb spacing="8px" separator={<MdChevronRight size={""} />}>
          <BreadcrumbItem>
            <BreadcrumbLink fontSize={"20px"} href="#">
              REWARDS
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink fontSize={"20px"} href="#">
              ADD-ONS
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize={"20px"} href="#">
              PAYMENT
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box mt={"50px"} textAlign={"start"}>
          <Text fontSize={{base:"",lg:"30px"}} fontWeight={""}>
            Select your reward
          </Text>
          <Text mt={""} fontSize={""} fontWeight={""}>
            Select an option below
          </Text>

          <Box
            onClick={() => setPledgeReward(!pledgeReward)}
            mt={"20px"}
            border={"1px solid rgba(0,0,0,0.2)"}
            p={"20px"}
          >
            <Text mt={""} w={""} color={""} fontSize={"20px"}>
              Pledge without a reward
            </Text>
            {pledgeReward && (
              <>
                <Text
                  fontSize={"12px"}
                  p={""}
                  borderRadius={""}
                  mt={"40px"}
                  fontWeight={""}
                >
                  Bonus support(optional)
                </Text>
                <Flex alignItems={"center"} gap={"20px"}>
                  <InputGroup w={"70%"}>
                    <InputLeftAddon>$</InputLeftAddon>
                    <Input type="number" placeholder="0" />
                  </InputGroup>
                  <Button
                    mt={""}
                    w={"30%"}
                    //   W={{base:"100%",lg:"250px"}}
                    colorScheme="orange"
                    fontSize={"14px"}
                    fontWeight={500}
                    borderRadius={"none"}
                  >
                    Pledge $25
                  </Button>
                </Flex>
              </>
            )}
          </Box>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={"20px"}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box
              textAlign={"start"}
              mt={"20px"}
              border={"1px solid rgba(0,0,0,0.2)"}
              p={"20px"}
            >
              <Text fontSize={"22px"} fontWeight={""}>
                Pledge $5
              </Text>
              <Text mt={"10px"} fontSize={"20px"} fontWeight={"500"}>
                THANK YOU & UPDATES
              </Text>
              <Text
                mt={"10px"}
                fontSize={""}
                w={{ base: "100%", lg: "400px" }}
                fontWeight={""}
                color={"#656969"}
              >
                You will receive a big "THANK YOU" in the film's end credits,
                and be the first to receive exclusive updates, behind-the-scenes
                images, clips, and stories!
              </Text>
              <Text mt={"10px"} fontSize={""} fontWeight={""}>
                INCLUDES
              </Text>
              <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
                <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
                <Text mt={""} fontSize={""} fontWeight={""}>
                  Thank you in credits
                </Text>
              </Flex>
              <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
                <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
                <Text mt={""} fontSize={""} fontWeight={""}>
                  Thank you in credits
                </Text>
              </Flex>
              <Text mt={"20px"} fontSize={""} fontWeight={""}>
                ESTIMATED DELIVERY
              </Text>
              <Text mt={"5px"} fontSize={""} fontWeight={""}>
                Jan 2027
              </Text>
              <Text
                bg={"gray.50"}
                p={"10px"}
                w={"fit-content"}
                borderRadius={"5px"}
                mt={"20px"}
                fontSize={"15px"}
                fontWeight={""}
              >
                68 backers
              </Text>
              <Text
                fontSize={"12px"}
                p={""}
                borderRadius={""}
                mt={"40px"}
                fontWeight={""}
              >
                Bonus support(optional)
              </Text>
              <Flex alignItems={"center"} gap={"20px"}>
                <InputGroup w={"70%"}>
                  <InputLeftAddon>$</InputLeftAddon>
                  <Input type="number" placeholder="0" />
                </InputGroup>
                <Button
                  mt={""}
                  w={"30%"}
                  //   W={{base:"100%",lg:"250px"}}
                  colorScheme="orange"
                  fontSize={"14px"}
                  fontWeight={500}
                  borderRadius={"none"}
                >
                  Pledge $5
                </Button>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box mt={"20px"} textAlign={"start"}>
              <Text fontSize={"14px"}>
                Your pledge will support an ambitious creative project that has
                yet to be developed. There’s a risk that, despite a creator’s
                best efforts, your reward will not be fulfilled, and we urge you
                to consider this risk prior to pledging. Kickstarter is not
                responsible for project claims or reward fulfillment.
              </Text>
              <Text mt={"15px"} textDecoration={"underline"} fontSize={"14px"}>
                Learn more about accountability
              </Text>
              <Text fontWeight={"600"} mt={"15px"} fontSize={"14px"}>
                FREQUENTLY ASKED QUESTIONS
              </Text>
              <Box>
                <Flex
                  mt={"10px"}
                  alignItems={"center"}
                  onClick={handleClickFaq}
                >
                  {faqone === true ? <FaCaretDown /> : <FaCaretRight />}

                  <Text fontWeight={""} fontSize={"14px"}>
                    How do I pledge?
                  </Text>
                </Flex>
                {faqone === true && (
                  <Text mt={"5px"} fontWeight={""} fontSize={"14px"}>
                    Enter your pledge amount and select a reward. Then, enter
                    your payment information to complete the checkout process.
                  </Text>
                )}
              </Box>

              <Box>
                <Flex
                  mt={"10px"}
                  alignItems={"center"}
                  onClick={() => handleClickFaq("second")}
                >
                  {faq === "second" ? <FaCaretDown /> : <FaCaretRight />}

                  <Text fontWeight={""} fontSize={"14px"}>
                    When is my card charged?
                  </Text>
                </Flex>
                {faq === "second" && (
                  <Text mt={"5px"} fontWeight={""} fontSize={"14px"}>
                    If this project is successfully funded, your card will be
                    charged on Sat, May 25 2024 3:00 AM, along with all the
                    other backers of this project.
                  </Text>
                )}
              </Box>

              <Box>
                <Flex
                  mt={"10px"}
                  alignItems={"center"}
                  onClick={() => handleClickFaq("third")}
                >
                  {faq === "third" ? <FaCaretDown /> : <FaCaretRight />}

                  <Text fontWeight={""} fontSize={"14px"}>
                    So I'm only charged if funding succeeds?
                  </Text>
                </Flex>
                {faq === "third" && (
                  <Text mt={"5px"} fontWeight={""} fontSize={"14px"}>
                    Yes! That's part of what makes Kickstarter special. If a
                    project isn't successfully funded, no one pays anything.
                  </Text>
                )}
              </Box>

              <Box>
                <Flex
                  mt={"10px"}
                  alignItems={"center"}
                  onClick={() => handleClickFaq("third")}
                >
                  {faq === "third" ? <FaCaretDown /> : <FaCaretRight />}

                  <Text fontWeight={""} fontSize={"14px"}>
                    What can others see about my pledge?
                  </Text>
                </Flex>
                {faq === "third" && (
                  <Text mt={"5px"} fontWeight={""} fontSize={"14px"}>
                    The project will be added to the list of backings on your
                    profile page, but the amount you pledge, and the reward you
                    choose, will not be made public.
                  </Text>
                )}
              </Box>
              <Box>
                <Flex
                  mt={"10px"}
                  alignItems={"center"}
                  onClick={() => handleClickFaq("third")}
                >
                  {faq === "third" ? <FaCaretDown /> : <FaCaretRight />}

                  <Text fontWeight={""} fontSize={"14px"}>
                    What if I want to change my pledge?
                  </Text>
                </Flex>
                {faq === "third" && (
                  <Text mt={"5px"} fontWeight={""} fontSize={"14px"}>
                    You can change or cancel your pledge anytime before Sat, May
                    25 2024 3:00 AM.
                  </Text>
                )}
              </Box>
              <Box>
                <Flex
                  mt={"10px"}
                  alignItems={"center"}
                  onClick={() => handleClickFaq("third")}
                >
                  {faq === "third" ? <FaCaretDown /> : <FaCaretRight />}

                  <Text fontWeight={""} fontSize={"14px"}>
                    If this project is funded, how do I get my reward?
                  </Text>
                </Flex>
                {faq === "third" && (
                  <Text mt={"5px"} fontWeight={""} fontSize={"14px"}>
                    When your reward is ready, Jacob Kafka will send you a
                    survey via email to request any info needed to deliver your
                    reward (mailing address, T-shirt size, etc).
                  </Text>
                )}
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={"20px"}>
        <GridItem colSpan={{ base: "1fr" }}>
        <Box
        //   w={{ base: "100%", lg: "725px" }}
          textAlign={"start"}
          mt={"20px"}
          border={"1px solid rgba(0,0,0,0.2)"}
          p={"20px"}
        >
          <Text fontSize={"22px"} fontWeight={""}>
            Pledge $10
          </Text>
          <Text mt={"10px"} fontSize={"20px"} fontWeight={"500"}>
            DESKTOP WALLPAPER
          </Text>
          <Text
            mt={"10px"}
            fontSize={""}
            w={{ base: "100%", lg: "400px" }}
            fontWeight={""}
            color={"#656969"}
          >
            In addition to the previous tier's rewards, you will receive a
            high-resolution downloadable image from the film that you can use as
            your desktop or tablet wallpaper!
          </Text>
          <Text mt={"10px"} fontSize={""} fontWeight={""}>
            INCLUDES
          </Text>
          <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
            <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
            <Text mt={""} fontSize={""} fontWeight={""}>
              Desktop image
            </Text>
          </Flex>
          <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
            <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
            <Text mt={""} fontSize={""} fontWeight={""}>
              Thank you in credits
            </Text>
          </Flex>
          <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
            <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
            <Text mt={""} fontSize={""} fontWeight={""}>
              News & updates
            </Text>
          </Flex>
          <Text mt={"20px"} fontSize={""} fontWeight={""}>
            ESTIMATED DELIVERY
          </Text>
          <Text mt={"5px"} fontSize={""} fontWeight={""}>
            Jan 2027
          </Text>
          <Text
            bg={"gray.50"}
            p={"10px"}
            w={"fit-content"}
            borderRadius={"5px"}
            mt={"20px"}
            fontSize={"15px"}
            fontWeight={""}
          >
            22 backers
          </Text>
          <Text
            fontSize={"12px"}
            p={""}
            borderRadius={""}
            mt={"40px"}
            fontWeight={""}
          >
            Bonus support(optional)
          </Text>
          <Flex alignItems={"center"} gap={"20px"}>
            <InputGroup w={"70%"}>
              <InputLeftAddon>$</InputLeftAddon>
              <Input type="number" placeholder="0" />
            </InputGroup>
            <Button
              mt={""}
              w={"30%"}
              //   W={{base:"100%",lg:"250px"}}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              borderRadius={"none"}
            >
              Pledge $10
            </Button>
          </Flex>
        </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}></GridItem>
        </Grid>
       



        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={"20px"}>
        <GridItem colSpan={{ base: "1fr" }}>
        <Box
        
          textAlign={"start"}
          mt={"20px"}
          border={"1px solid rgba(0,0,0,0.2)"}
          p={"20px"}
        >
          <Text fontSize={"22px"} fontWeight={""}>
            Pledge $25
          </Text>
          <Text mt={"10px"} fontSize={"20px"} fontWeight={"500"}>
            STREAM THE FILM
          </Text>
          <Text
            mt={"10px"}
            fontSize={""}
            w={{ base: "100%", lg: "400px" }}
            fontWeight={""}
            color={"#656969"}
          >
            In addition to the previous tiers' rewards, you will be the first to
            receive a private, password-protected link to stream "Beverly Bunny"
            after the film’s festival and theatrical premieres! INCLUDES
          </Text>
          <Text mt={"10px"} fontSize={""} fontWeight={""}>
            INCLUDES
          </Text>
          <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
            <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
            <Text mt={""} fontSize={""} fontWeight={""}>
              Desktop image
            </Text>
          </Flex>
          <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
            <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
            <Text mt={""} fontSize={""} fontWeight={""}>
              Thank you in credits
            </Text>
          </Flex>
          <Flex mt={"10px"} alignItems={"center"} gap={"20px"}>
            <Box bg={"black"} borderRadius={"50%"} p={"3px"} />
            <Text mt={""} fontSize={""} fontWeight={""}>
              News & updates
            </Text>
          </Flex>
          <Text mt={"20px"} fontSize={""} fontWeight={""}>
            ESTIMATED DELIVERY
          </Text>
          <Text mt={"5px"} fontSize={""} fontWeight={""}>
            Jan 2027
          </Text>
          <Text
            bg={"gray.50"}
            p={"10px"}
            w={"fit-content"}
            borderRadius={"5px"}
            mt={"20px"}
            fontSize={"15px"}
            fontWeight={""}
          >
            22 backers
          </Text>
          <Text
            fontSize={"12px"}
            p={""}
            borderRadius={""}
            mt={"40px"}
            fontWeight={""}
          >
            Bonus support(optional)
          </Text>
          <Flex alignItems={"center"} gap={"20px"}>
            <InputGroup w={"70%"}>
              <InputLeftAddon>$</InputLeftAddon>
              <Input type="number" placeholder="0" />
            </InputGroup>
            <Button
              mt={""}
              w={"30%"}
              //   W={{base:"100%",lg:"250px"}}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              borderRadius={"none"}
            >
              Pledge $25
            </Button>
          </Flex>
        </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}></GridItem>
        </Grid>



      
        </Box>
      </FluidContainer>
    </>
  );
};

export default Category;
