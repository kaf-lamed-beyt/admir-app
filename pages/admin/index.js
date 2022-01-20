import React from "react";
import Overview from "../../src/containers/admin/overview";
import Head from "next/head";
import DashLayout from "../../src/containers/Layouts/DashLayout";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/context/auth-context";

export default function AdminPage() {
  const router = useRouter();

  React.useEffect(() => {
    const role = localStorage.getItem("userRole");

    if (role === "Manager") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }

    // authContext.isAdmin() ? router.push("/admin") : router.push("/dashboard");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Admir Admin | Overview</title>
      </Head>
      <DashLayout>
        <Overview />
      </DashLayout>
    </React.Fragment>
  );
}
