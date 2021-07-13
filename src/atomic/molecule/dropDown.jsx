// @flow
import React from 'react';
import type { Node, StatelessFunctionalComponent } from 'react';

const dropDownType = {
  dropDownBottomLeft: 'dropdown-hover dropdown-hover-element-bottom dropdown-hover-element-left',
  dropDownBottomRight: 'dropdown-hover dropdown-hover-element-bottom dropdown-hover-element-right',
  dropDownTopLeft: 'dropdown-hover dropdown-hover-element-top dropdown-hover-element-left',
  dropDownTopRight: 'dropdown-hover dropdown-hover-element-top dropdown-hover-element-right',
};

export type DropDownType = $Keys<typeof dropDownType>;

type Props = {
  children: Node,
  dropElement: Node,
  className?: string,
  classType?: DropDownType,
};

export const DropDown: StatelessFunctionalComponent<Props> = ({
  children,
  className,
  classType,
  dropElement,
  ...props
}: Props) => {
  let styleClass = classType in dropDownType ? dropDownType[classType] : '';

  if (className && className !== '') {
    styleClass = `${styleClass} ${className}`;
  }

  return (
    <div className="dropdown-hover" {...props}>
      {children}
      <div className={`${styleClass} margin-0`}>{dropElement}</div>
    </div>
  );
};

DropDown.defaultProps = {
  className: '',
  classType: 'dropDownBottomLeft',
};
