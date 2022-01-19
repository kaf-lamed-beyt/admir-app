import React from "react";
import Overview from "../../src/containers/admin/overview";
import Head from "next/head";
import DashLayout from "../../src/containers/Layouts/DashLayout";

export default function AdminPage() {
  return (
    <React.Fragment>
      <Head>Admir Admin | Overview</Head>
      <DashLayout>
        <Overview />
      </DashLayout>
    </React.Fragment>
  );
}
