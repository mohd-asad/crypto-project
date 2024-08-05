import React from "react";
import "./styles.css";
import Button from "../Common/Button";
import phone from "../../assets/phone 1.png"
import gradient from "../../assets/gradient 1.png"

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="left-component">
        <h1 className="track-crypto"> Track Crypto</h1>
        <h1 className="real-time"> Real Time.</h1>
        <p className="text">
          {" "}
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="btn-flex">
          <Button text={"Dashboard"}></Button>
          <Button text={"Share"} outLined={true}></Button>
        </div>
      </div>
      <div className="phone-component">
        <img src={phone} className="phone"></img>
        <img src={gradient} className="gradient"></img>
      </div>
    </div>
  );
}

export default MainComponent;
