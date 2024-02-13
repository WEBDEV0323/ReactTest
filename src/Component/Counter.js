import React, { Component } from "react";
import { Layout, Input, Button, Image } from "antd";

import infos from "./Image/Infos.png";

const { Content } = Layout;

class Counter extends Component {
  render() {
    return (
      <Content>
        <img
            src={infos}
            alt=""
            style={{ width: "100%", height: "100%" }}
        ></img>
      </Content>
    );
  }
}

export default Counter;
