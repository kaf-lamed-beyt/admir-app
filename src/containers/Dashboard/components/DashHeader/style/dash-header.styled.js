import styled from "styled-components";

export const DashHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  margin-top: -15px;

  .dashboard-title {
    margin-top: 6px;
    font-size: 18px;

    h1 {
      font-weight: bolder;
    }
  }

  .profile-info {
    display: flex;
    justify-content: space-between;

    .header-icons {
      display: flex;
      width: 85px;
      height: 45px;
      margin-left: -10px;

      svg {
        width: 40px;
        height: 22px;
        margin-top: 15px;
        font-size: 30px;
      }
    }

    .user-details {
      display: flex;

      p {
        font-weight: 600;
        width: 100%;
        padding-left: 13px;
        padding-right: 7px;
        padding-top: 8px;
        margin-top: 8px;
        height: 39px;
        border-left: 1px solid var(--img-border);
      }

      .img-wrapper {
        height: 49px;
        width: 49px;
        border-radius: 50%;
        border: 2px solid var(--img-border);

        :hover {
          cursor: pointer;
        }

        img {
          width: 40px;
          height: 40px;
          margin: 2.5px 1px 1px 2px;
          border-radius: 50%;
        }
      }
    }
  }

  .burger {
    display: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    .username {
      display: none;
    }

    .burger {
      display: block;
      font-size: 35px;
      margin-left: -10px;
      margin-top: 4px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    .dashboard-title {
      margin-top: 0px;
    }

    .burger {
      display: block;
      font-size: 35px;
      margin-left: -10px;
      margin-top: 4px;
    }
  }

  // fixed dashboard header on mobile screens

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    position: fixed;
    padding: 0 10px;
    background: var(--header-mobile);
    margin-top: -20px;
    z-index: 1;
    left: 0;
    height: 50px;

    .dashboard-title {
      width: 100%;
      margin-top: 10px;
      font-size: 10px;
      padding: 0px 5px;
      white-space: nowrap;
    }

    .header-icons {
      svg {
        display: none;
      }
    }
  }
`;
