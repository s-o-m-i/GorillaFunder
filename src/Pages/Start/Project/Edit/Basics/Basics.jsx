import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Select } from "@chakra-ui/react";
import { MdOndemandVideo } from "react-icons/md";
import { FaImage, FaTrashAlt } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import axiosInstance from "../../../../../libs/axiosService";
import { useParams } from "react-router-dom";
import useUpdateProject from "../../../../../libs/useUpdateProjectService";
import { debounce, set } from 'lodash';

const Basics = ({ project, handleNextClick }) => {


  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLatePledge, setSelectedLatePledge] = useState('no');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const { id } = useParams();

  const { updateProjectField } = useUpdateProject(id);

  // Debounce the updateProjectField function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdateProjectField = useCallback(
    debounce((field, value) => {
      updateProjectField(field, value);
    }, 300), // Adjust the debounce delay as needed
    []
  );

  const handleChange = (e, key, customValue) => {
    if (customValue) {
      debouncedUpdateProjectField(key, customValue);
      return;
    }
    if (e.target.value) {
      const { value } = e.target;
      debouncedUpdateProjectField(key, value);
    }
  };


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

    fetchCountries();
    fetchCategories();
  }, [toast]);

  useEffect(() => {
    if (project) {
      setSelectedOption(project?.basic?.campaign_duration_type)
      setSelectedLatePledge(project?.basic?.late_pledge_duration)
      setSelectedImage(project?.basic?.project_image)
      setSelectedVideo(project?.basic?.project_video)
    }
  }, [project])


  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);

    try {
      const response = await axiosInstance.post('/upload', formData); // Adjust the URL according to your API
      console.log(response.data);
      setSelectedImage(process.env.REACT_APP_API_BASE_URL + response.data.urls.image); // Adjust according to your API response
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageDelete = (url) => {
    // get the image name from the URL
    const imageName = url.split('/').pop();
    // send a DELETE request to the server
    axiosInstance.delete(`/uploads/${imageName}`)
      .then(response => {
        // clear the selected image
        setSelectedImage(null);
        debouncedUpdateProjectField('basic.project_image', "");
      })
      .catch(error => console.error('Error deleting image:', error));

    setSelectedImage(null);
  };


  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    setLoading(true);

    try {
      const response = await axiosInstance.post('/upload', formData); // Adjust the URL according to your API
      setSelectedVideo(process.env.REACT_APP_API_BASE_URL + response.data.urls.video); // Adjust according to your API response
    } catch (error) {
      console.error('Error uploading video:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoDelete = (url) => {

    // get the video name from the URL
    const videoName = url.split('/').pop();
    // send a DELETE request to the server
    axiosInstance.delete(`/uploads/${videoName}`)
      .then(response => {
        // clear the selected video
        setSelectedVideo(null);
        debouncedUpdateProjectField('basic.project_video', "");
      })
      .catch(error => console.error('Error deleting video:', error));
  };

  useEffect(() => {

    if (selectedImage) {
      debouncedUpdateProjectField('basic.project_image', selectedImage);
    }

    if (selectedVideo) {
      debouncedUpdateProjectField('basic.project_video', selectedVideo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVideo, selectedImage])

  return (
    <>
      <Box>
        <Box py={"40px"}>
          <Text fontSize={"27px"} fontWeight={""} color={""}>
            Start with the basics
          </Text>
          <Text mt={"10px"} fontSize={"18px"} fontWeight={""} color={"#656969"}>
            Make it easy for people to learn about your project.
          </Text>
        </Box>

        <Divider my={"30px"} />

        <Box textAlign={"start"}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Project title
              </Text>
              <Text
                mt={"10px"}
                w={{ base: "100%", lg: "380px" }}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Write a clear, brief title and subtitle to help people quickly
                understand your project. Both will appear on your project and
                pre-launch pages.
              </Text>
              <Text
                mt={"20px"}
                w={{ base: "100%", lg: "380px" }}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Potential backers will also see them if your project appears on
                category pages, search results, or in emails we send to our
                community.
              </Text>
            </GridItem>

            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={""} fontWeight={""} color={""}>
                Title
              </Text>
              <Input
                placeholder="Title"
                defaultValue={project?.basic?.title}
                onChange={(e) => handleChange(e, 'basic.title')}
                mt={"10px"}
                size="md"
              />
              <Text mt={"43px"} fontSize={""} fontWeight={""} color={""}>
                Subtitle
              </Text>
              <Textarea
                resize={"none"}
                defaultValue={project?.basic?.subtitle}
                onChange={(e) => handleChange(e, 'basic.subtitle')}
                placeholder="Subtitle"
                mt={"10px"}
                size="md"
              />
              <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
                <CiLocationOn
                  size={"20px"}
                  color="orange"
                  fontWeight={"bold"}
                />
                <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                  Give backers the best first impression of your project with
                  great titles. Learn more...
                </Text>
              </Flex>
            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Project category
              </Text>
              <Text
                mt={"10px"}
                w={{ base: "100%", lg: "380px" }}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Write a clear, brief title and subtitle to help people quickly
                understand your project. Both will appear on your project and
                pre-launch pages.
              </Text>
              <Text
                mt={"20px"}
                w={{ base: "100%", lg: "380px" }}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Potential backers will also see them if your project appears on
                category pages, search results, or in emails we send to our
                community.
              </Text>
            </GridItem>

            <GridItem colSpan={{ base: "1fr" }}>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box w={"100%"}>
                  <Text fontSize={""} fontWeight={""} color={"orange"}>
                    Primary category
                  </Text>
                  <Input placeholder='Film & Video' size='md' value={"Film & Video"} mt={"10px"} />
                </Box>
                <Box w={"100%"}>
                  <Text fontSize={""} fontWeight={""} color={"orange"}>
                    Primary subcategory
                  </Text>
                  <Select mt={"10px"} placeholder='Select Subcategory' value={selectedCategory || project?.basic?.subcategory} onChange={(e) => {
                    handleChange(e, 'basic.subcategory')
                    setSelectedCategory(e.target.value)
                  }
                  }>
                    {categories.map(category => (
                      <option key={category.id} value={category.category} style={{ textTransform: "capitalize" }}>
                        {category.category}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Flex>

            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid py={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Project location
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Enter the location that best describes where your project is
                based.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Select mt={"30px"} placeholder='Select location' value={country || project?.basic?.location} onChange={(e) => {
                setCountry(e.target.value)
                handleChange(e, 'basic.location')
              }}>
                {countries.map(country => (
                  <option key={country.id} value={country.country}>
                    {country.country}
                  </option>
                ))}
              </Select>
            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid py={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Project image
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Add an image that clearly represents your project. Choose one
                that looks good at different sizes—it’ll appear on your project
                page, across the GorillaFunder website and mobile apps, and (when
                shared) on social channels.
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Your image should be at least 1024x576 pixels. It will be
                cropped to a 16:9 ratio.
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Avoid images with banners, badges, or text—they are illegible at
                smaller sizes, can be penalized by the Facebook algorithm, and
                decrease your chances of getting GorillaFunder homepage and
                newsletter features.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              {!selectedImage ? (
                <Box
                  border={"1px solid rgba(0,0,0,0.1)"}
                  p={"40px"}
                  bg={"#FBFBFA"}
                  position="relative"
                >
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    opacity="0"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    cursor="pointer"
                  />
                  <Flex justifyContent={"center"} mb={"30px"}>
                    <Box
                      borderRadius={"50%"}
                      bg={"white"}
                      p={"20px"}
                      boxShadow={"1px 1px 10px gray"}
                    >
                      <FaImage size={"30px"} />
                    </Box>
                  </Flex>
                  <Text
                    fontSize={""}
                    textAlign={"center"}
                    fontWeight={""}
                    color={""}
                  >
                    Drop an image here or select a file
                  </Text>
                  <Text
                    fontSize={"14px"}
                    textAlign={"center"}
                    fontWeight={""}
                    mt={"5px"}
                    color={"#656E72"}
                  >
                    It must be a JPG, PNG, GIF, or WEBP, no larger than 50 MB.
                  </Text>
                </Box>
              ) : (
                <Box position="relative">
                  <Image src={selectedImage} alt="Selected" borderRadius="10px" />
                  <IconButton
                    icon={<FaTrashAlt />}
                    position="absolute"
                    top="10px"
                    right="10px"
                    onClick={() => handleImageDelete(selectedImage)}
                    aria-label="Delete Image"
                  />
                </Box>
              )}
            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid py={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Project video (optional)
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Add a video that describes your project.
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Tell people what you’re raising funds to do, how you plan to
                make it happen, who you are, and why you care about this
                project.
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                After you’ve uploaded your video, use our editor to add captions
                and subtitles so your project is more accessible to everyone.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              {!selectedVideo ? (
                <Box
                  border={"1px solid rgba(0,0,0,0.1)"}
                  p={"40px"}
                  bg={"#FBFBFA"}
                  position="relative"
                >
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    opacity="0"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    cursor="pointer"
                  />
                  <Flex justifyContent={"center"} mb={"30px"}>
                    <Box
                      borderRadius={"50%"}
                      bg={"white"}
                      p={"20px"}
                      boxShadow={"1px 1px 10px gray"}
                    >
                      <MdOndemandVideo size={"30px"} />
                    </Box>
                  </Flex>
                  <Text
                    fontSize={""}
                    textAlign={"center"}
                    fontWeight={""}
                    color={""}
                  >
                    Drop a video here or select a file
                  </Text>
                  <Text
                    fontSize={"14px"}
                    textAlign={"center"}
                    fontWeight={""}
                    mt={"5px"}
                    color={"#656E72"}
                  >
                    It must be a MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV, no larger than 5120 MB.
                  </Text>
                </Box>
              ) : (
                <Box position="relative">
                  <video width="100%" controls>
                    <source src={selectedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <IconButton
                    icon={<FaTrashAlt />}
                    position="absolute"
                    top="10px"
                    right="10px"
                    onClick={() => handleVideoDelete(selectedVideo)}
                    aria-label="Delete Video"
                  />
                </Box>
              )}
              <Flex mt={"10px"} alignItems={"center"} gap={"10px"}>
                <MdOndemandVideo size={"20px"} color="orange" fontWeight={"bold"} />
                <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                  80% of successful projects have a video. Make a great one, regardless of your budget. Learn more...
                </Text>
              </Flex>
            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid py={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Funding goal
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Set an achievable goal that covers what you need to complete
                your project.
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Funding is all-or-nothing. If you don’t meet your goal, you
                won’t receive any money.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <InputGroup>
                <InputLeftAddon>$</InputLeftAddon>
                <Input type="number" placeholder="0"
                  min={1}
                  max={100000000}
                  defaultValue={project?.basic?.funding_goal_amount}
                  onChange={(e) => {
                    handleChange(e, 'basic.funding_goal_amount')
                    setTimeout(() => {
                      handleChange(e, 'basic.funding_goal_type', "$")
                    }, 700);
                  }}

                />
              </InputGroup>
              <Text
                fontSize={"14px"}
                mt={"5px"}
                fontWeight={""}
                color={"orange"}
              >
                Your funding goal must be between AU$ 1 or AU$ 100,000,000
              </Text>
            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid py={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Target launch date (optional)
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                We’ll provide you with recommendations on when to complete steps
                that may take a few days to process. You can edit this date up
                until the moment you launch your project, which must always be
                done manually.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Box border={"1px solid rgba(0,0,0,0.1)"} bg={"#FBFBFA"} px={"20px"} py={"40px"}>
                <Input
                  mb={"20px"}
                  type="date"
                  defaultValue={project?.basic?.target_launch_date}
                  onChange={(e) => handleChange(e, 'basic.target_launch_date')}
                  placeholder="medium size"
                  size="md"
                />

                <Text fontSize={"18px"} fontWeight={""} color={""}>
                  We'll recommend when you should:
                </Text>
                <Flex alignItems={"center"} mt={"15px"} gap={"10px"}>
                  <Box bg={"gray"} borderRadius={"50%"} p={"3px"}></Box>
                  <Text fontSize={""} fontWeight={""} color={""}>
                    Confirm your identity and provide payment details
                  </Text>
                </Flex>
                <Flex alignItems={"center"} mt={"15px"} gap={"10px"}>
                  <Box bg={"gray"} borderRadius={"50%"} p={"3px"}></Box>
                  <Text fontSize={""} fontWeight={""} color={""}>
                    Submit your project for review
                  </Text>
                </Flex>
              </Box>

              <Flex mt={"10px"} alignItems={"center"} gap={"10px"}>
                <CiLocationOn
                  size={"20px"}
                  color="orange"
                  fontWeight={"bold"}
                />
                <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                  Setting a target date won’t automatically launch your project.
                </Text>
              </Flex>
            </GridItem>
          </Grid>

          <Divider my={"60px"} />

          <Grid py={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <GridItem colSpan={{ base: "1fr" }}>
              <Text fontSize={"18px"} fontWeight={"500"} color={""}>
                Campaign duration
              </Text>
              <Text
                w={{ base: "100%", lg: "380px" }}
                mt={"10px"}
                fontSize={""}
                fontWeight={""}
                color={"#656969"}
              >
                Set a time limit for your campaign. You won’t be able to change
                this after you launch.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: "1fr" }}>
              <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                <RadioGroup onChange={() => {
                  setSelectedOption("fixed_days")
                  handleChange(null, 'basic.campaign_duration_type', "fixed_days")
                }} value={selectedOption}>
                  <Stack>
                    <Radio value="fixed_days">
                      <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                        Fixed number of days (1-60)
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>

                {selectedOption === 'fixed_days' && (
                  <>
                    <Divider my={"20px"} />
                    <Text mt={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Enter number of days
                    </Text>
                    <Input mt={"10px"} type="number"
                      defaultValue={project?.basic?.campaign_duration}
                      onChange={(e) => handleChange(e, 'basic.campaign_duration')}
                      placeholder="30" size="md" />
                  </>
                )}
              </Box>

              <Box mt={"20px"} border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                <RadioGroup onChange={() => {
                  setSelectedOption("end_date_time")
                  handleChange(null, 'basic.campaign_duration_type', "end_date_time")
                }} value={selectedOption}>
                  <Stack>
                    <Radio value="end_date_time">
                      <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                        End on a specific date & time
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>

                {selectedOption === 'end_date_time' && (
                  <>
                    <Divider my={"20px"} />
                    <Text mt={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Select Date & Time
                    </Text>
                    <Input mt={"10px"} type="datetime-local"
                      defaultValue={project?.basic?.campaign_duration}
                      onChange={(e) => handleChange(e, 'basic.campaign_duration')}
                      size="md" />

                  </>
                )}
              </Box>

              <Flex mt={"10px"} alignItems={"center"} gap={"10px"}>
                <CiLocationOn
                  size={"20px"}
                  color="orange"
                  fontWeight={"bold"}
                />
                <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                  Campaigns that last 30 days or less are more likely to be
                  successful. Learn more...
                </Text>
              </Flex>

              <Box mt={"20px"} border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                <Flex mt={""} alignItems={"end"} gap={"20px"}>
                  <Box bg={"orange"} borderRadius={"50%"} p={"5px"}>
                    <MdMoreTime mb={""} size={"40px"} />
                  </Box>
                  <Box>
                    <Text fontSize={"18px"} fontWeight={"bold"}>
                      Introducing Late Pledges
                    </Text>
                    <Text mt={"15px"} fontSize={"18px"}>
                      Backers can now continue to pledge to your project after
                      it has successfully funded.
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box borderRadius={"10px"} mt={"20px"} border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                <RadioGroup onChange={
                  () => {
                    setSelectedLatePledge("no")
                    handleChange(null, 'basic.late_pledge_duration', "no")
                  }
                } value={selectedLatePledge}>
                  <Stack>
                    <Radio value="no">
                      <Text ml={"20px"} fontSize={"18px"} fontWeight={""} color={""}>
                        No don't enable Late Pledges
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>

                {selectedLatePledge === 'no' && (
                  <Text ml={"43px"} mt={"20px"} fontSize={"14px"} fontWeight={""} color={""}>
                    Backers will only be able to pledge to your project until it
                    reaches its deadline.
                  </Text>
                )}
              </Box>

              <Box borderRadius={"10px"} mt={"20px"} border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                <RadioGroup onChange={() => {
                  setSelectedLatePledge("yes")
                  handleChange(null, 'basic.late_pledge_duration', "yes")
                }} value={selectedLatePledge}>
                  <Stack>
                    <Radio value="yes">
                      <Text ml={"20px"} fontSize={"18px"} fontWeight={""} color={""}>
                        Yes enable Late Pledges
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>

                {selectedLatePledge === 'yes' && (
                  <Text ml={"43px"} mt={"20px"} fontSize={"14px"} fontWeight={""} color={""}>
                    Backers will be able to pledge for rewards configured to be available beyond the campaign deadline. You'll configure rewards to be available for late pledges when creating them.
                  </Text>
                )}
              </Box>

              <Flex justifyContent={"end"}>

                <Button
                  mt={"20px"}
                  w={"100px"}
                  colorScheme="orange"
                  fontSize={"14px"}
                  fontWeight={500}
                  onClick={handleNextClick}
                >
                  Save
                </Button>
              </Flex>

            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Basics;
