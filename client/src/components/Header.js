import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box bg="blue.500" py={4} px={8}>
        <Heading as="h1" size="2xl" color="white">
          Whistleblower Platform
        </Heading>
    </Box>
  )
}

export default Header