import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Icon from "../components/Icons";
import Link from "next/link";

const Btn = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 6px;
  outline: none;
  border: 1px solid var(--grey);
  background: #fff;

  :hover {
    cursor: pointer;
  }
`;

export const Button = ({
  fill,
  name,
  children,
  height,
  width,
  text_color,
  radius,
  ...props
}) => {
  return (
    <Btn
      name={name}
      style={{
        backgroundColor: fill,
        height: height,
        width: width,
        color: text_color,
        borderRadius: radius,
      }}
      {...props}
    >
      {children}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  fill: propTypes.string,
  children: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
  height: propTypes.string,
  width: propTypes.string,
};

export const SignUpButtons = ({ step, submit, onClick, text, ...props }) => {
  if (step > 2) {
    return undefined;
  } else if (step === 2) {
    return (
      <>
        <Button
          name="register-button"
          className="staff-contact-btn"
          fill="var(--primary)"
          type="button"
          onClick={submit}
          {...props}
        >
          {text}
        </Button>
        <div className="flex-secure">
          <span>
            <Icon name="lock" />
          </span>
          <p>Your info is safely secured</p>
        </div>
      </>
    );
  } else if (step === 0) {
    return (
      <>
        <Button
          name="register-button"
          type="button"
          onClick={onClick}
          fill="var(--primary)"
        >
          Save & Continue
        </Button>
        <p className="have-account">
          Already have an account?{""}{" "}
          <Link href="/">
            <span>Sign In</span>
          </Link>
        </p>
      </>
    );
  } else {
    return (
      <>
        <Button
          name="register-button"
          className="staff-contact-btn"
          fill="var(--primary)"
          type="button"
          onClick={onClick}
        >
          Save & Continue
        </Button>
        <div className="flex-secure">
          <span>
            <Icon name="lock" />
          </span>
          <p>Your info is safely secured</p>
        </div>
      </>
    );
  }
};
