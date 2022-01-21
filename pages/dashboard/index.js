import Head from "next/head";
import React from "react";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import Overview from "../../src/containers/Dashboard/overview";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/context/auth-context";
import axios from "axios";
import { userEndpoints } from "../../src/routes/endpoints";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export default function OverviewPage() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const authContext = React.useContext(AuthContext);
  const [color, setColor] = React.useState("rgba(215, 87, 17, 1)");

  const getCurrentUser = async () => {
    try {
      setLoading(!false);

      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "Content-Type": "application/json",
          // once the user is logged in. This request block helps us
          // get their details. But, for us to be able to get the details,
          // we need to pass the token that we stored in localStorgare from
          // the authContext, so that each login is unique to each user.
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/")
      : router.push("/dashboard");

    getCurrentUser();

    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          console.log(result.state);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
          console.log(result.state);
        } else if (result.state === "denied") {
          alert("you need to turn on your device's location");
          router.push("/");
        }
        result.onchange = () => {
          console.log(result.state);
        };
      });
    } else {
      alert("navigator is not available");
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Overview</title>
      </Head>
      {!loading ? (
        <div className="loader">
          <PulseLoader color={color} />
        </div>
      ) : (
        <DashLayout>
          <Overview />
        </DashLayout>
      )}
    </React.Fragment>
  );
}
