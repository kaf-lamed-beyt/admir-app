import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

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

const Button = ({ fill, name, children, height, width, text_color }) => {
  return (
    <Btn
      name={name}
      style={{
        backgroundColor: fill,
        height: height,
        width: width,
        color: text_color,
      }}
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
