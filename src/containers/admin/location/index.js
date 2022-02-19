import React from "react";
import DashHeader from "../../../containers/Dashboard/components/DashHeader";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { PuffLoader } from "react-spinners";
import { LocationWrapper } from "./style/location.styled";
import { customMapStyles } from "./style/mapstyles";
import Geocode from "react-geocode";

// map container style
const containerStyle = {
  width: "100%",
  height: "100vh",
  borderRadius: "4px",
};

// map's center. I'm setting the map center to be the
// physical location of the company
const center = {
  lat: 6.5392,
  lng: 3.3842,
};

const options = {
  styles: customMapStyles,
};

const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAMGgifA5cwnmJ0cwauMcF-s1yJR34X2Jg",
  });

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Location" />
      {!isLoaded ? (
        <div className="table-loader-unique">
          <PuffLoader color="var(--primary)" />
        </div>
      ) : (
        <LocationWrapper>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
          >
            <Marker position={center} />
          </GoogleMap>
          <Marker position={center} label={"This user is currently at ..."} />
        </LocationWrapper>
      )}
    </React.Fragment>
  );
};

export default Location;
