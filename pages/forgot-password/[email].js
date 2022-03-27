import React from "react";
import {
  AuthWrapper,
  InputGroup,
} from "../../src/containers/UserAuth/style/user-auth.styled";
import Input from "../../src/components/Inputs";
import Button from "../../src/components/Buttons";
import Layout from "../../src/containers/Layouts/HomeLayout";

const ResetPassword = () => {
  const [token, setToken] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  return (
    <Layout>
      <AuthWrapper>
        <form className="reset-password">
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
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span classNameName="show-pwd" onClick={handlePwdVisibility}>
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
            {!loading ? "Reset" : "Processing..."}
          </Button>
        </form>
      </AuthWrapper>
    </Layout>
  );
};

export default ResetPassword;
