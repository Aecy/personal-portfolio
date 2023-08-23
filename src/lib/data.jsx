import React from "react";
import {
  UilAward,
  UilBriefcaseAlt,
  UilEstate,
  UilFileAlt,
  UilGithubAlt,
  UilHeadphones,
  UilImage,
  UilInstagram,
  UilMessage,
  UilTwitterAlt,
  UilUser
} from "@iconscout/react-unicons";
import Work1 from '../assets/work1.jpg'
import Work2 from '../assets/work2.jpg'
import Work3 from '../assets/work3.jpg'
import Work4 from '../assets/work4.jpg'
import Work5 from '../assets/work5.jpg'
import Work6 from '../assets/work6.jpg'

export const links = [
  {
    name: 'Accueil',
    icon: React.createElement(UilEstate, {className: 'nav__icon'}),
    hash: '#home'
  },
  {
    name: 'A propos',
    icon: React.createElement(UilUser, {className: 'nav__icon'}),
    hash: '#about'
  },
  {
    name: 'Expériences',
    icon: React.createElement(UilFileAlt, {className: 'nav__icon'}),
    hash: '#skills'
  },
  {
    name: 'Services',
    icon: React.createElement(UilBriefcaseAlt, {className: 'nav__icon'}),
    hash: '#services'
  },
  {
    name: 'Portfolio',
    icon: React.createElement(UilImage, {className: 'nav__icon'}),
    hash: '#portfolio'
  },
  {
    name: 'Contact',
    icon: React.createElement(UilMessage, {className: 'nav__icon'}),
    hash: '#contact'
  }
];

export const socials = [
  {
    index: 1,
    hash: 'https://www.instagram.com/mav_aecy/',
    icon: React.createElement(UilInstagram)
  },
  {
    index: 2,
    hash: 'https://www.twitter.com/aecyMV/',
    icon: React.createElement(UilTwitterAlt)
  },
  {
    index: 3,
    hash: 'https://www.github.com/Aecy/',
    icon: React.createElement(UilGithubAlt)
  },
];

export const abouts = [
  {
    index: 1,
    title: 'Mavrick',
    subtitle: 'Développeur',
    icon: React.createElement(UilUser, {className: 'about__icon'})
  },
  {
    index: 2,
    title: 'Expérience',
    subtitle: '8 années',
    icon: React.createElement(UilAward, {className: 'about__icon'})
  },
  {
    index: 3,
    title: 'Projets',
    subtitle: '+14 terminés',
    icon: React.createElement(UilBriefcaseAlt, {className: 'about__icon'})
  },
];

export const skills = [
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'JavaScript'},
  {name: 'TypeScript'},
  {name: 'React'},
  {name: 'VueJS'},
  {name: 'NextJS'},
  {name: 'Node.js'},
  {name: 'PHP'},
  {name: 'LUA'},
  {name: 'SQF'},
  {name: 'Git'},
  {name: 'TailwindCSS'},
  {name: 'Bootstrap'},
  {name: 'Figma'},
  {name: 'MongoDB'},
  {name: 'MySQL'},
  {name: 'Express'},
  {name: 'Framer Motion'},
  {name: 'Laravel'},
  {name: 'Symfony'},
  {name: 'Ruby on Rails'},
];

export const qualifications = [
  {
    title: 'Impulsion Life',
    subtitle: 'Fondateur, développeur Web & SQF',
    date: 'Janv. 2017 - Févr. 2019'
  },
  {
    title: 'The-Programmer',
    subtitle: 'Concepteur de produit virtuel',
    date: 'Janv. 2018 - Présent'
  },
  {
    title: 'ArmaServices',
    subtitle: 'Concepteur de produit virtuel',
    date: 'Avr. 2020 - Mai 2022'
  },
  {
    title: 'Bytex MarketPlace',
    subtitle: 'Concepteur de produit virtuel',
    date: 'Avr. 2020 - Oct. 2021'
  },
  {
    title: 'Vision RP',
    subtitle: 'Développeur backend LUA',
    date: 'Févr. 2023 - Mars 2023'
  },
];

export const worksNav = [
  {name: 'all'},
  {name: 'web'},
  {name: 'design'}
];

export const worksData = [
  {
    id: 1,
    image: Work1,
    title: 'Altis France',
    album: 'https://imgur.com/a/vIwKCrP',
    category: 'web'
  },
  {
    id: 2,
    image: Work2,
    title: 'lsstories',
    album: 'https://imgur.com/a/PWYBWHz',
    category: 'web'
  },
  {
    id: 3,
    image: Work3,
    title: 'Betterify',
    album: 'https://imgur.com/a/xuUXr2I',
    category: 'design'
  },
  {
    id: 4,
    image: Work4,
    title: 'Altis4Life',
    album: 'https://imgur.com/a/6DSbBkH',
    category: 'web'
  },
  {
    id: 5,
    image: Work5,
    title: 'Les chichis de Lilie',
    album: 'https://imgur.com/a/MEUUqqg',
    category: 'web'
  },
  {
    id: 6,
    image: Work6,
    title: 'teamready',
    album: 'https://imgur.com/a/9vkx0s9',
    category: 'web'
  },
];