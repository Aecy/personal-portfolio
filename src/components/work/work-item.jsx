import React, {useState} from "react";
import {motion} from "framer-motion";

import {UilArrow, UilArrowsH, UilCodeBranch, UilExternalLinkAlt, UilGithub, UilTimes} from "@iconscout/react-unicons";

export default function WorkItem ({item, index}) {
  const [workModal, setWorkModal] = useState(0);

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
    <React.Fragment>
      <figure className="work__content">
        <motion.img
          variants={fadeInAnimationVariants}
          custom={index}
          key={index}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          src={item.image}
          alt={`${item.title}'s image project`}
          className="work__img"
        />
        <button
          onClick={() => setWorkModal(item.id)}
          className="work__detail-button"
        >
          Voir en détail
        </button>
      </figure>

      <div className={workModal === item.id ? 'work__modal active-modal' : 'work__modal'}>
        <div className="work__modal-content">
          <UilTimes className="work__modal-close" onClick={() => setWorkModal(0)} />
          <div className="work__modal-image">
            <img src={item.image} alt={`item ${item.title} image modal`} />
          </div>
          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">
            {item.description}
          </p>
          <div className="work__modal-technologies">
            <h4>Technologies :</h4>
            <ul className="work__modal-technologies-list">
              {item.technologies.map((technology, index) => {
                return (
                  <li className="work__modal-technologies-item" key={index}>
                    {technology}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="work__modal-buttons">
            {item.liveSite !== '' && (
              <a href={item.liveSite} target="_blank" className="button button--flex button__icon work__modal-button_live">
                Voir le site
                <UilExternalLinkAlt size="16" />
              </a>
            )}
            {item.github !== '' && (
              <a href={item.liveSite} target="_blank" className="button button--flex button__icon work__modal-button_live">
                Voir le code source
                <UilCodeBranch size="16" />
              </a>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
