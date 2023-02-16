import React from "react";
import AllContStyle from "../AllContacts/AllContact.module.scss";
import { Icon } from "@iconify/react";
const AllContacts = () => {
  return (
    <section className={AllContStyle.allcontacts_section}>
      <div className="container">
        <div className="row px-3">
          <div className="col-xl-12">
            <ul>
              <li>
                <span className={AllContStyle.with_hover}>
                  <b>Home</b>
                </span>
                <Icon icon="carbon:chevron-right" />
              </li>
              <li>
                <span>Contact: Agency</span>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={AllContStyle.col6_holder}>
              <h3>Get in touch</h3>
              <div className="row pt-3">
                <div className="col-xl-4">
                  <p>
                    Work Inquiries <strong>+1.809.120.6705</strong>{" "}
                  </p>
                  <p>
                    Assistance hours: <br /> Monday – Friday <br /> 6 am to 8 pm
                    EST
                  </p>
                </div>
                <div className="col-xl-4">
                  <p>
                    Careers & Press <strong>+1.809.120.4590</strong>{" "}
                  </p>
                  <p>
                    Assistance hours: <br /> Tuesday – Saturday <br /> 6 am to 8
                    pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-xl-6">
                <h3>Post address</h3>
                <p>
                  541 Melville Ave, Palo Alto,
                  <br />
                  CA 94301,
                  <br />
                  United States
                </p>
              </div>
              <div className="col-xl-6">
                <h3>Social media</h3>
                <ul className={AllContStyle.social_list}>
                  <li>
                    <span>Facebook</span>
                  </li>
                  <li>
                    <span>Instagram</span>
                  </li>
                  <li>
                    <span>Twitter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 pt-3">
        <div className="row px-3">
          <div className="col-xl-12">
            <hr />
          </div>
        </div>
        <form>
          <div className="row px-3">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="name">Name (required)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="company">Company (required)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="email">Email (required)</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your working email"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your actual phone number"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="subject">Subject (optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Choose a subject"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="budget">Choose a Budget (USD)</label>
                <span>
                  <select name="budget" id="budget">
                    <option value="Less than 5K">Less than 5K</option>
                    <option value="5K-10K">5K-10K</option>
                    <option value="Over 10K">Over 10K</option>
                    <option value="Please advice">Please advice</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="col-xl-12 px-0">
              <div className={AllContStyle.input_label_holder}>
                <label htmlFor="details">Project details</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Brief project details"
                />
              </div>
            </div>
            <div className="col-xl-12 px-0">
              <div className={AllContStyle.input_checkbox_holder}>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span>
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </span>
              </div>
            </div>
            <div className="col-xl-12 px-0">
              <div className={AllContStyle.input_label_holder}>
                <button>Get a Quote</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AllContacts;
