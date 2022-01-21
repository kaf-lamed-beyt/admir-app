import React from "react";
import Head from "next/head";
import Location from "../../src/containers/admin/location";
import DashLayout from "../../src/containers/admin/DashLayout";

export default function AdminTimeTrackerPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Admin | Location</title>
      </Head>
      <DashLayout>
        <Location />
      </DashLayout>
    </React.Fragment>
  );
}
