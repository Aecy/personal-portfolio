import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <h1 className="footer__title">Mavrick</h1>
        
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              A propos
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Expériences
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="#" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; MAV "Aecy". All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer