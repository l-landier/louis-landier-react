// @flow
import React from 'react';

import { Container, Title, Picture } from 'atomic';

type Props = {
  titleBlock?: string,
  colonmItem?: Array,
};

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
          <div className="col-xs-12 col-sm-4 margin-top-md margin-bottom-md" key={alt}>
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
  titleBlock: 'Titre',
  colonmItem: '',
};
