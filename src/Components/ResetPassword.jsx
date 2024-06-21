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
import { AppContext } from "../Context/AuthContextProvider";
import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axiosInstance from "../libs/axiosService";

const ResetPassword = () => {
	const context = useContext(AppContext);
	const { isAuth } = context;
	const [resetCode, setResetCode] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const toast = useToast();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const emailParam = params.get("email");
		if (emailParam) {
			setEmail(emailParam);
		} else {
			toast({
				title: "Error",
				description: "Email is missing in query parameters.",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			navigate("/forgot-password");
		}
	}, [location, navigate, toast]);

	const handleResetPassword = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast({
				title: "Error",
				description: "Passwords do not match.",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			return;
		}
		try {
			await axiosInstance.post("/reset-verify", { email, reset_code: resetCode });
			toast({
				title: "Code Verified",
				description: "Reset code verified successfully.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});

			// Reset the password
			await axiosInstance.put("/reset-password", { email, password });
			toast({
				title: "Password reset.",
				description: "Your password has been reset successfully.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
			navigate("/login");

		} catch (error) {
			toast({
				title: "Error",
				description: error.response?.data?.verify || "Something went wrong.",
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
								<Heading size="lg">Reset Password</Heading>
								<Text>
									Did Receive Code?{" "}
									<Button color="#e98429" variant="link">
										<Link to={"/forgot-password"}>Send Again</Link>
									</Button>
								</Text>
							</VStack>
						</VStack>
						<FormControl padding={"2vh 0"}>
							<FormLabel>Enter the code we sent to Email</FormLabel>
							<Input
								rounded={10}
								variant="filled"
								placeholder="Enter the code"
								name="code"
								type="text"
								value={resetCode}
								onChange={(e) => setResetCode(e.target.value)}
							/>
							<p style={{ fontSize: "12px" }}>
								If you did not receive the code, please check your spam folder.
							</p>
						</FormControl>
						<FormControl padding={"0.5vh 0"}>
							<FormLabel>Enter new password</FormLabel>
							<Input
								rounded={10}
								variant="filled"
								type="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<FormLabel mt={2}>Re-Enter password</FormLabel>
							<Input
								rounded={10}
								variant="filled"
								type="password"
								name="confirmPassword"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</FormControl>
						<Button
							mt={4}
							rounded={10}
							sx={{ bg: "#e98429", color: "white" }}
							w={"full"}
							padding={"1vh 5vw"}
							onClick={handleResetPassword}
							disabled={resetCode === "" || password === "" || confirmPassword === ""}
						>
							Reset Password
						</Button>
					</Box>
					<Footer />
				</>
			)}
		</>
	);
};

export default ResetPassword;
