// TypewriterText.js
import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '@chakra-ui/react';

const TypewriterText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        fontFamily="monospace"
        whiteSpace="nowrap"
        overflow="hidden"
        variants={{
          start: {
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
              duration: 0.5,
            },
          },
          end: {
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          },
        }}
        initial="start"
        animate="end"
      >
        Hello, I am a typewriter effect!
      </Text>
    </motion.div>
  );
};

export default TypewriterText;
