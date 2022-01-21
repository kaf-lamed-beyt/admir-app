import React from "react";
import DashLayout from "../../../src/containers/admin/DashLayout";
import IndividualReport from "../../../src/containers/admin/reports/individual";

export default function PersonalizedReportPage() {
  return (
    <React.Fragment>
      <DashLayout>
        <IndividualReport />
      </DashLayout>
    </React.Fragment>
  );
}
