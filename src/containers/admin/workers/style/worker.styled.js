import styled from "styled-components";

export const WorkerProfile = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 10px;

  .user-info {
    display: flex;

    .user-img-container {
      height: 150px;
      width: 150px;

      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .user-details {
      padding: 0 15px;

      .fullname {
        font-size: 30px;
        font-weight: 600;
      }

      .role {
        color: var(--grey);
        font-size: 18px;
        font-weight: 500;
        margin-top: -28px;
      }
    }
  }

  .user-details-cards__actions {
    margin-top: 32px;

    .user-cards {
      display: flex;
      flex-wrap: wrap;

      .card {
        height: 120px;
        width: 350px;
        border-radius: 6px;
        color: #fff;
        padding: 15px 30px;

        svg {
          font-size: 40px;
          color: #fff;
        }

        p {
          font-weight: 600;
          font-size: 22px;
        }
      }

      .email,
      .phone-number {
        margin: 0 0 20px 20px;
      }

      .email,
      .phone-number,
      .status,
      .reports {
        background: var(--primary-60);
      }

      .reports {
        display: flex;
        justify-content: space-between;

        svg {
          font-size: 60px;
          margin-top: 10px;
        }

        p {
          font-size: 60px;
        }
      }
    }

    .user-actions__controllers {
      display: flex;
      width: 40%;
      margin-top: 40px;

      .terminate {
        border: 1px solid var(--danger);
        color: var(--danger);
        background: none;

        :hover {
          cursor: pointer;
          background: var(--danger);
          transition: all 0.3s ease-in;
          color: #fff;
        }
      }

      .activate {
        border: 1px solid var(--success);
        color: var(--success);
        background: none;
        margin: 0 0 0 30px;

        :hover {
          cursor: pointer;
          background: var(--success);
          transition: all 0.3s ease-in;
          color: #fff;
        }
      }

      button {
        color: #fff;
        height: 60px;
        font-size: 19px;
        font-weight: 500;
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    padding-top: 60px;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    .card {
      width: 100% !important;
      margin: 0 0 20px 0 !important;
    }

    .user-actions__controllers {
      width: 100% !important;
      padding: 0 0 30px 0 !important;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    .user-cards {
      justify-content: space-between;

      .card {
        margin: 0 !important;
        width: 49% !important;
        margin: 0 0 20px 0 !important;
      }
    }
  }
`;
