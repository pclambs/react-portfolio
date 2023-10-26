import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/'
import Footer from './components/Footer/'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import Contact from './pages/Contact/'
import Resume from './pages/Resume'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
