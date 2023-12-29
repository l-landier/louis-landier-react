// @flow
import React from 'react';
import type { StatelessFunctionalComponent } from "react";

import { Picture } from 'atomic';
import sun from 'images/sun.svg';
import moon from 'images/moon.svg';

type Props = {
  children: () => Node
};

export const ToggleDarkMode: StatelessFunctionalComponent<Props> = ({
    children,
    ...props
  }: Props) => {

    return (
        <div className="display-flex justify-space-between align-center toggle-dark-mode align-self-start-m" {...props}>
            <Picture
                className="responsive-img display-flex svg-invert"
                imgAlt="logo louis landier"
                imgDesktop={sun}
                imgMobile={sun}
                imgTablet={sun}
                imgWidth="20"
            />
            {children}
            <Picture
                className="responsive-img display-flex svg-invert"
                imgAlt="logo louis landier"
                imgDesktop={moon}
                imgMobile={moon}
                imgTablet={moon}
                imgWidth="20"
            />
        </div>
    );
}

ToggleDarkMode.defaultProps = {
    children: "",
};
  