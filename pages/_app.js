import "../styles/globals.scss";
import "../styles/variables.css";
import Head from "next/head";
import React from "react";
import { AuthProvider } from "../src/context/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="rgba(215, 87, 17, 1)" />
        <link rel="icon" type="image/ico" href="" />
        <link
          rel="preload"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          crossOrigin
        />
        <link
          rel="preload"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Gayathri:wght@100;400;700&family=Source+Sans+3:wght@200;300;400;500;600;700;800;900&display=swap"
          crossOrigin
        />
        <meta
          name="description"
          content="Geotechnical solutions in civil Engineering."
        />
        <meta property="og:title" content="Admir Tracker App" key="ogtitle" />
        <meta
          property="og:description"
          content="Geotechnical solutions in civil Engineering."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content={`https://admirapp.netlify.app/img/admir-og-img.png`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://admirapp.netlify.app"
          key="ogsitename"
        />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </React.Fragment>
  );
}

export default MyApp;
