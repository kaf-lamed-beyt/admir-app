import React from "react";
import DashLayout from "../../../src/containers/admin/DashLayout";
import Worker from "../../../src/containers/admin/workers/worker";

export default function UniqueWorkerPage() {
  return (
    <React.Fragment>
      <DashLayout>
        <Worker />
      </DashLayout>
    </React.Fragment>
  );
}
