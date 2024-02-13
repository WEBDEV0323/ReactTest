import React, { Component } from "react";
import { Layout, Input, Button, Image } from "antd";

import usage from "./Image/Usage.png";

const { Content } = Layout;

class Statistics extends Component {
  render() {
    return (
      <Content>
        <img
            src={usage}
            alt=""
            style={{ width: "100%", height: "100%" }}
        ></img>
      </Content>
    );
  }
}

export default Statistics;
