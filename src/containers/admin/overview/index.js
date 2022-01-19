import React from "react";
import DashHeader from "../components/DashHeader";
import { Stats } from "./style/overview.styled";
import { admin_stats } from "../../../utils/common";
import Cards from "../components/Cards";

const Overview = () => {
  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="Overview"
        user="Invictus Innocent"
        profile_img="/img/user.png"
      />
      <Stats>
        <Cards data={admin_stats} />
      </Stats>
    </React.Fragment>
  );
};

export default Overview;
