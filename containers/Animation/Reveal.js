"use client"

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../../app/page.module.css";

export const Reveal = ({ children, customClass }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(process.env.VIDEO_URL)
    if(isInView) {
        mainControls.start("visible")
    } else {
        mainControls.start("hidden")
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        className={ customClass ? `${styles[customClass]}` : null}
        transition={{ duration: 0.3, delay: 0.2}}
        style={{display: "inline-block"}}
      >
        {children}
      </motion.div>
    </div>
  );
};
