import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoBookSharp } from "react-icons/io5";
import CustomNotepad from "./CustomNotepad";
import { CiLocationOn } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


const Story = () => {
    const [contentvalue, setcontentvalue] = React.useState("0");
    const [addanotherfaq, setaddanotherfaq] = React.useState(false);
  return (
    <>
      <Box textAlign={"start"}>
        <Box py={"50px"}>
          <Text textAlign={"center"} fontSize={"30px"}>
            Introduce your project
          </Text>
          <Text
            mt={"15px"}
            textAlign={"center"}
            fontSize={"20px"}
            color={"#656969"}
          >
            Tell people why they should be excited about your project. Get
            specific but be clear and be <br /> brief.
          </Text>
        </Box>

        <Divider my={"30px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

        <Box>
          <Text fontSize={"20px"}>Project story</Text>
          <Text mt={"15px"} color={"#656969"} fontSize={""}>
            Describe what you're raising funds to do, why you care about it, how
            you plan to <br /> make it happen, and who you are. Read more about
            telling your story.
          </Text>

          <Flex
            mt={"20px"}
            py={"15px"}
            px={"20px"}
            border={"1px solid rgba(0,0,0,0.1)"}
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"} gap={"20px"}>
              <IoBookSharp size={"22px"} />
              <Text mt={""} color={"#656969"} fontSize={""}>
                Welcome to our improved story editor
              </Text>
            </Flex>
            <Text py={"10px"} px={"20px"} border={"1px solid rgba(0,0,0,0.1)"}>
              Learn about its features
            </Text>
          </Flex>

          <Flex
            mt={"20px"}
            w={"100%"}
            minH={"500px"}
            border={"1px solid rgba(0,0,0,0.1)"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <Box mt={"50px"}>
              <CustomNotepad />
            </Box>
            {/* <Box mt={"50px"} w={"500px"}>

            <Textarea
       
              placeholder="Use text,images,videos and audio to craft a compelling story."
              resize={"none"}
            />
          </Box> */}
          </Flex>
        </Box>

        <Divider my={"60px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box>
              <Text fontSize={"20px"}>Risks and challenges</Text>
              <Text mt={"15px"} color={"#656969"} fontSize={""}>
                Be honest about the potential risks and challenges <br /> of
                this project and how you plan to overcome them <br /> to
                complete it.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Textarea mt={""} placeholder="Get an early copy" resize={"none"} />
            <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
              <CiLocationOn size={"20px"} color="orange" fontWeight={"bold"} />
              <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                Give backers the best first impression of your project with
                great titles. Learn more...
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Divider my={"60px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box>
              <Text fontSize={"20px"}>Use of AI</Text>
              <Text w={"400px"} mt={"15px"} color={"#656969"} fontSize={""}>
                GorillaFunder supports creative work and the humans behind that
                work. Projects that involve AI tools and technologies are
                allowed in some situations. If your project involves AI in any
                capacity, tell us a bit more so we can determine if it meets our
                policy requirements.
              </Text>
              <Text w={"400px"} mt={"15px"} color={"#656969"} fontSize={""}>
                Learn about AI policy on GorillaFunder
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Text fontSize={"18px"}>
              Will your project involve the development of AI technology or use
              AI content?
            </Text>



            <RadioGroup mt={"15px"} onChange={setcontentvalue} value={contentvalue}>
                <Stack>
                  <Box border={"1px solid rgba(0,0,0,0.2)"} p={"20px"}>
                    <Radio value="1">
                      <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                        Yes
                      </Text>
                    </Radio>
  
                    {contentvalue === "1" && (
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
  
                        <RadioGroup defaultValue="0">
                          <Stack>
                            <Box
                              mt={"10px"}
                              border={"1px solid rgba(0,0,0,0.2)"}
                              p={"20px"}
                            >
                              <Radio value="1">
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
                              <Radio value="2">
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
                    <Radio value="2">
                      <Text ml={"20px"} fontSize={""} fontWeight={""} color={""}>
                        No
                      </Text>
                    </Radio>
                  </Box>
                </Stack>
              </RadioGroup>


          </GridItem>
        </Grid>





        <Divider my={"60px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

<Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box>
      <Text fontSize={"20px"}>Frequently Asked Questions</Text>
      <Text w={""} mt={"15px"} color={"#656969"} fontSize={""}>
      Post answers to frequently asked questions
      </Text>
    
    </Box>
  </GridItem>
  <GridItem colSpan={{ base: "1fr" }}>

    

    {addanotherfaq && (
        <>
<Box mb={"20px"} bg={"#F7F7F6"} py={"20px"} px={"40px"}>
    <Text>Question</Text>
    <Textarea bg={"white"} mt={"10px"} placeholder="" rows={"auto"} resize={"none"}/>
    <Text mt={"20px"}>Answer</Text>
    <Textarea bg={"white"} mt={"10px"} placeholder="" rows={"5"} resize={"none"}/>

    <Flex justifyContent={"end"}>
        <Flex cursor={"pointer"} alignItems={"center"} bg={"white"} p={"5px"} mt={"15px"} border={"1px solid rgba(0,0,0,0.2)"}>
        <MdDelete />
            <Text>Delete</Text>
        </Flex>
    </Flex>
</Box>
        </>
    )}

    <Text cursor={"pointer"} onClick={()=>setaddanotherfaq(true)} textAlign={"center"} p={"10px"} border={"1px solid rgba(0,0,0,0.1)"} fontSize={"18px"}>
    Add another FAQ
    </Text>
    <Flex justifyContent={"end"}>

    <Button
 
                mt={"30px"}
          
                colorScheme="orange"
                fontSize={"14px"}
                fontWeight={500}
                
              >
           Save
              </Button>
    </Flex>




   


  </GridItem>
</Grid>



      </Box>
    </>
  );
};

export default Story;
