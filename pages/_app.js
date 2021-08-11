import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      delay: 100,
    });
  });
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Montserrat:wght@400;600;700&family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
