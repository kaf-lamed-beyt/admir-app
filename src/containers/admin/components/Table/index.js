import React from "react";
import propTypes from "prop-types";
import { TableWrapper } from "./style/table.styled";
import Link from "next/link";
import dayjs from "dayjs";

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
          <th>Number of Reports</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((staff) => {
          return (
            <Link href={`reports/${staff._id}`} key={staff._id}>
              <tr>
                <td>
                  <div className="table-elem-flex">
                    <img
                      src={staff.img || "/img/tom.png"}
                      className="staff-image"
                      alt="staff picture"
                    />
                    <div className="staff-name">
                      <p className="fullname">{staff.fullName}</p>
                      <p className="position">{staff.role}</p>
                    </div>
                  </div>
                </td>
                <td className="number-of-reports">{staff.numberOfReports}</td>
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
          <th>Activities</th>
          <th className="status-head">Location</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => {
          return (
            <tr key={report._id}>
              <td>
                <div className="day-date">
                  <p className="weekday">
                    {dayjs(report.createdAt).format("dddd")}
                  </p>
                  <p className="date">
                    {dayjs(report.createdAt).format("DD/MM/YY")}
                  </p>
                </div>
              </td>
              <td>
                <div className="task">
                  <p className="activities">{report.description}</p>
                </div>
              </td>
              <p className="location">{report.address}</p>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};
