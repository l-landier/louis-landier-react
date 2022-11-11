// @flow
import React from 'react';

import { Picture } from 'atomic';
import sun from 'images/sun.svg';
import moon from 'images/moon.svg';

export const ToggleDarkMode = () => {
    return (
        <div className="display-flex justify-space-between align-center">
            <Picture
                className="image-responsive display-flex"
                imgAlt="logo louis landier"
                imgDesktop={sun}
                imgMobile={sun}
                imgTablet={sun}
                imgWidth="20"
            />
            <input type="checkbox" className="d-none toggle-custom-checkbox" id="toggle-dark" />
            <label className="toggle-custom margin-left-xs margin-right-xs" htmlFor="toggle-dark"></label>
            {/*
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <label className="toggle-custom margin-left-xs margin-right-xs" htmlFor="toggle-dark" onClick={toggleTheme}></label>
                )}
            </ThemeContext.Consumer>
                */}
            
            <Picture
                className="image-responsive display-flex"
                imgAlt="logo louis landier"
                imgDesktop={moon}
                imgMobile={moon}
                imgTablet={moon}
                imgWidth="20"
            />
        </div>
    );
}
