import React from "react";
import Head from "next/head";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import ChangePassword from "../../../src/containers/Dashboard/settings/change-password";

export default function ChangePasswordPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Change Password</title>
      </Head>
      <DashLayout>
        <ChangePassword />
      </DashLayout>
    </React.Fragment>
  );
}
