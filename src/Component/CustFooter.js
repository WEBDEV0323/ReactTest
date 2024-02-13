import React, { Component } from "react";
import { Layout, Input } from "antd";

import footer from "./Image/Footer.png";

import "./style.css";

const { Footer } = Layout;

class CustFooter extends Component {
  render() {
    return (
      <Footer style={{padding:0}}>
        <img
            src={footer}
            alt=""
            style={{ width: "100%", height: "100%" }}
        ></img>
      </Footer>
    );
  }
}

export default CustFooter;
