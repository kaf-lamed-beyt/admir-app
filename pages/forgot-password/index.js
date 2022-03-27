import React from "react";
import Head from "next/head";
import {
  AuthWrapper,
  InputGroup,
} from "../../src/containers/UserAuth/style/user-auth.styled";
import { useRouter } from "next/router";
import axios from "axios";
import { authEndpoints } from "../../src/routes/endpoints";
import Input from "../../src/components/Inputs";
import Button from "../../src/components/Buttons";
import Layout from "../../src/containers/Layouts/HomeLayout";
import { AuthErrMsg, AuthSuccessMsg } from "../../src/components/Modals";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const router = useRouter();

  // // a check to know if the user has entered their
  // // email address to receive a secure link to component that'll
  // // the form field which taks in their new password
  // const renderComponents = () => {
  //   React.useEffect(() => {
  //     {
  //       router.pathname === `/${email}` ? (
  //         <ResetPassword />
  //       ) : (
  //         <DefaultResetPassword />
  //       );
  //     }
  //   }, []);
  // };

  return (
    <>
      <Head>
        <title>Reset Password &mdash; Admir Technologies</title>
      </Head>
      <DefaultResetPassword />
    </>
  );
};

export default ForgotPasswordPage;

// default component that gets rendered if the condition in the
// useEffect is false
export const DefaultResetPassword = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [resetSuccess, setResestSuccess] = React.useState();
  const [resetError, setResetError] = React.useState();
  //   const router = useRouter()

  const handleForgot = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "POST",
        url: authEndpoints.recover,
        data: {
          emailWorkerId: email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      setResestSuccess(response.data.msg);
      setResetError("");
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setResetError(data.msg);
      setResestSuccess(null);
    }
  };

  return (
    <Layout>
      <AuthWrapper>
        {resetSuccess ? <AuthSuccessMsg message={resetSuccess} /> : ""}
        {resetError ? <AuthErrMsg message={resetError} /> : ""}
        <form onSubmit={handleForgot} className="reset-password">
          <h1>Forgot Password</h1>
          <p>
            Please enter your email address below, so we can send a secure link
            to reset your password.
          </p>
          <InputGroup>
            <label htmlFor="email">Email address</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <Button
            fill="var(--primary)"
            name="reset-pwd-button"
            className="reset-pwd"
          >
            {!loading ? "Send" : "Sending..."}
          </Button>
          {/* <Link href="/signin">
            <p className="forgot-pwd" style={{ textAlign: "center" }}></p>
          </Link> */}
        </form>
      </AuthWrapper>
    </Layout>
  );
};

// this component gets rendered if the condition in the
// useEffect hook is true
