// @flow
import React from 'react';

import { Container, Link, Title, Input } from 'atomic';
import cvPro from 'images/CV-louis-landier.pdf';

export const ProInfo = () => {
  return (
    <Container classType="sepSection">
      <Container classType="container">
        <Title classType="h3" tagType="h3" className="margin-bottom-l">
          Me contacter
        </Title>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-5 display-flex-tablet-desktop justify-space-between">
            <div>
              <Link href={cvPro} target="_blank" classType="primary" className="margin-bottom-sm">
                Voir mon CV
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/louis-landier-a00b8b28/" target="_blank" classType="secondary" className="margin-bottom-sm">
                Voir mon Profil linkedin
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};
