// @flow
import React, { useState, useEffect } from 'react';

import { FormEmail, Header, HeaderHome, DescPerso, Footer, ThreeColonmBlock, Timeline, ListPastille, ProInfo, ToggleModeInput } from 'atomic';

import {titleListHome, listSkillsHome, colonmItemHome, titleBlockHome} from "src/content/content";

export const Home = () => {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    localStorage.setItem('dark-mode-enable', dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={`white-bg ${dark ? 'dark-mode-enable' : 'light-mode-enable'}`}>
      <Header>
        <ToggleModeInput toggleMode={toggleTheme} dark={dark} />
      </Header>
      <HeaderHome />
      <DescPerso />
      <ThreeColonmBlock colonmItem={colonmItemHome} titleBlock={titleBlockHome} />
      <Timeline />
      <ListPastille listSkills={listSkillsHome} titleList={titleListHome} />
      <FormEmail />
      <ProInfo />
      <Footer />
    </div>
  );
};
