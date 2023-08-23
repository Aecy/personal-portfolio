import React from "react"
import {motion} from "framer-motion"

import "./home.css";
import Scroll from "./scroll.jsx";
import {socials} from "../../lib/data.jsx";
import {UilAward, UilMessage} from "@iconscout/react-unicons";

export default function Home () {

  const fadeInAnimationVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * index
      }
    })
  }

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">

        <div className="home__bg1"></div>
        <div className="home__bg2"></div>

        <div className="home__content grid">
          <div className="home__social">
            {socials.map(({index, hash, icon}) => {
              return (
                <motion.a
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  href={hash}
                  className="home__social-icon"
                  target="_blank"
                >
                  {icon}
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 1.3}}
            className="home__img"
          >
          </motion.div>

          <div className="home__data">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="home__title"
            >
              Mavrick
            </motion.h1>
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="home__subtitle"
            >
              Développeur Web
            </motion.h3>

            <motion.div
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 0.5, duration: 0.5}}
            >
              <p className="home__description">
                Je suis développeur full-stack avec 8 ans d'expérience.
                J'aime créer et inover. <br/><br/>
                Focus <u>PHP</u> (<a href="#">Laravel</a>, <a href="#">Symfony</a> & <a href="#">Slim</a>).
              </p>

              <a href="#contact" className="button button--flex">
                Contactez-moi
                <UilMessage style={{marginLeft: '1rem', rotate: "-50deg"}} className="button__icon" />
              </a>
            </motion.div>

          </div>
        </div>

        <Scroll />
      </div>
    </section>
  )
}
