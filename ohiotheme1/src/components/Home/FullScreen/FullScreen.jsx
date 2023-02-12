import React from "react";
import FullScrnStyle from "../FullScreen/FullScreen.module.scss";
const FullScreen = () => {
  return (
    <section className={FullScrnStyle.third_section}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4">
            <div className={FullScrnStyle.fluid_banner}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullScreen;
