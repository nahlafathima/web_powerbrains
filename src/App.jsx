import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import We from './pages/We';
import Works from './pages/Works';

import Contact from './pages/Contact';
import Services from './pages/Services'


function App() {
 

  return (
    <>
      <div>
      <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Who_we_are" element={<We/>} />
              <Route path="/Services" element={<Services/>} />
              <Route path="/Works" element={<Works />} />
            
              <Route path="/Contact" element={<Contact />} />
            </Routes>
      </Router>
      </div>
      
    </>
  )
}

export default App
