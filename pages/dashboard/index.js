import Head from "next/head";
import React from "react";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import Overview from "../../src/containers/Dashboard/overview";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const router = useRouter();

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          console.log(result.state);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
          console.log(result.state);
        } else if (result.state === "denied") {
          router.push("/");
          console.log("you need to enable geolocation");
          alert("you need to enable your device's location");
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
      <DashLayout>
        <Overview />
      </DashLayout>
    </React.Fragment>
  );
}
