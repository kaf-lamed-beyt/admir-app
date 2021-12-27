import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 375px;
  height: 134px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 18px 28px;
  color: #fff;
  margin: 0 21px 0 0;
  flex: 0 0 auto;

  :hover {
    cursor: pointer;
  }

  .icon-wrapper {
    height: 97px;

    & svg {
      width: 100%;
      height: 100%;
    }
  }

  .card-details {
    margin-top: 15px;

    .title {
      font-size: 16px;
      font-weight: 600;
      padding-top: 7px;
      line-height: 19px;
      color: #fff;
      margin-top: -45px;
    }

    .value {
      font-size: 40px;
      font-weight: 600;
      text-align: center;
      line-height: 48px;
      color: #fff;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    margin-bottom: 20px;
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    margin-bottom: 20px;
    width: 50%;
  }
`;
