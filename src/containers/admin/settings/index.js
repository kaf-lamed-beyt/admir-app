import React from "react";
import DashHeader from "../components/DashHeader";
import { settings_card } from "../../../utils/common";
import styled from "styled-components";
import Icon from "../../../components/Icons";
import Link from "next/link";
import { useRouter } from "next/router";

const SettingsWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: space-between;
  margin-top: 50px;

  .settings-card {
    width: 350px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(215, 87, 17, 0.1);
    padding: 15px 0 0 30px;

    .card-head {
      display: flex;

      p {
        font-size: 19px;
        line-height: 23px;
        font-weight: 400;
        text-transform: capitalize;
        margin-left: 10px;
      }
    }

    :hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: transform 0.3s ease-in;
    }

    .card-info {
      font-size: 14px;
      font-weight: 600;
      margin-top: -14px;
      color: var(--img-border);
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    flex-wrap: wrap;
    margin-top: 48px;

    .settings-card {
      width: 48%;
    }
  }
`;

const Settings = () => {
  const router = useRouter();

  const page = {
    orgs: "organization",
    maps: "maps",
    time_off: "time-off",
  };

  const handleClick = () => {
    if ((page.orgs = router.pathname)) {
      console.log("");
    }
  };

  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="Settings"
        user="Invictus Innocent"
        profile_img="/img/user.png"
      />
      <SettingsWrapper>
        {settings_card.map((items, index) => {
          return (
            <Link href={items.path}>
              <div className="settings-card" key={index}>
                <div className="card-head">
                  <Icon name={items.icon} />
                  <p>{items.name}</p>
                </div>
                <p className="card-info">{items.description}</p>
              </div>
            </Link>
          );
        })}
      </SettingsWrapper>
    </React.Fragment>
  );
};

export default Settings;
