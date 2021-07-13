import React from 'react';

//import { Button, Container, Title } from 'atomic';

export const Home = () => {
  return (
    <div class="white-bg" id="accueil">
      <section class="third-bg">
        <article class="container">
          <div class="row padding-top-md padding-bottom-md display-flex-tablet-desktop center-align">
            <div class="col-xs-12 col-sm-6 col-md-6 display-flex center-align">
              <div class="margin-top-sm margin-bottom-sm">
                <h2 class="h1-text font-slim">Louis Landier</h2>
                <h1 class="mega-title margin-top-sm margin-bottom-sm">Intégrateur web, avec une formation de designer web.</h1>
                <div class="col-xs-12 col-sm-12 col-md-7 padding-0 display-flex justify-space-between">
                  <button class="secondary-button smooth-scroll" data-scroll-to="experience">
                    <span class="position-relative z-ind-2">Mon expérience</span>
                  </button>
                  <button class="primary-button smooth-scroll" data-scroll-to="contact">
                    <span class="position-relative z-ind-2">Me contacter</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="position-relative text-align-center">
                <span class="header-inte position-relative">INTE</span>
                <span class="display-block header-inte-sep">&</span>
                <span class="header-ui position-relative">UI/UX</span>
              </div>
            </div>
          </div>
        </article>
    </section>
    </div>
  );
};
