import React from "react";
import Head from "next/head";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import GeneralSettings from "../../../src/containers/Dashboard/settings/general";

export default function GeneralSettingsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | General Settings</title>
      </Head>
      <DashLayout>
        <GeneralSettings />
      </DashLayout>
    </React.Fragment>
  );
}
