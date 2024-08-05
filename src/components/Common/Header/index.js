import React from "react";
import "./styles.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="#">
          <Button
            text={"Dashboard"}
            outLined={false}
            onClick={() => console.log("Btn Clicked")}
          />
        </a>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
      </div>
    </div>
  );
}

export default Header;
