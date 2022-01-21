import styled from "styled-components";

export const MenuCard = styled.div`
  height: 85px;
  width: 180px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 3px rgba(79, 79, 79, 0.05);
  padding: 0;
  border: 1px solid #fff;
  position: absolute;
  margin-left: -60px;
  margin-top: 62px;
  padding-top: 10px;
  z-index: 3;
  background: #fff;
  display: ${({ open }) => (open ? "block" : "none")};

  li {
    list-style: none;
    padding: 0;
    margin-bottom: 12px;
    margin-left: -20px;

    :hover {
      color: var(--primary);
      transition: color 0.3s ease-in;
    }
  }

  .sign-out {
    border-top: 1px solid var(--img-border);
    padding: 0 20px;
    padding-top: 5px;
    margin-top: 10px;

    p {
      border-left: none;
    }

    :hover {
      color: var(--primary);
      transition: color 0.3s ease-in;
    }
  }

  li,
  .sign-out:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    margin-left: -45px;
    margin-top: 50px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-left: 50px !important;
    margin-top: 50px;
  }

  @media only screen and (min-width: 767px) and (max-width: 992px) {
    margin-left: 69px;
  }
`;
