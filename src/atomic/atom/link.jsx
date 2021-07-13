// @flow
import React from 'react';
import type { Node, StatelessFunctionalComponent } from 'react';

type Props = {
  children: Node,
  className?: string,
  href?: string,
  target: string,
  title?: string,
};

export const Link: StatelessFunctionalComponent<Props> = ({
  children,
  className,
  href,
  target,
  title,
  ...props
}: Props) => (
  <a
    className={className}
    href={href}
    rel={target === '_blank' ? 'noopener' : 'noopener noreferrer'}
    target={target}
    title={title}
    {...props}
  >
    {children}
  </a>
);

Link.defaultProps = {
  className: '',
  href: '',
  target: '_self',
  title: '',
};
