import React from "react";
import DashHeader from "../components/DashHeader";
import { time_tracker } from "../../../utils/table-data";
import styled from "styled-components";
import { TimeTrackerTable } from "../components/Table";
import Button from "../../../components/Buttons";
import Icon from "../../../components/Icons";
import { ClockInEntryCard, ClockOutEntryCard } from "../components/EntryCard";
import onClickOutside from "react-onclickoutside";

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
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;

    .entry-controllers {
      display: flex;

      button {
        font-weight: 700;
        line-height: 19px;
        border: none;

        p {
          display: flex;
          font-size: 16px;
          text-align: center;
          margin: 10px 20px;
          justify-content: space-between;

          svg {
            font-size: 12px;
            font-weight: 700 !important;
          }
        }
      }

      .clock-out {
        margin: 0 0 0 19px;
      }
    }

    p {
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
    margin-top: 70px !important;
    margin-bottom: 20px;

    ::-webkit-scrollbar {
      display: none;
    }

    .table-title {
      flex-wrap: wrap;
    }
  }
`;

const TimeTracker = () => {
  const [clockIn, setClockIn] = React.useState(false);
  const [clockOut, setClockOut] = React.useState(false);

  TimeTracker.handleClickOutside = () => {
    setClockIn(clockIn);
    setClockOut(clockOut);
  };

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Time Tracker" profile_img="/img/tom.png" />
      <TrackerContainer>
        <div className="table-title">
          <p>All entries</p>
          <div className="entry-controllers">
            <Button
              height="44px"
              width="150px"
              fill="var(--secondary)"
              text_color="#fff"
              onClick={() => setClockIn(!clockIn)}
            >
              <p>
                {" "}
                <Icon name="plus" /> Clock In
              </p>
            </Button>
            <Button
              height="44px"
              width="150px"
              fill="var(--secondary)"
              text_color="#fff"
              className="clock-out"
              onClick={() => setClockOut(!clockOut)}
            >
              <p>
                {" "}
                <Icon name="plus" /> Clock Out
              </p>
            </Button>
          </div>
        </div>
        <ClockInEntryCard title="Clock In" open={clockIn} />
        <ClockOutEntryCard title="Clock Out" open={clockOut} />
        <TimeTrackerTable
          firstHeader="Date/Days"
          secondHeader="Clock-in Time"
          thirdHeader="Clock-out Time"
          reports={time_tracker}
        />
      </TrackerContainer>
    </React.Fragment>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => TimeTracker.handleClickOutside,
};

export default onClickOutside(TimeTracker, clickOutsideConfig);
