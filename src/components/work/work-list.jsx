import React, {useEffect, useState} from 'react'

import { ProjectsData, ProjectsNav } from '../../data/WorkData.jsx'
import WorkItem from './work-item.jsx';

const WorkList = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()})
    setActive(index)
  }

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(ProjectsData)
    } else {
      const projects = ProjectsData.filter((projects) => projects.category.toLowerCase() === item.name)
      setProjects(projects)
    }
  }, [item])

  return (
    <React.Fragment>
      <div className="work__filters">
        {ProjectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
            {item.name}
          </span>
          )
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <WorkItem item={item} key={item.id} />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default WorkList
