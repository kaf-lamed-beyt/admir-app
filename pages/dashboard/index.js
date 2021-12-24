import Head from "next/head";
import React from "react";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import Overview from "../../src/containers/Dashboard/overview";

export default function OverviewPage() {
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
