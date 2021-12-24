import styled from "styled-components";

export const SettingsWrapper = styled.div`
  height: 100%;
  width: 100%;
  height: 500px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 230px 0 100px;

  .profile-wrapper {
    height: 70px;
    width: 70px;
    border: 2px solid var(--img-border);
    border-radius: 50%;
    padding: 3px 3px 3px 3px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    margin-top: 48px;
    padding: 0;

    .role-input {
      margin: 0 !important;
      width: 180% !important;
    }

    .role-label {
      margin: 0 !important;
    }

    input[type="email"] {
      width: 120% !important;
    }
  }
`;

export const InputGroup = styled.div`
  display: block;
  padding: 10px 0;
`;

export const SettingsForm = styled.form`
  width: 100%;

  .show-pwd {
    position: absolute;
    margin-left: 320px;
    margin-top: -35px;

    :hover {
      cursor: pointer;
    }
  }

  .flex-fields {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;

    input[type="text"] {
      width: 120%;
    }

    .number {
      width: 143%;
    }

    input[type="password"] {
      width: 113%;
    }
  }

  .role-input {
    height: 45px;
    border-radius: 6px;
    width: 179%;
    margin-left: -76%;
  }

  .role-label {
    margin-bottom: 20px !important;
    margin-left: -75%;
  }

  .flex-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 78px;

    button {
      margin: 0 20px 0 10px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    input {
      width: 100%;
    }

    .flex-fields {
      flex-wrap: wrap;
    }
  }
`;
