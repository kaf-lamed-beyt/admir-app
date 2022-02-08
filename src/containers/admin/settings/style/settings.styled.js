import styled from "styled-components";

export const SettingsWrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  margin-top: 45px;
  padding: 0 230px 0 100px;

  .settings-success,
  .settings-error {
    margin-top: 50px !important;
    border: 1px solid red;
  }

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
        font-weight: 600;
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

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    margin-top: 70px !important;
    margin-bottom: 20px;
    padding: 0;
    width: 100%;

    .settings-card {
      flex-flow: column;
      justify-content: center !important;
      width: 100%;
      paddding: 0;

      .first-card,
      .second-card {
        margin: 0 0 30px 0;
        width: 100%;
      }
    }
  }
`;

export const GeneralSettingsForm = styled.form`
  height: 100%;
  margin-top: 35px;

  .flex-fields {
    display: flex;
    justify-content: space-between;
    margin: 0 0 30px 0;

    .role-container {
      width: 100% !important;
      margin: 0 0 0 195px;
      height: 45px;

      select {
        border: 1px solid red;
      }
    }

    .phoneNumber-container {
      width: 38%;
    }
  }

  .flex-buttons {
    justify-content: flex-end;
    display: flex;
    margin-top: 30px;

    .btn-outline {
      margin: 0 30px 0 0;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    .flex-fields {
      flex-flow: column;

      .role-container {
        width: 100% !important;
        margin: 0;
        height: 45px;
      }

      .phoneNumber-container {
        width: 100% !important;
      }

      div {
        margin-bottom: 5px;
      }
    }

    .two {
      margin-top: -18px;
    }
  }
`;

export const ChangePasswordForm = styled.form`
  margin-top: 30px;

  .flex-fields {
    display: flex;
    justify-content: space-between;

    span {
      svg {
        font-size: 18px;
        color: var(--grey);
        position: absolute;
        margin-top: 17px;
        margin-left: -25px;
      }
    }
  }

  button {
    margin-top: 30px;
    border: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    .flex-fields {
      flex-flow: column;
    }
  }
`;
