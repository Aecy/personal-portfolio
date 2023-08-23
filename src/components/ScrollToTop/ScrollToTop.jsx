import React from 'react'

import './ScrollToTop.css'

const ScrollToTop = () => {

  window.addEventListener('scroll', (event) => {
    const scrollUp = document.querySelector('.scrollup')
    if (window.scrollY >= 560) scrollUp.classList.add('show-scrollup');
    else scrollUp.classList.remove('show-scrollup');
  })

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollToTop