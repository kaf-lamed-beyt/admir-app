import React from "react";
import Input from "../../../components/Inputs";
import { InputGroup, AuthWrapper } from "../style/user-auth.styled";
import { Button } from "../../../components/Buttons";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { authEndpoints } from "../../../routes/endpoints";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthErrMsg, AuthSuccessMsg } from "../../../components/Modals";
import { AuthContext } from "../../../context/auth-context";
import { AiOutlineEye } from "react-icons/ai";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [signInSuccess, setSignInSuccess] = React.useState();
  const [signInError, setSignInError] = React.useState();
  const router = useRouter();
  const authContext = React.useContext(AuthContext);

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const validateSignIn = () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    let pwdErr = document.querySelector(".pwd-err");
    let email_err = document.querySelector(".email-err");
    let err_msg = document.querySelector("#err");

    if (!email.value && !password.value) {
      err_msg.innerHTML = "Email and Password cannot be empty.";
      email.focus();
      password.focus();
    } else if (!email.value) {
      email_err.innerHTML = "Email address cannot be empty";
      email.focus();
    } else if (password.value.length === 4) {
      pwdErr.innerHTML = "Password should be greater than four characters";
      password.focus();
    } else if (!password.value) {
      pwdErr.innerHTML = "Password cannot be empty";
      password.focus();
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      validateSignIn();

      const response = await axios({
        method: "POST",
        url: authEndpoints.login,
        data: {
          emailWorkerId: email,
          password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      authContext.setAuthState(response);
      setSignInSuccess(response.data.msg);
      setSignInError("");
      setTimeout(() => {
        router.push("/admin");
      }, 200);
    } catch (error) {
      setLoading(false);
      setSignInError(error.response.data.msg);
      setSignInSuccess("");
    }
  };

  React.useEffect(() => {
    router.prefetch("/admin");
  });

  return (
    <React.Fragment>
      <div className="signup-text">
        <Fade>
          <p>
            Don’t have an account? {""}{" "}
            <Link href="/signup">
              <span>Sign Up</span>
            </Link>
          </p>
        </Fade>
      </div>
      <AuthWrapper>
        {signInError ? <AuthErrMsg message={signInError} /> : ""}
        {signInSuccess ? <AuthSuccessMsg message={signInSuccess} /> : ""}
        <form className="signin-form" onSubmit={handleSignIn}>
          <Fade direction="up" cascade triggerOnce>
            <h1>Log In</h1>
            <InputGroup>
              <label htmlFor="email">Email address*</label>
              <Input
                name="email"
                type="email"
                id="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="email-err"></p>
            </InputGroup>
            <InputGroup>
              <label htmlFor="password">Password*</label>
              <Input
                name="password"
                type={passwordVisibility ? "text" : "password"}
                id="password"
                placeholder=" Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="show-pwd" onClick={handlePwdVisibility}>
                <AiOutlineEye />
              </span>
              <p className="pwd-err"></p>
              <Link href="/forgot-password">
                <p className="forgot-pwd">Forgot password?</p>
              </Link>
            </InputGroup>
            <Button
              fill="var(--primary)"
              name="signin-button"
              className="signin-btn"
              type="submit"
            >
              {loading ? "Logging In..." : "Log In"}
            </Button>
          </Fade>
        </form>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default SignIn;
