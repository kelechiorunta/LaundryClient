// import logo from './logo.svg';
import './App.css';
import LandingHeader from './Components/LandingHeader';
import LandingPage from './Components/LandingPage';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import { ContextComponent } from './Components/ContextComponent';
import MyContextProvider from './Components/ContextProvider';
import { motion } from 'framer-motion'

//var timerexpiry;//, expiry;
var expiryValue, userman = {};

function App({data}) {

  const [sessionMsg, setSessionMsg] = useState('')
  const [showSignUp, setShowSignUp] = useState(true)
  const [showSignIn, setShowSignIn] = useState(true)
  const [expiry, setExpiry] = useState(null)
  const [timerexpiry, setTimerExpiry] = useState(null)
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  var timerId;

  // useEffect(() => {
  //   const getLoadingCredentials = async() => {

  //     try {
  //       const response = await(axios.get('http://localhost:9000/register', {withCredentials: true}))
  //       console.log(response.data)
        
  //       setSessionMsg(response.data.sessionMsg)
  //       //setShowSignUp(response.data.showSignUp)
  //       //expiry = response.data.expiryVal
  //   }
  //   catch(err) {
  //       console.error(err)
  //   }
  //   finally{
      
  //     //clearTimeout(timerexpiry)
      
  //   }
  //   }

  //   getLoadingCredentials()
  //   setTimerExpiry(expiry)

  //   return() => {
  //     //clearTimeout(expiry)
  //     //setExpiry(null)
  //   }
    
  // }, [sessionMsg, data.message])
  


  return (
    <motion.div 
    className="App"
    initial={{x:0,width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, opacity:0, transition:{duration:0.1}}}>
      <MyContextProvider>
        <LandingPage message={data.message} />
      </MyContextProvider>
    </motion.div>
  );
}

export default App;




      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>