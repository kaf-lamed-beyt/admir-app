import React from "react";
import Head from "next/head";
import DashLayout from "@adminLayout";
import { routes } from "@routes";
const { reports: Reports } = routes;

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
