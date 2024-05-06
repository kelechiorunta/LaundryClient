import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';



const SignInModal = ({ isOpen, onClose, handleIsSignIn, handleMsgSignIn, signInCredentials, setSignInCredentials,
  timerId, configureTimerExpiry, loginMsg, handleloginMsg }) => {
  const [isSignUp, setisSignUp] = useState(false)
  const navigate = useNavigate()
  

  const handleChange = (e) => {
    const {name, value} = e.target
    setSignInCredentials({
        ...signInCredentials, [name] : value
    })
  }

  const getRefresh = async() => {

    try {
      const response = await(axios.get('http://localhost:9000/register', {withCredentials: true}))
      console.log(response.data)
      //handleIsSignIn(i=>i=response.data.showSiginUp)
      handleMsgSignIn(m=>m=response.data.sessionMsg)
  }
  catch(err) {
      console.error(err)
  }
}

  const authenticate = async() => {
    try {
        const response = await(axios.get('http://localhost:9000/register', {withCredentials: true}))
        console.log(response.data)
        //handleIsSignIn(n=>n=true)//(s=>s=response.data.showSiginUp)
        //handleMsgSignIn(m=>m=response.data.sessionMsg)
        timerId = setTimeout(()=>{alert('Session has expired. Please sign in again.'); 
        handleIsSignIn(true); handleMsgSignIn(''); handleloginMsg(''); setSignInCredentials({email:'', password:''});
        clearTimeout(timerId); navigate('/');}, response.data.expiryVal)
        configureTimerExpiry(timerId)
    }
    catch(err) {
        console.error(err)
    }
    finally{
        //handleIsSignIn(s=>s=true)
    }
    }


  const signInUser = async() => {
        try{
            const response = await(axios.post('http://localhost:9000/register/signin', signInCredentials, {withCredentials: true}))
            console.log(response.data)
            authenticate()
            handleloginMsg(response.data.successMsg)
            getRefresh()
            navigate(response.data.site)
            onClose()
            clearTimeout(timerId)
            handleIsSignIn(n=>n=false)
        }
        catch(err){
            console.error(err)
            handleloginMsg(err.response.data.errMsg)
        }
  }

  const handleSignIn = () => {
    // Handle signup logic here
    // console.log("Signing up with:", email, password);
    // You can add your signup logic here (e.g., API calls)
    signInUser()
    //navigate('/')
    //onClose(); // Close the modal after signup
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* <ContextComponent isSignedUp = {isSignUp} /> */}
      {/* <MyContextProvider isSignedUp = {isSignUp}/> */}
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Text>{loginMsg}</Text>
            <FormLabel>Email address</FormLabel>
            <Input
              name='email'
              type="email"
              placeholder="Enter your email"
              value={signInCredentials.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              name='password'
              type="password"
              placeholder="Enter your password"
              value={signInCredentials.password}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSignIn}>
            Sign In
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;