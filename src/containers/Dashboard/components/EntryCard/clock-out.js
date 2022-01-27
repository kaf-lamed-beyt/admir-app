import React from "react";
import { EntryWrapper } from "./style/entry.styled";
import Icon from "../../../../components/Icons";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import propTypes from "prop-types";
import Select from "react-dropdown-select";
import { time } from "../../../../utils/common";
import axios from "axios";
import { dashboardDataEndpoints } from "../../../../routes/endpoints";
import {
  DashboardSuccessModal,
  DashboardErrorModal,
} from "../../../../components/Modals";
import dayjs from "dayjs";
import { today, yesterday, threeDaysAgo } from "../../../../utils/common";

export const ClockOutEntryCard = ({ open, title }) => {
  const [clockOut, setClockOut] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [clockOutSuccess, setClockOutSuccess] = React.useState();
  const [clockOutError, setClockOutError] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "PATCH",
        url: dashboardDataEndpoints.clockOut,
        data: {
          clockOut,
        },
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setClockOutSuccess(data.msg);
      setClockOutError(null);
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setClockOutError(data.msg);
      setClockOutSuccess(null);
    }
  };

  return (
    <EntryWrapper open={open}>
      {clockOutSuccess ? (
        <DashboardSuccessModal message={clockOutSuccess} />
      ) : (
        ""
      )}
      {clockOutError ? <DashboardErrorModal message={clockOutError} /> : ""}
      <Fade direction="up" triggerOnce>
        <p className="entry-title">{title}</p>
        <div className="date-carousel">
          <Icon name="calendar" />
          {/* <p>Today {dayjs(today).format("DD[th] MMM, YYYY")}</p> */}
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
              name="time-out"
              id="time-out"
              value={clockOut}
              className="select"
              dropdownPosition="bottom"
              options={time}
              onChange={(clockOut) =>
                setClockOut(clockOut.map((time) => time.value))
              }
              placeholder="Clock Out"
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

ClockOutEntryCard.propTypes = {
  open: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
};
