import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 250px;
  height: 134px;
  border-radius: 8px;
  border: 1px solid var(--img-border);
  background: var(--primary-20);

  :hover {
    cursor: pointer;
    color: var(--primary);
    border: 1px solid var(--primary);

    .title,
    .value {
      color: var(--primary);
    }
  }

  .title {
    color: var(--grey);
    font-size: 19px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    padding-top: 7px;
  }

  .value {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: -2px;
  }

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    margin-bottom: 10px;
    width: 49%;
  }
`;
