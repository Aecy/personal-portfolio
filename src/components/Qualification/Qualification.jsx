import React, { useState } from 'react'

import './qualification.css'
import Section from "../../helpers/section";

const Qualification = () => {
  const [qualificationState, setQualificationState] = useState(1);

  const qualificationTab = (index) => {
    setQualificationState(index);
  }

  return (
    <section className="qualification section" id="qualifications">

      <Section title="Mes qualifications" />

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expérience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Impulsion Life
                </h3>
                <span className="qualification__subtitle">
                  BE - Développeur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt ms-2"></i>
                  2017 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">The-Programmer</h3>
                <span className="qualification__subtitle">FR - Développeur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt ms-2"></i>
                  2018 - Présent
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ArmaServices</h3>
                <span className="qualification__subtitle">USA - Développeur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt ms-2"></i>
                  2018 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">BytexMarket Place</h3>
                <span className="qualification__subtitle">USA - Développeur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt ms-2"></i>
                  2018 - 2019
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Vision RP</h3>
                <span className="qualification__subtitle">FR - Développeur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt ms-2"></i>
                  2023 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification