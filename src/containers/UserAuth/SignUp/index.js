import React from "react";
import { InputGroup, AuthWrapper } from "../style/user-auth.styled";
import { Fade } from "react-awesome-reveal";
import Input from "../../../components/Inputs";
import { AuthSteps } from "./style/signup.styled";
import Contact from "./contact";
import Role from "./staff-role";
import { SignUpButtons } from "../../../components/Buttons";
import { MAX_FORM_STEPS } from "../../../utils/common";
import { AuthController, FormInfo } from "../../../components/FormInfo";
import { userEndpoints } from "../../../routes/endpoints";
import axios from "axios";
import router from "next/router";
import { AuthErrMsg, AuthSuccessMsg } from "../../../components/Modals";
import { AuthContext } from "../../../context/auth-context";
import { AiOutlineEye } from 'react-icons/ai';

const SignUp = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [fullName, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [workerId, setWorkerId] = React.useState("");
  const [role, setRole] = React.useState();
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [signUpSuccess, setSignUpSuccess] = React.useState();
  const [signUpError, setSignUpError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const authContext = React.useContext(AuthContext);

  // const nextForm = () => {
  //   setFormStep((cur) => cur + 1);
  // };

  const prevForm = () => {
    setFormStep((cur) => cur - 1);
  };

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const validateSignUp = () => {
    const fullName = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    let pwdErr = document.querySelector(".pwd-err");
    let email_err = document.querySelector(".email-err");
    let nameErr = document.querySelector(".name-err");
    let err_msg = document.querySelector("#err");

    if (!email && !password && !fullName) {
      err_msg.innerHTML = "Your fullname, email and password cannot be empty.";
    } else if (!fullName) {
      nameErr.innerHTML = "Fullname cannot be empty.";
    } else if (!email) {
      email_err.innerHTML = "Email address cannot be empty";
    } else if (password.length === 4) {
      pwdErr.innerHTML = "Password should be greater than four characters";
    } else if (!password) {
      pwdErr.innerHTML = "Password cannot be empty";
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // validateSignUp();

      const response = await axios({
        method: "POST",
        url: userEndpoints.createUser,
        data: {
          fullName,
          email,
          password,
          phoneNumber,
          workerId,
          role: role.toString(),
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      authContext.setAuthState(data);
      setSignUpSuccess(response.data.msg);
      setSignUpError("");
      setTimeout(() => {
        router.push("/login");
      }, 400);
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setSignUpError(data.msg);
      setSignUpSuccess(null);
    }
  };

  return (
    <React.Fragment>
      <AuthSteps>
        <Fade triggerOnce>
          <AuthController steps={formStep} prevForm={prevForm} />
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
        {signUpSuccess ? <AuthSuccessMsg message={signUpSuccess} /> : ""}
        {signUpError ? <AuthErrMsg message={signUpError} /> : ""}
        <form className="signup-form" onSubmit={handleSignUp}>
          {formStep === 0 && (
            <>
              <Fade direction="up" cascade triggerOnce>
                <h1>Register individual account</h1>
                <p className="auth-instruction">
                  For the purpose of industry regulation, your details are
                  required.
                </p>
                <p id="err"></p>
                <InputGroup>
                  <label htmlFor="fullname">Your fullname*</label>
                  <Input
                    name="fullname"
                    id="fullname"
                    type="text"
                    placeholder="Tom Cruise"
                    value={fullName}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <p className="name-err"></p>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">Email address*</label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="email-err"></p>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="password">Create password*</label>
                  <Input
                    name="password"
                    id="password"
                    type={passwordVisibility ? "text" : "password"}
                    placeholder="Password should contain uppercaseletter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="show-pwd" onClick={handlePwdVisibility}>
                  <AiOutlineEye />
                  </span>
                  <p className="pwd-err"></p>
                </InputGroup>
              </Fade>
            </>
          )}
          {formStep === 1 && (
            <Contact
              phoneNumber={phoneNumber}
              phoneChange={setPhoneNumber}
              workerId={workerId}
              handleWorkerId={(e) => setWorkerId(e.target.value)}
            />
          )}
          {formStep === 2 && (
            <Role
              staffRole={role}
              roleChange={(role) => setRole(role.map((role) => role.value))}
            />
          )}
          {formStep === 3 && <h3>congrats ${fullname}</h3>}

          <SignUpButtons
            step={formStep}
            onClick={() => setFormStep((cur) => cur + 1)}
            submit={handleSignUp}
            text={loading ? "Registering..." : `Register`}
          />
        </form>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default SignUp;
