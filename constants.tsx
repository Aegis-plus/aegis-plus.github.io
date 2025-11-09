import React from 'react';
import type { ArtPiece, ProfileData } from './types';

import Gundam from './img/Gundam.png';
import OptimusPrime from './img/OptimusPrime.png';
import SpaceMarine from './img/SpaceMarine.png';
import Duck from './img/Duck.png';
import Fruit from './img/Fruit.png';
import Catto from './img/Catto.gif';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const PROFILE_DATA: ProfileData = {
  name: "Aegis+",
  title: "Casual Gamer • Pixel Artist • Digital Creator",
  bio: "Exploring the intersection of technology and creativity, I craft digital experiences that tell stories and evoke emotion. My work is a journey through surreal landscapes and abstract concepts, rendered with a modern, minimalist aesthetic. Welcome to my corner of the digital universe.",
  avatarUrl: SpaceMarine,
  socials: [
    { name: "GitHub", url: "https://github.com/Aegis-plus/", icon: <GithubIcon /> },
    { name: "Email", url: "mailto:mail@aegis.zone.id", icon: <EmailIcon /> },
    { name: "Steam", url: "https://steamcommunity.com/id/AegisPlus/", icon: <span className="font-semibold text-lg">Steam</span> },
  ],
};

export const ART_GALLERY: ArtPiece[] = [
  {
    id: 1,
    src: Gundam,
    title: "Gundam",
    description: "A detailed model of a Gundam mecha, showcasing precision engineering and iconic design.",
  },
  {
    id: 2,
    src: OptimusPrime,
    title: "Optimus Prime",
    description: "The legendary leader of the Autobots, a symbol of heroism and leadership.",
  },
  {
    id: 3,
    src: SpaceMarine,
    title: "Space Marine",
    description: "A fierce warrior from the Warhammer 40K universe, representing strength and honor.",
  },
  {
    id: 4,
    src: Duck,
    title: "Duck",
    description: "A charming duck figurine, bringing a touch of whimsy and playfulness.",
  },
  {
    id: 5,
    src: Fruit,
    title: "Fruit",
    description: "A delightful fruit arrangement, celebrating color and natural beauty.",
  },
  {
    id: 6,
    src: Catto,
    title: "Catto",
    description: "An adorable animated cat, bringing joy and cuteness to the gallery.",
  },
];
