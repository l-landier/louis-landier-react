// @flow
import React from 'react';

import { Button, Container, Link, Title, Picture } from 'atomic';

const listNav = [
  {
    item: 'Accueil',
    link: 'accueil'
  },
  {
    item: 'Expérience',
    link: 'experience'
  },
  {
    item: 'Contact',
    link: 'contact'
  },
]

export const NavBar = () => {

  return (
    <>
      <input className="navbar-menu-check" type="checkbox" id="navbar-menu-check" />
      <label className="padding-xs full-height" htmlFor="navbar-menu-check">
        <span className="navbar-menu-icon" />
        <span className="navbar-menu-icon" />
        <span className="navbar-menu-icon" />
      </label>
      <nav className="display-flex center-align full-width-m navbar">
        <ul className="display-flex-tablet-desktop justify-space-between col-xs-12 navbar-menu white-bg">
          {listNav.map(({ item, link }) => (
            <li key={item}>
              <Link className="dark-text padding-xs padding-left-sm padding-right-sm link margin-top-sm margin-bottom-sm" href={`#${link}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
