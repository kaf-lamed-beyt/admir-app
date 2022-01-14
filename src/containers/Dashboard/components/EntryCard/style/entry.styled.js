import styled from "styled-components";

export const EntryWrapper = styled.div`
  width: 383px;
  height: 346px;
  background: #fff;
  padding: 10px 15px;
  box-shadow: 0px 0px 25px 3px rgba(17, 145, 215, 0.05);
  position: absolute;
  margin-left: 700px;
  margin-top: 10px;
  padding-top: 10px;
  border-radius: 8px;
  z-index: 3;
  display: ${({ open }) => (open ? "block" : "none")};

  .entry-title {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    color: rgba(105, 111, 121, 1);
    line-height: 20px;
    padding-top: 15px;
    padding-bottom: 7px;
  }

  .date-carousel {
    display: flex;
    justify-content: space-between;

    p {
      width: 100%;
      height: 30px;
      border-radius: 15px;
      text-align: center;
      padding-top: 4px;
      background: #f5f5f5;
      margin: 0 0 0 5px;
    }

    .date {
      background: var(--secondary);
      color: #fff;
      margin-top: 0px;
      padding-top: 7px;
    }
  }

  form {
    .input-group {
      .select {
        margin-top: -45px;
        background: #f5f5f5;
        border-radius: 15px;
        height: 20px !important;
      }
    }

    button {
      border-radius: 15px;
      border: none;
      outline: none;
      color: #fff;
      margin-top: 37px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    margin-left: 5px;
    width: 90%;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    margin-left: 350px;
  }
`;
