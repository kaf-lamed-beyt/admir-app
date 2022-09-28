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
import dayjs from "dayjs";
import { today, yesterday, threeDaysAgo } from "../../../../utils/common";
import dynamic from "next/dynamic";

const Status = dynamic(
  () => import("status-modal/dist").then((mod) => mod.Status),
  { ssr: false }
);

export const ClockOutEntryCard = ({ open, title }) => {
  const [clockOut, setClockOut] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [clockOutSuccess, setClockOutSuccess] = React.useState();
  const [clockOutError, setClockOutError] = React.useState();
  const [timeInfo, setTimeInfo] = React.useState([]);

  // to hit the clockout endpoint, we have to
  // pass the recordId of the clockIn event as a parameter
  // to the endpoint
  const getId = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: dashboardDataEndpoints.records,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setTimeInfo(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const clockOutStatus = timeInfo.map((data) => {
    if (data.clockOut === undefined) {
      return data._id;
    }
  });

  const id = clockOutStatus.toString();

  // the id variable above still has a trailing comma
  // in front of it. Using the replaceAll JavaScript method
  // to get rid of that, so we can pass it as a parameter in
  // the clockOut API call.
  const recordId = id.replaceAll(",", "");

  // Getting the recordId once the component
  // is mounted on to the DOM
  React.useEffect(() => {
    getId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "PATCH",
        url: `${dashboardDataEndpoints.clockOut}/${recordId}`,
        data: {
          clockOut: clockOut.toString(),
        },
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setClockOutSuccess(response.data.msg);
      setLoading(false);
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
        <Status className="dash-status" message={clockOutSuccess} />
      ) : null}
      {clockOutError ? (
        <Status
          className="dash-status"
          message={clockOutError}
          status="error"
        />
      ) : null}
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
