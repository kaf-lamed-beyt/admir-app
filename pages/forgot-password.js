import React from "react";
import Head from "next/head";
import {
  AuthWrapper,
  InputGroup,
} from "../src/containers/UserAuth/style/user-auth.styled";
import { useRouter } from "next/router";
import axios from "axios";
import { authEndpoints } from "../src/routes/endpoints";
import Input from "../src/components/Inputs";
import Button from "../src/components/Buttons";
import Layout from "../src/containers/Layouts/HomeLayout";
import { AuthErrMsg, AuthSuccessMsg } from "../src/components/Modals";

const ForgotPasswordPage = () => {
  const router = useRouter();

  // a check to know if the user has entered their
  // email address to receive a secure link to component that'll
  // the form field which taks in their new password
  //   const renderComponents = () => {
  //     React.useEffect(() => {
  //       {
  //         router.pathname ===
  //         `http://localhost:3000/forgot-password/token=${token}/email=${email}` ? (
  //           <ResetPassword />
  //         ) : (
  //           <DefaultResetPassword />
  //         );
  //       }
  //     }, []);
  //   };

  return (
    <>
      <Head>
        <title>Reset Password &mdash; Admir Technologies</title>
      </Head>
      {router.pathname ===
      `http://localhost:3000/forgot-password/token/email` ? (
        <ResetPassword />
      ) : (
        <DefaultResetPassword />
      )}
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
        </form>
      </AuthWrapper>
    </Layout>
  );
};

// this component gets rendered if the condition in the
// useEffect hook is true
export const ResetPassword = () => {
  const [token, setToken] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleForgot} className="reset-password">
        <h1>Reset Password</h1>
        <p>Please enter your new password</p>
        <InputGroup>
          <label htmlFor="email">Email address</label>
          <InputGroup>
            <label htmlFor="password">Password*</label>
            <Input
              name="password"
              type={passwordVisibility ? "text" : "password"}
              id="password"
              placeholder="password should contain uppercase letter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span class="show-pwd" onClick={handlePwdVisibility}>
              show
            </span>
            <p className="pwd-err"></p>
            <p className="forgot-pwd">Forgot password?</p>
          </InputGroup>
        </InputGroup>
        <Button
          fill="var(--primary)"
          name="reset-pwd-button"
          className="reset-pwd"
        >
          {!loading ? "Save" : "Saving..."}
        </Button>
      </form>
    </AuthWrapper>
  );
};
