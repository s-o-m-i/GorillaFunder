import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	VStack,
	useToast,
  } from "@chakra-ui/react";
  import { AppContext } from "../Context/AuthContextProvider";
  import React, { useContext, useState } from "react";
  import { Navigate, useNavigate } from "react-router-dom";
  import Footer from "./Footer";
  import Navbar from "./Navbar";
  import axiosInstance from "../libs/axiosService";
  
  const ForgotPassword = () => {
	const context = useContext(AppContext);
	const { isAuth } = context;
	const [email, setEmail] = useState("");
	const toast = useToast();
	const navigate = useNavigate();
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  try {
		await axiosInstance.post("/reset-email", { email });
		toast({
		  title: "Email sent.",
		  description: "Please check your email for further instructions.",
		  status: "success",
		  duration: 9000,
		  isClosable: true,
		});
		navigate(`/resetpassword?email=${email}`);
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
		{isAuth ? (
		  <Navigate to="/" />
		) : (
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
				<VStack
				  spacing={4}
				  align={["flex-start", "center"]}
				  w="full"
				  mb={3}
				>
				  <Heading size="lg">Forgot Password</Heading>
				</VStack>
			  </VStack>
			  <FormControl padding={"2vh 0"}>
				<FormLabel>E-mail Address</FormLabel>
				<Input
				  rounded={10}
				  variant="filled"
				  placeholder="Enter your email address"
				  name="email"
				  value={email}
				  onChange={(e) => setEmail(e.target.value)}
				/>
			  </FormControl>
			  <Button
				rounded={10}
				sx={{ bg: "#e98429", color: "white" }}
				w={"full"}
				padding={"1vh 5vw"}
				onClick={handleSubmit}
				disabled={email === ""}
			  >
				Submit
			  </Button>
			</Box>
			<Footer />
		  </>
		)}
	  </>
	);
  };
  
  export default ForgotPassword;
  