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

const ResetPassword = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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
        url: authEndpoints.forgot,
        data: {
          emailWorkerId: email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      // setResestSuccess(response.data.msg);
      // setResetError("");
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      console.log(data.msg);
      // setResestSuccess(null);
    }
  };

  return (
    <Layout>
      {!email || !token ? (
        <Lost />
      ) : (
        <AuthWrapper>
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
              <p className="forgot-pwd">Forgot password?</p>
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
      )}
    </Layout>
  );
};

export default ResetPassword;

const Lost = () => {
  return (
    <h1 style={{ color: "var(--primary)" }}>
      The page you're trying to get to isn't available
    </h1>
  );
};
