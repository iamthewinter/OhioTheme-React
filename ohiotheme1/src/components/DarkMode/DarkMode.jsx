import React from "react";
import "../DarkMode/DarkMode.scss";
import { Icon } from "@iconify/react";
const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };
  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkmode"
      onClick={(e) => switchTheme(e)}
    >
      <li>
        <div className="mode_switcher">
          <div className="dark_mode">
            <div className="switcher_item">
              <span className="caption">Dark</span>
              <Icon icon="icon-park-outline:moon" rotate={1} />
            </div>
          </div>
          <div className="light_mode">
            <div className="switcher_item">
              <span className="caption">Light</span>
              <Icon icon="ph:sun-bold" />
            </div>
          </div>
          <div className="switcher_toddler">
            <div className="toddler_wrap">
              <div className="toddler_item darky">
                <div className="item_state">
                  <span className="caption">Dark</span>
                  <Icon icon="ph:sun-bold" />
                </div>
              </div>
              <div className="toddler_item light">
                <div className="item_state">
                  <span className="caption">Light</span>
                  <Icon icon="ph:sun-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </button>
  );
};

export default DarkMode;
