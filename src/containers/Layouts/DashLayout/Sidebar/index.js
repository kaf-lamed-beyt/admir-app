import React from "react";
import { SidebarMenu } from "./style/sidebar.styled";
import Link from "next/link";
import Icon from "../../../../components/Icons";
import { useRouter } from "next/router";
import { sideNavItems } from "../../../../utils/common";

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      <SidebarMenu>
        <div className="brand">
          <Link href="/dashboard">
            <img src="/img/admir-lght.png" alt="admir technologies logo" />
          </Link>
        </div>
        <div className="nav-items">
          {sideNavItems.map((item, index) => {
            return (
              <ul
                className={`${
                  router.pathname === item.path ? "active-navLink" : ""
                }`}
              >
                <Link href={item.path} key={index}>
                  <div className={`item-wrapper ${item.unique_class}`}>
                    <Icon name={item.icon} />
                    <li>{item.name}</li>
                  </div>
                </Link>
              </ul>
            );
          })}
        </div>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
