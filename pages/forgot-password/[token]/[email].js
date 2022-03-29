import React from "react";
import {
  AuthWrapper,
  InputGroup,
} from "../../../src/containers/UserAuth/style/user-auth.styled";
import Input from "../../../src/components/Inputs";
import Button from "../../../src/components/Buttons";
import Layout from "../../../src/containers/Layouts/HomeLayout";
import { useRouter } from "next/router";
import { AiOutlineEye } from "react-icons/ai";
import { authEndpoints } from "../../../src/routes/endpoints";
import Head from "next/head";
import { SuccessModal, ErrModal } from "../../../src/components/Modals";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [resetPasswordSuccess, setResetPasswordSuccess] = React.useState();
  const [resetPasswordError, setResetPasswordError] = React.useState();
  const router = useRouter();

  // obtaining the query parameters from
  // route path, and validating it to make sure that the
  // credentials are correct.
  const { query } = useRouter();
  const token = query.token;
  const email = query.email;

  // the function toggles the password state when the user
  // clicks on the icon
  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "POST",
        url: authEndpoints.resetPassword,
        data: {
          token,
          email,
          password: newPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResetPasswordSuccess(response.data.msg);
      setLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 4000);
      // router.push("/");
      setResetPasswordError("");
    } catch (error) {
      setLoading(false);
      setResetPasswordError(error.response.data.msg);
      setResetPasswordSuccess(null);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Reset your password | Admir Technologies</title>
      </Head>
      <Layout>
        {email && token ? (
          <AuthWrapper>
            {/* <ErrModal message={"make everybody just shut up joorrr!!!"} /> */}
            <SuccessModal message={"nawa oooooo!!!!"} />
            {resetPasswordSuccess ? (
              <SuccessModal message={resetPasswordSuccess} />
            ) : (
              ""
            )}
            {resetPasswordError ? (
              <ErrModal message={resetPasswordError} />
            ) : (
              ""
            )}
            <form onSubmit={resetPassword} className="reset-password">
              <h1>Reset Password</h1>
              <p>Please enter your new password</p>
              <InputGroup>
                <label htmlFor="password">Password*</label>
                <Input
                  name="password"
                  type={passwordVisibility ? "text" : "password"}
                  id="password"
                  placeholder="password should contain uppercase letter"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span className="show-pwd" onClick={handlePwdVisibility}>
                  <AiOutlineEye />
                </span>
                <p className="pwd-err"></p>
              </InputGroup>
              <Button
                fill="var(--primary)"
                name="reset-pwd-button"
                className="reset-pwd"
              >
                {!loading ? "Reset" : "Processing..."}
              </Button>
            </form>
          </AuthWrapper>
        ) : (
          <Lost />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default ResetPassword;

const Lost = () => {
  return (
    <h1
      style={{
        color: "var(--primary)",
        fontWeight: "600",
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      The page you are trying to get to is not available
    </h1>
  );
};
