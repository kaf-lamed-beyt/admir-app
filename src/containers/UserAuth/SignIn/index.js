import React from "react";
import Input from "../../../components/Inputs";
import { InputGroup, AuthWrapper } from "../style/user-auth.styled";
import { Button } from "../../../components/Buttons";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { authEndpoints } from "../../../routes/endpoints";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/router";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

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
    } catch (error) {
      console.log(error.msg);
    }

    router.push("/dashboard");
  };

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
        <form className="signin-form" onSubmit={handleSignIn}>
          <Fade direction="up" cascade triggerOnce>
            <h1>Log In</h1>
            <p>Welcome!</p>
            <InputGroup>
              <label htmlFor="email">Email address*</label>
              <Input
                name="email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="password">Password*</label>
              <Input
                name="password"
                type={passwordVisibility ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="show-pwd" onClick={handlePwdVisibility}>
                show
              </span>
              <p className="forgot-pwd">Forgot password?</p>
            </InputGroup>
            <Button
              fill="var(--primary)"
              name="signin-button"
              className="signin-btn"
            >
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </Fade>
        </form>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default SignIn;
