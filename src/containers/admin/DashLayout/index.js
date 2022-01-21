import React from "react";
import propTypes from "prop-types";
import Sidebar from "../DashLayout/Sidebar";
import styled from "styled-components";
import { userEndpoints } from "../../../routes/endpoints";
import axios from "axios";
import { PulseLoader } from "react-spinners";

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
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const getUserData = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const { data } = response.data;
      setData(data);
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      console.log(data);
    }
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <LayoutWrapper>
      <Sidebar />
      {data ? (
        <main className="dashboard-content">{children}</main>
      ) : (
        <div className="loader">
          <PulseLoader loading={loading} color="var(--primary)" />
        </div>
      )}
    </LayoutWrapper>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
