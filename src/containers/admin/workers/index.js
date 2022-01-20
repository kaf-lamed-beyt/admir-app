import React from "react";
import DashHeader from "../../Dashboard/components/DashHeader";
import styled from "styled-components";
import { workers } from "../../../utils/table-data";
import { TableWrapper } from "../../Dashboard/components/Table/style/table.styled";
import Button from "../../../components/Buttons";

const WorkersTable = ({ workers }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((staff) => {
          return (
            <tr key={staff.key}>
              <td className="fullname">{staff.name}</td>
              <td className="email">{staff.email}</td>
              <td className="created-at">{staff.createdAt}</td>
              <td className="status">
                <Button name="actvate user" fill="var(--secondary)">
                  Activate
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export const WorkersContainer = styled.div`
  height: 60%;
  padding-left: 0px;
  padding-right: -10px;
  margin-top: 9px;
  border-radius: 10px;
  border: 1px solid var(--position-staff);
  overflow: auto;

  table {
    .fullname {
      padding-left: 12px;
    }
  }

  .workers-title {
    p {
      font-size: 40px;
      font-weight: 600;
      padding: 18px 0 0 15px;
      text-transform: capitalize;
    }
  }
`;

const Workers = () => {
  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="All Workers"
        user="Invictus Innocent"
        profile_img="/img/user.png"
      />
      <WorkersContainer>
        <div className="workers-title">
          <p>Employees list</p>
        </div>
        <WorkersTable workers={workers} />
      </WorkersContainer>
    </React.Fragment>
  );
};

export default Workers;
