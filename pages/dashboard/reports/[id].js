import React from "react";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import IndividualReport from "../../../src/containers/Dashboard/reports/individual";
import { Fade } from "react-awesome-reveal";

export default function PersonalizedReportPage() {
  return (
    <React.Fragment>
      <Fade>
        <DashLayout>
          <IndividualReport />
        </DashLayout>
      </Fade>
    </React.Fragment>
  );
}
