import { Box, Button, Divider, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React from "react";

const People = () => {
  return (
    <Box textAlign={"start"}>
      <Box py={"50px"}>
        <Text textAlign={"center"} fontSize={"30px"}>
          Your profile
        </Text>
        <Text
          mt={"15px"}
          textAlign={"center"}
          fontSize={"20px"}
          color={"#656969"}
        >
          This will appear on your project page and must include your name,
          photo, and biography.
        </Text>
      </Box>

      <Divider my={"30px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Project story</Text>
            <Text w={"400px"} mt={"15px"} color={"#656969"} fontSize={""}>
              Describe what you're raising funds to do, why you care about it,
              how you plan to <br /> make it happen, and who you are. Read more
              about telling your story.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
            <Text fontWeight={"500"} fontSize={"20px"}>
              User
            </Text>
            <Text w={""} mt={"5px"} color={"#656969"} fontSize={""}>
              Project creator
            </Text>
            <Divider my={"30px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
            <Button
              mt={"10px"}
              w={"100%"}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              
            >
              Complete your profile
            </Button>
          </Box>
        </GridItem>
      </Grid>

      <Divider my={"60px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />


      <Grid mt={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Text fontSize={"20px"}>Vanity URL</Text>
            <Text w={"400px"} mt={"15px"} color={"#656969"} fontSize={""}>
              Create a custom URL for your profile page with at least three
              characters. This will also be the beginning of your project
              URL—we’ll generate that later.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
    
            <Text w={""} mt={"5px"} color={""} fontSize={""}>
            https://GorillaFunder.com/profile/
            </Text>
            <Input
                        mt={"10px"}
                        type="text"
                        placeholder="Digital photo"
                        size="md"
                      />
        
            <Button
              mt={"20px"}
              w={"100%"}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              
            >
         Confirm
            </Button>
          </Box>
        </GridItem>
      </Grid>



      <Divider my={"60px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />


<Grid mt={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box>
      <Text fontSize={"20px"}>Collaborators (optional)</Text>
      <Text w={"400px"} mt={"15px"} color={"#656969"} fontSize={""}>
      If you're working with others, you can grant them permission to edit this project, communicate with backers, and coordinate reward fulfillment.
      </Text>
    </Box>
  </GridItem>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box>

      
  
      <Button
        mt={"20px"}
        w={"100%"}
        colorScheme="orange"
        fontSize={"14px"}
        fontWeight={500}
        
      >
 Add your first collaborator
      </Button>
    </Box>
  </GridItem>
</Grid>




<Divider my={"60px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />


<Grid mt={""} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box>
      <Text fontSize={"20px"}>Demographics (optional)</Text>
      <Text w={"400px"} mt={"15px"} color={"#656969"} fontSize={""}>
      Your information helps us equitably support a diverse creator community. We’ll only use it in connection with our anti-discrimination research and work.
      </Text>
    </Box>
  </GridItem>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box>

      
  
      <Button
        mt={"20px"}
        w={"100%"}
        colorScheme="orange"
        fontSize={"14px"}
        fontWeight={500}
        
      >
Go to questions
      </Button>
    </Box>
  </GridItem>
</Grid>


    </Box>
  );
};

export default People;
