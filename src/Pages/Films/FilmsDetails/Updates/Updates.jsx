import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Updates = () => {
  return (
  <>

<Box my={8}>
          <Heading as="h2" size="lg" mb={4}>
            Project Updates
          </Heading>
          {/* Update cards */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            {/* Update card 1 */}
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={2}>
                Update 1
              </Heading>
              <Text mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text color="gray.500" fontSize="sm">
                Posted on: July 1, 2023
              </Text>
            </Box>
            {/* Update card 2 */}
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={2}>
                Update 2
              </Heading>
              <Text mb={4}>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Text>
              <Text color="gray.500" fontSize="sm">
                Posted on: July 15, 2023
              </Text>
            </Box>
          </Grid>
        </Box>
  </>
  )
}

export default Updates