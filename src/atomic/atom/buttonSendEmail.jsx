// @flow
import React from "react";
import type { Node, StatelessFunctionalComponent } from "react";

import { Button } from "atomic";

const buttonType = {
  primary: "primary-button",
  secondary: "secondary-button",
};

export type ButtonType = $Keys<typeof buttonType>;

type Props = {
  onClick?: Function,
  response?: Boolean,
};

export const ButtonSendEmail: StatelessFunctionalComponent<Props> = ({
  response,
  onClick,
  ...props
}: Props) => {
  if (response === 200) {
    return (
      <Button
        type="submit"
        classType="primary"
        className="margin-top-sm submit-form-email"
        disabled={true}
      >
        ButtonSendEmail L'email à été envoyé
      </Button>
    );
  } else {
    return (
      <Button
        type="submit"
        classType="primary"
        className="margin-top-sm submit-form-email"
        disabled={false}
      >
        ButtonSendEmail Envoyer l'email
      </Button>
    );
  }
};

ButtonSendEmail.defaultProps = {
  onClick: () => null,
  response: false,
};
