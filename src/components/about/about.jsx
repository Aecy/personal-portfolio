import React, {useState} from "react";
import {motion} from "framer-motion";
import {UilDownloadAlt} from "@iconscout/react-unicons";

import "./about.css";
import AboutImg from "../../assets/me.jpg";
import CV from "../../assets/aecy.pdf";
import Section from "../../helpers/section";
import {abouts} from "../../lib/data.jsx";

export default function About () {

  const [about, setAbout] = useState(1);

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
                  onClick={() => setAbout(index)}
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
            {about === 1 ? (
              <p className="about__description">
                En tant que développeur full-stack spécialisé backend en PHP,
                j'ai constamment été fasciné par la création de systèmes robustes et performants
                qui alimentent les applications web modernes. <br/><br/>

                Mon parcours professionnel m'a permis de développer des compétences solides
                dans la conception, le développement et la maintenance de solutions backend
                innovantes en utilisant les frameworks Laravel et Symfony ou même Slim pour
                de micro-structure.
              </p>
            ) : about === 2 ? (
              (
                <p className="about__description">
                  En tant que développeur full-stack spécialisé backend en PHP, j'ai pu effectuer plusieurs back-office
                  sur Arma 3 pour des serveurs de jeux.
                  Les données n'étant pas toujours des données classiques se fut plaisant pour pouvoir apprendre de
                  nouvelle façon de travailler sur ce genre d'applications modernes. <br/><br/>

                  Mon parcours jusqu'à maintenant m'a permis de m'améliorer dans pleins de façons différentes comme :
                  l'organisation de code, la planification de graph SQL avant le projet et aussi les tests unitaires et fonctionnels.
                </p>
              )
            ) : (
              (
                <p className="about__description">
                  En tant que développeur full-stack spécialisé backend PHP, j'ai pu terminer des projets qui provenaient de
                  clients ou même des projets personnels. Cela a toujours été un plaisir de travailler pour de nouveaux projets
                  avec de nouvelles technologies. <br/><br/>

                  Mon parcours jusqu'à maintenant m'a permis de m'améliorer et voir où je pouvais être bloqué et sur quel système
                  j'ai des problèmes. Actuellement, en backend je n'ai encore rien croisé qui m'a laissé sur ma chaise.
                  Mais créer des mini-projets m'aident à m'améliorer.
                </p>
              )
            )}

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
