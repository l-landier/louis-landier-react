// @flow
import React from 'react';

import { Container, Picture, NavBar } from 'atomic';
import logoSmall from 'images/logo-small.svg';

type Props = {
  children: () => Node
};

const FluttedGlass = () => {
  let content= [];
  const column = 40;
  for(let i = 0; i < column; i++) {
    content.push(<div className="header-flutter-glass-big full-height"></div>);
  }
  return content;
}

export const Header: StatelessFunctionalComponent<Props> = ({
  children, headerBig
}: Props) => {

  return (
    <header className="position-sticky top-0 left-0 z-ind-3 header-shadow" id="nav-header">
      <div className="position-relative col-12">
        {headerBig ? (
          <div className="position-absolute top-0 left-0 col-xs-12 full-height display-flex overflow-hidden">
            <FluttedGlass />
          </div>
        ) : (
          <div className="position-absolute top-0 left-0 col-xs-12 full-height display-flex overflow-hidden">
            <div className="header-flutter-glass-1 position-absolute top-0 left-0 col-xs-12 full-height"></div>
            <div className="header-flutter-glass-2 position-absolute top-0 left-0 col-xs-12 full-height"></div>
            <div className="header-flutter-glass-3 position-absolute top-0 left-0 col-xs-12 full-height"></div>
          </div>
        )}
        <Container classType="container" className="display-flex justify-space-between flex-wrap center-align padding-top-xs padding-bottom-xs position-relative navbar-container-fix">
          <Picture
            className="image-responsive display-flex"
            imgAlt="logo louis landier"
            imgDesktop={logoSmall}
            imgMobile={logoSmall}
            imgTablet={logoSmall}
            imgWidth="38"
          />
          <NavBar children={children} />
        </Container>
      </div>
    </header>
  );
};
