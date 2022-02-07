import React from "react";
import DashHeader from "../components/DashHeader";
import { Stats, Tables } from "./style/overview.styled";
import { overview_stats } from "../../../utils/common";
import Cards from "../components/Cards";
import { CardWrapper } from "../components/Cards/style/cards.styled";
import Icon from "../../../components/Icons";
import Button from "../../../components/Buttons";
import { PersonalizedReport, TimeTrackerTable } from "../components/Table";
import Link from "next/link";
import axios from "axios";
import { dashboardDataEndpoints } from "../../../routes/endpoints";
import { PuffLoader } from "react-spinners";

const Overview = () => {
  const [reports, setReports] = React.useState([]);
  const [timeRecords, setTimeRecords] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getUserTimeRecords = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: dashboardDataEndpoints.records,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setTimeRecords(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getUserReports = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: dashboardDataEndpoints.reports,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setReports(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserReports();
    getUserTimeRecords();
  }, []);

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Overview" profile_img="/img/tom.png" />
      <Stats>
        <CardWrapper style={{ background: "var(--secondary)" }}>
          <div className="icon-wrapper">
            <Icon name="clock-in" />
          </div>
          <div className="card-details">
            <p className="info">You are currently clocked out</p>
            <Link href="/dashboard/time-tracker">
              <Button
                height="39px"
                width="130px"
                text_color="var(--secondary)"
                fill="#fff"
                radius="none"
              >
                <Icon name="arrow-in" /> Clock in
              </Button>
            </Link>
          </div>
        </CardWrapper>
        <Cards data={overview_stats} />
      </Stats>
      <Tables>
        <div className="time-tracker">
          <p className="table-title">Tracker</p>
          {loading ? (
            <div className="table-loader-unique">
              <PuffLoader color="var(--primary)" />
            </div>
          ) : timeRecords.length === 0 ? (
            <p className="no-data">You time records will here</p>
          ) : (
            <TimeTrackerTable
              firstHeader="Date/Days"
              secondHeader="Clock-in Time"
              thirdHeader="Clock-out Time"
              reports={timeRecords}
            />
          )}
        </div>
        <div className="reports">
          <p className="table-title">Reports</p>
          {loading ? (
            <div className="table-loader-unique">
              <PuffLoader color="var(--primary)" />
            </div>
          ) : reports.length === 0 ? (
            <p className="no-data">
              When you submit reports, they'll appear here.
            </p>
          ) : (
            <PersonalizedReport reports={reports} />
          )}
        </div>
      </Tables>
    </React.Fragment>
  );
};

export default Overview;
