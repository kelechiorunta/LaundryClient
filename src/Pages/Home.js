import React from 'react';
import { Container, Box, Text, Heading, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import TypewriterText from '../Components/TypewriterComponent';
import laundryPic from '../Pics/laundry.jpg'

const HomePage = () => {

 //const MotionBox = motion(Box)

  return (
    <motion.div
    initial={{x:0,opacity:0}}
    animate={{opacity:1}}
    exit={{x:window.innerWidth, opacity:1, transition:{duration:0.1}}}>
        
    <Box 
    bg="gray.100" 
    minHeight="100vh"
    backgroundImage={laundryPic}
    backgroundSize={'cover'}
    color='white'>
      <Container maxW="container.xl" py="16">
        <Box textAlign="center">
          <Image src="/logo.png" alt="Logo" maxW="200px" mb="8" />
          <Heading as="h1" size="xl" mb="4" color={'blue.500'}>
            Welcome to Your Website
          </Heading>
          {/* <TypewriterText/> */}
          <Text fontSize="lg" mb="8" color={'blue.500'}>
            Discover amazing things with us!
          </Text>
          <Button colorScheme="blue" size="lg" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="gray" size="lg">
            Log In
          </Button>
        </Box>
      </Container>
      <Box bg="blue.500" color="white" py="8" textAlign="center">
        <Container maxW="container.xl">
          <Text fontSize="xl">
            Learn more about our services and offerings.
          </Text>
        </Container>
      </Box>
    </Box>
    </motion.div>
  );
};

export default HomePage;