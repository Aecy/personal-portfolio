import React from 'react'
import './App.css'

import Header from './components/header/header.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Service from './components/Service/Service'
import Qualification from './components/Qualification/Qualification'
import Work from './components/Work/Work'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
        <Qualification />
        <Work />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
