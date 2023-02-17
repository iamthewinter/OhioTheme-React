import React from "react";
import StoolStyle from "../Stool/Stool.module.scss";
import { Icon } from "@iconify/react";
const Stool = () => {
  return (
    <section className={StoolStyle.stool_section}>
      <div className="container">
        <div className="row px-3">
          <div className="col-xl-12">
            <ul>
              <li>
                <span>
                  <b>Shop</b>
                </span>
                <Icon icon="carbon:chevron-right" />
              </li>
              <li>
                <span>
                  <b>Chairs</b>
                </span>
                <Icon icon="carbon:chevron-right" />
              </li>
              <li>
                <span>Modern Upholstery Stool</span>
              </li>
            </ul>
          </div>
          <div className="col-xl-8">
            <div className="row">
              <div className="col-xl-6"></div>
              <div className="col-xl-6"></div>
            </div>
          </div>
          <div className="col-xl-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Stool;
