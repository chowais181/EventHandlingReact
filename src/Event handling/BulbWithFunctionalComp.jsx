import React, { useState } from "react";
import "../App.css";
import bulbon from "../Pictures/pic_bulbon.gif";
import bulboff from "../Pictures/pic_bulboff.gif";

export default function Bulb() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <div className="center">
      <h1>With functional Component</h1>
      <img src={isToggleOn ? bulbon : bulboff} alt="bulb off" />
      <br />
      <br />
      <button
        onClick={handleClick}
        className="btnstyle"
        style={{
          backgroundColor: isToggleOn ? "black" : "white",
          color: isToggleOn ? "white" : "black",
        }}
      >
        {isToggleOn ? "off" : "on"}
      </button>
    </div>
  );
}
