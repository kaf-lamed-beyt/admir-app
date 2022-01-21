import Head from "next/head";
import React from "react";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import Reports from "../../../src/containers/Dashboard/reports";

export default function ReportsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Reports</title>
      </Head>
      <DashLayout>
        <Reports />
      </DashLayout>
    </React.Fragment>
  );
}
