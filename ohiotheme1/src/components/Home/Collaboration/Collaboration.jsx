import React from "react";
import CollabStyle from "../Collaboration/Collaborat.module.scss";
import { Icon } from "@iconify/react";
const Collaboration = () => {
  return (
    <section className={CollabStyle.seven_section}>
      <div className="container">
        <div className="row px-3">
          <div className="col-xl-6">
            <div className={CollabStyle.col6_holder}>
              <h6>COLLABORATION</h6>
              <h2>
                Got a project?
                <br />
                Let’s talk.
              </h2>
            </div>
          </div>
          <div className="col-xl-6">
            <div className={CollabStyle.col6_right_holder}>
              <button>
                Contact Us
                <span>
                  <Icon
                    className={CollabStyle.fromleft}
                    icon="material-symbols:arrow-forward"
                  />
                  <Icon
                    className={CollabStyle.toright}
                    icon="material-symbols:arrow-forward"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="col-xl-12">
            <hr />
          </div>
          <div className="col-xl-6">
            <div className={CollabStyle.col6_holder}>
              <p>
                We’re <strong>a team of creatives</strong> who are excited about
                unique ideas and help fin-tech companies to{" "}
                <strong>create amazing identity</strong> by crafting top-notch
                UI/UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
