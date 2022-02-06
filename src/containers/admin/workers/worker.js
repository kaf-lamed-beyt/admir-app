import React from "react";
import Head from "next/head";
import axios from "axios";
import DashHeader from "../../Dashboard/components/DashHeader";
import { userEndpoints } from "../../../routes/endpoints";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import { WorkerProfile } from "./style/worker.styled";

const Worker = () => {
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    role: "",
    phoneNumber: "",
    numberOfReports: "",
  });
  const [loading, setLoading] = React.useState(false);
  const { query } = useRouter();

  const currentUserId = query.id;

  const getUniqueUser = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: `${userEndpoints.getStaffByAdmin}${currentUserId}`,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setUser(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const grantWorkerAccess = async () => {
    try {
      setLoading(true);

      const response = await {
        method: "PATCH",
        url: `${userEndpoints.grantUserAccess}`,
      };
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUniqueUser();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>
          {`${user.fullName}'s Profile | Admir Technologies` ||
            "Admir Technologies"}
        </title>
      </Head>
      <DashHeader dashboardTitle={`Employee Profile`} />
      {loading ? (
        <div className="table-loader-unique">
          <PuffLoader color="var(--primary)" />
        </div>
      ) : (
        <WorkerProfile>
          <div className="user-info">
            <div className="user-img-container">
              <img
                src="/img/tom.png"
                alt={`${user.fullName}'s profile picture`}
              />
            </div>
            <div className="user-details">
              <p className="fullname">{user.fullName}</p>
              <p className="role">{user.role}</p>
            </div>
          </div>
        </WorkerProfile>
      )}
    </React.Fragment>
  );
};

export default Worker;
