import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import App from '../App';
import About from '../Pages/About';
import HomePage from '../Pages/Home'
import LandingHeader from '../Components/LandingHeader';
import axios from 'axios';
import ServicesPage from '../Pages/Services';
import LandingPage from '../Components/LandingPage';
import TypewriterText from '../Components/TypewriterComponent';
import ContactPage from '../Pages/Contact';
import LaundryPage from '../Pages/Laundry';

var timerId;

function PageRoutes() {
    const location = useLocation()
    const [sessionMsg, setSessionMsg] = useState('')
    const [showSignUp, setShowSignUp] = useState(true)
    const [showSignIn, setShowSignIn] = useState(true)
    const [expiry, setExpiry] = useState(null)
    const [timerexpiry, setTimerExpiry] = useState(null)

    useEffect(() => {
        const getLoadingCredentials = async() => {
    
          try {
            const response = await(axios.get('http://localhost:9000/register', {withCredentials: true}))
            console.log(response.data)
            
            setSessionMsg(m=>m=response.data.sessionMsg)
            //setShowSignUp(response.data.showSignUp)
            //expiry = response.data.expiryVal
        }
        catch(err) {
            console.error(err)
        }
        finally{
          
          //clearTimeout(timerexpiry)
          
        }
        }
    
        getLoadingCredentials()
        setTimerExpiry(expiry)
    
        return() => {
          //clearTimeout(expiry)
          //setExpiry(null)
        }
        
      }, [sessionMsg])

      const data = {message: sessionMsg}

  return (
        <AnimatePresence>
          <LandingHeader timerId={timerexpiry} showSignUp={showSignUp} showSignIn={showSignIn} 
           handlemessage={setSessionMsg} handleExpiry={setExpiry} />

          <Routes location={location} key={location.pathname}>
            <Route path="/" Component={(props) => <App {...props} data={data} />}/>
            <Route path="/home" Component={HomePage} /> 
            <Route path="/about" Component={About} />
            <Route path="/services" Component={ServicesPage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/laundry" Component={LaundryPage} />
            {/* <Route component={NotFound} /> */}
          </Routes>

        </AnimatePresence>  
  )
}

export default PageRoutes