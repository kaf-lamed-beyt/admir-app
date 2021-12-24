import React from "react";
import Contact from "../../src/containers/UserAuth/SignUp/contact";
import Head from "next/head";
import HomeLayout from "../../src/containers/Layouts/HomeLayout";

const Signup = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Complete Your Profile | Admir Technologies</title>
      </Head>
      <HomeLayout>
        <Contact />
      </HomeLayout>
    </React.Fragment>
  );
};

export default Signup;
