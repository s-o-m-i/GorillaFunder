import {  VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HomepageComponent from "../Components/Homepage";

import Navbar from "../Components/Navbar";
import FilmsGrid from "./Films/filmGrid";
const Homepage = () => {
	

	return (
		<VStack spacing={"auto"}>
			<Navbar />
				<HomepageComponent />
				<FilmsGrid />
			<Footer  />
		</VStack>
	);
};

export default Homepage;
