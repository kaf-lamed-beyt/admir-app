import styled from "styled-components";

export const AuthSteps = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  margin-top: 10px;
  padding: 0 50px 0 50px;

  .auth-controller {
    display: flex;
    font-size: 16px;
    line-height: 19px;
    color: var(--text-disable);

    p {
      margin-top: 16px;

      :hover {
        cursor: pointer;
      }
    }

    svg {
      height: 30px;
      font-size: 23px;
      margin-top: 10px;
    }
  }

  .info {
    margin: 12px 0 0 0;

    .text-disabled {
      color: var(--position-staff);
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
    }

    .personal {
      margin-top: -18px;
      color: var(--text-disable);
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    padding: 0 10px;
  }
`;
