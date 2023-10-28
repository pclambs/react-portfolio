import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/'
import Footer from './components/Footer/'
import AboutMe from './pages/About/'
import Work from './pages/Work/'
import Contact from './pages/Contact/'
import Resume from './pages/Resume/'
import Scrollbar from './components/ScrollBar/'

function App() {

  return (
    <Router>
      <Scrollbar>
        <Header />
        <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Scrollbar>
    </Router>
  )
}

export default App
