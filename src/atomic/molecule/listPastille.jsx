// @flow
import React from "react";

import { Container, Picture, Title } from "atomic";

type Props = {
  listSkills?: { [key: string]: ?s },
  titleList?: string,
};

export const ListPastille: StatelessFunctionalComponent<Props> = ({
  titleList,
  listSkills,
  ...props
}: Props) => (
  <Container classType="sepSection">
    <Container classType="container">
      <Title classType="h3" tagType="h3" className="margin-bottom-l">
        {titleList}
      </Title>
      <div className="display-flex flex-wrap justify-center">
        {listSkills.map((listElem) => (
          <div
            className="col-xs-5 col-sm-3 display-flex justify-center margin-bottom-xl"
            key={listElem.src}
          >
            <img
              src={listElem.src}
              className="responsive-img"
              alt={listElem.alt}
              width="150"
              height="auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Container>
  </Container>
);

ListPastille.defaultProps = {
  listSkills: "",
  titleList: "",
};
