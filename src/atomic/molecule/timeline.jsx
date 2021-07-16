// @flow
import React from 'react';

import { Container, Title } from 'atomic';

const timelineContent = [
  {
    titre: "Formation graphiste MJM",
    bold: "Septembre 2009 - Septembre 2010: ",
    desc: "Formation d’Info-graphiste chez MJM. Réalisation d’un magazine fictif, et d'autres réalisations print divers. J'ai étudié 1 an chez MJM graphique, en tant qu'Info-graphiste pour me former au base du design, et maitriser les logiciels de PAO, tel que Photoshop, Illustrator, InDesign, Flash. Cependant j'ai très vite compris que, même si le design me plaisait, le web m'attirait encore plus. De fait, j'ai décidé de quitter MJM pour suivre une formation plus approfondie chez Cifacom.",
  },
  {
    titre: "Formation intégrateur et web designer Cifacom",
    bold: "Janvier 2012 - Septembre 2013: ",
    desc: "Formation d’intégrateur en alternance chez myElefant spécialisation web-design, réalisation d’application web et responsive comme Actes Sud/Actes Noir, Téléshopping, Seuil, et site evenementiel pour warner (Tal, Kerredine, Moongaï). Une fois à cifacom, j'ai suivi une formation de deux ans en tant qu'intégrateur Web, avec une préférence pour le design. Dans ce cadre, j'ai appris à maitriser le HTML, le CSS, et les rudiments du javascript, tout en continuant à développer mes compétences de graphiste, mais cette fois axées sur le web design, grâce à des cours de design de PAO, de responsive ou de mobile, pour maîtriser un maximum d'environnement. Ma première année s'est déroulée en initiale, et c'est terminée par un stage de 3 mois, j'ai effectué dans une petite agence web de 6 personnes, Sofracs. Ce fut un stage court, mais très instructif sur les processus d'une petite entreprise. Ensuite la deuxième année s'est déroulée en alternance, dans une start-up, myElefant, trés orientée mobile, web app, responsive, dans laquelle j'ai passé 2 ans.",
  },
  {
    titre: "Intégrateur web & Web designer Melijoe",
    bold: "Aout 2014 - Avril 2017: ",
    desc: "Web designer et intégrateur Web, chez Melijoe, réalisation de maquette web, intégration en responsive et emailing. Après mes études, j'ai eu la chance de trouver un CDI dans l'entreprise Bebeo, en tant que Web Designer / Intégrateur Web, pour m'occuper du site e-commerce Melijoe, spécialisé dans la mode enfant. J'ai procédé à des envoies de newsletter et à l'intégration de maquette pour le site.",
  },
  {
    titre: "Intégrateur web Boursorama",
    bold: "Avril 2017 - Décembre 2017: ",
    desc: "Consultant pour Ingima chez Boursorama, en tant qu’intégrateur web. J'ai réalisé l'intégration de plusieurs pages sur leurs différents portails, le portail bourse et la banque. J'ai découvert chez eux le concept d'atomic design.",
  },
  {
    titre: "Intégrateur web & web designer IZI-by-EDF",
    bold: "Janvier 2018 - Janvier 2019: ",
    desc: "Intégrateur Web et web designer chez IZI-by-EDF. J'ai rejoint le groupe IZI-by-EDF, qui à cette époque s'appelait hellocasa, elle n'avait pas encore rejoint le groupe EDF. J'ai été engagé en tant que designer et intégrateur, mes premières tâches alternaient entre les deux disciplines selon les besoins. Il n'y avait aucun 'vrai' intégrateur dans le sens où personne n'avait reçu de formation spécifique d'intégration, à part moi.",
  },
  {
    titre: "Référent intégration IZI-by-EDF",
    bold: "Janvier 2019 - Janvier 2020: ",
    desc: "Intégrateur Web chez IZI-by-EDF, et référant atomic design. Lorsque le groupe a été racheté, la refonte de la charte et des interfaces du site a demandé la mise en place d'un processus d'intégration plus robuste. Étant donné que la dette technique coté intégration était conséquente, j'ai donc pris la responsabilité de superviser la refonte coté intégration avec la mise en place d'une nouvelle infrastructure appelé 7-1 pattern. Je suis donc devenue référent sur la partie intégration.",
  },
  {
    titre: "Lead intégrateur IZI-BY-EDF",
    bold: "Janvier 2020 - Aujourd'hui: ",
    desc: "Lead intégrateur chez IZI-by-EDF. Après avoir mené à bien la refonte de toutes les interfaces lors de la transition d'hellocasa vers IZI-by-EDF, j'ai été nommé lead intégrateur, avec différentes responsabilités: - la suppression de la dette technique - mise en place des best practices en intégration et atomic design, autant en css qu'en react - la migration du less vers le sass, passage d'assetic vers webpack - la supression de la dette jquery - l'amélioration des performances en général - suppersvision du développement des features avec la responsabilité de deux intégrateurs sous ma direction",
  }
]

export const Timeline = () => {
  return (
    <section className="padding-top-xl padding-bottom-xl" id="monExperience">
      <Container classType="container">
        <Title classType="h3" tagType="h3" className="margin-bottom-l">
          Mon expérience
        </Title>
        <div className="col-xs-12 col-sm-10 margin-auto">
          <ul>
          {timelineContent.map(({ titre, bold, desc }) => (
            <li className="timeline" key={titre}>
              <Title classType="h3" tagType="h3" className="margin-bottom-sm dark-red">
                {titre}
              </Title>
              <p>
                <span className="text-bold">
                  {bold}
                </span>
                {desc}
              </p>
            </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
