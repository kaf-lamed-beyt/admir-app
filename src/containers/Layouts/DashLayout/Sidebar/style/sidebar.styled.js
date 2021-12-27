import styled from "styled-components";

export const SidebarMenu = styled.aside`
  background: var(--primary);
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  height: 100vh;
  padding: 30px 0;
  top: 0;
  bottom: auto;

  .brand {
    margin-top: 10px;
    padding: 8px 15px;
    padding-bottom: 20px;

    :hover {
      cursor: pointer;
    }
  }

  .nav-items {
    margin-top: 20px;
    font-size: 16px;

    ul:hover {
      cursor: pointer;
    }

    .item-wrapper {
      display: flex;

      svg {
        margin-left: -20px;
        margin-top: 20px;
      }
    }

    li {
      list-style: none;
      height: 47px;
      width: 100%;
      text-transform: capitalize;
      color: #fff;
      padding: 17px 25px 0 10px;
    }

    .settings {
      margin-top: 40px;
    }
  }

  .burger {
    border: 1px solid red;
    font-size: 30px;
    color: #fff;
    display: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    display: none;

    .burger {
      display: block;
      color: #000;
    }
  }
`;
