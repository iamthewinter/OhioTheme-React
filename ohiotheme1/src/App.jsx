import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home/Home";
import AppStyle from "../src/App.module.scss";

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
  return (
    <main className={AppStyle.main_scss}>
      <Home />
      <motion.div
        className={AppStyle.cursor}
        variants={variants}
        animate="default"
      >
        <span></span>
      </motion.div>
    </main>
  );
}

export default App;
