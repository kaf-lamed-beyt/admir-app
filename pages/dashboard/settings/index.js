import Head from "next/head";
import React from "react";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import Settings from "../../../src/containers/Dashboard/settings";
import { AuthContext } from "../../../src/context/auth-context";
import { useRouter } from "next/router";

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
