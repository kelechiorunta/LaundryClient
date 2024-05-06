// ContactPage.js
import React from 'react';
import { Container, Box, Text, Heading, Input, Textarea, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import contactPic from '../Pics/contact.jpg'

const ContactPage = () => {
  return (
    <Container 
    maxW="container.md" 
    py="16"
    my={8}
    px={'16'}
    backgroundImage={contactPic}
    backgroundSize={'cover'}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        
      >
        <Heading as="h1" size="xl" mb="8" textAlign="left" color={'white'}>
          Contact Us
        </Heading>
        <Box bg="white" p="6" borderRadius="lg" boxShadow="md">
          <Text fontSize="xl" mb="4">
            Send us a message
          </Text>
          <form>
            <Input type="text" placeholder="Your Name" mb="4" />
            <Input type="email" placeholder="Your Email" mb="4" />
            <Textarea placeholder="Your Message" mb="4" />
            <Button colorScheme="blue" type="submit">
              Send
            </Button>
          </form>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
