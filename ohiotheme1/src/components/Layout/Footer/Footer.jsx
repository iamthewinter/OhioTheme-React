import React from "react";
import Logo from "../../../assets/YbUt6che-OhioLogo.svg";
import FooterStyle from "../Footer/Footer.module.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className={FooterStyle.col_adapt}>
              <ul>
                <li>
                  <div className={FooterStyle.logo}>
                    <img src={Logo} alt="" />
                  </div>
                </li>
                <li>
                  <strong>
                    <span>Fb.</span>
                    &nbsp;/&nbsp;&nbsp;
                    <span>Ig.</span>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <span>Tw.</span>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <span>Be.</span>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className={FooterStyle.col_adapt}>
              <ul>
                <li>
                  <h6>Rotterdam</h6>
                  <b>Ohio Digital Media LTD.</b>
                  <br />
                  Graaf Florisstraat 22A,
                  <br />
                  3021 CH Rotterdam
                  <br />
                  Netherlands
                </li>
                <li>
                  <h6>Barcelona</h6>
                  <b>Ohio Digital LTD.</b>
                  <br />
                  365 Gran Via de CortsA,
                  <br />
                  Catalanes, BA 08015
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className={FooterStyle.col_adapt}>
              <ul>
                <li>
                  <h6>Work inquiries</h6>
                  Interested in working with us?
                  <br />
                  <b className={FooterStyle.b_btn}>hello@clbthemes.com</b>
                </li>
                <li>
                  <h6>Career</h6>
                  Looking for a job opportunity?
                  <br />
                  <b className={FooterStyle.b_btn}>See open positions</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className={FooterStyle.col_adapt}>
              <h6>Sign up for the newsletter</h6>
              <form>
                <div className={FooterStyle.unputandbtn}>
                  <input type="text" placeholder="Email address" name="email" />
                  <button>Sign Up</button>
                </div>
                <span className={FooterStyle.checkbox_side}>
                  <label htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    &nbsp;&nbsp;
                    <span>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </span>
                  </label>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className={FooterStyle.hr_cont}>
              <hr />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className={FooterStyle.footer_left}>
              <p>
                © 2016-2023 <span>Colabrio</span>. All rights reserved |{" "}
                <b>Purchase</b>
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className={FooterStyle.footer_right}>
              <ul>
                <li>
                  <span>Security</span>
                </li>
                |
                <li>
                  <span>Privacy & Cookie Policy</span>
                </li>
                |
                <li>
                  <span>Terms of Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
