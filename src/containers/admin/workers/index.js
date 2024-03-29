import React from "react";
import DashHeader from "../../../containers/Dashboard/components/DashHeader";
import styled from "styled-components";
import { TableWrapper } from "../../Dashboard/components/Table/style/table.styled";
import axios from "axios";
import { userEndpoints } from "../../../routes/endpoints";
import dayjs from "dayjs";
import { PuffLoader } from "react-spinners";
import Link from "next/link";

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
      setLoading(false);
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
        {loading ? (
          <div className="table-loader">
            <PuffLoader color="var(--primary)" loading={loading} />
          </div>
        ) : (
          <>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((staff) => {
                return (
                  <Link href={`workers/${staff._id}`} key={staff.key} passHref>
                    <tr>
                      <td className="fullname">{staff.fullName}</td>
                      <td className="email">{staff.email}</td>
                      <td className="phone">{staff.phoneNumber}</td>
                      <td className="role">{staff.role}</td>
                      <td className="created-at">
                        {dayjs(staff.createdAt).format("MMMM D, YYYY")}
                      </td>
                    </tr>
                  </Link>
                );
              })}
            </tbody>
          </>
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

    tbody {
      tr {
        td {
          height: 60px;
        }
      }
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

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    margin-top: 60px;
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
