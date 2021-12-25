import React from "react";
import { InputGroup, AuthWrapper } from "../style/user-auth.styled";
import { IoIosArrowBack } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import Input from "../../../components/Inputs";
import Link from "next/link";
import { AuthSteps } from "./style/signup.styled";
import Contact from "./contact";
import Role from "./staff-role";
import { SignUpButtons } from "../../../components/Buttons";
import { MAX_FORM_STEPS } from "../../../utils/common";
import { FormInfo } from "../../../components/FormInfo";

const SignUp = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const nextForm = () => {
    setFormStep((currentStep) => currentStep + 1);
  };

  const prevForm = () => {
    setFormStep((currentStep) => currentStep - 1);
  };

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
          <div className="auth-controller" onClick={prevForm}>
            <span>
              <IoIosArrowBack />
            </span>
            <p>Back</p>
          </div>
          {formStep < MAX_FORM_STEPS && (
            <div className="info">
              <p className="text-disabled">
                Step {`${formStep + 1}/${MAX_FORM_STEPS}`}{" "}
              </p>
              <FormInfo step={formStep} />
            </div>
          )}
        </Fade>
      </AuthSteps>
      <AuthWrapper>
        <form onSubmit={handleSignUp} className="signup-form">
          {formStep === 0 && (
            <>
              <Fade direction="up" cascade triggerOnce>
                <h1>Register individual account</h1>
                <p className="auth-instruction">
                  For the purpose of industry regulation, your details are
                  required.
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
              </Fade>
            </>
          )}
          {formStep === 1 && <Contact />}
          {formStep === 2 && <Role />}
          <SignUpButtons step={formStep} onClick={nextForm} />
        </form>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default SignUp;
