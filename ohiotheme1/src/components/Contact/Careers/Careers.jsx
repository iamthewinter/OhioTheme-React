import React from "react";
import CareersStyle from "../Careers/Careers.module.scss";
import { Icon } from "@iconify/react";
const Careers = () => {
  return (
    <section className={CareersStyle.careers_section}>
      <div className="container">
        <div className="row px-3">
          <div className="col-xl-6">
            <div className={CareersStyle.col6_holder}>
              <h6>CAREERS</h6>
              <h2>Join our team.</h2>
            </div>
          </div>
          <div className="col-xl-6">
            <div className={CareersStyle.col6_right_holder}>
              <button>
                See Open Positions
                <span>
                  <Icon
                    className={CareersStyle.fromleft}
                    icon="material-symbols:arrow-forward"
                  />
                  <Icon
                    className={CareersStyle.toright}
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
            <div className={CareersStyle.col6_holder}>
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

export default Careers;
