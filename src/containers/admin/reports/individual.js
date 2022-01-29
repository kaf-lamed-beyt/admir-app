import React from "react";
import { PersonalizedReport } from "../../Dashboard/components/Table";
import { user, individual_reports } from "../../../utils/table-data";
import { ReportContainer } from "../reports";
import DashHeader from "../../Dashboard/components/DashHeader";
import Head from "next/head";

export const getStaticProps = async (context) => {
  const reportId = context.params.id;

  const response = await axios({
    method: "GET",
  });
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};

const IndividualReport = () => {
  return (
    <React.Fragment>
      <Head>
        {user.map((staff) => {
          return <title>{staff.name}'s Report</title>;
        })}
      </Head>
      <DashHeader dashboardTitle="Daily Employee Reports" />
      <ReportContainer>
        <div className="table-title">
          {user.map((staff) => {
            return (
              <div className="table-elem-flex" key={staff.key}>
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
            );
          })}
        </div>
        <PersonalizedReport reports={individual_reports} />
      </ReportContainer>
    </React.Fragment>
  );
};

export default IndividualReport;
