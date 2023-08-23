import React from "react";
import {motion} from "framer-motion";

export default function Section ({title}) {
  return (
    <React.Fragment>

      <motion.h2
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.4, bounce: 1}}
        className="section__title"
      >
        {title}
      </motion.h2>

      <motion.span
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 0.1, scale: 1}}
        transition={{duration: 0.4, bounce:1}}
        className="section__subtitle"
      >
        {title}
      </motion.span>

    </React.Fragment>
  )
}