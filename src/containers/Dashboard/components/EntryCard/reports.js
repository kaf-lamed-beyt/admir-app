import React from "react";
import Geocode from "react-geocode";
import {
  userEndpoints,
  dashboardDataEndpoints,
} from "../../../../routes/endpoints";
import { EntryWrapper } from "./style/entry.styled";
import Icon from "../../../../components/Icons";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import propTypes from "prop-types";
import Button from "../../../../components/Buttons";
import dynamic from "next/dynamic";

const Status = dynamic(() => import("status-modal").then((mod) => mod.Style), {
  ssr: false,
});

export const ReportsEntry = ({ title, open }) => {
  const [reportTitle, setReportTile] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState({
    latitude: "",
    longitude: "",
  });
  const [userAddress, setUserAddress] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [reportSuccess, setReportSuccess] = React.useState();
  const [reportErorr, setReportError] = React.useState();
  const [staffId, setStaffId] = React.useState("");

  React.useEffect(async () => {
    // get the staff id from the user endpoint
    try {
      const staffId = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = staffId.data;
      setStaffId(data._id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const submitReport = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "POST",
        url: dashboardDataEndpoints.reports,
        data: {
          workPost: staffId,
          title: reportTitle,
          description,
          address: userAddress,
          // lat: location.latitude,
          // long: location.longitude,
        },
        headers: {
          "Content-type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setReportSuccess(response.data.msg);
      setLoading(false);
      setReportError(null);
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setReportError(data.msg);
      setReportSuccess(null);
    }
  };

  React.useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (position) => {
      const crd = position.coords;

      setLocation({
        latitude: crd.latitude,
        longitude: crd.longitude,
      });

      Geocode.setApiKey("AIzaSyAMGgifA5cwnmJ0cwauMcF-s1yJR34X2Jg");

      Geocode.fromLatLng(crd.latitude, crd.longitude).then((response) => {
        const address = response.results[0].formatted_address;
        setUserAddress(address);
      });
    };

    const error = (err) => {
      console.warn(`error(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <EntryWrapper open={open} className="reports-entry">
      {reportErorr ? (
        <Status className="dash-status" message={reportErorr} />
      ) : null}
      {reportSuccess ? (
        <Status className="dash-status" message={reportSuccess} />
      ) : null}
      <Fade direction="up" triggerOnce>
        <p className="entry-title">{title}</p>
        <form onSubmit={submitReport}>
          <div className="reports-group">
            <Icon name="activities" />
            <input
              type="text"
              name="report-title"
              className="work-activity"
              id="title"
              onChange={(e) => setReportTile(e.target.value)}
              placeholder="Title of your report"
              value={reportTitle}
            />
          </div>
          <div className="reports-group">
            <Icon name="activities" />
            <textarea
              type="text"
              name="description"
              className="text-area"
              id="activities"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What did you do today?"
              value={description}
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
              value={userAddress}
            />
          </div>
          <Button fill="var(--secondary)" height="30px" text-color="#fff">
            {loading ? "Submitting..." : "Submit Report"}
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
