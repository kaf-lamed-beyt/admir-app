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
// import { publicRoute } from "../../../utils/public-fetch";
import { userEndpoints } from "../../../routes/endpoints";
import axios from "axios";

const SignUp = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [role, setRole] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [signUpSuccess, setSignUpSuccess] = React.useState();
  const [signUpError, setSignUpError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  // const nextForm = () => {
  //   setFormStep((cur) => cur + 1);
  // };

  const prevForm = () => {
    setFormStep((cur) => cur - 1);
  };

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleSignUp = async (e, fullname, email, password, country, role) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(
        userEndpoints.createUser,
        fullname,
        email,
        password,
        country,
        role
      );
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <AuthSteps>
        <Fade>
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
        <form className="signup-form">
          <p>{signUpError}</p>
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
                    id="fullname"
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
                    id="email"
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
                    id="password"
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
          {formStep === 1 && (
            <Contact
              phoneNumber={phoneNumber}
              country={country}
              countryChange={(country) => setCountry(country)}
              phoneChange={setPhoneNumber}
            />
          )}
          {formStep === 2 && <Role staffRole={role} roleChange={setRole} />}
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
