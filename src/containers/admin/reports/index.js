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
import { PuffLoader } from "react-spinners";

export const getStaticProps = async () => {
  const usersData = await allUsers.json();
  console.log(usersData);

  return {
    props: {
      users: usersData,
    },
  };
};

const Reports = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getAllWorkers = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: userEndpoints.createUser,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(async () => {
    getAllWorkers();
  }, []);

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Daily Employee Reports" />
      <ReportContainer>
        <div className="table-title">
          <p>All staffs</p>
        </div>
        {loading ? (
          <div className="table-loader">
            <PuffLoader color="var(--primary)" />
          </div>
        ) : (
          <ReportTable reports={data} />
        )}
      </ReportContainer>
    </React.Fragment>
  );
};

export default Reports;
