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
    }

    svg {
      margin-top: 11px;
    }
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

      a {
        color: #fff;
      }

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
`;

export const InputGroup = styled.div`
  display: block;
  padding: 10px 0;

  label {
    line-height: 19px;
  }
`;
