import React from "react";
import Head from "next/head";
import HomeLayout from "../../src/containers/Layouts/HomeLayout";
import { routes } from "../../src/routes";
const { register: SignUp } = routes;

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
