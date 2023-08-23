import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'

import './about.css'
import AboutImg from '../../assets/me.jpg'
import CV from '../../assets/aecy.pdf'
import {UilDownloadAlt} from "@iconscout/react-unicons";
import Section from "../../helpers/section";

export default function About () {

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -10
    },
    animate: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <section className="about section" id="about">

      <Section title="A propos de moi" subtitle="Introduction" />

      <div className="about__container container grid">
        <motion.img
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          src={AboutImg}
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <div className="about__info grid">
            <div className="about__box">
              <i className="bx bx-award about__icon"></i>
              <h3 className="about__title">Expérience</h3>
              <span className="about__subtitle">8 années</span>
            </div>
            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon"></i>
              <h3 className="about__title">Projets</h3>
              <span className="about__subtitle">+30 terminés</span>
            </div>
            <div className="about__box">
              <i className="bx bx-support about__icon"></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">En ligne 24/7</span>
            </div>
          </div>

          <p className="about__description">
            Écrire ici une description de malade mentale !
          </p>

          <a download="" href={CV} className="button button--flex">
            Télécharger mon CV
            <UilDownloadAlt className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
