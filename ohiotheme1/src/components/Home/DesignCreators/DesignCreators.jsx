import React, { useEffect } from "react";
import DsgnCrtrs from "../DesignCreators/DesignCreators.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const DesignCreators = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={DsgnCrtrs.first_section}>
      <div className={DsgnCrtrs.section_under}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-xl-3 px-4">
              <div
                className={`${DsgnCrtrs.col_adaptation} ${DsgnCrtrs.left_col_border}`}
              ></div>
            </div>
            <div className="col-xl-3 px-4">
              <div className={DsgnCrtrs.col_adaptation}></div>
            </div>
            <div className="col-xl-6 px-4">
              <div className={DsgnCrtrs.col_adaptation}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={DsgnCrtrs.section_on}>
        <div className="container h-100">
          <div className={`row h-100 ${DsgnCrtrs.row_responsive}`}>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className={DsgnCrtrs.col_adapt}>
                <div className={DsgnCrtrs.first_big_txts}>
                  <p>
                    We are proud of
                    <br />
                    the works we’ve done.
                  </p>
                  <h1 data-aos="fade-up">
                    We’re
                    <br />
                    design
                    <br />
                    creators.
                  </h1>
                  <b data-aos="fade-up">More Projects</b>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className={DsgnCrtrs.col6_adapt}>
                <div className={DsgnCrtrs.figure}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__demo1__1.png"
                    alt=""
                  />
                </div>
                <div className={DsgnCrtrs.pic_near_texts}>
                  <p data-aos="fade-up">Featured project:</p>
                  <h5 data-aos="fade-up">
                    Unique Bowls From
                    <br />
                    the South Pacific.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignCreators;
