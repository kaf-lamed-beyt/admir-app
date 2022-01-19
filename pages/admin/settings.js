import React from "react";
import Head from "next/head";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import Settings from "../../src/containers/admin/settings";

export default function AdminTimeTrackerPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Admin | Settings</title>
      </Head>
      <DashLayout>
        <Settings />
      </DashLayout>
    </React.Fragment>
  );
}
