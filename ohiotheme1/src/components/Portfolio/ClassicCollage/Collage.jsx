import React from "react";
import CollageStyle from "../ClassicCollage/Collage.module.scss";
// import data from "../../../Mock/MockData.jsx"
import { Icon } from "@iconify/react";
const Collage = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={CollageStyle.big_text_holder}>
              <h1>Classic</h1>
              <div className={CollageStyle.pillow_buttons}>
                <div className={CollageStyle.pills_switcher}>
                  <span className={CollageStyle.active}>WPBakery</span>
                  <span className={CollageStyle.passive}>Elementor</span>
                </div>
              </div>
            </div>
            <div className={CollageStyle.filter_list_holder}>
              <ul>
                <li>Filter by</li>
                <li>
                  <b>
                    <span>All</span>
                    <small>07</small>
                  </b>
                </li>
                &nbsp;
                <li>
                  /
                  <b>
                    <span>Apps</span>
                    <small>02</small>
                  </b>
                </li>
                &nbsp;
                <li>
                  /
                  <b>
                    <span>Branding</span>
                    <small>02</small>
                  </b>
                </li>
                &nbsp;
                <li>
                  /
                  <b>
                    <span>Creative</span>
                    <small>01</small>
                  </b>
                </li>
                &nbsp;
                <li>
                  /
                  <b>
                    <span>Identity</span>
                    <small>05</small>
                  </b>
                </li>
                &nbsp;
                <li>
                  /
                  <b>
                    <span>Mockup</span>
                    <small>02</small>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                  alt=""
                />
                <div className={CollageStyle.play_icon}>
                  <span>
                    <Icon icon="ri:play-fill" />
                  </span>
                </div>
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>Stickers Pack</h4>
                <div className={CollageStyle.category}>
                  <p>Identity, Mockup</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img25-1920x1076.jpeg"
                  alt=""
                />
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>Diseño Gráfico</h4>
                <div className={CollageStyle.category}>
                  <p>Branding, Identity</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
                  alt=""
                />
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>Bright Captive</h4>
                <div className={CollageStyle.category}>
                  <p>Branding, Identity</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/JwFczCN8-oh__img35.jpeg"
                  alt=""
                />
                <div className={CollageStyle.play_icon}>
                  <span>
                    <Icon icon="ri:play-fill" />
                  </span>
                </div>
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>World’s Relays</h4>
                <div className={CollageStyle.category}>
                  <p>Apps, Campaign</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/guQWgJXg-oh__img26.jpeg"
                  alt=""
                />
                <div className={CollageStyle.play_icon}>
                  <span>
                    <Icon icon="ri:play-fill" />
                  </span>
                </div>
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>Dinámica</h4>
                <div className={CollageStyle.category}>
                  <p>Creative, Identity</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img95-1920x1076.jpeg"
                  alt=""
                />
                <div className={CollageStyle.play_icon}>
                  <span>
                    <Icon icon="ri:play-fill" />
                  </span>
                </div>
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>Lifestyle App</h4>
                <div className={CollageStyle.category}>
                  <p>Apps, Campaign</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 px-2">
            <div className={CollageStyle.banner}>
              <div className={CollageStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/MeKCvxP5-oh__img34.1.jpeg"
                  alt=""
                />
                <div className={CollageStyle.play_icon}>
                  <span>
                    <Icon icon="ri:play-fill" />
                  </span>
                </div>
              </div>
              <div className={CollageStyle.banner_texts}>
                <h4>Gráfico Scenic</h4>
                <div className={CollageStyle.category}>
                  <p>Identity, Mockup</p>
                  <div className={CollageStyle.hover_show}>
                    <span>Show project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 px-2">
            <div className={CollageStyle.pagination}>
              <ul>
                <li>
                  <span className={CollageStyle.active}>1</span>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>
                    <Icon icon="material-symbols:arrow-forward" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collage;
