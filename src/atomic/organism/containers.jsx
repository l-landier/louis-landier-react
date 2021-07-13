// @flow
import React from 'react';
import type { Node, StatelessFunctionalComponent } from 'react';

const containerType = {
  containerWide: 'container-wide',
  containerShadow: 'white-bg border-r-s shadow-z-2',
  containerNavbar: 'navbar-container white-bg z-ind-16 sticky-element top-0',
};

export type ContainerType = $Keys<typeof containerType>;

type Props = {
  children: Node,
  className?: string,
  classType?: ContainerType,
};

export const Container: StatelessFunctionalComponent<Props> = ({
  children,
  className,
  classType,
  ...props
}: Props) => {
  let styleClass = classType in containerType ? containerType[classType] : '';

  if (className && className !== '') {
    styleClass = `${styleClass} ${className}`;
  }

  return (
    <div className={styleClass} {...props}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: '',
  classType: '',
};
