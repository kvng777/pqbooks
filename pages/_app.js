import React from "react";
import NextNProgress from "nextjs-progressbar";

import { Layout } from "../components";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
