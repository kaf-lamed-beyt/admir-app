import React from "react";
import Head from "next/head";
import axios from "axios";
import DashHeader from "../../Dashboard/components/DashHeader";
import { userEndpoints } from "../../../routes/endpoints";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import { WorkerProfile } from "./style/worker.styled";
import Button from "../../../components/Buttons";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiStatuspal } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import {
  DashboardSuccessModal,
  DashboardErrorModal,
} from "../../../components/Modals";
import { bool } from "yup";

const Worker = () => {
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    role: "",
    phoneNumber: "",
    numberOfReports: "",
    status: "",
    isGranted: bool,
  });
  const [loading, setLoading] = React.useState(false);
  const [workerAccessError, setWorkerAccessError] = React.useState();
  const [workerAccessSuccess, setWorkerAccessSuccess] = React.useState();
  const { query } = useRouter();

  // obtaining the user's unique ID with Next.js'
  // router utility method/function
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const grantWorkerAccess = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "PATCH",
        url: `${userEndpoints.grantUserAccess}${currentUserId}`,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setLoading(false);
      setWorkerAccessSuccess(data.msg);
      setWorkerAccessError("");
    } catch (error) {
      setLoading(false);
      console.log(error);
      // // const { data } = error.response;
      // setWorkerAccessError(data.msg);
      // setWorkerAccessSuccess(null);
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
          {workerAccessError ? (
            <DashboardErrorModal message={workerAccessError} />
          ) : (
            ""
          )}
          {workerAccessSuccess ? (
            <DashboardSuccessModal message={workerAccessSuccess} />
          ) : (
            ""
          )}
          <DashboardSuccessModal message={"helooooo"} />
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
          <div className="user-details-cards__actions">
            <div className="user-cards">
              <div className="card reports">
                <FaTasks />
                <p className="report">{user.numberOfReports}</p>
              </div>
              <div className="card phone-number">
                <BiPhoneCall />
                <p className="phone">{user.phoneNumber}</p>
              </div>
              <div className="card email">
                <MdOutlineAlternateEmail />
                <p className="at-sign">{user.email}</p>
              </div>
              <div className="card status">
                <SiStatuspal />
                <p className="mast">{user.status}</p>
              </div>
            </div>
            <div className="user-actions__controllers">
              {user.status === "terminated" ? (
                <Button className="terminate">
                  {user.status === "terminated" ? "Terminated" : "Terminate"}
                </Button>
              ) : (
                <Button
                  className="activate"
                  disable={user.status === "active" ? true : false}
                  onClick={grantWorkerAccess}
                >
                  Activate
                </Button>
              )}
            </div>
          </div>
        </WorkerProfile>
      )}
    </React.Fragment>
  );
};

export default Worker;
