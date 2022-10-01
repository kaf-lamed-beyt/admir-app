import React from "react";
import Head from "next/head";
// import DashLayout from "../../../src/containers/admin/DashLayout";
// import Workers from "../../../src/containers/admin/workers";
import Workers from "@adminRoutes/";
import DashLayout from "@adminLayout";
import { routes } from "@routes";
const { workers: Workers } = routes;

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
