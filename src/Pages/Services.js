// ServicesPage.js
import React from 'react';
import { Container, Box, Text, Heading, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const ServicesPage = () => {

    const gridVariant = {
        hidden:{x:'-100vw'},
        visible:{x:0, transition: {staggerChildren: 0.5}}//transition: {delay:0.5, when: 'beforeChildren'}}
    }

    const buttonVariant = {
        hidden:{x: -10, opacity: 0}, 
        visible:{x:0, opacity:1},
    }

    const MotionGridContainer = motion(Grid)
    const MotionGridItem = motion(GridItem)

  return (
    <motion.div
    initial={'hidden'}//{{x:0,width:0}}
    animate={'visible'}//{{width:'100%'}}
    variants={gridVariant}>
    {/* exit={{x:window.innerWidth, opacity:1, staggerChildren:0.5}}> */}
        
    <Box bg="gray.100" minHeight="100vh">
      <Container maxW="container.xl" py="16">
        <Heading as="h1" size="xl" mb="8" textAlign="center">
          Our Services
        </Heading>
        <MotionGridContainer templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}
        variants={gridVariant}
        initial={'hidden'}
        animate={'visible'}>
          {/* Service 1 */}
          <MotionGridItem variants={buttonVariant}>
            <Box p="6" bg="white" borderRadius="lg" boxShadow="md">
              <Image src="/service1.jpg" alt="Service 1" borderRadius="md" mb="4" />
              <Heading as="h3" size="md" mb="2">
                Service 1
              </Heading>
              <Text fontSize="md" mb="4">
                Description of service 1 goes here.
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                $99/month
              </Text>
            </Box>
          </MotionGridItem>
          {/* Service 2 */}
          <MotionGridItem variants={buttonVariant}>
            <Box p="6" bg="white" borderRadius="lg" boxShadow="md">
              <Image src="/service2.jpg" alt="Service 2" borderRadius="md" mb="4" />
              <Heading as="h3" size="md" mb="2">
                Service 2
              </Heading>
              <Text fontSize="md" mb="4">
                Description of service 2 goes here.
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                $149/month
              </Text>
            </Box>
          </MotionGridItem>
          {/* Service 3 */}
          <MotionGridItem variants={buttonVariant}>
            <Box p="6" bg="white" borderRadius="lg" boxShadow="md">
              <Image src="/service3.jpg" alt="Service 3" borderRadius="md" mb="4" />
              <Heading as="h3" size="md" mb="2">
                Service 3
              </Heading>
              <Text fontSize="md" mb="4">
                Description of service 3 goes here.
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                $199/month
              </Text>
            </Box>
          </MotionGridItem>
        </MotionGridContainer>
      </Container>
    </Box>
    </motion.div>
  );
};

export default ServicesPage;
