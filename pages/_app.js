import "../styles/globals.scss";
import "../styles/variables.css";
import "antd/dist/antd.css";
import Head from "next/head";
import React from "react";

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
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
