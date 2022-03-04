// @flow
import React from 'react';

import { FormEmail, Header, HeaderHome, DescPerso, Footer, ThreeColonmBlock, Timeline, ListPastille, ProInfo } from 'atomic';

import sassSvg from 'images/sass.svg';
import cssSvg from 'images/css3.svg';
import htmlSvg from 'images/html5.svg';
import jsSvg from 'images/javascript.svg';
import githubSvg from 'images/github.svg';
import sketchSvg from 'images/sketch.svg';
import reactSvg from 'images/react.svg';

const titleListHome = "Les outils que j'utilise";

const listSkillsHome = [
  {
    src: sassSvg,
    alt: 'icone sass',
  },
  {
    src: cssSvg,
    alt: 'icone css3',
  },
  {
    src: htmlSvg,
    alt: 'icone html',
  },
  {
    src: jsSvg,
    alt: 'icone javascript',
  },
  {
    src: githubSvg,
    alt: 'icone github',
  },
  {
    src: sketchSvg,
    alt: 'icone sketch',
  },
  {
    src: reactSvg,
    alt: 'icone sketch',
  }
]

import iconInte from 'images/icon-inte.svg';
import iconDesign from 'images/icon-design.svg';
import iconAtomic from 'images/icon-atomic.svg';

const colonmItemHome = [
  {
    img: iconInte,
    title: 'Intégration HTML / CSS',
    desc: "Intégration en continue, avec les outils de github et gitlab, respect des normes W3C et application de responsive et mobile first.",
    alt: 'icone integration',
  },
  {
    img: iconDesign,
    title: 'Design UX',
    desc: 'Ancien designer avec une forte sensibilité pour l\'expérience utilisateur, cela me permet de driver les designer sur n\'importe quel sujet.',
    alt: 'icone design',
  },
  {
    img: iconAtomic,
    title: 'Atomic Design',
    desc: 'Définition et implémentation de l\'atomic design au sein d\'un projet, avec mise en place des best practice d\'intégration et de design.',
    alt: 'icone atomic',
  }
]

const titleBlockHome = "Mes domaines d'expertise";

export const Home = () => {
  return (
    <div className="white-bg">
      <Header />
      <HeaderHome />
      <DescPerso />
      <ThreeColonmBlock colonmItem={colonmItemHome} titleBlock={titleBlockHome} />
      <Timeline />
      <ListPastille listSkills={listSkillsHome} titleList={titleListHome} />
      <FormEmail />
      <ProInfo />
      <Footer />
    </div>
  );
};
