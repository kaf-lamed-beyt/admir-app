import React from "react";
import { PersonalizedReport } from "../../Dashboard/components/Table";
import { user, individual_reports } from "../../../utils/table-data";
import { ReportContainer } from "../reports/style/report.styled";
import DashHeader from "../../Dashboard/components/DashHeader";
import Head from "next/head";
import axios from "axios";
import {
  dashboardDataEndpoints,
  userEndpoints,
} from "../../../routes/endpoints";

export const getStaticPaths = async () => {
  const response = await axios({
    method: "GET",
    url: userEndpoints.createUser,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  const data = await response.json();

  // we need a way to get the params that contains the id
  //  of each object in the data array. Using the map method of
  // javascript enables us to accomplish that.
  const staffReportPath = data.map((staffReport) => {
    return {
      params: { id: staffReport._id.toString() },
    };
  });

  return {
    paths: staffReportPath,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const userId = context.params.id;

  const response = await axios({
    method: "GET",
    url: `${dashboardDataEndpoints.uniqueStaffReport}${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  const data = await response.json();

  const userData = await axios({
    method: "GET",
    url: `${userEndpoints.createUser}${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  });

  return {
    props: {
      user: userData,
      userReport: data,
    },
  };
};

const IndividualReport = ({ user, userReport }) => {
  const [reports, setReports] = React.useState([userReport]);

  console.log(`reports: ${reports}`);

  return (
    <React.Fragment>
      <Head>
        <title>Reports</title>
      </Head>
      <DashHeader dashboardTitle="Daily Employee Reports" />
      <ReportContainer>
        {/* <div className="table-title">
          <div className="table-elem-flex">
            <img
              src={staff.img || "/img/tom.png"}
              className="staff-image"
              alt="staff picture"
            />
            <div className="staff-name">
              <p className="fullname">{staff.fullName}</p>
              <p className="position">{staff.role}</p>
            </div>
          </div>
        </div> */}
        <PersonalizedReport reports={reports} />
        <h1>Tesing this component</h1>
      </ReportContainer>
    </React.Fragment>
  );
};

export default IndividualReport;
