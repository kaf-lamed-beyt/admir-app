import React from "react";
import { PersonalizedReport } from "../../Dashboard/components/Table";
import { user, individual_reports } from "../../../utils/table-data";
import { ReportContainer } from "../reports";
import DashHeader from "../components/DashHeader";
import Head from "next/head";
import Button from "../../../components/Buttons";
import Icon from "../../../components/Icons";
import onClickOutside from "react-onclickoutside";
import EntryCard, { ReportsEntry } from "../components/EntryCard";

export const getStaticPaths = async () => {
  const response = await fetch("same-api-endpoint");
  const data = await response.json();

  // we need a way to get the params that contains the id
  //  of each object in the data array. Using the map method of
  // javascript enables us to accomplish that.
  const staffReportPath = data.map((staffReport) => {
    return {
      params: { id: staffReport.id.toString() },
    };
  });

  return {
    paths: staffReportPath,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const reportId = context.params.id;

  const response = await fetch(`same-api-endpoint/${reportId}`);
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};

const IndividualReport = () => {
  const [open, setOpen] = React.useState(false);

  IndividualReport.handleClickOutside = () => {
    setOpen(open);
  };

  return (
    <React.Fragment>
      <Head>
        {user.map((staff) => {
          return <title>{staff.name}'s Report</title>;
        })}
      </Head>
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
          <Button
            height="44px"
            width="150px"
            fill="var(--secondary)"
            text_color="#fff"
            onClick={() => setOpen(!open)}
          >
            <p>
              {" "}
              <Icon name="plus" /> New Entry
            </p>
          </Button>
        </div>
        <ReportsEntry title="New Entry" open={open} />
        <PersonalizedReport reports={individual_reports} />
      </ReportContainer>
    </React.Fragment>
  );
};

export default IndividualReport;
