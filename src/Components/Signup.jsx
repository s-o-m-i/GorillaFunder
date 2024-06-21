import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axiosInstance from "../libs/axiosService";

const Signup = () => {
  const [signupInputValue, setSignupInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/signup", signupInputValue);
      toast({
        title: "Account created.",
        description: "You have successfully created an account.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Something went wrong.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box
        w={["full", "md"]}
        p={[8, 10]}
        marginBottom="10vh"
        mt={[20, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "gray.300"]}
        borderRadius={10}
      >
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={4} align={["flex-start", "center"]} w="full" mb={3}>
            <Heading size="lg">Signup</Heading>
            <Text>
              Have an account?{" "}
              <Button color="#e98429" variant="link">
                <Link to={"/login"}>Login</Link>
              </Button>
            </Text>
          </VStack>
        </VStack>
        <FormControl padding={"1vh 0"}>
          <FormLabel>Name</FormLabel>
          <Input
            value={signupInputValue.name}
            name="name"
            onChange={handleChange}
            rounded={10}
            variant="filled"
          />
        </FormControl>
        <FormControl padding={"1vh 0"}>
          <FormLabel>E-mail Address</FormLabel>
          <Input
            value={signupInputValue.email}
            onChange={handleChange}
            name="email"
            rounded={10}
            variant="filled"
          />
        </FormControl>
        <FormControl padding={"1vh 0 4vh"}>
          <FormLabel>Password</FormLabel>
          <Input
            value={signupInputValue.password}
            onChange={handleChange}
            name="password"
            rounded={10}
            variant="filled"
            type="password"
          />
        </FormControl>
        <Button
          onClick={handleSignUp}
          rounded={10}
          sx={{ bg: "#e98429", color: "white" }}
          w={"full"}
          padding={"1vh 5vw"}
        >
          Create Account
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Signup;
