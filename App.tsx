import './App.css'
import { BrowserRouter as Router,Routes, } from 'react-router-dom'
import MainView from './Components/MainView'
import SupportedNetworks from './Components/SupportedNetworks'
import Works from './Components/Works'
import AboutUs from './Components/AboutUs'
import BLogs from './Components/BLogs'
import Community from './Components/Community'
import { useEffect } from 'react'
function App() {
  return (
    <>
    <MainView/>
    <SupportedNetworks/>
    <Works/>
    <AboutUs/>
    <BLogs/>
    <Community/>
   <Router>
    <Routes>

    </Routes>
   </Router>
    </>
  )
}

export default App
