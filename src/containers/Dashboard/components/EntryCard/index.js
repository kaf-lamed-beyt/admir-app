import React from "react";
import { EntryWrapper } from "./style/entry.styled";
import Icon from "../../../../components/Icons";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import propTypes from "prop-types";

const EntryCard = ({ title, open }) => {
  const [clockIn, setClockIn] = React.useState("");
  const [clockOut, setClockOut] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <EntryWrapper open={open}>
      <Fade direction="up" triggerOnce>
        <p className="entry-title">{title}</p>
        <div className="date-carousel">
          <Icon name="calendar" />
          <p>Today</p>
          <p>Yesterday</p>
          <p className="date">22 Dec, 2021</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="time-in">
          <Icon name="clock-in" />{" "}
        </label> */}
          <input
            type="time"
            name="time-in"
            id="time-in"
            onChange={(clockIn) => setClockIn(clockIn)}
            placeholder="Clock In"
            value={clockIn}
          />
          {/* <label htmlFor="time-out">
          <Icon name="clock-in" />
        </label> */}
          <input
            type="time"
            name="time-out"
            id="time-out"
            onChange={(clockOut) => setClockOut(clockOut)}
            placeholder="Clock Out"
            value={clockOut}
          />
          <Button fill="var(--secondary)" height="30px" text-color="#fff">
            Save
          </Button>
        </form>
      </Fade>{" "}
    </EntryWrapper>
  );
};

export default EntryCard;

EntryCard.propTypes = {
  open: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
};

export const ReportsEntry = ({ title, open }) => {
  const [activities, setActivities] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <EntryWrapper open={open}>
      <Fade direction="up" triggerOnce>
        <p className="entry-title">{title}</p>
        <div className="date-carousel">
          <Icon name="calendar" />
          <p>Today</p>
          <p>Yesterday</p>
          <p className="date">22 Dec, 2021</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Icon name="activities" />
            <input
              type="text"
              name="activities"
              id="activities"
              onChange={(activities) => setActivities(activities)}
              placeholder="Clock In"
              value={activities}
            />
          </div>
          <div className="input-group">
            <Icon name="entry-card-marker" />
            <input
              type="text"
              name="location"
              id="location"
              onChange={(location) => setLocation(location)}
              placeholder="Location"
              value={location}
            />
          </div>
          <Button fill="var(--secondary)" height="30px" text-color="#fff">
            Save
          </Button>
        </form>
      </Fade>{" "}
    </EntryWrapper>
  );
};

ReportsEntry.propTypes = {
  open: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
};
