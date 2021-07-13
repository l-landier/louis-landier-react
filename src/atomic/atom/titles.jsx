// @flow

import React from 'react';
import type { Node, StatelessFunctionalComponent } from 'react';

const titleType = {
  h1: 'h1-title',
  h2: 'h2-title',
  h3: 'h3-title',
  h4: 'h4-title',
  h5: 'h5-title',
  h6: 'h6-title',
  hero: 'hero-title',
  mega: 'mega-title',
};

type TitleType = $Keys<typeof titleType>;

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  children: Node,
  className?: string,
  classType: TitleType,
  tagType: TagType,
};

export const Title: StatelessFunctionalComponent<Props> = ({
  children,
  className,
  classType,
  tagType,
  ...props
}: Props) => {
  let styleClass = classType in titleType ? titleType[classType] : '';
  styleClass = `${styleClass} ${className}`;

  switch (tagType) {
    case 'h1':
      return (
        <h1 className={styleClass} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={styleClass} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={styleClass} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={styleClass} {...props}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={styleClass} {...props}>
          {children}
        </h5>
      );
    default:
      return (
        <h6 className={styleClass} {...props}>
          {children}
        </h6>
      );
  }
};

Title.defaultProps = {
  className: '',
};
