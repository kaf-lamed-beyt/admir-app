import React from "react";
import { InputGroup, AuthWrapper } from "../style/user-auth.styled";
import { IoIosArrowBack } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import Input from "../../../components/Inputs";
import Button from "../../../components/Buttons";
import Link from "next/link";
import { AuthForm, AuthSteps } from "./style/signup.styled";

const SignUp = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <AuthSteps>
        <Fade>
          <div className="auth-controller">
            <span>
              <IoIosArrowBack />
            </span>
            <Link href="/">
              <p>Back</p>
            </Link>
          </div>
          <div className="info">
            <p className="text-disabled">Step 01/03 </p>
            <p className="personal">Personal Info</p>
          </div>
        </Fade>
      </AuthSteps>
      <AuthWrapper>
        <AuthForm onSubmit={handleSignUp}>
          <Fade direction="up" cascade triggerOnce>
            <h1>Register individual account</h1>
            <p className="auth-instruction">
              For the purpose of industry regulation, your details are required.
            </p>
            <InputGroup>
              <label htmlFor="fullname">Your fullname*</label>
              <Input
                name="fullname"
                type="text"
                placeholder="Tom Cruise"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </InputGroup>
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
              <label htmlFor="password">Create password*</label>
              <Input
                name="password"
                type={passwordVisibility ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="show-pwd" onClick={handlePwdVisibility}>
                show
              </span>
            </InputGroup>
            <Button name="register-button" fill="var(--primary)">
              <Link href="/signup/contact-info">Register Account</Link>
            </Button>
            <p className="have-account">
              Already have an account?{""}{" "}
              <Link href="/">
                <span>Sign In</span>
              </Link>
            </p>
          </Fade>
        </AuthForm>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default SignUp;
