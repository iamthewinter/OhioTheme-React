import React from "react";
import AllContacts from "./AllContacts/AllContacts";
import SendEmail from "./SendEmail/SendEmail";

const Contact = () => {
  return (
    <>
      <SendEmail />
      <AllContacts />
    </>
  );
};

export default Contact;
