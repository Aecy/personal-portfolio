import React from 'react'
import './App.css'

import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Work from './components/Work/Work'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skill from './components/skill/skill.jsx'
import Service from './components/service/service.jsx'
import Qualification from './components/qualification/qualification.jsx'
import ScrollToTop from './components/scrollToTop/scrollToTop.jsx'

export default function App () {
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
