import React from "react";
import { EntryWrapper } from "./style/entry.styled";

const EntryCard = ({ title }) => {
  return (
    <EntryWrapper>
      <p className="entry-title">{title}</p>
    </EntryWrapper>
  );
};

export default EntryCard;
