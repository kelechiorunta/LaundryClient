// ResponsiveHeader.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import { motion, useAnimation } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


const LandingHeader = ({timerId, showSignUp, showSignIn, handlemessage, handleExpiry}) => {

    const [isSignUp, setIsSignUp] = useState(showSignIn)
    const [isSignIn, setIsSignIn] = useState(showSignIn)
    const [signInCredentials, setSignInCredentials] = useState({email: '', password: ''})
    const [signUpCredentials, setSignUpCredentials] = useState({email: '', password: ''})
    const [msg, setStatusMsg] = useState('')
    const [firstcount, setFirstCount] = useState(0)
    const navigate = useNavigate()

    const MotionFlex = motion(Flex)
    const MotionButton = motion(Button)

    const flexVariant = {
        hidden:{x:'-100vw'},
        visible:{x:0, transition: {staggerChildren: 0.5}}//transition: {delay:0.5, when: 'beforeChildren'}}
    }

    const flexVariantReverse = {
        hidden:{},
        visible:{transition: {delay:0.5, staggerChildren: -1.5}}//transition: {delay:0.5, when: 'beforeChildren'}}
    }
    const buttonVariant = {
        hidden:{x: -10, opacity: 0}, 
        visible:{x:0, opacity:1},
        
    }

    const controls = useAnimation();

    // useEffect(() => {
    //     const reverseAnimation = async () => {
    //     await controls.start("visible");
    //     await controls.start("hidden");
    //     };

    //     reverseAnimation();
    // }, [isSignIn]);

    const SignUp = async() => {
        try{
            const response = await(axios.get('http://localhost:9000/register/signin', {withCredentials: true}))
            console.log(response.data)
        }
        catch(err){
            console.error(err)
        }

    }

    const SignIn = async() => {
        try{
            const response = await(axios.get('http://localhost:9000/register/signin', {withCredentials: true}))
            console.log(response.data)
        }
        catch(err){
            console.error(err)
        }

    }

    const LogOut = async() => {
        try{
            const response = await (axios.get('http://localhost:9000/register/logout', {withCredentials: true}))
            setIsSignIn(response.data.showSignIn)
            setIsSignUp(true)
            setSignInCredentials({name:'', password:''})
            setSignUpCredentials({name:'', password:''})
            console.log(response.data.successMsg)
            handlemessage('');
            setStatusMsg('')
            navigate(response.data.site)
            handleExpiry(()=>{clearTimeout(timerId)})

            //await (axios.get('http://localhost:9000/register/sigin', {withCredentials: true}))
            
        }
        catch(err){
            console.error(err.response.data.errMsg)
        }
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSignIn, setIsSignInOpen] = useState(false);

    const handleOpenSignUpModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleOpenSignInModal = () => {
        setIsSignInOpen(true);
    };

    const handleCloseSignInModal = () => {
        setIsSignInOpen(false);
    };

  return (
    <Flex p="4" as={'flex'} position={'sticky'} top={0}
    zIndex={10}
    bg={isSignIn && isSignUp? "blue.500":"green.500"}
    color="white">
      <Heading size="md">Your Website</Heading>
      <Spacer />
      <Box display={{ base: 'none', md: 'block' }}>

        {(isSignIn === true) && (isSignUp === true)? 
        <Flex>
            <Button onClick={handleOpenSignInModal} colorScheme="whiteAlpha" mr="4">Sign In</Button>
            <Button onClick={handleOpenSignUpModal} colorScheme="whiteAlpha">Sign Up</Button>
        </Flex>
        :
      
        <MotionFlex
            variants={isSignIn || !isSignUp && (firstcount<=0)? flexVariant: flexVariantReverse}
            initial={'hidden'}
            animate={'visible'}
            justifyContent={'space-between'}
            alignItems={'center'}
            w={'100%'}
            
        
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
        >
            <Flex
            justifyContent={'space-evenly'}
            alignItems={'center'}
            w={'100%'}
            ml={{base:'-75%', md:'-25%'}}>
            {['HOME', 'CONTACT', 'SERVICES', 'LAUNDRY', 'ABOUT'].map(index => {
                return (
                    <MotionButton
                    variants={buttonVariant}
                    mx={{base:4, md:2}}
                    colorScheme={'white'}
                    bg={'none'}
                    onClick={()=>{navigate(`/${index.toLowerCase()}`); setFirstCount(n=>n+1)}}//setIsSignIn(!isSignIn)}
                    >{`${index}`}</MotionButton>
                )
            })}
            </Flex>
            <Flex
            justifyContent={'space-evenly'}
            alignItems={'center'}>
            <MotionButton 
            variants={buttonVariant}
            onClick={handleOpenSignInModal} 
            colorScheme="whiteAlpha" 
            mr="4">LogIn</MotionButton>

            <MotionButton 
            onClick={LogOut}
            variants={buttonVariant}
            colorScheme="whiteAlpha">LogOut</MotionButton>
            </Flex>
            
        </MotionFlex>}
    </Box>
    <SignUpModal isOpen={isOpen} onClose={handleCloseModal} 
    handleIsSignUp={setIsSignUp} handleMsg={handlemessage} signUpCredentials={signUpCredentials}
    setSignUpCredentials={setSignUpCredentials} configureExpiry={handleExpiry}/>
    <SignInModal timerId={timerId} handleloginMsg={setStatusMsg} loginMsg={msg} 
    signInCredentials={signInCredentials} setSignInCredentials={setSignInCredentials}
    isOpen={isOpenSignIn} onClose={handleCloseSignInModal} configureTimerExpiry={handleExpiry}
    handleIsSignIn={setIsSignIn} handleMsgSignIn={handlemessage}/>
    </Flex>
  );
};

export default LandingHeader;
