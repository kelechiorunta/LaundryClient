// AboutPage.js
import React from 'react';
import { Container, Box, Text, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import aboutPic from '../Pics/about.jpg'
import DropDownHeader from '../Components/DropdownMenu';
import AccordionComponent from '../Components/AccordionComponent';
//import LandingHeader from '../Components/LandingHeader';

const About = () => {

    //const MotionContainer = motion(Container)

  return (
    <motion.div
    initial={{x:0,width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, opacity:1, transition:{duration:0.1}}}
    style={{backgroundColor: 'rgba(0, 255, 0, 0.6)'}}
    >
    
    <Container
    maxW="container.xl" 
    py="16"
    backgroundImage={aboutPic}
    color={'white'}
    my={8}
    h={'80vh'}>
        <DropDownHeader/>
      <Heading as="h1" size="xl" mb="8" textAlign="center" text-3xl>
        About Us
      </Heading>
      <Box display={{ md: 'flex' , lg: 'block'}}>
        <Box flex="1" mr={{ md: '8' }}>
          <Text fontSize="2xl" mb="4" mx={4} my={4} textAlign={'center'} fontFamily={'Raleway, sans-serif'}>
            We are a passionate team dedicated to creating amazing experiences for our users.
          </Text>
          <Text fontSize="xl" mb="4" mx={4} my={4} textAlign={'center'} fontFamily={'Raleway, sans-serif'}>
            Our mission is to innovate, inspire, and make a positive impact in the world through technology.
          </Text>
          <Text fontSize="lg" mb="4" mx={4} my={4} textAlign={'center'} fontFamily={'Raleway, sans-serif'}>
            Contact us at <strong>info@example.com</strong> for more information.
          </Text>
        </Box>
        <Box flex="1" mt={{ base: '8', md: '0' }}>
          {/* <Image src={aboutPic} alt="About Us" borderRadius="md" /> */}
        </Box>
      </Box>
    </Container>
    <AccordionComponent /> 
    </motion.div>
  );
};

export default About;
