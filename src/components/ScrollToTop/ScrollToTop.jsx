import React from 'react'

import './scrollToTop.css'
import {UilArrowUp} from "@iconscout/react-unicons";

export default function ScrollToTop () {

  window.addEventListener('scroll', (event) => {
    const scrollUp = document.querySelector('.scrollup')
    if (window.scrollY >= 560) scrollUp.classList.add('show-scrollup');
    else scrollUp.classList.remove('show-scrollup');
  })

  return (
    <a href="#" className="scrollup">
      <UilArrowUp className="scrollup__icon" />
    </a>
  )
}
