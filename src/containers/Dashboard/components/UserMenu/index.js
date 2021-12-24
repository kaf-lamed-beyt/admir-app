import React from "react";
import { MenuCard } from "./style/user-menu-styled";
import Link from "next/link";
import propTypes from "prop-types";

const menu_items = [
  { name: "My Account", path: "/profile/account" },
  { name: "Company Account", path: "/profile/company-account" },
  { name: "User Settings", path: "" },
  { name: "Developer API", path: "" },
];

const UserMenu = ({ open }) => {
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
      <div className="sign-out">
        <p>Sign out</p>
      </div>
    </MenuCard>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  open: propTypes.bool.isRequired,
};
