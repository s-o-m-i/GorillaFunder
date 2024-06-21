import { Flex,  Heading, Text,} from "@chakra-ui/react";

const HomepageComponent = () => {
  return (
    <>
      <Heading as="h2" size="lg" p="3vh">
      Make your vision a reality.
      </Heading>
      <Text fontWeight={"500"} fontSize={"xl"} p={3}>ON GORILLA-FUNDER:</Text>
      <Flex flexWrap="wrap" justifyContent="center" sx={{marginBottom: "20px"}}>
        <Flex
          flexDirection="column"
          borderWidth="1px"
          w={["90%", "23vw"]}
          p={5}
          m={2}
          textAlign="center"
        >
          <Heading as="h3" fontWeight="normal" color="#e98429">
            225,613
          </Heading>
          <Text>films funded</Text>
        </Flex>
        <Flex
          flexDirection="column"
          borderWidth="1px"
          w={["90%", "23vw"]}
          p={5}
          m={2}
          textAlign="center"
        >
          <Heading as="h3" fontWeight="normal" color="#e98429">
            $6,217,155,535
          </Heading>
          <Text>towards creative work</Text>
        </Flex>
        <Flex
          flexDirection="column"
          borderWidth="1px"
          w={["90%", "23vw"]}
          p={5}
          m={2}
          textAlign="center"
        >
          <Heading as="h3" fontWeight="normal" color="#e98429">
            69,421,715
          </Heading>
          <Text>pledges</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default HomepageComponent;
