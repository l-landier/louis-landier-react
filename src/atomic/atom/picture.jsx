// @flow
import React from "react";
import type { StatelessFunctionalComponent } from "react";

type Props = {
  className?: string,
  imgDesktop?: string,
  imgTablet?: string,
  imgMobile?: string,
  imgClass?: string,
  imgWidth?: string,
  imgAlt?: string,
};

export const Picture: StatelessFunctionalComponent<Props> = ({
  className,
  imgAlt,
  imgClass,
  imgDesktop,
  imgMobile,
  imgTablet,
  imgWidth,
  ...props
}: Props) => (
  <picture className={className} {...props}>
    <source media="(min-width: 1200px)" srcSet={imgDesktop} />
    <source media="(min-width: 768px)" srcSet={imgTablet} />
    <img
      alt={imgAlt}
      className={imgClass}
      src={imgMobile}
      width={imgWidth}
      loading="lazy"
    />
  </picture>
);

Picture.defaultProps = {
  className: "",
  imgDesktop: "",
  imgTablet: "",
  imgMobile: "",
  imgClass: "",
  imgWidth: "",
  imgAlt: "",
};
