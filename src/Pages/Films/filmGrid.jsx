import { Box, Grid, Heading, Image, Progress, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa6";
import React from "react";
import { generateRandomData } from "../../libs/functions";
import { LuClock3 } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import "./filmsPage.css";
import { Link } from "react-router-dom";

const FilmsGrid = () => {
    const gridColumns = useBreakpointValue({ base: "1fr", md: "repeat(3, 1fr)" });
    const randomData = generateRandomData(10);

    return (
        <Grid templateColumns={gridColumns} gap={6} m="auto" p={["5vh 5vw", "5vh 10vw"]}>
            {randomData?.map((ele) => (
                <Link to={`/film/${ele.id}`}>
                    <Box key={ele.id} textAlign="left">
                        <Image src={ele.photo.ed} alt={ele.name} className="films-grid-img" />
                        <Progress colorScheme="orange" value={ele.progress} max={100} className="films-grid-progress" />
                        <Box p="1vh 0.1vw">
                            <Box display="flex" sx={{ position: "relative" }} alignItems="center">
                                <Image src={ele.creator.photo} alt={ele.creator.name} className="films-grid-creator-img" />
                                <Heading as="h3" size="sm" className="films-grid-heading" ml={2}>
                                    {ele.name}
                                    <Text className="films-grid-creator">{ele.creator.name}</Text>
                                </Heading>
                                <Tooltip placement="top" label="Save this film" hasArrow>
                                    <Box>
                                        <FaRegBookmark title="Save this film" className="films-grid-bookmark" />
                                    </Box>
                                </Tooltip>
                            </Box>
                            <Box display="flex" alignItems="center" style={{ marginLeft: "45px" }} mt={2}>
                                <LuClock3 size={18} />
                                <Text fontSize="sm" ml={1}>
                                    3 days left
                                </Text>
                                <GoDotFill size={10} style={{ marginLeft: "10px" }} />
                                <Text fontSize="sm" ml={2}>
                                    {ele.progress}% funded
                                </Text>
                            </Box>

                        </Box>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
};

export default FilmsGrid;