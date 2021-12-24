import React from "react";
import { InputGroup, AuthWrapper } from "../../style/user-auth.styled";
import { IoIosArrowBack } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import Button from "../../../../components/Buttons";
import Link from "next/link";
import { AuthForm, AuthSteps } from "../../SignUp/style/signup.styled";
import Select from "react-dropdown-select";
import { CountryPhoneInput } from "../../../../components/Inputs";
import "react-phone-number-input/style.css";
import { countries } from "../../../../utils/countries";
import Icon from "../../../../components/Icons";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [value, setValue] = React.useState("");

  const changeHandler = (value) => {
    setValue(value);
    console.log(`Option selected:`, value);
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
            <Link href="/signup">
              <p>Back</p>
            </Link>
          </div>
          <div className="info">
            <p className="text-disabled">Step 02/03 </p>
            <p className="personal">Residency Info</p>
          </div>
        </Fade>
      </AuthSteps>
      <AuthWrapper>
        <AuthForm onSubmit={handleSignUp}>
          <Fade triggerOnce>
            <h1>Complete Your profile!</h1>
            <p className="auth-instruction">
              For the purpose of industry regulation, your details are required.
            </p>
            <InputGroup>
              <label htmlFor="email">Phone Number</label>
              <CountryPhoneInput
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="number"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="fullname">Country</label>
              <Select
                value={value}
                options={countries}
                placeholder="Please select your country"
                required={true}
                dropdownPosition="top"
                className="staff-country"
                onChange={changeHandler}
              />
            </InputGroup>
            <Button
              name="register-button"
              className="staff-contact-btn"
              fill="var(--primary)"
            >
              <Link href="/signup/role">Save & Continue</Link>
            </Button>
            <div className="flex-secure">
              <span>
                <Icon name="lock" />
              </span>
              <p className="have-account">Your info is safely secured</p>
            </div>
          </Fade>
        </AuthForm>
      </AuthWrapper>
    </React.Fragment>
  );
};

export default Contact;
