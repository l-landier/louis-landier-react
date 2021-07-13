// @flow
import React, { useContext } from 'react';

import { Button, Container, Title } from 'atomic';

export const Header = () => {
  const { history } = useContext(PortalContext);
  return (
    <div className="grey-bg min-full-height">
      <Header />
      <Container
        className="flex justify-space-between end-align padding-top-md padding-bottom-md"
        classType="containerWide"
      >
        <div>
          <Title className="margin-bottom-sm" classType="h1">
            Accueil
          </Title>
          <p>Créer et gérer les différentes demandes</p>
        </div>
        <div>
          <Button classType="primary" onClick={() => history.push('/new-application')}>
            <i className="fas fa-plus margin-right-xs" />
            Nouvelle demande
          </Button>
        </div>
      </Container>
      <Container className="padding-bottom-xl" classType="containerWide">
        <div className="flex-tablet-desktop row">
          <SidebarContainer />
          <div className="col-xs-12 col-sm-9 float-none">
            <TableContainer />
          </div>
        </div>
        <ModalContainer />
      </Container>
    </div>
  );
};
