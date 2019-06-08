import React from "react";
// import { Link } from "gatsby";

import { Layout, Image, SEO } from "../components";
import { Promo, OutServices, AboutUs, OutClients, Advantages, Garanties, BecameAClient } from "../components/_sections";
import "../assets/fonts/fonts.css";

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Promo />
    <AboutUs />
    <OutClients />
    <OutServices />
    <Advantages />
    <Garanties />
    <BecameAClient />
  </Layout>
);

export default IndexPage;
