import React from "react";
import Head from "next/head";
import DashLayout from "../../../src/containers/admin/DashLayout";
import Workers from "../../../src/containers/admin/workers";

export default function WorkersPage() {
  return (
    <React.Fragment>
      <Head>
        <title>All Workers | Admin</title>
      </Head>
      <DashLayout>
        <Workers />
      </DashLayout>
    </React.Fragment>
  );
}
