// @flow
import React from "react";
import type { Node, StatelessFunctionalComponent } from "react";

const buttonType = {
  primary: "primary-button",
  secondary: "secondary-button",
  success: "success-button",
};

export type ButtonType = $Keys<typeof buttonType>;

type Props = {
  children: Node,
  className?: string,
  classType?: ButtonType,
  disabled?: boolean,
  onClick?: Function,
  title?: string,
  type?: "submit" | "button",
};

export const Button: StatelessFunctionalComponent<Props> = ({
  children,
  className,
  classType,
  disabled,
  onClick,
  title,
  type,
  ...props
}: Props) => {
  let styleClass = classType in buttonType ? buttonType[classType] : "";

  if (className && className !== "") {
    styleClass = `${styleClass} ${className}`;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={styleClass}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
      {...props}
    >
      <span className="position-relative z-ind-2">{children}</span>
    </button>
  );
};

Button.defaultProps = {
  className: "",
  classType: "",
  disabled: false,
  onClick: () => null,
  title: "",
  type: "button",
};
