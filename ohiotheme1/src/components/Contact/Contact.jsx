import React from "react";
import AllContacts from "./AllContacts/AllContacts";
import Careers from "./Careers/Careers";
import IframeMap from "./IframeMap/IframeMap";
import SendEmail from "./SendEmail/SendEmail";

const Contact = () => {
  return (
    <>
      <SendEmail />
      <AllContacts />
      <IframeMap />
      <Careers />
    </>
  );
};

export default Contact;
