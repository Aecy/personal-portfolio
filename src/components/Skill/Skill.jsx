import React from 'react'
import {motion} from "framer-motion"

import "./Skill.css"
import {SkillData} from "../../data/SkillData.jsx"
import Section from "../../helpers/section.jsx";

const Skill = () => {

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      }
    })
  }

  return (
    <section className="skill section" id="skills">

      <Section title="Expérience" subtitle="Mon niveau technique" />

      <ul className="skill__container container grid">
        {SkillData.map(({id, name}) => {
          return (
            <motion.li
              key={id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={id}
              className="skill__content"
            >
              {name}
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skill