// @flow
import React from 'react';

import { Container, Title, Picture } from 'atomic';
import iconInte from 'images/icon-inte.svg';
import iconDesign from 'images/icon-design.svg';
import iconAtomic from 'images/icon-atomic.svg';

type Props = {
  titleBlock?: string,
  colonmItem?: Array,
};

const colonmItemDefault = [
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

export const ThreeColonmBlock: StatelessFunctionalComponent<Props> = ({
  titleBlock,
  colonmItem,
  ...props
}: Props) => (
  <Container classType="container" className="padding-top-xl padding-bottom-xl">
    <article className="third-bg overflow-hidden border-r-container padding-md">
      <Title classType="h3" tagType="h3" className="margin-bottom-xs">
        {titleBlock}
      </Title>
      <div className="display-flex-tablet-desktop row">
        {colonmItem.map(({ img, title, desc, alt }) => (
          <div className="col-xs-12 col-sm-4 margin-top-md margin-bottom-md">
            <div className="display-flex-mobile justify-center">
              <img src={img} className="responsive-img" alt={alt} height="" loading="lazy" />
            </div>
            <p className="h3-title margin-top-md margin-bottom-xs">
              {title}
            </p>
            <p>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </article>
  </Container>
);

ThreeColonmBlock.defaultProps = {
  titleBlock: 'Mes domaines d\'expertise',
  colonmItem: colonmItemDefault,
};
