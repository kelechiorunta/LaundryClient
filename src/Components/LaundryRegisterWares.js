// LaundryRegisterWares.js
import React from 'react';
import { Flex, Box, Heading, Text, Input, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import registerPic from '../Pics/registerwares.jpg'

const LaundryRegisterWares = () => {
  const handleSubmit = (values, actions) => {
    console.log(values); // You can handle form submission here
    actions.setSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{backgroundImage: registerPic}}
    >
      <Flex 
      direction="column" 
      alignItems="center"
      fontFamily={'Raleway'}
      p="4">
        <Heading as="h1" mb="4">
          Register Wares for Laundry
        </Heading>
        <Box w="100%" maxW="400px">
          <Formik initialValues={{ item: '', quantity: '' }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field name="item">
                  {({ field }) => (
                    <Box mb="4">
                      <Text mb="2">Item Name:</Text>
                      <Input {...field} placeholder="Enter item name" />
                    </Box>
                  )}
                </Field>
                <Field name="quantity">
                  {({ field }) => (
                    <Box mb="4">
                      <Text mb="2">Quantity:</Text>
                      <Input {...field} type="number" placeholder="Enter quantity" />
                    </Box>
                  )}
                </Field>
                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default LaundryRegisterWares;
