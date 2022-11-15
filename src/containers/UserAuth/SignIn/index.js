import React from "react";
import Input from "../../../components/Inputs";
import { InputGroup, AuthWrapper } from "../style/user-auth.styled";
import { Button } from "../../../components/Buttons";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { authEndpoints } from "../../../routes/endpoints";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth-context";
import { AiOutlineEye } from "react-icons/ai";
import dynamic from "next/dynamic";

const Status = dynamic(() => import("status-modal").then((mod) => mod.Status), {
  ssr: false,
});

// fixes the 'self is not defined' ref error
// // import { Status } from "status-modal"; // throws "ReferenceError: self is not defined"

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [signInSuccess, setSignInSuccess] = React.useState("");
  const [signInError, setSignInError] = React.useState("");
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
        authContext.isAdmin()
          ? router.push("/dashboard")
          : router.push("/admin");
      }, 200);
    } catch (error) {
      const message = error.response.data.msg;
      console.log(message);
      setLoading(false);
      setSignInError(message);
      setSignInSuccess("");
    }
  };

  React.useEffect(() => {
    router.prefetch("/dashboard");
  });

  return (
    <React.Fragment>
      <div className="signup-text">
        <Fade triggerOnce>
          <p>
            Don’t have an account? {""}
            <Link href="/signup" passHref>
              <span>Sign Up</span>
            </Link>
          </p>
        </Fade>
      </div>
      {signInSuccess ? (
        <Status className="status-modal" message={signInSuccess} />
      ) : null}
      {signInError ? (
        <Status
          className="status-modal"
          message={signInSuccess}
          status="error"
        />
      ) : null}
      <AuthWrapper>
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
              <span className="show-pwd" onClick={handlePwdVisibility}>
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
