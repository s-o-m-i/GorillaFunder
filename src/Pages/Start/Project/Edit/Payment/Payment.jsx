import { Box, Button, Divider, Flex, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const Payment = () => {
  return (
    <>
      <Box textAlign={"start"}>
        <Box py={"50px"}>
          <Text textAlign={"center"} fontSize={"30px"}>
            Verify your details and link a bank account
          </Text>
          <Text
            mt={"15px"}
            textAlign={"center"}
            fontSize={"20px"}
            color={"#656969"}
          >
            Confirm who’s raising funds and receiving them if this project
            reaches its funding goal. Double-check your information—you agree
            the details you provide are true and acknowledge they can’t be
            changed once submitted.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box>
              <Text fontSize={"20px"}>Contact email</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
              <Text fontWeight={"500"} fontSize={""}>
                skullhunter030@gmail.com
              </Text>
              <Divider my={"20px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
              <Box mb={"20px"} w={"fit-content"} bg={"orange"} p={"4px"} borderRadius={"50%"}>
              <FaCheck size={"12px"}/>
              </Box>

              <Text  fontWeight={"500"} fontSize={"18px"}>
                Completed
              </Text>
            </Box>
          </GridItem>
        </Grid>

        <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box>
              <Text fontSize={"20px"}>Project type</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>Select “Individual” if you’re raising and receiving funds for this project in your own name. Select “Business” or “Nonprofit” if you’re raising and receiving funds for this project on behalf of an entity that you own or are an executive of, with authorization to represent.</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>Learn more about tax considerations when running your project.</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
          <Text mt={""}  w={""} color={""} fontSize={"20px"}>Who's raising funds for this project?</Text>
          <Select mt={"10px"} placeholder="Select an option" size="md" >
                    <option>Business</option>
                    <option>Individual</option>
                    <option>Nonprofit</option>
                  </Select>
                  <Button
                mt={"10px"}
                w={"100%"}
                colorScheme="orange"
                fontSize={"14px"}
                fontWeight={500}
                
              >
                Continue
              </Button>

              <Text mt={"20px"}  w={""} color={"#656969"} fontSize={""}>By continuing, you agree to Stripe’s Connected Account Agreement and consent to Stripe sharing your information with us. You own the account that’s created, but it’s managed by GorillaFunder to help facilitate pledges, payouts, and more.</Text>

              <Box mt={"10px"} border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
              <Text fontWeight={"500"} fontSize={""}>
              Individual
              </Text>
              <Divider my={"20px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />
              <Box mb={"20px"} w={"fit-content"} bg={"orange"} p={"4px"} borderRadius={"50%"}>
              <FaCheck size={"12px"}/>
              </Box>

              <Text  fontWeight={"500"} fontSize={"18px"}>
                Completed
              </Text>
            </Box>


          </GridItem>
        </Grid>




        <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box>
              <Text fontSize={"20px"}>Project verification</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>You’ll be redirected to Stripe, our payment processor, to provide your age, location, tax information, and other details. Projects raising funds for a business or nonprofit will require similar information, along with details about the entity’s owners and directors.</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>By proceeding, you certify that the details you provide are true.</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
            
           
            <FaLock />

              <Text mt={"20px"} fontWeight={"500"} fontSize={"18px"}>
              Complete the above steps to unlock this section
              </Text>
            </Box>


            <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
                <CiLocationOn
                  size={"20px"}
                  color="orange"
                  fontWeight={"bold"}
                />
                <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                The bank account receiving funds must be registered to the individual, business, or nonprofit raising funds for this project.
                </Text>
              </Flex>



              <Box mt={"10px"} border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
            
           
       

              <Text mt={""} fontWeight={"500"} fontSize={"18px"}>
              Verify your information with Stripe.
              </Text>

              <Button
                mt={"20px"}
                // w={"100%"}
                colorScheme="orange"
                fontSize={"14px"}
                fontWeight={500}
                
              >
           Continue to Stripe
              </Button>

            </Box>


          </GridItem>
        </Grid>







        <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box>
              <Text fontSize={"20px"}>Bank account</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>Add the checking account where you want to receive funds. This account must be located in Australia, and able to receive direct deposits in the currency in which you raise funds. We don’t support wire transfers, savings accounts, or virtual bank accounts.</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>You represent you're authorized to link this bank account to this project. If you’re raising funds as an individual, the account is registered in your name. If it’s on behalf of a business or nonprofit, the account is registered in the name of that entity.</Text>
              <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>Make sure all your details are correct—you can’t change them after you submit your project for review. GorillaFunder isn’t responsible for lost bank transfers as a result of incorrect or unsupported bank credentials or accounts.</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: "1fr" }}>
            <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
            
           
            <FaLock />

              <Text mt={"20px"} fontWeight={"500"} fontSize={"18px"}>
              Complete the above steps to unlock this section
              </Text>
            </Box>


            <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
                <CiLocationOn
                  size={"20px"}
                  color="orange"
                  fontWeight={"bold"}
                />
                <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
                The bank account receiving funds must be registered to the individual, business, or nonprofit raising funds for this project.
                </Text>
              </Flex>

          </GridItem>
        </Grid>





        <Divider my={"40px"} h={"1px"} bg={"rgba(0,0,0,0.2)"} />

<Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box>
      <Text fontSize={"20px"}>Payment source</Text>
      <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>Add a Visa, Mastercard, or American Express credit or debit card. Discover, JCB, Maestro, and Visa Electron cards are not accepted.</Text>
      <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>This card must be registered to the individual or entity (or entity’s owner) raising funds for this project, and in their name.</Text>
      <Text mt={"20px"}  w={"400px"} color={"#656969"} fontSize={""}>By adding this card, you agree GorillaFunder may charge it for refunds, or in the event of lost chargeback disputes for your project.</Text>
    </Box>
  </GridItem>
  <GridItem colSpan={{ base: "1fr" }}>
    <Box border={"1px solid rgba(0,0,0,0.1)"} p={"20px"}>
    
   
    <FaLock />

      <Text mt={"20px"} fontWeight={"500"} fontSize={"18px"}>
      Complete the above steps to unlock this section
      </Text>
    </Box>


    <Flex mt={"20px"} alignItems={"center"} gap={"10px"}>
        <CiLocationOn
          size={"20px"}
          color="orange"
          fontWeight={"bold"}
        />
        <Text fontSize={"12px"} fontWeight={"bold"} color={"orange"}>
        Chargebacks occur when a backer files a dispute. Learn more...
        </Text>
      </Flex>

  </GridItem>
</Grid>



      </Box>
    </>
  );
};

export default Payment;
