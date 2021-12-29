import React from "react";
import Link from "next/link";
import Icon from "../../../../components/Icons";
import { useRouter } from "next/router";
import { sideNavItems } from "../../../../utils/common";
import { HiMenuAlt1 } from "react-icons/hi";
import style from "./scss/sidebar.module.scss";

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <HiMenuAlt1 />
      </div>
      <aside className={!open ? style.sidebar : style.active_sidebar}>
        <div className={style.brand}>
          <Link href="/dashboard">
            <img src="/img/admir-lght.png" alt="admir technologies logo" />
          </Link>
        </div>
        <div className={style.nav_items}>
          {sideNavItems.map((item, index) => {
            return (
              <ul
                className={`${
                  router.pathname === item.path ? "active-navLink" : ""
                }`}
              >
                <Link href={item.path} key={index}>
                  <div
                    className={style.item_wrapper}
                    id={item.unique_class}
                    onClick={() => setOpen(open)}
                  >
                    <Icon name={item.icon} />
                    <li>{item.name}</li>
                  </div>
                </Link>
              </ul>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
