import React from "react";
import AwardsStyle from "../Awards/Awards.module.scss";
const Awards = () => {
  return (
    <section className={AwardsStyle.six_section}>
      <div className="container">
        <div className="row px-3 justify-content-between">
          <div className="col-xl-5 col-lg-5">
            <div className={AwardsStyle.col5_adaptation}>
              <h6>AWARDS & HONORS</h6>
              <hr />
              <h2>
                The awards won
                <br />
                by our project.
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className={AwardsStyle.col6_adaptation}>
              <p>
                Our clients describe us as a product team which{" "}
                <strong>creates amazing UI/UX</strong> experiences,{" "}
                <strong>by crafting top-notch</strong> user experience.
              </p>
              <div className="row pt-4">
                <div
                  className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 ${AwardsStyle.logo_responsive}`}
                >
                  <div className={AwardsStyle.logo_holder}>
                    <div className={AwardsStyle.logos}>
                      <img
                        src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_awwwards-min.png"
                        alt=""
                      />
                    </div>
                    <div className={AwardsStyle.logo_caption}>
                      <p>
                        <b>5x</b> Developer Award
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 ${AwardsStyle.logo_responsive}`}
                >
                  <div className={AwardsStyle.logo_holder}>
                    <div className={AwardsStyle.logos}>
                      <img
                        src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_awwwards-min.png"
                        alt=""
                      />
                    </div>
                    <div className={AwardsStyle.logo_caption}>
                      <p>
                        <b>3x</b> Site of the Day
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 ${AwardsStyle.logo_responsive}`}
                >
                  <div className={AwardsStyle.logo_holder}>
                    <div className={AwardsStyle.logos}>
                      <img
                        src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_fwa-min.png"
                        alt=""
                      />
                    </div>
                    <div className={AwardsStyle.logo_caption}>
                      <p>
                        <b>5x</b> Mobile of the Day
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 ${AwardsStyle.logo_responsive}`}
                >
                  <div className={AwardsStyle.logo_holder}>
                    <div className={AwardsStyle.logos}>
                      <img
                        src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_webby-min.png"
                        alt=""
                      />
                    </div>
                    <div className={AwardsStyle.logo_caption}>
                      <p>
                        <b>2x</b> Best Website
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 ${AwardsStyle.logo_responsive}`}
                >
                  <div className={AwardsStyle.logo_holder}>
                    <div className={AwardsStyle.logos}>
                      <img
                        src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_webby-min.png"
                        alt=""
                      />
                    </div>
                    <div className={AwardsStyle.logo_caption}>
                      <p>
                        <b>2x</b> Best Website
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
