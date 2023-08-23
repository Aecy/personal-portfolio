import React from "react";
import {motion} from "framer-motion";

import {UilCalendarAlt} from "@iconscout/react-unicons";

export default function QualificationItem ({item, index}) {

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
      className="qualification__data"
    >
      {(index % 2) === 0 ? (
        <React.Fragment>
          <div className="qualification__item">
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <UilCalendarAlt size="0.8rem" className="ms-2" />
              {item.date}
            </div>
          </div>
          <div>
            <span className="qualification__rounder"></span>
            <div className="qualification__line"></div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div className="qualification__item">
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <UilCalendarAlt size="0.8rem" className="ms-2" />
              {item.date}
            </div>
          </div>
        </React.Fragment>
      )}
    </motion.div>
  )
}