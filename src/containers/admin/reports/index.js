import React from "react";
import { ReportTable } from "../components/Table";
import { employee_reports, user } from "../../../utils/table-data";
import DashHeader from "../../../containers/Dashboard/components/DashHeader";
import { ReportContainer } from "./style/report.styled";
import axios from "axios";
import {
  dashboardDataEndpoints,
  userEndpoints,
} from "../../../routes/endpoints";

export const getStaticProps = async () => {
  const allUsers = await axios({
    method: "GET",
    url: dashboardDataEndpoints.userReport,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  });

  const usersData = await allUsers.json();
  console.log(usersData);

  return {
    props: {
      users: usersData,
    },
  };
};

const Reports = ({ users }) => {
  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Daily Employee Reports" />
      <ReportContainer>
        <div className="table-title">
          <p>All staffs</p>
        </div>
        <ReportTable reports={employee_reports} />
      </ReportContainer>
    </React.Fragment>
  );
};

export default Reports;
