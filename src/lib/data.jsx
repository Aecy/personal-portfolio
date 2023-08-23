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
    title: 'Expérience',
    subtitle: '8 années',
    icon: React.createElement(UilAward, {className: 'about__icon'})
  },
  {
    index: 2,
    title: 'Projets',
    subtitle: '+14 terminés',
    icon: React.createElement(UilBriefcaseAlt, {className: 'about__icon'})
  },
  {
    index: 3,
    title: 'Support',
    subtitle: 'En ligne 24/7',
    icon: React.createElement(UilHeadphones, {className: 'about__icon'})
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    level: 'Expert'
  },
  {
    id: 2,
    name: 'CSS',
    level: 'Intermédiaire'
  },
  {
    id: 3,
    name: 'JavaScript',
    level: 'Intermédiaire'
  },
  {
    id: 4,
    name: 'TypeScript',
    level: 'Intermédiaire'
  },
  {
    id: 5,
    name: 'React',
    level: 'Intermédiaire'
  },
  {
    id: 6,
    name: 'VueJS',
    level: 'Intermédiaire'
  },
  {
    id: 7,
    name: 'NextJS',
    level: 'Intermédiaire'
  },
  {
    id: 8,
    name: 'Node.js',
    level: 'Intermédiaire'
  },
  {
    id: 9,
    name: 'PHP',
    level: 'Intermédiaire'
  },
  {
    id: 10,
    name: 'Git',
    level: 'Intermédiaire'
  },
  {
    id: 11,
    name: 'Tailwindcss',
    level: 'Intermédiaire'
  },
  {
    id: 12,
    name: 'Bootstrap',
    level: 'Intermédiaire'
  },
  {
    id: 13,
    name: 'Figma',
    level: 'Intermédiaire'
  },
  {
    id: 14,
    name: 'MongoDB',
    level: 'Intermédiaire'
  },
  {
    id: 15,
    name: 'MySQL',
    level: 'Intermédiaire'
  },
  {
    id: 16,
    name: 'Express',
    level: 'Intermédiaire'
  },
  {
    id: 17,
    name: 'Framer Motion',
    level: 'Intermédiaire'
  },
  {
    id: 18,
    name: 'Laravel',
    level: 'Intermédiaire'
  },
  {
    id: 19,
    name: 'Symfony',
    level: 'Intermédiaire'
  },
  {
    id: 20,
    name: 'Ruby on Rails',
    level: 'Intermédiaire'
  },
];