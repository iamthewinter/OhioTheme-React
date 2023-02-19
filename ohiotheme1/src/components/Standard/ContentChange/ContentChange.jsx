import React, { useState } from "react";
import ContentStyle from "../ContentChange/ContentChange.module.scss";
import { Icon } from "@iconify/react";
const ContentChange = () => {
  const [show, setShow] = useState(1);
  const HandleTab = (e) => {
    setShow(e);
  };

  return (
    <section className={ContentStyle.display_none_block}>
      <div className={ContentStyle.button_section}>
        <div className="container">
          <div className="row px-3">
            <div className="col-xl-12">
              <div className={ContentStyle.button_list}>
                <div
                  className={
                    show === 1
                      ? `${ContentStyle.under_line} ${ContentStyle.first_pos}`
                      : show === 2
                      ? `${ContentStyle.under_line} ${ContentStyle.second_pos}`
                      : show === 3
                      ? `${ContentStyle.under_line} ${ContentStyle.third_pos}`
                      : `${ContentStyle.under_line}`
                  }
                ></div>
                <div
                  className={
                    show === 1
                      ? `${ContentStyle.btn_dnone_block} ${ContentStyle.active}`
                      : `${ContentStyle.btn_dnone_block}`
                  }
                  onClick={() => HandleTab(1)}
                >
                  <span>Description</span>
                </div>
                <div
                  className={
                    show === 2
                      ? `${ContentStyle.btn_dnone_block} ${ContentStyle.active}`
                      : `${ContentStyle.btn_dnone_block}`
                  }
                  onClick={() => HandleTab(2)}
                >
                  <span>Additional Information</span>
                </div>
                <div
                  className={
                    show === 3
                      ? `${ContentStyle.btn_dnone_block} ${ContentStyle.active}`
                      : `${ContentStyle.btn_dnone_block}`
                  }
                  onClick={() => HandleTab(3)}
                >
                  <span>Reviews (0)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          show === 1
            ? `${ContentStyle.changing_content1} ${ContentStyle.active}`
            : `${ContentStyle.changing_content1}`
        }
      >
        <div className="container">
          <div className="row px-3">
            <div className="col-xl-6 col-lg-6">
              <div className={ContentStyle.column_holder}>
                <h5>Online Return & Exchange Policy</h5>
                <p>
                  If you are not satisfied with your purchase, return it to us
                  for an exchange or refund, subject to the following terms.
                </p>
                <h5>Shipping & Handling</h5>
                <p>
                  For all the orders containing only Gift Cards, standard
                  shipping cost is US$25. Gift Cards are shipped separately from
                  merchandise and cannot be delivered to a P.O. Box.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className={ContentStyle.col_inner}>
                      <div className={ContentStyle.progressing}>
                        <div className={ContentStyle.prog_percent}>
                          <span>65%</span>
                        </div>
                        <div className={ContentStyle.progress_holder}>
                          <div className={ContentStyle.progress_bar1}></div>
                        </div>
                      </div>
                      <h6>Economy – US $20</h6>
                      <p>Allow 7-11 working days for delivery.</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className={ContentStyle.col_inner}>
                      <div className={ContentStyle.progressing}>
                        <div className={ContentStyle.prog_percent}>
                          <span>85%</span>
                        </div>
                        <div className={ContentStyle.progress_holder}>
                          <div className={ContentStyle.progress_bar2}></div>
                        </div>
                      </div>
                      <h6>Standard – US $25</h6>
                      <p>Allow 5-8 working days for delivery.</p>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <span className={ContentStyle.help_btn}>Need Help?</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className={ContentStyle.image_holder}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/sM7eC9xC-product_attachement2.jpeg"
                  alt=""
                />
                <div className={ContentStyle.videobutton_holder}>
                  <div className={ContentStyle.player_btn}>
                    <Icon icon="material-symbols:play-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          show === 2
            ? `${ContentStyle.changing_content2} ${ContentStyle.active}`
            : `${ContentStyle.changing_content2}`
        }
      >
        <div className="container">
          <div className="row px-3">
            <div className="col-xl-12">
              <div className={ContentStyle.col_adapter}>
                <h6>Store</h6>
                <p>Covina, San Diego</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          show === 3
            ? `${ContentStyle.changing_content3} ${ContentStyle.active}`
            : `${ContentStyle.changing_content3}`
        }
      >
        <div className="container">
          <div className="row px-3">
            <div className="col-xl-12">
              <div className={ContentStyle.column_adaptation}>
                <h4>Reviews</h4>
                <p>There are no reviews yet.</p>
                <h3>Be the first to review “Modern Upholstery Stool”</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <span>Rate this product:</span>
                <ul>
                  <li>
                    <Icon icon="material-symbols:star-rate-sharp" />
                  </li>
                  <li>
                    <Icon icon="material-symbols:star-rate-sharp" />
                  </li>
                  <li>
                    <Icon icon="material-symbols:star-rate-sharp" />
                  </li>
                  <li>
                    <Icon icon="material-symbols:star-rate-sharp" />
                  </li>
                  <li>
                    <Icon icon="material-symbols:star-rate-sharp" />
                  </li>
                </ul>
                <form>
                  <div className="row">
                    <div className="col-xl-12">
                      <label htmlFor="textarea">Your review</label>
                      <textarea id="textarea" name="review" />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="name">Name*</label>
                      <input type="text" id="name" />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="email">Email*</label>
                      <input type="text" id="email" />
                    </div>
                    <div className="col-xl-12">
                      <div className={ContentStyle.accepting}>
                        <input type="checkbox" id="saving" />
                        <label htmlFor="saving">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <button>Submit Review</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentChange;
