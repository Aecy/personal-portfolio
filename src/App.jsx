import React from 'react'
import './App.css'

import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Skill from './components/skill/skill.jsx'
import Service from './components/service/service.jsx'
import Qualification from './components/qualification/qualification.jsx'
import Work from './components/work/work.jsx'
import Testimonial from './components/testimonial/testimonial.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
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
