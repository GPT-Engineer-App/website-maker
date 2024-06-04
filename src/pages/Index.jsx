import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} mb={8}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" ml={4}>
            My Website
          </Heading>
          <HStack spacing={4} mr={4}>
            <IconButton aria-label="Home" icon={<FaHome />} />
            <IconButton aria-label="About" icon={<FaInfoCircle />} />
            <IconButton aria-label="Contact" icon={<FaEnvelope />} />
          </HStack>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1">
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            Welcome to My Website
          </Heading>
          <Text fontSize="lg" textAlign="center">
            This is a simple website built with React and Chakra UI. Feel free to explore and learn more about what we do.
          </Text>
          <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE3NDg5NjE1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" />
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} mt={8}>
        <Text textAlign="center">&copy; 2023 My Website. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
