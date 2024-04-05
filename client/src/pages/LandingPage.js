import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Button,
  Link,
  Image,
  Center,
  Badge,
  Grid,
  GridItem,
  Divider,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function LandingPage() {
  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Marque */}
      <Box bg="blue.200" py={2} px={8} textAlign="center">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <Text fontSize="lg" fontWeight="bold" color="blue.800">
            Report misconduct, corruption, or illegal activities anonymously!
          </Text>
        </marquee>
      </Box>

      {/* Image-text slider */}
      <Box py={8}>
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack bg="gray.100">
            <SliderFilledTrack bg="blue.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Flex mt={4} justify="center">
          <Box maxW="600px">
            <Image src="" alt="Whistleblower" />
            <Text mt={2} textAlign="center">
              Securely report misconduct, corruption, or illegal activities while protecting your identity.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Call to action */}
      <Center mb={8}>
        <Button colorScheme="blue" size="lg" borderRadius="full" px={8} py={6}>
          Report Anonymously
        </Button>
      </Center>

      <Footer />
    </Box>
  );
}

export default LandingPage;
