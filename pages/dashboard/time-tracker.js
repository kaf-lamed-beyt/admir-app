import Head from "next/head";
import React from "react";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import { Fade } from "react-awesome-reveal";
import { routes } from "@routes";
const { tracker: TimeTracker } = routes;

export default function TimeTrackerPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | TimeTracker</title>
      </Head>
      <Fade>
        <DashLayout>
          <TimeTracker />
        </DashLayout>
      </Fade>
    </React.Fragment>
  );
}
