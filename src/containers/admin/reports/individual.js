import React from "react";
import { PersonalizedReport } from "../../admin/components/Table";
import { ReportContainer } from "../../admin/reports/style/report.styled";
import Head from "next/head";
import axios from "axios";
import DashHeader from "../../../containers/Dashboard/components/DashHeader";
import { dashboardDataEndpoints, userEndpoints } from "@routes/endpoints";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";

export default function IndividualReport() {
  const [reports, setReports] = React.useState([]);
  const [user, setUser] = React.useState({
    fullName: "",
    role: "",
  });
  const [loading, setLoading] = React.useState(false);
  const { query } = useRouter();

  // using the router hook to get the current ID
  // of the user from the dynamic url
  const currentUserId = query.id;

  const getUniqueReport = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: `${dashboardDataEndpoints.uniqueStaffReport}${currentUserId}`,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      // destructuring the data key to obtain the
      // list of reports in the array.
      const { data } = response.data;
      setReports(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getUniqueUser = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: `${userEndpoints.getStaffByAdmin}${currentUserId}`,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setUser(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUniqueReport();
    getUniqueUser();
  }, [currentUserId]);

  return (
    <React.Fragment>
      <Head>
        <title>{`${user.fullName}'s Report` || "Reports"}</title>
      </Head>
      <DashHeader dashboardTitle="Daily Employee Reports" />
      {loading ? (
        <div className="table-loader-unique">
          <PuffLoader color="var(--primary)" />
        </div>
      ) : (
        <ReportContainer>
          <div className="table-title">
            <div className="table-elem-flex">
              <img
                src={"/img/tom.png"}
                className="staff-image"
                alt="staff picture"
              />
              <div className="staff-name">
                <p className="fullname">{user.fullName}</p>
                <p className="position">{user.role}</p>
              </div>
            </div>
          </div>
          {reports.length === 0 ? (
            <p className="no-data">
              {user.role === "Manager"
                ? `${user.fullName} is a Manager. they don't need to submit reports`
                : `${user.fullName} has not submitted any report!`}
            </p>
          ) : (
            <PersonalizedReport reports={reports} />
          )}
        </ReportContainer>
      )}
    </React.Fragment>
  );
}
