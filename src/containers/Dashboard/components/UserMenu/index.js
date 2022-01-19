import React from "react";
import { MenuCard } from "./style/user-menu-styled";
import Link from "next/link";
import propTypes from "prop-types";
import { AuthContext } from "../../../../context/auth-context";
import { useRouter } from "next/router";

const menu_items = [
  { name: "My Account", path: "/dashboard/settings" },
  // { name: "Logout", path: "/" },
  // { name: "Company Account", path: "/profile/company-account" },
  // { name: "User Settings", path: "" },
  // { name: "Developer API", path: "" },
];

const UserMenu = ({ open }) => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    router.push("/");
  };

  return (
    <MenuCard open={open}>
      <ul>
        {menu_items.map((items, index) => {
          return (
            <Link href={items.path} key={index}>
              <li>{items.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className="sign-out" onClick={logout}>
        <p>Sign out</p>
      </div>
    </MenuCard>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  open: propTypes.bool.isRequired,
};
