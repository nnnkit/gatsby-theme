import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import metadata from "./../hooks/siteMetadata";

const Layout = ({ children }) => {
  const { title, description } = metadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        /> */}
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Layout;
