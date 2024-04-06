import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';

const   Footer = () => {
  return (
    <Box bg="blue.500" py={8} px={8} color="white">
        <Container maxW="container.xl">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem>
            <Heading as="h3" size="lg" mb={4}>
                About Us
            </Heading>
            <Text fontSize="md">We are committed to transparency and fighting against misconduct, corruption, or illegal activities. </Text>
            </GridItem>
            <GridItem>
            <Heading as="h3" size="lg" mb={4}>
                Contact Us
            </Heading>
            <Text fontSize="md">Email: contact@whistleblower.com</Text>
            <Text fontSize="md">Phone: 123-456-7890</Text>
            </GridItem>
            <GridItem>
            <Heading as="h3" size="lg" mb={4}>
                Follow Us
            </Heading>
            <Box>
                <Link href="#" mr={4}>
                Twitter
                </Link>
                <Link href="#">Facebook</Link>
            </Box>
            </GridItem>
        </Grid>
        <Divider mt={6} borderColor="blue.800" />
        <Text mt={6} textAlign="center">
            &copy; 2024 Whistleblower Platform. All rights reserved.
        </Text>
        </Container>
    </Box>
  )
}

export default Footer