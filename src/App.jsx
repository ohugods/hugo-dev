import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Navigation from './components/Navigation'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
