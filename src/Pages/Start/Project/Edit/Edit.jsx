import { Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import FluidContainer from "../../../../Components/shared/containerFluid";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Basics from "./Basics/Basics";
import Rewards from "./Rewards/Rewards";
import { FaFilePen } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbBrandCashapp } from "react-icons/tb";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import Story from "./Story/Story";
import People from "./People/People";
import Payment from "./Payment/Payment";
import Promotion from "./Promotion/Promotion";
import Footer from "../../../../Components/Footer";
import axiosInstance from "../../../../libs/axiosService";

const Edit = () => {
  const [searchParams] = useSearchParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  console.log(project);
  const { id } = useParams();
  const toast = useToast();
  const tabNames = ["Basics", "Rewards", "Story", "People", "Payment", "Promotion"];

  useEffect(() => {
    const tab = searchParams.get("tab");
    const tabIndex = tabNames.indexOf(tab);
    if (tabIndex !== -1) {
      setActiveTabIndex(tabIndex);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axiosInstance.get('/project/' + id);
        setProject(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response?.data || "Failed to fetch project.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    fetchProjectData();
  }, [toast]);


  const handleNextClick = () => {
    if (activeTabIndex === tabNames.length - 1) {
      // Handle submit action here
      console.log('Submit the form or perform the submit action');
    } else {
      const nextIndex = (activeTabIndex + 1) % tabNames.length;
      navigate(`/edit/${id}?tab=${tabNames[nextIndex]}`);
      setActiveTabIndex(nextIndex);
    }
  };

  return (
    <>
      <FluidContainer>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={""}
          py={"20px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"} gap={"20px"}>
            <Link to="/">
              <Image
                src={"../images/logo.png"}
                alt="gorilla-funder"
                h={["4vh", "5vh"]}
              />
            </Link>
            <Link to="/start">
              <Flex alignItems={"center"} gap={"10px"} cursor={"pointer"}>
                <FaLongArrowAltLeft size={"15px"} />
                <Text fontSize={"15px"} fontWeight={""} color={""}>
                  {
                    project?.basic?.subcategory ? project?.basic?.subcategory : "New"
                  }
                  {" "}
                  -
                   Project
                </Text>
              </Flex>
            </Link>
          </Flex>

          <Flex
            mt={{ base: "20px", lg: "0" }}
            alignItems={"center"}
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={"center"}
            gap={"10px"}
          >
            <Button
              w={{ base: "100vw", lg: "150px" }}
              colorScheme="gray"
              fontSize={"14px"}
              fontWeight={500}
            >
              <IoEyeSharp style={{ marginRight: "10px" }} />
              Preview
            </Button>
            <Button
              w={{ base: "100vw", lg: "150px" }}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              onClick={handleNextClick}
            >
              {activeTabIndex === tabNames.length - 1 ? 'Submit' : `Next: ${tabNames[(activeTabIndex + 1) % tabNames.length]}`}
            </Button>
          </Flex>
        </Flex>

        <Tabs index={activeTabIndex}>
          <TabList
            display="flex"
            justifyContent={"space-around"}
            flexDirection={["column", null, "row"]}
          >
            {tabNames.map((tabName, index) => (
              <Tab
                key={index}
                onClick={() => {
                  navigate(`/edit/${id}?tab=${tabName}`);
                  setActiveTabIndex(index);
                }}
              >
                <Flex flexDirection={"column"} alignItems={"center"}>
                  {index === 0 && <FaFilePen size={"20px"} color="orange" />}
                  {index === 1 && <FaGift size={"20px"} color="orange" />}
                  {index === 2 && <FaBookReader size={"20px"} color="orange" />}
                  {index === 3 && <BsFillPeopleFill size={"20px"} color="orange" />}
                  {index === 4 && <TbBrandCashapp size={"20px"} color="orange" />}
                  {index === 5 && <HiMiniSpeakerWave size={"20px"} color="orange" />}
                  <Text>{tabName}</Text>
                </Flex>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <Basics project={project} handleNextClick={handleNextClick} />
            </TabPanel>
            <TabPanel>
              <Rewards  project={project} handleNextClick={handleNextClick}/>
            </TabPanel>
            <TabPanel>
              <Story />
            </TabPanel>
            <TabPanel>
              <People />
            </TabPanel>
            <TabPanel>
              <Payment />
            </TabPanel>
            <TabPanel>
              <Promotion />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Footer />
      </FluidContainer>
    </>
  );
};

export default Edit;
