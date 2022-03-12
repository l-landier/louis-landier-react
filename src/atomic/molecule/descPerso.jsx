// @flow
import React from "react";

import { Container, Title, Picture } from "atomic";
import profilPhoto from "images/profil-photo.png";
import profilPhotoM from "images/profil-photo-m.png";

export const DescPerso = () => {
  const today = new Date();
  const currentDate = today.getFullYear();
  const myDate = currentDate - "1990";
  return (
    <section className="padding-top-xl padding-bottom-xl">
      <Container classType="container">
        <Title tagType="h3" classType="h3">
          Qui suis-je ?
        </Title>
        <div className="display-flex-tablet-desktop justify-space-between center-align">
          <div className="col-xs-12 col-sm-3 display-flex-mobile justify-center">
            <Picture
              imgClass="responsive-img"
              imgAlt="photo de profil louis landier"
              imgDesktop={profilPhoto}
              imgMobile={profilPhotoM}
              imgTablet={profilPhoto}
              imgWidth=""
            />
          </div>
          <div className="col-xs-12 col-sm-8">
            <p className="margin-bottom-xs">
              Je m’appelle Louis, j’ai {myDate} ans, j’ai fait des études en
              gestion au lycée, où j’ai acquis des notions d’intégration, via
              des cours d’HTML, ce qui m’a convaincu de me diriger vers cette
              filière. J’ai par la suite étudié l’info-graphie pendant un an,
              puis j’ai effectué une formation de 2 ans en tant qu’intégrateur
              web, suivie d’une spécialisation d’un an en web-design, en
              alternance dans une start-up spécialisée dans la création de
              web-app.
            </p>
            <p>
              Ensuite, j’ai exercé dans plusieurs postes les responsabilités de
              webdesigner et d’intégrateur, ce qui m’a ainsi permis d’alterner
              la maquette et leur intégration. Après avoir acquis une solide
              expérience qui a fait ses preuves, j’ai choisi de me consacrer
              uniquement à l’intégration et à la mise en place des best
              practices pour améliorer les performances et les interfaces dont
              j’ai la responsabilité.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
