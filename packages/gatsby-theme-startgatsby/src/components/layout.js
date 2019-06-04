import React from "react";
import Helmet from "react-helmet";
import metadata from "../hooks/siteMetadata";
import Header from "./header";
import "../utils/navScript";
import Footer from "./footer";

const Layout = ({ children }) => {
  const { title, description } = metadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
