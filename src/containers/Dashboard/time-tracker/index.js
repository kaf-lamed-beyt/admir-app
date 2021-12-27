import React from "react";
import DashHeader from "../components/DashHeader";
import { individual_reports } from "../../../utils/table-data";
import styled from "styled-components";
import { PersonalizedReport } from "../components/Table";

const TrackerContainer = styled.div`
  height: 585px !important;
  overflow: auto;
  padding-left: 0px;
  padding-right: -10px;
  margin-top: 9px;
  border-radius: 10px;
  border: 1px solid var(--position-staff);
  overflow-y: auto;

  .table-title {
    margin-top: 27px;

    p {
      padding-left: 15px;
      font-weight: 600;
      font-size: 21px;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 4px;
    background: var(--primary);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid var(--primary);
    border-radius: 10px;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    height: 100% !important;
    margin-top: 48px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TimeTracker = () => {
  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="Time Tracker"
        user="Invictus Innocent"
        profile_img="/img/user.png"
      />
      <TrackerContainer>
        <div className="table-title">
          <p>All entries</p>
        </div>
        <PersonalizedReport reports={individual_reports} />
      </TrackerContainer>
    </React.Fragment>
  );
};

export default TimeTracker;
