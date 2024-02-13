import React, { Component } from "react";
import { Layout, Input, Button, Image } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import Banner from "./Banner.js";
import Slider from "./Slider";
import Counter from "./Counter";
import Statistics from "./Statistics";
import Faq from "./Faq";

const { Content } = Layout;

class Homepage extends Component {
  render() {
    return (
      <Content>
        <Banner/>
        <Slider/>
        <Counter/>
        <Statistics/>
        <Faq/>
      </Content>
    );
  }
}

export default Homepage;
