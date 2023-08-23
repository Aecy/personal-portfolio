import React from "react";
import {motion} from "framer-motion";

export default function Section ({title, subtitle}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.4, bounce: 1}}
    >
      <h2 className="section__title">
        {title}
      </h2>
      <span className="section__subtitle">{subtitle}</span>
    </motion.div>
  )
}