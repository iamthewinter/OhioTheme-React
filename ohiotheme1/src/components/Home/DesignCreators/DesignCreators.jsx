import React from "react";
import DsgnCrtrs from "../DesignCreators/DesignCreators.module.scss";
const DesignCreators = () => {
  return (
    <section>
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
          <div className="row h-100 px-4">
            <div className="col-xl-5">
              <div className={DsgnCrtrs.col_adapt}>
                <div className={DsgnCrtrs.first_big_txts}>
                  <p>
                    We are proud of
                    <br />
                    the works we’ve done.
                  </p>
                  <h1>
                    We’re
                    <br />
                    design
                    <br />
                    creators.
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-6">
              <div className={DsgnCrtrs.figure}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__demo1__1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignCreators;
