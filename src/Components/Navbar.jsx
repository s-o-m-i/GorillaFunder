import { Flex, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import NavLink from React Router
import { AppContext } from "../Context/AuthContextProvider";
import SubNavbar from "./SubNavbar";

const Navbar = ({logoLevel}) => {
  const context = useContext(AppContext);
  const { isAuth, logout } = context;
  const navigate = useNavigate();
  const logoutClick = () => {
    logout();
    navigate("/login");
  }
  return (
    <Flex
      as="header"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      borderWidth="1px"
      w="100%"
    >
      <Flex
        w="100%"
        p={["2vh 3vw", "2vh 3vw"]}
        justifyContent="space-between"
        alignItems="center"
        borderWidth="1px"
        flexDirection={["column", "row"]}
      >
        <Flex gap={["1vw", "2vw"]}>
          {/* Use NavLink from React Router */}
          <NavLink to="/create-project" className="active-link">
            Start a project
          </NavLink>
        </Flex>
		<Link to="/">
        <Image
          src={logoLevel === "2" ? "../images/logo.png" : "images/logo.png"}
          alt="gorilla-funder"
          h={["3vh", "6vh"]}
          // w={"100px"}
        />
		</Link>
        <Flex gap={["1vw", "2vw"]} sx={{cursor: "pointer"}} onClick={logoutClick}>
          {/* Use NavLink from React Router */}
            {isAuth ? "Logout" : "Login"}
        </Flex>
      </Flex>
      <SubNavbar />
    </Flex>
  );
};

export default Navbar;
