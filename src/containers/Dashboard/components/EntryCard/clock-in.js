import React from "react";
import axios from "axios";
import propTypes from "prop-types";
import {
  DashboardErrorModal,
  DashboardSuccessModal,
} from "../../../../components/Modals";
import { time } from "../../../../utils/common";
import dayjs from "dayjs";
import { EntryWrapper } from "./style/entry.styled";
import { Fade } from "react-awesome-reveal";
import Icon from "../../../../components/Icons";
import Button from "../../../../components/Buttons";
import Select from "react-dropdown-select";
import { today, yesterday, threeDaysAgo } from "../../../../utils/common";
import { dashboardDataEndpoints } from "../../../../routes/endpoints";

export const ClockInEntryCard = ({ title, open }) => {
  const [clockIn, setClockIn] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [clockInSuccess, setClockInSuccess] = React.useState();
  const [clockInError, setClockInError] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "POST",
        url: dashboardDataEndpoints.clockIn,
        data: {
          clockIn: clockIn.toString(),
        },
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setClockInSuccess(data.msg);
      setClockInError(null);
    } catch (error) {
      setLoading(false);
      setClockInError(error.response.data.msg);
      setClockInSuccess(null);
    }
  };

  return (
    <EntryWrapper open={open}>
      {clockInSuccess ? <DashboardSuccessModal message={clockInSuccess} /> : ""}
      {clockInError ? <DashboardErrorModal message={clockInError} /> : ""}
      <Fade direction="up" triggerOnce>
        <p className="entry-title">{title}</p>
        <div className="date-carousel">
          <Icon name="calendar" />
          <p>Today</p>
          <p>{dayjs(yesterday).format("DD[th] MMM, YYYY")}</p>
          <p className="date">
            {dayjs(threeDaysAgo).format("DD[th] MMM, YYYY")}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Icon name="clock-in" />
            <Select
              name="time-in"
              id="time-in"
              options={time}
              value={clockIn}
              className="select"
              dropdownPosition="bottom"
              onChange={(clockIn) =>
                setClockIn(clockIn.map((time) => time.value))
              }
              placeholder="Clock In"
            />
          </div>
          <Button fill="var(--secondary)" height="30px" text-color="#fff">
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </Fade>{" "}
    </EntryWrapper>
  );
};

ClockInEntryCard.propTypes = {
  open: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
};
