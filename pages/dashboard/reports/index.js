import Head from "next/head";
import React from "react";
import DashLayout from "../../../src/containers/Layouts/DashLayout";
import Reports from "../../../src/containers/Dashboard/reports";
import { AuthContext } from "../../../src/context/auth-context";
import { useRouter } from "next/router";

export default function ReportsPage() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  // React.useEffect(() => {
  //   authContext.isUserAuthenticated()
  //     ? router.push("/dashboard/reports")
  //     : router.push("/");
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Reports</title>
      </Head>
      <DashLayout>
        <Reports />
      </DashLayout>
    </React.Fragment>
  );
}
