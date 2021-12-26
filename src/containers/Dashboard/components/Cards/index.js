import React from "react";
import propTypes from "prop-types";
import { CardWrapper } from "./style/cards.styled";
import Icon from "../../../../components/Icons";

const Cards = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((items) => {
        return (
          <CardWrapper key={items._id} style={{ background: items.fill }}>
            <div className="icon-wrapper">
              <Icon name={items.icon} />
            </div>
            <div className="card-details">
              <p className="value">{items.value}</p>
              <p className="title">{items.title}</p>
            </div>
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
