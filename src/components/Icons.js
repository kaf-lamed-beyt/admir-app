import React from "react";
import { ReactSVG } from "react-svg";
import propTypes from "prop-types";

const Icon = ({ name }) => {
  return <ReactSVG src={`/icons/${name}.svg`} />;
};

export default Icon;

Icon.propTypes = {
  name: propTypes.string.isRequired,
};
