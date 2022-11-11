// @flow
import React from 'react';

import { Container, Picture, NavBar } from 'atomic';
import logoSmall from 'images/logo-small.svg';

export const Header = (handleClick) => {
  return (
    <header className="white-bg position-sticky top-0 left-0 z-ind-3" id="nav-header">
      <Container classType="container" className="display-flex justify-space-between flex-wrap center-align padding-top-xs padding-bottom-xs position-relative navbar-container-fix">
        <Picture
          className="image-responsive display-flex"
          imgAlt="logo louis landier"
          imgDesktop={logoSmall}
          imgMobile={logoSmall}
          imgTablet={logoSmall}
          imgWidth="38"
        />
        <NavBar />
      </Container>
    </header>
  );
};
