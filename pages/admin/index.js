import React from "react";
import Location from "../../src/containers/admin/location";
import Head from "next/head";
import DashLayout from "../../src/containers/admin/DashLayout";
import { useRouter } from "next/router";
import axios from "axios";
import { userEndpoints } from "../../src/routes/endpoints";
import { PulseLoader } from "react-spinners";

export default function AdminPage() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  // const authContext = React.createContext(AuthContext);

  const getCurrentData = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const { data } = response.data;
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    const role = localStorage.getItem("userRole");

    if (role === "Manager") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }

    getCurrentData();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Admir Admin | Overview</title>
      </Head>
      {data ? (
        <DashLayout>
          <Location />
        </DashLayout>
      ) : (
        <div className="loader">
          <PulseLoader color="var(--primary)" loading={loading} />
        </div>
      )}
    </React.Fragment>
  );
}
