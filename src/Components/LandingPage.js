// ResponsiveLandingPage.js
import React from 'react';
import { useEffect, useState } from 'react'
import { Container, Box, Text } from '@chakra-ui/react';
import axios from 'axios'
import LandingModal from './LandingModal'
import laundryPic from '../Pics/laundry.jpg'


const LandingPage = ({message, handlemessage}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <Box>
      {/* <ResponsiveHeader /> */}
      <Container maxW="container.xl" py="16" backgroundImage={laundryPic}>
        <Text fontSize="2xl" fontWeight="bold" mb="8">
          Welcome to Your Website!
        </Text>
        <Text fontSize="lg">
          This is a responsive landing page built with Chakra UI. You can add more content here.
        </Text>
      </Container>
      <LandingModal greeting={message} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </Box>
  );
};

export default LandingPage;
