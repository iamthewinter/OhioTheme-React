import React from "react";
import SendEmailStyle from "../SendEmail/SendEmail.module.scss";
const SendEmail = () => {
  return (
    <section className={SendEmailStyle.email_section}>
      <div className="container mt-5 pt-5">
        <div className="row pt-3 px-3">
          <div className="col-xl-6">
            <div className={SendEmailStyle.col_adaptation}>
              <h1>Contact: Agency</h1>
              <p>Leave us a little info, and we’ll be in touch.</p>
              <button>Send Us an Email</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;
