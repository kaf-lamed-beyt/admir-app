import Head from "next/head";
import React from "react";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
// import Reports from "@dashboardRoutes/reports";
import { routes } from "@routes";
const { reports: Reports } = routes;
import { Fade } from "react-awesome-reveal";

export default function ReportsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Reports</title>
      </Head>
      <Fade>
        <DashLayout>
          <Reports />
        </DashLayout>
      </Fade>
    </React.Fragment>
  );
}
