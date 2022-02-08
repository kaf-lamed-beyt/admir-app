import React from "react";
import Head from "next/head";
import DashLayout from "../../../src/containers/admin/DashLayout";
import ChangePassword from "../../../src/containers/admin/settings/change-password";

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
