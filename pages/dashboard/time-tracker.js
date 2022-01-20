import Head from "next/head";
import React from "react";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import TimeTracker from "../../src/containers/Dashboard/time-tracker";
import { AuthContext } from "../../src/context/auth-context";
import { useRouter } from "next/router";

export default function TimeTrackerPage() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    authContext.isUserAuthenticated() ? true : router.push("/");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | TimeTracker</title>
      </Head>
      <DashLayout>
        <TimeTracker />
      </DashLayout>
    </React.Fragment>
  );
}
