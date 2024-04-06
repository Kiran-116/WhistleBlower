import React from 'react';
import { Link } from 'react-router-dom';
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Center,
  Divider,
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';

function LandingPage() {
  return (
    <Box>

      {/* Marque */}
      <Box bg="blue.200" py={2} px={8} textAlign="center">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <Text fontSize="lg" fontWeight="bold" color="red.800">
            Report misconduct, corruption, or illegal activities anonymously!
          </Text>
        </marquee>
      </Box>

      {/* Image-text slider */}
      <Box py={8}>
        <ImageSlider />
      </Box>

      {/* Content */}
      <Box bg="gray.100" py={12}>
      <Container maxW="container.lg">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Welcome to Digital Anonymity Unleashed
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Empowering whistleblowers to report misconduct anonymously
        </Text>
        <Box textAlign="center" mb={8}>
        <Link to="/form">
          <Button colorScheme="teal" size="lg" mr={4}>
            Get Started
          </Button>
        </Link>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Why Choose Digital Anonymity Unleashed?
          </Heading>
          <Text fontSize="lg" mb={4}>
            <strong>Anonymity:</strong> We ensure complete anonymity, allowing
            whistleblowers to report without fear of reprisal.
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>Security:</strong> Our platform uses state-of-the-art
            encryption technology to safeguard your data.
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>Transparency:</strong> We believe in transparency and
            accountability throughout the reporting process.
          </Text>
          <Text fontSize="lg" mb={8}>
            <strong>Support:</strong> We offer comprehensive support services
            to whistleblowers, including legal advice and counseling.
          </Text>
          <Heading as="h2" size="lg" mb={4}>
            How It Works
          </Heading>
          <Text fontSize="lg" mb={4}>
            <strong>Submit Anonymously:</strong> Report misconduct anonymously
            through our secure platform.
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>Upload Evidence:</strong> Provide evidence to support your
            report.
          </Text>
          <Text fontSize="lg" mb={4}>
            <strong>Track Progress:</strong> Monitor the progress of your report
            and receive updates on its status.
          </Text>
          <Text fontSize="lg" mb={8}>
            <strong>Receive Support:</strong> Access support services to help
            you through the whistleblowing process.
          </Text>
        </Box>
      </Container>
    </Box>
      
      {/* Call to action */}
      <Center m={8}>
        <Link to="/form">
          <Button colorScheme="blue" size="lg" borderRadius="full" px={8} py={6}>
            Report Anonymously
          </Button>
        </Link>
      </Center>

      {/* FAQ */}
      <Box bg="gray.100" py={12}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            FAQ
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Q: What types of misconduct or illegal activities can I report on the Whistleblower Platform?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A: You can report a wide range of misconduct, corruption, or illegal activities, including but not limited to fraud, embezzlement, harassment, discrimination, environmental violations, and unethical behavior.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Q: How can I trust that my identity will remain anonymous?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A: Our platform employs state-of-the-art encryption and security measures to ensure the anonymity of whistleblowers. We have strict confidentiality protocols in place, and only authorized personnel have access to submitted information. Additionally, we continuously monitor and update our systems to safeguard whistleblower identities.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Q: What happens after I submit a report on the Whistleblower Platform?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A: Upon receiving a report, our team thoroughly investigates the allegations while protecting the whistleblower's identity. We take appropriate actions based on the severity and validity of the claims, which may include legal interventions, internal investigations, or corrective measures. Throughout the process, we prioritize confidentiality and respect for the whistleblower's anonymity.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Q: Is there a time limit for reporting misconduct on the Whistleblower Platform?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A: While we encourage prompt reporting of misconduct, there is no specific time limit for submitting reports on our platform. We understand that whistleblowers may need time to gather evidence or consider their options before coming forward. However, it's essential to report misconduct as soon as possible to prevent further harm and ensure timely intervention.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Q: Can I report anonymously if I am an employee of the organization involved in the misconduct?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A: Yes, our platform allows employees of the organization implicated in the misconduct to report anonymously. We understand the potential risks whistleblowers face when reporting on their employers, so we prioritize protecting their identities and ensuring confidentiality. However, we encourage whistleblowers to review their organization's policies and seek legal advice if necessary before submitting reports.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Q: What support services are available to whistleblowers using the platform?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A: We provide comprehensive support services to whistleblowers throughout the reporting process. This includes access to legal advice, counseling, and resources to help navigate the challenges of whistleblowing. Our dedicated team is committed to assisting whistleblowers every step of the way, ensuring they receive the support and protection they need.
            </AccordionPanel>
          </AccordionItem>

          </Accordion>
        </Container>
      </Box>

      {/* Privacy Policy */}
      <Box bg="gray.200" py={12}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            Privacy Policy
          </Heading>
          <Text mb={4}>
            At the Whistleblower Platform, we are committed to protecting the privacy and confidentiality of our users. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </Text>
          <Heading as="h3" size="lg" mb={2}>
            Information Collection and Use
          </Heading>
          <Text mb={4}>
            We only collect personal information when it is voluntarily submitted by users for the purpose of reporting misconduct, corruption, or illegal activities. This may include contact information provided for follow-up purposes, but we do not require any personally identifiable information to submit a report.
          </Text>
          <Heading as="h3" size="lg" mb={2}>
            Data Security
          </Heading>
          <Text mb={4}>
            We employ industry-standard security measures to protect the confidentiality and integrity of user data. This includes encryption of sensitive information and regular security audits to identify and address any vulnerabilities.
          </Text>
        </Container>
      </Box>

    </Box>
  );
}

export default LandingPage;
