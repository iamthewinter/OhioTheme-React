import React from "react";
import { Icon } from "@iconify/react";
import RelateProdStyle from "../RelatedProducts/RelatedProd.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "../RelatedProducts/Sliders.scss";

const RelatedProd = () => {
  return (
    <section className={RelateProdStyle.relatedprod_section}>
      <div className="container">
        <div className="row px-3">
          <div className="col-xl-12">
            <div className={RelateProdStyle.section_heading}>
              <h3>Related products</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={RelateProdStyle.cards}>
              <div className={RelateProdStyle.image_holder}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className={RelateProdStyle.my_slider}
                >
                  <SwiperSlide>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__026-768x768.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__027-768x768.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <small className={RelateProdStyle.banner}>Out of stock</small>
                <div className={RelateProdStyle.crop_btn}>
                  <Icon icon="material-symbols:crop-free" />
                </div>
                <div className={RelateProdStyle.button_container}>
                  <span
                    className={`${RelateProdStyle.hover_btn} ${RelateProdStyle.btn_absolute1}`}
                  >
                    Read more
                  </span>
                  <span
                    className={`${RelateProdStyle.hover_btn} ${RelateProdStyle.btn_absolute2}`}
                  >
                    Save
                  </span>
                </div>
              </div>
              <div className={RelateProdStyle.card_text}>
                <h5>Gosta Upholstery Chair</h5>
                <div className={RelateProdStyle.categoriies}>
                  <span>Chairs,</span> <span>Everyday essentials</span>
                </div>
                <bdi>$89.00</bdi>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={RelateProdStyle.cards}>
              <div className={RelateProdStyle.image_holder}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className={RelateProdStyle.my_slider}
                >
                  <SwiperSlide>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__030-768x768.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__031-768x768.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <small className={RelateProdStyle.banner}>Out of stock</small>
                <div className={RelateProdStyle.crop_btn}>
                  <Icon icon="material-symbols:crop-free" />
                </div>
                <div className={RelateProdStyle.button_container}>
                  <span
                    className={`${RelateProdStyle.hover_btn} ${RelateProdStyle.btn_absolute1}`}
                  >
                    Read more
                  </span>
                  <span
                    className={`${RelateProdStyle.hover_btn} ${RelateProdStyle.btn_absolute2}`}
                  >
                    Save
                  </span>
                </div>
              </div>
              <div className={RelateProdStyle.card_text}>
                <h5>Johanna Shape Armchair</h5>
                <div className={RelateProdStyle.categoriies}>
                  <span>Chairs,</span> <span>Everyday essentials</span>
                </div>
                <bdi>$39.00</bdi>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={RelateProdStyle.cards}>
              <div className={RelateProdStyle.image_holder}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className={RelateProdStyle.my_slider}
                >
                  <SwiperSlide>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__052-768x768.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__051-768x768.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <small
                  className={`${RelateProdStyle.banner} ${RelateProdStyle.banner_sale}`}
                >
                  Sale
                </small>
                <div className={RelateProdStyle.crop_btn}>
                  <Icon icon="material-symbols:crop-free" />
                </div>
                <div className={RelateProdStyle.button_container}>
                  <span
                    className={`${RelateProdStyle.hover_btn} ${RelateProdStyle.btn_absolute1}`}
                  >
                    Select options
                  </span>
                  <span
                    className={`${RelateProdStyle.hover_btn} ${RelateProdStyle.btn_absolute2}`}
                  >
                    Save
                  </span>
                </div>
              </div>
              <div className={RelateProdStyle.card_text}>
                <h5>Gosta Shape Armchair</h5>
                <div className={RelateProdStyle.categoriies}>
                  <span>Chairs,</span> <span>Everyday essentials</span>
                </div>
                <bdi>$49.00 – $59.00</bdi>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProd;
