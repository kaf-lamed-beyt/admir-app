import React from "react";
import { EntryWrapper } from "./style/entry.styled";
import Icon from "../../../../components/Icons";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import propTypes from "prop-types";
import Select from "react-dropdown-select";
import { time } from "../../../../utils/common";

export const ClockInEntryCard = ({ title, open }) => {
  const [clockIn, setClockIn] = React.useState("");

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
            Save
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

export const ClockOutEntryCard = ({ open, title }) => {
  const [clockOut, setClockOut] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <Icon name="clock-in" />
            <Select
              name="time-out"
              id="time-out"
              value={clockOut}
              className="select"
              dropdownPosition="top"
              options={time}
              onChange={(clockOut) =>
                setClockOut(clockOut.map((time) => time.value))
              }
              placeholder="Clock Out"
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
          <div className="reports-group">
            <Icon name="activities" />
            <input
              type="text"
              name="activities"
              className="work-activity"
              id="activities"
              onChange={(e) => setActivities(e.target.value)}
              placeholder="What did you do today?"
              value={activities}
            />
          </div>
          <div className="reports-group">
            <Icon name="entry-card-marker" />
            <input
              type="text"
              name="location"
              id="location"
              className="work-location"
              onChange={(e) => setLocation(e.target.value)}
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
