import React from "react";
import DashHeader from "../../../containers/Dashboard/components/DashHeader";
import styled from "styled-components";
import { TableWrapper } from "../../Dashboard/components/Table/style/table.styled";
import Button from "../../../components/Buttons";
import axios from "axios";
import { userEndpoints } from "../../../routes/endpoints";
import dayjs from "dayjs";
import { PuffLoader } from "react-spinners";

const WorkersTable = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getAllWorkers = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: "GET",
        url: userEndpoints.createUser,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const { data } = response.data;
      setData(data);
      console.log(data);
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
        url: userEndpoints.grantUserAccess,
      };
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllWorkers();
  }, []);

  return (
    <React.Fragment>
      <TableWrapper>
        {data ? (
          <>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((staff) => {
                return (
                  <tr key={staff.key}>
                    <td className="fullname">{staff.fullName}</td>
                    <td className="email">{staff.email}</td>
                    <td className="phone">{staff.phoneNumber}</td>
                    <td className="created-at">
                      {dayjs(staff.createdAt).format("MMMM D, YYYY")}
                    </td>
                    <td className="status">
                      <Button
                        name="actvate user"
                        fill={
                          staff.isGranted === true
                            ? "var(--success)"
                            : "var(--secondary)"
                        }
                        onClick={
                          staff.isGranted === true ? null : grantWorkerAccess
                        }
                      >
                        {staff.isGranted === true ? "Activated" : "Activate"}
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <div className="table-loader">
            <PuffLoader color="var(--primary)" loading={loading} />
          </div>
        )}
      </TableWrapper>
    </React.Fragment>
  );
};

export const WorkersContainer = styled.div`
  padding-left: 0px;
  padding-right: -10px;
  margin-top: 9px;
  border-radius: 10px;
  border: 1px solid var(--position-staff);
  overflow: auto;
  height: 100%;

  table {
    .fullname {
      padding-left: 12px;
    }
  }

  .workers-title {
    p {
      font-size: 29px;
      font-weight: 500;
      padding: 18px 0 0 15px;
      text-transform: capitalize;
    }
  }
`;

const Workers = () => {
  return (
    <React.Fragment>
      <DashHeader dashboardTitle="All Workers" />
      <WorkersContainer>
        <div className="workers-title">
          <p>Employees list</p>
        </div>
        <WorkersTable />
      </WorkersContainer>
    </React.Fragment>
  );
};

export default Workers;
