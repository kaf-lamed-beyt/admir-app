import React from "react";
import Head from "next/head";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import Reports from "../../../src/containers/admin/reports";

export default function AdminTimeTrackerPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Admin | Employee Reports</title>
      </Head>
      <DashLayout>
        <Reports />
      </DashLayout>
    </React.Fragment>
  );
}
