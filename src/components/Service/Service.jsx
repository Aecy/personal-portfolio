import React, { useState } from 'react'

import './service.css'
import Section from "../../helpers/section";
import {UilArrow, UilArrowRight, UilEdit, UilTimes, UilWebGrid, UilWebGridAlt} from "@iconscout/react-unicons";

export default function Service () {
  const [modalState, setModalState] = useState(0);

  const modalTab = (index) => {
    setModalState(index);
  }

  return (
    <section className="service section" id="services">

      <Section title="Mes services" />

      <div className="services__container container grid">
        <div className="service__content">
          <div>
            <UilWebGrid className="service__icon" />
            <h3 className="service__title">
              Site <br/>
              Internet
            </h3>
          </div>

          <span className="service__button" onClick={() => modalTab(1)}>
            Voir plus
            <UilArrowRight className="service__button-icon" />
          </span>

          <div className={modalState === 1 ? 'service__modal active-modal' : 'service__modal'}>
            <div className="service__modal-content">
              <UilTimes className="service__modal-close" onClick={() => modalTab(0)} />
              <h3 className="service__modal-title">Site internet</h3>
              <p className="service__modal-description">
                Création de site internet sur mesure.
              </p>
              <ul className="service__modal-services grid">
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Intégration web</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Site e-commerce complet</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Site vitrine complet</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Site complet avec un back-office</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service__content">
          <div>
            <UilArrow className="service__icon" />
            <h3 className="service__title">
              Script <br/>
              de serveurs
            </h3>
          </div>

          <span className="service__button" onClick={() => modalTab(2)}>
            Voir plus
            <UilArrowRight className="service__button-icon" />
          </span>

          <div className={modalState === 2 ? 'service__modal active-modal' : 'service__modal'}>
            <div className="service__modal-content">
              <UilTimes className="service__modal-close" onClick={() => modalTab(0)} />
              <h3 className="service__modal-title">Script de serveurs de jeux-vidéos</h3>
              <p className="service__modal-description">
                Création de script pour des serveurs de jeux-vidéos sur mesure.
              </p>
              <ul className="service__modal-services grid">
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Minecraft</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Garry's Mod - DarkRP, MilitaryRP & autres</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Arma 3 - Altis Life & milsim</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">GTA 5 - FiveM, RageMP & alt:v</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service__content">
          <div>
            <UilEdit className="service__icon" />
            <h3 className="service__title">
              Designer <br/>
              Visuel
            </h3>
          </div>
          <span className="service__button">
            Voir plus
            <UilArrowRight className="service__button-icon" />
          </span>
          <div className="service__modal">
            <div className="service__modal-content">
              <UilTimes className="service__modal-close" onClick={() => modalTab(0)} />
              <h3 className="service__modal-title"></h3>
              <p className="service__modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vitae?
              </p>
              <ul className="service__modal-service grid">
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Lorem ipsum dolor sit.</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Lorem ipsum dolor sit.</p>
                </li>
                <li className="service__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="service__modal-info">Lorem ipsum dolor sit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
