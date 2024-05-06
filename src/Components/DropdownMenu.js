import React, { useState } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const DropDownHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  const menuVariant = {hidden:{opacity:0}, visible:{opacity: 1, transition:{staggerChildren: 0.5}}}

  const textVariant = {hidden:{height:0, opacity:0}, visible:{height:'100%', opacity:1}}

  return (
    <Flex as="nav" align="center" justify="space-between" p="4">
      <Box>
        <Text fontSize="xl" fontWeight="bold">My Website</Text>
      </Box>
      <Flex align="center" pos="relative">
        <Button variant="ghost" onClick={handleDropdownToggle}>
          Home
        </Button>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            zIndex: 10,
          }}
        >
          {isDropdownOpen && (
            <MotionBox bg="white" p="4" borderRadius="md" boxShadow="md" w={'max-content'}
            initial={'hidden'}
            animate={'visible'}
            variants={menuVariant}
            >
              <MotionText color={'black'} variants={textVariant}>Dropdown Content</MotionText>
              <MotionText color={'black'} variants={textVariant}>Favorite Wash</MotionText>
              <MotionText color={'black'} variants={textVariant}>Terms and Conditions</MotionText>
              {/* Add more dropdown menu items here */}
            </MotionBox>
          )}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default DropDownHeader;