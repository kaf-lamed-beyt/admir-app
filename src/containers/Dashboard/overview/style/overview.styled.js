import styled from "styled-components";

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowwrap;
  overflow-x: auto;
  width: 1101px;
  margin-top: 30px;

  // obtaining smooth scrolling on iOS
  // devices (and others) sha with the webkit vendor prefix
  ::-webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  .card-details {
    margin-top: 15px;

    .info {
      margin-top: -18px;
      font-size: 16px;
      font-weight: 600;
      padding-top: 7px;
      line-height: 19px;
      color: #fff;
      padding-bottom: 14px;
    }

    button {
      display: flex;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      justify-content: center;
      padding: 9px 0;
      margin-left: 70px;
      border-radius: none !important;

      svg {
        margin: 3px 6px 0 0;
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    border: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    // flex-wrap: wrap;
    width: 100%;
    margin-top: 48px;
  }
`;

export const Tables = styled.div`
  display: flex;
  border: 3px solid blue;

  .time-tracker {
    height: 446px;
    width: 437px;
    border: 1px solid red;
  }

  .reports {
    height: 446px;
    width: 530px;
    border: 1px solid red;
  }
`;
