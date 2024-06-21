import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoChatbox } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Comments = () => {
  const [reply, setreply] = useState(null);
  const [showreplies, setshowreplies] = useState(null);
  const [commentValue, setCommentValue] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [replies, setReplies] = useState([
    { name: "John", msg: "hi i'm john" },
  ]);
  const [comments, setcomments] = useState([
    {
      name: "Kevin",
      msg: "Hello there how are you.",
      replies: [{ name: "Mike", msg: "hello i'm Mike" }],
    },
  ]);

  const handleComment = () => {
    setcomments([...comments, { msg: commentValue }]);
  };
  const handleReply = (commentIndex) => {
    const currentComment = comments[commentIndex];
  
  
    if (!currentComment.replies) {
      currentComment.replies = [];
    }
  
    const newReply = { name: "User", msg: replyValue };
  
    const updatedComment = {
      ...currentComment,
      replies: [...currentComment.replies, newReply],
    };
  
    setcomments([
      ...comments.slice(0, commentIndex),
      updatedComment,
      ...comments.slice(commentIndex + 1),
    ]);
  
    setreply(null);
    setReplyValue("");
  };
  
  return (
    <>
      <Grid
        p={{ base: "0px", lg: "20px" }}
        mb={"30px"}
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
      >
        <GridItem colSpan={{ base: "1fr" }}>
          {/* <Box borderRight={{base:"0px solid #DCDEDD",lg:"3px solid #DCDEDD"}} pr={{base:"0px",lg:"20px"}} >
            <Box mt={"30px"} bg="gray.50" p={{base:"10px",lg:"20px"}} >
              <Text fontSize={"14px"}>Only backers can post comments.</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"15px"} mt={"25px"} bg="gray.50" p={{base:"20px",lg:"40px"}}>
            <IoChatbox color="gray" />
              <Text fontSize={"14px"}>No comments yet.</Text>
            </Box>
          </Box> */}

          {/* <Flex
            gap={"20px"}
            alignItems={"start"}
            textAlign={"start"}
            border={"1px solid rgba(0,0,0,0.2)"}
            p={{ base: "5px", lg: "10px" }}
          >
            <Box overflow={"hidden"} w={""} h={""} borderRadius={"50%"}>
              <Image w={"70px"} src="/images/jaycraven.avif" alt="" />
            </Box>
            <Box>
              <Text fontSize={"20px"} fontWeight={"500"} color={""}>
                Kevin
              </Text>
              <Text fontSize={""} fontWeight={""} color={""}>
                Hi,there i'm too impressed from this site...
              </Text>
              <Flex alignItems={"center"} gap={"15px"}>
                <Text
                  cursor={"pointer"}
                  onClick={() => setreply(!reply)}
                  fontSize={"14px"}
                  mt={"5px"}
                  fontWeight={"500"}
                  color={"orange"}
                >
                  Reply
                </Text>
                <Text
                  cursor={"pointer"}
                  onClick={() => setshowreplies(!showreplies)}
                  fontSize={"14px"}
                  mt={"5px"}
                  fontWeight={"500"}
                  color={"orange"}
                >
                  Show Replies
                </Text>
              </Flex>

              {showreplies && (
                <>
                  <Flex
                    ml={"55px"}
                    mt={"15px"}
                    gap={"20px"}
                    alignItems={"start"}
                    textAlign={"start"}
                    border={"1px solid rgba(0,0,0,0.2)"}
                    p={{ base: "5px", lg: "10px" }}
                  >
                    <Box overflow={"hidden"} w={""} h={""} borderRadius={"50%"}>
                      <Image w={"40px"} src="/images/jaycraven.avif" alt="" />
                    </Box>
                    <Box>
                      <Text fontSize={"16"} fontWeight={"500"} color={""}>
                        Kevin
                      </Text>
                      <Text fontSize={"14px"} fontWeight={""} color={""}>
                        Hi,there i'm too impressed from this site...
                      </Text>
                      <Flex mt={'5px'} justifyContent={"end"}>
                      <FaRegHeart />
                      </Flex>
                    </Box>
                  </Flex>
                </>
              )}

              {reply && (
                <>
                  <Flex mt={"20px"} gap={"20px"} alignItems={"center"}>
                    <Box overflow={"hidden"} w={""} h={""} borderRadius={"50%"}>
                      <Image w={"50px"} src="/images/jaycraven.avif" alt="" />
                    </Box>
                    <Textarea
                      rows={"2"}
                      placeholder="write a comment"
                      resize={"none"}
                    />
                  </Flex>
                </>
              )}
            </Box>
          </Flex> */}

          {comments.map((e, i) => {
            return (
              <>
                <Flex
                  mt={"10px"}
                  gap={"20px"}
                  alignItems={"start"}
                  textAlign={"start"}
                  border={"1px solid rgba(0,0,0,0.2)"}
                  p={{ base: "5px", lg: "10px" }}
                >
                  <Box overflow={"hidden"} w={""} h={""} borderRadius={"50%"}>
                    <Image w={"70px"} src="/images/jaycraven.avif" alt="" />
                  </Box>
                  <Box>
                    <Text fontSize={"20px"} fontWeight={"500"} color={""}>
                      Kevin
                    </Text>
                    <Text fontSize={""} fontWeight={""} color={""}>
                      {e.msg}
                    </Text>
                    <Flex alignItems={"center"} gap={"15px"}>
                      <Text
                        cursor={"pointer"}
                        onClick={() => setreply(i)}
                        fontSize={"14px"}
                        mt={"5px"}
                        fontWeight={"500"}
                        color={"orange"}
                      >
                        Reply
                      </Text>
                      <Text
                        cursor={"pointer"}
                        onClick={() => setshowreplies(i)}
                        fontSize={"14px"}
                        mt={"5px"}
                        fontWeight={"500"}
                        color={"orange"}
                      >
                        Show Replies
                      </Text>
                    </Flex>

                    {showreplies === i && (
                      <>
                        {comments[i].replies.map((e, i) => {
                          return (
                            <>
                              <Flex
                                w={"500px"}
                                ml={"55px"}
                                mt={"15px"}
                                gap={"20px"}
                                alignItems={"start"}
                                textAlign={"start"}
                                border={"1px solid rgba(0,0,0,0.2)"}
                                p={{ base: "5px", lg: "10px" }}
                              >
                                <Box
                                  overflow={"hidden"}
                                  w={""}
                                  h={""}
                                  borderRadius={"50%"}
                                >
                                  <Image
                                    w={"40px"}
                                    src="/images/jaycraven.avif"
                                    alt=""
                                  />
                                </Box>
                                <Box w={"100%"}>
                                  <Text
                                    fontSize={"16"}
                                    fontWeight={"500"}
                                    color={""}
                                  >
                                    {e.name}
                                  </Text>
                                  <Text
                                    fontSize={"14px"}
                                    fontWeight={""}
                                    color={""}
                                  >
                                    {e.msg}
                                  </Text>
                                  <Flex
                                    w={"100%"}
                                    mt={"5px"}
                                    justifyContent={"end"}
                                  >
                                    <FaRegHeart />
                                  </Flex>
                                </Box>
                              </Flex>
                            </>
                          );
                        })}
                      </>
                    )}

                    {reply === i && (
                      <>
                        <Flex mt={"20px"} gap={"20px"} alignItems={"center"}>
                          <Box
                            overflow={"hidden"}
                            w={""}
                            h={""}
                            borderRadius={"50%"}
                          >
                            <Image
                              w={"50px"}
                              src="/images/jaycraven.avif"
                              alt=""
                            />
                          </Box>
                          <Textarea
                            rows={"2"}
                            placeholder="write a comment"
                            resize={"none"}
                            value={replyValue}
                            onChange={(e) => setReplyValue(e.target.value)}
                          />
                          <Button
                            onClick={() => handleReply(i)}
                            // w={"100%"}
                            colorScheme="orange"
                            fontSize={"14px"}
                            fontWeight={500}
                            borderRadius={"none"}
                          >
                            Comment
                          </Button>
                        </Flex>
                      </>
                    )}
                  </Box>
                </Flex>
              </>
            );
          })}

          <Flex mt={"20px"} gap={"20px"} alignItems={"center"}>
            <Box overflow={"hidden"} w={""} h={""} borderRadius={"50%"}>
              <Image w={"50px"} src="/images/jaycraven.avif" alt="" />
            </Box>
            <Textarea
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              rows={"2"}
              placeholder="write a comment"
              resize={"none"}
            />
            <Button
              onClick={handleComment}
              // w={"100%"}
              colorScheme="orange"
              fontSize={"14px"}
              fontWeight={500}
              borderRadius={"none"}
            >
              Comment
            </Button>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: "1fr" }}>
          <Box>
            <Box textAlign={"start"} mt={"30px"} p={"20px"}>
              <Text fontSize={"14px"}>
                This is your space to offer support and feedback. Remember to be
                constructive—there's a human behind this project.
              </Text>
              <Box mt={"20px"}>
                <Text fontSize={"15px"}>Have a question for the creator?</Text>
                <Text
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                >
                  Check this project's FAQ
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Comments;
