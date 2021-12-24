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

export const AuthForm = styled.form`
  margin-top: -30px;

  .auth-instruction {
    color: var(--text-disable);
    border-bottom: 1px solid var(--img-border);
    padding-bottom: 6px;
  }

  button {
    margin-top: 25px;
    height: 45px;
    width: 100%;
    border-radius: 6px;
    outline: none;
    border: none;

    a {
      color: #fff !important;
    }

    :hover {
      cursor: pointer;
    }
  }

  .staff-country {
    height: 45px;
    border-radius: 6px;
    padding: 0 19px 0 22px;

    :focus {
      border: 1px solid var(--primary) !important;
    }

    :hover {
      border: 1px solid var(--primary);
    }
  }

  .have-account {
    text-align: center;
    color: var(--text-disable);
    padding: 8px 0;

    span {
      color: var(--primary);

      :hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    margin-top: 30px;
  }
`;
