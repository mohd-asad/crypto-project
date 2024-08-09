import React from "react";
import "./styles.css";
import Button from "../Common/Button";
import phone from "../../assets/phone 1.png";
import gradient from "../../assets/gradient 1.png";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="left-component">
        <motion.h1
          className="track-crypto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {" "}
          Real Time.
        </motion.h1>
        <motion.p
          className="text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {" "}
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button text={"Dashboard"}></Button>
          <Button text={"Share"} outLined={true}></Button>
        </motion.div>
      </div>
      <div className="phone-component">
        <motion.img
          src={phone}
          className="phone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        ></motion.img>
        <img src={gradient} className="gradient"></img>
      </div>
    </div>
  );
}

export default MainComponent;
