// @flow
import React, { useState, useEffect } from 'react';

import { FormEmail, Header, HeaderHome, DescPerso, ThreeColonmBlock, ProInfo, ToggleModeInput } from 'atomic';

import {colonmItemHome, titleBlockHome} from "src/content/content";

export const Creation = () => {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    localStorage.setItem('dark-mode-enable', dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <div className={`position-relative white-bg ${dark ? 'dark-mode-enable' : 'light-mode-enable'}`}>
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
