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
import { ContextComponent } from "./ContextComponent";
import MyContextProvider from "./ContextProvider";

var timerId;

const SignUpModal = ({ isOpen, onClose, handleIsSignUp, handleMsg, setSignUpCredentials,
   signUpCredentials, configureExpiry}) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [statusMsg, setStatusMsg] = useState('')
  const [isSignUp, setisSignUp] = useState(false)
  const navigate = useNavigate()
  

  const handleChange = (e) => {
    const {name, value} = e.target
    setSignUpCredentials({
        ...signUpCredentials, [name] : value
    })
  }

  const getRefresh = async() => {

    try {
      const response = await(axios.get('http://localhost:9000/register', {withCredentials: true}))
      console.log(response.data)
      //handleIsSignIn(i=>i=response.data.showSiginUp)
      //handleMsg(m=>m=response.data.sessionMsg)
  }
  catch(err) {
      console.error(err)
  }
}

  const authenticate = async() => {
    try {
        const response = await(axios.get('http://localhost:9000/register', {withCredentials: true}))
        console.log(response.data)
        //handleIsSignUp(n=>n=response.data.showSignUp)
        handleMsg(m=>m=response.data.sessionMsg)
        timerId = setTimeout(()=>{alert('Session has expired. Please sign in again.'); 
        handleIsSignUp(true); handleMsg(''); setStatusMsg(''); setSignUpCredentials({email:'', password:''})
        clearTimeout(timerId); navigate('/');}, response.data.expiryVal)
        configureExpiry(timerId)
    }
    catch(err) {
        console.error(err)
    }
    }


  const signUpUser = async() => {
        try{
            const response = await(axios.post('http://localhost:9000/register/signup', signUpCredentials, {withCredentials: true}))
            console.log(response.data)
            authenticate()
            setStatusMsg(response.data.successMsg)
            //handleMsg(response.data.successMsg)
            getRefresh()
            navigate(response.data.site)
            onClose()
            clearTimeout(timerId)
            handleIsSignUp(false)
        }
        catch(err){
            console.error(err)
            setStatusMsg(err.response.data.errMsg)
        }
  }

  const handleSignUp = () => {
    // Handle signup logic here
    // console.log("Signing up with:", email, password);
    // You can add your signup logic here (e.g., API calls)
    signUpUser()
    //navigate('/')
    //onClose(); // Close the modal after signup
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* <ContextComponent isSignedUp = {isSignUp} /> */}
      <MyContextProvider isSignedUp = {isSignUp}/>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Text>{statusMsg}</Text>
            <FormLabel>Email address</FormLabel>
            <Input
              name='email'
              type="email"
              placeholder="Enter your email"
              value={signUpCredentials.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              name='password'
              type="password"
              placeholder="Enter your password"
              value={signUpCredentials.password}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
