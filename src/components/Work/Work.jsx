import React from 'react'

import './work.css'
import WorkList from './work-list.jsx'
import Section from "../../helpers/section";

const Work = () => {
  return (
    <section className="work section" id="portfolio">

      <Section title="Mon portfolio" />
      <WorkList />

    </section>
  )
}

export default Work