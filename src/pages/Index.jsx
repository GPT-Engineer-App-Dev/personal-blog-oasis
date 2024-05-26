import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" display="flex" alignItems="center">
                <FaHome />
                <Text ml={2}>Home</Text>
              </Link>
              <Link href="#" display="flex" alignItems="center">
                <FaUserAlt />
                <Text ml={2}>About</Text>
              </Link>
              <Link href="#" display="flex" alignItems="center">
                <FaEnvelope />
                <Text ml={2}>Contact</Text>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 1</Heading>
            <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 2</Heading>
            <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 3</Heading>
            <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;