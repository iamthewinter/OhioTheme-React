import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import Standard from "./components/Standard/Standard";
import AppStyle from "../src/App.module.scss";
import { Icon } from "@iconify/react";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const [opacity, setOpacity] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY >= 460) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };
  window.addEventListener("scroll", changeOpacity);

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const Height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / Height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={AppStyle.main_scss}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/standard" element={<Standard />} />
        </Routes>
      </BrowserRouter>
      <motion.div
        className={AppStyle.cursor}
        variants={variants}
        animate="default"
      >
        <span></span>
      </motion.div>
      <ul className={AppStyle.fixed_left_tools}>
        <li>
          <a
            href="#"
            className={
              opacity
                ? `${AppStyle.scroll_top} ${AppStyle.scroll_top_appear}`
                : `${AppStyle.scroll_top}`
            }
          >
            <div className={AppStyle.scroll_top_bar}>
              <div
                className={AppStyle.scroll_progress_track}
                style={{ width: `${scrollTop}%` }}
              ></div>
            </div>
            <div className={AppStyle.scrolltotop_title}>Scroll to top</div>
          </a>
        </li>
        <li>
          <div className={AppStyle.mode_switcher}>
            <div className={AppStyle.dark_mode}>
              <div className={AppStyle.switcher_item}>
                <span className={AppStyle.caption}>Dark</span>
                <Icon icon="icon-park-outline:moon" rotate={1} />
              </div>
            </div>
            <div className={AppStyle.light_mode}>
              <div className={AppStyle.switcher_item}>
                <span className={AppStyle.caption}>Light</span>
                <Icon icon="ph:sun-bold" />
              </div>
            </div>
            <div className={AppStyle.switcher_toddler}>
              <div className={AppStyle.toddler_wrap}>
                <div className={`${AppStyle.toddler_item} ${AppStyle.dark}`}>
                  <div className={AppStyle.item_state}>
                    <span className={AppStyle.caption}>Dark</span>
                    <Icon icon="ph:sun-bold" />
                  </div>
                </div>
                <div className={`${AppStyle.toddler_item} ${AppStyle.light}`}>
                  <div className={AppStyle.item_state}>
                    <span className={AppStyle.caption}>Light</span>
                    <Icon icon="ph:sun-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul className={AppStyle.fixed_right_tools}>
        <li>
          <div className={AppStyle.social_bar}>
            <ul className={AppStyle.bar_holder}>
              <li>Follow Us</li>
              <li>&nbsp;—&nbsp;</li>
              <li>
                <strong>
                  <span>Fb.</span>
                  &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                  <span>Be.</span>
                  &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                  <span>Yt.</span>
                </strong>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <button className={AppStyle.search_btn}>
        <Icon icon="ic:round-search" />
      </button>
      <div className={AppStyle.store_button}>
        BUY ON
        <img
          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/EnvatoFull.svg"
          alt=""
        />
      </div>
      {/* <div
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
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default App;
