import React from "react";
import Head from "next/head";
import HomeLayout from "../src/containers/Layouts/HomeLayout";
import SignIn from "../src/containers/UserAuth/SignIn";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Admir Technologies</title>
      </Head>
      <HomeLayout>
        <SignIn />
      </HomeLayout>
    </React.Fragment>
  );
}
