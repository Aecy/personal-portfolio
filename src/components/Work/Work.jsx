import React from 'react'

import './Work.css'
import WorkList from './WorkList.jsx'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Mes récents travaux</span>

      <WorkList />
    </section>
  )
}

export default Work