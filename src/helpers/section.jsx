import React from "react";
import {motion} from "framer-motion";

export default function Section ({title}) {

  const fadeInAnimationTitleVariants = {
    initial: {opacity: 0, y: 100},
    whileInView: {opacity: 1, y: 0},
    transition: {duration: 0.4, bounce: 1,}
  }

  const fadeInAnimationSubtitleVariants = {
    initial: {opacity: 0, scale: 0},
    whileInView: {opacity: 0.1, scale: 1},
    transition: {duration: 0.4, bounce: 1}
  }

  return (
    <React.Fragment>

      <motion.h2
        variants={fadeInAnimationTitleVariants}
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        className="section__title"
      >
        {title}
      </motion.h2>

      <motion.span
        variants={fadeInAnimationSubtitleVariants}
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        className="section__subtitle"
      >
        {title}
      </motion.span>

    </React.Fragment>
  )
}