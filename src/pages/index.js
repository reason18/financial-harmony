import React from "react";
// import { Link } from "gatsby";

import { Layout, Image, SEO } from "../components";
import { Promo, OutServices, AboutUs } from "../components/_sections";

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Promo />
    <OutServices />
    <AboutUs />
  </Layout>
);

export default IndexPage;
