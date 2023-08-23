import React from "react";
import {motion} from "framer-motion";

import {UilArrowRight} from "@iconscout/react-unicons";

export default function WorkItem ({item, index}) {

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * index
      }
    })
  }

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      custom={index}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
      className="work__card"
      key={index}
    >
      <motion.img
        whileHover={{scale: 1.02, rotate: '-4deg'}}
        src={item.image}
        alt={`${item.title}'s image project`}
        className="work__img"
      />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.album} className="work__button" target="_blank">
        Voir le site <UilArrowRight size="1rem" className="work__button-icon" />
      </a>
    </motion.div>
  )
}
