import React from "react";
import "../App.css";
import bulbon from "../Pictures/pic_bulbon.gif";
import bulboff from "../Pictures/pic_bulboff.gif";

class Bulb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      //its mean we get the previous state and if it is true convert to false and if false then convert to true
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {

    return (
      <div className="center">
        <h1>With class Component</h1>
        <img src={this.state.isToggleOn ? bulbon : bulboff} alt="bulb off" />
        <br />
        <br />
        <button
          onClick={this.handleClick}
          className="btnstyle"
          style={{
            backgroundColor: this.state.isToggleOn ? "black" : "white",
            color: this.state.isToggleOn ? "white" : "black",
          }}
        >
          {this.state.isToggleOn ? "off" : "on"}
        </button>
      </div>
    );
  }
}

export default Bulb;
