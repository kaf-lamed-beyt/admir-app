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
import dynamic from "next/dynamic";

const Status = dynamic(() => import("status-modal").then((mod) => mod.Status), {
  ssr: false,
});

const ForgotPasswordPage = () => {
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
          email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResestSuccess(response.data.msg);
      setLoading(false);
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
        {resetError && <Status className="status-modal" message={resetError} />}
        {resetSuccess && (
          <Status className="status-modal" message={resetSuccess} />
        )}
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
