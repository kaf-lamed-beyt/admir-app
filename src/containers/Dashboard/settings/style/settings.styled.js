import styled from "styled-components";

export const SettingsWrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin-top: 45px;
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

  .settings-card {
    display: flex;

    .first-card,
    .second-card {
      width: 350px;
      height: 134px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      padding: 18px 28px;
      color: #fff;
      margin: 0 40px 0 0;

      :hover {
        cursor: pointer;
      }

      svg {
        font-size: 70px;
        font-weight: 500;
        margin-top: 14px;
      }

      h3 {
        font-size: 22px;
        color: #fff;
        font-weight: 500;
        margin: auto 0;
      }
    }

    .first-card {
      background: var(--secondary);
    }

    .second-card {
      background: var(--pink);
    }
  }

  .change-password-form {
    transform: translate(0, 11%);

    input {
      ::placeholder {
        font-weight: 300;
      }
    }

    input[id="old-password"] {
      font-weight: 300;
    }

    span {
      svg {
        position: absolute;
        top: 0;
        margin-left: 330px;
        margin-top: -50px;
        font-size: 19px;
        color: var(--grey);
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    margin-top: 70px !important;
    margin-bottom: 20px;
    padding: 0;
    width: 100%;

    // .role-input {
    //   margin: 0 !important;
    //   width: 180% !important;
    // }

    // .role-label {
    //   margin: 0 !important;
    // }

    // input[type="email"] {
    //   width: 120% !important;
    // }
  }
`;

export const SettingsForm = styled.form`
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-flow: column;

  .flex-fields {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;

    label {
      display: block;
    }

    input {
      width: 100%;
      margin: 0 90px 0 0;
    }

    // .fullname,
    // .email {
    //   width: 292px;
    // }

    .select,
    .number {
      padding: 6px 3px;
      height: 45px;
      width: 295px;
      border-radius: 6px;
    }
  }

  .pwd-field {
    width: 50%;
    margin-top: 30px;

    input {
      width: 76%;
    }
  }

  .show-pwd {
    position: absolute;
    margin-left: -50px;
    margin-top: 17px;

    :hover {
      cursor: pointer;
    }
  }

  .flex-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 75px;

    button {
      margin: 0 20px 0 10px;
    }

    .btn-outline {
      border: 1px solid var(--grey);
    }
  }

  button {
    border: none;
    margin-top: 50px;
    font-weight: 600;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    .flex-fields {
      flex-wrap: wrap;

      input {
        width: 100%;
      }
    }
  }
`;
