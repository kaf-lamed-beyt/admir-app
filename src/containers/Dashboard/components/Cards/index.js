import React from "react";
import propTypes from "prop-types";
import { CardWrapper } from "./style/cards.styled";

const Cards = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((items) => {
        return (
          <CardWrapper key={items._id}>
            <p className="title">{items.title}</p>
            <p className="value">{items.value}</p>
          </CardWrapper>
        );
      })}
    </React.Fragment>
  );
};

export default Cards;

Cards.propTypes = {
  title: propTypes.string.isRequired,
  info: propTypes.number.isRequired,
};
