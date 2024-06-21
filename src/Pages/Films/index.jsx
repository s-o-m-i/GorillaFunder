import { Heading, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import FilmsGrid from "./filmGrid";

const FilmsPage = () => {

	return (
		<VStack divider={<StackDivider borderColor="gray.200" />} spacing={"auto"}>
			<Navbar />
			<Heading as="h2" size="lg" p="3vh">
				Creative Films.
			</Heading>
			<FilmsGrid />
			<Footer />
		</VStack>
	);
};

export default FilmsPage;