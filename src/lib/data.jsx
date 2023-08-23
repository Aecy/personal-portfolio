import React from "react";

import {
  UilBriefcaseAlt,
  UilEstate,
  UilFileAlt,
  UilImage,
  UilMessage,
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
    name: 'Portfolio',
    icon: React.createElement(UilImage, {className: 'nav__icon'}),
    hash: '#portfolio'
  },
  {
    name: 'Services',
    icon: React.createElement(UilBriefcaseAlt, {className: 'nav__icon'}),
    hash: '#services'
  },
  {
    name: 'Contact',
    icon: React.createElement(UilMessage, {className: 'nav__icon'}),
    hash: '#contact'
  }
];