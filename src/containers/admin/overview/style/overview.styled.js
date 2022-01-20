import styled from "styled-components";

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    width: 100%;
    margin-top: 60px;
  }
`;
