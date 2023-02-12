import React from "react";
import FullScrnStyle from "../FullScreen/FullScreen.module.scss";
import { Icon } from "@iconify/react";
const FullScreen = () => {
  return (
    <section className={FullScrnStyle.third_section}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4 px-0">
            <div className={FullScrnStyle.fluid_banner}>
              <div className={FullScrnStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                  alt=""
                />
                <div className={FullScrnStyle.absolute_content}>
                  <div className={FullScrnStyle.crop_icon}>
                    <small>
                      <Icon icon="material-symbols:crop-free-rounded" />
                    </small>
                  </div>
                  <div className={FullScrnStyle.play_icon}>
                    <span>
                      <Icon icon="ri:play-fill" />
                    </span>
                  </div>
                  <div className={FullScrnStyle.banner_texts}>
                    <h4>Stickers Pack</h4>
                    <div className={FullScrnStyle.category}>
                      <p>Identity, Mockup</p>
                      <div className={FullScrnStyle.hover_show}>
                        <span>Show project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 px-0">
            <div className={FullScrnStyle.fluid_banner}>
              <div className={FullScrnStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img25-1920x1076.jpeg"
                  alt=""
                />
                <div className={FullScrnStyle.absolute_content}>
                  <div className={FullScrnStyle.crop_icon}>
                    <small>
                      <Icon icon="material-symbols:crop-free-rounded" />
                    </small>
                  </div>
                  <div className={FullScrnStyle.banner_texts}>
                    <h4>Diseño Gráfico</h4>
                    <div className={FullScrnStyle.category}>
                      <p>Branding, Identity</p>
                      <div className={FullScrnStyle.hover_show}>
                        <span>Show project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 px-0">
            <div className={FullScrnStyle.fluid_banner}>
              <div className={FullScrnStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img95-1920x1076.jpeg"
                  alt=""
                />
                <div className={FullScrnStyle.absolute_content}>
                  <div className={FullScrnStyle.crop_icon}>
                    <small>
                      <Icon icon="material-symbols:crop-free-rounded" />
                    </small>
                  </div>
                  <div className={FullScrnStyle.play_icon}>
                    <span>
                      <Icon icon="ri:play-fill" />
                    </span>
                  </div>
                  <div className={FullScrnStyle.banner_texts}>
                    <h4>Lifestyle App</h4>
                    <div className={FullScrnStyle.category}>
                      <p>Apps, Campaign</p>
                      <div className={FullScrnStyle.hover_show}>
                        <span>Show project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 px-0">
            <div className={FullScrnStyle.fluid_banner}>
              <div className={FullScrnStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zxDVPhmF-oh__img31.jpeg"
                  alt=""
                />
                <div className={FullScrnStyle.absolute_content}>
                  <div className={FullScrnStyle.crop_icon}>
                    <small>
                      <Icon icon="material-symbols:crop-free-rounded" />
                    </small>
                  </div>
                  <div className={FullScrnStyle.play_icon}>
                    <span>
                      <Icon icon="ri:play-fill" />
                    </span>
                  </div>
                  <div className={FullScrnStyle.banner_texts}>
                    <h4>Credit Bánk</h4>
                    <div className={FullScrnStyle.category}>
                      <p>Creative, Identity</p>
                      <div className={FullScrnStyle.hover_show}>
                        <span>Show project</span>
                      </div>
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

export default FullScreen;
