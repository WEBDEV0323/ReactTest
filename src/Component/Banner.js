import React, { Component } from "react";
import { Layout, Input, Button, Image } from "antd";

import background1 from "./Image/background 1.png";

const { Content } = Layout;

class Banner extends Component {
  render() {
    return (
      <Content>
        <img
            src={background1}
            alt=""
            style={{ width: "100%", height: "100%" }}
        ></img>
      </Content>
    );
  }
}

export default Banner;
