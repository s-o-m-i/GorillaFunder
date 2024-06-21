import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Box, Button, Container, Divider, Flex, Input, Select, Text, useToast } from '@chakra-ui/react';
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import axiosInstance from '../../libs/axiosService'; // Import your axios instance
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const [lastStep, setLastStep] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/movies-categories');
        setCategories(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response?.data?.error || "Failed to fetch categories.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axiosInstance.get('/countries');
        setCountries(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response?.data?.error || "Failed to fetch countries.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    fetchCategories();
    fetchCountries();
  }, [toast]);

  const changeCategory = (e) => {
    setSelectedCategory(e.target.value);
    localStorage.setItem('project-category', e.target.value);
  };

  const changeCountry = (e) => {
    setCountry(e.target.value);
    localStorage.setItem('project-country', e.target.value);
  };

  
	const handleSubmit = async (e) => {
	  e.preventDefault();
    const body = {
      basic : {
        title: "Untitled",
        category: "Film & Video",
        subcategory: selectedCategory,
        location: country,
      }
    };
	  try {
		const response = await axiosInstance.post("/project", body);
    if (response.data.projectId) {
      navigate(`/edit/${response.data.projectId}`);
      localStorage.setItem('selectedProject', response.data.projectId);
      toast({
        title: "Project Created.",
        description: "Please fill the required information to live your project.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
	  } catch (error) {
		toast({
		  title: "Error",
		  description: error.response?.data?.error || "Something went wrong.",
		  status: "error",
		  duration: 3000,
		  isClosable: true,
		});
	  }
	};

  return (
    <>
      <Navbar />
      {!lastStep && (
        <Box>
          <Box mt={"80px"}>
            <Text mb={"30px"} fontSize={"27px"}>First, let’s get you set up.</Text>
            <Text lineHeight={"1"} fontSize={"24px"}>Select a primary category and subcategory for your <br /> new project.</Text>
            <Text fontSize={"17px"} mt={"10px"} color={"gray.500"}>
              These will help backers find your project, and you can change them <br /> later if you need to.to.
            </Text>
          </Box>

          <Container>
            <Flex flexDirection={{ base: "column", lg: "row" }} mt={"30px"} alignItems={"center"} gap={"10px"} justifyContent={"center"}>

              <Input placeholder='Film & Video' size='md' value={"Film & Video"} />

              <Select placeholder='Select Subcategory' value={selectedCategory} onChange={(e) => changeCategory(e)}>
                {categories.map(category => (
                  <option key={category.id} value={category.category} style={{ textTransform: "capitalize" }}>
                    {category.category}
                  </option>
                ))}
              </Select>

            </Flex>

            <Divider mt={"80px"} bg={"black"} h={"1px"} />

            <Flex flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-between"} my={"30px"}>
              <Text mb={{ base: "10px", lg: "0" }}>Welcome back.</Text>
              <Button
                onClick={() => setLastStep(true)}
                colorScheme="orange"
                fontSize={"14px"}
                fontWeight={500}
              >
                Next: Additional subcategory
              </Button>
            </Flex>
          </Container>
        </Box>
      )}

      {lastStep && (
        <Box>
          <Box mt={"80px"}>
            <Text fontSize={"27px"}>Last one—set a location for your project.</Text>
            <Text fontSize={"17px"} mt={"10px"} color={"gray.500"}>
              Pick your country of legal residence if you’re raising funds as an <br /> individual. If you’re raising funds for a business or nonprofit, select the <br /> country where the entity’s tax ID is registered.
            </Text>
          </Box>

          <Container>
            <Select mt={"30px"} placeholder='Select country' value={country} onChange={(e) =>
              changeCountry(e)
            }>
              {countries.map(country => (
                <option key={country.id} value={country.country}>
                  {country.country}
                </option>
              ))}
            </Select>

            <Flex mt={"10px"} alignItems={"center"} gap={"10px"}>
              <RiErrorWarningLine />
              <Text>Who’s eligible to run a GorillaFunder project?</Text>
            </Flex>

            <Divider mt={"80px"} bg={"black"} h={"1px"} />

            <Flex flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-between"} my={"30px"}>
              <Flex alignItems={"center"} gap={"10px"} cursor={"pointer"} onClick={() => {
                setLastStep(false);
              }} >
                <IoIosArrowRoundBack />
                <Text mb={{ base: "10px", lg: "0" }}>Additional subcategory</Text>
              </Flex>
                <Button
                  colorScheme="orange"
                  fontSize={"14px"}
                  fontWeight={500}
                  cursor={"pointer"}
                  onClick={handleSubmit}
                >
                  Continue
                </Button>
            </Flex>
          </Container>
        </Box>
      )}
      <Footer />
    </>
  );
}

export default Start;
