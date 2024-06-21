import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
  Flex,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa6";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGitconnected } from "react-icons/si";

export function RemindMeModal({ remindMe, seeMore, faq }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sendMessage, setSendMessage] = useState(false);
  const [verficationEmail, setVerficationEmail] = useState(false);
  return (
    <>
      {/* <Button >Open Modal</Button> */}

      {faq && (
        <Button
          onClick={onOpen}
          mt={"20px"}
          colorScheme="orange"
          fontSize={"14px"}
          fontWeight={500}
          borderRadius={"5px"}
        >
          Ask a question
        </Button>
      )}

      {seeMore && (
        <Text onClick={onOpen} fontSize={"15px"} color={"orange"}>
          See more
        </Text>
      )}

      {remindMe && (
        <Button
          onClick={onOpen}
          colorScheme="gray"
          width="100%"
          fontSize={"14px"}
          fontWeight={500}
          
        >
          <FaRegBookmark style={{ marginRight: "10px" }} />
          Remind Me
        </Button>
      )}

      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {remindMe && (
            <ModalBody>
              <Flex align={"center"} gap={"10px"} pt={"10px"}>
                <RiErrorWarningLine size={"30px"} color="red" />
                <Text fontSize={"20px"}>Verify to receive reminders</Text>
              </Flex>
              <Text textAlign={"center"} my={"20px"} fontSize={""}>
                You’ve saved this project, but still need to verify your email
                address to receive reminders about it. Check your inbox to
                finish this important step.
                <Button
                  onClick={onClose}
                  mt={"15px"}
                  colorScheme="orange"
                  width="100%"
                  fontSize={"14px"}
                  fontWeight={500}
                  borderRadius={"5px"}
                >
                  Ok,got it
                </Button>
              </Text>
            </ModalBody>
          )}

          {seeMore && (
            <ModalBody>
              {!sendMessage && (
                <Box>
                  <Text
                    pt={"10px"}
                    mb={"25px"}
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    About the creator
                  </Text>
                  <Text
                    textAlign={""}
                    fontSize={"20px"}
                    color={"black"}
                    fontWeight={"bold"}
                  >
                    Jay Craven
                  </Text>
                  <Text textAlign={""} fontSize={"14px"}>
                    Nantucket, MA
                  </Text>
                  <Text mt={"20px"} textAlign={""} fontSize={"15px"}>
                    MAJOR BARBARA is Jay Craven's 11th feature film - and his
                    sixth through the Semester Cinema project where 30
                    professionals mentor and collaborate with 45 students from
                    14 colleges to make an ambitions feature film for national
                    release. Craven's films have played Sundance, SXSW, AFI
                    Fest, Lincoln Center and many others. His experiential
                    learning projects include Circus Smirkus, Fledgling Films,
                    Movies from Marlboro, Nantucket Young Playwrights and more.
                  </Text>
                  <Box my={"30px"}>
                    <Flex align={"center"} gap={"5px"}>
                      <FaCheck color="green" />
                      <Text fontSize={""}>Jay Craven</Text>
                    </Flex>
                    <Flex mt={"10px"} align={"center"} gap={"5px"}>
                      <FaLock />
                      <Text fontSize={""}>Last login May 18 2024</Text>
                    </Flex>
                    <Flex mt={"10px"} align={"center"} gap={"5px"}>
                      <FaFacebook color="blue" />
                      <Text fontSize={""}>Not connected</Text>
                    </Flex>
                    <Flex mt={"10px"} align={"center"} gap={"5px"}>
                      <SiGitconnected color="green" />
                      <Text color="green" fontSize={""}>
                        2 created · 1 backed
                      </Text>
                    </Flex>
                  </Box>

                  <Button
                    mb={"30px"}
                    onClick={() => setSendMessage(true)}
                    colorScheme="orange"
                    fontSize={"14px"}
                    fontWeight={500}
                    borderRadius={"5px"}
                  >
                    Contact Me
                  </Button>
                </Box>
              )}

              {sendMessage && (
                <Box>
                  <Text
                    pt={"10px"}
                    mb={"25px"}
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    Send a message to Jay Craven
                  </Text>
                  <Text fontSize={""} fontWeight={"500"}>
                    To: Jay Craven
                  </Text>
                  <Textarea
                    // value={value}
                    // onChange={handleInputChange}
                    placeholder="Type your message here"
                    size="sm"
                    resize={"none"}
                  />

                  <Button
                    mt={"30px"}
                    onClick={() => setSendMessage(false)}
                    colorScheme="orange"
                    fontSize={"14px"}
                    fontWeight={500}
                    borderRadius={"5px"}
                  >
                    Send Message
                  </Button>
                </Box>
              )}
            </ModalBody>
          )}

          {faq && (
            <>
              {!verficationEmail && (
                <Box p={"20px"}>
                  <Text fontSize={"15px"} fontWeight={"bold"}>
                    Ask a question about Major Barbara: A Kingdom
                    County/Semester Cinema...
                  </Text>
                  <Box my={"20px"}>
                    <Divider />
                  </Box>
                  <Text>
                    Please verify your email address to ensure that you can be
                    notified of replies.
                  </Text>
                  <Button
                    mt={"10px"}
                    onClick={() => setVerficationEmail(true)}
                    colorScheme="orange"
                    fontSize={"14px"}
                    fontWeight={500}
                    borderRadius={"5px"}
                  >
                    Send Verification Email
                  </Button>
                </Box>
              )}

              {verficationEmail && (
                <Box p={"20px"}>
                  <Text fontSize={"15px"} fontWeight={"bold"}>
                    Ask a question about Major Barbara: A Kingdom
                    County/Semester Cinema...
                  </Text>
                  <Box my={"20px"}>
                    <Divider />
                  </Box>
                  <Text>To:Jay Craven</Text>

                  <Textarea
                    mt={"5px"}
                    rows={"8"}
                    mb={"50px"}
                    // value={value}
                    // onChange={handleInputChange}
                    placeholder="Type your question here"
                    size="sm"
                    resize={"none"}
                  />

                  <Button
                    mt={"10px"}
                    onClick={() => {
                      setVerficationEmail(false);
                      onClose();
                    }}
                    colorScheme="orange"
                    fontSize={"14px"}
                    fontWeight={500}
                    borderRadius={"5px"}
                  >
                    Ask question
                  </Button>
                  <Button
                    ml={"10px"}
                    mt={"10px"}
                    onClick={() => {
                      setVerficationEmail(false);
                      onClose();
                    }}
                    colorScheme="gray"
                    fontSize={"14px"}
                    fontWeight={500}
                    borderRadius={"5px"}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
