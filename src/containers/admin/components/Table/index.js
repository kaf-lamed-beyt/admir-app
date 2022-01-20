import React from "react";
import propTypes from "prop-types";
import { TableWrapper } from "./style/table.styled";
import Link from "next/link";
import Button from "../../../../components/Buttons";

const Table = ({ employees }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Staff details</th>
          <th>Clock-in Time</th>
          <th>Clock-out Time</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((staff) => {
          return (
            <tr key={staff.key}>
              <td>
                <div className="table-elem-flex">
                  <img
                    src={staff.profile_img}
                    className="staff-image"
                    alt="staff picture"
                  />
                  <div className="staff-name">
                    <p className="fullname">{staff.name}</p>
                    <p className="position">{staff.position}</p>
                  </div>
                </div>
              </td>
              <td>{staff.timeIn}</td>
              <td>{staff.timeOut}</td>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;

Table.propTypes = {
  employees: propTypes.array.isRequired,
};

// employees report table
export const ReportTable = ({ reports }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Staff details</th>
          <th>Activities and Location</th>
          <th className="status-head">Status</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((staff) => {
          return (
            <Link href={`reports/${staff.key}`} key={staff.key}>
              <tr>
                <td>
                  <div className="table-elem-flex">
                    <img
                      src={staff.profile_img}
                      className="staff-image"
                      alt="staff picture"
                    />
                    <div className="staff-name">
                      <p className="fullname">{staff.name}</p>
                      <p className="position">{staff.position}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="task">
                    <p className="activities">{staff.task.activity}</p>
                    <p className="location">{staff.task.location}</p>
                  </div>
                </td>
                <td className="status">{staff.status}</td>
              </tr>
            </Link>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

ReportTable.propTypes = {
  reports: propTypes.array.isRequired,
};

// personalized staff report table
export const PersonalizedReport = ({ reports }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Day/Date</th>
          <th>Activities and Location</th>
          <th className="status-head">Status</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((staff) => {
          return (
            <tr key={staff.key}>
              <td>
                <div className="day-date">
                  <p className="weekday">{staff.day}</p>
                  <p className="date">{staff.date}</p>
                </div>
              </td>
              <td>
                <div className="task">
                  <p className="activities">{staff.task.activity}</p>
                  <p className="location">{staff.task.location}</p>
                </div>
              </td>
              <td className="status">{staff.status}</td>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};
