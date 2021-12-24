import Head from "next/head";
import React from "react";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import TimeTracker from "../../src/containers/Dashboard/time-tracker";

export default function TimeTrackerPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | TimeTracker</title>
      </Head>
      <DashLayout>
        <TimeTracker />
      </DashLayout>
    </React.Fragment>
  );
}
