import React from "react";
import Role from "../../src/containers/UserAuth/SignUp/staff-role";
import Head from "next/head";
import HomeLayout from "../../src/containers/Layouts/HomeLayout";

const Signup = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Complete Your Profile | Admir Technologies</title>
      </Head>
      <HomeLayout>
        <Role />
      </HomeLayout>
    </React.Fragment>
  );
};

export default Signup;
