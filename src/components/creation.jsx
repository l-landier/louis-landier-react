// @flow
import React, { useState, useEffect } from 'react';

import { FormEmail, Header, HeaderHome, DescPerso, ThreeColonmBlock, Timeline, ListPastille, ProInfo, Container, Title, ToggleModeInput } from 'atomic';

import {titleListHome, listSkillsHome, colonmItemHome, titleBlockHome} from "src/content/content";

export const Creation = () => {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    localStorage.setItem('dark-mode-enable', dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <div className={`white-bg ${dark ? 'dark-mode-enable' : 'light-mode-enable'}`}>
      <Header headerBig={true}>
        <ToggleModeInput toggleMode={toggleTheme} dark={dark} />
      </Header>
      <HeaderHome />
      <DescPerso />
      <ThreeColonmBlock colonmItem={colonmItemHome} titleBlock={titleBlockHome} />
      <FormEmail />
      <ProInfo />
    </div>
  );
};
