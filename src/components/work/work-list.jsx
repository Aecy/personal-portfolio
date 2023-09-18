import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import WorkItem from './work-item.jsx';
import {worksNav, worksData} from "../../lib/data.jsx";

export default function WorkList () {
  const [item, setItem] = useState({ name: 'all' });
  const [nextItems, setNextItems] = useState(6);
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  function handleClick (e, index) {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  }

  function loadMoreProjects () {
    setNextItems(prev => prev + 3);
  }

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(worksData)
    } else {
      const projects = worksData.filter((projects) => projects.category.toLowerCase() === item.name)
      setProjects(projects)
    }
  }, [item]);

  return (
    <React.Fragment>
      <div className="work__filters">
        {worksNav.map((item, index) => {
          return (
            <motion.span
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
            {item.name}
          </motion.span>
          )
        })}
      </div>

      <div className="work__container container grid">
        {projects.sort((a, b) => b.id - a.id)?.slice(0, nextItems).map((item) => {
          return (
            <WorkItem item={item} index={item.id} key={item.id} />
          )
        })}
      </div>

      <div className="work__loader">
        {nextItems < projects.length && worksData.length > 6 && (
          <button
            onClick={loadMoreProjects}
            className="work__loader-button"
          >
            Voir plus...
          </button>
        )}
      </div>
    </React.Fragment>
  )
}
