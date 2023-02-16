import React from "react";
import AllContacts from "./AllContacts/AllContacts";
import IframeMap from "./IframeMap/IframeMap";
import SendEmail from "./SendEmail/SendEmail";

const Contact = () => {
  return (
    <>
      <SendEmail />
      <AllContacts />
      <IframeMap />
    </>
  );
};

export default Contact;
