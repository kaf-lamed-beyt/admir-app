import Head from "next/head";
import React from "react";
import DashLayout from "@layouts/DashLayout";
// import Settings from "@dashboardRoutes/settings";
import { routes } from "@routes";
const { settings: Settings } = routes;

export default function SettingsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Settings</title>
      </Head>
      <DashLayout>
        <Settings />
      </DashLayout>
    </React.Fragment>
  );
}
