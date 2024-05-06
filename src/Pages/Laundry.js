// LaundryPage.js
import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import LaundryRegisterWares from '../Components/LaundryRegisterWares';
import registerPic from '../Pics/registerwares.jpg'
import registerPicII from '../Pics/registerwaresII.jpg'
import SlideRegisterWares from '../Components/SlideRegisterWares';

const LaundryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Flex direction="column" alignItems="center" mx={2} p="4"
      fontFamily={'Raleway'} 
      backgroundImage={registerPicII} 
      backgroundSize={'cover'}
      backgroundPosition={'bottom'}
      textAlign={'left'}
      color={'white'}>
        <Heading as="h1" mb="4">
          Laundry Services
        </Heading>
        <Box w="100%" maxW="600px">
          <Text mb="4">
            Welcome to our laundry services page! We offer professional laundry services for all
            your clothing and household items.
          </Text>
          <Text mb="4">
            Our services include washing, drying, folding, and ironing. We use high-quality
            detergents and ensure that your items are treated with care.
          </Text>
          <Text mb="4">
            Whether you need laundry done for everyday wear or special garments, we've got you
            covered. Contact us today to schedule a pickup or drop-off.
          </Text>
        </Box>
      </Flex>
      <Flex 
      justifyContent={'space-evenly'}
      alignItems={'center'}
      w={'90%'}
      mx={'5%'}>
        <LaundryRegisterWares />
        <SlideRegisterWares />
      </Flex>
    </motion.div>
  );
};

export default LaundryPage;
