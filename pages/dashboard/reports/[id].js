import React from "react";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import IndividualReport from "../../../src/containers/Dashboard/reports/individual";

export default function PersonalizedReportPage() {
  return (
    <React.Fragment>
      <DashLayout>
        <IndividualReport />
      </DashLayout>
    </React.Fragment>
  );
}
