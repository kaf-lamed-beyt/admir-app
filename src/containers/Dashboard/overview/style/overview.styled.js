import styled from "styled-components";

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowwrap;
  overflow-x: auto;
  width: 1109px;
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
  margin: 35px 0 0 0;
  justify-content: space-between;

  .table-title {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    padding: 20px 0 0 16px;
  }

  .time-tracker {
    height: 446px;
    width: 437px;
    overflow-y: auto;
    box-shadow: 0px 0px 25px 3px rgba(17, 145, 215, 0.05);

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .reports {
    height: 446px;
    width: 530px;
    overflow-y: auto;
    box-shadow: 0px 0px 25px 3px rgba(17, 145, 215, 0.05);

    ::-webkit-scrollbar {
      display: none;
    }

    .table-title {
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      padding: 20px 0 0 16px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    width: 100%;

    .time-tracker {
      width: 100%;
      border: 1px solid var(--img-border);
      margin-bottom: 30px;
    }

    .reports {
      width: 100%;
      border: 1px solid var(--img-border);
    }
  }
`;
