import React from 'react'

import './footer.css'
import {links, socials} from "../../lib/data.jsx";

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <h1 className="footer__title">Mavrick</h1>
        
        <ul className="footer__list">
          {links.map(({name, icon, hash}) => {
            return (
              <li key={hash}>
                <a href={hash} className="footer__link">
                  {name}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="footer__social">
          {socials.map(({index, hash, icon}) => {
            return (
              <a key={hash} href={hash} className="footer__social-link" target="_blank">
                {icon}
              </a>
            )
          })}
        </div>

        <span className="footer__copy">
          &#169; Mavrick. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
