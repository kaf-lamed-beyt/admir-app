import React from "react";
import propTypes from "prop-types";
import Sidebar from "../DashLayout/Sidebar";
import styled from "styled-components";

const LayoutWrapper = styled.section`
  display: flex;
  align-items: stretch;
  height: 100%;

  .dashboard-content {
    padding: 20px 13px;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    .dashboard-content {
      padding: 20px 13px;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <main className="dashboard-content">{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
