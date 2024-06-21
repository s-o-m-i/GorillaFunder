import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ImQuotesLeft } from "react-icons/im";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const playVideo = () => {
    setIsPlaying(prevState => !prevState);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

 
  return (
    <>
      {/* <VStack divider={<StackDivider borderColor="gray.200" />} spacing={"auto"}> */}
      <Navbar />

      <Container>
        <Box px={""} py={"50px"} textAlign={"start"}>
          <Heading
            lineHeight={"1.1"}
            textAlign={"start"}
            as={"h1"}
            fontSize={"55px"}
          >
            Bring your creative <br /> project to life.
          </Heading>
          <Link to={"/start"}>
            <Button
              mt={"20px"}
              colorScheme="orange"

              fontSize={"14px"}
              fontWeight={500}

            >
              Start a Project
            </Button>
          </Link>
        </Box>
      </Container>

      <Box
        display={{ base: "block", lg: "flex" }}
        alignItems={""}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Image
          w={"600px"}
          //   width={"600px"}

          src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-1-6e68a182e1340ce87d9b3c9f9a25da52935d14be496a4e88085025ae54bb870d.jpg"
          alt=""
        />
        <Box
          mt={{ base: "30px", lg: "0px" }}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        //  gap={{base:"10px",lg:"50px"}}
        >
          <Image
            w={"440px"}
            // h={"300px"}
            src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-2-8c80ae939629f8b10087e097c965990ff4b3eae72b90b51fc597c7f794420881.jpg"
            alt=""
          />
          <Image
            w={"440px"}
            // h={"300px"}
            src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg"
            alt=""
          />
        </Box>
      </Box>

      <Box
        mt={"50px"}
        bg={"orange"}
        alignItems={"flex-start"}
        py={{ base: "20px", lg: "60px" }}
        px={{ base: "20px", lg: "180px" }}
      //  display={"flex"} justifyContent={"space-between"}
      >
        <ImQuotesLeft size={"40px"} />
        <Text
          textAlign={"start"}
          fontSize={{ base: "20px", lg: "40px" }}
          lineHeight={"1"}
        >
          We see GorillaFunder as a home for creative minds and a wonderful
          platform; where people who believe, respect, and see the vision can
          support an idea and make it a reality.
        </Text>
      </Box>

      <Box px={{ base: "20px", lg: "180px" }}>
        <Text
          textAlign={"start"}
          fontSize={"35px"}
          lineHeight={"1.1"}
          my={"80px"}
          fontWeight={"bold"}
        >
          A GorillaFunder project does more than raise <br /> money. It builds
          community around your <br /> work.
        </Text>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={""}
        >
          <Text
            textAlign={"start"}
            fontSize={{ base: "25px" }}
            lineHeight={""}
            fontWeight={"500"}
          >
            What can I use <br /> GorillaFunder to fund?
          </Text>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            GorillaFunder is specifically for creative projects in the following
            categories: Art, Comics, Crafts, Dance, Design, Fashion, Film &
            Video, Food, Games, Journalism, Music, Photography, Publishing,
            Technology, and Theater. Make an album, write a book, create an
            immersive theater experience, score a film — you name it. Read more
            about
          </Text>
        </Flex>

        <Flex
          mt={"60px"}
          justifyContent={"space-between"}
          alignItems={""}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text
            textAlign={"start"}
            fontSize={{ base: "25px" }}
            lineHeight={""}
            fontWeight={"500"}
          >
            Who can I get <br /> pledges from?
          </Text>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            Millions of people visit GorillaFunder every week, but support always
            begins with people you know. Friends, fans, and the communities
            you’re a part of will likely be some of your earliest supporters,
            not to mention your biggest resources for spreading the word about
            your project.
          </Text>
        </Flex>

        <Flex
          mt={"60px"}
          justifyContent={"space-between"}
          alignItems={""}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text
            textAlign={"start"}
            fontSize={{ base: "25px" }}
            lineHeight={""}
            fontWeight={"500"}
          >
            How much work is it <br /> to run a project?
          </Text>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            Every GorillaFunder project has its share of exhilarating and
            challenging moments, but the amount of work generally depends on the
            size and complexity of the project.
          </Text>
        </Flex>

        <Flex
          mb={"80px"}
          my={"60px"}
          justifyContent={"space-between"}
          alignItems={""}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text
            textAlign={"start"}
            fontSize={{ base: "25px" }}
            lineHeight={""}
            fontWeight={"500"}
          >
            How do I get in touch <br /> with questions?
          </Text>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            You can reach out with your questions through this contact form. We
            also recommend taking a look at our FAQs for more detailed
            information, along with the creator handbook for guidance on
            starting and running a project.
          </Text>
        </Flex>
      </Box>

      {/* video section */}
      <Box position={"relative"} bg={"orange"} py={"40px"} w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
        <video ref={videoRef} poster="https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg" src="/images/startprojectvideo.mp4" controls width={"900px"} 
        >
        </video>
        <Text onClick={playVideo} cursor={"pointer"} bg={"orange"} borderRadius={"5px"} py={"5px"} px={"20px"} position={"absolute"} fontSize={"30px"}>{isPlaying ? 'Pause' : 'Play'}</Text>

      </Box>




      <Box px={{ base: "20px", lg: "180px" }}>
        <Text
          textAlign={"start"}
          fontSize={"35px"}
          lineHeight={"1.1"}
          my={"80px"}
          fontWeight={"bold"}
        >
          Why GorillaFunder?
        </Text>
        <Flex

          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={""}
        >
          <Box>
            <Text textAlign={"start"}>1</Text>
            <Text
              textAlign={"start"}
              fontSize={{ base: "25px" }}
              lineHeight={""}
              fontWeight={"500"}
            >
              GorillaFunder is just for <br /> creative projects.
            </Text>
          </Box>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            GorillaFunder is specifically for creative projects in the following
            categories: Art, Comics, Crafts, Dance, Design, Fashion, Film &
            Video, Food, Games, Journalism, Music, Photography, Publishing,
            Technology, and Theater. Make an album, write a book, create an
            immersive theater experience, score a film — you name it. Read more
            about
          </Text>
        </Flex>

        <Flex
          mt={"60px"}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={""}
        >
          <Box>
            <Text textAlign={"start"}>2</Text>
            <Text
              textAlign={"start"}
              fontSize={{ base: "25px" }}
              lineHeight={""}
              fontWeight={"500"}
            >
              GorillaFunder is just for <br /> creative projects.
            </Text>
          </Box>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            GorillaFunder is specifically for creative projects in the following
            categories: Art, Comics, Crafts, Dance, Design, Fashion, Film &
            Video, Food, Games, Journalism, Music, Photography, Publishing,
            Technology, and Theater. Make an album, write a book, create an
            immersive theater experience, score a film — you name it. Read more
            about
          </Text>
        </Flex>

        <Flex
          mt={"60px"}
          mb={"80px"}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={""}
        >
          <Box>
            <Text textAlign={"start"}>3</Text>
            <Text
              textAlign={"start"}
              fontSize={{ base: "25px" }}
              lineHeight={""}
              fontWeight={"500"}
            >
              GorillaFunder is just for <br /> creative projects.
            </Text>
          </Box>
          <Text
            w={{ base: "100%", lg: "500px" }}
            textAlign={"start"}
            fontSize={""}
            lineHeight={""}
            fontWeight={"500"}
          >
            GorillaFunder is specifically for creative projects in the following
            categories: Art, Comics, Crafts, Dance, Design, Fashion, Film &
            Video, Food, Games, Journalism, Music, Photography, Publishing,
            Technology, and Theater. Make an album, write a book, create an
            immersive theater experience, score a film — you name it. Read more
            about
          </Text>
        </Flex>



      </Box>


      <Divider bg={"black"} h={"3px"} />


      <Box
        mt={"50px"}
        bg={"orange"}
        textAlign={"start"}
        py={{ base: "20px", lg: "90px" }}
        px={{ base: "20px", lg: "180px" }}
      //  display={"flex"} justifyContent={"space-between"}
      >
        {/* <ImQuotesLeft size={"40px"} /> */}
        <Text
          textAlign={"start"}
          fontSize={{ base: "20px", lg: "40px" }}
          lineHeight={"1.1"}
          fontWeight={"bold"}
        >
          “A way for every creative person to control their destiny.”
        </Text>
        <Text
          my={"30px"}
          textAlign={"start"}
        //   fontSize={{ base: "20px", lg: "40px" }}
        //   lineHeight={"1.1"}
        //   fontWeight={"bold"}
        >
          — Brian Fargo, successful GorillaFunder project creator
        </Text>

        <Link to={"/start"}>

          <Button

            colorScheme="orange"

            fontSize={"14px"}
            fontWeight={500}

          >

            Start a project
          </Button>
        </Link>
      </Box>






      <Footer />
      {/* </VStack> */}
    </>
  );
};

export default CommingSoon;
