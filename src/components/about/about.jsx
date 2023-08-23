import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'

import './about.css'
import AboutImg from '../../assets/me.jpg'
import CV from '../../assets/aecy.pdf'
import {
  UilAward,
  UilBriefcase,
  UilBriefcaseAlt,
  UilDownloadAlt,
  UilHeadphones,
  UilHeadphonesAlt
} from "@iconscout/react-unicons";
import Section from "../../helpers/section";
import {abouts} from "../../lib/data.jsx";

export default function About () {

  const fadeInAnimationVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 * index
      }
    })
  }

  return (
    <section className="about section" id="about">

      <Section title="A propos de moi" />

      <div className="about__container container grid">
        <motion.img
          src={AboutImg}
          alt=""
          className="about__img"
        />

        <div className="about__data">
          <div className="about__info grid">
            {abouts.map(({index, title, subtitle, icon}) => {
              return (
                <motion.div
                  variants={fadeInAnimationVariants}
                  custom={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{once: true}}
                  key={index}
                  className="about__box"
                >
                  {icon}
                  <h3 className="about__title">
                    {title}
                  </h3>
                  <span className="about__subtitle">
                    {subtitle}
                  </span>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{delay: 0.4}}
            viewport={{once: true}}
          >
            <p className="about__description">
              En tant que développeur full-stack spécialisé backend en PHP,
              j'ai constamment été fasciné par la création de systèmes robustes et performants
              qui alimentent les applications web modernes. <br/><br/>
              Mon parcours professionnel m'a permis de développer des compétences solides
              dans la conception, le développement et la maintenance de solutions backend
              innovantes en utilisant les frameworks Laravel et Symfony ou même Slim pour
              de micro-structure.
            </p>

            <a download="" href={CV} className="button button--flex">
              Télécharger mon CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
