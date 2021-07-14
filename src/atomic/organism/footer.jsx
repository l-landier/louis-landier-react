// @flow
import React from 'react';

export const Footer = () => {
  let today = new Date();
  let currentDate = today.getFullYear();
  return (
    <footer>
      <p className="margin-top-md text-align-center padding-xs">
        © {currentDate} LOUIS LANDIER | Tous droits réservés.
      </p>
    </footer>
  );
};
