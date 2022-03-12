// @flow
import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

import { Button, Container, Title, Input } from "atomic";

export const FormEmail = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_lastname: "",
    message: "",
    reply_to: "",
  });

  const [disabledButton, setDisabledButton] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_f2kasxn",
      "template_fopbwao",
      toSend,
      "user_UAZLJFhisw9FQ7Kpwn1OQ"
    )
      .then((response) => {
        return setDisabledButton(true);
      })
      .catch((err) => {
        console.log(`Une erreur c'est produite. ${err}`);
        return setDisabledButton(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const ButtonSendEmail = () => {
    return (
      <Button
        type="submit"
        classType="primary"
        className="margin-top-sm submit-form-email"
      >
        Envoyer l'email
      </Button>
    );
  };

  const ButtonDisableSendEmail = () => {
    return (
      <Button
        type="submit"
        classType="success"
        className="margin-top-sm submit-form-email"
        disabled="disabled"
      >
        L'email à été envoyé ✔
      </Button>
    );
  };

  return (
    <Container classType="sepSection" id="contact">
      <Container classType="container">
        <Title classType="h3" tagType="h3" className="margin-bottom-l">
          Me contacter
        </Title>
        <form onSubmit={onSubmit}>
          <div className="display-flex flex-wrap row">
            <div className="col-xs-12 col-sm-6 margin-bottom-sm">
              <span className="error-form hidden-element messages-error block-element margin-bottom-xs">
                Ce champs est obligatoire
              </span>
              <Input
                classType="custom"
                className="col-xs-12"
                type="text"
                name="from_name"
                placeholder="Nom*"
                value={toSend.from_name}
                onChange={handleChange}
                required
                disabled={disabledButton ? "disabled" : ""}
              />
            </div>
            <div className="col-xs-12 col-sm-6 margin-bottom-sm">
              <span className="error-form hidden-element messages-error block-element margin-bottom-xs">
                Ce champs est obligatoire
              </span>
              <Input
                classType="custom"
                className="col-xs-12"
                type="firstname"
                name="from_lastname"
                placeholder="Prénom*"
                value={toSend.from_lastname}
                onChange={handleChange}
                required
                disabled={disabledButton ? "disabled" : ""}
              />
            </div>
            <div className="col-xs-12 margin-bottom-sm">
              <span className="error-form hidden-element messages-error block-element margin-bottom-xs">
                Ce champs est obligatoire
              </span>
              <Input
                classType="custom"
                className="col-xs-12"
                type="email"
                name="reply_to"
                placeholder="Email*"
                value={toSend.reply_to}
                onChange={handleChange}
                required
                disabled={disabledButton ? "disabled" : ""}
              />
            </div>
            <div className="col-xs-12">
              <span className="error-form hidden-element messages-error block-element margin-bottom-xs">
                Ce champs est obligatoire
              </span>
              <Input
                classType="custom"
                className="col-xs-12"
                type="textarea"
                name="message"
                placeholder="Votre message*"
                value={toSend.message}
                onChange={handleChange}
                cols="33"
                rows="6"
                required
                disabled={disabledButton ? "disabled" : ""}
              />
            </div>
          </div>
          {disabledButton ? <ButtonDisableSendEmail /> : <ButtonSendEmail />}
        </form>
      </Container>
    </Container>
  );
};
