import React from "react";
import SignUp from "../../src/containers/UserAuth/SignUp";
import Head from "next/head";
import HomeLayout from "../../src/containers/Layouts/HomeLayout";

const Signup = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign Up | Admir Technologies</title>
      </Head>
      <HomeLayout>
        <SignUp />
      </HomeLayout>
    </React.Fragment>
  );
};

export default Signup;
