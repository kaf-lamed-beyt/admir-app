import React from "react";
import propTypes from "prop-types";
import Sidebar from "../DashLayout/Sidebar";
import styled from "styled-components";

const LayoutWrapper = styled.section`
  display: flex;
  height: 100%;

  .dashboard-content {
    padding: 20px 13px;
    width: 100%;
  }

  // @media only screen and (min-width: 0px) and (max-width: 992px) {
  //   .dashboard-content {
  //     padding-top: 50px !important;
  //     border: 1px solid red;
  //   }
  // }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <div className="dashboard-content">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
