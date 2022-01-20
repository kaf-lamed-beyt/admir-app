import React from "react";
import Link from "next/link";
import Icon from "../../../../components/Icons";
import { useRouter } from "next/router";
import { sideNavItems, adminNavItems } from "../../../../utils/common";
import { HiMenuAlt1 } from "react-icons/hi";
import style from "./scss/sidebar.module.scss";
import { AuthContext } from "../../../../context/auth-context";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { userEndpoints } from "../../../../routes/endpoints";

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    role: "",
  });

  const getCurrentUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      setCurrentUser(response.data.role);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <HiMenuAlt1 />
      </div>
      <aside className={!open ? style.sidebar : style.active_sidebar}>
        <AiOutlineClose
          className={style.close}
          onClick={() => setOpen(!open)}
        />
        <div className={style.brand}>
          <Link href="/dashboard">
            <img src="/img/admir-lght.png" alt="admir technologies logo" />
          </Link>
        </div>
        <div className={style.nav_items}>
          {currentUser === "Manager"
            ? adminNavItems.map((item, index) => {
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
              })
            : sideNavItems.map((item, index) => {
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
