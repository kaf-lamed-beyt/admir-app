import styled from "styled-components";

export const AuthWrapper = styled.div`
  padding: 80px 250px 100px 150px;
  height: 80%;
  width: 100%;

  .flex-secure {
    display: flex;
    justify-content: center;
    margin-top: 21px;

    p {
      margin-left: 7px;
      color: var(--text-disable);
      margin-top: 9px;
    }

    svg {
      margin-top: 11px;
    }
  }

  .signup-form {
    margin-top: -27px;
  }

  form {
    h1 {
      font-weight: 700;
      line-height: 36px;
      text-transform: capitalize;
    }

    .show-pwd {
      position: absolute;
      margin-left: -50px;
      margin-top: 15px;

      :hover {
        cursor: pointer;
      }
    }

    .forgot-pwd {
      color: var(--primary);
      display: flex;
      justify-content: flex-end;
      padding: 3px 0;

      :hover {
        cursor: pointer;
      }
    }

    button {
      margin-top: 25px;
      color: #fff;

      :hover {
        cursor: pointer;
      }
    }
  }

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

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    width: 100%;
    padding: 0 20px;
    height: 100%;
    margin-top: 30px;
    transform: translate(0, 20%);
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    padding: 0 200px;
    height: 100%;
    margin-top: 30px;
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    margin-top: 30px;
  }
`;

export const InputGroup = styled.div`
  display: block;
  padding: 10px 0;

  label {
    line-height: 19px;
  }
`;
