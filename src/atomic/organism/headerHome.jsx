// @flow
import React from 'react';

import { Button, Container, Title } from 'atomic';

export const HeaderHome = () => {
  return (
    <section className="third-bg">
      <Container classType="container" className="">
        <div className="row padding-top-md padding-bottom-md display-flex-tablet-desktop center-align">
          <div className="col-xs-12 col-sm-6 col-md-6 display-flex center-align">
            <div className="margin-top-sm margin-bottom-sm">
              <p className="h1-text font-slim">Louis Landier</p>
              <Title classType="mega" className="mega-title margin-top-sm margin-bottom-sm" tagType="h1">
                Intégrateur web, avec une formation de designer web.
              </Title>
              <div className="col-xs-12 col-sm-12 col-md-7 padding-0 display-flex justify-space-between">
                <Button classType="secondary">
                  Mon expérience
                </Button>
                <Button classType="primary">
                  Me contacter
                </Button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="position-relative text-align-center">
              <span className="header-inte position-relative">INTE</span>
              <span className="display-block header-inte-sep">&</span>
              <span className="header-ui position-relative">UI/UX</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
