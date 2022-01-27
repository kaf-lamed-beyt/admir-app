import React from "react";
import { PersonalizedReport } from "../../Dashboard/components/Table";
import Head from "next/head";
import axios from "axios";
import {
  dashboardDataEndpoints,
  userEndpoints,
} from "../../../routes/endpoints";
import onClickOutside from "react-onclickoutside";
import { Fade } from "react-awesome-reveal";
import { PuffLoader } from "react-spinners";
import { ReportContainer } from "../reports";
import Button from "../../../components/Buttons";
import Icon from "../../../components/Icons";
import { ReportsEntry } from "../components/EntryCard/reports";
import dayjs from "dayjs";

const IndividualReport = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [reports, setReports] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({
    fullName: "",
    role: "",
  });

  IndividualReport.handleClickOutside = () => {
    setOpen(open);
  };

  // get current user
  const getCurrentUser = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "Content-Type": "application/json",
          // once the user is logged in. This request block helps us
          // get their details. But, for us to be able to get the details,
          // we need to pass the token that we stored in localStorgare from
          // the authContext, so that each login is unique to each user.
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setCurrentUser(data);
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
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCurrentUser();
    getUserReports();
  }, []);

  const sortedReports = reports.sort((a, b) => {
    dayjs(b.createdAt).format("h") - dayjs(a.createdAt).format("h");
  });

  return (
    <React.Fragment>
      <Head>
        <title>{`${currentUser.fullName}'s Report` || "Reports"}</title>
      </Head>
      {sortedReports ? (
        <Fade triggerOnce>
          <ReportContainer>
            <div className="table-title">
              <div className="table-elem-flex">
                <img
                  src="/img/tom.png"
                  className="staff-image"
                  alt="staff picture"
                />
                <div className="staff-name">
                  <p className="fullname">{currentUser.fullName}</p>
                  <p className="position">{currentUser.role}</p>
                </div>
              </div>
              <Button
                height="44px"
                width="150px"
                fill="var(--secondary)"
                text_color="#fff"
                onClick={() => setOpen(!open)}
              >
                <p>
                  {" "}
                  <Icon name="plus" /> New Report
                </p>
              </Button>
            </div>
            <ReportsEntry title="Report" open={open} />
            <PersonalizedReport reports={sortedReports} />
          </ReportContainer>
        </Fade>
      ) : (
        <div className="table-loader">
          <PuffLoader color="var(--secondary)" loading={loading} />
        </div>
      )}
    </React.Fragment>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => IndividualReport.handleClickOutside,
};

export default onClickOutside(IndividualReport, clickOutsideConfig);
