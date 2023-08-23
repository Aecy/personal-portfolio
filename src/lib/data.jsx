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