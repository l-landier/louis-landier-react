// @flow
import React from 'react';

import { Button, Container, Title, Input } from 'atomic';

export const FormEmail = () => {
  return (
    <Container classType="sepSection">
      <Container classType="container">
        <Title classType="h3" tagType="h3" className="margin-bottom-l">
          Me contacter
        </Title>
        <form>
          <div className="display-flex flex-wrap row">
            <div className="col-xs-12 col-sm-6 margin-bottom-sm">
              <Input classType="custom" className="col-xs-12" type="text" placeholder="Nom" />
            </div>
            <div className="col-xs-12 col-sm-6 margin-bottom-sm">
              <Input classType="custom" className="col-xs-12" type="text" placeholder="Prénom" />
            </div>
            <div className="col-xs-12 col-sm-12">
              <Input classType="custom" className="col-xs-12" type="textarea" placeholder="Votre message" rows="5" cols="33" />
            </div>
          </div>
          <Button type="submit" classType="primary" className="margin-top-sm">
            Envoyer l'email
          </Button>
        </form>
      </Container>
    </Container>
  );
};
