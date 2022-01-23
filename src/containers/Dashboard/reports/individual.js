import React from "react";
import { PersonalizedReport } from "../../Dashboard/components/Table";
import { user, individual_reports } from "../../../utils/table-data";
import { ReportContainer } from "../reports";
import Head from "next/head";
import Button from "../../../components/Buttons";
import Icon from "../../../components/Icons";
import { ReportsEntry } from "../components/EntryCard";
import axios from "axios";
import { userEndpoints } from "../../../routes/endpoints";
import onClickOutside from "react-onclickoutside";

const IndividualReport = () => {
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    fullName: "",
    role: "",
  });

  IndividualReport.handleClickOutside = () => {
    setOpen(!open);
  };

  const getCurrentUser = async () => {
    try {
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{`${currentUser.fullName}'s Report` || "Reports"}</title>
      </Head>
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
        <PersonalizedReport reports={individual_reports} />
      </ReportContainer>
    </React.Fragment>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => IndividualReport.handleClickOutside,
};

export default onClickOutside(IndividualReport, clickOutsideConfig);
