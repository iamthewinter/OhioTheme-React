import React, { useState } from "react";
import Logo from "../../../assets/YbUt6che-OhioLogo.svg";
import NavStyle from "../Nav/Nav.module.scss";
import { Icon } from "@iconify/react";
import router from "../../../router";
import { Link } from "react-router-dom";

const Nav = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav
      className={
        color
          ? `${NavStyle.transparent_nav} ${NavStyle.nav_scroll}`
          : `${NavStyle.transparent_nav}`
      }
    >
      <div className="container-fluid h-100">
        <div className="row justify-content-between h-100">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
            <div className={NavStyle.left_nav}>
              <div
                className={`${NavStyle.menu_button} btn btn-primary`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <div className={NavStyle.bars_container}>
                  <span className={NavStyle.bar1}></span>
                  <span className={NavStyle.bar2}></span>
                </div>
              </div>
              <div className={NavStyle.logo}>
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-xl-6 col-lg-6 ${NavStyle.mid_nav_none}`}>
            <div className={NavStyle.mid_nav}>
              <ul className={NavStyle.lvl1_ul}>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>01</small>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                  </div>
                </li>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>02</small>
                    <span>Elements</span>
                  </div>
                  <ul className={NavStyle.lvl2_ul}>
                    <li className={NavStyle.lvl2_li}>
                      <h6>WIDGETS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Accordion</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Banner</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Blog Posts</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Button</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Call to Action</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Carousel</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Circle Progress Bar</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Clients Logo</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Compare</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>WIDGETS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Contact Form</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Countdown</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Counter</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Dynamic Text</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fullscreen Slider</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Google Map</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Heading</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Horizontal Accordion</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>WIDGETS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Icon Box</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Instagram Feed</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Message</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Parallax</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Portfolio Projects</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Pricing List</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Pricing Table</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Process</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Progress Bar</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>WIDGETS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Services Table</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Shop Category</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Social Networks</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Subscribe Form</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Tabs</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Team Group</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Team Member</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Testimonial</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Video</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>MENUS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Centered</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>With Center Logo</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>With Top Logo</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sidebar Wide</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sidebar Top Hamburger</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sidebar Center Hamburger</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>HAMBURGER MENUS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard Hamburger</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Centered Hamburger</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Creative Hamburger</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>03</small>
                    <span>Portfolio</span>
                  </div>
                  <ul className={`${NavStyle.lvl2_ul} ${NavStyle.left2}`}>
                    <li className={NavStyle.lvl2_li}>
                      <h6>ARCHIVE</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>
                            <Link to="/portfolio">Classic</Link>
                          </span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Contained</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Caption Cursor</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Caption Cursor Metro</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sticky Contained</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sticky Metro</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>SLIDERS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Horizontal Slider</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Vertical Slider</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Smooth Scroll Split Screen</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Interactive Links</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Horizontal Carousel</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Onepage with Smooth Scroll</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Scattered with Smooth Scroll</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Centered with Smooth Scroll</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Vertical</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>SINGLE PROJECT</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Details with Left Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Details with Right Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Details with Bottom Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split Screen Left Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split Screen Right Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Slider with Details</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Slider with Custom Details</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Asymmetric with Custom Details</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Slider with Centered Details</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>PAGINATION TYPES</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard: Outlined</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard: Text</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Load More</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Load More: Outlined</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Load More: Text</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Lazy Load</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Lazy Load: Outlined</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Lazy Load: Text</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>HOVER EFFECTS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Scale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Overlay</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Greyscale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Transition</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Scale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Overlay</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Greyscale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Transition</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>APPEAR EFFECTS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Up Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Down Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Left Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Right Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Flip Up Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Flip Down Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Zoom In Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Zoom Out Effect</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>04</small>
                    <span>Blog</span>
                  </div>
                  <ul className={`${NavStyle.lvl2_ul} ${NavStyle.left3}`}>
                    <li className={NavStyle.lvl2_li}>
                      <h6>ARCHIVE</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>
                            <Link to="/blog">Classic</Link>
                          </span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Contained</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split Contained</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sticky Metro</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>ARCHIVE</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Inner</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Inner Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Compact</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Compact Contained</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Compact Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Simple</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Simple Contained</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>SINGLE POSTS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard: Featured Image</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard: Fullscreen</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split: Featured Image</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>PAGINATION TYPES</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard: Outlined</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Standard: Text</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Load More</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Load More: Outlined</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Load More: Text</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Lazy Load</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Lazy Load: Outlined</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Lazy Load: Text</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>HOVER EFFECTS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: None</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Scale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Overlay</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Greyscale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: None</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Scale</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Overlay</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Greyscale</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>APPEAR EFFECTS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Up Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Down Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Left Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Fade Right Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Flip Up Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Flip Down Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Zoom In Effect</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Zoom Out Effect</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>05</small>
                    <span>Shop</span>
                  </div>
                  <ul className={`${NavStyle.lvl2_ul} ${NavStyle.left4}`}>
                    <li className={NavStyle.lvl2_li}>
                      <h6>ARCHIVE</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Contained</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Metro</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal Contained</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal Metro</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>HOVER EFFECTS</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Scale</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Overlay</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Greyscale</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic: Image Transition</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Scale</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Overlay</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Greyscale</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Minimal: Image Transition</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>SINGLE PRODUCT</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sticky Gallery</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sticky Gallery Reflected</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split Screen</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Split Screen Reflected</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Gallery</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Gallery Reflected</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Grid Gallery</span>
                          <small>NEW</small>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Grid Gallery Reflected</span>
                          <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>PRODUCT TYPES</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>
                            <Link to="standard">Standard Product</Link>
                          </span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Grouped Product</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Variable Product</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Virtual Product</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>External/Affiliate Product</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Downloadable Product</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>On Sale Product</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Out of Stock Product</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>SHOP PAGES</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Shop Layout</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Cart</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Checkout</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>My Account</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Sign In / Sign Up</span>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.lvl2_li}>
                      <h6>CATEGORY LAYOUT</h6>
                      <ul className={NavStyle.lvl3_ul}>
                        <li className={NavStyle.lvl3_li}>
                          <span>Classic Category</span>
                        </li>
                        <li className={NavStyle.lvl3_li}>
                          <span>Offset Category</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>06</small>
                    <span>Pages</span>
                  </div>
                  <ul className={NavStyle.onelisted}>
                    <li className={NavStyle.onelisted_li}>
                      <span>About</span>
                      <div className={NavStyle.plus_icon}>
                        <Icon icon="ic:baseline-plus" />
                      </div>
                      <ul className={NavStyle.onelists_popup}>
                        <li>About Us</li>
                        <li>About Ver2</li>
                        <li>Hey, We're Ohio</li>
                        <li>Our Bureau</li>
                        <li>Our Studio</li>
                        <li>
                          About Creative <small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.onelisted_li}>
                      <span>Contact</span>
                      <div className={NavStyle.plus_icon}>
                        <Icon icon="ic:baseline-plus" />
                      </div>
                      <ul className={NavStyle.onelists_popup}>
                        <li>Contact: Agency</li>
                        <li>Contact: Blocks</li>
                        <li>Contact: Classic</li>
                        <li>Contact: Corporate</li>
                        <li>Contact: Simple</li>
                        <li>
                          Contact: Creative<small>NEW</small>
                        </li>
                      </ul>
                    </li>
                    <li className={NavStyle.onelisted_li}>
                      <span>Special Pages</span>
                      <div className={NavStyle.plus_icon}>
                        <Icon icon="ic:baseline-plus" />
                      </div>
                      <ul className={NavStyle.onelists_popup}>
                        <li>404 Page</li>
                        <li>Coming Soon</li>
                        <li>Search Results</li>
                        <li>Sign In / Sign Up</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.lvl1_li}>
                  <div className={NavStyle.li_container}>
                    <small>07</small>
                    <span>Help</span>
                  </div>
                  <ul className={NavStyle.onelisted}>
                    <li className={NavStyle.onelisted_li}>
                      <span>Documentation</span>
                    </li>
                    <li className={NavStyle.onelisted_li}>
                      <span>Help Center</span>
                    </li>
                    <li className={NavStyle.onelisted_li}>
                      <span>Submit a Ticket</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
            <div className={NavStyle.right_nav}>
              <button>Let's talk</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${NavStyle.back_color} modal fade`}
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`${NavStyle.modal_margin} modal-dialog`}>
          <div className={`${NavStyle.modal_body} modal-content h-100`}>
            <div className={`${NavStyle.modal_heading} modal-header`}>
              <button
                type="button"
                className={`${NavStyle.close_btn} btn-close btn-close-white`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={NavStyle.menu_list}>
              <ul className={NavStyle.visible_ul}>
                <li className={NavStyle.li_relative}>
                  <div className={NavStyle.page_name}>
                    <small>01</small>
                    <span>Pages</span>
                  </div>
                  <div className={NavStyle.plus_rotate}>
                    <Icon icon="ic:baseline-plus" />
                  </div>
                  <ul className={NavStyle.ul_absolute}>
                    <li className={NavStyle.li_hidden}>
                      <span>About</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Contact</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>404 Page</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Coming Soon</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Sign In / Sign Up</span>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.li_relative}>
                  <div className={NavStyle.page_name}>
                    <small>02</small>
                    <span>Projects</span>
                  </div>
                  <div className={NavStyle.plus_rotate}>
                    <Icon icon="ic:baseline-plus" />
                  </div>
                  <ul className={NavStyle.ul_absolute}>
                    <li className={NavStyle.li_hidden}>
                      <span>Grid View</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Slider</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Single Project</span>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.li_relative}>
                  <div className={NavStyle.page_name}>
                    <small>03</small>
                    <span>Blog</span>
                  </div>
                  <div className={NavStyle.plus_rotate}>
                    <Icon icon="ic:baseline-plus" />
                  </div>
                  <ul className={NavStyle.ul_absolute}>
                    <li className={NavStyle.li_hidden}>
                      <span>Grid View</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Single Post</span>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.li_relative}>
                  <div className={NavStyle.page_name}>
                    <small>04</small>
                    <span>Shop</span>
                  </div>
                  <div className={NavStyle.plus_rotate}>
                    <Icon icon="ic:baseline-plus" />
                  </div>
                  <ul className={NavStyle.ul_absolute}>
                    <li className={NavStyle.li_hidden}>
                      <span>Grid View</span>
                    </li>
                    <li className={NavStyle.li_hidden}>
                      <span>Single Product</span>
                    </li>
                  </ul>
                </li>
                <li className={NavStyle.li_relative}>
                  <div className={NavStyle.page_name}>
                    <small>05</small>
                    <span>Purchase</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="container-fluid mt-5 pt-5">
              <div className="row px-4">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 px-3">
                  <div className={NavStyle.nav_foot}>
                    <h5>Get In Touch</h5>
                    <p>
                      541 Melville Ave, Palo Alto, CA 94301,
                      <br /> ask@ohio.clbthemes.com
                      <br /> Ph: +1.831.705.5448
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 px-3">
                  <div className={NavStyle.nav_foot}>
                    <h5>Work Inquiries</h5>
                    <p>
                      work@ohio.clbthemes.com
                      <br />
                      Ph: +1.831.306.6725
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 px-3">
                  <div className={NavStyle.nav_foot}>
                    <div className={NavStyle.nav_social}>
                      <span>
                        <Icon icon="ri:facebook-fill" />
                      </span>
                      <span>
                        <Icon icon="ri:behance-fill" />
                      </span>
                      <span>
                        <Icon icon="mdi:youtube" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
