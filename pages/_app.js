import "../styles/globals.scss";
import "../styles/variables.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import React from "react";
import { AuthProvider } from "../src/context/auth-context";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="rgba(215, 87, 17, 1)" />
        <link rel="icon" type="image/ico" href="" />
        <meta
          name="description"
          content="Geotechnical solutions in civil Engineering."
        />
        <meta property="og:title" content="KWASU50's Blog" key="ogtitle" />
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
