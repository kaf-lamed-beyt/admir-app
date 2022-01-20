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
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 15px;

    p {
      padding-left: 15px;
      font-weight: 600;
      font-size: 21px;
    }

    button {
      font-weight: 700;
      line-height: 19px;
      border: none;

      p {
        display: flex;
        font-size: 16px;
        text-align: center;
        margin: 10px 10px;

        svg {
          font-size: 12px;
        }
      }
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
    margin-top: 70px !important;
    margin-bottom: 20px;

    ::-webkit-scrollbar {
      display: none !important;
    }

    .table-title {
      flex-wrap: wrap;
    }
  }
`;

const Reports = () => {
  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Reports" profile_img="/img/tom.png" />
      <IndividualReport />
    </React.Fragment>
  );
};

export default Reports;
