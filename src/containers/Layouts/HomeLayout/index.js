import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import SideHero from "./SideHero";

const HomeLayoutWrapper = styled.section`
  display: flex;
  height: 100%;

  .dashboard-content {
    width: 100%;
    height: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <HomeLayoutWrapper>
      <SideHero />
      <div className="dashboard-content">{children}</div>
    </HomeLayoutWrapper>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
