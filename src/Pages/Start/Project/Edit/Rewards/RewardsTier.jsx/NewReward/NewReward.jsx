import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../../../../libs/axiosService";
import { useToast } from "@chakra-ui/react";
const NewReward = ({ project }) => {
  const [contentvalue, setcontentvalue] = React.useState("No");
  const [contentType, setcontentType] = React.useState("");

  const [timelimit, settimelimit] = React.useState("0");
  const [chooseenddate, setchooseenddate] = React.useState(false);
  const [newitem, setnewitem] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemSelect, setItemSelect] = useState();

  const [shippingType, setShippingType] = useState("");
  const [cost, setCost] = useState("");
  const [destination, setDestination] = useState("Everywhere");
  const [estimatedDeliveryMonth, setEstimatedDeliveryMonth] = useState("");
  const [estimatedDeliveryYear, setEstimatedDeliveryYear] = useState("");
  const [quantity_type, setquantity_type] = useState("");
  const [quantity, setquantity] = useState("");
  const [limit_type, setlimit_type] = useState("");
  const [limit_start_date, setlimit_start_date] = useState("");
  const [limit_end_date, setlimit_end_date] = useState("");
  const [title, setTitle] = useState("");
  const [pricing, setPricing] = useState("");
  const [desc, setdesc] = useState("");

  const [rewardTierData, setRewardTierData] = useState(
    {
      rewards: {
        reward_tiers: {
          title: title,
        },
      },
    },

    // {
    //   rewards: {
    //     reward_tiers: {
    //       title: title,
    //       pricing:pricing,
    //       image: "",
    //       description: desc,
    //       items: [
    //         {
    //           title: itemSelect,
    //           image: "",
    //         },
    //       ],
    //       content: {
    //         content: contentvalue,
    //         content_type: contentType,
    //       },
    //       shipping: {
    //         shipping: "",
    //         shipping_type: shippingType,
    //         destination: destination,
    //         shipping_cost: cost,
    //       },
    //       estimated_delivery_month: estimatedDeliveryMonth,
    //       estimated_delivery_year: estimatedDeliveryYear,
    //       project_quantity: {
    //         project_quantity: "",
    //         quantity_type:  quantity_type,
    //         quantity: quantity,
    //       },
    //       time_limit: {
    //         time_limit: "",
    //         limit_type:  limit_type,
    //         limit_start_date: limit_start_date,
    //         limit_end_date: limit_end_date,
    //       },
    //     },
    //   },
    // },

);


  const toast = useToast();
  const { id } = useParams();

  const handleSaveReward = async () => {
    try {
      console.log("somi title",rewardTierData.rewards.reward_tiers.title)
      const response = await axiosInstance.put(
        `/project/${id}`,
        rewardTierData
      );
      setLoading(false);
      console.log("somi returned  data ha ye", response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
      toast({
        title: "Error",
        description:
          error.response?.data ||
          "An error occurred while updating the project",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      return null;
    }
  };

  console.log("project", project);

  // useEffect(() => {
  //   if (project) {
  //     console.log("Project data:", project);
  //     setRewardTierData({
  //       rewards: {
  //         reward_tiers: {
  //           title: project.rewards?.reward_tiers[0]?.title || "",
  //           pricing: project.rewards?.reward_tiers[0]?.pricing || "",
  //           image: project.rewards?.reward_tiers[0]?.image || "",
  //           description: project.rewards?.reward_tiers[0]?.description || "",
  //           items: project.rewards?.reward_tiers[0]?.items || [
  //             {
  //               title: "",
  //               image: "",
  //             },
  //           ],
  //           content: {
  //             content: project.rewards?.reward_tiers[0]?.content?.content || "",
  //             content_type: project.rewards?.reward_tiers[0]?.content?.content_type || "",
  //           },
  //           shipping: {
  //             shipping: project.rewards?.reward_tiers[0]?.shipping?.shipping || "",
  //             shipping_type: project.rewards?.reward_tiers[0]?.shipping?.shipping_type || "",
  //             destination: project.rewards?.reward_tiers[0]?.shipping?.destination || "",
  //             shipping_cost: project.rewards?.reward_tiers[0]?.shipping?.shipping_cost || "",
  //           },
  //           estimated_delivery_month: project.rewards?.reward_tiers[0]?.estimated_delivery_month || "",
  //           estimated_delivery_year: project.rewards?.reward_tiers[0]?.estimated_delivery_year || "",
  //           project_quantity: {
  //             project_quantity: project.rewards?.reward_tiers[0]?.project_quantity?.project_quantity || "",
  //             quantity_type: project.rewards?.reward_tiers[0]?.project_quantity?.quantity_type || "",
  //             quantity: project.rewards?.reward_tiers[0]?.project_quantity?.quantity || "",
  //           },
  //           time_limit: {
  //             time_limit: project.rewards?.reward_tiers[0]?.time_limit?.time_limit || "",
  //             limit_type: project.rewards?.reward_tiers[0]?.time_limit?.limit_type || "",
  //             limit_start_date: project.rewards?.reward_tiers[0]?.time_limit?.limit_start_date || "",
  //             limit_end_date: project.rewards?.reward_tiers[0]?.time_limit?.limit_end_date || "",
  //           },
  //         },
  //       },
  //     });
  //   }
  // }, [project]);

  return (
    <>
      {/* <Grid templateColumns={{base:"1fr",lg:"1fr 1fr"}}>
        <GridItem colSpan={{base:"1fr"}}></GridItem>
    </Grid> */}
      <Box textAlign={"start"}>
        <Text fontSize={"35px"} fontWeight={""} color={""}>
          Add a reward
        </Text>
        <Text mt={""} fontSize={""} fontWeight={""} color={""}>
          Offer tangible or intangible things that bring backers closer to your
          project.
        </Text>

        <Box mt={"50px"}>
          <Flex
            alignItems={"center"}
            gap={"20px"}
            //  justifyContent={"space-between"}
          >
            <Box w={"100%"}>
              <Text fontSize={""} fontWeight={""} color={""}>
                Title
              </Text>
              <Input
                w={"100%"}
                mt={"5px"}
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Signed limited-edition"
                size="md"
              />
            </Box>
          </Flex>

          <Divider my={"30px"} />

          <Box>
            <Text fontSize={"20px"} fontWeight={"500"} color={""}>
              {" "}
              Pricing
            </Text>
            <Text fontSize={""} fontWeight={""} color={""}>
              {" "}
              Pledge amount
            </Text>
            <InputGroup mt={"10px"}>
              <InputLeftAddon>AU$</InputLeftAddon>
              <Input
                name="pricing"
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                type="number"
                placeholder="500"
              />
            </InputGroup>
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Image
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Show your backers what they'll receive for their support. Images
              should be honest, and should avoid <br /> banners, badges, and
              overlaid text.
            </Text>
            <Box
              mt={"20px"}
              boxShadow={"1px 1px 5px rgba(0,0,0,0.5)"}
              w={{ base: "100%", lg: "500px" }}
              border={"1px solid rgba(0,0,0,0.1)"}
              p={"40px"}
              bg={"#FBFBFA"}
            >
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
                Drop a image here or select a file
              </Text>
              <Text
                fontSize={"14px"}
                textAlign={"center"}
                fontWeight={""}
                mt={"5px"}
                color={"#656E72"}
              >
                It must be a JPG,PNG,GIF or WEBP,no larger than 50 MB.
              </Text>
            </Box>
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Description (optional)
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Describe what makes this reward stand out from your other
              offerings. Avoid re-listing items as this <br /> will look
              repetitive to backers.
            </Text>
            <Textarea
              name="description"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              mt={"20px"}
              placeholder="Get an early copy"
              resize={"none"}
            />
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Items *
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Including items in your rewards and add-ons makes it easy for
              backers to understand and compare <br /> your offerings. An item
              can be anything you plan to offer your backers. Some examples
              include <br /> playing cards, a digital copy of a book, a ticket
              to a play, or even a thank-you in your documentary.
            </Text>

            {newitem && (
              <>
                <Box
                  my={"20px"}
                  bg={""}
                  p={"20px"}
                  border={"1px solid rgba(0,0,0,0.1)"}
                >
                  <Box>
                    <Text fontSize={""}>Add an existing item</Text>
                    <Select
                      value={itemSelect}
                      onChange={(e) => setItemSelect(e.target.value)}
                      mt={"10px"}
                      placeholder="Choose one"
                      size="md"
                    >
                      <option>Choose one</option>
                    </Select>
                    <Text my={"10px"} fontSize={""}>
                      Or
                    </Text>

                    <Text mt={"10px"} fontSize={""}>
                      Create a new item
                    </Text>
                    <Input
                      value={itemSelect}
                      onChange={(e) => setItemSelect(e.target.value)}
                      mt={"10px"}
                      type="text"
                      placeholder="30"
                      size="md"
                    />
                  </Box>

                  <Text mt={"10px"} fontSize={""}>
                    Item image (optional)
                  </Text>
                  <Box
                    mt={"5px"}
                    boxShadow={"1px 1px 5px rgba(0,0,0,0.5)"}
                    w={{ base: "100%", lg: "400px" }}
                    border={"1px solid rgba(0,0,0,0.1)"}
                    p={"40px"}
                    bg={"#FBFBFA"}
                  >
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
                      Drop a image here or select a file
                    </Text>
                    <Text
                      fontSize={"14px"}
                      textAlign={"center"}
                      fontWeight={""}
                      mt={"5px"}
                      color={"#656E72"}
                    >
                      It must be a JPG,PNG,GIF or WEBP,no larger than 50 MB.
                    </Text>
                  </Box>

                  <Button
                    mt={"20px"}
                    w={"100%"}
                    colorScheme="orange"
                    fontSize={"14px"}
                    fontWeight={500}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => setnewitem(false)}
                    mt={"10px"}
                    w={"100%"}
                    colorScheme="gray"
                    fontSize={"14px"}
                    fontWeight={500}
                  >
                    Cancel
                  </Button>
                </Box>
              </>
            )}
            <Button
              onClick={() => setnewitem(true)}
              mt={"10px"}
              w={"100%"}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
            >
              New Item
            </Button>
            <Flex
              mt={"10px"}
              border={"1px solid red"}
              borderLeft={"4px solid red"}
              alignItems={"center"}
              px={"60px"}
              py={"10px"}
              bg={"#FFF2EC"}
              gap={"20px"}
            >
              <RiErrorWarningLine size={"30px"} color="red" />
              <Text fontSize={"20px"}>
                Add all items included in this reward
              </Text>
            </Flex>
          </Box>
          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Contents
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Will your backers receive any physical goods?
            </Text>

            <RadioGroup onChange={setcontentvalue} value={contentvalue}>
              <Stack>
                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Yes">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Yes
                    </Text>
                  </Radio>

                  {contentvalue === "Yes" && (
                    <>
                      <Divider my={"20px"} />
                      <Text
                        mt={"20px"}
                        fontSize={""}
                        fontWeight={""}
                        color={""}
                      >
                        Which of the following best applies?
                      </Text>

                      <RadioGroup onChange={setcontentType} value={contentType}>
                        <Stack>
                          <Box
                            mt={"10px"}
                            border={"1px solid rgba(0,0,0,0.2)"}
                            p={"20px"}
                          >
                            <Radio value="Only physical goods">
                              <Text
                                ml={"20px"}
                                fontSize={""}
                                fontWeight={""}
                                color={""}
                              >
                                Only physical goods
                              </Text>
                            </Radio>
                          </Box>
                          <Box
                            mt={"10px"}
                            border={"1px solid rgba(0,0,0,0.2)"}
                            p={"20px"}
                          >
                            <Radio value="Physical and digital goods/services">
                              <Text
                                ml={"20px"}
                                fontSize={""}
                                fontWeight={""}
                                color={""}
                              >
                                Physical and digital goods/services
                              </Text>
                            </Radio>
                          </Box>
                        </Stack>
                      </RadioGroup>
                    </>
                  )}
                </Box>
                <Box
                  mt={"10px"}
                  border={"1px solid rgba(0,0,0,0.2)"}
                  p={"20px"}
                >
                  <Radio value="No">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      No, only digital goods and/or services
                    </Text>
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>

            <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
              <CiLocationOn size={"20px"} color="orange" fontWeight={"bold"} />
              <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                Physical goods are things you can't consume, such as playing
                cards, 3D printers, books, or clothing.
              </Text>
            </Flex>
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Shipping
            </Text>

            <RadioGroup
              colorScheme="orange"
              onChange={setShippingType}
              value={shippingType}
              defaultValue="1"
            >
              <Stack>
                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Ships to anywhere in the world">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Ships to anywhere in the world
                    </Text>
                  </Radio>
                </Box>

                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Ships to certain countries">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Ships to certain countries
                    </Text>
                  </Radio>
                </Box>

                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Local pickup, event, or service">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Local pickup, event, or service (no shipping)
                    </Text>
                  </Radio>
                </Box>

                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio color={"orange"} value="Digital reward">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Digital reward (no shipping)
                    </Text>
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>

            {shippingType === "Ships to anywhere in the world" && (
              <>
                <Flex mt={"20px"} w={"100%"} alignItems={"center"} gap={"20px"}>
                  <Box w={"100%"}>
                    <Text fontSize={"15px"}>DESTINATION</Text>
                    <Box
                      mt={"10px"}
                      border={"1px solid rgba(0,0,0,0.2)"}
                      p={"10px"}
                    >
                      <Text fontSize={""}>Everywhere</Text>
                    </Box>
                  </Box>
                  <Box w={"100%"}>
                    <Text fontSize={"15px"}>COST</Text>
                    <Box mt={"10px"} p={""}>
                      <InputGroup size="lg">
                        <InputLeftAddon>AU$</InputLeftAddon>
                        <Input
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          type="number"
                          placeholder="500"
                        />
                      </InputGroup>
                    </Box>
                  </Box>
                </Flex>
                <Button
                  mt={"20px"}
                  w={"100%"}
                  colorScheme="orange"
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  Add another destination
                </Button>
                <Flex gap={"10px"} mt={"10px"} alignItems={"center"}>
                  <CiLocationOn color="orange" />
                  <Text fontSize={""} fontWeight={""} color={"orange"}>
                    Shipping is an additional cost and counts toward your
                    funding goal. Know them for every destination before you
                    launch.
                  </Text>
                </Flex>
              </>
            )}

            {shippingType === "Ships to certain countries" && (
              <>
                <Flex mt={"20px"} w={"100%"} alignItems={"center"} gap={"20px"}>
                  <Box w={"100%"}>
                    <Text fontSize={"15px"}>DESTINATION</Text>
                    <Box
                      mt={"10px"}
                      border={"1px solid rgba(0,0,0,0.2)"}
                      p={"10px"}
                    >
                      <Text fontSize={""}>Everywhere</Text>
                    </Box>
                  </Box>
                  <Box w={"100%"}>
                    <Text fontSize={"15px"}>COST</Text>
                    <Box mt={"10px"} p={""}>
                      <InputGroup size="lg">
                        <InputLeftAddon>AU$</InputLeftAddon>
                        <Input type="number" placeholder="500" />
                      </InputGroup>
                    </Box>
                  </Box>
                </Flex>
                <Button
                  mt={"20px"}
                  w={"100%"}
                  colorScheme="orange"
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  Add another destination
                </Button>
                <Flex gap={"10px"} mt={"10px"} alignItems={"center"}>
                  <CiLocationOn color="orange" />
                  <Text fontSize={""} fontWeight={""} color={"orange"}>
                    Shipping is an additional cost and counts toward your
                    funding goal. Know them for every destination before you
                    launch.
                  </Text>
                </Flex>
              </>
            )}

            {shippingType === "Local pickup, event, or service" && (
              <>
                <Text fontSize={"15px"} mt={"20px"}>
                  Where will backers go to receive this?
                </Text>
                <Input
                  mt={"10px"}
                  type="number"
                  placeholder="Enter location"
                  size="md"
                />

                <Flex gap={"10px"} mt={"10px"} alignItems={"center"}>
                  <CiLocationOn color="orange" />
                  <Text fontSize={""} fontWeight={""} color={"orange"}>
                    This location will appear on your project page. Offer
                    details in the description, so backers know how to get their
                    reward.
                  </Text>
                </Flex>
              </>
            )}
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Estimated delivery
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Give yourself plenty of time. It's better to deliver to backers
              ahead of schedule than behind.
            </Text>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={"Center"}
              gap={"20px"}
            >
              <Select
                value={estimatedDeliveryMonth}
                onChange={(e) => setEstimatedDeliveryMonth(e.target.value)}
                mt={"10px"}
                placeholder="Month"
                size="md"
              >
                <option>Jan</option>
                <option>Feb</option>
                <option>March</option>
              </Select>
              <Select
                value={estimatedDeliveryYear}
                onChange={(e) => setEstimatedDeliveryYear(e.target.value)}
                mt={"10px"}
                placeholder="Year"
                size="md"
              >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </Select>
            </Flex>
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Project quantity
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Limit the amount available to all backers if mass production or
              shipping is impractical. You can only <br /> increase a set amount
              after launch.
            </Text>

            <RadioGroup
              onChange={setquantity_type}
              value={quantity_type}
              colorScheme="orange"
              mt={"10px"}
            >
              <Stack>
                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Unlimited">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Unlimited
                    </Text>
                  </Radio>
                </Box>
                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Limited">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Limited
                    </Text>
                  </Radio>
                  {quantity_type === "Limited" && (
                    <>
                      <Divider my={"10px"} />
                      <Text
                        fontSize={""}
                        mt={"20px"}
                        fontWeight={""}
                        color={""}
                      >
                        Total available
                      </Text>

                      <Input
                        value={quantity}
                        onChange={(e) => setquantity(e.target.value)}
                        mt={"10px"}
                        type="number"
                        placeholder="30"
                        size="md"
                      />
                    </>
                  )}
                </Box>
              </Stack>
            </RadioGroup>
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Time limit
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Garner excitement about limited editions or special offerings.
            </Text>

            <RadioGroup
              colorScheme="orange"
              onChange={setlimit_type}
              value={limit_type}
              mt={"10px"}
            >
              <Stack>
                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="No limit">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      No limit
                    </Text>
                  </Radio>
                </Box>
                <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                  <Radio value="Specify start and end">
                    <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                      Specify start and end
                    </Text>
                  </Radio>
                  {limit_type === "Specify start and end" && (
                    <>
                      <Divider my={"10px"} />
                      <Text
                        fontSize={""}
                        mt={"20px"}
                        fontWeight={""}
                        color={""}
                      >
                        Choose start date (optional)
                      </Text>

                      <Input
                        value={limit_start_date}
                        onChange={(e) => setlimit_start_date(e.target.value)}
                        mt={"10px"}
                        type="date"
                        placeholder="30"
                        size="md"
                      />
                      <Text
                        fontSize={""}
                        mt={"20px"}
                        fontWeight={""}
                        color={""}
                      >
                        Time
                      </Text>
                      <Input
                        mt={"10px"}
                        type="time"
                        placeholder="30"
                        size="md"
                      />
                      <Text
                        fontSize={"14px"}
                        mt={"10px"}
                        fontWeight={""}
                        color={""}
                        textDecoration={"underline"}
                      >
                        Start on campaign launch instead
                      </Text>

                      {/* end date optional */}

                      <Text
                        fontSize={""}
                        mt={"20px"}
                        fontWeight={""}
                        color={""}
                      >
                        Choose end date (optional)
                      </Text>
                      <Text
                        cursor={"pointer"}
                        onClick={() => setchooseenddate(true)}
                        fontSize={"14px"}
                        mt={"5px"}
                        textDecoration={"underline"}
                        fontWeight={""}
                        color={""}
                      >
                        Specify an end date and time...
                      </Text>

                      {chooseenddate && (
                        <>
                          <Input
                            value={limit_end_date}
                            onChange={(e) => setlimit_end_date(e.target.value)}
                            mt={"10px"}
                            type="date"
                            placeholder="30"
                            size="md"
                          />
                          <Text
                            fontSize={""}
                            mt={"20px"}
                            fontWeight={""}
                            color={""}
                          >
                            Time
                          </Text>
                          <Input
                            mt={"10px"}
                            type="time"
                            placeholder="30"
                            size="md"
                          />
                          <Text
                            fontSize={"14px"}
                            mt={"10px"}
                            fontWeight={""}
                            color={""}
                            textDecoration={"underline"}
                          >
                            End when campaign ends instead
                          </Text>
                        </>
                      )}

                      <Text
                        fontSize={"20px"}
                        mt={"20px"}
                        fontWeight={""}
                        color={""}
                      >
                        Otherwise this reward will stay available until your
                        campaign ends.
                      </Text>
                    </>
                  )}
                </Box>
              </Stack>
            </RadioGroup>
          </Box>

          <Divider my={"30px"} />

          <Box>
            <Text mb={"10px"} fontSize={"18px"} fontWeight={""} color={""}>
              Add-ons
            </Text>
            <Text fontSize={""} fontWeight={""} color={"#656969"}>
              Your backers can choose to include these in their pledge.
            </Text>
            <Flex mt={"10px"} alignItems={"center"}>
              <RiErrorWarningLine color="red" />
              <Text fontSize={""} fontWeight={""} color={"red"}>
                This list is outdated—save this reward tier and reopen this page
                to see an accurate list of available add-ons.
              </Text>
            </Flex>

            <Divider my={"60px"} />

            <Button
              w={"100%"}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              onClick={handleSaveReward}
            >
              Save reward
            </Button>
            <Text
              cursor={"pointer"}
              mt={"20px"}
              textDecoration={"underline"}
              textAlign={"center"}
            >
              Cancel
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewReward;
