import React from "react";
import {motion} from "framer-motion";

export default function SkillItem ({id, name}) {

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      }
    })
  }

  return (
    <motion.li
      key={id}
      custom={id}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      whileHover={{scale: 1.05}}
      viewport={{once: true}}
      className="skill__content"
    >
      {name}
    </motion.li>
  )
}