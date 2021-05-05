import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import "./layout.scss";

export default ({ children, title }) => {
  const links = [
    {
      route: "/",
      pageName: "Home"
    },
    {
      route: "/about",
      pageName: "About"
    },
    {
      route: "/blog",
      pageName: "Blog"
    }
  ];
  return (
    <React.Fragment>
      <Head>
        <title>NextJS App | {title}</title>
      </Head>
      <Navbar links={links} />
      <main>{children}</main>
      <footer>Here is the footer</footer>
    </React.Fragment>
  );
};
