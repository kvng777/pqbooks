import React from "react";
import Head from "next/head";
import Navbar from "./NavBar";
import Footer from "./Footer";
import BannerStats from "./BannerStats";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>PQ's Books</title>
      </Head>
      <header>
        <Navbar />
        {/* <BannerStats /> */}
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
