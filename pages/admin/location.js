import React from "react";
import Head from "next/head";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import Location from "../../src/containers/admin/location";

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
