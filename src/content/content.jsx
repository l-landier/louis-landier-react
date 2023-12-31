import sassSvg from 'images/sass.svg';
import cssSvg from 'images/css3.svg';
import htmlSvg from 'images/html5.svg';
import jsSvg from 'images/javascript.svg';
import githubSvg from 'images/github.svg';
import sketchSvg from 'images/sketch.svg';
import reactSvg from 'images/react.svg';
import iconInte from 'images/icon-inte.svg';
import iconDesign from 'images/icon-design.svg';
import iconAtomic from 'images/icon-atomic.svg';

const titleListHome = "Les outils que j'utilise";

const listSkillsHome = [
  {
    src: sassSvg,
    alt: 'icone sass',
    text: "sass structure, atomic design, optimisation, gestion de la surcharge"
  },
  {
    src: cssSvg,
    alt: 'icone css3',
    text: "display flex, display grid, caniuse pour la gestion des nouvelles propriétés css"
  },
  {
    src: htmlSvg,
    alt: 'icone html',
    text: "HTML 5, mobile first"
  },
  {
    src: jsSvg,
    alt: 'icone javascript',
    text: "devellopeur front end junior"
  },
  {
    src: githubSvg,
    alt: 'icone github',
    text: "expérimenté sur git, rebase / merge, gestion de conflit"
  },
  {
    src: sketchSvg,
    alt: 'icone sketch',
    text: "ancien designer, bonne maitrise des outils des designer"
  },
  {
    src: reactSvg,
    alt: 'icone sketch',
    text: "construction des composants atomic sur plusieurs projet"
  }
]

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

const listNav = [
  {
    item: 'Accueil',
    link: '#accueil'
  },
  {
    item: 'Expérience',
    link: '#experience'
  },
  {
    item: 'Contact',
    link: '#contact'
  },
]

export { titleListHome, listSkillsHome, colonmItemHome, titleBlockHome, listNav };