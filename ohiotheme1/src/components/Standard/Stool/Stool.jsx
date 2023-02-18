import React from "react";
import StoolStyle from "../Stool/Stool.module.scss";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-image-magnify";
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
          <div className="col-xl-8 position-relative">
            <div className="row">
              <div className="col-xl-6">
                <div className={StoolStyle.image_container}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/kfnQjzZB-ProductImage__018.jpg",
                      },
                      largeImage: {
                        src: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/kfnQjzZB-ProductImage__018.jpg",
                        width: 1200,
                        height: 1800,
                        left: 0,
                      },
                    }}
                  />
                  {/* <img src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/kfnQjzZB-ProductImage__018.jpg" alt="" /> */}
                </div>
              </div>
              <div className="col-xl-6">
                <div className={StoolStyle.image_container}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/vvT68sbJ-ProductImage__017.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className={StoolStyle.image_container}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/nHTDq8be-ProductImage__019.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className={StoolStyle.image_container}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/ProductImage__020.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <ul className={StoolStyle.socilalmedia}>
              <li>
                <Icon icon="ri:facebook-fill" />
              </li>
              <li>
                <Icon icon="mdi:pinterest" />
              </li>
              <li>
                <Icon icon="mdi:twitter" />
              </li>
            </ul>
            <div className={StoolStyle.crop_btn}>
              <Icon icon="material-symbols:crop-free" />
            </div>
          </div>
          <div className={`col-xl-4 ${StoolStyle.sticky_col}`}>
            <div className={StoolStyle.col4_holder}>
              <small>In stock</small>
              <h3>Modern Upholstery Stool</h3>
              <span className={StoolStyle.price}>$89.00</span>
              <p>
                <b>SKU:</b> 29045-SB-2 <span className={StoolStyle.dot}>•</span>{" "}
                <b>Categories:</b>{" "}
                <span className={StoolStyle.hovered}>Chairs</span>,{" "}
                <span className={StoolStyle.hovered}>Everyday essentials</span>{" "}
                <span className={StoolStyle.dot}>•</span> <b>Tags:</b> Creative,
                Shop, WordPress
              </p>
              <p>
                The current product may have a{" "}
                <strong>manufacturer’s warranty</strong>. Visit the website or
                contact us for full warranty details.
              </p>
              <p>
                {" "}
                Free delivery available;
                <br />
                Use promo-code and save up to 25%;
              </p>
              <hr />
              <div className={StoolStyle.action_side}>
                <label htmlFor="number">Quantity:</label>
                <input type="number" id="number" min="1" placeholder="1" />
              </div>
              <div className={StoolStyle.button_side}>
                <button className={StoolStyle.cart_btn}>Add to cart</button>
                <button className={StoolStyle.save_btn}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stool;
