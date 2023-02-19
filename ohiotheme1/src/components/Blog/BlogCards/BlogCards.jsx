import React from "react";
import { Icon } from "@iconify/react";
import BlogCardStyle from "../BlogCards/BlogCards.module.scss";

const BlogCards = () => {
  return (
    <section className={BlogCardStyle.blog_classic}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={BlogCardStyle.big_text_holder}>
              <h1>Classic</h1>
              <div className={BlogCardStyle.pillow_buttons}>
                <div className={BlogCardStyle.pills_switcher}>
                  <span className={BlogCardStyle.active}>WPBakery</span>
                  <span className={BlogCardStyle.passive}>Elementor</span>
                </div>
              </div>
            </div>
            <div className={`${BlogCardStyle.filter_list_holder} px-2`}>
              <ul>
                <li>
                  <span>
                    <b>Home</b>
                  </span>
                  <Icon icon="material-symbols:arrow-forward-ios" />
                </li>
                <li>
                  <span>
                    <b>Blog</b>
                  </span>
                  <Icon icon="material-symbols:arrow-forward-ios" />
                </li>
                <li>
                  <span>Classic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className={BlogCardStyle.banner}>
              <div className={BlogCardStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_21-1323x1536.jpeg"
                  alt=""
                />
                <div className={BlogCardStyle.absolute_icon}>
                  <div className={BlogCardStyle.absolute_content}>
                    <div className={BlogCardStyle.blue_logo}>
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                    </div>
                    <div className={BlogCardStyle.absolute_text}>
                      <span>Posted by</span>
                      <h6>Colabrio</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={BlogCardStyle.banner_texts}>
                <div className={BlogCardStyle.action_info}>
                  <strong>August 4, 2020</strong>
                  <small>•</small>
                  <span>9 min read</span>
                </div>
                <h4>
                  Creativo Para Jóvenes: a Designer’s UI/UX Complete Checklist.
                </h4>
                <div className={BlogCardStyle.category}>
                  <small>Digital</small>
                  <small>Marketing</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className={BlogCardStyle.banner}>
              <div className={BlogCardStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_3-min-1323x1536.jpg"
                  alt=""
                />
                <div className={BlogCardStyle.absolute_icon}>
                  <div className={BlogCardStyle.absolute_content}>
                    <div className={BlogCardStyle.blue_logo}>
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                    </div>
                    <div className={BlogCardStyle.absolute_text}>
                      <span>Posted by</span>
                      <h6>Colabrio</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={BlogCardStyle.banner_texts}>
                <div className={BlogCardStyle.action_info}>
                  <strong>August 4, 2020</strong>
                  <small>•</small>
                  <span>9 min read</span>
                </div>
                <h4>
                  The Highly Contemporary UI/UX Design from a Silicon Valley.
                </h4>
                <div className={BlogCardStyle.category}>
                  <small>Digital</small>
                  <small>Marketing</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className={BlogCardStyle.banner}>
              <div className={BlogCardStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_20-min-1323x1536.jpeg"
                  alt=""
                />
                <div className={BlogCardStyle.absolute_icon}>
                  <div className={BlogCardStyle.absolute_content}>
                    <div className={BlogCardStyle.blue_logo}>
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                    </div>
                    <div className={BlogCardStyle.absolute_text}>
                      <span>Posted by</span>
                      <h6>Colabrio</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={BlogCardStyle.banner_texts}>
                <div className={BlogCardStyle.action_info}>
                  <strong>August 4, 2020</strong>
                  <small>•</small>
                  <span>9 min read</span>
                </div>
                <h4>
                  Definitive Guide to Make a Daily More Productive Working Flow.
                </h4>
                <div className={BlogCardStyle.category}>
                  <small>Digital</small>
                  <small>Marketing</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className={BlogCardStyle.banner}>
              <div className={BlogCardStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5-900x1057.jpg"
                  alt=""
                />
                <div className={BlogCardStyle.absolute_icon}>
                  <div className={BlogCardStyle.absolute_content}>
                    <div className={BlogCardStyle.blue_logo}>
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                    </div>
                    <div className={BlogCardStyle.absolute_text}>
                      <span>Posted by</span>
                      <h6>Colabrio</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={BlogCardStyle.banner_texts}>
                <div className={BlogCardStyle.action_info}>
                  <strong>August 4, 2020</strong>
                  <small>•</small>
                  <span>9 min read</span>
                </div>
                <h4>Organic Food Isn’t Much Better For Your Future Health.</h4>
                <div className={BlogCardStyle.category}>
                  <small>Personal</small>
                  <small>Stories</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className={BlogCardStyle.banner}>
              <div className={BlogCardStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_4-900x1057.jpg"
                  alt=""
                />
                <div className={BlogCardStyle.absolute_icon}>
                  <div className={BlogCardStyle.absolute_content}>
                    <div className={BlogCardStyle.blue_logo}>
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                    </div>
                    <div className={BlogCardStyle.absolute_text}>
                      <span>Posted by</span>
                      <h6>Colabrio</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={BlogCardStyle.banner_texts}>
                <div className={BlogCardStyle.action_info}>
                  <strong>August 4, 2020</strong>
                  <small>•</small>
                  <span>9 min read</span>
                </div>
                <h4>Ways of Lying to Yourself About Your New Relationship.</h4>
                <div className={BlogCardStyle.category}>
                  <small>Personal</small>
                  <small>Stories</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 px-2">
            <div className={BlogCardStyle.banner}>
              <div className={BlogCardStyle.picture}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_17-1536x1286.jpg"
                  alt=""
                />
                <div className={BlogCardStyle.absolute_icon}>
                  <div className={BlogCardStyle.absolute_content}>
                    <div className={BlogCardStyle.blue_logo}>
                      <img
                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                        alt=""
                      />
                    </div>
                    <div className={BlogCardStyle.absolute_text}>
                      <span>Posted by</span>
                      <h6>Colabrio</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={BlogCardStyle.banner_texts}>
                <div className={BlogCardStyle.action_info}>
                  <strong>August 4, 2020</strong>
                  <small>•</small>
                  <span>9 min read</span>
                </div>
                <h4>
                  The Start-Up Ultimate Guide to Make Your WordPress Journal.
                </h4>
                <div className={BlogCardStyle.category}>
                  <small>Personal</small>
                  <small>Stories</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 px-2">
            <div className={BlogCardStyle.pagination}>
              <ul>
                <li>
                  <span className={BlogCardStyle.active}>1</span>
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

export default BlogCards;
