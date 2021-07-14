// @flow
import React from 'react';
import type { Node, StatelessFunctionalComponent } from 'react';

const linkType = {
  primary: 'primary-button',
  secondary: 'secondary-button',
};

export type LinkType = $Keys<typeof linkType>;

type Props = {
  children: Node,
  className?: string,
  classType?: LinkType,
  href?: string,
  target: string,
  title?: string,
};

export const Link: StatelessFunctionalComponent<Props> = ({
  children,
  className,
  classType,
  href,
  target,
  title,
  ...props
}: Props) => {
  let styleClass = classType in linkType ? linkType[classType] : '';

  if (className && className !== '') {
    styleClass = `${styleClass} ${className}`;
  }

  return (
    <a
      className={styleClass}
      href={href}
      rel={target === '_blank' ? 'noopener' : 'noopener noreferrer'}
      target={target}
      title={title}
      {...props}
    >
      <span className="position-relative z-ind-2">
        {children}
      </span>
    </a>
  );
};

Link.defaultProps = {
  className: '',
  href: '',
  target: '_self',
  title: '',
};
