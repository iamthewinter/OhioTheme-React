import React from "react";
import CreativeStyle from "../CreativeTeam/CreativeTeam.module.scss";
const CreativeTeam = () => {
  return (
    <section className={CreativeStyle.second_section}>
      <div className="container">
        <div className="row px-3">
          <div className="col-xl-6">
            <div className={CreativeStyle.col6_holder}>
              <h6>SERVICES</h6>
              <h2>
                We're a team of creatives who are excited about unique ideas.
              </h2>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-6 px-4">
                <div className={CreativeStyle.col6_holder}>
                  <h6>STRATEGY</h6>
                  <h3>Brand Strategy & Art Direction</h3>
                  <p>
                    Creating a higher spacing and how people move through a
                    unique and impactful campaign.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 px-4">
                <div className={CreativeStyle.col6_holder}>
                  <h6>DESIGN</h6>
                  <h3>UX/UI Design & Website Design</h3>
                  <p>
                    Get a regulatory oneven an enterprises such she and the got
                    the did attributing and pushed.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 px-4">
                <div className={CreativeStyle.col6_holder}>
                  <h6>PRODUCTION</h6>
                  <h3>Typography & Video Production</h3>
                  <p>
                    Spaces of each debt in the digital world can help you with
                    overall simplest authentic.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 px-4">
                <div className={CreativeStyle.col6_holder}>
                  <h6>CAMPAIGNS</h6>
                  <h3>Promo Campaigns & Content Creation</h3>
                  <p>Making an email campaigns to achieve a real impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeTeam;
