import React from "react";
import {
  UilAnalytics,
  UilAward, UilBagAlt,
  UilBriefcaseAlt,
  UilEnvelopeStar,
  UilEstate,
  UilFileAlt,
  UilGithubAlt,
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
import Work7 from '../assets/work7.jpg'

import Image1 from '../assets/testimonial1.jpg'
import Image2 from '../assets/testimonial2.jpg'
import Image3 from '../assets/testimonial3.jpg'
import Image4 from '../assets/testimonial4.jpg'
import Image5 from '../assets/testimonial5.jpg'
import Image6 from '../assets/testimonial6.jpg'

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
    name: 'Compétences',
    icon: React.createElement(UilBagAlt, {className: 'nav__icon'}),
    hash: '#skills'
  },
  {
    name: 'Expériences',
    icon: React.createElement(UilAnalytics, {className: 'nav__icon'}),
    hash: '#qualifications'
  },
  {
    name: 'Clients',
    icon: React.createElement(UilEnvelopeStar, {className: 'nav__icon'}),
    hash: '#testimonials'
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
    description: "Altis France représente un serveur de jeu de rôle basé sur Arma 3, utilisant le cadre d'Altis Life développé par AsYetUntilted (Tonic). Cette plateforme a été conçue comme un back-office permettant la gestion des joueurs et de l'ensemble des données du serveur de jeu. Cette gestion peut se faire indépendamment de toute connexion, évitant ainsi les modifications manuelles délicates dans la syntaxe parfois complexe de certaines données SQL.",
    technologies: ['PHP', 'Laravel', 'SASS', 'MySQL'],
    liveSite: 'https://admin.altisfrance.fr', github: '',
    category: 'web'
  },
  {
    id: 2,
    image: Work2,
    title: 'lsstories',
    description: "lsstories était un serveur de jeu de rôle basé sur San Andreas. Ce site avait été créé dans le but de gérer les autorisations pour leur serveur. Ainsi, seuls les joueurs disposant d'un compte et de personnages étaient en mesure de participer pleinement à l'expérience de jeu.",
    technologies: ['PHP', 'Laravel', 'VueJS', 'MySQL'],
    liveSite: '', github: '',
    category: 'web'
  },
  {
    id: 3,
    image: Work3,
    title: 'Betterify',
    description: "Betterify est une version qui selon-moi pourrait arriver sur Spotify. Ce design a été réalisé sur le logiciel Figma.",
    technologies: ['Figma'],
    liveSite: '', github: '',
    category: 'design'
  },
  {
    id: 4,
    image: Work4,
    title: 'Altis4Life',
    description: "Altis4Life était un serveur de jeu axé sur Arma 3, mettant en œuvre le framework Altis Life développé par AsYetUntilted (Tonic). J'ai enrichi l'expérience en introduisant la possibilité pour les joueurs de voter toutes les 3 heures. Chaque vote leur accordait un certain nombre de points, ces derniers pouvant être échangés contre de la monnaie virtuelle en jeu. De plus, le système de récompenses était graduel : accumuler davantage de points devenait plus difficile au fur et à mesure, ce qui ajoutait une dimension stratégique à l'obtention des récompenses.",
    technologies: ['PHP', 'Bootstrap', 'MySQL'],
    liveSite: '', github: '',
    category: 'web'
  },
  {
    id: 5,
    image: Work5,
    title: 'Les chichis de Lilie',
    description: "Ce site n'a pas encore été déployé, mais sa mise en ligne est imminente. J'ai conçu ce site entièrement à partir de zéro, en tenant compte des préférences de ma conjointe. L'objectif est de lui permettre de démarrer une activité qui lui plaît en dehors de son travail.",
    technologies: ['PHP', 'CSS', 'Bootstrap'],
    liveSite: '', github: '',
    category: 'web'
  },
  {
    id: 6,
    image: Work6,
    title: 'teamready',
    description: "teamready constituait une plateforme dédiée à rassembler et unir des équipes évoluant dans une variété de jeux. Son objectif était de faciliter l'organisation de tournois, la formation de groupes de joueurs et même de mettre en place des lobbies interactifs en temps réel. Ces lobbies offraient aux joueurs un espace pour interagir, discuter et bien plus encore. Malheureusement, malgré ses promesses, ce projet n'a pas été concrétisé et le site n'a pas été lancé.",
    technologies: ['PHP', 'Laravel', 'VueJS', 'MySQL'],
    liveSite: '', github: 'https://github.com/Aecy/teamready.net',
    category: 'web'
  },
  {
    id: 7,
    image: Work7,
    title: 'NeoVice',
    description: "NeoVice: L'Ère Électronique vous invite à plonger dans un univers cyberpunk futuriste, où la mégalopole de NéoVice brille de néons et regorge de mystères. Dans ce décor dystopique, vous prendrez des décisions cruciales, naviguerez entre les intrigues des mégacorporations et des factions, et personnaliserez votre personnage avec des modifications cybernétiques uniques. L'économie de la ville est dynamique, influençant vos choix et votre statut social. Que vous souhaitiez devenir un rebelle qui lutte pour la liberté ou un magnat des affaires assoiffé de pouvoir, NeoVice offre une expérience immersive et riche en possibilités.",
    technologies: ['Figma'],
    liveSite: '', github: '',
    category: 'design'
  }
];

export const testimonials = [
  {
    id: 1,
    image: Image1,
    title: 'Nexus',
    description: "Mavrick est un excellent développeur il sait être à l'écoute du client. Il cherche sans cesse la solution la plus optimale pour assurer la performance et fiabilité de sa solution. Le prendre comme développeur vous assure le meilleur rapport qualité prix."
  },
  {
    id: 2,
    image: Image2,
    title: 'Florian',
    description: "Il a été patient et à l'écoute. Il offre l'exactitude de ce qui était recherché par moi et mon équipe. Je recommande fortement !"
  },
  {
    id: 3,
    image: Image3,
    title: 'Soma',
    description: "Offre de belle possibilité d'UX/UI à mes utilisateurs. Un code très propre suivi de CI et de tests fonctionnels et unitaires à gogo. N'hésitez surtout pas."
  },
  {
    id: 4,
    image: Image4,
    title: 'Willyarte',
    description: "Bon travail, très patient, très communicatif et vous pouvez voir qu'il sait très bien ce qu'il fait. Le résultat obtenu par Mavrick était parfaitement ce que je voulais."
  },
  {
    id: 5,
    image: Image5,
    title: 'AltisFrance',
    description: "Je suis entièrement satisfait du travail de Mavrick. Je tiens à exprimer ma gratitude pour son professionnalisme et son dévouement tout au long du processus de développement. Son expertise et son attention aux détails ont dépassé mes attentes et ont abouti à un résultat final exceptionnel."
  },
  {
    id: 6,
    image: Image6,
    title: 'Morko',
    description: "Mavrick est quelqu'un de très attentif sur ce qu'on lui demande et sur son propre travail. Il aime quand le travail est bien fait. J'ai été plus que satisfait de son travail. Il est très à l'écoute."
  }
]