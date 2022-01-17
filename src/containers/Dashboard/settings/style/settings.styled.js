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

  .first-card,
  .second-card {
    width: 375px;
    height: 134px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 18px 28px;
    color: #fff;
    margin: 0 21px 0 0;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    margin-top: 70px !important;
    margin-bottom: 20px;
    padding: 0;
    width: 100%;
    border: 1px solid green;

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

export const SettingsForm = styled.form`
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-flow: column;

  .flex-fields {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    label {
      display: block;
    }

    .fullname,
    .email {
      width: 292px;
    }

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
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    border: 1px solid red;

    .flex-fields {
      flex-wrap: wrap;
      border: 1px solid red;

      input {
        width: 400px;
      }
    }
  }
`;
