import React from "react";
import DashHeader from "../components/DashHeader";
import styled from "styled-components";
// import { ReportTable } from "../components/Table";
// import { employee_reports } from "../../../utils/table-data";
import IndividualReport from "./individual";

export const ReportContainer = styled.div`
  height: 600px;
  padding-left: 0px;
  padding-right: -10px;
  margin-top: 9px;
  border-radius: 10px;
  border: 1px solid var(--position-staff);
  overflow: auto;

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
      display: none !important;
    }
  }
`;

const Reports = () => {
  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="Reports"
        user="Tom Cruise"
        profile_img="/img/tom.png"
      />
      <IndividualReport />
    </React.Fragment>
  );
};

export default Reports;
