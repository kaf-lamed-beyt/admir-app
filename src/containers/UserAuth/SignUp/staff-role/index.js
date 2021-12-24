import React from "react";
import { InputGroup, AuthWrapper } from "../../style/user-auth.styled";
import { IoIosArrowBack } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import Button from "../../../../components/Buttons";
import Link from "next/link";
import { AuthForm, AuthSteps } from "../../SignUp/style/signup.styled";
import Select from "react-dropdown-select";
import Icon from "../../../../components/Icons";

const Contact = () => {
  const [value, setValue] = React.useState("");

  const options = [
    { label: "Field Worker", value: "field worker" },
    { label: "Manager", value: "manager" },
    { label: "Assistant Manager", value: "assistant manager" },
  ];

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
            <Link href="/signup/contact-info">
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
          <Fade cascade triggerOnce>
            <h1>Complete Your profile!</h1>
            <p className="auth-instruction">
              For the purpose of industry regulation, your details are required.
            </p>
            <InputGroup>
              <label htmlFor="fullname">Role</label>
              <Select
                value={value}
                options={options}
                placeholder="Please select your role"
                required={true}
                dropdownPosition="top"
                className="staff-country"
                color="var(--primary)"
                onChange={(value) => setValue(value)}
              />
            </InputGroup>
            <Button
              name="register-button"
              className="staff-contact-btn"
              fill="var(--primary)"
            >
              <Link href="/dashboard">Register</Link>
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
