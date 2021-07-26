// @flow
import React from 'react';

import { Button, Container, Title } from 'atomic';

export const NoMatch = () => {
  return (
    <>
      <Container classType="container" className="display-flex justify-space-between flex-wrap center-align padding-top-xs padding-bottom-xs position-relative navbar-container-fix">
        <Title classType="mega" tagType="h1">404</Title>
      </Container>
    </>
  );
};
