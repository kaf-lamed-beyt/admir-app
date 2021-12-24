import styled from "styled-components";

export const Onboarding = styled.aside`
  height: 115vh !important;
  width: 80%;
  background: url(/img/onboarding.png);
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(215, 87, 17, 0.4);
  padding: 35px 75px;

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    display: none;
  }

  .onboarding-quote {
    width: 473px;
    margin-top: 97px;

    .quotation-mark {
      font-weight: 700;
      font-size: 96px;
      line-height: 70px;
      font-family: var(--gayathri) !important;
      color: rgba(0, 218, 247, 1);
    }

    .quote {
      font-weight: 600;
      font-size: 20px;
      line-height: 38px;
    }

    .quote-author {
      display: flex;
      font-weight: 400;
      font-size: 18px;

      span {
        padding: 0 5px;

        svg {
          margin-top: 5px;
        }
      }
    }

    .reverse-l {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
