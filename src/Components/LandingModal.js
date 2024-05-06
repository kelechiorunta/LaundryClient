import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';

const LandingModal = ({ isOpen, onClose, greeting}) => {
  // State to manage the modal's visibility
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    // Open the modal after 3 seconds
    const openTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Close the modal after another 3 seconds
    const closeTimeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 6000); // 3 seconds for open + 3 seconds for close

    return () => {
      clearTimeout(openTimeout);
      clearTimeout(closeTimeout);
    };
  }, [onClose]);

  return (
    <Modal isOpen={isVisible || isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'}>CLIENTSERVER INC.</ModalHeader>
        <ModalCloseButton />
        <ModalBody><Text as={'h4'} mt={-4} p={4}>{`${greeting}`}</Text></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LandingModal;