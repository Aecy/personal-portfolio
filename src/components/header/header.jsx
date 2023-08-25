import React, {useEffect, useRef, useState} from 'react'
import './header.css'

import {motion} from "framer-motion";
import {links} from "../../lib/data.jsx";
import {UilApps, UilTimes} from "@iconscout/react-unicons";

export default function Header () {
  const headerRef = useRef(null);

  useEffect(() => {
    function stickyHeaderHandler () {
        if (window.scrollY >= 80) {
          headerRef.current.classList.add('scroll-header');
        } else {
          headerRef.current.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', stickyHeaderHandler);

    return () => {
      window.removeEventListener('scroll', stickyHeaderHandler);
    }
  }, []);

  const [menu, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header ref={headerRef} className="header">
      <motion.nav
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="nav container"
      >
        <a href="index.html" className="nav__logo">
          Mavrick Thiry
        </a>

        <div className={menu ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            {links.map(({name, hash, icon}) => {
              return (
                <li
                  key={hash}
                  className="nav__item"
                >
                  <a
                    href={hash}
                    onClick={() => setActiveNav(hash)}
                    className={activeNav === hash ? 'nav__link active-link' : 'nav__link'}
                  >
                    {icon}
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>

          <UilTimes className="nav__close" onClick={() => showMenu(!menu)} />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!menu)}>
          <UilApps />
        </div>
      </motion.nav>
    </header>
  )
}