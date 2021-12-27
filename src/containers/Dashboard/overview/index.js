import React from "react";
import DashHeader from "../components/DashHeader";
import { Stats, Tables } from "./style/overview.styled";
import { overview_stats } from "../../../utils/common";
import Cards from "../components/Cards";
import { CardWrapper } from "../components/Cards/style/cards.styled";
import Icon from "../../../components/Icons";
import Button from "../../../components/Buttons";
import { PersonalizedReport } from "../components/Table";
import { individual_reports } from "../../../utils/table-data";

const Overview = () => {
  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="Overview"
        user="Invictus Innocent"
        profile_img="/img/user.png"
      />
      <Stats>
        <CardWrapper style={{ background: "var(--secondary)" }}>
          <div className="icon-wrapper">
            <Icon name="clock-in" />
          </div>
          <div className="card-details">
            <p className="info">You are currently clocked out</p>
            <Button
              height="39px"
              width="130px"
              text_color="var(--secondary)"
              fill="#fff"
              radius="none"
            >
              <Icon name="arrow-in" /> Clock in
            </Button>
          </div>
        </CardWrapper>
        <Cards data={overview_stats} />
      </Stats>
      <Tables>
        <div className="time-tracker">
          <p>Tracker</p>
          <PersonalizedReport reports={individual_reports} />
        </div>
        <div className="reports">
          <p>Reports</p>
          <PersonalizedReport reports={individual_reports} />
        </div>
      </Tables>
    </React.Fragment>
  );
};

export default Overview;
