import React from "react";
import Script from "next/script";
import "../styles/preloader.css";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import "@/utils/nprogress";
import { appWithTranslation } from "next-i18next";
import AppHead from "../components/Head";
import TawkToChat from "../components/TawkToChat";
// import PostsProvider from "@/context/PostsProvider";

import "@/styles/scss/common/_wordpress.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppHead />
      {/* <PostsProvider> */}
      <Component {...pageProps} />
      {/* </PostsProvider> */}
      <TawkToChat />

      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/pace.js"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="/assets/js/lib/bootstrap.bundle.min.js"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="/assets/js/lib/mixitup.min.js"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="/assets/js/lib/wow.min.js"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="/assets/js/lib/html5shiv.min.js"
      ></Script>
      <Script strategy="afterInteractive" src="/assets/js/main.js"></Script>
    </>
  );
}

export default appWithTranslation(MyApp);
