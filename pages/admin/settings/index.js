import React from "react";
import Head from "next/head";
import DashLayout from "../../../src/containers/admin/DashLayout";
// import Settings from "@adminRoutes/settings";
import { routes } from "@routes";
const { adminSettings: Settings } = routes;

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
