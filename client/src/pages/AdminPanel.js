import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
} from '@chakra-ui/react';

// Mock data for complaints
const complaintsData = [
  { id: 1, title: 'Misconduct in Department A', department: 'A', status: 'Unresolved', registerDate: '2024-04-01', message: 'Details about the complaint 1...', file: 'document.pdf' },
  { id: 2, title: 'Corruption in Department B', department: 'B', status: 'Resolved', registerDate: '2024-04-02', message: 'Details about the complaint 2...', file: 'video.mp4' },
  { id: 3, title: 'Illegal Activities in Department C', department: 'C', status: 'Rejected', registerDate: '2024-04-03', message: 'Details about the complaint 3...', file: 'image.jpg' },
];

function AdminPanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleComplaintClick = (complaint) => {
    setSelectedComplaint(complaint);
    onOpen();
  };

  return (
    <Container maxW="container.xl" mt={8}>
      <Box mb={8}>
        <Heading as="h2" size="xl" mb={4}>
          Complaint Lists
        </Heading>
        <Button colorScheme="blue" size="sm">
          Filter by Date
        </Button>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Complaint Title</Th>
            <Th>Status</Th>
            <Th>Register Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {complaintsData.map((complaint) => (
            <Tr key={complaint.id} cursor="pointer" onClick={() => handleComplaintClick(complaint)}>
              <Td>{complaint.title}</Td>
              <Td>{complaint.status}</Td>
              <Td>{complaint.registerDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for detailed complaint information */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedComplaint ? selectedComplaint.title : ''}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text><b>Complaint Title:</b> {selectedComplaint ? selectedComplaint.title : ''}</Text>
            <Text><b>Department Name:</b> {selectedComplaint ? selectedComplaint.department : ''}</Text>
            <Text><b>Message:</b> {selectedComplaint ? selectedComplaint.message : ''}</Text>
            <Text><b>Status:</b> 
              <Select defaultValue={selectedComplaint ? selectedComplaint.status : ''} size="sm">
                <option value="Unresolved">Unresolved</option>
                <option value="Rejected">Rejected</option>
                <option value="Resolved">Resolved</option>
              </Select>
            </Text>
            <Text><b>File:</b> {selectedComplaint ? selectedComplaint.file : ''}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default AdminPanel;
