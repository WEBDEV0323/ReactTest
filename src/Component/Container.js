import React, { Component } from "react";
import { Layout, Input } from "antd";

import CustHeader from "./CustHeader";
import CustFooter from "./CustFooter";
import Homepage from "./Homepage";

import "./style.css";

const { Content, Footer } = Layout;

class Container extends Component {
  render() {
    return (
      <Layout>
        <CustHeader />
        <Homepage/>
        <CustFooter />
      </Layout>
    );
  }
}

export default Container;
